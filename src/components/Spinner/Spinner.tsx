import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export interface SpinnerProps {
  color?: string;
  gap?: number;
  thickness?: number;
  size?: number;
}

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSVG = styled.svg`
  transition-property: transform;
  animation-name: ${animation};
  animation-duration: 700ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Spinner = ({
  color = "#0657F9",
  gap = 4,
  thickness = 4,
  size = 24,
  ...props
}: SpinnerProps): ReactElement => (
  <StyledSVG height={size} width={size} {...props} viewBox={"0 0 32 32"}>
    <circle
      cx={16}
      cy={16}
      r={14 - thickness / 2}
      stroke={color}
      fill={"none"}
      strokeWidth={thickness}
      strokeDasharray={Math.PI * 2 * (11 - gap)}
      strokeLinecap={"round"}
    />
  </StyledSVG>
);

Spinner.defaultProps = {
  color: "#0657F9",
  gap: 4,
  thickness: 4,
  size: 24,
};
