export default function Stats() {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#181119] border border-white/5 rounded-3xl p-8 sm:p-10 shadow-lg">
                {/* Columna 1: Sobre mí */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        Sobre mí{" "}
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </h3>
                    <div className="text-sm leading-relaxed text-zinc-300 space-y-4 font-light">
                        <p>
                            Me gusta nombrarme Aspirante a Desarrollador Full
                            Stack, ya que siempre estoy aprendiendo y mejorando
                            mis habilidades. Estoy cursando la Tecnicatura en
                            Ciencia de Datos en la institución de TECLAB.
                        </p>
                        <p>
                            Me apasiona la programación en TypeScript, Python y
                            de vez en cuando Kotlin. Me interesan las nuevas
                            tecnologías y frameworks.
                        </p>
                        <p>
                            También me gusta practicar el dibujo vectorial y
                            diseño de logotipos.
                        </p>
                    </div>
                </div>

                {/* Columna 2: Motivación */}
                <div className="flex flex-col gap-8 lg:border-l lg:border-white/5 lg:pl-10">
                    <h3 className="text-xl font-bold text-white">
                        Lo que me motiva
                    </h3>

                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4 items-start">
                            <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-1">
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
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[15px] text-white">
                                    Construir herramientas útiles
                                </h4>
                                <p className="text-sm text-zinc-400 mt-1.5 font-light leading-relaxed">
                                    Desde plataformas e-commerce hasta gestión
                                    de inventarios y plugins.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-1">
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
                                    <path d="m18 16 4-4-4-4" />
                                    <path d="m6 8-4 4 4 4" />
                                    <path d="m14.5 4-5 16" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[15px] text-white">
                                    Versatilidad Técnica
                                </h4>
                                <p className="text-sm text-zinc-400 mt-1.5 font-light leading-relaxed">
                                    Disfruto la transición entre lenguajes y
                                    arquitecturas robustas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna 3: Lenguajes y Frameworks */}
                <div className="flex flex-col gap-4 lg:border-l lg:border-white/5 lg:pl-10 justify-center">
                    <div className="p-5 rounded-2xl bg-[#1f1621] border border-white/5 text-center flex flex-col justify-center">
                        <div className="text-4xl font-extrabold text-primary">
                            100%
                        </div>
                        <div className="text-xs font-medium text-zinc-300 mt-2 tracking-wide">
                            Enfoque en código limpio y Documentado
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#1f1621] border border-white/5">
                        <h4 className="text-sm font-semibold text-white mb-4 text-center">
                            Lenguajes Favoritos y Frameworks que manejo
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                TypeScript
                            </span>
                            <span className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Python
                            </span>
                            <span className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                React (Framework)
                            </span>
                            <span className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                Kotlin
                            </span>
                            <span className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
                                SQL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
