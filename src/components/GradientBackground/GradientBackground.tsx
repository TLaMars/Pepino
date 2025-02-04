import React from "react";

import $ from "./GradientBackground.module.scss";

type Props = {
  colors: string[];
  direction: string;
  zIndex?: number;
};

const GradientBackground: React.FC<Props> = ({ colors, direction, zIndex }) => {
  const gradient = `linear-gradient(${direction}, ${colors.join(", ")})`;

  return (
    <div
      className={$.background}
      style={{ background: gradient, zIndex }}
    ></div>
  );
};

export default GradientBackground;
