"use client";
import React from "react";

export default function MobileOverlay({ className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`fixed left-0 right-0 bottom-0 z-50 bg-black/[.80] transition-all duration-600 ease delay-0 border-top-[1px] border-solid border-black/[.10] top -translate-x-[110%] opacity-0 invisible ${className}`}
    ></div>
  );
}
