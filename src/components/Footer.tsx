import Link from "next/link";

export default function Footer() {
    // Obtenemos el año actual automáticamente (2026)
    const currentYear = new Date().getFullYear();

    return (
        // mt-20 empuja el footer hacia abajo para separarlo del contenido
        // border-t agrega una línea divisoria súper sutil
        <footer className="w-full border-t border-card-border bg-background mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
                {/* Sección Superior: Marca y Enlaces */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
                    {/* Izquierda: Logo y descripción */}
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity"
                        >
                            Nereo Schmidt -{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                                MasitasIA
                            </span>
                        </Link>
                        <p className="text-sm text-foreground opacity-60 max-w-xs leading-relaxed">
                            Aprendiendo constantemente y buscando mejorar mis
                            habilidades en el desarrollo de aplicaciones web y
                            móviles. Siempre abierto a nuevos desafíos y
                            oportunidades de colaboración.
                        </p>
                    </div>

                    {/* Derecha: Columnas de enlaces */}
                    <div className="flex gap-12 sm:gap-20">
                        {/* Columna Navegación */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold text-foreground tracking-widest uppercase opacity-80">
                                Navegación
                            </h4>
                            <nav className="flex flex-col gap-2.5">
                                <Link
                                    href="/"
                                    className="text-sm font-medium text-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all"
                                >
                                    Inicio
                                </Link>
                                <Link
                                    href="/proyectos"
                                    className="text-sm font-medium text-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all"
                                >
                                    Proyectos
                                </Link>
                                <Link
                                    href="/carrera"
                                    className="text-sm font-medium text-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all"
                                >
                                    Carrera y Estudios
                                </Link>
                            </nav>
                        </div>

                        {/* Columna Redes / Contacto */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold text-foreground tracking-widest uppercase opacity-80">
                                Contacto
                            </h4>
                            <nav className="flex flex-col gap-2.5">
                                <a
                                    href="https://github.com/MasitasIA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nereoschmidt/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="mailto:nereoschmidt@gmail.com"
                                    className="text-sm font-medium text-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all"
                                >
                                    Email
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Sección Inferior: Copyright */}
                <div className="pt-8 border-t border-card-border flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-medium text-foreground opacity-50">
                        © {currentYear} MasitasIA. Todos los derechos
                        reservados.
                    </p>
                    <p className="text-xs font-medium text-foreground opacity-50 flex items-center gap-1.5">
                        Diseñado y desarrollado con{" "}
                        <span className="text-primary text-sm">♥</span> en
                        Argentina
                    </p>
                </div>
            </div>
        </footer>
    );
}
