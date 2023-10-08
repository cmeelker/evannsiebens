import ProjectImages from "@/components/ProjectImages";
import Richtext from "@/components/Richtext";
import { StrapiImage } from "@/models/Image";
import { getProject } from "@/services/projectService";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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
      <div className="mr-8 md:w-[86%]">
        <h1>
          {project.title}, {project.year}
        </h1>

        <Richtext text={project.description} />
      </div>
      <ul className="w-[12%] hidden md:flex flex-col items-end absolute top-0 right-0 ">
        <ProjectImages media={project.media} />
      </ul>
    </div>
  );
}
