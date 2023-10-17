import Layout from "@/components/Layout";

export default function LightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout className="bg-bright-gray">{children}</Layout>;
}
