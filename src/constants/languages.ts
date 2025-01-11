import { Language } from "src/models/language";

const LANGUAGES: Record<string, Language> = {
  tsx: {
    name: "TSX",
    import: () => import("@shikijs/langs/typescript"),
  },
  javascript: {
    name: "JavaScript",
    import: () => import("@shikijs/langs/javascript"),
  },
  swift: {
    name: "Swift",
    import: () => import("@shikijs/langs/swift"),
  },
};

export default LANGUAGES;
