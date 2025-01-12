import type { Theme } from "src/models/theme";

const THEMES: Theme[] = [
  {
    name: "lunar glow",
    background: {
      gradient: {
        colors: ["#2a2e3d", "#7f7fc1"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
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
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
  {
    name: "forest ember",
    background: {
      gradient: {
        colors: ["#6b4c35", "#bf6340"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
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
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
  {
    name: "beach",
    background: {
      gradient: {
        colors: ["#4facfe", "#00f2fe"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
      "token-constant": "#ff7676",
      "token-link": "#6eb2ff",
      "token-comment": "#677f94",
      "token-function": "#6eb2ff",
      "token-keyword": "#79f6ff",
      "token-number": "#ff7676",
      "token-property": "#00a8b1",
      "token-string": "#68ffa2",
      "token-string-expression": "#68ffa2",
      "token-punctuation": "#fff",
      "token-parameter": "#6eb2ff",
      foreground: "#fff",
      background: "rgba(25, 29, 34, 0.85)",
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
  {
    name: "sunset",
    background: {
      gradient: {
        colors: ["#ff6a00", "#ee0979"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
      "token-constant": "#938bff",
      "token-link": "#ffd257",
      "token-comment": "#b18e76",
      "token-function": "#ffd257",
      "token-keyword": "#ff9a57",
      "token-number": "#938bff",
      "token-property": "#fd7ab9",
      "token-string": "#ffc194",
      "token-string-expression": "#ffc194",
      "token-punctuation": "#fff",
      "token-parameter": "#ffd257",
      foreground: "#fff",
      background: "rgba(25, 29, 34, 0.85)",
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
  {
    name: "swamp",
    background: {
      gradient: {
        colors: ["#77c500", "#001d18"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
      "token-constant": "#ae79ff",
      "token-link": "#77c500",
      "token-comment": "#73885c",
      "token-function": "#77c500",
      "token-keyword": "#d4d648",
      "token-number": "#ae79ff",
      "token-property": "#b9fc00",
      "token-string": "#ace255",
      "token-string-expression": "#ace255",
      "token-punctuation": "#fff",
      "token-parameter": "#77c500",
      foreground: "#fff",
      background: "rgba(25, 29, 34, 0.85)",
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
  {
    name: "forest dawn",
    background: {
      gradient: {
        colors: ["#85bb65", "#f5d76e"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
      "token-constant": "#ffb347",
      "token-link": "#6ebf8b",
      "token-comment": "#b8c4aa",
      "token-function": "#86c37a",
      "token-keyword": "#e2a03f",
      "token-number": "#ffb347",
      "token-property": "#78bf90",
      "token-string": "#e4cf89",
      "token-string-expression": "#e4cf89",
      "token-punctuation": "#ffffff",
      "token-parameter": "#4d8b5b",
      foreground: "#ffffff",
      background: "rgba(25, 34, 25, 0.95)",
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
  {
    name: "aurora sky",
    background: {
      gradient: {
        colors: ["#23395d", "#1ca4a7"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
      "token-constant": "#78c9ff",
      "token-link": "#4de6b7",
      "token-comment": "#436a8a",
      "token-function": "#6fb5f7",
      "token-keyword": "#53f2ff",
      "token-number": "#f5c156",
      "token-property": "#36cce1",
      "token-string": "#d5f761",
      "token-string-expression": "#d5f761",
      "token-punctuation": "#ffffff",
      "token-parameter": "#4de6b7",
      foreground: "#ffffff",
      background: "rgba(10, 22, 34, 0.95)",
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
  {
    name: "cherry blossom",
    background: {
      gradient: {
        colors: ["#f9c5d1", "#fde9e0"],
        direction: "to bottom right",
      },
    },
    cssTokens: {
      "token-constant": "#fc93d2",
      "token-link": "#ecb3dd",
      "token-comment": "#6f586a",
      "token-function": "#ffb5d9",
      "token-keyword": "#ff77a9",
      "token-number": "#f2a4d7",
      "token-property": "#da86ba",
      "token-string": "#ffe8b5",
      "token-string-expression": "#ffe8b5",
      "token-punctuation": "#fff8f8",
      "token-parameter": "#ecb3dd",
      foreground: "#fff8f8",
      background: "rgba(34, 24, 30, 0.95)",
      "font-family": "var(--font-cascadia-mono), monospace",
      "box-shadow": "0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6)",
    },
  },
];

export default THEMES;
