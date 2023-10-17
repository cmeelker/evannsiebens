import { ContentfulImage } from "@/models/Image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function DesktopCarousel({
  images,
  showCarousel,
  initialIndex,
  setShowCarousel,
}: {
  images: ContentfulImage[];
  showCarousel: boolean;
  initialIndex: number;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
}) {
  const [currentSlide, setCurrentSlide] = useState(initialIndex);

  var settings = {
    speed: 500,
    arrows: false,
    afterChange: (newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const carouselRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Workaround to set initial slide
  if (sliderRef.current) {
    sliderRef.current.slickGoTo(initialIndex, true);
  }

  // Handle outside click to close carousel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(event.target as Node)
      ) {
        setShowCarousel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowCarousel]);

  // Make sure dialog can be closed via escape
  useEffect(() => {
    const handleEscDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowCarousel(false);
      }
    };
    window.addEventListener("keydown", handleEscDown);

    return () => {
      window.removeEventListener("keydown", handleEscDown);
    };
  }, [setShowCarousel]);

  const opacityClass = showCarousel
    ? "opacity-100"
    : "opacity-0 pointer-events-none";

  return (
    <div className={`${opacityClass} transition-all duration-500`}>
      <div className="w-screen h-screen bg-mirage/50 fixed top-0 left-0">
        <div
          ref={carouselRef}
          className="w-[60vw] h-[60vh] fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
        >
          {/* <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => {
              return (
                <div key={index} className="w-full h-[60vh] relative">
                  <Image
                    className="object-cover"
                    src={image.url}
                    alt={image.alt || ""}
                    fill={true}
                  />
                </div>
              );
            })}
          </Slider> */}
          <div className="flex justify-between -mt-2">
            <div>
              {images[currentSlide].caption && (
                <div className="text-nav w-fit">
                  {images[currentSlide].caption}
                </div>
              )}
            </div>
            <div>
              {images.length > 1 && (
                <CarouselNavigation
                  currentSlide={currentSlide}
                  nextSlide={nextSlide}
                  total={images.length}
                />
              )}
            </div>
          </div>
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
      <button className="ml-6" onClick={() => nextSlide()}>
        ⇉
      </button>
    </div>
  );
}
