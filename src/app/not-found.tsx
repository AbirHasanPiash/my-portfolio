'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4 font-[var(--font-inter)] text-center">
      <AlertTriangle size={64} className="text-yellow-400 mb-6" />
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-slate-400 text-base sm:text-lg max-w-md mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-md text-sm font-medium transition"
      >
        Go Home
      </Link>
    </div>
  );
}
