import TaskItem from "./_components/TaskItem";

export default function Tasks() {
    return (
        <div className="min-swh-screen bg-white flex flex-col gap-10 p-5 pt-10">
            <div className=" text-[20px] text-gray-800">
                Зароблено за сьогодні: 1372грн
            </div>
            <div>
                <div className="text-[40px] text-gray-800">
                    Список завдань
                </div>
                <div>
                    <TaskItem />
                </div>
            </div>
        </div>
    );
}

