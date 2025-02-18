import { isTauri } from "@tauri-apps/api/core";
import DomToImage from "dom-to-image-more";
import { saveAs } from "file-saver";
import saveTauriImage from "./tauri/save-image";

export type ImageType = "png" | "svg";

async function createImage(
  element: HTMLElement,
  mode: ImageType = "png",
  scale: number = 2,
  filename: string = "pepino",
  copyToClipboard: boolean = false,
) {
  const finalScale = mode === "svg" ? 1 : scale;
  const config = {
    width: element.clientWidth * finalScale,
    height: element.clientHeight * finalScale,
    style: {
      transform: `scale(${finalScale})`,
      transformOrigin: "top left",
    },
  };

  if (mode === "png") {
    const dataUrl: string = await DomToImage.toPng(element, config);
    if (isTauri()) {
      await saveTauriImage(dataUrl, filename, copyToClipboard);
      return;
    }
    saveAs(dataUrl, filename);
  }

  if (mode === "svg") {
    // Make textarea readonly for SVG
    const textarea = element.querySelector("#textarea");
    if (textarea) {
      (textarea as HTMLTextAreaElement).style.outline = "none";
      (textarea as HTMLTextAreaElement).style.visibility = "hidden";
    }

    DomToImage.toSvg(element, config).then((dataUrl: string) => {
      if (isTauri()) {
        return;
      }
      saveAs(dataUrl, filename);
    });

    // Make textarea editable again
    (textarea as HTMLTextAreaElement).style.visibility = "visible";
  }
}

export default createImage;
