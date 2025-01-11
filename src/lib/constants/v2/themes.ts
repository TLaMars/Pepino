import type { Theme } from "src/lib/models/theme";

const Themes: Theme[] = [
  {
    name: "lunar glow",
    gradient: {
      color1: "#2a2e3d",
      color2: "#7f7fc1",
    },
    colors: {
      "token-constant": "#9f88ff",
      "token-link": "#73a7f5",
      "token-comment": "#505a6d",
      "token-function": "#91b5ff",
      "token-keyword": "#d389ff",
      "token-number": "#f7cc56",
      "token-property": "#6b94ff",
      "token-string": "#86ffce",
      "token-string-expression": "#86ffce",
      "token-punctuation": "#eef6ff",
      "token-parameter": "#73a7f5",
      foreground: "#eef6ff",
      background: "rgba(22, 22, 32, 0.95)",
    },
  },
  {
    name: "forest ember",
    gradient: {
      color1: "#6b4c35",
      color2: "#bf6340",
    },
    colors: {
      "token-constant": "#d78f47",
      "token-link": "#8cbf7e",
      "token-comment": "#675c52",
      "token-function": "#9fc394",
      "token-keyword": "#e67e50",
      "token-number": "#d78f47",
      "token-property": "#91b882",
      "token-string": "#f0c687",
      "token-string-expression": "#f0c687",
      "token-punctuation": "#fff7e4",
      "token-parameter": "#8cbf7e",
      foreground: "#fff7e4",
      background: "rgba(35, 30, 25, 0.95)",
    },
  },
];

export default Themes;
