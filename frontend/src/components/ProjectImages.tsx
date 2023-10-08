"use client";

// TO DO:
// Mobile carousel
// OnClick carousel desktop

import { StrapiImage } from "@/models/Image";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function ProjectImages({ media }: { media: StrapiImage[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <>
      <ImageList
        images={media}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      <ImageCount selected={selectedImageIndex} total={media.length} />
      <ImageCarousel
        images={media}
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
      />
    </>
  );
}

function ImageCount({ selected, total }: { selected: number; total: number }) {
  return (
    <div className="absolute text-nav">
      {selected === -1 ? 0 : selected + 1}/{total}
    </div>
  );
}

function ImageList({
  images,
  showCarousel,
  setShowCarousel,
  selectedImageIndex,
  setSelectedImageIndex,
}: {
  images: StrapiImage[];
  showCarousel: boolean;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
  selectedImageIndex: number;
  setSelectedImageIndex: Dispatch<SetStateAction<number>>;
}) {
  return images.map((image, index) => {
    return (
      <li
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
      </li>
    );
  });
}

function ImageCarousel({
  images,
  showCarousel,
  setShowCarousel,
}: {
  images: StrapiImage[];
  showCarousel: boolean;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
}) {
  // todo: animation toevoegen

  return <></>;

  //   if (!showCarousel) {
  //     return <></>;
  //   }

  //   return (
  //     <div className="w-screen h-screen bg-mirage/50 fixed top-0 left-0">
  //       <div className="w-[400px] h-[400px] bg-pink-400 fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"></div>
  //     </div>
  //   );
}
