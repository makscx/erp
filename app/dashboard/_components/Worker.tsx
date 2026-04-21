"use client";
import { useState } from "react";
import type { Worker } from "@/types";
import WorkerModal from "./WorkerModal";

export default function Worker({ worker }: { worker: Worker }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className="absolute top-0 left-0 border border-gray-300
                           flex items-center justify-center cursor-pointer hover:bg-gray-50 p-[5px]"
                onClick={() => setOpen(true)}
            >
                <span className="text-[11px] tracking-widest uppercase text-gray-400 font-light">
                    {worker.name}
                </span>
            </div>

            {open && <WorkerModal worker={worker} onClose={() => setOpen(false)} />}
        </>
    );
}
