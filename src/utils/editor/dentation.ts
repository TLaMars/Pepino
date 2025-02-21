export const indent = (text: string) =>
  text
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");

export const unindent = (text: string) =>
  text
    .split("\n")
    .map((line) => line.replace(/^ {2}/, ""))
    .join("\n");
