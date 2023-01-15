
export type taskType = {
    task: {
        id: number;
        priority: priorityType;
        title: string;
        due_date: string;
        completed: boolean;
    };
    handleDelete: (id: number) => void;
};

export type priorityType = "low" | "medium" | "high"