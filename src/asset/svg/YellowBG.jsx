import React from "react";

const YellowBG = () => {
  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 760 695"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_128_107)">
        <ellipse cx="380" cy="347.705" rx="250" ry="216.973" fill="#A65D6D" />
      </g>
      <defs>
        <filter
          id="filter0_f_128_107"
          x="0"
          y="0.732178"
          width="760"
          height="693.947"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="65"
            result="effect1_foregroundBlur_128_107"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default YellowBG;
