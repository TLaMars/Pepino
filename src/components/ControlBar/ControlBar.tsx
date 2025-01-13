import React from "react";

import Select from "../Select/Select";
import LANGUAGES from "src/constants/languages";

import $ from "./ControlBar.module.scss";
import THEMES from "src/constants/themes";
import GradientBackground from "../GradientBackground/GradientBackground";
import { useAtom } from "jotai";
import { languageAtom, themeAtom } from "src/store/control-settings";

const ControlBar: React.FC = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  console.log(language);

  return (
    <div className={$.container}>
      <Select
        options={[
          {
            label: "Auto",
            value: "auto-detect",
          },
          ...Object.values(LANGUAGES).map((value) => ({
            label: value.name,
            value: value.id,
          })),
        ]}
        selectedValue={language.id}
        onChange={(value) => {
          if (value === "auto-detect") {
            return;
          }
          const language = LANGUAGES[value];
          if (language) setLanguage(language);
        }}
        width="15rem"
      />
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
        onChange={(value) => {
          const theme = THEMES[value];
          if (theme) setTheme(theme);
        }}
        width="15rem"
      />
    </div>
  );
};

export default ControlBar;
