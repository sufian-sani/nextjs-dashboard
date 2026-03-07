"use client";
// import Header from "./Header";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { incrementCount2, resetCount2 } from "@/app/store/posSlice";
import { setSidebarOpen2 } from "@/app/store/posSlice";

export default function State2Page() {
  const dispatch = useAppDispatch();
  const count2 = useAppSelector((state) => state.pos.count2);

  const sidebarOpen2 = useAppSelector((state) => state.pos.sidebarOpen2);
  {/* learn state delete */}

  return (
    <div className="p-8">
        <p>This page does not use the shared state.</p>
        <p><strong>Counter:</strong> {count2}</p>
        <button onClick={() => dispatch(incrementCount2())}>Increment</button>
        <button onClick={() => dispatch(resetCount2())}>Reset</button>

        <br />
        <hr />
        <br />
        <p>Even though this page has its own state, it can still access the shared state if needed.</p>

        <p><strong>Shared Sidebar State:</strong> {sidebarOpen2 ? "Open" : "Closed"}</p>
        <span>------</span>
        <button onClick={() => dispatch(setSidebarOpen2(!sidebarOpen2))}>Toggle Shared Sidebar State</button>

    </div>
  );
}
