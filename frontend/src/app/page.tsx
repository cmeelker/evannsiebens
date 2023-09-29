import { Project } from "@/models/Project";
import { getProjects } from "@/services/projectService";
import Image from "next/image";
export const dynamic = "force-dynamic";

const Home = async () => {
  const portfolioItems = await getProjects();

  return (
    <>
      <ul>
        {portfolioItems.map((project: Project) => (
          <li key={project.id}>
            <div>{project.title}</div>
            <div className="w-[400px] h-[400px] relative">
              <Image
                className="object-cover"
                src={project.media[0].url}
                alt={project.media[0].alt || ""}
                fill={true}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
