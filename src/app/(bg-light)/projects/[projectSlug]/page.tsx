import { MenuItem } from "@/components/nav/NavItems";
import ProjectDetails from "@/components/projects/ProjectDetails";
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
    <>
      <div className="pointer-events-none fixed top-0 max-w-[140rem] w-full left-1/2 -translate-x-1/2 justify-start hidden md:flex z-50">
        <MenuItem
          href="/projects"
          label="Back"
          className="pointer-events-auto"
        />
      </div>
      <ProjectDetails project={project} />
    </>
  );
}
