"use client";
import { useApp } from "../providers";

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useApp();

  return (
    <button onClick={() => setSidebarOpen((p) => !p)}>
      Sidebar: {sidebarOpen ? "Open" : "Closed"}
    </button>
  );
}