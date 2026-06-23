"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import SearchHeader from "./SearchHeader";
import SearchForm from "./SearchForm";
import SearchQuickActions from "./SearchQuickActions";
import SearchSuggestions from "./SearchSuggestions";
import SearchInstructions from "./SearchInstructions";

const searchItems = [
  {
    label: "About Us",
    href: "/about-us",
    description: "Learn who we are and why we built this tool.",
  },
  {
    label: "FAQs",
    href: "/faqs",
    description: "Find answers to common downloading questions.",
  },
  {
    label: "Blogs",
    href: "/blogs",
    description: "Read our latest guides and troubleshooting tips.",
  },
  {
    label: "Services",
    href: "/services",
    description: "Explore premium features and fast-download options.",
  },
  {
    label: "Downloaders",
    href: "/downloaders",
    description: "Access all download tools and quality controls.",
  },
  {
    label: "Contact",
    href: "/contact-us",
    description: "Get support for any issue or feature request.",
  },
  { label: "Home", href: "/", description: "Return to the main landing page." },
  {
    label: "Features",
    href: "/#features",
    description: "See our key download and interface benefits.",
  },
  {
    label: "Supported Platforms",
    href: "/#platforms",
    description: "View the platforms we support for downloads.",
  },
  {
    label: "How It Works",
    href: "/#how-it-works",
    description: "Learn the step-by-step download process.",
  },
  {
    label: "Why Choose Us",
    href: "/#why-choose-us",
    description: "Read why our downloader is the best choice.",
  },
  {
    label: "Video quality",
    href: "/downloaders",
    description: "Search for HD, 4K, and audio-only download options.",
  },
];

export default function SearchModal({ open, query, setQuery, onClose }) {
  const router = useRouter();

  if (!open) return null;

  const fuse = useMemo(
    () =>
      new Fuse(searchItems, {
        keys: ["label", "description"],
        threshold: 0.6,
        distance: 100,
        ignoreLocation: true,
        findAllMatches: true,
        minMatchCharLength: 1,
      }),
    [],
  );

  const filteredSearch = useMemo(() => {
    const term = query.trim();

    if (!term) return searchItems;

    const lowerTerm = term.toLowerCase();
    const exactMatches = searchItems.filter(
      (item) =>
        item.label.toLowerCase().includes(lowerTerm) ||
        item.description.toLowerCase().includes(lowerTerm),
    );

    const fuzzyResults = fuse.search(term).map((result) => result.item);
    const mergedResults = Array.from(
      new Set([...exactMatches, ...fuzzyResults]),
    );

    return mergedResults.length ? mergedResults : searchItems;
  }, [query, fuse]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = filteredSearch[0] || null;
    if (target) {
      onClose();
      router.push(target.href);
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-full overflow-hidden bg-white/90 backdrop-blur-sm px-4 py-6 sm:px-6 dark:bg-slate-950/95">
      <div className="mx-auto flex max-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col gap-6 overflow-hidden rounded-4xl bg-white p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/80 sm:p-10 dark:bg-slate-900 dark:shadow-slate-950/40 dark:ring-slate-700/40">
        <SearchHeader onClose={onClose} />
        <SearchForm query={query} setQuery={setQuery} onSubmit={handleSubmit} />

        <div className="grid min-h-0 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SearchQuickActions onSelect={setQuery} />
          <SearchSuggestions
            filteredSearch={filteredSearch}
            onClose={onClose}
          />
          <SearchInstructions />
        </div>
      </div>
    </div>
  );
}
