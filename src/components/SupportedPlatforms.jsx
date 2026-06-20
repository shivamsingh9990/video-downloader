"use client";
import { useState } from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaVimeoV,
  FaTiktok,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
  FaSnapchatGhost,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";
import Input from "./Input";

export default function SupportedPlatforms() {
  const platforms = [
    { id:1,
      name: "YouTube",
      icon: <FaYoutube />,
      iconClass: "text-red-600",
      cardClass: "bg-red-50 dark:bg-red-900/40",
    },
    { id:2,
      name: "Instagram",
      icon: <FaInstagram />,
      iconClass: "text-pink-500",
      cardClass: "bg-pink-50 dark:bg-pink-900/40",
    },
    { id:3,
      name: "Facebook",
      icon: <FaFacebook />,
      iconClass: "text-blue-600",
      cardClass: "bg-blue-50 dark:bg-blue-900/40",
    },
    { id:4,
      name: "Twitter",
      icon: <FaTwitter />,
      iconClass: "text-sky-500",
      cardClass: "bg-sky-50 dark:bg-sky-900/40",
    },
    { id:5,
      name: "Vimeo",
      icon: <FaVimeoV />,
      iconClass: "text-violet-600",
      cardClass: "bg-violet-50 dark:bg-violet-900/40",
    },
    { id:6,
      name: "TikTok",
      icon: <FaTiktok />,
      iconClass: "text-black",
      cardClass: "bg-gray-50 dark:bg-gray-900/40",
    },
    { id:7,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      iconClass: "text-blue-700",
      cardClass: "bg-blue-50 dark:bg-blue-900/40",
    },
    { id:8,
      name: "Pinterest",
      icon: <FaPinterest />,
      iconClass: "text-red-500",
      cardClass: "bg-red-50 dark:bg-red-900/40",
    },
    { id:9,
      name: "Reddit",
      icon: <FaReddit />,
      iconClass: "text-orange-500",
      cardClass: "bg-orange-50 dark:bg-orange-900/40",
    },
    { id:10,
      name: "Discord",
      icon: <FaDiscord />,
      iconClass: "text-indigo-500",
      cardClass: "bg-indigo-50 dark:bg-indigo-900/40",
    },
    { id:11,
      name: "Telegram",
      icon: <FaTelegram />,
      iconClass: "text-sky-500",
      cardClass: "bg-sky-50 dark:bg-sky-900/40",
    },
    { id:12,
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      iconClass: "text-green-500",
      cardClass: "bg-green-50 dark:bg-green-900/40",
    },
    { id:13,
      name: "Snapchat",
      icon: <FaSnapchatGhost />,
      iconClass: "text-yellow-500",
      cardClass: "bg-yellow-50 dark:bg-yellow-900/40",
    },
    { id:14,
      name: "Twitch",
      icon: <FaTwitch />,
      iconClass: "text-purple-600",
      cardClass: "bg-purple-50 dark:bg-purple-900/40",
    },
    { id:15,
      name: "Github",
      icon: <FaGithub />,
      iconClass: "text-gray-800 dark:text-gray-200",
      cardClass: "bg-gray-50 dark:bg-gray-900/40",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const visibleCards = platforms.slice(0, 14);
  const remainingCount = platforms.length - 14;
  return (
    <section id="platforms" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Supported Platforms</h2>

        <p className="text-center text-gray-500 mb-16">
          Download videos from your favorite platforms.
        </p>
       
        

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {visibleCards.map((platform) => (
            <div 
              key={platform.id}
              className={`${platform.cardClass} rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col items-center`}
            >
              <div className={`text-5xl mb-4 ${platform.iconClass}`}>
                {platform.icon}
              </div>

              <h3 className="font-semibold text-lg">{platform.name}</h3>
            </div>
          ))}
          <div
            onClick={() => setShowModal(true)}
            className="p-4 border rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer font-bold"
          >
            +{remainingCount} More
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white w-[90%] max-w-5xl p-6 rounded-lg">
              <div className="flex justify-between mb-4 ">
                <h2 className="text-2xl font-bold">
                  All Cards ({platforms.length})
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto">
                {platforms.map((platform) => (
                  <div 
                    key={platform.id}
                    className={`${platform.cardClass} rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col items-center`}
                  >
                    <div className={`text-5xl mb-4 ${platform.iconClass}`}>
                      {platform.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
