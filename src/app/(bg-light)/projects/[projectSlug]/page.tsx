import MobileCarousel from "@/components/images/carousel/MobileCarousel";
import MediaList from "@/components/images/MediaList";
import Richtext from "@/components/Richtext";
import { getProject } from "@/services/projectService";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

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
      <div className="md:mr-8 md:w-[86%]">
        <div className="flex md:hidden">
          <MobileCarousel media={project.media.images} />
        </div>

        <h1>
          {project.title}, {project.year}
        </h1>

        <Richtext document={project.description} />
      </div>
      <ul className="w-[12%] hidden md:flex flex-col items-end absolute top-0 right-0 ">
        <MediaList media={project.media} />
      </ul>
    </div>
  );
}
