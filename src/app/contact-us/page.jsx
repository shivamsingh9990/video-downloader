export default function ContactUsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Contact Us</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Have questions? We’re here to help.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Reach out with feedback, support requests, or ideas to improve our downloader experience.
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Get in touch</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Send us a message, ask about features, or share your favorite download use case.</p>

          <div className="mt-10 space-y-6 text-slate-700 dark:text-slate-300">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Email</p>
              <p className="mt-2">support@websitedownloader.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Response time</p>
              <p className="mt-2">Usually within 24 hours</p>
            </div>
          </div>
        </div>

        <form className="space-y-6 rounded-4xl border border-slate-200 bg-slate-50 p-10 shadow-sm dark:border-slate-700 dark:bg-slate-950">
          <label className="block">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Name</span>
            <input type="text" placeholder="Your name" className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Email</span>
            <input type="email" placeholder="you@example.com" className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Message</span>
            <textarea rows="5" placeholder="Tell us how we can help" className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"></textarea>
          </label>
          <button type="submit" className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
