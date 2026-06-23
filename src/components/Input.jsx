export default function Input({ search, setSearch }) {
  return (
    <input
      className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      type="text"
      placeholder="Search platforms..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
