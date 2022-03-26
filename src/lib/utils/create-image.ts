import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";
import type { ImageScale, ImageType } from "../types";

function createImage(
  element: HTMLElement,
  mode: ImageType = "png",
  scale: ImageScale = 2,
  filename: string = "pepino"
) {
  const config = {
    width: element.clientWidth * scale,
    height: element.clientHeight * scale,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
    },
  };

  if (mode === "png") {
    DomToImage.toPng(element, config).then((dataUrl: string) =>
      saveAs(dataUrl, filename)
    );
    return;
  }

  if (mode === "svg") {
    DomToImage.toSvg(element, config).then((dataUrl: string) =>
      saveAs(dataUrl, filename)
    );
    return;
  }
}

export default createImage;
