import Container from "../ui/Container";
import BrandCard from "../ui/BrandCard";

const brands = [
    {
        name: "Ammertav",
        description:
            "Menyediakan solusi teknologi yang terintegrasi guna meningkatkan efektivitas operasional dan efisiensi bisnis",
        logo: "/images/brand-ammertav.png",
    },
    {
        name: "INK.Creative",
        description:
            "Membantu brand dalam membangun identitas yang kuat, konsisten, dan relevan di ranah digital melalui pendekatan kreatif dan strategis",
        logo: "/images/brand-ink-creative.png",
    },
];

export default function OurBrands() {
    return (
        <section
            id="brands"
            className="text-primary pb-12 xl:pb-48 relative scroll-mt-32 w-full h-full"
        >
            <Container>
                <div className="text-2xl xl:text-default-32">
                    <h1 className="text-left text-primary">
                        Our <span className="font-bold">Brands</span>
                    </h1>
                    <h1 className="font-semibold">
                        Trusted brands that define our quality
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 mt-10">
                    {brands.map((brand, i) => (
                        <BrandCard
                            key={i}
                            name={brand.name}
                            description={brand.description}
                            logo={brand.logo}
                            isPrimary={i % 2 === 0}
                        />
                    ))}
                </div>
            </Container>

            <div className="absolute -left-16 -top-18 -translate-y-2/10 z-50">
                <img
                    src="/images/logo-paus-black-logo-3.png"
                    alt="Visi Misi Background"
                    className="w-full h-full object-contain"
                />
            </div>
        </section>
    );
}
