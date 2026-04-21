import Link from "next/link";

const STATUS_CONFIG = {
    urgent: { color: "bg-red-500", text: "Терміново!" },
    inProcess: { color: "bg-yellow-500", text: "В процесі" },
    completed: { color: "bg-gray-200", text: "Виконано" },
} as const;
export type Status = keyof typeof STATUS_CONFIG;

export default function TaskItem({ task, id }: { task: { id: number; name: string; count: number; status: Status }, id: number }) {
    return (
        <Link href={`/tasks/${id}`}>
            <div className="text-[16px] text-gray-800 border-b border-gray-200 py-2">
                <div className="flex w-full justify-between">
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
        </Link>
    );
}