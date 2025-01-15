import React from "react";

import Select from "../Select/Select";
import LANGUAGES from "src/constants/languages";

import $ from "./ControlBar.module.scss";
import THEMES from "src/constants/themes";
import GradientBackground from "../GradientBackground/GradientBackground";
import { useAtom, useAtomValue } from "jotai";
import {
  autoLanguageAtom,
  detectedLanguageAtom,
  languageAtom,
  themeAtom,
} from "src/store/control-settings";

const ControlBar: React.FC = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [autoLanguage, setAutoLanguage] = useAtom(autoLanguageAtom);
  const detectedLanguage = useAtomValue(detectedLanguageAtom);

  return (
    <div className={$.container}>
      <Select
        options={[
          {
            label: `Auto (${detectedLanguage?.name})`,
            value: "Auto-Detect",
            showValueInOptions: true,
          },
          ...Object.values(LANGUAGES).map((value) => ({
            label: value.name,
            value: value.id,
          })),
        ]}
        selectedValue={autoLanguage ? "Auto-Detect" : language.id}
        onChange={(value) => {
          if (value === "Auto-Detect") {
            setAutoLanguage(true);
            return;
          }
          setAutoLanguage(false);
          setLanguage(LANGUAGES[value]);
        }}
        width="18rem"
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
        onChange={(value) => setTheme(THEMES[value])}
        width="15rem"
      />
    </div>
  );
};

export default ControlBar;
