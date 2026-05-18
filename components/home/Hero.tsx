import Image from "next/image";
import Container from "../ui/Container";

export default function Hero() {
    return (
        <section className="relative w-full pt-14 xl:pt-24 pb-24 xl:pb-48 overflow-hidden" id="home">
            {/* Background Wave */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-auto -z-10 pointer-events-none">
                <img
                    src="/icons/wave-1.svg"
                    alt="wave background"
                    className="w-full h-auto object-cover md:object-fill min-h-100"
                />
            </div>

            <div className="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-auto -z-10 pointer-events-none">
                <img
                    src="/icons/wave-2.svg"
                    alt="wave background"
                    className="w-full h-auto object-cover md:object-fill min-h-100"
                />
            </div>

            <Container className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10 w-full">
                <div className="w-full md:w-7/12 flex flex-col gap-6 relative z-10">
                    <h1 className="text-2xl xl:text-default-32 font-normal leading-snug text-primary">
                        <span className="font-bold ">IT Solutions</span> dan{" "}
                        <span className="font-bold ">
                            Creative & Digital Agency
                        </span>{" "}
                        yang berkomitmen membantu bisnis{" "}
                        <span className="font-bold ">beradaptasi</span> dan{" "}
                        <span className="font-bold ">berkembang</span> secara
                        berkelanjutan.
                    </h1>
                    <p className="w-full lg:w-4/5 text-primary text-base xl:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Dui fermentum
                        aliquet gravida at velit eu.
                    </p>
                    <div>
                        <button className="bg-primary text-white px-8 py-3 mt-2 rounded-full font-bold uppercase text-sm tracking-wide">
                            Connect US
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-5/12 relative z-10">
                    {/* Bagian gambar yang disesuaikan */}
                    <figure className="relative w-full aspect-5/5 rounded-[48px] overflow-hidden shadow-lg">
                        <Image
                            src="/images/image-hero.webp"
                            alt="hero section"
                            fill
                            priority
                            sizes="(min-width: 768px) 42vw, 100vw"
                            className="object-cover object-bottom"
                        />
                    </figure>
                </div>
            </Container>
        </section>
    );
}
