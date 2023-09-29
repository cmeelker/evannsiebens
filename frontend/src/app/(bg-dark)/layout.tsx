import Layout from "@/components/Layout";

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className="bg-black" footerClassName="text-bright-gray/50">
      {children}
    </Layout>
  );
}
