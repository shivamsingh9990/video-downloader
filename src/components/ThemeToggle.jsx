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
    <div className="">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className=" w-20px h-20px  rounded"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
