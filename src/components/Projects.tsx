'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    image: '/projects/portfolio.png',
    link: '/projects/portfolio',
    live: 'https://your-portfolio.com',
  },
  {
    title: 'E-commerce App',
    image: '/pzafira.png',
    link: '/projects/ecommerce',
    live: 'https://pzafira.vercel.app/',
  },
  {
    title: 'Blog Platform',
    image: '/projects/blog.png',
    link: '/projects/blog',
    live: 'https://your-blog.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 w-full px-4 sm:px-6 lg:px-12 py-20 text-white font-[var(--font-inter)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map(({ title, image, link, live }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group w-full rounded-2xl bg-gray-800/40 backdrop-blur-lg border border-white/10 overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xl font-semibold">
                  {title}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-gray-900/80 flex flex-col flex-grow justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={link}
                    className="px-4 py-2 min-w-[110px] text-center bg-cyan-500 hover:bg-cyan-400 text-white rounded-md text-sm md:text-base font-medium transition"
                  >
                    View Details
                  </Link>
                  <Link
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-4 py-2 min-w-[130px] bg-white text-gray-900 hover:bg-gray-200 rounded-md text-sm md:text-base font-medium transition"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200 transition"
          >
            See More Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
