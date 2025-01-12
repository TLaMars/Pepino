import React, { useMemo } from "react";
import Editor from "../Editor/Editor";
import THEMES from "src/constants/themes";

import GradientBackground from "../GradientBackground/GradientBackground";
import $ from "./Window.module.scss";

const WindowTitleBar: React.FC = () => {
  return (
    <div className={$.titleBar}>
      <div className={$.buttons}>
        <div className={$.button} />
        <div className={$.button} />
        <div className={$.button} />
      </div>
      {/* TODO: make input */}
      <input className={$.title} placeholder="Untitled-1" />
    </div>
  );
};

const Window: React.FC = () => {
  const theme = THEMES[0];

  const styleVars = useMemo(
    () =>
      Object.keys(theme.cssTokens).reduce<Record<string, string>>(
        (styleVars, key) => {
          const value = key as keyof typeof theme.cssTokens;
          styleVars[`--pepino-${key}`] = theme.cssTokens[value];
          return styleVars;
        },
        {}
      ),
    [theme]
  );

  return (
    <div className={$.frame}>
      {theme.background.gradient && (
        <GradientBackground
          colors={theme.background.gradient.colors}
          direction={theme.background.gradient.direction}
        />
      )}
      <div className={$.window} style={styleVars}>
        <WindowTitleBar />
        <Editor />
      </div>
    </div>
  );
};

export default Window;
