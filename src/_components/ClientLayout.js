"use client";

import { useContext } from "react";

import { ThemeContext } from "@/_context/ThemeContext";

export default function ClientLayout({
  children,
}) {
  const { dark } =
    useContext(ThemeContext);

  return (
    <div
      className={
        dark
          ? "flex flex-1 bg-black text-white"
          : "flex flex-1 bg-white text-black"
      }
    >
      {children}
    </div>
  );
}