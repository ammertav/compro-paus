import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={twMerge("w-full max-w-7xl mx-auto px-8", className)}>
            {children}
        </div>
    );
}
