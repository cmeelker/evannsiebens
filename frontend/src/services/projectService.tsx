import contentfulClient from "@/clients/contentful";
import { Project, mapProject } from "@/models/Project";

export async function getProjects() {
  const client = contentfulClient();

  const res = await client
    .getEntries({ content_type: "project", include: 10 })
    .then((response) => response.items);

  const projects: Project[] = res.map((project: any) => mapProject(project));
  return projects;
}

export async function getProject(slug: string) {
  const client = contentfulClient();

  const res = await client
    .getEntries({
      content_type: "project",
      include: 10,
      "fields.slug": slug,
    })
    .then((response) => response.items[0]);

  return mapProject(res);
}
