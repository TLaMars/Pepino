import type { RefObject } from "react";
import type { Language } from "src/models/language";
import type { Notification } from "src/models/notification";
import type { Theme } from "src/models/theme";
import type { ImageType } from "src/utils/create-image";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atomWithHash } from "jotai-location";
import LANGUAGES from "src/constants/languages";
import THEMES from "src/constants/themes";
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

export const imageRefAtom = atom<RefObject<HTMLDivElement>>();
export const imageScaleAtom = atomWithStorage<number>("image-scale", 2);
export const imageFormatAtom = atomWithStorage<ImageType>(
  "image-format",
  "png",
);

export const paddingAtom = atomWithStorage<number>("padding", 32);
export const backgroundAtom = atomWithStorage<boolean>("background", true);
export const coloredWindowButtonsAtom = atomWithStorage<boolean>(
  "window-buttons",
  true,
);
export const windowTitleAtom = atomWithStorage<boolean>("window-title", true);

export const loadingAtom = atom<boolean>(true);

export const notificationAtom = atom<Notification | null>(null);
