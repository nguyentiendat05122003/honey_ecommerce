"use client";
import MobileNavbar from "@/components/mobile-navbar";
import MobileOverlay from "@/components/mobile-overlay";
import { useState } from "react";

export default function IconMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={handleClickMenu}>
        <div className="flex items-center gap-1">
          <div className="hidden sm:block lg:hidden  text-base font-medium">
            Menu
          </div>
          <div className="lg:hidden sm:ml-0 ml-[0.5rem] relative">
            <span
              className={`w-[2.4rem] line ${isOpen ? "line-active" : ""}`}
            ></span>
            <span
              className={`w-[1.8rem]  line ${
                isOpen
                  ? "transform -translate-y-[0.4rem] rotate-[135deg] w-[2.4rem]"
                  : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
      <MobileOverlay
        onClick={handleClickMenu}
        className={isOpen ? "!visible translate-x-0 opacity-100" : ""}
      />
      <MobileNavbar className={isOpen ? " translate-x-0 " : ""} />
    </>
  );
}
