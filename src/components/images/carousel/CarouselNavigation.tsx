import Image from "next/image";

export default function CarouselNavigation({
  currentSlide,
  total,
  nextSlide,
}: {
  currentSlide: number;
  total: number;
  nextSlide: () => void;
}) {
  return (
    <div className="flex flex-wrap justify-end">
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={`${
            currentSlide === index ? "" : "text-mirage/50"
          } transition-all duration-300 text-carousel-inline flex-gap-correction`}
        >
          {index + 1}
        </div>
      ))}
      <button
        className="bg-bright-gray min-h-[45.2px] md:min-h-[60px] flex-gap-correction"
        onClick={() => nextSlide()}
      >
        <Image
          src="/icons/arrow.svg"
          height={42}
          width={42}
          alt=""
          className="flex -mb-2 ml-3 mr-5 md:mr-0"
        />
      </button>
    </div>
  );
}
