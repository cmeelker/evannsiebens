export interface Bio {
  description: string;
}

export function mapBio(bio: any): Bio {
  return {
    description: bio.attributes.Description,
  };
}
