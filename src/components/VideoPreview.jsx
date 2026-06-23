export default function VideoPreview() {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900">
      <img
        src="https://placehold.co/600x300"
        alt="thumbnail"
        className="w-full rounded-3xl object-cover"
      />

      <h2 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">Sample Video Title</h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">Duration: 10:20</p>
    </div>
  );
}
