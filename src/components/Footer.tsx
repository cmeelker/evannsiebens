export const dynamic = "force-dynamic";

export default async function Footer({
  className = "text-mirage",
}: {
  className?: string;
}) {
  return (
    <footer className={`text-body mt-12 pb-3 ${className}`}>
      This website and its content is ©opyright of Evann Siebens, unless stated
      otherwise. All rights reserved.
    </footer>
  );
}
