import Richtext from "@/components/Richtext";
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
    <div className="text-base md:text-lg">
      <h1>
        {project.title}, {project.year}
      </h1>

      <Richtext text={project.description} />
    </div>
  );
}
