import { useAtom, useAtomValue } from "jotai";
import React from "react";

import {
  autoLanguageAtom,
  detectedLanguageAtom,
  languageAtom,
} from "../../../store/control-settings";
import SettingWrapper from "../../SettingWrapper/SettingWrapper";
import Select from "../../Select/Select";
import LANGUAGES from "../../../constants/languages";

const LanguageControl: React.FC = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [autoLanguage, setAutoLanguage] = useAtom(autoLanguageAtom);
  const detectedLanguage = useAtomValue(detectedLanguageAtom);

  return (
    <SettingWrapper title="Language">
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
    </SettingWrapper>
  );
};

export default LanguageControl;
