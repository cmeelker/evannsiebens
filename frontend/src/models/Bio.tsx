export interface Bio {
  description: string;
}

export function mapBio(contact: any): Bio {
  return {
    description: contact.attributes.Description,
  };
}
