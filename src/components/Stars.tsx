"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Generate random left percentage
const randomLeft = () => `${Math.floor(Math.random() * 90 + 5)}%`;

export default function Stars() {
  const baseStars = [
    { top: "5%", size: "text-[2px]", opacity: "opacity-40" },
    { top: "2%", size: "text-[10px]", opacity: "opacity-50" },
    { top: "12%", size: "text-[6px]", opacity: "opacity-50" },
    { top: "25%", size: "text-[5px]", opacity: "opacity-70" },
    { top: "35%", size: "text-[3px]", opacity: "opacity-30" },
    { top: "45%", size: "text-[15px]", opacity: "opacity-60" },
    { top: "10%", size: "text-[7px]", opacity: "opacity-80" },
    { top: "20%", size: "text-[9px]", opacity: "opacity-70" },
    { top: "30%", size: "text-[11px]", opacity: "opacity-50" },
    { top: "5%", size: "text-[8px]", opacity: "opacity-40" },
    { top: "8%", size: "text-[10px]", opacity: "opacity-50" },
    { top: "11%", size: "text-[12px]", opacity: "opacity-60" },
    { top: "14%", size: "text-[14px]", opacity: "opacity-30" },
    { top: "17%", size: "text-[6px]", opacity: "opacity-70" },
    { top: "20%", size: "text-[10px]", opacity: "opacity-80" },
    { top: "23%", size: "text-[8px]", opacity: "opacity-60" },
    { top: "26%", size: "text-[13px]", opacity: "opacity-40" },
  ];

  const [stars, setStars] = useState<{ top: string; size: string; opacity: string; left: string }[]>([]);

  useEffect(() => {
    const generateStars = () =>
      baseStars.map((star) => ({
        ...star,
        left: randomLeft(),
      }));

    setStars(generateStars());

    const interval = setInterval(() => {
      setStars(generateStars());
    }, 10000); // replace every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-1/2 z-0 pointer-events-none overflow-hidden">
      {/* Static Stars with pop animation */}
      {stars.map((star, index) => (
        <FaStar
          key={index}
          className={`
            absolute 
            ${star.size} 
            text-yellow-300 
            ${star.opacity} 
            blur-[0.5px]
            animate-pop
          `}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Saturn */}
      <div className="absolute top-8 right-10 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full">
        <div className="relative w-full h-full">
          <Image
            src="/saturn.png"
            alt="saturn planet"
            fill
            className="object-contain"
          />
          {/* Glow behind the moon */}
          <div className="absolute -inset-3 rounded-full bg-yellow-200 blur-2xl opacity-30" />
        </div>
      </div>

      {/* Full Moon */}
      <div className="absolute top-30 left-10 sm:top-40 sm:left-60 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full">
        <div className="relative w-full h-full">
          <Image
            src="/moon.png"
            alt="Full Moon"
            fill
            className="object-contain"
          />
          {/* Glow behind the moon */}
          <div className="absolute -inset-3 rounded-full bg-yellow-200 blur-2xl opacity-30" />
        </div>
      </div>
    </div>
  );
}
