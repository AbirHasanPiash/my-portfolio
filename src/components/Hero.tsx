"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Stars from "./Stars";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] bg-gray-900 flex flex-col justify-center items-center text-center text-slate-800 font-[var(--font-inter)] overflow-hidden">
      <Stars />
      {/* Luminous background glow */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[240px] bg-gradient-to-tr from-pink-400 via-red-400 to-yellow-500 opacity-70 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Oval Avatar Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[180px] h-[220px] sm:w-[220px] sm:h-[270px] flex items-center justify-center overflow-hidden rounded-[50%/40%] border-4 border-white shadow-2xl bg-white"
      >
        <Image
          src="/pic.jpg"
          alt="Piash"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Headline with Typewriter */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-8 text-3xl sm:text-5xl font-bold leading-tight tracking-tight max-w-3xl z-10 text-white"
>
  Hi, I&apos;m <span className="text-cyan-400">Piash</span>
  <br />
  <span className="text-slate-300 text-xl sm:text-2xl font-medium">
    <Typewriter
      words={[
        "Full-Stack Developer.",
        "React & Next.js Expert.",
        "Clean Code Lover.",
        "Open Source Contributor."
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</motion.h1>

{/* Subtitle */}
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl z-10"
>
  My favorite language is whatever solves the problem.
</motion.p>

{/* Location + Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 flex items-center gap-2 text-md text-slate-500 z-10"
      >
        <div className="flex items-center gap-1">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-600 text-md">Available for Hire</span>
        </div>
      </motion.div>
    </section>
  );
}