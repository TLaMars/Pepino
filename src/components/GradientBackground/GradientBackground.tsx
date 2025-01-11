import React from "react";

import $ from "./GradientBackground.module.scss";

type Props = {
  colors: string[];
  direction: string;
};

const GradientBackground: React.FC<Props> = ({ colors, direction }) => {
  const gradient = `linear-gradient(${direction}, ${colors.join(", ")})`;

  return <div className={$.background} style={{ background: gradient }}></div>;
};

export default GradientBackground;
