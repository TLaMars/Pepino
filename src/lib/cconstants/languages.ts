import type { Language } from "../types";

const LANGUAGES: Language[] = [
  {
    name: "Auto",
    mode: "auto",
  },
  {
    name: "JavaScript",
    mode: "text/javascript",
    path: "javascript/javascript",
    hljs: "javascript",
  },
  {
    name: "JSX",
    mode: "text/jsx",
    path: "jsx/jsx",
    hljs: "javascript",
  },
  {
    name: "TypeScript",
    mode: "text/typescript",
    path: "javascript/javascript",
    hljs: "typescript",
  },
  {
    name: "TSX",
    mode: "text/typescript-jsx",
    path: "jsx/jsx",
    hljs: "typescript",
  },
];

export default LANGUAGES;
