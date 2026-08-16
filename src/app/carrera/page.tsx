// src/app/carrera/page.tsx
import Link from "next/link";

export default function CarreraPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 max-w-3xl mx-auto px-6">
            {/* Encabezado de la página */}
            <div className="mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                    Mi Carrera.
                </h1>
                <p className="text-lg text-foreground opacity-70 leading-relaxed">
                    Un recorrido por mi formación académica y mi desarrollo
                    profesional en el mundo laboral.
                </p>
            </div>

            {/* SECCIÓN: EXPERIENCIA LABORAL */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                    >
                        <rect
                            width="20"
                            height="14"
                            x="2"
                            y="7"
                            rx="2"
                            ry="2"
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Experiencia Profesional
                </h2>

                <div className="relative border-l border-card-border ml-3 pl-8 pb-4">
                    {/* Item: Buscando primera oportunidad */}
                    <div className="relative mb-10">
                        {/* Punto en la línea de tiempo */}
                        <div className="absolute -left-10.75 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                                En búsqueda activa
                            </h3>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-max">
                                Actualidad
                            </span>
                        </div>
                        <h4 className="text-md font-medium text-foreground opacity-80 mb-3">
                            Primera oportunidad laboral IT
                        </h4>
                        <p className="text-sm text-foreground opacity-70 leading-relaxed max-w-xl">
                            Actualmente desarrollando proyectos personales y
                            formándome académicamente, preparado para dar el
                            salto al mercado laboral. Busco un entorno donde
                            pueda aplicar mis conocimientos en desarrollo Full
                            Stack, aprender de un equipo experimentado y aportar
                            valor desde el primer día.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN: EDUCACIÓN */}
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                    >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    Educación
                </h2>

                <div className="relative border-l border-card-border ml-3 pl-8 pb-4 space-y-12">
                    {/* Universidad (UPSO) */}
                    <div className="relative">
                        <div className="absolute -left-10.75 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                                Universidad Provincial del Sudoeste (UPSO)
                            </h3>
                            <span className="text-sm font-medium text-foreground opacity-60">
                                2026 - Presente
                            </span>
                        </div>
                        <h4 className="text-md font-medium text-secondary mb-3">
                            Tecnicatura Universitaria en Tecnologías Web y
                            Aplicaciones Interactivas
                        </h4>
                        <p className="text-sm text-foreground opacity-70 leading-relaxed max-w-xl mb-4">
                            Formación académica de 3 años orientada al
                            desarrollo moderno. Centrada en la creación de
                            soluciones digitales eficientes, abarcando
                            ecosistemas web completos.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Legales
                            </span>
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                PHP para Desarrollo Web
                            </span>
                        </div>
                    </div>

                    {/* Instituto (TECLAB) */}
                    <div className="relative">
                        <div className="absolute -left-10.75 top-1.5 w-5 h-5 rounded-full bg-card-bg border-2 border-card-border"></div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                                Instituto Técnico Superior (TECLAB)
                            </h3>
                            <span className="text-sm font-medium text-foreground opacity-60">
                                2025 - Presente
                            </span>
                        </div>
                        <h4 className="text-md font-medium text-secondary mb-3">
                            Tecnicatura en Data Science
                        </h4>
                        <p className="text-sm text-foreground opacity-70 leading-relaxed max-w-xl">
                            Programa de 2 años enfocado en el análisis,
                            procesamiento y visualización de datos. Esta
                            especialización me permite complementar mis
                            habilidades de programación web con un perfil
                            analítico estructurado en Python y SQL.
                        </p>
                        <br />
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Python para Análisis de Datos
                            </span>
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                SQL
                            </span>
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Visualización de Datos
                            </span>
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Modelado de Datos
                            </span>
                        </div>
                    </div>

                    {/* Secundaria */}
                    <div className="relative">
                        <div className="absolute -left-10.75 top-1.5 w-5 h-5 rounded-full bg-card-bg border-2 border-card-border"></div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                                Escuela de Educación Secundaria N°5
                                &quot;Coronel Marcelino E. Freyre&quot;
                            </h3>
                            <span className="text-sm font-medium text-foreground opacity-60 shrink-0 whitespace-nowrap md:mt-1">
                                2019 - 2025
                            </span>
                        </div>

                        <h4 className="text-md font-medium text-secondary mb-3">
                            Bachiller en Economía y Administración.
                        </h4>

                        <p className="text-sm text-foreground opacity-70 leading-relaxed max-w-xl">
                            Educación secundaria completada tras 6 años de
                            estudio. La orientación me brindó una base sólida en
                            metodologías de organización, herramientas de
                            productividad (Excel, Google Docs) y resolución de
                            problemas estructurados.
                        </p>
                        <br />
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Contabilidad y Finanzas
                            </span>
                            <span className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Uso de Herramientas Digitales y Ofimáticas
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Botón para volver */}
            <div className="mt-20">
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
