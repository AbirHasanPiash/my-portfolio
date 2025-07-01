"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center border-t border-white/10 bg-gray-900/80 backdrop-blur-md text-white font-[var(--font-inter)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-5">
        <p className="text-center text-md text-slate-400">
          © {new Date().getFullYear()} a_h_Piash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
