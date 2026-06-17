"use client";

import { useState } from "react";
import VideoPreview from "./VideoPreview";
import QualitySelector from "./QualitySelector";
import DownloadButton from "./DownloadButton";

export default function DownloadForm() {
  const [url, setUrl] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleGetVideo = () => {
    if (!url.trim()) {
      alert("Please enter a URL");
      return;
    }

    setVideoLoaded(true);
  };

  return (
    <div className="max-w-2xl  flex-col gap-4 mx-auto ">
      <div className="flex gap-3">
        <input
          className="w-lg border-2 p-4 border-amber-600 h-12 rounded-md bg-white text-black"
   
          type="text"
          placeholder="Paste video link here(e.g.,https://..)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="bg-sky-400 text-white rounded-md font-semibold h-12 w-30"
          onClick={handleGetVideo}
        >
          Get Video
        </button>
      </div>

      {videoLoaded && (
        <div>
          <VideoPreview />
          <QualitySelector />
          <DownloadButton />
        </div>
      )}
    </div>
  );
}
