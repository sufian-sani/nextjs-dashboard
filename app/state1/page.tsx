"use client";
import Header from "./Header";
import { useApp } from "../providers";

export default function State1Page() {
  const { sidebarOpen, count, setCount } = useApp();

  return (
    <div className="p-8">
      <Header />

      <p><strong>Sidebar:</strong> {sidebarOpen ? "Open" : "Closed"}</p>

      <p><strong>Counter:</strong> {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}