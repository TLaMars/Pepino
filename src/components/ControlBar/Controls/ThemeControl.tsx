import { useAtom } from "jotai";
import React from "react";
import GradientBackground from "src/components/GradientBackground/GradientBackground";
import Select from "src/components/Select/Select";
import SettingWrapper from "src/components/SettingWrapper/SettingWrapper";
import THEMES from "src/constants/themes";
import { themeAtom } from "src/store/control-settings";

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
