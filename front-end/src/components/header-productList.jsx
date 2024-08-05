import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Button from "./button";

export default function HeaderProductList({
  type = "",
  title = "",
  url = "/",
}) {
  return (
    <>
      <div className="w-full text-center md:w-auto md:text-left">
        <p className="relative text-second-color font-bold  inline-block title-sub opacity-100 after:contents-[] after:absolute after:w-[1.9rem] after:h-[1.9rem] after:bg-bee after:bg-no-repeat after:bg-contain after:bg-center after:right-0  after:-top-[0.4rem]">
          {type}
        </p>
        <h2 className="text-[2.2rem] md:text-[4rem] lg:text-[4.4rem] font-bold text-primary-color">
          {title}
        </h2>
      </div>
      <Button url={url} />
    </>
  );
}
