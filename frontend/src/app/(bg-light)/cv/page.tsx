import CVList from "@/components/CVList";
import { CVItem } from "@/models/CV";
import { getCVSections } from "@/services/cvService";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Evann Siebens / CV",
};

export default async function CVPage() {
  const sections = await getCVSections();

  return <CVList sections={sections} />;
}
