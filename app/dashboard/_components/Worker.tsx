"use client";
import { useState } from "react";
import type { Worker } from "@/types/worker";
import WorkerModal from "./WorkerModal";
import Link from "next/link";

export default function Worker({ worker }: { worker: Worker }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Link href="/dashboard?state=info">
                <div
                    className="absolute top-0 left-0 border border-gray-300
                           flex items-center justify-center cursor-pointer hover:bg-gray-50 p-[5px]"
                // onClick={() => setOpen(true)}
                >
                    <div className="text-[11px] tracking-widest uppercase text-gray-400 font-light">
                        {worker.name}
                    </div>
                </div>
            </Link>

            <WorkerModal worker={worker} onClose={() => setOpen(false)} />
            {/* {open && <WorkerModal worker={worker} onClose={() => setOpen(false)} />} */}
        </>
    );
}
