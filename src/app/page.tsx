import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <main className="min-h-screen bg-background pt-14">
            <Hero />
            <Stats />
        </main>
    );
}
