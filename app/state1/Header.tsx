"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setSidebarOpen } from "@/app/store/posSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.pos.sidebarOpen);

  return (
    <button onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}>
      Sidebar: {sidebarOpen ? "Open" : "Closed"}
    </button>
  );
}
