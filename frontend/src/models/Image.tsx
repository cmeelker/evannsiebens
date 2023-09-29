export interface StrapiImage {
  id: string;
  url: string;
  alt: string;
}

export function mapImage(image: any): StrapiImage {
  const urlPrefix =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL
      : "";

  return {
    id: image.id,
    url: `${urlPrefix}${image.attributes.url}`,
    alt: image.attributes.alternativeText,
  };
}
