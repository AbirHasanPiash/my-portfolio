export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center font-[var(--font-inter)]">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Piash. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}