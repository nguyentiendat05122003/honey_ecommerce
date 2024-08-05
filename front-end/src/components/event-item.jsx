import Image from "next/image";
import React from "react";

export default function EventItem({ source, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[1.6rem] text-center px-[5px] mb-[24px]">
      <div className="w-[4rem] md:w-[7.2rem] my-0 mx-auto">
        <Image
          className="w-full block max-w-full h-auto"
          src={source}
          alt="icon"
        />
      </div>
      <p className="xl:text-base text-sm font-bold text-black-heading">
        {" "}
        {title}
      </p>
    </div>
  );
}
