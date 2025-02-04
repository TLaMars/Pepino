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
