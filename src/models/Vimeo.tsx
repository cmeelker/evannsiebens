export interface ContentfulVimeo {
  id: string;
  title: string;
  vimeoId: string;
}

export function mapVimeo(vimeo: any): ContentfulVimeo {
  return {
    id: vimeo.sys.id,
    title: vimeo.fields.title,
    vimeoId: vimeo.fields.url.split("/").pop(),
  };
}
