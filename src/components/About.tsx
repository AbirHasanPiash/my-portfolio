import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gray-900 text-slate-200 py-20 px-6 sm:px-12 lg:px-24 font-[var(--font-inter)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I&apos;m{" "}
            <span className="text-cyan-400 font-semibold">
              MD. ABIR HASAN PIASH
            </span>
            , a dedicated{" "}
            <span className="text-white font-medium">
              Full-Stack Web Developer
            </span>{" "}
            passionate about crafting fast, scalable, and accessible digital
            experiences. With hands-on expertise in{" "}
            <span className="text-white font-medium">Next.js</span>,{" "}
            <span className="text-white font-medium">TypeScript</span>,{" "}
            <span className="text-white font-medium">Tailwind CSS</span>, and
            more — I build elegant solutions to complex problems.
          </p>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            I&apos;m an open-source contributor, UI enthusiast, and a clean-code
            advocate. I love collaborating, learning, and improving continuously
            in both frontend and backend development.
          </p>
        </div>

        {/* Resume CTA */}
        <div className="w-full md:w-auto flex justify-center md:justify-center">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-medium text-base transition shadow-lg"
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
