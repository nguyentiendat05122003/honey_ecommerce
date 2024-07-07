"use client";
import { LINK_NAVIGATE_HEADER } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileNavbar({ className }) {
  const path = usePathname();
  return (
    <div
      className={`fixed sm:!w-[50rem] sm:!min-w-[50rem] z-50 top left-0 bottom-5 w-[70%] bg-white shadow-shadowMobileNavbar transition-all duration-600 linear delay-0 -translate-x-[110%] ${className}`}
    >
      <div className="w-full h-full flex flex-col overflow-y-auto">
        <div className="pb-6 relative">
          <ul>
            {LINK_NAVIGATE_HEADER.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex justify-between items-center text-sm font-semibold uppercase relative border-b-[1px] border-solid border-black/[.10] p-[1.2rem] text-[#303030] after:contents-[] after:absolute after:w-[1.5rem] after:h-[1.5rem] after:bg-leaf after:bg-no-repeat after:bg-contain after:bg-center after:left-1 after:top-[1.4rem] after:rotate-[-107deg] after:opacity-0 ${
                    !path.localeCompare(item.href)
                      ? "text-primary-color pl-3 after:opacity-100"
                      : ""
                  }`}
                >
                  {item.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
