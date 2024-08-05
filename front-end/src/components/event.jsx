import React from "react";
import bgBlur from "@/assets/images/bg-blur.png";
import Image from "next/image";
import Button from "./button";
import icon1 from "@/assets/images/icon-1.png";
import icon2 from "@/assets/images/icon-2.png";
import icon3 from "@/assets/images/icon-3.png";
import icon4 from "@/assets/images/icon-4.png";
import person from "@/assets/images/person.png";
import bee from "@/assets/images/bee.png";
import persent from "@/assets/images/persent.svg";
import feMale from "@/assets/images/feMale.svg";
import EventItem from "./event-item";
import EventAction from "./event-action";
export default function Event() {
  return (
    <div className="block">
      <div className="relative overflow-hidden mt-[4rem] lg:mt-[8rem] pt-[4rem] lg:pt-sc">
        <div className="absolute -left-[20%] -top-[30%] -z-10">
          <Image className="max-w-full h-auto" src={bgBlur} alt="image" />
        </div>
        <div className="container">
          <div className="-mx-[12px]">
            <div className="md:grid md:grid-cols-12">
              <div className="md:col-span-7 w-full px-[12px] mb-[24px]">
                <div className="flex flex-col gap-[2.4rem] w-[calc(100%+5rem)] xl:pb-[8rem] pb-0">
                  <div className="text-[2.2rem] xl:text-[3.2rem] lg:text-[2.7rem] font-bold inline-flex gap-[0.6rem]">
                    <span className="xl:w-[18.7rem] relative inline-block text-center text-primary-color">
                      <svg
                        className="absolute top-1/2 left-0 w-full -z-10 -translate-y-1/2 hidden xl:block"
                        width="189"
                        height="90"
                        viewBox="0 0 189 90"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M95.6859 70.5C29.4726 79.502 -47.244 36.6948 40.3279 8.3354C137.596 -23.1639 236.036 56.3354 162.206 66.8354C88.376 77.3354 48.8099 76.5 50.5677 89"
                          stroke="#FCB445"
                        ></path>
                      </svg>
                      <span>ƯU ĐÃI</span>
                    </span>
                    <span className="text-black-heading">
                      GIẢM GIÁ
                      <span className="text-primary-color"> ĐẾN 50%</span>
                    </span>
                  </div>
                  <h2 className="font-bold xl:text-[7rem] lg:text-[5rem] text-[3.2rem] text-black-heading">
                    TÀI KHOẢN MỚI
                  </h2>
                  <Button
                    url="/"
                    content="Đăng ký ngay"
                    className="flex mr-auto !w-auto"
                  />
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                    <div className="flex justify-start items-start h-full w-full">
                      <EventItem source={icon1} title="Chất lượng hảo hạng" />
                    </div>
                    <div className="flex justify-start items-start h-full w-full">
                      <EventItem source={icon2} title="Đảm bảo xuất xứ" />
                    </div>
                    <div className="flex justify-start items-start h-full w-full">
                      <EventItem source={icon3} title="Giao hàng siêu tốc" />
                    </div>
                    <div className="flex justify-start items-start h-full w-full">
                      <EventItem source={icon4} title="Đổi trả dễ dàng" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 md:grid-cols-12  flex flex-col justify-end px-[12px] mb-[24px]">
                <div className="relative lg:event-right-inner w-[calc(100%+1.5rem)]">
                  <div className="absolute r-0 w-[90%] rounded-custom bottom-0 top-[5rem] right-0 bg-primary-color -z-10"></div>
                  <div className="w-[41.6rem] max-w-full">
                    <Image
                      className="block w-full max-w-full h-auto"
                      src={person}
                      alt="person"
                    />
                  </div>
                  <div className="absolute left-0 right-0 top-0 bottom-0">
                    <EventAction
                      className="md:top-[28%] md:-left-[10%] top-0 left-0 text-primary-color"
                      title="Đa dạng sản phẩm"
                      source={bee}
                    />
                    <EventAction
                      className="top-[80%] md:left-[50%] left-0  text-second-color"
                      title="Vô vàn ưu đãi"
                      source={persent}
                    />
                    <EventAction
                      className="md:top-[20%] left-[60%] top-[35%] text-third-color"
                      title="Khách hàng tin tưởng"
                      source={feMale}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
