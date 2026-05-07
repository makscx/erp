import { Status, Task } from "@/types/task";

const STATUS_CONFIG: Record<Status, { color: string; text: string }> = {
    urgent: { color: "bg-red-500", text: "Терміново!" },
    inProcess: { color: "bg-yellow-500", text: "В процесі" },
    completed: { color: "bg-gray-200", text: "Виконано" },
};

export default function TaskItem({ task }: { task: Task }) {
    return (
        <div className="text-[16px] text-gray-800 border-b border-gray-200 py-2">
            <div className="flex w-full justify-between gap-5">
                <div className={`${task.status === "completed" ? "line-through text-gray-300" : ""}`}>
                    {task.name}
                </div>
                <div className={`${task.status === "completed" ? "line-through text-gray-300" : ""}`}>
                    {task.count} Шт
                </div>
            </div>
            <div className={`flex items-center gap-1 text-[14px] ${task.status === "completed" ? "text-gray-300" : "text-gray-500"}`}>
                <div className={`w-4 h-2 ${STATUS_CONFIG[task.status].color} rounded-full `}></div>
                {STATUS_CONFIG[task.status].text}
            </div>
        </div>
    );
}