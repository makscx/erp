import { z } from "zod";

export const taskSchema = z.object({
    title: z.string().min(3, "Мінімум 3 символи"),
    // description: z.string().min(10, "Мінімум 10 символів"),
    // assigneeId: z.string().uuid("Невалідний ID"),
    // dueDate: z.string().optional(),
    // status: z.enum(["Pending", "Completed"]),
});

export type TaskFormValues = z.infer<typeof taskSchema>;