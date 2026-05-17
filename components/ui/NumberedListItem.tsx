import React from "react";
import { twMerge } from "tailwind-merge";

export interface NumberedListItemProps {
    number: number | string;
    title?: React.ReactNode;
    description: React.ReactNode;
    className?: string;
    numberBoxClassName?: string;
}

export default function NumberedListItem({
    number,
    title,
    description,
    className = "",
    numberBoxClassName = "",
}: NumberedListItemProps) {
    return (
        <li className={twMerge("flex gap-4 items-start", className)}>
            <div
                className={twMerge(
                    "bg-primary text-white rounded-md w-12 h-12 flex-shrink-0 flex items-center justify-center text-xl lg:text-2xl font-bold",
                    numberBoxClassName
                )}
            >
                {number}.
            </div>
            <div className="text-lg">
                {title &&
                    (typeof title === "string" ? (
                        <h3 className="font-bold text-xl lg:text-2xl mb-1">{title}</h3>
                    ) : (
                        title
                    ))}
                {typeof description === "string" ? (
                    <p className="text-lg lg:text-xl leading-relaxed">{description}</p>
                ) : (
                    description
                )}
            </div>
        </li>
    );
}
