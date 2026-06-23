"use client";

export default function QualitySelector({ quality, setQuality }) {
  const qualities = ["1080p", "720p", "480p", "360p"];

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {qualities.map((item) => (
        <button
          key={item}
          onClick={() => setQuality(item)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
            quality === item
              ? "border-cyan-500 bg-cyan-500 text-white"
              : "border-slate-300 bg-white text-slate-900 hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
