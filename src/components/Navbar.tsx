"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 h-14 bg-zinc-950/70 backdrop-blur-md border-b border-white/5">
            <nav className="flex items-center justify-between px-3 sm:px-6 h-full max-w-screen-2xl mx-auto relative z-10">
                {/* LADO IZQUIERDO: Logo y etiqueta encapsulada */}
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <Link
                        href="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={200}
                            height={40}
                            className="w-auto h-7 sm:h-10 object-contain"
                            priority
                        />
                    </Link>

                    <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded px-2 py-1">
                        <span className="text-xs font-mono text-zinc-400">
                            Portafolio
                        </span>
                    </div>
                </div>

                {/* LADO DERECHO: Botones de navegación (DESKTOP) */}
                {/* Cambiamos a 'hidden md:flex' para que desaparezca en móviles */}
                <div className="hidden md:flex items-center p-1 bg-zinc-900/50 border border-white/10 rounded-full shadow-inner shrink-0">
                    <Link
                        href="/"
                        className="px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/proyectos"
                        className="px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="/carrera"
                        className="px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        Carrera y Estudios
                    </Link>
                </div>

                {/* BOTÓN DE HAMBURGUESA (MÓVIL) */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Alternar menú"
                >
                    {isOpen ? (
                        // Ícono X (Cerrar)
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
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    ) : (
                        // Ícono Hamburguesa
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
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* MENÚ DESPLEGABLE (MÓVIL) */}
            {isOpen && (
                <div className="md:hidden absolute top-14 left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-b border-white/10 shadow-2xl flex flex-col px-4 py-6 gap-2 animate-in slide-in-from-top-2">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/proyectos"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="/carrera"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                        Carrera y Estudios
                    </Link>
                </div>
            )}
        </header>
    );
}
