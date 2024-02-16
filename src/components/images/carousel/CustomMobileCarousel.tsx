"use client";

import { ProjectMedia } from "@/models/Project";

import ImageBar from "./custom-carousel/ImageBar";

export default function MobileCarousel({ media }: { media: ProjectMedia }) {
  if (media.images === undefined && media.videos === undefined) {
    return <></>;
  }

  return (
    <>
      <ImageBar media={media} />
    </>
  );
}
