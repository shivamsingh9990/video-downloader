"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
