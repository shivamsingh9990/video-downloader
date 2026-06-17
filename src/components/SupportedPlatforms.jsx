import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";

export default function SupportedPlatforms() {
  const platforms = [
    {
      name: "YouTube",
      icon: <FaYoutube />,
      iconClass: "text-red-600",
      cardClass: "bg-red-50 dark:bg-red-900/40",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      iconClass: "text-pink-500",
      cardClass: "bg-pink-50 dark:bg-pink-900/40",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      iconClass: "text-blue-600",
      cardClass: "bg-blue-50 dark:bg-blue-900/40",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      iconClass: "text-sky-500",
      cardClass: "bg-sky-50 dark:bg-sky-900/40",
    },
    {
      name: "Vimeo",
      icon: <FaVimeoV />,
      iconClass: "text-violet-600",
      cardClass: "bg-violet-50 dark:bg-violet-900/40",
    },
  ];

  return (
    <section id="platforms" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Supported Platforms
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Download videos from your favorite platforms.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`${platform.cardClass} rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col items-center`}
            >
              <div className={`text-5xl mb-4 ${platform.iconClass}`}>
                {platform.icon}
              </div>

              <h3 className="font-semibold text-lg">{platform.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
