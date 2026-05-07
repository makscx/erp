"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskFormValues } from "@/lib/schemas/task";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
// import { createTask } from "@/app/api/task";

function TaskForm({ setIsSuccess, onClose }: { setIsSuccess: (value: boolean) => void; onClose: () => void }) {

    const { register, handleSubmit, formState: { errors } } = useForm<TaskFormValues>({
        resolver: zodResolver(taskSchema),
    });

    const onSubmit = (data: TaskFormValues) => {
        console.log("FORM DATA:", data);

        setIsSuccess(true);

        // setTimeout(() => {
        //     onClose(); 
        // }, 1200);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Input error={errors.title?.message} {...register("title")} placeholder="Введіть назву задачі" />

            <Button type="submit">
                Створити задачу
            </Button>
        </form>
    );
}

export default TaskForm;