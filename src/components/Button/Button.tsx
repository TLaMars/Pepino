import type { PropsWithChildren } from "react";
import React from "react";
import cx from "src/utils/classnames";

import $ from "./Button.module.scss";

type Props = {
  size?: "small" | "medium" | "large";
  border?: boolean;
  onClick: () => void;
  cursor?: "pointer" | "default";
  type?: "default" | "primary";
} & PropsWithChildren;

const Button: React.FC<Props> = ({
  onClick,
  children,
  size = "medium",
  border = true,
  cursor = "pointer",
  type = "primary",
}) => (
  <button
    className={cx(
      $.button,
      size === "small" && $.small,
      size === "medium" && $.medium,
      size === "large" && $.large,
      cursor === "pointer" && $.pointer,
      type === "primary" && $.primary,
      type === "default" && $.default,
      border && $.border
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
