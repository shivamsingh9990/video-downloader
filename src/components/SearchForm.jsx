"use client";

import { BiSearch } from "react-icons/bi";

export default function SearchForm({ query, setQuery, onSubmit }) {
  return (
    <form className="mt-3" onSubmit={onSubmit}>
      <label htmlFor="site-search" className="sr-only">
        Search site
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-slate-400">
          <BiSearch size={20} />
        </span>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages, blogs, FAQs, questions..."
          className="h-16 w-full rounded-3xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-32 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder-slate-400"
          autoFocus
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
        >
          Search
        </button>
      </div>
    </form>
  );
}
