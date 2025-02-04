import React from "react";

import $ from "./ControlBar.module.scss";
import ImageControl from "./Controls/ImageControl";
import LanguageControl from "./Controls/LanguageControl";
import ThemeControl from "./Controls/ThemeControl";

const ControlBar: React.FC = () => {
  return (
    <div className={$.wrapper}>
      <div className={$.container}>
        <LanguageControl />
        <ThemeControl />
      </div>
      <ImageControl />
    </div>
  );
};

export default ControlBar;
