"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";
import Login from "./Login";
import Signup from "./Signup";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/downloaders", label: "Downloaders" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-xl font-bold text-white shadow-lg">
            WD
          </div>
          <div>
            <p className="text-base font-semibold">Website Downloader</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Fast downloads, clean UX</p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-3 py-2 transition ${
                      active
                        ? "bg-slate-900 text-white shadow-lg dark:bg-slate-200 dark:text-slate-900"
                        : "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Signup />
          <Login />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <BiX size={22} /> : <BiMenu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-950 md:hidden">
          <nav>
            <ul className="flex flex-col gap-3 text-base text-slate-700 dark:text-slate-200">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-2xl px-4 py-3 transition ${
                        active
                          ? "bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <ThemeToggle />
            <Signup />
            <Login />
          </div>
        </div>
      )}
    </header>
  );
}
