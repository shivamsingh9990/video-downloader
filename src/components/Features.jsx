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
      description: "Extract audio tracks effortlessly in your preferred format.",
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
    <section id="features" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Features</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-lg`}>
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
