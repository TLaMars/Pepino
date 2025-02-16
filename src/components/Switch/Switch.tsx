import React from "react";
import cx from "src/utils/classnames";

import $ from "./Switch.module.scss";

type Props = {
  checked: boolean;
  onChange: () => void;
  label?: string;
};

const Switch: React.FC<Props> = ({
  checked,
  onChange,
  label = "Toggle switch",
}) => (
  <label className={$.switch} aria-label={label}>
    <input type="checkbox" onChange={onChange} checked={checked} />
    <span className={cx($.slider, $.round)}></span>
  </label>
);

export default Switch;
