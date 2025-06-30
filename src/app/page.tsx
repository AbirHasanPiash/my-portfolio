import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/Tape";

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-inter)] bg-background text-foreground flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center text-center">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Contact />
        <Blog />
        {/*
        <Experience />
        <Testimonials />
         */}
      </main>
    </div>
  );
}
