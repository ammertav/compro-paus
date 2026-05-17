import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import OurBrands from "@/components/home/OurBrands";
import Product from "@/components/home/Product";
import OurServices from "@/components/home/OurServices";
import VisiMisi from "@/components/home/VisiMisi";
import Footer from "@/components/home/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <VisiMisi />
            <OurBrands />
            <Product />
            <OurServices />
            <Footer />
        </>
    );
}

// 