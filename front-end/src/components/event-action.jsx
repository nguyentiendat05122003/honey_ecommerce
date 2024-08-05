import Image from "next/image";
import React from "react";

export default function EventAction({ className, title, source }) {
  return (
    <div className={`absolute text-primary-color ${className}`}>
      <div className="flex items-center gap-[1rem] font-bold bg-slate-50 shadow-shadowEvenItem md:p-[1vw] md:text-[1.2vw] rounded-full w-fit text-[3vw] p-[2vw]">
        <Image
          className="w-[2.4rem] h-[2.4rem] flex-shrink-0 max-w-full"
          src={source}
          alt="image"
        />
        <span>{title}</span>
      </div>
    </div>
  );
}
