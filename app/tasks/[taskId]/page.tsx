import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default async function Page({
    params,
}: {
    params: Promise<{ taskId: string }>
}) {
    const { taskId } = await params

    return (
        <div className="min-swh-screen bg-white flex flex-col gap-10 p-5 pt-10">
            <div className="flex flex-col gap-10">
                <div className=" text-[16px] text-gray-800">
                    <Link className="text-[20px]" href="/tasks">←</Link>
                </div>
                <div>
                    <div className="text-[32px] leading-[100%] text-gray-800">
                        Набір “Щенячий патруль хлопці”
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex w-full justify-between px-8 items-center">
                    <div className="text-[24px] rounded-full border border-gray-500 w-[36px] h-[36px] flex justify-center items-center">-</div>
                    <div className="flex text-[32px]"><div>30</div>/30 Шт</div>
                    <div className="text-[24px] rounded-full border border-gray-500 w-[36px] h-[36px] flex justify-center items-center">+</div>
                </div>
                <div className="flex items-center">
                    Більше ⌵
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Button>Завершити завдання</Button>
                <Button variant="secondary">Проблеми з завданням</Button>
            </div>
        </div>
    )
}