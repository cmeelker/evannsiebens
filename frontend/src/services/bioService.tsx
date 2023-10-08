import { mapBio } from "@/models/Bio";
import axios from "axios";

export async function getBioPage() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bio?populate=*`
  );

  return mapBio(res.data.data);
}
