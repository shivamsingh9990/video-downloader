"use client";

import { BiSearch } from "react-icons/bi";

export default function SearchHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500 text-white shadow-xl">
          <BiSearch size={24} />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-600 dark:text-cyan-300">
            Site search
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Search the downloader
          </h2>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
      >
        Close
      </button>
    </div>
  );
}
