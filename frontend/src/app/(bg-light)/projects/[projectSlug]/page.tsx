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

  return <div>{project.year}</div>;
}
