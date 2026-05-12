"use client";
import { useSearchParams } from "next/navigation";
import FloorPlan from "./_components/FloorPlan";
import WorkerTasksModal from "./_components/WorkerTasksModal";
export default function Dashboard() {
  const params = useSearchParams();
  const editId = params.get("edit");
  const settingsId = params.get("settings");
  const tasks = params.get("tasks");
  console.log(editId);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FloorPlan />
      {tasks && <WorkerTasksModal />}

    </div>
  );
}

