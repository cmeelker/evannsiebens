// TO DO: Regular Font

export const dynamic = "force-dynamic";

export default async function Footer({
  className = "text-mirage",
}: {
  className?: string;
}) {
  return (
    <footer
      className={`text-regular text-xs sm:text-sm mt-10 pb-3 ${className}`}
    >
      This website and its content is ©opyright of Evann Siebens, unless stated
      otherwise. All rights reserved.
    </footer>
  );
}
