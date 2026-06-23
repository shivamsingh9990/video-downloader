"use client";

const quickLabels = [
  "Home",
  "Features",
  "Supported Platforms",
  "How It Works",
  "Why Choose Us",
  "Downloaders",
];

export default function SearchQuickActions({ onSelect }) {
  return (
    <div className="rounded-[1.75rem]  h-70 border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
        Most searched
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {quickLabels.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            className="rounded-full border border-slate-700 bg-white px-4 py-2 text-sm text-black transition hover:border-cyan-400 hover:bg-slate-200"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
