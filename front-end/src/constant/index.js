const {
  faPhoneVolume,
  faUser,
  faCartShopping,
  faHouse,
} = require("@fortawesome/free-solid-svg-icons");
import phoneIcon from "@/assets/images/icon-phone.svg";
import cateIcon from "@/assets/images/icon-cate.svg";
export const LINK_INFO_HEADER = [
  {
    id: 0,
    href: "/",
    color: "#fbb321",
    title: "Hotline",
    content: "0313728397",
    icon: faPhoneVolume,
    opacityColor: "#fef0d3",
  },
  {
    id: 1,
    href: "/",
    color: "#8a5e3b",
    title: "Tài khoản",
    content: "Đăng nhập",
    icon: faUser,
    opacityColor: "#e8dfd8",
  },
  {
    id: 2,
    href: "/",
    color: "#408630",
    title: "Giỏ hàng",
    content: "0 Sản phẩm",
    icon: faCartShopping,
    opacityColor: "#d9e7d6",
  },
];

export const LINK_NAVIGATE_HEADER = [
  {
    id: 0,
    content: "Trang chủ",
    href: "/",
    active: true,
  },
  {
    id: 1,
    content: "Giới thiệu",
    href: "/introduction",
  },
  {
    id: 2,
    content: "Sản phẩm",
    href: "/products",
  },
  {
    id: 3,
    content: "Dịch vụ doanh nghiệp",
    href: "/business-service",
  },
  {
    id: 7,
    content: "Tin tức",
    href: "/news",
  },
  {
    id: 4,
    content: "Chính sách",
    href: "/policies",
  },
  {
    id: 5,
    content: "Hướng dẫn mua hàng",
    href: "/purchase-instruction",
  },
  {
    id: 6,
    content: "Liên hệ",
    href: "/contact",
  },
];

export const FIX_MENU = [
  {
    id: 0,
    title: "Trang chủ",
    href: "/",
    icon: faHouse,
    color: "#408630",
  },
  {
    id: 1,
    title: "Hotline",
    href: "/",
    image: phoneIcon,
    opacityColor: "#fef0d3",
  },
  {
    id: 2,
    title: "Danh mục",
    href: "/",
    image: cateIcon,
    opacityColor: "#fbb321",
  },
];
