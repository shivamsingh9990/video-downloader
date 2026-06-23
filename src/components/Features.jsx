import { FaBolt, FaHdd, FaMusic, FaMobileAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Fast Download",
      description: "Download videos quickly with an optimized experience.",
      icon: <FaBolt />,
      accent: "from-blue-500 to-cyan-400",
    },
    {
      title: "HD Quality",
      description: "Get crisp, high-resolution video downloads every time.",
      icon: <FaHdd />,
      accent: "from-purple-500 to-fuchsia-400",
    },
    {
      title: "Audio Download",
      description:
        "Extract audio tracks effortlessly in your preferred format.",
      icon: <FaMusic />,
      accent: "from-emerald-500 to-lime-400",
    },
    {
      title: "Mobile Friendly",
      description: "Enjoy a smooth download experience on phones and tablets.",
      icon: <FaMobileAlt />,
      accent: "from-orange-500 to-amber-400",
    },
  ];

  return (
    <section id="features" className="py-24 px-6  dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-slate-500 dark:text-white">
            What makes us better
          </p>
          <h2 className="mt-4 text-4xl font-bold  dark:text-white">
            Modern features for fast downloads
          </h2>
          <p className="mx-auto mt-4 max-w-2xl  dark:text-white">
            Everything you need in one interface: speed, quality controls, smart
            previews, and mobile-ready downloads.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.accent} text-white shadow-xl transition-transform duration-300 group-hover:scale-105`}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
