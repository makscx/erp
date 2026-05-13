import type { Worker } from "@/types/worker";
import Link from "next/link";

export default function WorkerCard({ worker }: { worker: Worker }) {
    return (
        <>
            <Link href={`/dashboard?tasks=${worker.id}`}>
                <div
                    className="absolute top-0 left-0 border border-gray-300
                           flex items-center justify-center cursor-pointer hover:bg-gray-50 p-[5px]"
                >
                    <div className="text-[11px] tracking-widest uppercase text-gray-400 font-light">
                        {worker.name}
                    </div>
                </div>
            </Link>
        </>
    );
}
