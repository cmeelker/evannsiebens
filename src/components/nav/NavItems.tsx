"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ListOrGridLink() {
  const pathname = usePathname();
  const onGridView = pathname === "/";
  const href = onGridView ? "/projects" : "/";
  const label = onGridView ? "List" : "Grid";

  return (
    <div className="sticky bottom-0 left-0 -ml-3 md:hidden z-50 px-3 mt-4">
      <MenuItem href={href} label={label} />
    </div>
  );
}

export function MenuItem({ href, label }: { href: string; label: string }) {
  return (
    <div className="text-nav w-fit">
      <Link href={href}>{label}</Link>
    </div>
  );
}
