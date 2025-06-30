"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/10 bg-gray-900/80 backdrop-blur-md shadow-md transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center text-white font-[var(--font-inter)]">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-cyan-400 hover:opacity-90 transition"
        >
          a_h_Piash
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm font-medium hover:text-cyan-400 transition-colors duration-200 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-white" />
        </button>
      </nav>

      {/* Mobile Modal Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Slide-in Modal */}
            <motion.div
              ref={modalRef}
              className="fixed top-0 right-0 h-full w-1/2 sm:w-2/7 max-w-xs bg-black border-l border-white/10 shadow-xl flex flex-col px-6 py-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 rounded hover:bg-white/10 transition"
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col gap-2 sm:gap-5 mt-12 text-white text-lg font-medium">
                {navItems.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="relative px-2 py-2 text-left hover:text-cyan-400 transition-colors group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
