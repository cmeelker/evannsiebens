export interface CVSection {
  title: string;
  items: CVItem[];
}

export interface CVItem {
  id: number;
  title: string;
  year: string;
}

export function mapCVItem(item: any): CVItem {
  return {
    id: item.id,
    title: item.Title,
    year: item.Year,
  };
}

export function mapCVSection(section: any): CVSection {
  return {
    title: section.Title,
    items: section.Item.map(mapCVItem),
  };
}
