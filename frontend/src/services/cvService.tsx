import { CVSection, mapCVSection, mapPDF } from "@/models/CV";
import axios from "axios";

export async function getCVPage() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cv?populate[0]=Sections&populate[1]=Sections.Item&populate[2]=PDF`
  );

  const sections: CVSection[] = res.data.data.attributes.Sections.map(
    (section: any, index: number) => mapCVSection(section, index)
  );

  const pdf = mapPDF(res.data.data.attributes.PDF.data);
  return { sections: sections, pdf: pdf };
}
