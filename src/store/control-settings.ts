import { atomWithHash } from "jotai-location";
import LANGUAGES from "src/constants/languages";
import THEMES from "src/constants/themes";
import { Language } from "src/models/language";
import { Theme } from "src/models/theme";

const getStoredTheme = () => {
  const storedTheme = localStorage.getItem("pepino-theme");

  if (!storedTheme) {
    return THEMES.lunar;
  }

  return THEMES[storedTheme] ?? THEMES.lunar;
};

export const themeAtom = atomWithHash<Theme>("theme", getStoredTheme(), {
  serialize: (value) => {
    localStorage.setItem("pepino-theme", value.id);
    return value.id;
  },
  deserialize: (value) => THEMES[value] ?? THEMES.lunar,
});

export const languageAtom = atomWithHash<Language>("language", LANGUAGES.tsx, {
  serialize: (value) => value.id,
  deserialize: (value) => LANGUAGES[value] ?? LANGUAGES.tsx,
});
