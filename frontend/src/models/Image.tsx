export interface StrapiImage {
  id: string;
  url: string;
  alt: string;
}

export function mapImage(image: any): StrapiImage {
  return {
    id: image.id,
    url: `${process.env.NEXT_PUBLIC_API_URL}${image.attributes.url}`,
    alt: image.attributes.alternativeText,
  };
}
