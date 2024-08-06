import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Search({ text, icon, active }) {
  return (
    <div className="">
      <form className="w-full">
        <div className="relative">
          <input
            placeholder={text}
            type="search"
            className={`leading-[1.734rem] py-[1.2rem] px-[1.6rem] rounded-[0.8rem] border-base  pr-5 text-sm font-medium bg-white w-full outline-none block transition duration-300 ease-in-out ${
              active
                ? "border-primary-color focus:border-border-color"
                : "border-border-color focus:border-primary-color"
            }`}
          />
          <button className="absolute top-1/2 right-[1.5rem] -translate-y-2/4">
            <FontAwesomeIcon
              color="#fbb321"
              className="w-[1.5rem] h-[1.5rem]"
              icon={icon}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
