import Container from "../ui/Container";

export default function Footer() {
    return (
        <footer className="w-full ">
            <Container>
                <div className="flex flex-col items-center justify-center pt-0 pb-24 text-center text-primary">
                    <figure className="mb-2">
                        <img
                            src="/images/logo-paus-black.png"
                            alt="Logo Paus"
                            className="h-10 w-auto object-contain mx-auto"
                        />
                    </figure>
                    <h2 className="text-lg md:text-2xl font-bold mb-2">
                        PT. Pandu Usaha Nusantara
                    </h2>
                    <p className="text-base md:text-xl mb-1">
                        Phone : 0821567891011
                    </p>
                    <p className="text-base md:text-xl mb-1">
                        Email : pausnusantara@gmail.com
                    </p>
                    <p className="text-base md:text-xl">
                        Jl.Wanamukti Residance No. 8, Kota Semarang
                    </p>
                </div>
            </Container>

            <div className="bg-[#0a233f] py-3 w-full">
                <p className="text-center text-xs text-gray-200">
                    &copy; Paus, 2026 All Right Reserved
                </p>
            </div>
        </footer>
    );
}
