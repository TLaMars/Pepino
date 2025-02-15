import React, { RefObject, useEffect, useMemo, useRef } from "react";
import Editor from "../Editor/Editor";

import { useAtomValue, useSetAtom } from "jotai";
import {
  backgroundAtom,
  coloredWindowButtonsAtom,
  imageRefAtom,
  paddingAtom,
  themeAtom,
  windowTitleAtom,
} from "../../store/control-settings";
import GradientBackground from "../GradientBackground/GradientBackground";
import $ from "./Window.module.scss";
import cx from "../../utils/classnames";

const WindowTitleBar: React.FC = () => {
  const coloredButtons = useAtomValue(coloredWindowButtonsAtom);
  const showTitle = useAtomValue(windowTitleAtom);

  return (
    <div className={$.titleBar}>
      <div className={$.buttons}>
        <div className={cx($.button, coloredButtons && $.red)} />
        <div className={cx($.button, coloredButtons && $.yellow)} />
        <div className={cx($.button, coloredButtons && $.green)} />
      </div>
      {showTitle && <input className={$.title} placeholder="Untitled-1" />}
    </div>
  );
};

const Window: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useAtomValue(themeAtom);
  const setImageRef = useSetAtom(imageRefAtom);
  const padding = useAtomValue(paddingAtom);
  const showBackground = useAtomValue(backgroundAtom);

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
    <div className={$.frame} ref={ref} style={{ padding }}>
      <div className={$.window} style={styleVars}>
        <WindowTitleBar />
        <Editor />
      </div>
      {theme.background.gradient && showBackground && (
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
