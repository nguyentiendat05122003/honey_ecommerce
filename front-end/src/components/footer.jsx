import bct from "@/assets/images/bct.png";
import email from "@/assets/images/email.svg";
import home from "@/assets/images/home.svg";
import logo from "@/assets/images/nongsan-logo.png";
import phone from "@/assets/images/phone.svg";
import { LINK_NAVIGATE_HEADER } from "@/constant";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import QuickLink from "./quick-link";
import Search from "./search";
import SquareSvg from "./square-svg";
import StartSvg from "./start-svg";

export default function Footer() {
  return (
    <div className="pb-[5rem] lg:pb-0 pt-[calc(8rem-(44/1728*100vw))] text-sm relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:-z-[2] before:bg-primary-color-opacity">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-[1] overflow-hidden">
        <StartSvg className="left-0" primary />
        <SquareSvg
          className="left-[5%]"
          primary
          style={{ animationDelay: "3s" }}
        />
        <StartSvg
          className="left-[10%]"
          primary
          style={{ animationDelay: "1s" }}
        />
        <StartSvg className="left-[50%]" primary />
        <SquareSvg
          className="right-[10%]"
          primary
          style={{ animationDelay: "3s" }}
        />
        <StartSvg className="right-[5%]" primary />
        <StartSvg
          className="right-0"
          primary
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-[2.4rem] mb-[4rem]">
          <div className="w-full xl:w-auto">
            <Link
              href="/"
              className="w-[14rem] mx-auto lg:w-[18rem]  flex max-w-full no-underline"
            >
              <Image src={logo} alt="logo" priority />
            </Link>
          </div>
          <div className="w-full xl:w-[78rem] max-w-full">
            <div className="flex items-center flex-col xl:flex-row gap-1 ">
              <p className="text-[2.2rem] lg:text-[3.2rem] font-bold text-primary-color whitespace-normal">
                Đăng ký nhận tin
              </p>
              <div className="flex-1 w-full">
                <Search text="Nhập email của bạn" icon={faPaperPlane} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-[2.4rem]">
              <div className="mb-[1.2rem] text-base font-bold">
                Về Mona Honey
              </div>
              <div>
                <p>
                  Mona Honey là thương hiệu mật ong chất lượng cao, với đa dạng
                  sản phẩm phục vụ mọi nhu cầu: Mật ong, phấn hoa, sữa ong chúa,
                  sáp ong, tinh bột nghệ.
                </p>
              </div>
            </div>
            <div className="mb-[2.4rem]">
              <div className="mb-[1.2rem] text-base font-bold">
                Bản quyền của Công ty TNHH Mona Honey
              </div>
              <div>
                <p>
                  Mona Honey là thương hiệu mật ong chất lượng cao, với đa dạng
                  sản phẩm phục vụ mọi nhu cầu: Mật ong, phấn hoa, sữa ong chúa,
                  sáp ong, tinh bột nghệ.
                </p>
                <p className="mt-1">
                  Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm số
                  1234/4321/BQLATTP-HCM do Ban Quản lý An toàn thực phẩm thành
                  phố HồChí Minh cấp ngày 30/02/2022
                </p>
              </div>
            </div>
            <div>
              <Image
                className="max-w-full h-auto"
                src={bct}
                alt="Bộ công thương"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="mb-[2.4rem]">
              <div className="mb-[1.2rem] text-base font-bold">
                Thông tin liên hệ
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold mb-[0.8rem]">
                  <Image
                    className="w-[1.5rem] relative block -top-[0.1rem] max-w-full h-auto"
                    src={home}
                    alt="home"
                  />
                  <span>Hệ thống chi nhánh cửa hàng</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="px-[0.8rem] py-[0.4rem] rounded-[0.4rem] bg-primary-color text-white">
                    <span>Mona.Media</span>
                  </div>
                  <div
                    style={{ backgroundColor: "rgba(251, 179, 33, 0.2)" }}
                    className="px-[0.8rem] py-[0.4rem] rounded-[0.4rem] text-black-heading"
                  >
                    <span>Mona.Software</span>
                  </div>
                </div>
                <div className="block">
                  <div className="mb-[1.2rem]">
                    <p>1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM</p>
                  </div>
                  <div className="mb-[1.2rem]">
                    <div className="flex items-center gap-1 font-bold mb-[0.8rem]">
                      <Image
                        className="w-[1.5rem] relative block -top-[0.1rem] max-w-full h-auto"
                        src={phone}
                        alt="phone"
                      />
                      <span>Điện thoại</span>
                    </div>
                    <div>
                      <p>0313728397</p>
                    </div>
                  </div>
                  <div className="mb-[1.2rem]">
                    <div className="flex items-center gap-1 font-bold mb-[0.8rem]">
                      <Image
                        className="w-[1.5rem] relative block -top-[0.1rem] max-w-full h-auto"
                        src={email}
                        alt="email"
                      />
                      <span>Email</span>
                    </div>
                    <div>
                      <p>info@themona.global</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-[1.2rem] text-base font-bold">
              Kết nối với chúng tôi{" "}
            </p>
            <div className="flex items-center gap-[1.2rem]">
              <Link
                className="block w-[3.2rem] h-[3.2rem] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-[5px]"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="w-full h-full text-primary-color"
                >
                  <path
                    d="M18.08 21.036H16.1c-.32 0-.42-.12-.42-.42v-2.42c0-.32.12-.42.42-.42h1.98v-1.76c0-.8.14-1.56.54-2.26.42-.72 1.02-1.2 1.78-1.48.5-.18 1-.26 1.54-.26h1.96c.28 0 .4.12.4.4v2.28c0 .28-.12.4-.4.4-.54 0-1.08 0-1.62.02-.54 0-.82.26-.82.82-.02.6 0 1.18 0 1.8h2.32c.32 0 .44.12.44.44v2.42c0 .32-.1.42-.44.42h-2.32v6.52c0 .34-.1.46-.46.46h-2.5c-.3 0-.42-.12-.42-.42v-6.54z"
                    fill="currentColor"
                  ></path>
                  <rect
                    x=".5"
                    y=".5"
                    width="39"
                    height="39"
                    rx="7.5"
                    stroke="currentColor"
                  ></rect>
                </svg>
              </Link>
              <Link
                className="block w-[3.2rem] h-[3.2rem] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-[5px]"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="w-full h-full text-primary-color"
                >
                  <g clipPath="url(#clip0_614_9270)" fill="currentColor">
                    <path d="M29.98 15.88c-.046-1.063-.218-1.793-.464-2.426a4.881 4.881 0 00-1.157-1.774 4.922 4.922 0 00-1.77-1.153c-.637-.246-1.363-.418-2.426-.464-1.07-.051-1.41-.063-4.126-.063-2.715 0-3.055.012-4.122.059-1.063.046-1.793.219-2.426.465a4.879 4.879 0 00-1.774 1.156 4.923 4.923 0 00-1.152 1.77c-.247.637-.418 1.363-.465 2.426-.051 1.07-.063 1.41-.063 4.126 0 2.715.012 3.055.059 4.122.047 1.063.219 1.793.465 2.426a4.932 4.932 0 001.156 1.774 4.92 4.92 0 001.77 1.152c.637.247 1.364.419 2.426.465 1.067.047 1.407.059 4.122.059 2.716 0 3.055-.012 4.122-.059 1.063-.046 1.793-.218 2.426-.464a5.116 5.116 0 002.927-2.927c.246-.637.418-1.364.465-2.426.047-1.067.058-1.407.058-4.122s-.004-3.055-.05-4.122zm-1.8 8.166c-.044.977-.208 1.504-.344 1.855a3.318 3.318 0 01-1.9 1.9c-.35.136-.882.3-1.855.343-1.055.047-1.371.059-4.04.059-2.668 0-2.989-.012-4.04-.059-.977-.043-1.504-.207-1.856-.344a3.076 3.076 0 01-1.148-.746 3.11 3.11 0 01-.747-1.148c-.136-.352-.3-.883-.343-1.856-.047-1.055-.059-1.372-.059-4.04 0-2.669.012-2.99.059-4.04.043-.977.207-1.504.343-1.856a3.04 3.04 0 01.75-1.149 3.104 3.104 0 011.15-.746c.35-.136.882-.3 1.855-.344 1.055-.046 1.372-.058 4.04-.058 2.672 0 2.989.011 4.04.058.977.043 1.504.207 1.856.344.433.16.828.414 1.148.746.332.325.586.715.747 1.15.136.35.3.882.343 1.855.047 1.055.059 1.371.059 4.04 0 2.668-.012 2.98-.059 4.036z"></path>
                    <path d="M20.036 14.867a5.14 5.14 0 00-5.138 5.138 5.139 5.139 0 105.138-5.138zm0 8.47a3.333 3.333 0 11.001-6.666 3.333 3.333 0 010 6.667zm6.543-8.677a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                  </g>
                  <rect
                    x=".5"
                    y=".5"
                    width="39"
                    height="39"
                    rx="7.5"
                    stroke="currentColor"
                  ></rect>
                  <defs>
                    <clipPath id="clip0_614_9270">
                      <path
                        fill="#fff"
                        transform="translate(10 10)"
                        d="M0 0h20v20H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                className="block w-[3.2rem] h-[3.2rem] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-[5px]"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="w-full h-full text-primary-color"
                >
                  <path
                    d="M28.967 13.975c-.657-1.283-1.659-2.254-2.942-2.942C24.742 10.344 23.333 10 20.892 10h-1.784c-2.441 0-3.881.344-5.133 1.033-1.283.657-2.254 1.659-2.942 2.942C10.344 15.258 10 16.667 10 19.108v1.784c0 2.441.344 3.881 1.033 5.133.657 1.283 1.659 2.254 2.942 2.942 1.283.689 2.692 1.033 5.133 1.033h1.784c2.441 0 3.881-.344 5.133-1.033 1.283-.657 2.254-1.659 2.942-2.942.689-1.283 1.033-2.692 1.033-5.133v-1.784c0-2.441-.344-3.881-1.033-5.133zm.689 7.042c0 2.41-.345 3.787-1.033 5.04a2.412 2.412 0 01-.97.97c-3.35 1.815-8.42 1.752-11.769-.094-.814.407-1.94.657-2.88.563-.156 0-.187-.063-.093-.188.657-.657 1.064-1.752.626-2.378v-.032c-2.786-3.724-2.535-10.547.75-13.677.126-.126.251-.188.408-.25 1.064-.439 2.347-.658 4.256-.658h1.753c2.41 0 3.881.313 5.133.97a6.73 6.73 0 012.88 2.88c.657 1.252.939 2.692.939 5.07v1.784z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.889 17.697c.03-.031.094-.125.125-.157v-.031a.976.976 0 00.188-.626v-.125h-3.913v.845h2.723l-2.691 3.318c-.094.125-.157.25-.157.5v.22h3.693a.347.347 0 00.345-.345v-.438h-2.849l2.536-3.161zm5.037 3.662a.28.28 0 00.282.281h.563v-4.882h-.845v4.6zm3.319-3.531a1.95 1.95 0 00-1.94 1.94 1.95 1.95 0 001.94 1.941 1.95 1.95 0 001.94-1.94c-.03-1.096-.876-1.94-1.94-1.94zm0 3.067c-.626 0-1.127-.5-1.127-1.126 0-.626.501-1.127 1.127-1.127s1.127.5 1.127 1.127c0 .626-.5 1.126-1.127 1.126zm-4.787-2.66a2.024 2.024 0 00-1.127-.376c-1.064 0-1.91.845-1.91 1.91 0 1.064.846 1.909 1.91 1.909.438 0 .814-.125 1.127-.376 0 .188.156.345.344.345h.438v-3.694h-.782v.282zm-1.127 2.66c-.626 0-1.127-.5-1.127-1.126 0-.626.501-1.127 1.127-1.127s1.127.5 1.127 1.127c0 .626-.5 1.126-1.127 1.126z"
                    fill="currentColor"
                  ></path>
                  <rect
                    x=".5"
                    y=".5"
                    width="39"
                    height="39"
                    rx="7.5"
                    stroke="currentColor"
                  ></rect>
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <div>
              <p className="mb-[1.2rem] text-base font-bold">Liên kết nhanh </p>
              <div>
                <ul className="flex flex-col gap-[0.4rem]">
                  {LINK_NAVIGATE_HEADER.map((item) => (
                    <QuickLink
                      key={item.id}
                      href={item.href}
                      content={item.content}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-2">
            <div>
              <p className="mb-[1.2rem] text-base font-bold">Chính sách </p>
              <div>
                <ul className="flex flex-col gap-[0.4rem]">
                  <li className="">
                    <Link href="/">Chính sách bảo hành</Link>
                  </li>
                  <li className="">
                    <Link href="/">Câu chuyện thương hiệu</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-[1.2rem] text-[#3a3a3a] font-bold bg-primary-color mt-[8rem] footer">
        <div className="container">
          <div className="flex items-center justify-center gap-[8px]">
            <span>© Thiết kế và lập trình bởi</span>
            <span>Dat Nguyen</span>
          </div>
        </div>
      </div>
    </div>
  );
}
