import { SVG } from "@/types/svg";
import React from "react";

const Search = ({ size = 20, className }: SVG) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.12 4.14a5.99 5.99 0 1 0 0 11.98 5.99 5.99 0 0 0 0-11.98m-7.49 5.99a7.49 7.49 0 1 1 13.299 4.728L21.37 20.3l-1.06 1.061-5.44-5.44A7.49 7.49 0 0 1 2.63 10.13"
      />
    </svg>
  );
};

export default Search;
