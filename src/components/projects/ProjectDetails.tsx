"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTop from "@/utils/scrollToTop";

import Richtext from "../Richtext";
import { Project } from "@/models/Project";
import MediaList from "@/components/images/MediaList";
import { StickyBottomButton } from "../nav/NavItems";
import { useRouter } from "next/navigation";
import MobileCarousel from "../images/carousel/mobile/MobileCarousel";

export default function ProjectDetails({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <>
      <div className="relative">
        <ScrollToTop />
        <div className="md:mr-8 md:w-[86%]">
          <div className="flex flex-col md:hidden mb-[110px]">
            <MobileCarousel media={project.media} />
          </div>

          <h1>
            {project.title}, {project.year}
          </h1>
          <h2 className="mb-12">{project.mediaType}</h2>

          <Richtext document={project.description} />
        </div>
        <ul className="w-[12%] -mt-[180px] hidden md:flex flex-col items-end absolute top-0 right-0 h-full">
          <div className="sticky top-0 w-full flex flex-col items-end z-50">
            <MediaList media={project.media} />
          </div>
        </ul>
      </div>
      <StickyBottomButton
        href="/projects"
        label="Back"
        onClick={() => router.back()}
      />
    </>
  );
}
