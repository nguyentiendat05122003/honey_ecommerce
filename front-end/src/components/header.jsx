import LinkInfo from "@/components/header-linkInfo";
import HeaderNavigate from "@/components/header-navigate";
import HeaderSale from "@/components/header-sale";
import Logo from "@/components/logo";
import Search from "@/components/search";
import iconSearch from "@/assets/images/icon-search.svg";
import {
  faCartShopping,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IconMenu from "@/components/icon-menu";
import MobileOverlay from "@/components/mobile-overlay";

export default function Header() {
  return (
    <header className="header">
      <HeaderSale />
      <div className="header-main">
        <div className="w-full max-w-[123rem] h-full my-0 mx-auto py-0 px-[1.5rem]">
          <div className="flex items-center">
            <Logo />
            <div className="header-right flex-1">
              <div className="header-top h-size-hd-top flex items-center">
                <div className="flex-1 hidden md:block">
                  <Search />
                </div>
                <div className="header-info flex items-center gap-[1.6rem] ml-auto md:ml-[2.4rem] lg:ml-[6rem] md:gap-[2.4rem]">
                  <LinkInfo
                    href="/"
                    content="0313728397"
                    title="Hotline"
                    color="#fbb321"
                    icon={faPhoneVolume}
                    opacityColor="#fef0d3"
                    className="hidden xl:flex"
                  />
                  <LinkInfo
                    color="#FDE2D9"
                    image={iconSearch}
                    opacityColor="#FDE2D9"
                    className="sm:hidden"
                  />
                  <LinkInfo
                    href="/"
                    content="Đăng nhập"
                    title="Tài khoản"
                    color="#8a5e3b"
                    icon={faUser}
                    opacityColor="#e8dfd8"
                  />
                  <LinkInfo
                    href="/"
                    content="0 Sản phẩm"
                    quantity={1}
                    title="Giỏ hàng"
                    color="#408630"
                    icon={faCartShopping}
                    opacityColor="#d9e7d6"
                  />
                  <div className="lg:hidden py-1 flex items-center gap-1">
                    <IconMenu />
                  </div>
                </div>
              </div>
              <HeaderNavigate />
            </div>
          </div>
        </div>
      </div>
      <MobileOverlay />
    </header>
  );
}
