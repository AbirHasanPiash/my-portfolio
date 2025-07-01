"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailto = `mailto:abirhasanpiash@gmail.com?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-900 text-white py-20 px-6 sm:px-12 lg:px-24 font-[var(--font-inter)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <p className="text-slate-400 text-sm sm:text-base">
                abirhasanpiash@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" />
              <p className="text-slate-400 text-sm sm:text-base">
                +880 17 65 600 305
              </p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <p className="text-slate-400 text-sm sm:text-base">
                Gulshan 1, Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex space-x-6 items-center py-6">
              <Link
                href="https://github.com/AbirHasanPiash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-3xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/a-h-piash/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/60 p-6 rounded-lg border border-white/10 shadow-md space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 text-white border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 text-white border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-gray-900 text-white border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium py-3 px-6 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
