import React from "react";

import Select from "../Select/Select";
import LANGUAGES from "src/constants/languages";

import $ from "./ControlBar.module.scss";
import THEMES from "src/constants/themes";
import GradientBackground from "../GradientBackground/GradientBackground";

const ControlBar: React.FC = () => {
  return (
    <div className={$.container}>
      <Select
        options={Object.entries(LANGUAGES).map(([key, value]) => ({
          label: value.name,
          value: key,
        }))}
        width="15rem"
        selectedValue={Object.keys(LANGUAGES)[0]}
        onChange={() => {}}
      />
      <Select
        options={Object.entries(THEMES).map(([key, value]) => ({
          label: value.name,
          value: key,
          icon: (
            <GradientBackground
              colors={value.background.gradient?.colors ?? []}
              direction={value.background.gradient?.direction ?? ""}
            />
          ),
        }))}
        selectedValue={Object.keys(THEMES)[6]}
        onChange={() => {}}
        width="15rem"
      />
    </div>
  );
};

export default ControlBar;
