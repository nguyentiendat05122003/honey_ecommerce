import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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
      <div className="w-full md:w-auto">
        <Link
          href={url}
          className="flex mx-auto overflow-hidden items-center justify-center w-fit text-center cursor-pointer rounded-full font-bold relative text-primary-color bg-primary-color-opacity  font-base pr-[1.4rem] gap-1 after:contents-[] after:transition-all after:duration-500  after:delay-0 after:absolute after:w-0 after:h-full after:top-0 after:left-0 after:bg-primary-color hover:text-white hover:after:w-full hover:after:z-0"
        >
          <span className="rounded-full  py-[1.2rem] px-[1.6rem] relative block text-white before:contents-[] before:absolute before:top-0 before:left-0 w-full h-full bg-primary-color z-10">
            Xem thêm
          </span>
          <div className="text-inherit relative z-20">
            <CircleChevronRight size={18} strokeWidth={1.8} />
          </div>
        </Link>
      </div>
    </>
  );
}
