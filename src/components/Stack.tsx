import React from "react";

const stack = [
    {
        category: "Frontend",
        accent: "text-primary",
        items: [
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
                name: "Tailwind CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
        ],
    },
    {
        category: "Mobile",
        accent: "text-secondary",
        items: [
            {
                name: "Expo",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
                name: "Kotlin",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
            },
        ],
    },
    {
        category: "Backend & Data",
        accent: "text-primary",
        items: [
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            },
            {
                name: "SQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
            },
        ],
    },
    {
        category: "Herramientas",
        accent: "text-secondary",
        items: [
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
                name: "Cloudflare",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
            },
        ],
    },
];

export default function Stack() {
    return (
        <section className="w-full max-w-7xl mx-auto py-16 px-6">
            {/* Título siguiendo el estilo "Sobre mí •" de tu imagen */}
            <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-2">
                Mi stack <span className="text-primary">•</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stack.map((cat, i) => (
                    <div
                        key={i}
                        className="p-8 rounded-2xl bg-card-bg border border-card-border flex flex-col gap-5 transition-colors hover:border-primary/50"
                    >
                        <h3 className={`text-xl font-semibold ${cat.accent}`}>
                            {cat.category}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {cat.items.map((tech, j) => (
                                <div
                                    key={j}
                                    className="flex items-center gap-2.5 bg-background border border-card-border rounded-lg px-3.5 py-2 transition-all hover:border-secondary/60"
                                >
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-5 h-5 object-contain opacity-90"
                                    />
                                    <span className="font-medium text-sm text-foreground/90">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
