"use client";

import { ProjectMedia } from "@/models/Project";

import ImageBar from "./custom-carousel/ImageBar";

export default function CustomMobileCarousel({
  media,
}: {
  media: ProjectMedia;
}) {
  if (media.images === undefined && media.videos === undefined) {
    return <></>;
  }

  return (
    <div>
      <ImageBar media={media} />
      <button>Next</button>
    </div>
  );
}
