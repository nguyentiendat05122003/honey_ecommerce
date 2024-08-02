import imagePr from "@/assets/images/imagePr.png";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ProductItem({ product }) {
  //   const { href, image, name, salePrice, orginPrice } = product;
  return (
    <div className="p-[0.8rem] border-product rounded-[1.2rem] border-base flex flex-col h-full bg-white line-clamp-1">
      <Link
        href="/"
        className="relative block padding-image-product overflow-hidden rounded-[0.8rem]"
      >
        <Image
          className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 w-full object-cover h-full"
          src={imagePr}
          alt="image"
        />
      </Link>
      <div className="mt-[0.8rem] flex flex-col gap-[0.8rem] flex-1 ">
        <h3 className="font-bold line-clamp-2">
          <Link
            href="/"
            className="transition-all duration-300 ease-in-out no-underline hover:text-primary-color"
          >
            Mật Ong Nguyên Chất 1L
          </Link>
        </h3>
        <div className="flex flex-wrap gap-[0.4rem]">
          <div className="text-second-color bg-second-color-opacity py-[0.2rem] px-[0.8rem] rounded-[0.4rem] text-xs font-bold">
            Bán chạy
          </div>
        </div>
        <div className="mt-auto flex flex-wrap gap-[0.8rem] justify-between">
          <div className="font-bold text-primary-color flex items-center gap-[0.4rem]">
            <p>
              80.000
              <span>đ</span>
            </p>
            <p className="text-xs text-[#a0a0a0] line-through">
              85.000
              <span>đ</span>
            </p>
          </div>
          <Link
            href="/"
            className="relative w-[3.2rem] h-[3.2rem] rounded-full border-base border-primary-color flex items-center justify-center group"
          >
            <Plus
              strokeWidth={1.5}
              size={24}
              color="#fbb321"
              className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
            />
            <span className="text-xs whitespace-nowrap absolute top-1/2 opacity-0 translate-x-[0.5rem] -translate-y-1/2 right-[calc(100%+0.8rem)] px-[0.8rem] py-[0.3rem] rounded-[0.4rem] bg-third-color text-white pointer-events-none transition ease-in-out duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
              Xem sản phẩm
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
