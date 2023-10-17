import Richtext from "@/components/Richtext";
import { getContactPage } from "@/services/contactService";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Evann Siebens / Contact",
};

export default async function ContactPage() {
  const contactPage = await getContactPage();

  return (
    <div className="md:w-[86%]">
      <Richtext document={contactPage.description} />
    </div>
  );
}
