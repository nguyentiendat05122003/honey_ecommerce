import 'swiper/css/pagination';
import "../globals.css";
import 'swiper/css';

import localFont from "next/font/local";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/components/header";
import FixMenu from "@/components/fix-menu";
const quicksand = localFont({
  src: [
    {
      path: "../../assets/fonts/Quicksand-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Quicksand-Medium.woff2",
      weight: "500",
      style: "normal",
      display: "swap",
    },
    {
      path: "../../assets/fonts/Quicksand-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Quicksand-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <AntdRegistry>
          <div id="page">
            <Header />
            {children}
            <FixMenu />
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
