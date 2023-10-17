import ProjectList from "@/components/projects/ProjectList";
import { getProjects } from "@/services/projectService";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Evann Siebens / Projects",
};

export default async function Home() {
  let projects = await getProjects();

  return <ProjectList projects={projects} />;
}
