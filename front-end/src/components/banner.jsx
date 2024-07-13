import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import slider1 from "@/assets/images/slider1.png";
import slider2 from "@/assets/images/slider2.png";
export default function Banner() {
  return (
    <div className="w-full max-w-[123rem] h-full my-0 mx-auto  py-0 xl:w-[calc(100%_ + ((100vw_ - 120rem_) / _2) - _1.5rem)]">
      <div className="relative">
        <div>
          <Carousel
            autoplay
            className="w-[384px] px-[1.2rem] md:w-[814px] lg:w-[1249px] lg:px-[1.5rem]"
          >
            <div className="">
              <Image
                src={slider1}
                alt="slider"
                className="rounded-[0.8rem] lg:rounded-base"
              />
            </div>
            <div className="">
              <Image
                src={slider2}
                alt="slider"
                className="rounded-[0.8rem] lg:rounded-base"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
