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
import Notification from "../Notification/Notification";

import $ from "./Frame.module.scss";

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

const Frame: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useAtomValue(themeAtom);
  const setImageRef = useSetAtom(imageRefAtom);
  const padding = useAtomValue(paddingAtom);
  const showBackground = useAtomValue(backgroundAtom);

  useEffect(() => {
    if (ref.current) {
      setImageRef({ current: ref.current });
    }
  }, [ref, setImageRef]);

  const styleVars = useMemo(
    () =>
      Object.keys(theme.cssTokens).reduce<Record<string, string>>(
        (acc, key) => ({
          ...acc,
          [`--pepino-${key}`]:
            theme.cssTokens[key as keyof typeof theme.cssTokens],
        }),
        {},
      ),
    [theme],
  );

  return (
    <div className={$.frameContainer}>
      <Notification />
      <div className={$.frame} ref={ref} style={{ padding }}>
        {!showBackground && (
          <div data-ignore-export className={$.transparencyBackground} />
        )}
        {theme.background.gradient && showBackground && (
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
    </div>
  );
};

export default Frame;
