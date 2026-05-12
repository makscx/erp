"use client";

import { useRouter, usePathname } from "next/navigation";

export function useClearQuery() {
    const router = useRouter();
    const pathname = usePathname();

    const clearQuery = () => {
        router.push(pathname);
    };

    return clearQuery;
}