import { isTauri } from "@tauri-apps/api/core";
import DomToImage from "dom-to-image-more";
import { saveAs } from "file-saver";
import { clipboardPngTauri, savePngTauri } from "./tauri/save-image";

export type ImageType = "png" | "svg";

type SaveImageProps = {
  element: HTMLElement;
  scale?: number;
  filename?: string;
};

const getConfig = (scale: number = 8) => ({
  scale,
  filter: (el: HTMLElement) => {
    if (el.id === "textarea" || el.id === "input") {
      return false;
    }
    return true;
  },
});

export const savePng = async ({
  element,
  scale = 2,
  filename = "Pepino",
}: SaveImageProps) => {
  const dataUrl: string = await DomToImage.toPng(element, getConfig(scale));
  if (isTauri()) {
    // This is needed to make sure the font is loaded properly for the image
    const tauriUrl: string = await DomToImage.toPng(element, getConfig(scale));
    await savePngTauri(tauriUrl, filename);
    return;
  }

  saveAs(dataUrl, filename);
};

export const saveSvg = async ({ element, filename }: SaveImageProps) => {
  if (isTauri()) return;

  DomToImage.toSvg(element, getConfig()).then((dataUrl: string) => {
    saveAs(dataUrl, filename);
  });
};

export const clipboardPng = async ({ element, scale = 2 }: SaveImageProps) => {
  if (isTauri()) {
    const dataUrl: string = await DomToImage.toPng(element, getConfig(scale));
    await clipboardPngTauri(dataUrl);
    return;
  }

  const blob = await DomToImage.toBlob(element, getConfig(scale));
  await navigator.clipboard.write([
    new ClipboardItem({
      "image/png": blob,
    }),
  ]);
};
