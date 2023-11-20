import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { ProjectMedia } from "@/models/Project";
import { stopVideos } from "@/utils/videos";
import { MediaCarousel } from "./MediaCarousel";

export default function DesktopCarousel({
  media,
  showCarousel,
  initialIndex,
  setShowCarousel,
}: {
  media: ProjectMedia;
  showCarousel: boolean;
  initialIndex: number;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
}) {
  const carouselHeight = "h-[calc(0.5625*60vw)]";
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close carousel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(event.target as Node)
      ) {
        setShowCarousel(false);
        stopVideos();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowCarousel]);

  // Make sure dialog can be closed via escape
  useEffect(() => {
    const handleEscDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowCarousel(false);
      }
    };
    window.addEventListener("keydown", handleEscDown);

    return () => {
      window.removeEventListener("keydown", handleEscDown);
    };
  }, [setShowCarousel]);

  const opacityClass = showCarousel
    ? "opacity-100"
    : "opacity-0 pointer-events-none";

  return (
    <div className={`${opacityClass} transition-all duration-500 z-50`}>
      <div className="w-screen h-screen bg-mirage/50 fixed top-0 left-0">
        <div
          ref={carouselRef}
          className={`w-[60vw] ${carouselHeight} bg-black fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2`}
        >
          <MediaCarousel
            initialIndex={initialIndex}
            media={media}
            height={carouselHeight}
          />
        </div>
      </div>
    </div>
  );
}
