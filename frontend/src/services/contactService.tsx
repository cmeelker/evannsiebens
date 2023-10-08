import { mapContact } from "@/models/Contact";
import axios from "axios";

export async function getContactPage() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/contact?populate=*`
  );

  return mapContact(res.data.data);
}
