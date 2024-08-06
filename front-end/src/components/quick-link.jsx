"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
export default function QuickLink({ href, content }) {
  const path = usePathname();
  return (
    <li
      className={` ${
        !path.localeCompare(href) ? "font-bold text-primary-color" : ""
      }`}
    >
      <Link href={href}>{content}</Link>
    </li>
  );
}
