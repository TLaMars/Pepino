import { useAtomValue, useSetAtom } from "jotai";
import React, { useEffect, useMemo, useRef } from "react";
import Editor from "src/components/Editor/Editor";
import GradientBackground from "src/components/GradientBackground/GradientBackground";
import {
  backgroundAtom,
  coloredWindowButtonsAtom,
  imageRefAtom,
  paddingAtom,
  themeAtom,
  windowTitleAtom,
} from "src/store/control-settings";
import cx from "src/utils/classnames";

import $ from "./Window.module.scss";

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
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (ref) {
      setImageRef(ref);
    }
  }, [ref, setImageRef]);

  const styleVars = useMemo(
    () =>
      Object.keys(theme.cssTokens).reduce<Record<string, string>>(
        (vars, key) => {
          const value = key as keyof typeof theme.cssTokens;
          // eslint-disable-next-line no-param-reassign
          vars[`--pepino-${key}`] = theme.cssTokens[value];
          return vars;
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
