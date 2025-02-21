import { createCssVariablesTheme, createHighlighterCore } from "@shikijs/core";
import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";
import LANGUAGES from "src/constants/languages";

const customTheme = createCssVariablesTheme({
  name: "lamars.io",
  variablePrefix: "--pepino-",
  fontStyle: true,
});

const getShiki = async () =>
  createHighlighterCore({
    themes: [customTheme],
    langs: [
      LANGUAGES.tsx.import(),
      LANGUAGES.javascript.import(),
      LANGUAGES.swift.import(),
    ],
    engine: createJavaScriptRegexEngine({ forgiving: true }),
  });

export default getShiki;
