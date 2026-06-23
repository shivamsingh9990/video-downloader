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
    <section id="platforms" className="py-24 px-6 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold  mb-4  dark:text-white">
          Supported Platforms
        </h2>

        <p className=" font-bold text-slate-400 mb-16">
          Download videos from your favorite platforms.
        </p>
        <div className="mb-5">
          <Input search={search} setSearch={setSearch} />
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {visibleCards.length === 0 ? (
            <div className="col-span-full text-center text-slate-500 dark:text-slate-400">
              No platforms match &quot;{search}&quot;
            </div>
          ) : (
            visibleCards.map((platform) => (
              <div
                key={platform.id}
                className={`${platform.cardClass} rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 flex flex-col items-center`}
              >
                <div className={`text-5xl mb-4 ${platform.iconClass}`}>
                  {platform.icon}
                </div>

                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                  {platform.name}
                </h3>
              </div>
            ))
          )}
          {remainingCount > 0 && (
            <div
              onClick={() => setShowModal(true)}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500 dark:hover:bg-slate-800"
            >
              +{remainingCount} More
            </div>
          )}
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-slate-950/80 flex justify-center items-center px-4 py-8">
            <div className="w-full max-w-5xl overflow-hidden rounded-4xl border border-slate-700 bg-slate-950 shadow-2xl">
              <div className="flex flex-col gap-4 border-b border-slate-800 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Platforms ({filteredPlatforms.length})
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-3xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
                {filteredPlatforms.map((platform) => (
                  <div
                    key={platform.id}
                    className={`${platform.cardClass} rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center justify-center`}
                  >
                    <div className={`text-5xl mb-4 ${platform.iconClass}`}>
                      {platform.icon}
                    </div>

                    <h3 className="text-center text-sm font-semibold text-slate-100">
                      {platform.name}
                    </h3>
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
