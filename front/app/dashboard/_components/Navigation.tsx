export function Navigation({ tabs }: { tabs: string[] }) {
    return (
        <nav className="flex items-center justify-center gap-6 pt-5 pb-2">
            {tabs.map((tab, i) => (
                <button
                    key={tab}
                    className={
                        i === 0
                            ? "text-sm px-4 py-[5px] rounded-full border border-gray-400 text-gray-800 font-medium"
                            : "text-sm text-gray-500 cursor-pointer hover:text-gray-700"
                    }
                >
                    {tab}
                </button>
            ))}
        </nav>
    );
}