"use client";

export default function SearchInstructions() {
  return (
    <div className="rounded-[1.75rem] h-50 border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
        Search instructions
      </p>
      <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
        <p>Try phrases like:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>"Show me features"</li>
          <li>"Supported platforms"</li>
          <li>"How it works"</li>
        </ul>
      </div>
    </div>
  );
}
