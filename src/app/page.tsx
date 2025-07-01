import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/Tape";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-inter)] bg-background text-foreground flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center text-center">
        <Hero />
        <About />
        <WhatIDo />
        <TechStack />
        <Projects />
        <Blog />
        <Contact />
        {/*
        <Experience />
        <Testimonials />
         */}
      </main>
    </div>
  );
}
