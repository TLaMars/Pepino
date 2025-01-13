import { Language } from "src/models/language";

const LANGUAGES: Record<string, Language> = {
  tsx: {
    id: "tsx",
    name: "TSX",
    import: () => import("@shikijs/langs/typescript"),
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    import: () => import("@shikijs/langs/javascript"),
  },
  swift: {
    id: "swift",
    name: "Swift",
    import: () => import("@shikijs/langs/swift"),
  },
};

export default LANGUAGES;
