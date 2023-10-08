import { mapFooter } from "@/models/Footer";
import axios from "axios";

export async function getFooter() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/footer`);

  return mapFooter(res.data.data);
}
