import Link from "next/link";

// TO DO: In CMS

export default function NavBar() {
  return (
    <nav className="text-h1 flex flex-col w-fit m-auto items-center">
      <Link href="/" className="bg-bright-gray w-fit pt-3">
        Evann Siebens
      </Link>
      <ul className="bg-bright-gray flex pt-3">
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
  );
}
