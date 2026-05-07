import type { Worker as WorkerType } from "@/types/worker";
import Worker from "./Worker";

export default function Room({
    w, h, label, workers,
}: {
    w: number;
    h: number;
    label: string;
    workers?: WorkerType[];
}) {
    return (
        <div
            className="relative border border-gray-300 flex items-center justify-center"
            style={{ width: w, height: h }}
        >
            {workers && (
                <>
                    {workers.map((worker) => (
                        <Worker key={worker.id} worker={worker} />
                    ))}
                </>
            )}
            <span className="text-[11px] tracking-widest uppercase text-gray-400 font-light select-none">
                {label}
            </span>
        </div>
    );
}