import Link from "next/link";
import React from "react";

export default function GiftsItem({ donors, title, color }) {
  return (
    <div className=" min-h-[167px] max-w-[235px] min-w-[235px] h-full rounded-[1.6rem] relative py-2 px-3  !flex flex-col gap-[1.6rem] before:content-[''] before:absolute before:rounded-full before:bg-white before:beforeGiftCircle before:top-1/2 before:-translate-y-1/2 before:z-10 before:beforeGiftCircleLeft after:beforeGiftCircleRight after:content-[''] after:absolute after:rounded-full after:bg-white after:beforeGiftCircle after:top-1/2 after:-translate-y-1/2 after:z-10">
      <span
        style={{ backgroundColor: color }}
        className="absolute left-0 right-0 bottom-0 top-0 rounded-[1.6rem]  opacity-20 -z-10"
      ></span>
      <div>
        <p style={{ color: color }} className="font-bold text-base">
          #{donors}
        </p>
        <p className="text-sm">{title}</p>
      </div>
      <div className=" flex items-center justify-between gap-[0.8rem] flex-wrap">
        <p style={{ color: color }} className="text-sm font-bold">
          #{donors}
        </p>
        <Link
          style={{ backgroundColor: color }}
          href="/"
          className="block py-[0.6rem] px-[1.6rem] text-sm rounded-full  text-white font-bold transition-all duration-300 ease-in-out delay-0 border-[0.1rem] border-solid border-transparent hover:border-white"
        >
          <span className="">Lưu lại</span>
        </Link>
      </div>
    </div>
  );
}
