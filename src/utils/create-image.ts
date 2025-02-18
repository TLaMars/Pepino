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

const getConfig = (element: HTMLElement, scale: number = 1) => ({
  width: element.clientWidth * scale,
  height: element.clientHeight * scale,
  style: {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
  },
});

export const savePng = async ({
  element,
  scale = 2,
  filename = "Pepino",
}: SaveImageProps) => {
  const dataUrl: string = await DomToImage.toPng(
    element,
    getConfig(element, scale),
  );
  if (isTauri()) {
    // This is needed to make sure the font is loaded properly for the image
    const tauriUrl: string = await DomToImage.toPng(
      element,
      getConfig(element, scale),
    );
    await savePngTauri(tauriUrl, filename);
    return;
  }

  saveAs(dataUrl, filename);
};

export const saveSvg = async ({ element, filename }: SaveImageProps) => {
  if (isTauri()) return;

  // Make textarea readonly for SVG
  const textarea = element.querySelector("#textarea");
  if (textarea) {
    (textarea as HTMLTextAreaElement).style.outline = "none";
    (textarea as HTMLTextAreaElement).style.visibility = "hidden";
  }

  DomToImage.toSvg(element, getConfig(element)).then((dataUrl: string) => {
    saveAs(dataUrl, filename);
  });

  // Make textarea editable again
  (textarea as HTMLTextAreaElement).style.visibility = "visible";
};

export const clipboardPng = async ({ element, scale = 2 }: SaveImageProps) => {
  const config = {
    width: element.clientWidth * scale,
    height: element.clientHeight * scale,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
    },
  };

  const dataUrl: string = await DomToImage.toPng(element, config);

  if (isTauri()) {
    await clipboardPngTauri(dataUrl);
  }
};
