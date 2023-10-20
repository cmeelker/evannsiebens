"use client";

import { ContentfulImage } from "@/models/Image";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import MediaCount from "./MediaCount";
import DesktopCarousel from "./carousel/DesktopCarousel";

export default function MediaList({ media }: { media: ContentfulImage[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [showCarousel, setShowCarousel] = useState(false);
  const [lastHoverIndex, setLastHoverIndex] = useState(0);

  return (
    <>
      <ImageList
        images={media}
        setShowCarousel={setShowCarousel}
        setSelectedImageIndex={setSelectedImageIndex}
        setLastHoverIndex={setLastHoverIndex}
      />
      <MediaCount selected={selectedImageIndex} total={media.length} />
      <DesktopCarousel
        images={media}
        showCarousel={showCarousel}
        initialIndex={lastHoverIndex}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
}

function ImageList({
  images,
  setShowCarousel,
  setSelectedImageIndex,
  setLastHoverIndex,
}: {
  images: ContentfulImage[];
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
  setSelectedImageIndex: Dispatch<SetStateAction<number>>;
  setLastHoverIndex: Dispatch<SetStateAction<number>>;
}) {
  return images.map((image, index) => {
    return (
      <button
        key={index}
        className={`h-[6.4rem] w-full transition-all duration-300 delay-100 hover:h-[31rem] hover:w-[51rem] relative`}
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
          className="object-cover"
          src={image.url}
          alt={image.alt || ""}
          fill={true}
        />
      </button>
    );
  });
}
