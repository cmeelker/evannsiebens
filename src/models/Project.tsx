import { ContentfulImage, mapImage } from "./Image";
import { Document } from "@contentful/rich-text-types";

export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  description: Document;
  images: ContentfulImage[];
}

export function mapProject(project: any): Project {
  return {
    id: project.sys.id,
    slug: project.fields.slug,
    title: project.fields.title,
    year: project.fields.year,
    description: project.fields.description,
    images: project.fields.images.map((image: any) => mapImage(image)),
  };
}
