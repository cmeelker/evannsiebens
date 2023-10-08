export interface Footer {
  text: string;
}

export function mapFooter(footer: any): Footer {
  return {
    text: footer.attributes.Text,
  };
}
