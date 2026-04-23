export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white p-6 min-h-[400px] min-w-64 flex flex-col gap-3">
                {children}
            </div>
        </div>
    );
}