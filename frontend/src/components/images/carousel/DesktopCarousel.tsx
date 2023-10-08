import { StrapiImage } from "@/models/Image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function DesktopCarousel({
  images,
  showCarousel,
  setShowCarousel,
}: {
  images: StrapiImage[];
  showCarousel: boolean;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    speed: 500,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
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
  }, []);

  const opacityClass = showCarousel
    ? "opacity-100"
    : "opacity-0 pointer-events-none";

  return (
    <div className={`${opacityClass} transition-all duration-300`}>
      <div className="w-screen h-screen bg-mirage/50 fixed top-0 left-0">
        <div
          ref={carouselRef}
          className="w-[60vw] h-[60vh] fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
        >
          <Slider {...settings} ref={sliderRef}>
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
          </Slider>
          <div className="flex justify-between -mt-2">
            <div className="text-nav w-fit">
              {images[currentSlide].alt || "Default description"}
            </div>
            <CarouselNavigation
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              total={images.length}
            />
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
          } transition-all duration-500`}
        >
          {index + 1}
        </div>
      ))}
      <button className="ml-6" onClick={nextSlide}>
        ⇉
      </button>
    </div>
  );
}
