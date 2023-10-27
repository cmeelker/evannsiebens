import NavBar from "@/components/nav/NavBar";
import "@/style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evann Siebens",
  description:
    "Evann Siebens is a Canadian media artist with a background in dancing based in Vancouver, British Columbia, Canada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
