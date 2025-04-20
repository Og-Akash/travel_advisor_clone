import { SVG } from "@/types/svg";
import React from "react";

const Twitter = ({ size = 20, className }: SVG) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
    <path d="M13.905 10.47 21.35 2h-1.764L13.12 9.353 7.956 2H2l7.809 11.12L2 22h1.764l6.827-7.766L16.044 22H22M4.4 3.302h2.71l12.476 17.46h-2.71"></path>
    </svg>
  );
};

export default Twitter;
