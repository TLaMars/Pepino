import { Language } from "../models/language";

const LANGUAGES: Record<string, Language> = {
  cpp: {
    id: "cpp",
    name: "C++",
    import: () => import("@shikijs/langs/cpp"),
  },
  csharp: {
    id: "csharp",
    name: "C#",
    import: () => import("@shikijs/langs/csharp"),
  },
  css: {
    id: "css",
    name: "CSS",
    import: () => import("@shikijs/langs/css"),
  },
  go: {
    id: "go",
    name: "Go",
    import: () => import("@shikijs/langs/go"),
  },
  html: {
    id: "html",
    name: "HTML",
    import: () => import("@shikijs/langs/html"),
  },
  java: {
    id: "java",
    name: "Java",
    import: () => import("@shikijs/langs/java"),
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    import: () => import("@shikijs/langs/javascript"),
  },
  json: {
    id: "json",
    name: "JSON",
    import: () => import("@shikijs/langs/json"),
  },
  markdown: {
    id: "markdown",
    name: "Markdown",
    import: () => import("@shikijs/langs/markdown"),
  },
  php: {
    id: "php",
    name: "PHP",
    import: () => import("@shikijs/langs/php"),
  },
  python: {
    id: "python",
    name: "Python",
    import: () => import("@shikijs/langs/python"),
  },
  ruby: {
    id: "ruby",
    name: "Ruby",
    import: () => import("@shikijs/langs/ruby"),
  },
  rust: {
    id: "rust",
    name: "Rust",
    import: () => import("@shikijs/langs/rust"),
  },
  sql: {
    id: "sql",
    name: "SQL",
    import: () => import("@shikijs/langs/sql"),
  },
  swift: {
    id: "swift",
    name: "Swift",
    import: () => import("@shikijs/langs/swift"),
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    import: () => import("@shikijs/langs/typescript"),
  },
  tsx: {
    id: "tsx",
    name: "TSX",
    import: () => import("@shikijs/langs/tsx"),
  },
  yaml: {
    id: "yaml",
    name: "YAML",
    import: () => import("@shikijs/langs/yaml"),
  },
};

export default LANGUAGES;
