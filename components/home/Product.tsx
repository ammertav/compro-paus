import BrandCard from "../ui/BrandCard";
import Container from "../ui/Container";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "../ui/Carousel";

const dummyProducts = [
    {
        name: "Beilpos",
        description:
            "Beilpos merupakan solusi Point of Sale (POS) yang membantu bisnis mengatasi pencatatan manual, keterbatasan kontrol kasir, serta pengelolaan stok dan multi-cabang. Dengan sistem terintegrasi, operasional bisnis menjadi lebih efisien dan terkontrol.",
        logo: "/images/logo-brand-beil.png",
        isPrimary: false,
        fitur: [
            "Sistem POS real-time untuk pencatatan transaksi yang akurat dan terpusat",
            "Manajemen inventori terintegrasi untuk kontrol stok yang lebih optimal",
            "Dashboard terpusat untuk pengelolaan multi-cabang secara efisien",
            "Sistem yang fleksibel dan dapat disesuaikan dengan kebutuhan bisnis",
            "Fitur pemesanan berbasis barcode untuk mempercepat layanan dan mengurangi beban operasional",
        ],
    },
    {
        name: "Beilpos",
        description:
            "Beilpos merupakan solusi Point of Sale (POS) yang membantu bisnis mengatasi pencatatan manual, keterbatasan kontrol kasir, serta pengelolaan stok dan multi-cabang. Dengan sistem terintegrasi, operasional bisnis menjadi lebih efisien dan terkontrol.",
        logo: "/images/logo-brand-beil.png",
        isPrimary: false,
        fitur: [
            "Sistem POS real-time untuk pencatatan transaksi yang akurat dan terpusat",
            "Manajemen inventori terintegrasi untuk kontrol stok yang lebih optimal",
            "Dashboard terpusat untuk pengelolaan multi-cabang secara efisien",
            "Sistem yang fleksibel dan dapat disesuaikan dengan kebutuhan bisnis",
            "Fitur pemesanan berbasis barcode untuk mempercepat layanan dan mengurangi beban operasional",
        ],
    },
    {
        name: "Beilpos",
        description:
            "Beilpos merupakan solusi Point of Sale (POS) yang membantu bisnis mengatasi pencatatan manual, keterbatasan kontrol kasir, serta pengelolaan stok dan multi-cabang. Dengan sistem terintegrasi, operasional bisnis menjadi lebih efisien dan terkontrol.",
        logo: "/images/logo-brand-beil.png",
        isPrimary: false,
        fitur: [
            "Sistem POS real-time untuk pencatatan transaksi yang akurat dan terpusat",
            "Manajemen inventori terintegrasi untuk kontrol stok yang lebih optimal",
            "Dashboard terpusat untuk pengelolaan multi-cabang secara efisien",
            "Sistem yang fleksibel dan dapat disesuaikan dengan kebutuhan bisnis",
            "Fitur pemesanan berbasis barcode untuk mempercepat layanan dan mengurangi beban operasional",
        ],
    },
];

export default function Product() {
    return (
        <section
            id="products"
            className="bg-primary mt-24 lg:mt-32 relative scroll-mt-32 pt-10 lg:pt-0 pb-16 lg:pb-24"
        >
            {/* Wave SVG */}
            <div className="absolute top-0 left-0 w-full -translate-y-[99%] overflow-hidden leading-none">
                <svg
                    viewBox="0 380 900 221"
                    className="w-full h-[60px] md:h-[100px] lg:h-[140px]"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 398L21.5 395.7C43 393.3 86 388.7 128.8 385.8C171.7 383 214.3 382 257.2 392.2C300 402.3 343 423.7 385.8 441C428.7 458.3 471.3 471.7 514.2 475C557 478.3 600 471.7 642.8 460.8C685.7 450 728.3 435 771.2 421.7C814 408.3 857 396.7 878.5 390.8L900 385L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                        fill="#01223F"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                    ></path>
                </svg>
            </div>

            {/* Content */}
            <Container className="pr-10 xl:pr-0">
                <h2 className="text-white text-2xl xl:text-default-32 mb-8">
                    Ammertav <span className="font-bold">Products</span>
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true, // Manual & bisa muter dari akhir ke awal lagi
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 items-stretch">
                        {dummyProducts.map((product, index) => (
                            <CarouselItem key={index} className="pl-4">
                                <div className="flex gap-6 xl:gap-14 flex-col lg:flex-row h-full">
                                    <div className="w-full xl:w-[55%] flex">
                                        <BrandCard
                                            className="w-full h-full py-10 justify-center items-center lg:py-0 lg:px-8"
                                            name={product.name}
                                            description={product.description}
                                            logo={product.logo}
                                            isPrimary={product.isPrimary}
                                        />
                                    </div>

                                    <div className="w-full xl:w-[45%] text-white flex flex-col justify-center py-4">
                                        <h2 className="text-xl xl:text-2xl font-bold mb-3 uppercase">
                                            Fitur
                                        </h2>
                                        <ul className="list-disc pl-5 text-base xl:text-xl">
                                            {product.fitur.map(
                                                (feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="pl-2 mb-2"
                                                    >
                                                        {feature}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Komponen titik-titik di bawahnya */}
                    <CarouselDots className="mt-12" />
                </Carousel>
            </Container>
        </section>
    );
}
