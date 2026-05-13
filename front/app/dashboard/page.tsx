"use client";
import { useSearchParams } from "next/navigation";
import FloorPlan from "./_components/FloorPlan/FloorPlan";
import WorkerTasksModal from "./_components/WorkerTasksModal";
import WorkerSettingsModal from "./_components/WorkerSettingsModal";
export default function Dashboard() {
  const params = useSearchParams();
  const editTask = params.get("editTask");
  const settings = params.get("settings");
  const tasks = params.get("tasks");
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <FloorPlan />
      {tasks && <WorkerTasksModal />}
      {settings && <WorkerSettingsModal />}

    </div>
  );
}

