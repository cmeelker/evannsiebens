import contentfulClient from "@/clients/contentful";
import { mapBio } from "@/models/Bio";
import axios from "axios";

export async function getBioPage() {
  const client = contentfulClient();

  const res = await client
    .getEntries({ content_type: "info" })
    .then((response) =>
      response.items.find((item) => item.fields.title === "Bio")
    );

  return mapBio(res);
}
