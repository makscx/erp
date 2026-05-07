export type Status = "urgent" | "inProcess" | "completed";

export type Task = {
    id: number;
    name: string;
    count: number;
    status: Status;
};