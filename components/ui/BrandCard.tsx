import { twMerge } from "tailwind-merge";

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
            className={twMerge(
                isPrimary ? "bg-primary text-white" : "bg-white text-primary",
                "flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 px-10 py-14 rounded-[24px] w-full lg:w-3/6",
                className,
            )}
        >
            <figure className="w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] shrink-0 flex items-center justify-center">
                <img
                    src={logo}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </figure>

            <div className="text-center sm:text-left">
                <h2
                    className={twMerge(
                        "text-2xl font-bold mb-3",
                        headingClassName,
                    )}
                >
                    {name}
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
