import "@/style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

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
      <body className={inter.className}>
        <nav>
          <Link href="/">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
