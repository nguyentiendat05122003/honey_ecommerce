import GiftsItem from "@/components/gifts-item";
import { DISCOUNT_LIST } from "@/constant";
import { Carousel } from "antd";

export default function Gifts() {
  return (
    <div className="mt-[1.2rem]">
      <div className="w-full max-w-[123rem] h-full my-0 mx-auto py-0 px-[1.2rem]">
        <div className="w-[1225px] overflow-x-auto hide-scroll-bar">
          <div
            style={{ display: "grid", gridAutoFlow: "column", gap: "1.2rem" }}
          >
            {DISCOUNT_LIST.map((item) => (
              <GiftsItem
                title={item.title}
                donors={item.donors}
                key={item.id}
                color={item.color}
              />
            ))}
          </div>
          {/* <Carousel dots={false} draggable={true} slidesToShow={5}>
            {DISCOUNT_LIST.map((item) => (
              <GiftsItem
                title={item.title}
                donors={item.donors}
                key={item.id}
                color={item.color}
              />
            ))}
          </Carousel> */}

          <></>
        </div>
      </div>
    </div>
  );
}
