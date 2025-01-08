import type { Theme } from "../types";

const THEMES: Theme[] = [
  {
    name: "lunar glow",
    gradient: {
      color1: "#2a2e3d",
      color2: "#7f7fc1",
    },
    colors: {
      atom: "#9f88ff",
      attribute: "#73a7f5",
      background: "rgba(22, 22, 32, 0.95)",
      builtin: "#a2c8ff",
      comment: "#505a6d",
      definition: "#91b5ff",
      keyword: "#d389ff",
      meta: "#d9e8ff",
      number: "#f7cc56",
      operator: "#d389ff",
      property: "#6b94ff",
      string: "#86ffce",
      tag: "#c7e4ff",
      text: "#eef6ff",
      type: "#84c2ff",
      variable: "#73a7f5",
      variable2: "#a9d6ff",
      variable3: "#5c89ff",
    },
  },
  {
    name: "forest ember",
    gradient: {
      color1: "#6b4c35",
      color2: "#bf6340",
    },
    colors: {
      atom: "#d78f47",
      attribute: "#8cbf7e",
      background: "rgba(35, 30, 25, 0.95)",
      builtin: "#bf9262",
      comment: "#675c52",
      definition: "#9fc394",
      keyword: "#e67e50",
      meta: "#a9a490",
      number: "#d78f47",
      operator: "#e67e50",
      property: "#91b882",
      string: "#f0c687",
      tag: "#c8d4a5",
      text: "#fff7e4",
      type: "#b3d78f",
      variable: "#8cbf7e",
      variable2: "#e1b689",
      variable3: "#9fa582",
    },
  },
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
  {
    name: "swamp",
    gradient: {
      color1: "#77c500",
      color2: "#001d18",
    },
    colors: {
      atom: "#ae79ff", // 6
      attribute: "#77c500", // 3
      background: "rgba(25, 29, 34, 0.85)",
      builtin: "#fff",
      comment: "#73885c", // 2
      definition: "#77c500", // 3
      keyword: "#d4d648", // 7
      meta: "#f3ffc8", // 4
      number: "#ae79ff", // 6
      operator: "#d4d648", // 7
      property: "#b9fc00", // 8
      string: "#ace255", // 1
      tag: "#d4d648", // 7
      text: "#fff",
      type: "#ae79ff", // 6
      variable: "#77c500", // 3
      variable2: "#f3ffc8", // 4
      variable3: "#5dff3d", // 5
    },
  },
  {
    name: "forest dawn",
    gradient: {
      color1: "#85bb65",
      color2: "#f5d76e",
    },
    colors: {
      atom: "#ffb347",
      attribute: "#6ebf8b",
      background: "rgba(25, 34, 25, 0.95)",
      builtin: "#4d8b5b",
      comment: "#b8c4aa",
      definition: "#86c37a",
      keyword: "#e2a03f",
      meta: "#cdd4ba",
      number: "#ffb347",
      operator: "#e2a03f",
      property: "#78bf90",
      string: "#e4cf89",
      tag: "#c4e5b1",
      text: "#ffffff",
      type: "#9bd893",
      variable: "#4d8b5b",
      variable2: "#b8d8c4",
      variable3: "#a4c18a",
    },
  },
  {
    name: "aurora sky",
    gradient: {
      color1: "#23395d",
      color2: "#1ca4a7",
    },
    colors: {
      atom: "#78c9ff",
      attribute: "#4de6b7",
      background: "rgba(10, 22, 34, 0.95)",
      builtin: "#ffffd1",
      comment: "#436a8a",
      definition: "#6fb5f7",
      keyword: "#53f2ff",
      meta: "#d0eaff",
      number: "#f5c156",
      operator: "#53f2ff",
      property: "#36cce1",
      string: "#d5f761",
      tag: "#88e6c8",
      text: "#ffffff",
      type: "#91f9d3",
      variable: "#4de6b7",
      variable2: "#c4ecff",
      variable3: "#527aff",
    },
  },
  {
    name: "cherry blossom",
    gradient: {
      color1: "#f9c5d1",
      color2: "#fde9e0",
    },
    colors: {
      atom: "#fc93d2",
      attribute: "#ecb3dd",
      background: "rgba(34, 24, 30, 0.95)",
      builtin: "#fde4f2",
      comment: "#6f586a",
      definition: "#ffb5d9",
      keyword: "#ff77a9",
      meta: "#ffe3f1",
      number: "#f2a4d7",
      operator: "#ff77a9",
      property: "#da86ba",
      string: "#ffe8b5",
      tag: "#f7c5d9",
      text: "#fff8f8",
      type: "#ff9fc7",
      variable: "#ecb3dd",
      variable2: "#ffe6f1",
      variable3: "#c98fba",
    },
  },
];

export default THEMES;
