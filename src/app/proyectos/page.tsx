// src/app/proyectos/page.tsx
import Link from "next/link";
import HeroProyectos from "@/components/HeroProyectos";
import ProyectoCard from "@/components/ProyectoCard";
import { misProyectos } from "@/data/proyectos";

export default function ProyectosPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-6">
            {/* Importamos el Hero */}
            <HeroProyectos />

            {/* GRILLA DE MINICARDS */}
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mapeamos el arreglo de datos renderizando la plantilla */}
                    {misProyectos.map((proyecto) => (
                        <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                    ))}
                </div>
            </section>

            {/* Botón Volver */}
            <div className="mt-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}
