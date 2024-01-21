import { Document } from "@contentful/rich-text-types";

export interface CVSection {
  id: number;
  title: string;
  items: CVItem[];
}

export interface CVItem {
  id: number;
  title: string;
  year: string;
  links: Document;
}

export interface PDF {
  id: number;
  name: string;
  url: string;
}

export interface CVPage {
  sections: CVSection[];
  pdf: PDF;
}

export function mapCVItem(item: any): CVItem {
  return {
    id: item.sys.id,
    title: item.fields.title,
    year: item.fields.year,
    links: item.fields.links,
  };
}

export function mapCVSection(section: any, id: number): CVSection {
  return {
    id: section.sys.id,
    title: section.fields.title,
    items: section.fields.items?.map(mapCVItem),
  };
}

export function mapPDF(pdf: any): PDF {
  return {
    id: pdf.sys.id,
    name: pdf.fields.title,
    url: pdf.fields.file.url,
  };
}
