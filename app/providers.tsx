"use client";
import React, { createContext, useContext, useState } from "react";

type AppState = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count2: number;
  setCount2: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen, count, setCount, count2, setCount2 }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}