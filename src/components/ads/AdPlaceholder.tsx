"use client";

import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
    className?: string;
    label?: string;
}

export function AdPlaceholder({ className, label = "Advertisement" }: AdPlaceholderProps) {
    return (
        <div className={cn("w-full py-4", className)}>
            <div className="flex h-[100px] w-full items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 text-sm text-muted-foreground">
                {label}
            </div>
        </div>
    );
}
