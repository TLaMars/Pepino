import {
  createHighlighter,
  createCssVariablesTheme,
  bundledLanguages,
} from "shiki";

const myTheme = createCssVariablesTheme({
  name: "lamars.io",
  variablePrefix: "--pepino-",
  fontStyle: true,
});

// langs: [
//   "angular-html",
//   "angular-ts",
//   "astro",
//   "c",
//   "c#",
//   "c++",
//   "csharp",
//   "css",
//   "dockerfile",
//   "go",
//   "graphql",
//   "html",
//   "java",
//   "javascript",
//   "json",
//   "kotlin",
//   "lua",
//   "markdown",
//   "perl",
//   "php",
//   "plaintext",
//   "python",
//   "r",
//   "ruby",
//   "rust",
//   "scala",
//   "scss",
//   "shell",
//   "sql",
//   "svelte",
//   "swift",
//   "tsx",
//   "typescript",
//   "xml",
//   "yaml",
// ],

const getHighlighter = async () => {
  return await createHighlighter({
    themes: [myTheme],
    langs: ["svelte", "swift", "tsx", "typescript"],
  });
};

export default getHighlighter;
