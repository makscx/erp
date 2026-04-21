import Link from "next/link"

export default async function Page({
    params,
}: {
    params: Promise<{ taskId: string }>
}) {
    const { taskId } = await params

    return (
        <div className="min-swh-screen bg-white flex flex-col gap-10 p-5 pt-10">
            <div className=" text-[16px] text-gray-800">
                <Link className="text-[20px]" href="/tasks">←</Link>
            </div>
            <div>
                <div className="text-[32px] leading-[100%] text-gray-800">
                    Набір “Щенячий патруль хлопці”
                </div>
            </div>
        </div>
    )
}