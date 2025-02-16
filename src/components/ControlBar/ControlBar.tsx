import React from "react";
import ImageControl from "./Controls/ImageControl";
import LanguageControl from "./Controls/LanguageControl";
import LookAndFeelControls from "./Controls/LookAndFeelControls";
import ThemeControl from "./Controls/ThemeControl";

import $ from "./ControlBar.module.scss";

const ControlBar: React.FC = () => (
  <div className={$.wrapper}>
    <LookAndFeelControls />
    <div className={$.container}>
      <LanguageControl />
      <ThemeControl />
    </div>
    <ImageControl />
  </div>
);

export default ControlBar;
