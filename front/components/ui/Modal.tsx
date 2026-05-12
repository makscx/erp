import { useClearQuery } from "@/lib/useClearQuery";
export default function Modal({ children }: { children: React.ReactNode }) {
    const clearQuery = useClearQuery();
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 cursor-pointer" onClick={clearQuery}>
            <div className="bg-white p-6 min-h-[400px] min-w-100 flex flex-col gap-3 cursor-default"
                onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}