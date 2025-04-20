import { SVG } from "@/types/svg";
import React from "react";

const Youtube = ({ size = 20, className }: SVG) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
    <path d="M21.8 7.9s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.8-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.399.8 2c.8.8 1.8.8 2.2.899C6.8 18.9 12 19 12 19s4.2 0 7-.2c.4 0 1.2-.1 2-.8.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.7-.2-3.4-.2-3.4M9.9 14.5V8.9l5.4 2.8z"></path>
    </svg>
  );
};

export default Youtube;
