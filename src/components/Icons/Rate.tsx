import { SVG } from "@/types/svg";

const Rate = ({
  className = "",
  width,
  height,
}: {
  className: string;
  width: number;
  height: number;
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 128 24"
      style={{ width, height }}
      aria-labelledby=":lithium-R1e53aijmpauinjlq:"
      data-automation="bubbleRatingImage"
    >
      <title id=":lithium-R1e53aijmpauinjlq:">4.9 of 5 bubbles</title>
      <path
        d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
        transform=""
      ></path>
      <path
        d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
        transform="translate(26 0)"
      ></path>
      <path
        d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
        transform="translate(52 0)"
      ></path>
      <path
        d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
        transform="translate(78 0)"
      ></path>
      <path
        d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
        transform="translate(104 0)"
      ></path>
    </svg>
  );
};

export default Rate;
