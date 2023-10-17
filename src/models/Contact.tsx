import { Document } from "@contentful/rich-text-types";
export interface Contact {
  description: Document;
}

export function mapContact(contact: any): Contact {
  return {
    description: contact.fields.description,
  };
}
