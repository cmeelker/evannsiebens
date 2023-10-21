export interface ContentfulVimeo {
  id: string;
  title: string;
  vimeoId: string;
  thumbnailUrl: string;
}

export function mapVimeo(vimeo: any): ContentfulVimeo {
  const id = vimeo.fields.url.split("/").pop();
  return {
    id: vimeo.sys.id,
    title: vimeo.fields.title,
    vimeoId: id,
    thumbnailUrl: `https://vumbnail.com/${id}.jpg`,
  };
}
