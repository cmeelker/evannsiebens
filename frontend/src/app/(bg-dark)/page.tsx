import { Project } from "@/models/Project";
import { getProjects } from "@/services/projectService";
import { getLastDigit } from "@/utils/lastDigit";
import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";

const rowStyles = [
  "w-[56%] h-[33rem]",
  "w-[44%] h-[24rem] self-end -mt-12",
  "w-[56%] h-[37rem] self-center mt-4",
  "w-[40%] h-[24rem] mt-5 ml-[3%]",
  "w-[40%] h-[24rem] -mt-28 self-end mr-[16%]",
  "w-[56%] h-[33rem] mt-11 self-end",
  "w-[83%] h-[49rem] mt-[17rem] ml-[3%]",
  "w-[40%] h-[23rem] mt-[3.5rem] self-end",
  "w-[56%] h-[32rem] -mt-[1.7rem] ml-[11%]",
  "w-[40%] h-[24rem] mt-[3.8%] self-end mr-[16%]",
];

const Home = async () => {
  let portfolioItems = await getProjects();

  ///////////// TEMP /////////////
  portfolioItems = portfolioItems
    .concat(portfolioItems)
    .concat(portfolioItems)
    .concat(portfolioItems)
    .concat(portfolioItems)
    .concat(portfolioItems)
    .concat(portfolioItems);
  ////////////////////////////////

  return (
    <>
      <ul className="flex flex-col gap-5 md:gap-0 items-stretch">
        {portfolioItems.map((project: Project, index) => {
          const image = (
            <Link href={`/projects/${project.slug}`}>
              <Image
                className="object-cover"
                src={project.media[0].url}
                alt={project.media[0].alt || ""}
                fill={true}
              />
            </Link>
          );

          return (
            <>
              <li
                className={`hidden md:block ${
                  rowStyles[getLastDigit(index)]
                } relative`}
                key={project.id}
              >
                {image}
              </li>
              <li
                className="md:hidden flex w-full h-[30vh] sm:h-[45vh] relative"
                key={project.id}
              >
                {image}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
