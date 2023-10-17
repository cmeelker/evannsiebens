import { Document } from "@contentful/rich-text-types";
export interface Bio {
  description: Document;
}

export function mapBio(bio: any): Bio {
  return {
    description: bio.fields.description,
  };
}
