import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({
    children,
    className = "",
}: ContainerProps) {
    return (
        <div className={cn("w-full max-w-7xl mx-auto px-8", className)}>
            {children}
        </div>
    );
}
