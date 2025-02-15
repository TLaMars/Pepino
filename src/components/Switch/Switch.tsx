import React from "react";

import $ from "./Switch.module.scss";
import cx from "../../utils/classnames";

type Props = {
  checked: boolean;
  onChange: () => void;
};

const Switch: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <label className={$.switch}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className={cx($.slider, $.round)}></span>
    </label>
  );
};

export default Switch;
