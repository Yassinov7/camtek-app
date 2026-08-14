'use client';

import { useState } from 'react';

interface VideoItem {
  title: string;
  description: string;
  src: string;
}

interface ServicesVideoSelectorProps {
  videoGallery: VideoItem[];
}

export default function ServicesVideoSelector({ videoGallery }: ServicesVideoSelectorProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videoGallery[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
          <video
            key={activeVideo.src}
            className="h-full w-full object-contain bg-slate-950"
            autoPlay
            muted
            loop
            playsInline
            poster="/new public/advertise posters/لا تترك امنك للصدفة- احم مايهمك قبل فوات الاوان -بوستر نصي مع صور مناسبة.jpg"
          >
            <source src={activeVideo.src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/35 to-transparent" />
          <div className="absolute inset-0 flex items-end p-5 sm:p-8">
            <div className="max-w-xl">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-100/90 sm:text-xs">
                CamTek
              </p>
              <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl">
                {activeVideo.title}
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-200 sm:text-base">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {videoGallery.slice(1).map((video, index) => {
          const isActive = activeVideo.src === video.src;

          return (
            <button
              key={video.src}
              type="button"
              aria-pressed={isActive}
              className={`group relative overflow-hidden rounded-2xl border text-right shadow-sm transition-all duration-200 ${
                isActive
                  ? 'border-primary bg-primary/5 shadow-md ring-2 ring-primary/20'
                  : 'border-slate-200 bg-white hover:border-primary/60 hover:shadow-md'
              }`}
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative h-32 overflow-hidden bg-slate-950 sm:h-36">
                <video
                  className="h-full w-full object-contain bg-slate-950"
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/25 via-slate-900/10 to-slate-900/20" />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${isActive ? 'bg-primary text-white' : 'bg-white/90 text-slate-800'}`}>
                    {index + 2}
                  </span>
                </div>
              </div>
              <div className="px-3 py-2">
                <p className="text-sm font-bold text-slate-900">{video.title}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
