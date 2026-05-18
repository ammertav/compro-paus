import Container from "../ui/Container";
import NumberedListItem from "../ui/NumberedListItem";

const misi = [
    "Mengembangkan produk dan solusi teknologi informasi yang inovatif, andal, dan mudah diakses oleh seluruh lapisan usaha",
    "Memberikan layanan IT berkualitas tinggi dengan dukungan teknis profesional dan bertanggung jawab",
    "Mendukung transformasi digital pelaku usaha kecil dan menengah di Indonesia",
    "Menjamin keamanan, kerahasiaan, dan integritas data klien dalam setiap penyelesaian proyek",
];

export default function VisiMisi() {
    return (
        <section className="relative w-full h-full text-primary pt-24 pb-32">
            {/* Background Logo */}
            <div className="absolute right-1 -top-10 -translate-y-1/7 z-50">
                <img
                    src="/images/logo-paus-black-logo-2.png"
                    alt="Visi Misi Background"
                    className="w-full h-225 object-contain"
                />
            </div>

            <Container className="relative z-10 flex flex-col text-center gap-12">
                <div className="text-center">
                    <h1 className="text-2xl xl:text-default-32">Visi Kami</h1>
                    <p className="text-xl xl:text-2xl font-light mt-8">
                        Menjadi{" "}
                        <span className="font-bold">konglomerasi terdepan</span>{" "}
                        di Indonesia yang{" "}
                        <span className="font-bold">berkembang</span> secara
                        berkelanjutan, mencakup beragam sektor usaha, dan{" "}
                        <span className="font-bold">memberikan</span> kontribusi
                        signifikan bagi{" "}
                        <span className="font-bold">kemajuan ekonomi</span>{" "}
                        serta <span className="font-bold">kesejahteraan</span>{" "}
                        masyarakat <span className="font-bold">Nusantara</span>.
                    </p>
                </div>

                <div>
                    <h1 className="text-2xl xl:text-default-32">Misi Kami</h1>
                    <ul className="flex flex-wrap gap-6 text-left mt-8">
                        {misi.map((item, index) => (
                            <NumberedListItem
                                key={index}
                                number={index + 1}
                                className="w-full md:w-[calc(50%-12px)]"
                                description={item}
                            />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
