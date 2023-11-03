import Link from "next/link";

export function StickyBottomButton({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="sticky bottom-0 left-0 -ml-3 md:hidden z-50 px-3 mt-4"
      onClick={onClick}
    >
      <MenuItem href={href} label={label} />
    </div>
  );
}

export function MenuItem({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`text-nav w-fit ${className}`}>
      <Link href={href}>{label}</Link>
    </div>
  );
}
