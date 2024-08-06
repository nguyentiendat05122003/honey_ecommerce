"use client";
import boll from "@/assets/images/mat-ong.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Boll() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024 && swiperRef.current) {
        // Check if the screen width is at least 1024px (laptop size)
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollPercent = scrollTop / scrollHeight;
        const swiper = swiperRef.current;
        const slideCount = swiper.slides.length;
        let newIndex = Math.floor(scrollPercent * slideCount);
        if (newIndex >= slideCount) {
          newIndex = newIndex % slideCount;
        }

        swiper.slideToLoop(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[20rem] lg:h-[32rem] relative overflow-hidden ">
      <div className=" absolute h-[6rem] bg-primary-color bottom-0 lg:bottom-[3rem] left-0 w-full -z-10"></div>
      <div className="absolute h-[6rem] bg-second-color left-0 w-[150%] bottom-[3rem] lg:bottom-[6rem] -z-[1] ">
        <Swiper
          className="overflow-x-auto"
          ref={swiperRef}
          slidesPerView={4}
          breakpoints={{
            767: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 9,
            },
          }}
          loop={true}
          spaceBetween={12}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {[...Array(20)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="fit-content inline-block max-w-[146px] text-center"
            >
              <div className="h-[6rem] flex items-center gap-1 text-white font-bold">
                <span className="w-[1.6rem] h-[1.6rem] flex-shrink-0 bg-bee bg-no-repeat bg-contain bg-center"></span>
                <span>Mona Honey</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <div className="h-full">
          <Image
            className="block h-full w-auto ml-auto"
            src={boll}
            alt="boll"
          />
        </div>
      </div>
    </div>
  );
}
