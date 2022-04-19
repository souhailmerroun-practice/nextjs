import router, { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { AuthContext } from "../src/context/AuthContext";

function PageProtection({ children }) {
    const router = useRouter();
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user) {
            router.push("/tasks")
        }

        router.push("/login");
    }, [])

    return children;
}

export default PageProtection;