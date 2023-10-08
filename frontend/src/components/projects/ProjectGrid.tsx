"use client";

import { Project } from "@/models/Project";
import { getLastDigit } from "@/utils/lastDigit";
import Link from "next/link";
import Image from "next/image";
import { AppearInView } from "@/effects/AppearInView";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const rowStyles = [
    "w-[56%] h-[33rem]",
    "w-[44%] h-[24rem] self-end -mt-12",
    "w-[56%] h-[37rem] self-center mt-4",
    "w-[40%] h-[24rem] mt-5 ml-[3%]",
    "w-[40%] h-[24rem] -mt-28 self-end mr-[16%]",
    "w-[56%] h-[33rem] mt-11 self-end",
    "w-[83%] h-[49rem] mt-[17rem] ml-[3%]",
    "w-[40%] h-[23rem] mt-[3.5rem] self-end",
    "w-[56%] h-[32rem] -mt-[1.7rem] ml-[11%]",
    "w-[40%] h-[24rem] mt-[3.8%] self-end mr-[16%]",
  ];

  return (
    <ul className="flex flex-col gap-10 md:gap-0 items-stretch">
      {projects.map((project: Project, index) => {
        const image = (
          <Link href={`/projects/${project.slug}`}>
            <Image
              className="object-cover hover:brightness-125"
              src={project.media[0].url}
              alt={project.media[0].alt || ""}
              fill={true}
            />
          </Link>
        );

        return (
          <AppearInView
            className="items-stretch flex flex-col"
            key={project.id}
          >
            <li
              className={`hidden md:block ${
                rowStyles[getLastDigit(index)]
              } relative`}
            >
              {image}
            </li>

            <li className="md:hidden flex w-full h-[30vh] sm:h-[45vh] relative">
              {image}
            </li>
          </AppearInView>
        );
      })}
    </ul>
  );
}
