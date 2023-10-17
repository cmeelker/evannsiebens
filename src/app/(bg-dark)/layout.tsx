import Layout from "@/components/Layout";

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className="bg-black" footerClassName="hidden">
      {children}
    </Layout>
  );
}
