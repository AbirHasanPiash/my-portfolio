"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiDjango,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiPython,
} from "react-icons/si";

const techStack = [
  { Icon: SiHtml5, color: "#E34F26", name: "HTML" },
  { Icon: SiCss3, color: "#1572B6", name: "CSS" },
  { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind CSS" },
  { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
  { Icon: SiPython, color: "#3776AB", name: "Python" },
  { Icon: SiDjango, color: "#092E20", name: "Django" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiExpress, color: "#000000", name: "Express.js" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
  { Icon: SiGit, color: "#F05032", name: "Git" },
  { Icon: SiGithub, color: "#ffffff", name: "GitHub" },
];

export default function TechStack() {
  return (
    <div className="w-full pb-50 bg-gray-900">
      <div className="w-full bg-gray-900 pt-6">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-3xl sm:text-4xl font-semibold text-white tracking-wide">
            Technologies I Use
          </p>
          <div className="mt-2 animate-bounce text-cyan-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-12 bg-gray-900">
        {/* Top wave */}
        <svg
          className="absolute top-0 left-0 w-full h-32 text-gray-900 rotate-180"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,0L0,0Z"
          />
        </svg>

        {/* Marquee */}
        <div className="relative z-10 group overflow-hidden w-full">
          <div className="flex w-max space-x-12 animate-marquee group-hover:[animation-play-state:paused]">
            {techStack.concat(techStack).map(({ Icon, color, name }, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-1 min-w-[80px]"
              >
                <Icon
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                />
                <span className="text-xs text-slate-400 group-hover:text-white">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
