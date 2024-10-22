import React from "react";

export default function StartSvg({ className, primary, style = {} }) {
  return (
    <div
      style={style}
      className={`w-[4.8rem] absolute bottom-0 opacity-0 animate-fruitAnm z-100 ${className}`}
    >
      <svg
        className={`w-full h-full ${
          primary ? "text-primary-color" : "text-white"
        }  opcity-60`}
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
            d="M 10 1 L 6.8183594 6.8183594 L 1 10 L 6.8183594 13.181641 L 10 19 L 13.181641 13.181641 L 19 10 L 13.181641 6.8183594 L 10 1 z M 10 3.0839844 L 12.445312 7.5546875 L 16.916016 10 L 12.445312 12.445312 L 10 16.916016 L 7.5546875 12.445312 L 3.0839844 10 L 7.5546875 7.5546875 L 10 3.0839844 z "
          ></path>
        </g>
      </svg>
    </div>
  );
}
