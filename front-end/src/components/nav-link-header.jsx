"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavLinkHeader({ href, content }) {
  const path = usePathname();
  return (
    <li
      className={`hover:before:w-full hover:before:left-0 before:transition-all before:duration-300 ease-in-out delay-0 h-full flex items-center relative before:contents-[] before:bottom-0 before:absolute before:w-0 before:left-1/2 before:h-[0.2rem] before:bg-primary-color rounded-[100rem] after:contents-[] after:absolute after:w-[1.9rem] after:h-[1.9rem] after:bg-bee after:bg-no-repeat after:bg-contain after:bg-center after:left-[calc(100%_+_0.2rem)]  after:top-[0.4rem] after:opacity-0  hover:after:animate-[beeRotate_1s_ease-in-out_0.4s_forwards] ${
        !path.localeCompare(href)
          ? "before:w-full before:left-[0%] after:animate-[beeRotate_0.8s_ease-in-out_0.4s_forwards]"
          : ""
      }`}
    >
      <Link
        href={href}
        className="h-full flex items-center text-body-color font-semibold text-base"
      >
        {content}
      </Link>
    </li>
  );
}
