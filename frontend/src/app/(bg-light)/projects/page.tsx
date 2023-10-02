import { Project } from "@/models/Project";
import { getProjects } from "@/services/projectService";
export const dynamic = "force-dynamic";

const Home = async () => {
  const portfolioItems = await getProjects();

  return (
    <>
      <ul>
        {portfolioItems.map((project: Project) => (
          <li key={project.id} className="text-base sm:text-lg">
            {project.title}, {project.year}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
