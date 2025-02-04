import React, { RefObject, useEffect, useMemo, useRef } from "react";
import Editor from "../Editor/Editor";

import { useAtomValue, useSetAtom } from "jotai";
import { imageRefAtom, themeAtom } from "src/store/control-settings";
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
      <input className={$.title} placeholder="Untitled-1" />
    </div>
  );
};

const Window: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useAtomValue(themeAtom);
  const setImageRef = useSetAtom(imageRefAtom);

  useEffect(() => {
    if (ref) {
      setImageRef(ref as RefObject<HTMLDivElement>);
    }
  }, [ref, setImageRef]);

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
    <div className={$.frame} ref={ref}>
      <div className={$.window} style={styleVars}>
        <WindowTitleBar />
        <Editor />
      </div>
      {theme.background.gradient && (
        <GradientBackground
          colors={theme.background.gradient.colors}
          direction={theme.background.gradient.direction}
          zIndex={-1}
        />
      )}
    </div>
  );
};

export default Window;
