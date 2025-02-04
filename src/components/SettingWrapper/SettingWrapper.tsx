import React, { PropsWithChildren } from "react";

import $ from "./SettingWrapper.module.scss";

type Props = {
  title: string;
} & PropsWithChildren;

const SettingWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={$.container}>
      <h2 className={$.title}>{title}</h2>
      {children}
    </div>
  );
};

export default SettingWrapper;
