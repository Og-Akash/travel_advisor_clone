import { SVG } from "@/types/svg";

const Bed = ({ size = 20, className }: SVG) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      className={className}
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12.5V20h-4.5v-3h-11v3H2V6.25a2.25 2.25 0 0 1 4.5 0v6.25zM5 6.25a.75.75 0 0 0-1.5 0V18.5H5v-3h14v3h1.5V14H5z"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 10.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 7h5.6a5.4 5.4 0 0 1 5.4 5.4V14H11zm9.241 4A3.9 3.9 0 0 0 16.6 8.5h-4.1v4h8v-.1a3.9 3.9 0 0 0-.259-1.4"
      ></path>
    </svg>
  );
};

export default Bed;
