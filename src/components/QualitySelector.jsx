"use client";

export default function QualitySelector({ quality, setQuality }) {
  const qualities = ["1080p", "720p", "480p", "360p"];

  return (
    <div className="flex gap-3 mt-4">
      {qualities.map((item) => (
        <button
          key={item}
          onClick={() => setQuality(item)}
          className={`px-4 py-2 border rounded ${
            quality === item ? "bg-black text-white" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
