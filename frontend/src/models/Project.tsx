import { StrapiImage, mapImage } from "./Image";

export interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  media: StrapiImage[];
}

export function mapProject(project: any): Project {
  return {
    id: project.id,
    title: project.attributes.Title,
    year: project.attributes.Year,
    description: project.attributes.Description,
    media: project.attributes.Image.data.map((image: any) => mapImage(image)),
  };
}
