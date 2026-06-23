import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 text-slate-900 dark:text-white"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-xl font-bold text-white shadow-lg shadow-slate-400/10 dark:bg-cyan-500 dark:text-slate-950">
        WD
      </div>
      <div>
        <p className="text-base font-semibold">Website Downloader</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Fast downloads, clean UX
        </p>
      </div>
    </Link>
  );
}
