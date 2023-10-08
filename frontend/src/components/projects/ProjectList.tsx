"use client";

import { Project } from "@/models/Project";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { StrapiImage } from "@/models/Image";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [currentImage, setCurrentImage] = useState(projects[0].media[0]);
  const [showImage, setShowImage] = useState(false);

  function onMouseEnter(image: StrapiImage) {
    setCurrentImage(image);
    setShowImage(true);
  }

  return (
    <div className="relative">
      <ul>
        {projects.map((project: Project) => {
          return (
            <li key={project.id}>
              <Link
                className="hover:opacity-70"
                href={`/projects/${project.slug}`}
                onMouseOver={() => onMouseEnter(project.media[0])}
                onMouseLeave={() => setShowImage(false)}
              >
                {project.title}, {project.year}
              </Link>
            </li>
          );
        })}
      </ul>
      <HoverImage showImage={showImage} image={currentImage} />
    </div>
  );
}

function HoverImage({
  showImage,
  image,
}: {
  showImage: boolean;
  image: StrapiImage;
}) {
  const opacityClass = showImage ? "opacity-100" : "opacity-0";

  return (
    <div className="w-[45%] xl:w-[55%] absolute top-0 right-0 h-full pointer-events-none">
      <div
        className={`sticky top-0 w-full h-[25rem] xl:h-[30rem] lg:block hidden transition-all duration-300 delay-100 ${opacityClass}`}
      >
        <Image
          className="object-cover"
          src={image.url}
          alt={image.alt || ""}
          fill={true}
        />
      </div>
    </div>
  );
}
