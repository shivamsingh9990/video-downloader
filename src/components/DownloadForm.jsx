"use client";

import { useState } from "react";
import VideoPreview from "./VideoPreview";
import QualitySelector from "./QualitySelector";
import DownloadButton from "./DownloadButton";

export default function DownloadForm() {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("1080p");
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleGetVideo = () => {
    if (!url.trim()) {
      alert("Please enter a URL");
      return;
    }

    setVideoLoaded(true);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border  border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 transition duration-300 dark:border-slate-700 dark:bg-slate-950/95 dark:shadow-none">
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          className="min-w-0 flex-1 rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          type="text"
          placeholder="Paste video link here (e.g. https://...)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="rounded-3xl bg-cyan-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-cyan-500 dark:hover:bg-cyan-400"
          onClick={handleGetVideo}
        >
          Get Video
        </button>
      </div>

      {videoLoaded && (
        <div className="mt-8 space-y-6">
          <VideoPreview />
          <QualitySelector />
          <DownloadButton />
        </div>
      )}
    </div>
  );
}
