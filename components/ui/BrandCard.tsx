import Image from "next/image";
import { cn } from "@/lib/utils";

export interface BrandCardProps {
    name: string;
    description: string;
    logo: string;
    isPrimary?: boolean;
    className?: string;
    headingClassName?: string;
}

export default function BrandCard({
    name,
    description,
    logo,
    isPrimary = false,
    className,
    headingClassName,
}: BrandCardProps) {
    return (
        <div
            className={cn(
                isPrimary ? "bg-primary text-white" : "bg-white text-primary",
                "flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 px-10 py-14 rounded-[24px] w-full",
                className,
            )}
        >
            <figure className="relative w-35 xl:w-45 h-35 xl:h-45 shrink-0 flex items-center justify-center p-4 rounded-full">
                <Image
                    src={logo}
                    alt={name}
                    fill
                    sizes="(min-width: 1280px) 180px, 140px"
                    className="object-contain rounded-full p-4"
                />
            </figure>

            <div className="text-center sm:text-left">
                <h2
                    className={cn(
                        "text-xl xl:text-2xl font-bold mb-3",
                        headingClassName,
                    )}
                >
                    {name}
                </h2>
                <p className="text-base xl:text-xl leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
