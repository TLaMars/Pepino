import { atomWithHash } from "jotai-location";
import { atom } from "jotai";
import LANGUAGES from "src/constants/languages";
import THEMES from "src/constants/themes";
import { Language } from "src/models/language";
import { Theme } from "src/models/theme";
import storageLocal from "src/utils/storage-wrapper";

const getStoredTheme = () => {
  try {
    const storedTheme = storageLocal.getItem("pepino-theme");

    if (!storedTheme) {
      return THEMES.lunar;
    }

    return THEMES[storedTheme] ?? THEMES.lunar;
  } catch (error) {
    console.error(error);
    return THEMES.lunar;
  }
};

export const themeAtom = atomWithHash<Theme>("theme", getStoredTheme(), {
  serialize: (value) => {
    storageLocal.setItem("pepino-theme", value.id);
    return value.id;
  },
  deserialize: (value) => THEMES[value] ?? THEMES.lunar,
});

export const languageAtom = atomWithHash<Language>("language", LANGUAGES.tsx, {
  serialize: (value) => value.id,
  deserialize: (value) => LANGUAGES[value] ?? LANGUAGES.tsx,
});

export const autoLanguageAtom = atom<boolean>(true);
export const detectedLanguageAtom = atom<Language>(LANGUAGES.tsx);
