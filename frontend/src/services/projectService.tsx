import { Project, mapProject } from "@/models/Project";
import axios from "axios";

export async function getProjects() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=*`
  );

  const projects: Project[] = res.data.data.map((project: any) =>
    mapProject(project)
  );
  return projects;
}

export async function getProject() {
  // to do
}
