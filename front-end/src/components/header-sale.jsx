import React from "react";

export default function HeaderSale() {
  return (
    <div className="h-size-hd-sale text-white bg-primary-color text-center rounded-br-header-sale">
      <div className="flex justify-center flex-col w-full max-w-[123rem] h-full my-0 mx-auto px-[1.5rem] py-0">
        <div className="md:text-sm text-xs">
          Giảm&nbsp;
          <span className="text-price-headerSale">25.000đ</span>
          &nbsp;phí ship cho đơn hàng trên&nbsp;
          <span className="text-price-headerSale">600.000đ</span>
        </div>
      </div>
    </div>
  );
}
