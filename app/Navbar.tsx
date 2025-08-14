"use server";

import Link from "next/link";
import VerticalDropdownButton from "./VerticalDropdownButton";
import ColorschemeToggle from "./ColorschemeToggle";

export default async function Navbar() {
  return (
    <header className="gap-3 grid grid-cols-3 py-6 px-6 md:px-24 items-center border-b-1 border-dashed border-slate-400/40">
      <Link href="/" className="hover:text-purple-400">
        Satvik Prasad
      </Link>

      <VerticalDropdownButton title="Projects">
        <Link href="/startups" className="hover:text-purple-400">
          Startups
        </Link>
        <Link href="/development" className="hover:text-purple-400">
          Development
        </Link>
        <Link href="/music" className="hover:text-purple-400">
          Music
        </Link>
      </VerticalDropdownButton>

      <div className="ml-auto">
          <ColorschemeToggle initialValue="dark" />
      </div>
    </header>
  );
}
