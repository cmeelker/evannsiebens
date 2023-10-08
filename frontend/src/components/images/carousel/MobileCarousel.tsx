"use client";

import { StrapiImage } from "@/models/Image";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCount from "../ImageCount";
import { useState } from "react";

export default function ImageCarousel({ media }: { media: StrapiImage[] }) {
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
        {media.map((image, index) => {
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
      </Slider>
      <div className="text-lg absolute top-0 right-0 -mr-3">
        <ImageCount selected={currentSlide} total={media.length} />
      </div>
    </div>
  );
}
