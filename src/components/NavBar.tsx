"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    <MenuItem href="/bio" label="Bio" key="0" />,
    <MenuItem href="/cv" label="CV" key="1" />,
    <MenuItem href="/contact" label="Contact" key="2" />,
  ];
  const menuListItems = menuItems.map((item) => (
    <li key={item.key} onClick={() => setShowMenu(false)}>
      {item}
    </li>
  ));

  return (
    <div className="flex m-auto justify-center">
      <div className="max-w-[140rem] flex justify-between w-full z-50 fixed">
        <ProjectPageOnly>
          <div className="hidden md:flex h-fit">
            <MenuItem href="/projects" label="List" />
          </div>
        </ProjectPageOnly>
        <nav className="flex flex-col w-fit m-auto sm:items-center items-left px-3">
          <Link
            href="/"
            className="w-fit text-nav"
            onClick={() => setShowMenu(false)}
          >
            Evann Siebens
          </Link>
          <DesktopMenu
            className="md:flex hidden"
            menuListItems={menuListItems}
          />
          <MobileMenu
            className="flex md:hidden w-fit"
            menuListItems={menuListItems}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </nav>
        <ProjectPageOnly>
          <div className="hidden md:flex h-fit">
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

function DesktopMenu({
  className,
  menuListItems,
}: {
  className: string;
  menuListItems: JSX.Element[];
}) {
  return (
    <ul className={`bg-bright-gray ${className}`}>
      {menuListItems[0]}
      <div className="flex flex-col justify-end mx-1">
        <Image src="/icons/arrow.svg" height={42} width={42} alt="" />
      </div>
      {menuListItems[1]}
      <div className="flex flex-col justify-end mx-1">
        <Image src="/icons/arrow.svg" height={42} width={42} alt="" />
      </div>
      {menuListItems[2]}
    </ul>
  );
}

function MobileMenu({
  className,
  menuListItems,
  showMenu,
  setShowMenu,
}: {
  className: string;
  menuListItems: JSX.Element[];
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={`flex justify-between w-full ${className}`}>
      <div>
        <ul className={`flex flex-col ${showMenu ? "" : "hidden"}`}>
          {menuListItems}
        </ul>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex flex-col justify-end h-14 p-1 bg-bright-gray"
      >
        {showMenu ? (
          <Image src="/icons/menu-open.svg" height={26} width={42} alt="" />
        ) : (
          <Image src="/icons/menu-closed.svg" height={26} width={42} alt="" />
        )}
      </button>
    </div>
  );
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
    <div className="fixed bottom-0 left-0 md:hidden z-50 px-3">
      <MenuItem href={href} label={label} />
    </div>
  );
}
