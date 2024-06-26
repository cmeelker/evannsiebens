"use client";
import { ProjectMedia } from "@/models/Project";
import { stopVideos } from "@/utils/videos";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import CarouselNavigation from "../CarouselNavigation";

export function SlickCarousel({
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
            <div key={index} className={`w-[100%] ${height} relative`}>
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
            <div key={index}>
              <iframe
                loading="lazy"
                className={height}
                src={`https://player.vimeo.com/video/${video.vimeoId}`}
                width="100%"
              ></iframe>
            </div>
          );
        })}
      </Slider>
      <div className="flex justify-between gap-2 -mt-1">
        <div className="w-0 md:w-2/3 hidden md:block">
          <MediaCaption media={media} currentSlide={currentSlide} />
        </div>

        <div className="w-full md:w-1/3 pt-3 md:pt-0">
          {media.images.length + media.videos.length > 0 && (
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

function MediaCaption({
  media,
  currentSlide,
}: {
  media: ProjectMedia;
  currentSlide: number;
}) {
  const captions = media.images
    .flatMap((image) => image.caption)
    .concat(media.videos.flatMap((video) => video.title));

  return <div className="text-carousel-inline">{captions[currentSlide]}</div>;
}
