"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CinematicMediaProps {
  poster: string;
  videoSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  autoPlay?: boolean;
}

export default function CinematicMedia({
  poster,
  videoSrc,
  alt,
  className,
  priority,
  sizes = "100vw",
  autoPlay = true,
}: CinematicMediaProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-ink", className)}>
      {videoSrc ? (
        <video
          className="h-full w-full object-cover"
          poster={poster}
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
        >
          <source
            src={videoSrc}
            type={videoSrc.endsWith(".webm") ? "video/webm" : "video/mp4"}
          />
        </video>
      ) : (
        <Image
          src={poster}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
