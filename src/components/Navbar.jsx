"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { BiMenu, BiX, BiSearch } from "react-icons/bi";
import Logo from "./Logo";
import Login from "./Login";
import NavLinks from "./NavLinks";
import SearchModal from "./SearchModal";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isActive = (href) => href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="relative z-50">
      <div className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Logo />

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <NavLinks links={navLinks} isActive={isActive} />
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-cyan-400 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
              aria-label="Open search"
            >
              <BiSearch size={20} />
            </button>

            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              <Signup />
              <Login />
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 md:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <BiX size={22} /> : <BiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-950 md:hidden">
          <nav>
            <NavLinks links={navLinks} isActive={isActive} variant="vertical" />
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <ThemeToggle />
            <Signup />
            <Login />
          </div>
        </div>
      )}

      <SearchModal
        open={searchOpen}
        query={query}
        setQuery={setQuery}
        onClose={() => {
          setSearchOpen(false);
          setQuery("");
        }}
      />
    </header>
  );
}
