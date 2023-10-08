// TO DO: Regular Font

import { getFooter } from "@/services/footerService";

export const dynamic = "force-dynamic";

export default async function Footer({
  className = "text-mirage",
}: {
  className?: string;
}) {
  const footer = await getFooter();

  return (
    <footer className={`text-regular text-sm mt-10 pb-3 ${className}`}>
      {footer.text}
    </footer>
  );
}
