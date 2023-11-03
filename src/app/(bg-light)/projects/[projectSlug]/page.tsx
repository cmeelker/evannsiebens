import MobileCarousel from "@/components/images/carousel/MobileCarousel";
import MediaList from "@/components/images/MediaList";
import Richtext from "@/components/Richtext";
import { getProject } from "@/services/projectService";
import ScrollToTop from "@/utils/scrollToTop";
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
      <ScrollToTop />
      <div className="md:mr-8 md:w-[86%]">
        <div className="flex md:hidden mb-[110px]">
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
  );
}
