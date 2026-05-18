import ServicesUI from "../ui/Services";
import { ammertavServices, inkCreativeServices } from "../../data/services";

export default function OurServices() {
    return (
        <div className="w-full flex flex-col  pt-24">
            {/* Ammertav Services */}
            <ServicesUI
                title="Ammertav"
                highlightTitle="Services"
                services={ammertavServices}
                theme="light"
            >
                <div className="absolute -top-38 right-0 w-screen h-auto -z-10 pointer-events-none">
                    <img
                        src="/icons/wave-3.svg"
                        alt="wave background"
                        className="w-full h-auto object-cover md:object-fill min-h-100"
                    />
                </div>
            </ServicesUI>

            {/* INK.Creative Services */}
            <ServicesUI
                title="INK.Creative"
                highlightTitle="Services"
                services={inkCreativeServices}
                theme="dark"
                className="py-24"
            >
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block h-36.75 w-[calc(147%+1.3px)] scale-x-[-1]"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="fill-background"
                        />
                    </svg>
                </div>
            </ServicesUI>
        </div>
    );
}
