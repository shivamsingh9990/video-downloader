export default function DownloadButton({ quality }) {
  return (
    <button className="mt-4 rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500/40">
      Download {quality ?? "Video"}
    </button>
  );
}
