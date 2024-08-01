"use client";

import GiftsItem from "@/components/gifts-item";
import { DISCOUNT_LIST } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Gifts() {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return (
          '<span class="swiper-pagination-bullet-active-primary ' +
          className +
          '">' +
          "</span>"
        );
      },
    },
    modules: [Pagination],
  };

  return (
    <div className="mt-[1.2rem]">
      <div className="w-full max-w-[123rem] h-full my-0 mx-auto py-0 px-[1.2rem] relative">
        <div className="xl:w-[1225px] overflow-x-auto hide-scroll-bar swiper-pagination-bullet-active-primary">
          <Swiper
            spaceBetween={12}
            slidesPerView={1.35}
            breakpoints={{
              767: {
                slidesPerView: 1.35,
                pagination: {
                  enabled: true,
                },
              },
              768: {
                slidesPerView: 3,
                pagination: {
                  enabled: true,
                },
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            {...params}
          >
            {DISCOUNT_LIST.map((item) => (
              <SwiperSlide className="!h-auto" key={item.id}>
                <GiftsItem
                  title={item.title}
                  donors={item.donors}
                  color={item.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination w-full !bottom-[-30px]"></div>
        </div>
      </div>
    </div>
  );
}
