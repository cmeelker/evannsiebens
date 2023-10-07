import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/services/projectService";

export const dynamic = "force-dynamic";

export default async function Home() {
  let projects = await getProjects();

  return <ProjectList projects={projects} />;
}
