"use client";
import Header from "./Header";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { incrementCount, resetCount } from "@/app/store/posSlice";

export default function State1Page() {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.pos.sidebarOpen);
  const count = useAppSelector((state) => state.pos.count);

  return (
    <div className="p-8">
      <Header />

      <p><strong>Sidebar:</strong> {sidebarOpen ? "Open" : "Closed"}</p>

      <p><strong>Counter:</strong> {count}</p>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
}
