import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

import TextLoop from "@/components/TextLoop";

export default function Home() {
    return (
        <main className="min-h-screen bg-background pt-14">
            <Hero />
            {/* Contenedor principal: Altura fija (h-14 o h-16) para obligarlo a ocupar menos espacio vertical */}
            <div className="relative w-full h-14 sm:h-16 overflow-hidden">
                {/* Contenedor absoluto: Centra el SVG gigante justo en el medio, permitiendo que el contenedor padre recorte la basura de arriba y abajo */}
                <div className="absolute w-full top-1/2 -translate-y-1/2">
                    <TextLoop
                        className="min-w-225 sm:min-w-full"
                        text="REACT ✦ TAILWINDCSS ✦ TYPESCRIPT"
                        shape="line"
                        speed={45}
                        fontSize={20}
                        fontWeight={800}
                        letterSpacing={3}
                        uppercase={true}
                        pauseOnHover={false}
                        color="#f2f2f2ff"
                        ribbon={false}
                    />
                </div>
            </div>
            <Stats />
        </main>
    );
}
