import Faq from "@/components/Faq";

export default function FaqsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Support & answers</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Frequently asked questions about using our downloader.
        </h1>
      </section>
      <Faq />
    </main>
  );
}
