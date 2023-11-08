export interface ContentfulImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

export function mapImage(image: any): ContentfulImage {
  return {
    id: image.sys.id,
    url: `https:${image.fields?.file.url}`,
    alt: image.fields?.title,
    caption: image.fields?.title,
  };
}
