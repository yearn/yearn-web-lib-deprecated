import * as React from "react";
import { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1a9 9 0 1 0 5.618 16.032l5.675 5.675a1 1 0 0 0 1.414-1.414l-5.675-5.675A9 9 0 0 0 10 1Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;