"use client";
// import Header from "./Header";
import { useApp } from "../providers";

export default function State2Page() {
  const { count2, setCount2 } = useApp();


  return (
    <div className="p-8">
      {/* <Header />

      <p><strong>Sidebar:</strong> {sidebarOpen ? "Open" : "Closed"}</p>

      <p><strong>Counter:</strong> {count}</p> */}
      {/* <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button> */}

        <p>This page does not use the shared state.</p>
        <p><strong>Counter:</strong> {count2}</p>
        <button onClick={() => setCount2((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount2(0)}>Reset</button>
    </div>
  );
}