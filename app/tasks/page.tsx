import TaskItem, { type Status } from "./_components/TaskItem";

const data: { id: number; name: string; count: number; status: Status }[] = [
    {
        id: 1,
        name: "Набір \"Щенячий патруль хлопці\"",
        count: 25,
        status: "inProcess"
    },
    {
        id: 2,
        name: "Набір \"Бравл Старс\"",
        count: 20,
        status: "completed"
    },
    {
        id: 3,
        name: "Набір \"Майнкрафт\"",
        count: 18,
        status: "urgent"
    },

]

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
                        <TaskItem key={task.id} task={task} id={task.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

