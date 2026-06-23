export default function AboutUsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
          About Us
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          We help you capture online media with confidence.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Website Downloader is built to simplify media capture: fast links,
          clear controls, and a focus on usability.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6 rounded-4xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Our mission
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            We believe downloading videos and audio should be fast, accessible,
            and reliable. Our goal is to give everyone a simple tool for getting
            the content they care about, without clutter or confusion.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            From creators to learners, we design every screen to help visitors
            focus on what matters most: finding the right media and downloading
            it quickly.
          </p>
        </div>

        <div className="grid gap-6">
          {[
            { label: "Trusted by creators", value: "200K+ downloads" },
            { label: "Supported platforms", value: "20+ major sites" },
            { label: "Customer rating", value: "4.9/5" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-[1.75rem] bg-slate-50 p-8 text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-4 text-3xl font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
