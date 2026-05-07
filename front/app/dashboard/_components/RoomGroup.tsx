import { cn } from "@/lib/utils";

export default function RoomGroup({
    col, right, children,
}: {
    col?: boolean;
    right?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className={cn(
            "flex gap-[5px]",
            col && "flex-col",
            right && "justify-end",
        )}>
            {children}
        </div>
    );
}