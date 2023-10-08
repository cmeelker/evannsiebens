import Richtext from "@/components/Richtext";
import { getContactPage } from "@/services/contactService";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evann Siebens / Contact",
};

export default async function ContactPage() {
  const contactPage = await getContactPage();

  return <Richtext text={contactPage.description} />;
}
