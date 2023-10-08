"use client";

import { StrapiImage } from "@/models/Image";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import ImageCount from "./ImageCount";
import DesktopCarousel from "./carousel/DesktopCarousel";

export default function ProjectImagesList({ media }: { media: StrapiImage[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <>
      <ImageList
        images={media}
        setShowCarousel={setShowCarousel}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      <ImageCount selected={selectedImageIndex} total={media.length} />
      <DesktopCarousel
        images={media}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
}

function ImageList({
  images,
  setShowCarousel,
  setSelectedImageIndex,
}: {
  images: StrapiImage[];
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
  setSelectedImageIndex: Dispatch<SetStateAction<number>>;
}) {
  return images.map((image, index) => {
    return (
      <button
        key={index}
        className={`h-[6.4rem] w-full transition-all duration-300 delay-100 hover:h-[31rem] hover:w-[51rem] relative`}
        onClick={() => setShowCarousel(true)}
        onMouseEnter={() => setSelectedImageIndex(index)}
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
