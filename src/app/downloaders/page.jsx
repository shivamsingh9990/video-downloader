export default function DownloadersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Downloaders</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Download every video, clip, and audio file with one tap.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Our downloader delivers fast, reliable media captures from the web with clean previews, quality controls, and instant links.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Browser Downloader",
            description: "Copy a video link and download in seconds across desktop and mobile browsers.",
            accent: "from-sky-500 to-cyan-500",
          },
          {
            title: "Batch Download",
            description: "Queue multiple videos, audio tracks, and playlists for automatic processing.",
            accent: "from-violet-500 to-fuchsia-500",
          },
          {
            title: "Smart Quality",
            description: "Choose from HD, 4K, audio-only and preset profiles with real-time preview info.",
            accent: "from-emerald-500 to-lime-500",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <div className={`mb-6 h-3 w-20 rounded-full bg-gradient-to-r ${item.accent}`} />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] bg-slate-900 px-8 py-12 text-white shadow-2xl sm:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">Built for high-volume downloads and focused workflows.</h2>
            <p className="mt-5 text-lg text-slate-300">
              Keep all your downloads organized, preview video metadata instantly, and rely on a streamlined interface that helps you focus on the content you want.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Supported sites", value: "100+" },
              { label: "Formats", value: "MP4, MP3, WEBM" },
              { label: "Speed boost", value: "Up to 3x faster" },
              { label: "Mobile ready", value: "Responsive UI" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
