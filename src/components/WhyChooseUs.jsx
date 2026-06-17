export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Speed",
      description: "Download videos instantly with a fast, optimized pipeline for all supported platforms.",
      badgeClass: "bg-blue-50 text-blue-700",
    },
    {
      title: "Security",
      description: "Your downloads stay private and secure with safe handling across the app.",
      badgeClass: "bg-green-50 text-green-700",
    },
    {
      title: "Quality",
      description: "Choose HD and high-quality formats so your downloads look great every time.",
      badgeClass: "bg-purple-50 text-purple-700",
    },
    {
      title: "Formats",
      description: "Supports multiple video and audio formats so you can download the output you need.",
      badgeClass: "bg-orange-50 text-orange-700",
    },
  ];

  return (
    <section id="why-choose-us" className="py-2 px-6  dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-3">
            Why choose us
          </p>
          <h2 className="text-4xl font-bold">Download smarter with confidence</h2>
          <p className="mt-4 text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            We make video downloads fast, secure, reliable, and compatible with the formats you need.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
              <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${reason.badgeClass}`}>
                {reason.title}
              </span>
              <p className="mt-4 text-gray-600 dark:text-slate-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
