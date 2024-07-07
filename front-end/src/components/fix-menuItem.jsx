import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FixMenuItem({
  icon,
  title,
  href,
  image,
  color,
  opacityColor,
  id,
  length,
}) {
  return (
    <div
      className={`flex-1 ${
        id !== length - 1
          ? "border-r-[0.1rem] border-solid border-border-color"
          : ""
      }`}
    >
      <Link
        href={href}
        className="flex justify-center items-center flex-col gap-[0.2rem] h-full p-[0.8rem] relative text-xs no-underline"
      >
        {icon && <FontAwesomeIcon color={color} icon={icon} />}
        {image && (
          <span
            style={{ backgroundColor: opacityColor }}
            className={`w-2 h-2 rounded-full flex justify-center items-center shrink-0`}
          >
            <Image
              className="w-[1.2rem] block h-auto max-w-full"
              src={image}
              alt="image"
            />
          </span>
        )}
        <span>{title}</span>
      </Link>
    </div>
  );
}
