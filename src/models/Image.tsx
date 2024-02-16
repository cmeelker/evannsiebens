export interface ContentfulImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  isPortrait: boolean;
}

export function mapImage(image: any): ContentfulImage {
  const width = image.fields?.file.details.image.width;
  const height = image.fields?.file.details.image.height;

  return {
    id: image.sys.id,
    url: `https:${image.fields?.file.url}`,
    alt: image.fields?.title,
    caption: image.fields?.title,
    width: width,
    height: height,
    isPortrait: height > width,
  };
}
