"use client";
import React, { useRef } from "react";
import Wave from "./wave";
import Image from "next/image";
import thunder from "@/assets/images/thunder.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductItem from "./product-item";
import { MoveLeft, MoveRight } from "lucide-react";
import StartSvg from "./start-svg";
import SquareSvg from "./square-svg";
import dot from "@/assets/images/dot.svg";
import { debounce } from "lodash";
export default function Sale() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const handlePrevClick = debounce(() => {
    if (navigationPrevRef.current) {
      navigationPrevRef.current.click();
    }
  }, 1000);

  const handleNextClick = debounce(() => {
    if (navigationNextRef.current) {
      navigationNextRef.current.click();
    }
  }, 300);
  return (
    <div className="mb-[100px] margin-top-Sale p-[sc] relative before:content-[''] before:absolute -z-1 left-0 right-0 top-0 bottom-0 bg-primary-color">
      <div className="absolute left-0 w-full  flex overflow-hidden bottom-[calc(100%-0.3rem)] scale-y-100">
        <Wave />
      </div>
      <div className="absolute left-0 top-full w-full flex scale-y-100 overflow-hidden rotate-180">
        <Wave />
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 -z-1 overflow-hidden">
        <StartSvg className="left-0" />
        <SquareSvg style={{ animationDelay: "3s" }} className="left-[5%]" />
        <StartSvg className="left-[10%]" />
        <StartSvg className="left-[50%]" />
        <SquareSvg style={{ animationDelay: "3s" }} className="right-[10%]" />
        <SquareSvg style={{ animationDelay: "1s" }} className="right-[5%]" />
        <StartSvg className="right-0" />
        <div className="absolute w-[24rem] animate-spinerSlow z-10 left-[-12rem] top-[20%]">
          <Image src={dot} alt="dot" className="w-full h-auto" />
        </div>
        <div className="absolute w-[20rem] animate-spinerSlow z-10 right-[-10rem]">
          <Image src={dot} alt="dot" className="w-full h-auto" />
        </div>
      </div>
      <div className="container">
        <div className="text-center flex-col md:flex-row md:text-left md:justify-between pt-[5px] w-full flex  gap-1 mb-[3.2rem] items-end overflow-hidden">
          <div className="w-full">
            <p className="inline-block text-base font-bold relative text-white after:contents-[] after:absolute after:w-[1.9rem] after:h-[1.9rem] after:bg-bee after:bg-no-repeat after:bg-contain after:bg-center after:right-  after:-top-[0.4rem]">
              Sản phẩm khuyến mãi
            </p>
            <h2 className="text-[2.2rem] text-white md:text-[4rem] lg:text-[4.4rem] font-bold">
              Giá tốt mỗi ngày
            </h2>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-[1.6rem]">
              <div className="w-[4.4rem] animate-thunderAnm">
                <Image className="w-full h-auto" src={thunder} alt="thunder" />
              </div>
              <div className="flex gap-[1.6rem] items-center">
                <div className="relative">
                  <div className="w-[5.6rem] h-[5.6rem] rounded-[0.8rem] relative bg-primary-color-opacity font-bold after:content-[':'] after:absolute after:top-1/2 after:-translate-y-1/2 after:text-white right-Timer after:font-bold after:text-[2rem]">
                    <div className="absolute left-[0.6rem] right-[0.6rem] bottom-[0.6rem] top-[0.6rem] rounded-[0.6rem] bg-third-color flex items-center justify-center text-white">
                      0
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-[5.6rem] h-[5.6rem] rounded-[0.8rem] relative bg-primary-color-opacity font-bold after:content-[':'] after:absolute after:top-1/2 after:-translate-y-1/2 after:text-white right-Timer after:font-bold after:text-[2rem]">
                    <div className="absolute left-[0.6rem] right-[0.6rem] bottom-[0.6rem] top-[0.6rem] rounded-[0.6rem] bg-third-color flex items-center justify-center text-white">
                      0
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-[5.6rem] h-[5.6rem] rounded-[0.8rem] relative bg-primary-color-opacity font-bold after:content-[':'] after:absolute after:top-1/2 after:-translate-y-1/2 after:text-white right-Timer after:font-bold after:text-[2rem]">
                    <div className="absolute left-[0.6rem] right-[0.6rem] bottom-[0.6rem] top-[0.6rem] rounded-[0.6rem] bg-third-color flex items-center justify-center text-white">
                      0
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-[5.6rem] h-[5.6rem] rounded-[0.8rem] relative bg-primary-color-opacity font-bold ">
                    <div className="absolute left-[0.6rem] right-[0.6rem] bottom-[0.6rem] top-[0.6rem] rounded-[0.6rem] bg-third-color flex items-center justify-center text-white">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              767: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
          </Swiper>
          <div
            className="button-navigation z-10 absolute top-1/2 border-base border-primary-color border-full button-navigation-left bg-white flex cursor-pointer justify-center items-center rounded-full"
            ref={navigationPrevRef}
          >
            <MoveLeft strokeWidth={0.9} size={24} />
          </div>
          <div
            className="button-navigation z-10 absolute top-1/2 border-base border-primary-color border-full button-navigation-right bg-white flex cursor-pointer justify-center items-center rounded-full"
            ref={navigationNextRef}
          >
            <MoveRight strokeWidth={0.9} size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
