import contentfulClient from "@/clients/contentful";
import { CVSection, mapCVSection, mapPDF } from "@/models/CV";

export async function getCVPage() {
  const client = contentfulClient();

  const res: any = await client
    .getEntries({ content_type: "cv", include: 10 })
    .then((response) => response.items[0]);

  const sections: CVSection[] = res.fields.sections.map(
    (section: any, index: number) => mapCVSection(section, index)
  );

  const pdf = mapPDF(res.fields.pdf);
  return { sections: sections, pdf: pdf };
}
