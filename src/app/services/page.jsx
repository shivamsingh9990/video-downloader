export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Our Services</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Powerful tools to convert, manage, and share media.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Explore our full suite of services designed to make downloads smooth, fast, and easy to use.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Video Conversion",
            description: "Save videos in MP4, WEBM, or audio-only formats with no quality loss.",
          },
          {
            title: "URL Analysis",
            description: "Instantly identify supported media sources and preview available resolutions.",
          },
          {
            title: "Secure Transfer",
            description: "Download content safely through encrypted server processing with privacy-first handling.",
          },
          {
            title: "Cloud-friendly Links",
            description: "Generate shareable download links that work across devices and platforms.",
          },
        ].map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{service.title}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Service support for every creator.</h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Whether you need a single download or a large batch export, our service stack keeps every step clear and predictable.
          </p>
        </div>
        <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-950">
          {[
            { label: "Real-time status", value: "Track processing instantly" },
            { label: "Custom profiles", value: "Save quality and format presets" },
            { label: "Device sync", value: "Start on desktop, finish on mobile" },
          ].map((item) => (
            <div key={item.label} className="py-4">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-3 text-base text-slate-700 dark:text-slate-200">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
