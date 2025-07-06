"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

const domains = [
  {
    title: "Full-Stack Development",
    color: "#FBBF24",
    icon: <FaCode size={40} className="text-cyan-400" />,
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Front-End Development",
    color: "#3B82F6",
    icon: <FaLaptopCode size={40} className="text-cyan-400" />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    title: "Back-End Development",
    color: "#10B981",
    icon: <FaServer size={40} className="text-cyan-400" />,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "JWT", "MongoDB"],
  },
  {
    title: "UI/UX Design",
    color: "#EC4899",
    icon: <FaPaintBrush size={40} className="text-cyan-400" />,
    skills: ["Figma", "Responsive Design", "Design Systems", "Wireframing"],
  },
  {
    title: "Database Design",
    color: "#6366F1",
    icon: <FaDatabase size={40} className="text-cyan-400" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL"],
  },
  {
    title: "Software Development",
    color: "#FF0000",
    icon: <FaLaptopCode size={40} className="text-cyan-400" />,
    skills: [
      "Object-Oriented Programming",
      "Agile & Scrum",
      "Unit Testing",
      "CI/CD",
      "Software Architecture",
    ],
  },
];

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Detect outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        activeIndex !== null &&
        cardRefs.current[activeIndex] &&
        !cardRefs.current[activeIndex]?.contains(e.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeIndex]);

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 py-40">
      <div className="mx-auto text-white max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleClick(index)}
                className="relative rounded-2xl p-6 overflow-hidden border border-gray-700 bg-gray-800/60 backdrop-blur-lg shadow-[0_8px_24px_rgba(0,0,0,0.3)] group cursor-pointer transition-colors duration-300 flex flex-col items-center"
              >
                {/* Glow effect */}
                {/* <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 z-[-1] transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, ${domain.color}33, transparent 70%)`,
                    boxShadow: `0 0 40px ${domain.color}55`,
                  }}
                /> */}
                <motion.div
  className={`absolute inset-0 rounded-2xl z-[-1] transition-opacity duration-500 ${
    isHovered || isActive ? 'opacity-100' : 'opacity-0'
  }`}
  style={{
    background: `radial-gradient(circle at top left, ${domain.color}33, transparent 70%)`,
    boxShadow: `0 0 40px ${domain.color}55`,
  }}
/>

                <div className="text-xl font-semibold mb-2 text-center">
                  {domain.title}
                </div>

                {/* Shared Icon/Skill area */}
                <div className="flex items-center justify-center w-full h-[65px] pt-2 my-3">
                  <AnimatePresence mode="wait">
                    {!(isHovered || isActive) ? (
                      <motion.div
                        key="icon"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {domain.icon}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="skills"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap justify-center gap-2"
                      >
                        {domain.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-sm px-3 py-1 rounded-full font-medium"
                            style={{
                              color: domain.color,
                              border: `1px solid ${domain.color}88`,
                              backgroundColor: `${domain.color}11`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
