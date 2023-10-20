export interface ContentfulGif {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

export function mapGif(gif: any): ContentfulGif {
  return {
    id: gif.sys.id,
    url: `https:${gif.fields.file.url}`,
    alt: gif.fields.title,
    caption: gif.fields.title,
  };
}
