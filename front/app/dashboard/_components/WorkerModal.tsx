import type { Worker } from "@/types/worker";
import TaskForm from "./TaskForm";
import { useState } from "react";
import { data } from "@/lib/mock/data";
import Link from "next/link";
import TaskItem from "@/components/ui/tasks/TaskItem";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";

export default function WorkerModal({
    worker,
    onClose,
}: {
    worker: Worker;
    onClose: () => void;
}) {
    const [isSuccess, setIsSuccess] = useState(false);
    const params = useSearchParams();

    const state = params.get("state");

    if (!state) return null;

    const handleClick = (e: React.MouseEvent) => {
        onClose();
    };
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
            onClick={handleClick}>
            <div className="bg-white p-6 min-h-[400px] min-w-100 flex flex-col gap-3"
                onClick={e => e.stopPropagation()}>
                <div className="flex justify-between">
                    <h2 className="font-[550] text-xl">{worker.name}</h2>
                    <div className="flex gap-2">

                        {state !== "create-task" && (
                            <Link href={`/dashboard?state=create-task`}>
                                <Button variant="secondary" size="icon">+</Button>
                            </Link>
                        )}
                        <Link href="/dashboard">
                            <Button variant="secondary" size="icon">&#10005;</Button>
                        </Link>
                    </div>
                </div>
                {state === "create-task" && <TaskForm onClose={onClose} setIsSuccess={setIsSuccess} />}
                {state === "info" &&
                    data.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    );
}
