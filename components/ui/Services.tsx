import Container from "./Container";
import NumberedListItem from "./NumberedListItem";
import { cn } from "@/lib/utils";

export interface ServiceData {
    title: string;
    description: string;
}

export interface ServicesProps {
    title: string;
    highlightTitle: string;
    services: ServiceData[];
    theme?: "light" | "dark";
    className?: string;
    children?: React.ReactNode;
}

export default function Services({
    title,
    highlightTitle,
    services,
    theme = "light",
    className,
    children,
}: ServicesProps) {
    const isDark = theme === "dark";

    return (
        <section
            className={cn(
                "relative w-full h-full",
                isDark
                    ? "bg-[#01223F] text-white"
                    : "text-primary bg-transparent",
                className,
            )}
        >
            <Container className="relative z-10 pb-32 ">
                <h1 className="text-2xl xl:text-default-32 mb-8">
                    {title} <span className="font-bold">{highlightTitle}</span>
                </h1>
                <ul className="flex flex-wrap gap-x-6 gap-y-12 text-left mt-8">
                    {services.map((service, index) => (
                        <NumberedListItem
                            key={index}
                            number={index + 1}
                            title={service.title}
                            description={service.description}
                            className="w-full md:w-[calc(50%-12px)]"
                            numberBoxClassName={cn(
                                "w-14 h-14",
                                isDark
                                    ? "bg-white text-primary"
                                    : "bg-primary text-white",
                            )}
                        />
                    ))}
                </ul>
            </Container>
            {/* Background elements like wave SVG can be inserted via children */}
            {children}
        </section>
    );
}
