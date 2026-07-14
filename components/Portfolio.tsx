"use client";

import { useRef, useState } from "react";

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "Audi R8 Commercial",
      category: "Automotive",
      src: "/portfolio/audi.mp4",
    },
    {
      title: "Grxvitas.Media Showreel",
      category: "Agency Reel",
      src: "/portfolio/agency.mp4",
    },
  ];

  return (
    <>
      <section id="portfolio" className="bg-black py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 text-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-gray-400">
              Portfolio
            </span>

            <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
              Selected Work
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Premium AI commercials crafted with cinematic storytelling,
              luxury visuals and scroll-stopping creativity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((video) => (
              <VideoCard
                key={video.title}
                video={video}
                onClick={() => setSelectedVideo(video.src)}
              />
            ))}
          </div>

        </div>
      </section>

      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-5xl items-center justify-center"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-white hover:text-black"
            >
              ×
            </button>

            <video
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              onEnded={() => setSelectedVideo(null)}
              className="max-h-[85vh] max-w-full rounded-3xl border border-white/10 object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

function VideoCard({
  video,
  onClick,
}: {
  video: any;
  onClick: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = async () => {
    if (!ref.current) return;

    try {
      ref.current.currentTime = 0;
      await ref.current.play();
    } catch {}
  };

  const pause = () => {
    if (!ref.current) return;

    ref.current.pause();
    ref.current.currentTime = 0;
  };

  return (    <div
      onMouseEnter={play}
      onMouseLeave={pause}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-[#080808] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
    >
      <div className="relative aspect-video overflow-hidden">

        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        >
          <source src={video.src} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl text-white backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
            ▶
          </div>
        </div>

      </div>

      <div className="space-y-4 p-8">

        <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
          {video.category}
        </p>

        <h3 className="text-3xl font-bold text-white">
          {video.title}
        </h3>

        <p className="leading-8 text-gray-400">
          Premium AI commercial crafted with cinematic visuals and luxury storytelling.
        </p>

        <div className="pt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
          Watch Commercial →
        </div>

      </div>

    </div>
  );
}