"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// TO DO: In CMS ?

export default function NavBar() {
  const pathname = usePathname();

  const showListGrid = pathname === "/" || pathname === "/projects";
  const listGridStyle = showListGrid ? "" : "hidden";

  return (
    <div className="max-w-[88rem] m-auto flex justify-between">
      <Link href="/projects" className={`text-nav h-fit ${listGridStyle}`}>
        List
      </Link>
      <nav className="flex flex-col w-fit m-auto items-center">
        <Link href="/" className="w-fit text-nav">
          Evann Siebens
        </Link>
        <ul className="flex text-nav">
          <li>
            <Link href="/bio">Bio</Link>
          </li>
          ⇉
          <li>
            <Link href="/cv">CV</Link>
          </li>
          ⇉
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Link href="/" className={`text-nav h-fit ${listGridStyle}`}>
        Grid
      </Link>
    </div>
  );
}
