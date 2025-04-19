import React from "react";

const Sparkle = ({ size = 20, className = "" }) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={className}
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.772 8.538a9.64 9.64 0 0 1-5.703-5.703c-.197-.538-.976-.538-1.174 0a9.59 9.59 0 0 1-5.697 5.703c-.538.197-.538.976 0 1.173a9.64 9.64 0 0 1 5.703 5.704c.197.537.976.537 1.173 0a9.64 9.64 0 0 1 5.704-5.704c.537-.197.537-.976 0-1.173zm-8.683 7.83a6.89 6.89 0 0 1-4.074-4.073c-.141-.384-.697-.384-.838 0a6.85 6.85 0 0 1-4.07 4.073c-.384.141-.384.698 0 .839a6.89 6.89 0 0 1 4.074 4.073c.14.384.697.384.838 0a6.89 6.89 0 0 1 4.074-4.073c.384-.141.384-.698 0-.839z"
      ></path>
    </svg>
  );
};

export default Sparkle;
