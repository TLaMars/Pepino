import type { Example } from "../types";
import LANGUAGES from "./languages";

const EXAMPLES: Example[] = [
  {
    // @ts-ignore
    language: LANGUAGES.find(({ name }) => name === "TSX"),
    code:
      'import React from "react";\n\n' +
      "const Login: React.FC = () => (\n" +
      "  <div>\n" +
      '    <input type="text" placeholder="Name" />\n' +
      '    <input type="password" placeholder="Pass" />\n' +
      "  </div>\n" +
      ");\n\n" +
      "export default Login ;",
  },
  {
    // @ts-ignore
    language: LANGUAGES.find(({ name }) => name === "JavaScript"),
    code:
      "let money = 999;\n\n" +
      "function increaseMoney() {\n" +
      "  const newAmount = money + 1; \n\n" +
      "  if (newAmount > 1000) { \n" +
      '    console.warn("User is to rich"); \n' +
      "    return;\n" +
      "  }\n\n" +
      "  if (newAmount < 0) {\n" +
      '      console.warn("User is bankrupt");\n' +
      "    return;\n" +
      "  }\n\n" +
      "  money = newAmount;\n" +
      "}",
  },
];

export default EXAMPLES;
