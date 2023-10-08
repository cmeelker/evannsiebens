import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Evann Siebens / CV",
};

export default function CVPage() {
  return <h1>CV</h1>;
}
