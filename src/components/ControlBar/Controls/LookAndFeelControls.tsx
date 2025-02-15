import React from "react";
import OptionsDropdown from "src/components/OptionsDropdown/OptionsDropdown";
import Settings from "src/assets/icons/settings.svg?react";
import SettingWrapper from "src/components/SettingWrapper/SettingWrapper";
import Button from "src/components/Button/Button";
import {
  backgroundAtom,
  coloredWindowButtonsAtom,
  paddingAtom,
  windowTitleAtom,
} from "src/store/control-settings";
import { useAtom } from "jotai";

import $ from "./Controls.module.scss";
import Switch from "src/components/Switch/Switch";

const PADDING_OPTIONS = [16, 32, 64, 128];

const LookAndFeelControls: React.FC = () => {
  const [padding, setPadding] = useAtom(paddingAtom);
  const [showBackground, setShowBackground] = useAtom(backgroundAtom);
  const [showTitle, setShowTitle] = useAtom(windowTitleAtom);
  const [showColoredButtons, setShowColoredButtons] = useAtom(
    coloredWindowButtonsAtom
  );

  return (
    <OptionsDropdown icon={<Settings />} alignment="right">
      <div className={$.column}>
        <SettingWrapper title="Padding">
          <div className={$.row}>
            {PADDING_OPTIONS.map((p) => (
              <Button
                size="small"
                key={p}
                type={padding === p ? "primary" : "default"}
                onClick={() => setPadding(p)}
              >
                {p}
              </Button>
            ))}
          </div>
        </SettingWrapper>
        <div className={$.rowBig}>
          <SettingWrapper title="Background">
            <Switch
              checked={showBackground}
              onChange={() => setShowBackground(!showBackground)}
            />
          </SettingWrapper>
          <SettingWrapper title="Title">
            <Switch
              checked={showTitle}
              onChange={() => setShowTitle(!showTitle)}
            />
          </SettingWrapper>
        </div>
        <SettingWrapper title="Colored Buttons">
          <Switch
            checked={showColoredButtons}
            onChange={() => setShowColoredButtons(!showColoredButtons)}
          />
        </SettingWrapper>
      </div>
    </OptionsDropdown>
  );
};

export default LookAndFeelControls;
