import { StrapiImage, mapImage } from "./Image";

export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  description: string;
  media: StrapiImage[];
}

export function mapProject(project: any): Project {
  return {
    id: project.id,
    slug: project.attributes.slug,
    title: project.attributes.Title,
    year: project.attributes.Year,
    description: project.attributes.Description,
    media: project.attributes.Image.data.map((image: any) => mapImage(image)),
  };
}
