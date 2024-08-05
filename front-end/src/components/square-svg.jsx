import React from "react";

export default function SquareSvg({ style = {}, className }) {
  return (
    <div
      style={style}
      className={`w-[4.8rem] absolute bottom-0 opacity-0 animate-fruitAnm z-100 ${className}`}
    >
      <svg
        className="w-full h-full text-white opcity-60"
        width="800px"
        height="800px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="layer1">
          <path
            className="fill-current fill-opacity-100"
            style={{ stroke: "none", strokeWidth: "0px" }}
            d="M 10 0.099609375 L 0.099609375 10 L 10 19.900391 L 19.900391 10 L 10 0.099609375 z M 10 1.515625 L 18.484375 10 L 10 18.484375 L 1.515625 10 L 10 1.515625 z "
          ></path>
        </g>
      </svg>
    </div>
  );
}
