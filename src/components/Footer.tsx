"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-gray-900/80 backdrop-blur-md text-white font-[var(--font-inter)]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Branding / Logo */}
        <div className="text-cyan-400 font-bold text-lg tracking-tight">
          a_h_Piash
        </div>

        {/* Footer Navigation */}
        <div className="hidden sm:flex space-x-6 text-sm">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 mt-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} a_h_Piash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
