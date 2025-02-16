import type Example from "src/models/example";
import LANGUAGES from "./languages";

const EXAMPLES: Example[] = [
  {
    language: LANGUAGES.tsx,
    code:
      'import React from "react";\n\n' +
      "const Login: React.FC = () => (\n" +
      "  <div>\n" +
      '    <input type="text" placeholder="Name" />\n' +
      '    <input type="password" placeholder="Pass" />\n' +
      "  </div>\n" +
      ");\n\n" +
      "export default Login;",
  },
  {
    language: LANGUAGES.javascript,
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
  {
    language: LANGUAGES.swift,
    code:
      "import UIKit\n\n" +
      "class ViewController: UIViewController {\n" +
      "  override func viewDidLoad() {\n" +
      "    super.viewDidLoad()\n" +
      "    // Do any additional setup after loading the view.\n" +
      "  }\n" +
      "}",
  },
];

export default EXAMPLES;
