export default function HeroProyectos() {
    return (
        <>
            {/* Encabezado */}
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                    Mis Proyectos.
                </h1>
                <p className="text-lg text-foreground opacity-70 leading-relaxed max-w-2xl">
                    Una colección de mis proyectos personales y colaborativos,
                    que reflejan mi pasión por la programación y el desarrollo
                    web. Cada proyecto es una oportunidad para aprender,
                    experimentar y mejorar mis habilidades.
                </p>
            </div>

            {/* TARJETA PRINCIPAL: Perfil de GitHub y Estadísticas */}
            <section className="mb-16">
                <div className="w-full bg-card-bg border border-card-border rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center gap-10">
                    {/* Info del Perfil */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">
                            @MasitasIA
                        </h2>
                        <p className="text-foreground opacity-70 mb-6 max-w-md text-justify">
                            Explorá mis repositorios en GitHub. Me interesa el
                            desarrollo Web y Móvil. Aplicando buenas prácticas e
                            IA de la mejor manera posible. Siempre aprendiendo y
                            mejorando mis habilidades. Siempre abierto a nuevos
                            desafíos y oportunidades de colaboración.
                        </p>
                        <a
                            href="https://github.com/MasitasIA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            Visitar GitHub
                        </a>
                    </div>

                    {/* Imagen de Estadísticas */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-card-border bg-background/50 shadow-inner p-2">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
                            <img
                                src="https://github-estadisticas-pixel.vercel.app/api/stats/MasitasIA?type=bar"
                                alt="Mis Lenguajes - Estadísticas de GitHub"
                                className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
