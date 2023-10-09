export interface CVSection {
  id: number;
  title: string;
  items: CVItem[];
}

export interface CVItem {
  id: number;
  title: string;
  year: string;
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
    id: item.id,
    title: item.Title,
    year: item.Year,
  };
}

export function mapCVSection(section: any, id: number): CVSection {
  return {
    id: id,
    title: section.Title,
    items: section.Item.map(mapCVItem),
  };
}

export function mapPDF(pdf: any): PDF {
  const urlPrefix =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL
      : "";

  return {
    id: pdf.id,
    name: pdf.attributes.name,
    url: `${urlPrefix}${pdf.attributes.url}`,
  };
}
