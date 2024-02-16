"use client";

import { ProjectMedia } from "@/models/Project";

import ImageBar from "./ImageBar";
import { useRef, useState } from "react";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { indexOfLowestValue } from "@/utils/lists";
import CarouselNavigation from "../CarouselNavigation";
import { useScrollEffect } from "@/hooks/useScrollEvent";

export default function MobileCarousel({ media }: { media: ProjectMedia }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width: windowWidth } = useWindowDimensions();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useScrollEffect(scrollContainerRef, updateCurrentIndex);

  const mediaLength = media.images.length + media.videos.length;

  if (media.images === undefined && media.videos === undefined) {
    return <></>;
  }

  function scrollToNext() {
    const nextIndex = currentIndex === mediaLength - 1 ? 0 : currentIndex + 1;
    const element = document.getElementById(nextIndex.toString());

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  function updateCurrentIndex() {
    const distances: number[] = [];

    [...Array(mediaLength)].map((value, index) => {
      distances.push(Math.abs(getImageDifferenceScrollLeft(index)));
    });

    const newCurrentIndex = indexOfLowestValue(distances);
    setCurrentIndex(newCurrentIndex);
  }

  function getImageDifferenceScrollLeft(index: number) {
    const scrollDiv = scrollContainerRef.current;
    const scrollLeft = scrollDiv?.scrollLeft || 0;

    const element = document.getElementById(index.toString());
    const offsetLeft = element?.offsetLeft || 0;
    const imageWidth = element?.clientWidth || 0;

    return scrollLeft - (offsetLeft - (windowWidth - imageWidth) / 2);
  }

  return (
    <div>
      <ImageBar media={media} scrollRef={scrollContainerRef} />

      <div className="w-full md:w-1/3 pt-3 md:pt-0">
        <CarouselNavigation
          currentSlide={currentIndex}
          nextSlide={scrollToNext}
          total={media.images.length + media.videos.length}
        />
      </div>
    </div>
  );
}
