export interface Contact {
  description: string;
}

export function mapContact(contact: any): Contact {
  return {
    description: contact.attributes.Description,
  };
}
