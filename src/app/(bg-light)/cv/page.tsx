import CVList from "@/components/CVList";
import { getCVPage } from "@/services/cvService";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Evann Siebens / CV",
};

export default async function CVPage() {
  const cvPage = await getCVPage();

  return <CVList cvPage={cvPage} />;
}
