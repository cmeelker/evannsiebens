"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import MediaCount from "./MediaCount";
import DesktopCarousel from "./carousel/desktop/DesktopCarousel";
import { ProjectMedia } from "@/models/Project";
import { stopVideos } from "@/utils/videos";

export default function MediaList({ media }: { media: ProjectMedia }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [showCarousel, setShowCarousel] = useState(false);
  const [lastHoverIndex, setLastHoverIndex] = useState(0);

  if (media.images === undefined && media.videos === undefined) {
    return <></>;
  }

  return (
    <>
      <ThumbnailList
        media={media}
        setShowCarousel={setShowCarousel}
        setSelectedImageIndex={setSelectedImageIndex}
        setLastHoverIndex={setLastHoverIndex}
      />
      <MediaCount
        selected={selectedImageIndex}
        total={media.images.length + media.videos.length}
      />
      <DesktopCarousel
        media={media}
        showCarousel={showCarousel}
        initialIndex={lastHoverIndex}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
}

function ThumbnailList({
  media,
  setShowCarousel,
  setSelectedImageIndex,
  setLastHoverIndex,
}: {
  media: ProjectMedia;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
  setSelectedImageIndex: Dispatch<SetStateAction<number>>;
  setLastHoverIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      {media.images.map((image, index) => {
        return (
          <button
            key={index}
            className={`h-[3.9rem] lg:h-[4.4rem] xl:h-[6rem] w-full transition-all duration-300 delay-100 hover-hover:hover:h-[31rem] hover-hover:hover:w-[51rem] relative`}
            onClick={() => {
              setShowCarousel(true);
              setSelectedImageIndex(index);
              setLastHoverIndex(index);
            }}
            onMouseEnter={() => {
              setSelectedImageIndex(index);
              setLastHoverIndex(index);
            }}
            onMouseLeave={() => setSelectedImageIndex(-1)}
          >
            <Image
              className={"object-contain object-right"}
              src={image.url}
              alt={image.alt || ""}
              fill={true}
            />
          </button>
        );
      })}
      {media.videos.map((video, index) => {
        return (
          <button
            key={index}
            className={`h-[6.4rem] w-full transition-all duration-300 delay-100 hover-hover:hover:h-[31rem] hover-hover:hover:w-[51rem] relative`}
            onClick={() => {
              setShowCarousel(true);
              setSelectedImageIndex(index + media.images.length);
              setLastHoverIndex(index + media.images.length);
            }}
            onMouseEnter={() => {
              setSelectedImageIndex(index + media.images.length);
              setLastHoverIndex(index + media.images.length);
            }}
            onMouseLeave={() => {
              setSelectedImageIndex(-1);
              stopVideos();
            }}
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="h-[60%] w-1/2 absolute z-10">
                <Image src="/icons/play.svg" fill={true} alt="" />
              </div>
              <Image
                className="object-cover"
                src={video.thumbnailUrl}
                alt={video.title}
                fill={true}
              />
            </div>
          </button>
        );
      })}
    </>
  );
  return;
}
