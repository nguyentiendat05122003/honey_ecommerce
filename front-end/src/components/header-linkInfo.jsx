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
      className={`flex item gap-1 text-sm whitespace-normal cursor-pointer no-underline ${className} relative`}
    >
      <span
        style={{ backgroundColor: `${opacityColor}` }}
        className={`w-[4rem] h-[4rem] before:contents-[''] before:absolute before:scale-[1.2] sm:before:scale-0 before:left-0 before:right-0 before:top-0 before:bottom-0 before:border-base before:border-[#FDE2D9] before:rounded-full before:z-10 sm:w-[4.4rem] sm:h-[4.4rem] rounded-[100rem] flex justify-center items-center shrink-0 relative`}
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
