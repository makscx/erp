
import Link from "next/link";
import TaskItem from "../../components/ui/tasks/TaskItem";
import { data } from "@/lib/mock/data";


export default function Tasks() {
    return (
        <div className="min-swh-screen bg-white flex flex-col gap-10 p-5 pt-10">
            <div className=" text-[16px] text-gray-800">
                Зароблено за сьогодні: 1373грн
            </div>
            <div>
                <div className="text-[40px] text-gray-800">
                    Список завдань
                </div>
                <div>
                    {data.map((task) => (
                        <Link key={task.id} href={`/tasks/${task.id}`}>
                            <TaskItem task={task} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

