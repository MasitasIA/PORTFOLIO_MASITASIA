import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex flex-col items-center justify-center min-h-[75vh] px-6 text-center overflow-hidden">
            {/* Resplandor de fondo (glassmorphism) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>

            {/* Contenedor principal estilo tarjeta */}
            <div className="p-8 sm:p-12 rounded-3xl bg-card-bg border border-card-border shadow-xl backdrop-blur-sm max-w-lg w-full flex flex-col items-center">
                <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter mb-2">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                        404
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Página no encontrada
                </h2>

                <p className="text-foreground opacity-70 mb-8 text-base sm:text-lg leading-relaxed">
                    Parece que te perdiste en el código. La ruta que estás
                    buscando no existe o fue movida a otra ubicación.
                </p>

                {/* Botón para volver */}
                <Link
                    href="/"
                    className="px-6 py-3.5 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md shadow-primary/20"
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
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}
