"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { key: "work", label: "Work", href: "#work" },
  { key: "experience", label: "Experience", href: "#experience" },
  { key: "about", label: "About", href: "#about" },
  { key: "contact", label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();
  // Hash links are relative to the current path, so they need the home route
  // prepended when we're on a case study page.
  const href = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f5f5f5]/80 backdrop-blur dark:border-white/10 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:h-24 sm:px-8">
        <Link href="/" className="font-semibold tracking-tight text-lg sm:text-xl">
          {t("hero.name")}
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={href(item.href)}
              className="text-sm font-medium text-neutral-700 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            onClick={() => setLocale(locale === "en" ? "ja" : "en")}
            className="text-xs font-medium text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
            aria-label="Switch language"
          >
            {t("nav.lang")}
          </button>
          <Link
            href="/resume.pdf"
            className="text-sm font-medium text-black transition hover:underline dark:text-white"
          >
            {t("nav.resume")}
          </Link>
        </div>
      </div>
    </header>
  );
}
