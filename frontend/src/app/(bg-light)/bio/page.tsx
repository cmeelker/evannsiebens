import Richtext from "@/components/Richtext";
import { getBioPage } from "@/services/bioService";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Evann Siebens / Bio",
};

export default async function BioPage() {
  const contactPage = await getBioPage();

  return (
    <div className="md:w-[86%]">
      <Richtext text={contactPage.description} />
    </div>
  );
}
