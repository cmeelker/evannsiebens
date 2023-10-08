import { CVSection, mapCVSection } from "@/models/CV";
import axios from "axios";

export async function getCVSections() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cv?populate[0]=Sections&populate[1]=Sections.Item`
  );

  const sections: CVSection[] = res.data.data.attributes.Sections.map(
    (section: any, index: number) => mapCVSection(section, index)
  );
  return sections;
}
