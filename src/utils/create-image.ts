import { isTauri } from "@tauri-apps/api/core";
import { save } from "@tauri-apps/plugin-dialog";
import { writeFile } from "@tauri-apps/plugin-fs";
import DomToImage from "dom-to-image-more";
import { saveAs } from "file-saver";

export type ImageType = "png" | "svg";

function createImage(
  element: HTMLElement,
  mode: ImageType = "png",
  scale: number = 2,
  filename: string = "pepino"
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

  // Make textarea readonly for SVG
  const textarea = element.querySelector("#textarea");
  if (textarea) {
    (textarea as HTMLTextAreaElement).style.outline = "none";
    (textarea as HTMLTextAreaElement).style.visibility = "hidden";
  }

  if (mode === "png") {
    DomToImage.toPng(element, config).then(async (dataUrl: string) => {
      if (isTauri()) {
        const path = await save({
          defaultPath: `${filename}.png`,
          filters: [{ name: "PNG", extensions: ["png"] }],
        });

        if (!path) return;

        const base64Data = dataUrl.split(",")[1];
        const binaryData = atob(base64Data);
        const bytes = new Uint8Array(binaryData.length);
        await writeFile(path, bytes);

        return;
      }
      saveAs(dataUrl, filename);
    });
  }

  if (mode === "svg") {
    DomToImage.toSvg(element, config).then((dataUrl: string) => {
      if (isTauri()) {
        return;
      }
      saveAs(dataUrl, filename);
    });
  }

  // Make textarea editable again
  (textarea as HTMLTextAreaElement).style.visibility = "visible";
}

export default createImage;
