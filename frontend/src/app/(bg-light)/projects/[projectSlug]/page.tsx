import Richtext from "@/components/Richtext";
import { StrapiImage } from "@/models/Image";
import { getProject } from "@/services/projectService";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";

interface ProjectPageProps {
  params: {
    projectSlug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.projectSlug);

  return {
    title: `Evann Siebens / ${project.title}`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.projectSlug).catch(() => {
    redirect("/");
  });
  return (
    <div className="relative">
      <div className="mr-8 w-[86%]">
        <h1>
          {project.title}, {project.year}
        </h1>

        <Richtext text={project.description} />
      </div>
      <div className="w-[12%] flex flex-col items-end absolute top-0 right-0 ">
        <ImageList images={project.media} />
      </div>
    </div>
  );
}

function ImageList({ images }: { images: StrapiImage[] }) {
  return images.map((image) => {
    return (
      <div
        key={image.id}
        className={`h-[6.4rem] w-full border bg-pink-400 transition-all duration-300 delay-100 hover:h-[31rem] hover:w-[51rem] relative`}
      >
        <Image
          className="object-cover"
          src={image.url}
          alt={image.alt || ""}
          fill={true}
        />
      </div>
    );
  });
}
