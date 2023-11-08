"use client";

import { Project } from "@/models/Project";
import { getLastDigit } from "@/utils/lastDigit";
import Link from "next/link";
import GridVideoPlayer from "../videos/GridVideoPlayer";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const rowStyles = [
    "w-[56%] h-[33rem] ml-[3%] -mb-12",
    "w-[48%] h-[24rem] self-end -mb-[1.9rem]",
    "w-[56%] h-[37rem] self-center -mb-[2.5rem] z-20",
    "w-[40%] h-[24rem] ml-[3%]  -mb-[4rem]",
    "w-[40%] h-[24rem] self-end mr-[16%] -mb-[1.9rem] z-20",
    "w-[56%] h-[33rem] self-end -mb-[1.9rem]",
    "w-[83%] h-[49rem] ml-[3%] -mb-[1.9rem]",
    "w-[40%] h-[23rem] self-end -mb-[1.9rem]",
    "w-[56%] h-[32rem] ml-[11%] -mb-[1.9rem] z-30",
    "w-[40%] h-[24rem] self-end mr-[16%] -mb-[4rem] z-20",
  ];

  return (
    <ul className="flex flex-col gap-10 md:gap-0 items-stretch mb-[10vh] md:mb-10">
      {projects.map((project: Project, index) => {
        const image = (
          <Link href={`/projects/${project.slug}`} className="w-full h-full">
            <GridVideoPlayer
              video={project.media.gridVideo}
              posterUrl={
                project.media?.images ? project.media.images[0].url : ""
              }
            />
          </Link>
        );

        return (
          <ul className="items-stretch flex flex-col" key={project.id}>
            <li
              className={`hidden md:block ${
                rowStyles[getGridRow(projects.length, index)]
              } relative`}
            >
              {image}
            </li>

            <li className="md:hidden flex w-full h-[30vh] sm:h-[45vh] relative">
              {image}
            </li>
          </ul>
        );
      })}
    </ul>
  );
}

function getGridRow(projectCount: number, index: number) {
  const offset = 10 - getLastDigit(projectCount);
  return getLastDigit(offset + index);
}
