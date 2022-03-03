import * as React from "react";
import { SVGProps } from "react";

const SvgDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m19.75 8.662-6.996 7.997a1.002 1.002 0 0 1-1.505 0l-7-8a.994.994 0 0 1-.227-.455c-.007-.041-.02-.085-.02-.126-.003-.04-.001-.079 0-.119a.987.987 0 0 1 .323-.695A.995.995 0 0 1 5.002 7h13.997a.998.998 0 0 1 .882 1.47c-.035.067-.078.13-.13.192Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDown;