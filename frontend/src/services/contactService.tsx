import contentfulClient from "@/clients/contentful";
import { mapContact } from "@/models/Contact";

export async function getContactPage() {
  const client = contentfulClient();

  const res = await client
    .getEntries({ content_type: "info" })
    .then((response) =>
      response.items.find((item) => item.fields.title === "Contact")
    );

  return mapContact(res);
}
