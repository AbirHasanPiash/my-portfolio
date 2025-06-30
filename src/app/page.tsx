import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/Tape";

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-inter)] bg-background text-foreground flex flex-col">
      {/* Fixed top section */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center text-center">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Projects />
        {/*
        <Experience />
        <Testimonials />
        <Blog />
        <Contact /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
