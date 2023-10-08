"use client";

import { StrapiImage } from "@/models/Image";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ media }: { media: StrapiImage[] }) {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
    </div>
  );
}
