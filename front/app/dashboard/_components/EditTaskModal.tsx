"use client"
import Link from "next/link";
import TaskItem from "@/components/ui/tasks/TaskItem";
import { Button } from "@/components/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Task } from "@/types/task";
import Modal from "@/components/ui/Modal";
import { useClearQuery } from "@/lib/useClearQuery";

export default function EditTaskModal() {
    const params = useSearchParams();
    const id = params.get("editTask");
    const router = useRouter();
    const clearQuery = useClearQuery();

    const { data: task, isLoading } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4200/tasks/user/${id}`);
            if (!res.ok) throw new Error('Failed to fetch tasks');
            return res.json();
        },
    });

    return (
        <Modal>
            <div className="flex justify-between">
                <h2 className="font-[550] text-xl">{task?.user?.name}</h2>
                <div className="flex gap-2">

                    <Button variant="secondary" size="icon" onClick={() => router.back()}>&lt;</Button>
                    <Button variant="secondary" size="icon" onClick={clearQuery}>&#10005;</Button>

                </div>
            </div>
        </Modal>
    );
}
