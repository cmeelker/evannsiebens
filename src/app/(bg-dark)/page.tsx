import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjects } from "@/services/projectService";

export const dynamic = "force-dynamic";

export default async function Home() {
  let projects = await getProjects();

  return <ProjectGrid projects={projects} />;
}
