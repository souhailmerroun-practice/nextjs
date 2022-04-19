class TaskClass {
    id: string;
    title: string;
    description: string;
    isDone: boolean;
    created_at: Date;
    updated_at: Date;

    constructor(id: string, title: string, description: string, isDone: boolean, created_at: Date, updated_at: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

export default TaskClass;