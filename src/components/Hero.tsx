import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-x-clip">
            {/* COLUMNA IZQUIERDA: Presentación y Redes */}
            <div className="w-full flex-1 flex flex-col items-start z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-card-border mb-6 shadow-sm">
                    <span className="text-xl">👋</span>
                    <span className="text-sm font-medium text-foreground opacity-80">
                        Hola, soy
                    </span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground mb-2">
                    Nereo{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                        Schmidt
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl font-medium text-foreground opacity-80 mb-6 flex items-center">
                    Desarrollador Full Stack
                    <span className="inline-block w-3 h-1 bg-primary ml-2 animate-pulse"></span>
                </h2>

                <p className="text-lg text-foreground opacity-70 max-w-lg mb-10 leading-relaxed">
                    Desarrollador oriundo de Argentina, apasionado por la
                    creación de aplicativos web y móviles. Busco especializarme
                    en el desarollo Front-End con React y TypeScript, sin dejar
                    detrás el Back-End.
                </p>

                {/* Botones y Redes de Contacto */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                    <Link
                        href="/proyectos"
                        className="px-6 py-3.5 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md shadow-primary/20"
                    >
                        Ver mis proyectos
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
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>

                    <div className="flex items-center gap-3">
                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/nereoschmidt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 rounded-xl bg-card-bg border border-card-border text-foreground opacity-80 hover:opacity-100 hover:border-primary hover:text-primary transition-all shadow-sm"
                            aria-label="LinkedIn"
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
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/5492923519367"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 rounded-xl bg-card-bg border border-card-border text-foreground opacity-80 hover:opacity-100 hover:border-primary hover:text-primary transition-all shadow-sm"
                            aria-label="WhatsApp"
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
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                            </svg>
                        </a>

                        {/* Gmail */}
                        <a
                            href="mailto:nereoschmidt@gmail.com"
                            className="p-3.5 rounded-xl bg-card-bg border border-card-border text-foreground opacity-80 hover:opacity-100 hover:border-primary hover:text-primary transition-all shadow-sm"
                            aria-label="Gmail"
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
                                <rect
                                    width="20"
                                    height="16"
                                    x="2"
                                    y="4"
                                    rx="2"
                                />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* COLUMNA DERECHA: Ventana de Código */}
            <div className="w-full flex-1 relative flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">
                <div className="w-full max-w-lg bg-card-bg border border-card-border rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm backdrop-blur-md">
                    {/* Barra superior de la ventana */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-foreground/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="ml-2 text-xs font-sans text-foreground opacity-50">
                            MasitasIA.ts
                        </div>
                    </div>

                    {/* Contenido del editor */}
                    <div className="p-4 sm:p-6 overflow-x-auto">
                        <div className="text-foreground">
                            <span className="text-primary font-bold">
                                const
                            </span>{" "}
                            <span className="text-secondary">developer</span> ={" "}
                            {"{"}
                        </div>
                        <div className="pl-4 text-foreground opacity-80 mt-2">
                            name:{" "}
                            <span className="text-primary">
                                &apos;Nereo Schmidt&apos;
                            </span>
                            ,
                        </div>
                        <div className="pl-4 text-foreground opacity-80 mt-2">
                            location:{" "}
                            <span className="text-primary">
                                &apos;Buenos Aires, Argentina&apos;
                            </span>
                            ,
                        </div>

                        {/* Se ajustó la parte del array (stack) para que haga salto de línea si es necesario en móviles */}
                        <div className="pl-4 text-foreground opacity-80 mt-2 flex flex-wrap gap-x-1.5 leading-loose">
                            <span>stack: [</span>
                            <span className="text-primary">
                                &apos;TypeScript&apos;
                            </span>
                            ,
                            <span className="text-primary">
                                &apos;Python&apos;
                            </span>
                            ,
                            <span className="text-primary">
                                &apos;React&apos;
                            </span>
                            ,
                            <span className="text-primary">
                                &apos;Kotlin&apos;
                            </span>
                            ,
                            <span className="text-primary">
                                &apos;SQL&apos;
                            </span>
                            <span>],</span>
                        </div>

                        <div className="pl-4 text-foreground opacity-80 mt-2">
                            learning:{" "}
                            <span className="text-primary">
                                &apos;always&apos;
                            </span>
                        </div>
                        <div className="text-foreground mt-2">{"};"}</div>
                    </div>

                    {/* Footer de la ventana (Estado) */}
                    <div className="px-4 sm:px-6 py-4 border-t border-card-border flex items-center gap-2 bg-foreground/5">
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                        </span>
                        <span className="text-[11px] sm:text-xs text-foreground opacity-80 font-sans font-medium tracking-wide">
                            Disponible para nuevos proyectos
                        </span>
                    </div>
                </div>
            </div>

            {/* Resplandor de fondo ajustado para ser responsivo (w-[300px] en móvil y [600px] en sm) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-150 sm:h-150 bg-primary/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10"></div>
        </section>
    );
}
