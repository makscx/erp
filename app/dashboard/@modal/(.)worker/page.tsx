import { Button } from "@/components/ui/Button";
import TaskItem from "@/components/ui/tasks/TaskItem";
import { data } from "@/lib/mock/data";

export default function WorkerPage() {

    return (

        <div>
            <div className="flex justify-between">
                <h2 className="font-[550] text-xl">Галина</h2>
                <div className="flex gap-2">
                    <Button variant="secondary" size="icon">+</Button>
                    <Button variant="secondary" size="icon">&#10005;</Button>
                </div>
            </div>
            {
                data.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))
            }
        </div>
    );
}
