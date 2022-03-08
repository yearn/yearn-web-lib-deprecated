import * as React from "react";
import { IconProps } from "./Icon";

const SvgFantom = (props: IconProps) => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={"0 0 24 24"}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.993 1c-.353 0-.701.078-1.02.229L5.645 4.036a1.1 1.1 0 0 0-.642.843L5 4.896V19.036a1.103 1.103 0 0 0 .644.928l5.32 2.803.01.004a2.39 2.39 0 0 0 2.04 0l5.33-2.806a1.11 1.11 0 0 0 .655-.927l.001-.01-.06-14.348a1.135 1.135 0 0 0-.595-.644l-5.322-2.803-.01-.004A2.388 2.388 0 0 0 11.994 1ZM6.62 4.998l4.949-2.607a1.09 1.09 0 0 1 .851 0l4.949 2.607-4.95 2.606a1.09 1.09 0 0 1-.85 0l-4.95-2.606Zm11.07 5.562-4.04-2.128 4.04-2.128v4.256ZM6.31 10.554V6.309l4.03 2.123-4.03 2.122Zm11.06 1.312L12.65 9.38v4.97l4.719-2.485Zm-10.75 0 4.72-2.485v4.97l-4.72-2.485Zm6.396 3.769 4.675-2.463v5.656l-4.93 2.605-.005.003c-.233.141-.495.23-.765.259l-.08-.005a2.21 2.21 0 0 1-.712-.278l-.007-.004-4.883-2.558v-5.672l4.657 2.452.009.005a2.39 2.39 0 0 0 2.04 0Z"
      fill="currentcolor"
    />
  </svg>
);

export default SvgFantom;