import React from "react";

const DarkBG = () => {
  return (
    <svg
      width="650"
      height="650"
      viewBox="0 0 1133 780"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_128_64)">
        <ellipse cx="566.5" cy="445.732" rx="366.5" ry="245" fill="#1B181F" />
      </g>
      <defs>
        <filter
          id="filter0_f_128_64"
          x="0"
          y="0.732178"
          width="1133"
          height="890"
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
            stdDeviation="100"
            result="effect1_foregroundBlur_128_64"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DarkBG;
