import { ListOrGridLink } from "@/components/nav/NavItems";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjects } from "@/services/projectService";
import ScrollToTop from "@/utils/scrollToTop";

export const dynamic = "force-dynamic";

export default async function Home() {
  let projects = await getProjects();

  return (
    <>
      <ScrollToTop />
      <ProjectGrid projects={projects} />
      <ListOrGridLink />
    </>
  );
}
