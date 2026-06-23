"use client";

import Link from "next/link";

export default function SearchSuggestions({ filteredSearch, onClose }) {
  return (
    <div className="rounded-[1.75rem] w-full min-h-0 max-h-[40rem] overflow-y-auto border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-black-400">Search suggestions</p>
      <div className="mt-5 space-y-4">
        {filteredSearch.slice(0, 12).map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block rounded-3xl border border-slate-800 bg-white px-4 py-4 transition hover:border-cyan-400 hover:bg-slate-200"
            onClick={onClose}
          >
            <p className="font-semibold text-black">{item.label}</p>
            <p className="mt-1 text-sm text-black break-words">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
