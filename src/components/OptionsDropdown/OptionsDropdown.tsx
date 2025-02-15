import React, { PropsWithChildren, useState } from "react";

import cx from "src/utils/classnames";
import Button from "src/components/Button/Button";
import $ from "./OptionsDropdown.module.scss";

type Props = {
  alignment?: "left" | "right";
  icon: React.ReactNode;
  onClick?: () => void;
} & PropsWithChildren;

const OptionsDropdown: React.FC<Props> = ({
  children,
  icon,
  alignment = "left",
  onClick,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
      className={$.wrapper}
    >
      {showOptions && (
        <div
          className={cx(
            $.container,
            alignment === "right" && $.right,
            alignment === "left" && $.left
          )}
        >
          <div className={cx($.options)}>{children}</div>
        </div>
      )}
      <Button
        onClick={() => onClick?.()}
        cursor={onClick ? "pointer" : "default"}
      >
        {icon}
      </Button>
    </div>
  );
};

export default OptionsDropdown;
