import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useState, useEffect, RefObject } from "react";
import Image from "next/image";
import { ProjectMedia } from "@/models/Project";

export default function ImageBar({
  media,
  scrollRef,
}: {
  media: ProjectMedia;
  scrollRef: RefObject<HTMLDivElement>;
}) {
  const { width: windowWidth } = useWindowDimensions();
  const carouselHeightStyle = "h-[calc(0.5625*100vw)]";

  const [carouselHeight, setCarouselHeight] = useState(0);

  useEffect(() => {
    const carouselHeight = windowWidth * 0.5625;
    setCarouselHeight(carouselHeight);
  }, [windowWidth]);

  return (
    <div
      ref={scrollRef}
      className={`-mx-3 flex flex-nowrap overflow-y-hidden scrollbar-hide  ${carouselHeightStyle}`}
    >
      {media.images.map((image, index) => {
        const newWidth = (image.width / image.height) * carouselHeight;
        return (
          <div
            id={index.toString()}
            key={index}
            style={{ width: newWidth }}
            className={"h-full relative flex-carousel snap-center"}
          >
            <Image
              className={"object-contain object-bottom"}
              src={image.url}
              alt={image.alt || ""}
              fill={true}
            />
          </div>
        );
      })}
      {media.videos.map((video, index) => {
        return (
          <div
            id={(media.images.length + index).toString()}
            key={index}
            className={`${carouselHeightStyle} w-[100vw] flex-carousel`}
          >
            <iframe
              loading="lazy"
              className={carouselHeightStyle}
              src={`https://player.vimeo.com/video/${video.vimeoId}`}
              width="100%"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
