import Richtext from "@/components/Richtext";
import { getProject } from "@/services/projectService";
import { redirect } from "next/navigation";

interface ProjectPageProps {
  params: {
    projectSlug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.projectSlug).catch(() => {
    redirect("/");
  });
  return (
    <>
      <h1>
        {project.title}, {project.year}
      </h1>
      <div>
        <Richtext text={project.description} />
      </div>
    </>
  );
}
