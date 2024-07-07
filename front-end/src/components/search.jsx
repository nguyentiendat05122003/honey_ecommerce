import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  return (
    <div className="">
      <form className="w-full">
        <div className="relative">
          <input
            placeholder="Nhập từ khoá tìm kiếm..."
            type="search"
            className="leading-[1.734rem] py-[1.2rem] px-[1.6rem] rounded-[0.8rem] border-base border-primary-color pr-5 text-sm font-medium bg-white w-full outline-none block "
          />
          <button className="absolute top-1/2 right-[1.5rem] -translate-y-2/4">
            <FontAwesomeIcon
              color="#fbb321"
              className="w-[1.5rem] h-[1.5rem]"
              icon={faMagnifyingGlass}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
