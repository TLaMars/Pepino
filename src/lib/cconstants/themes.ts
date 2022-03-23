import type { Theme } from "../types";

const THEMES: Theme[] = [
  {
    name: "beach",
    gradient: {
      color1: "#4facfe",
      color2: "#00f2fe",
    },
    colors: {
      atom: "#ff7676", // 6
      attribute: "#6eb2ff", // 3
      background: "rgba(25, 29, 34, 0.85)",
      builtin: "#fff",
      comment: "#677f94", // 2
      definition: "#6eb2ff", // 3
      keyword: "#79f6ff", // 7
      meta: "#c8e2ff", // 4
      number: "#ff7676", // 6
      operator: "#79f6ff", // 7
      property: "#00a8b1", // 8
      string: "#68ffa2", // 1
      tag: "#79f6ff", // 7
      text: "#fff",
      type: "#ff7676", // 6
      variable: "#6eb2ff", // 3
      variable2: "#c8e2ff", // 4
      variable3: "#3d98ff", // 5
    },
  },
  {
    name: "sunset",
    gradient: {
      color1: "#ff6a00",
      color2: "#ee0979",
    },
    colors: {
      atom: "#938bff",
      attribute: "#ffd257",
      background: "rgba(25, 29, 34, 0.85)",
      builtin: "#fff",
      comment: "#b18e76",
      definition: "#ffd257",
      keyword: "#ff9a57",
      meta: "#ffe6d5",
      number: "#938bff",
      operator: "#ff9a57",
      property: "#fd7ab9",
      string: "#ffc194",
      tag: "#ff9a57",
      text: "#fff",
      type: "#938bff",
      variable: "#ffd257",
      variable2: "#ffe6d5",
      variable3: "#ffbc40",
    },
  },
];

export default THEMES;
