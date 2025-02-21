import { createCssVariablesTheme, createHighlighterCore } from "@shikijs/core";
import { createOnigurumaEngine } from "@shikijs/engine-oniguruma";
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
    engine: createOnigurumaEngine(
      () => import("@shikijs/engine-oniguruma/wasm-inlined"),
    ),
  });

export default getShiki;
