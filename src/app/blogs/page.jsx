export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
          Latest articles
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Blog posts that help you download smarter.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Discover tips, tutorials, and news about media downloads, streaming,
          and the best tools for creators.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "How to save videos from any website",
            summary:
              "Learn the safest way to download and organize media from popular streaming platforms.",
            date: "June 12, 2026",
          },
          {
            title: "Choose the right format for sharing",
            summary:
              "Find the best export settings for mobile, social media, and playback compatibility.",
            date: "May 29, 2026",
          },
          {
            title: "Maximize download speed without sacrificing quality",
            summary:
              "Use smart presets and reliable sources for faster results every time.",
            date: "May 10, 2026",
          },
        ].map((post) => (
          <article
            key={post.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <span className="text-sm uppercase tracking-[0.35em] text-sky-600">
              Blog
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
              {post.title}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              {post.summary}
            </p>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>{post.date}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Read more
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
