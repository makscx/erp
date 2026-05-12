export type Status = "urgent" | "inProcess" | "completed";

export type Task = {
    id: string;
    title: string;
    status: string;
};