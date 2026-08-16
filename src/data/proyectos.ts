// Estructura de datos para los proyectos
export interface Proyecto {
    id: number;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    enlace?: string;
    repo?: string;
    imagen?: string;
}

// Lista de proyectos
export const misProyectos: Proyecto[] = [
    {
        id: 1,
        titulo: "Github Stats Pixel",
        descripcion:
            "Generador de imágenes estilo pixel art para estadísticas de GitHub. Creado para personalizar perfiles con una estética retro.",
        tecnologias: ["React", "TypeScript", "Tailwind", "Next.js", "Vercel"],
        enlace: "https://github-estadisticas-pixel.vercel.app/api/stats/[TU_USUARIO]?type=general",
        repo: "https://github.com/MasitasIA/Github_Estadisticas_Pixel",
        imagen: "/GSP.png",
    },
];
