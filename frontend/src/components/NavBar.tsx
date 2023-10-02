"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// TO DO: In CMS ?

const menuItems = [
  <MenuItem href="/bio" label="Bio" key="0" />,
  <MenuItem href="/cv" label="CV" key="1" />,
  <MenuItem href="/contact" label="Contact" key="2" />,
];
const menuList = menuItems.map((item) => <li key={item.key}>{item}</li>);

export default function NavBar() {
  return (
    <div className="flex m-auto justify-center">
      <div className="max-w-[88rem] flex justify-between absolute w-full z-50">
        <ProjectPageOnly>
          <div className="hidden sm:flex h-fit">
            <MenuItem href="/projects" label="List" />
          </div>
        </ProjectPageOnly>
        <nav className="flex flex-col w-fit m-auto sm:items-center items-left">
          <Link href="/" className="w-fit text-nav">
            Evann Siebens
          </Link>
          <DesktopMenu className="sm:flex hidden" />
          <MobileMenu className="flex sm:hidden w-fit" />
        </nav>
        <ProjectPageOnly>
          <div className="hidden sm:flex h-fit">
            <MenuItem href="/" label="Grid" />
          </div>
        </ProjectPageOnly>
      </div>
      <ProjectPageOnly>
        <ListOrGridLink />
      </ProjectPageOnly>
    </div>
  );
}

function DesktopMenu({ className }: { className: string }) {
  return (
    <ul className={`bg-bright-gray ${className}`}>
      {menuItems[0]}
      <div className="text-nav">⇉</div>
      {menuItems[1]}
      <div className="text-nav">⇉</div>
      {menuItems[2]}
    </ul>
  );
}

function MobileMenu({ className }: { className: string }) {
  return <ul className={`flex flex-col ${className}`}>{menuList}</ul>;
}

function MenuItem({ href, label }: { href: string; label: string }) {
  return (
    <div className="text-nav w-fit">
      <Link href={href}>{label}</Link>
    </div>
  );
}

function ProjectPageOnly({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const onProjectPage = pathname === "/" || pathname === "/projects";

  if (onProjectPage) {
    return <>{children}</>;
  }
  return <></>;
}

function ListOrGridLink() {
  const pathname = usePathname();
  const onGridView = pathname === "/";
  const href = onGridView ? "/projects" : "/";
  const label = onGridView ? "List" : "Grid";

  return (
    <div className="fixed bottom-0 left-0 sm:hidden z-50">
      <MenuItem href={href} label={label} />
    </div>
  );
}
