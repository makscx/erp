"use client"

import type { Worker } from "@/types/worker";
import TaskForm from "./TaskForm";
import { useState } from "react";
import Link from "next/link";
import TaskItem from "@/components/ui/tasks/TaskItem";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Task } from "@/types/task";
import Modal from "@/components/ui/Modal";
import { useClearQuery } from "@/lib/useClearQuery";

export default function WorkerTasksModal() {
    const params = useSearchParams();
    const worker = params.get("worker");
    const id = params.get("tasks");
    const clearQuery = useClearQuery();
    const { data: tasks, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4200/tasks/user/${id}`);
            if (!res.ok) throw new Error('Failed to fetch tasks');
            return res.json();
        },
    });
    console.log(tasks)


    return (
        <Modal>
            <div className="flex justify-between">
                <h2 className="font-[550] text-xl">{worker}</h2>
                <div className="flex gap-2">

                    <Link href={`/dashboard?state=create-task`}>
                        <Button variant="secondary" size="icon">+</Button>
                    </Link>

                    <Button variant="secondary" size="icon" onClick={clearQuery}>&#10005;</Button>

                </div>
            </div>
            {tasks?.map((task: any) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </Modal>
    );
}
