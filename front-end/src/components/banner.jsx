"use client";
import slider1 from "@/assets/images/slider1.png";
import slider2 from "@/assets/images/slider2.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  return (
    <div className="mt-[1.2rem]">
      <div className="w-full max-w-[123rem] h-full my-0 mx-auto py-0 px-[1.2rem] relative">
        <div className="xl:w-[1225px] rounded-base overflow-x-auto hide-scroll-bar swiper-pagination-bullet-active-primary">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide className="!h-full ">
              <div className="relative block bannder-image">
                <Image
                  src={slider1}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 !w-full h-full object-cover max-w-full "
                  alt="slider"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="!h-full ">
              <div className="relative block bannder-image">
                <Image
                  src={slider2}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 !w-full h-full object-cover max-w-full "
                  alt="slider"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
