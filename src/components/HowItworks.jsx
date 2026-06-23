import { FaLink, FaVideo, FaSlidersH, FaDownload } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: <FaLink />,
      title: "Paste Video URL",
      description:
        "Copy the video link from your favorite platform and paste it into the downloader.",
      iconClass: "bg-gradient-to-br from-cyan-500 to-blue-500 text-white",
    },
    {
      id: "02",
      icon: <FaVideo />,
      title: "Get Video Info",
      description:
        "We fetch the thumbnail, title, and available download qualities.",
      iconClass: "bg-gradient-to-br from-rose-500 to-pink-500 text-white",
    },
    {
      id: "03",
      icon: <FaSlidersH />,
      title: "Choose Quality",
      description: "Select the video quality that best suits your needs.",
      iconClass: "bg-gradient-to-br from-yellow-400 to-amber-500 text-white",
    },
    {
      id: "04",
      icon: <FaDownload />,
      title: "Download",
      description:
        "Click the download button and save the video to your device.",
      iconClass: "bg-gradient-to-br from-emerald-500 to-teal-400 text-white",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 px-6 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">How It Works</h2>

        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          Download your favorite videos in just a few simple steps.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 ${step.iconClass}`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{step.title}</h3>

              <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
