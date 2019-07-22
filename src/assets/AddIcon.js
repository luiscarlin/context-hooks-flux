import React from "react";

function AddIcon() {
  return (
    <svg
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#add-icon)">
        <circle cx="45.5" cy="46.5" r="33.5" fill="#486FFF" />
        <path
          d="M48.2325 44.7653H57.7481V48.8669H48.2325V59.6481H43.8731V48.8669H34.3575V44.7653H43.8731V34.8044H48.2325V44.7653Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="add-icon"
          x="0"
          y="0"
          width="95"
          height="95"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="1" />
          <feGaussianBlur stdDeviation="7" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default AddIcon;
