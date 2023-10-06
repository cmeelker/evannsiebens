import { Project } from "@/models/Project";
import { getProjects } from "@/services/projectService";
import Link from "next/link";
export const dynamic = "force-dynamic";

const Home = async () => {
  const projects = await getProjects();

  return (
    <>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.id} className="text-base sm:text-lg">
            <Link href={`/projects/${project.slug}`}>
              {project.title}, {project.year}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
