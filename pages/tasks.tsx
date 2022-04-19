import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/config/firebase.config";
import TaskClass from "../src/Models/TaskClass";

function Tasks() {
    const [dataSnap, setDataSnap] = useState<TaskClass[]>([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const ref = collection(db, "tasks");
        getDocs(ref).then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                const { title, description, isDone, created_at, updated_at } = doc.data();
                const task = new TaskClass(doc.id, title, description, isDone, created_at, updated_at)
                setDataSnap(oldArray => [...oldArray, task]);
            });
        });

    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            <h1>My tasks</h1>
            {dataSnap.map((item, key) => <div key={key}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{JSON.stringify(item.created_at)}</p>
                <p>{item.isDone}</p>
            </div>)}
        </>
    )
}

export default Tasks

