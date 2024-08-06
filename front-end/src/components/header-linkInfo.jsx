import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function LinkInfo({
  href,
  image,
  color,
  title,
  content,
  icon,
  opacityColor,
  className,
  quantity,
}) {
  let Comp = Link;
  if (!href) {
    Comp = "div";
  }

  return (
    <Comp
      href={href}
      className={`flex item gap-1 text-sm whitespace-normal cursor-pointer no-underline ${className} relative group`}
    >
      <span
        style={{
          backgroundColor: `${opacityColor}`,
          borderColor: `${opacityColor}`,
        }}
        className={`w-[4rem] h-[4rem] before:content-[''] before:absolute before:scale-100 before:left-0 before:right-0 before:top-0 before:bottom-0 before:border-base  before:rounded-full before:ease-in-out before:z-10 before:transition-transform before:duration-300 before:border-inherit group-hover:before:scale-[1.2] rounded-[100rem] flex justify-center items-center shrink-0 relative`}
      >
        {image ? (
          <Image
            src={image}
            alt="image"
            className="w-[1.8rem] relative top-[-0.1rem] left-[-0.1rem]"
          />
        ) : (
          <FontAwesomeIcon
            icon={icon}
            className="w-[1.8rem] h-auto"
            color={`${color}`}
          />
        )}
      </span>
      {quantity && (
        <span
          className={`sm:hidden w-[2.4rem] h-[2.4rem] rounded-full text-[#408630] border-[#408630] border-base bg-[#d9e7d6] flex items-center absolute text-xs z-30 justify-center right-[-0.8rem] top-[-0.4rem]`}
        >
          1
        </span>
      )}
      <span className="flex-1 hidden md:block">
        <span className="block text-sm font-medium">{title}</span>
        <span style={{ color: `${color}` }} className={`font-bold`}>
          {content}
        </span>
      </span>
    </Comp>
  );
}
