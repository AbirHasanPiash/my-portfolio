import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// SEO metadata
export const metadata: Metadata = {
  title: {
    default: "Piash | Full-Stack Developer",
    template: "%s | Piash",
  },
  description:
    "I'm a passionate full-stack developer crafting modern web applications with clean code and great user experiences.",
  keywords: [
    "Full-stack developer",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Portfolio",
    "Web development",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "The Famous Piash", url: "https://yourdomain.com" }],
  creator: "The Famous Piash",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Piash | Full-Stack Developer",
    description:
      "Portfolio of Piash, a full-stack developer with expertise in building scalable web apps.",
    url: "https://yourdomain.com",
    siteName: "Piash Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piash Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piash | Full-Stack Developer",
    description:
      "Check out the portfolio of Piash — building powerful and elegant web applications.",
    creator: "@yourtwitterhandle",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
