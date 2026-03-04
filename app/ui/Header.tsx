"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // e.g. "/", "/menu", "/about"

  const isHome = pathname === "/";
  const isMenu = pathname.startsWith("/menu");

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
    </header>
  );
}