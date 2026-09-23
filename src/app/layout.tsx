import "./globals.css";
import type { Metadata } from "next";

// Componentes
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://masitasia.com.ar"),
    alternates: {
        canonical: "/",
    },
    title: {
        default: "MasitasIA (Nereo Schmidt) | Portafolio",
        template: "%s | MasitasIA",
    },
    description: "Desarrollador de aplicaciones web y móviles",
    keywords: [
        "Nereo Schmidt",
        "Desarrollador Web",
        "Frontend",
        "MasitasIA",
        "Portafolio",
    ],
    authors: [{ name: "MasitasIA", url: "https://github.com/MasitasIA" }],
    creator: "MasitasIA",
    openGraph: {
        title: "MasitasIA | Portafolio Personal",
        description:
            "Explorá mis proyectos, experiencia y repositorios de código.",
        url: "https://masitasia.com.ar",
        siteName: "MasitasIA Portfolio",
        locale: "es_AR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MasitasIA | Portafolio Personal",
        description:
            "Explorá mis proyectos, experiencia y repositorios de código.",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
            <body className="bg-zinc-50 text-zinc-900 antialiased selection:bg-secondary selection:text-zinc-50">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
