"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Container from "../ui/Container";

const GlassCard = dynamic(
    () => import("react-glass-ui").then((mod) => mod.GlassCard),
    { ssr: false }
);

const project = [
    {
        total: 200,
        name: "Clients",
    },
    {
        total: 100,
        name: "Projects",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full bg-primary text-white scroll-mt-24 pt-24 pb-48 overflow-hidden"
        >
            <Container className="flex flex-col md:flex-row gap-12 xl:gap-16 items-center">
                {/* Kolom Gambar Kiri */}
                <div className="w-full md:w-5/12 relative">
                    <figure className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-white/10">
                        <Image
                            src="/images/image-about.webp"
                            alt="Tim Paus"
                            fill
                            sizes="(min-width: 768px) 42vw, 100vw"
                            className="object-cover"
                        />
                    </figure>

                    {/* Card Melayang */}
                    {/* <div className="absolute right-[-2rem] top-4/6 -translate-y-1/2 flex flex-col gap-4">
                        <div className="relative right-4 backdrop-blur-xs shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-xl p-4 border border-white/20">
                            <h3 className="text-4xl font-bold">+200</h3>
                            <p className="text-md">Clients</p>
                        </div>
                        <div className="relative left-4 backdrop-blur-xs shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-xl p-4 border border-white/20">
                            <h3 className="text-4xl font-bold">+100</h3>
                            <p className="text-md">Projects</p>
                        </div>
                    </div> */}

                    <div className="absolute -right-8 top-4/6 -translate-y-1/2 flex flex-col gap-4">
                        {project.map((item, index) => (
                            <div
                                key={index}
                                className={`relative ${index % 2 === 0 ? "right-4" : "left-3 xl:left-6"}`}
                            >
                                <GlassCard
                                    blur={4}
                                    distortion={40}
                                    flexibility={0}
                                    borderColor="#ffffff"
                                    borderSize={1}
                                    borderRadius={0}
                                    borderOpacity={0.4}
                                    backgroundColor="#717171"
                                    backgroundOpacity={0.1}
                                    innerLightColor="#ffffff"
                                    innerLightSpread={1}
                                    innerLightBlur={6}
                                    innerLightOpacity={0}
                                    outerLightColor="#ffffff"
                                    outerLightSpread={1}
                                    outerLightBlur={10}
                                    outerLightOpacity={0}
                                    color="#ffffff"
                                    chromaticAberration={0}
                                    onHoverScale={1}
                                    saturation={100}
                                    brightness={100}
                                    className="py-4 px-4 text-center"
                                >
                                    <h3 className="text-2xl xl:text-4xl font-bold">
                                        +{item.total}
                                    </h3>
                                    <p className="text-md">{item.name}</p>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Kolom Teks Kanan */}
                <div className="w-full md:w-7/12 flex flex-col gap-4 lg:gap-6">
                    <h1 className="text-2xl xl:text-default-32 font-medium">
                        About Us
                    </h1>
                    <h2 className="text-xl xl:text-2xl font-bold">
                        We've successfully delivered 100+ projects.
                    </h2>

                    <div className="text-base xl:text-xl flex flex-col gap-4">
                        <p className="text-gray-300 leading-relaxed">
                            Di era digital yang terus berkembang, kebutuhan akan
                            solusi teknologi terintegrasi dan strategi kreatif
                            menjadi kunci pertumbuhan bisnis.{" "}
                            <span className="font-bold text-white">
                                PT. Pandu Usaha Nusantara
                            </span>{" "}
                            hadir sebagai perusahaan di bidang{" "}
                            <span className="font-bold text-white">
                                IT Solutions dan Creative & Digital Agency
                            </span>{" "}
                            yang berkomitmen membantu bisnis beradaptasi dan
                            berkembang secara berkelanjutan.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Dengan memadukan{" "}
                            <span className="font-bold text-white">
                                keahlian teknis
                            </span>{" "}
                            dan{" "}
                            <span className="font-bold text-white">
                                kreativitas
                            </span>
                            , kami menghadirkan{" "}
                            <span className="font-bold text-white">solusi</span>{" "}
                            yang tidak hanya fungsional, tetapi juga bernilai
                            estetika serta mampu memberikan{" "}
                            <span className="font-bold text-white">
                                dampak strategis
                            </span>{" "}
                            bagi setiap klien.
                        </p>
                    </div>
                </div>
            </Container>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(178%+1.3px)] h-42.75 translate-x-[-40%]"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-background"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
