"use client";
import { useState } from "react";
import { platforms } from "@/data/Platform";
import Fuse from "fuse.js";

import Input from "./Input";

export default function SupportedPlatforms() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const fuse = new Fuse(platforms, {
    keys: ["name"],
    threshold: 0.3,
  });
  const filteredPlatforms = search
    ? fuse.search(search).map((result) => result.item)
    : platforms;
  const visibleCards = filteredPlatforms.slice(0, 14);
  const remainingCount = filteredPlatforms.length - visibleCards.length;
  return (
    <section id="platforms" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Supported Platforms</h2>

        <p className="text-center text-gray-500 mb-16">
          Download videos from your favorite platforms.
        </p>
        <div className="mb-5">
          <Input search={search} setSearch={setSearch} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {visibleCards.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No platforms match "{search}"
            </div>
          ) : (
            visibleCards.map((platform) => (
              <div
                key={platform.id}
                className={`${platform.cardClass} rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col items-center`}
              >
                <div className={`text-5xl mb-4 ${platform.iconClass}`}>
                  {platform.icon}
                </div>

                <h3 className="font-semibold text-lg">{platform.name}</h3>
              </div>
            ))
          )}
          {remainingCount > 0 && (
            <div
              onClick={() => setShowModal(true)}
              className="p-4 border rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer font-bold"
            >
              +{remainingCount} More
            </div>
          )}
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white w-[90%] max-w-5xl p-6 rounded-lg">
              <div className="flex justify-between mb-4 ">
                <h2 className="text-2xl font-bold">
                  Platforms ({filteredPlatforms.length})
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto">
                {filteredPlatforms.map((platform) => (
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
