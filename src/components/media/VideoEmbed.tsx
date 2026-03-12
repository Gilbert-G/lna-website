"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** YouTube video ID or direct video URL */
  src: string;
  /** Poster/thumbnail image URL. For YouTube, auto-generated if not provided. */
  poster?: string;
  title?: string;
  className?: string;
}

function getYouTubeId(src: string): string | null {
  // If it's already just an ID (no dots/slashes), return it
  if (/^[\w-]{11}$/.test(src)) return src;
  const match = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  return match?.[1] ?? null;
}

export function VideoEmbed({
  src,
  poster,
  title = "Product demo video",
  className,
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTrackedPlay = useRef(false);

  const youtubeId = getYouTubeId(src);
  const isYouTube = youtubeId !== null;

  const thumbnailUrl =
    poster ||
    (isYouTube
      ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
      : undefined);

  // Lazy load — only render iframe/video when near viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track video completion for direct video
  const hasTrackedComplete = useRef(false);
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || hasTrackedComplete.current) return;
    if (video.currentTime / video.duration > 0.9) {
      hasTrackedComplete.current = true;
      window.gtag?.("event", "video_complete", {
        video_title: title,
        video_url: src,
      });
    }
  }, [title, src]);

  function handlePlay() {
    setPlaying(true);
    if (!hasTrackedPlay.current) {
      hasTrackedPlay.current = true;
      window.gtag?.("event", "video_play", {
        video_title: title,
        video_url: src,
      });
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-black ${className ?? ""}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      {!playing ? (
        <button
          onClick={handlePlay}
          className="group absolute inset-0 flex cursor-pointer items-center justify-center"
          aria-label={`Play ${title}`}
        >
          {thumbnailUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnailUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
          <div className="relative z-10 flex size-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110 sm:size-20">
            <Play
              className="size-7 text-blue-600 sm:size-9"
              fill="currentColor"
            />
          </div>
        </button>
      ) : isNearViewport ? (
        isYouTube ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            className="absolute inset-0 h-full w-full"
            autoPlay
            controls
            playsInline
            onTimeUpdate={handleTimeUpdate}
          />
        )
      ) : null}
    </div>
  );
}
