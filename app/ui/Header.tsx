"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // e.g. "/", "/menu", "/about"

  const isHome = pathname === "/";
  const isMenu = pathname.startsWith("/menu");
  const isState1 = pathname.startsWith("/state1");
  const isState2 = pathname.startsWith("/state2");

  return (
    <header className="flex gap-3 p-4 border-b">
      <Link
        href="/"
        className={isHome ? "font-bold underline" : "text-gray-500"}
      >
        Home
      </Link>

      <Link
        href="/menu"
        className={isMenu ? "font-bold underline" : "text-gray-500"}
      >
        Menu
      </Link>

      <Link
        href="/state1"
        className={isState1 ? "font-bold underline" : "text-gray-500"}
      >
        state1
      </Link>

      <Link
        href="/state2"
        className={isState2 ? "font-bold underline" : "text-gray-500"}
      >
        state2
      </Link>
    </header>
  );
}