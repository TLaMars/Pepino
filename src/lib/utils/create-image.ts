import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";

function createImage(
  element: HTMLElement,
  mode: "png" | "svg" = "png",
  scale = 2
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
      saveAs(dataUrl)
    );
    return;
  }

  if (mode === "svg") {
    DomToImage.toSvg(element, config).then((dataUrl: string) =>
      saveAs(dataUrl)
    );
    return;
  }
}

export default createImage;
