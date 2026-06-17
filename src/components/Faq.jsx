export default function Faq() {
  const faqs = [
    {
      question: "Is the downloader completely free?",
      answer:
        "Yes. You can download videos without any fees, and there are no hidden charges.",
    },
    {
      question: "Which platforms can I download from?",
      answer:
        "We support popular platforms and continually expand compatibility to meet user demand.",
    },
    {
      question: "Can I choose the quality and format?",
      answer:
        "Yes. Select the resolution and format you need, including HD and audio-only options.",
    },
    {
      question: "Is my download data secure?",
      answer:
        "Your downloads remain private; we do not store your files after the process is complete.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6  dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl font-bold">Need help? We have answers.</h2>
          <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Learn more about how our video downloader works, the platforms we support, and the safety of your downloads.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">
                  ?
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
