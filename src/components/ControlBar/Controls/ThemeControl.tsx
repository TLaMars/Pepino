import { useAtom } from "jotai";
import React from "react";
import GradientBackground from "../../GradientBackground/GradientBackground";
import Select from "../../Select/Select";
import SettingWrapper from "../../SettingWrapper/SettingWrapper";
import THEMES from "../../../constants/themes";
import { themeAtom } from "../../../store/control-settings";

const ThemeControl: React.FC = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <SettingWrapper title="Theme">
      <Select
        options={Object.values(THEMES).map((value) => ({
          label: value.name,
          value: value.id,
          icon: (
            <GradientBackground
              colors={value.background.gradient?.colors ?? []}
              direction={value.background.gradient?.direction ?? ""}
            />
          ),
        }))}
        selectedValue={theme.id}
        onChange={(value) => setTheme(THEMES[value])}
        width="15rem"
      />
    </SettingWrapper>
  );
};

export default ThemeControl;
