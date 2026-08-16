import "./globals.css";
import type { Metadata } from "next";

// Componentes
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "MasitasIA (Nereo Schmidt) | Portafolio",
    description: "Desarrollador de aplicaciones web y móviles",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // scroll-smooth hace que al hacer clic en los links la navegación sea suave
        <html lang="es" className="scroll-smooth">
            <body className="bg-zinc-50 text-zinc-900 antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
