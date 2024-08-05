import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Button({ url, content = "Xem thêm", className }) {
  return (
    <div className={`w-full md:w-auto ${className}`}>
      <Link
        href={url}
        className="flex mx-auto overflow-hidden items-center justify-center w-fit text-center cursor-pointer rounded-full font-bold relative text-primary-color bg-primary-color-opacity  font-base pr-[1.4rem] gap-1 after:contents-[] after:transition-all after:duration-500  after:delay-0 after:absolute after:w-0 after:h-full after:top-0 after:left-0 after:bg-primary-color hover:text-white hover:after:w-full hover:after:z-0"
      >
        <span className="rounded-full  py-[1.2rem] px-[1.6rem] relative block text-white before:contents-[] before:absolute before:top-0 before:left-0 w-full h-full bg-primary-color z-10">
          {content}
        </span>
        <div className="text-inherit relative z-20">
          <CircleChevronRight size={18} strokeWidth={1.8} />
        </div>
      </Link>
    </div>
  );
}
