"use client";
// import Header from "./Header";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { incrementCount2, resetCount2 } from "@/app/store/posSlice";

export default function State2Page() {
  const dispatch = useAppDispatch();
  const count2 = useAppSelector((state) => state.pos.count2);
  {/* learn state delete */}

  return (
    <div className="p-8">
        <p>This page does not use the shared state.</p>
        <p><strong>Counter:</strong> {count2}</p>
        <button onClick={() => dispatch(incrementCount2())}>Increment</button>
        <button onClick={() => dispatch(resetCount2())}>Reset</button>
    </div>
  );
}
