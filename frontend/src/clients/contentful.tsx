import { createClient } from "contentful";

// to do: keys in prod ENV

export default function contentfulClient() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  return client;
}
