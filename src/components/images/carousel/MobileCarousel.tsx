"use client";

import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaCount from "../MediaCount";
import { useState } from "react";
import { ProjectMedia } from "@/models/Project";
import Vimeo from "@u-wave/react-vimeo";

export default function MobileCarousel({ media }: { media: ProjectMedia }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    speed: 500,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };
  return (
    <div className="w-screen mb-16 mt-2 -ml-3">
      <Slider {...settings}>
        {media.images.map((image, index) => {
          return (
            <div key={index} className="h-[20rem] relative">
              <Image
                className="object-cover"
                src={image.url}
                alt={image.alt || ""}
                fill={true}
              />
            </div>
          );
        })}
        {media.videos.map((video, index) => {
          return (
            <div key={index}>
              <Vimeo video={video.vimeoId} autoplay responsive />
            </div>
          );
        })}
      </Slider>
      <div className="text-lg absolute top-0 right-0 -mr-3">
        <MediaCount
          selected={currentSlide}
          total={media.images.length + media.videos.length}
        />
      </div>
    </div>
  );
}
