'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'Why TypeScript Makes You a Better Developer',
    image: '/blogs/typescript.png',
    slug: '/blog/why-typescript',
    excerpt:
      'TypeScript adds strong typing to JavaScript, helping you catch errors early and write better, scalable code...',
    tags: ['TypeScript', 'Best Practices'],
  },
  {
    title: 'Mastering Tailwind CSS Grid & Flexbox',
    image: '/blogs/tailwind-grid.png',
    slug: '/blog/tailwind-grid',
    excerpt:
      'Learn how to harness the power of Tailwind’s utility classes to build flexible and responsive layouts...',
    tags: ['Tailwind CSS', 'Frontend'],
  },
  {
    title: 'Next.js 14: What’s New and Why It Matters',
    image: '/blogs/nextjs14.png',
    slug: '/blog/nextjs-14',
    excerpt:
      'Explore the exciting new features in Next.js 14 including Server Actions, Turbopack, and enhanced performance...',
    tags: ['Next.js', 'Web Development'],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-gray-900 w-full text-white py-20 px-6 sm:px-12 lg:px-24 font-[var(--font-inter)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map(({ title, image, slug, excerpt, tags }, idx) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 mb-4">{excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <Link
                    href={slug}
                    className="inline-block text-sm font-medium text-cyan-400 hover:underline transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Blogs CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200 transition"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
