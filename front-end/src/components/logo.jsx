import Link from "next/link";
import React from "react";
import logo from "@/assets/images/nongsan-logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <div>
      <div className="w-full ml-0 mr-[2.4rem]">
        <Link
          href="/"
          className="w-[10rem] xl:w-[14rem] flex max-w-full no-underline"
        >
          <Image src={logo} alt="logo" priority />
        </Link>
      </div>
    </div>
  );
}
