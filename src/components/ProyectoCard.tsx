import { Proyecto } from "@/data/proyectos";
import Image from "next/image";

interface Props {
    proyecto: Proyecto;
}

export default function ProyectoCard({ proyecto }: Props) {
    return (
        // Sacamos el p-6 de acá y agregamos overflow-hidden para que la imagen no tape los bordes redondeados
        <div className="bg-card-bg border border-card-border rounded-2xl flex flex-col h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
            {/* SECCIÓN DE IMAGEN (Proporción 3:4) */}
            {proyecto.imagen && (
                <div className="w-full aspect-3/4 overflow-hidden bg-background/50 border-b border-card-border">
                    {/* Usamos <img> normal para evitar problemas de dominios si usás URLs externas */}
                    <Image
                        src={proyecto.imagen!}
                        alt={`Imagen de ${proyecto.titulo}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        width={900}
                        height={1200}
                    />
                </div>
            )}

            {/* SECCIÓN DE CONTENIDO */}
            <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-foreground mb-3">
                    {proyecto.titulo}
                </h3>

                <p className="text-justify text-sm text-foreground opacity-70 mb-6 grow leading-relaxed">
                    {proyecto.descripcion}
                </p>

                {/* Etiquetas de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.tecnologias.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-1 text-[11px] font-semibold text-primary bg-primary/10 rounded-md border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Botones de acción */}
                <div className="flex items-center gap-3 pt-4 border-t border-card-border">
                    {proyecto.repo && (
                        <a
                            href={proyecto.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-background border border-card-border text-foreground hover:text-primary hover:border-primary transition-colors"
                            aria-label="Ver Repositorio"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    )}
                    {proyecto.enlace && (
                        <a
                            href={proyecto.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 text-xs font-semibold bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                        >
                            Visitar Proyecto
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
