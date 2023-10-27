"use client";
import { ProjectMedia } from "@/models/Project";
import { stopVideos } from "@/utils/videos";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

export function MediaCarousel({
  initialIndex = 0,
  media,
  height,
}: {
  initialIndex?: number;
  media: ProjectMedia;
  height: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(initialIndex);

  var settings = {
    speed: 500,
    arrows: false,
    afterChange: (newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const sliderRef = useRef<Slider>(null);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      stopVideos();
    }
  };

  // Workaround to set initial slide
  if (sliderRef.current) {
    sliderRef.current.slickGoTo(initialIndex, true);
  }

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {media.images.map((image, index) => {
          return (
            <div key={index} className={`w-full ${height} relative`}>
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
              <iframe
                className={height}
                src={`https://player.vimeo.com/video/${video.vimeoId}`}
                width="100%"
              ></iframe>
            </div>
          );
        })}
      </Slider>
      <div className="flex justify-between -mt-2">
        <div>
          {/* {media.images[currentSlide].caption && (
        <div className="text-nav w-fit">
          {media.images[currentSlide].caption}
        </div>
      )} */}
        </div>
        <div>
          {media.images.length > 1 && (
            <CarouselNavigation
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              total={media.images.length + media.videos.length}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function CarouselNavigation({
  currentSlide,
  total,
  nextSlide,
}: {
  currentSlide: number;
  total: number;
  nextSlide: () => void;
}) {
  return (
    <div className="text-nav w-fit flex  ">
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={`${
            currentSlide === index ? "" : "text-mirage/50"
          } transition-all duration-300`}
        >
          {index + 1}
        </div>
      ))}
      <button className="ml-2 lg:ml-6" onClick={() => nextSlide()}>
        <Image
          src="/icons/arrow.svg"
          height={42}
          width={42}
          alt=""
          className="hidden lg:flex -mb-2"
        />
        <Image
          src="/icons/arrow.svg"
          height={26}
          width={26}
          alt=""
          className="lg:hidden flex -mb-1"
        />
      </button>
    </div>
  );
}
