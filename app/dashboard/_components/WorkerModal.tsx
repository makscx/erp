import type { Worker } from "@/types";
import TaskForm from "./TaskForm";
import { useState } from "react";

export default function WorkerModal({
    worker,
    onClose,
}: {
    worker: Worker;
    onClose: () => void;
}) {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        const selection = window.getSelection();

        if (selection && selection.toString().length > 0) {
            return;
        }

        onClose();
    };
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
            onClick={handleClick}>
            <div className="bg-white p-6 min-w-64 flex flex-col gap-3"
                onClick={e => e.stopPropagation()}>
                <div className="flex justify-between">
                    <h2 className="font-[550] text-xl">{worker.name}</h2>
                    <button className="cursor-pointer font-bold" onClick={onClose}>&#10005;</button>
                </div>
                {!isSuccess ? <TaskForm onClose={onClose} setIsSuccess={setIsSuccess} /> : <p>Задача додана</p>}
            </div>
        </div>
    );
}
