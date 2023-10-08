import { CVSection, mapCVSection } from "@/models/CV";
import axios from "axios";

export async function getCVSections() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cv?populate=deep`
  );

  const sections: CVSection[] = res.data.data.attributes.Sections.map(
    (section: any) => mapCVSection(section)
  );
  return sections;
}
