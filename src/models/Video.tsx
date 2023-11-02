export interface ContentfulVideo {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

export function mapVideo(video: any): ContentfulVideo {
  return {
    id: video.sys.id,
    url: `https:${video.fields?.file.url}`,
    alt: video.fields?.title,
    caption: video.fields?.title,
  };
}
