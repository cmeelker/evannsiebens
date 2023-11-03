"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectMedia } from "@/models/Project";
import { MediaCarousel } from "./MediaCarousel";

export default function MobileCarousel({ media }: { media: ProjectMedia }) {
  const carouselHeight = "h-[calc(0.5625*100vw)]";

  if (media.images === undefined && media.videos === undefined) {
    return <></>;
  }

  return (
    <div className="w-screen mb-16 -mt-[27px] -ml-3">
      <MediaCarousel media={media} height={carouselHeight} />
    </div>
  );
}
