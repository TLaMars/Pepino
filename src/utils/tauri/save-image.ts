const createPng = async (image: string) => {
  const base64Data = image.replace(/^data:image\/png;base64,/, "");
  const binaryData = new Uint8Array(
    atob(base64Data)
      .split("")
      .map((char) => char.charCodeAt(0)),
  );

  return binaryData;
};

export const savePngTauri = async (image: string, filename: string) => {
  const { writeFile } = await import("@tauri-apps/plugin-fs");
  const { save } = await import("@tauri-apps/plugin-dialog");

  const binaryData = await createPng(image);

  const path = await save({
    defaultPath: filename,
    filters: [{ name: "Images", extensions: ["png"] }],
  });

  if (!path) return;

  await writeFile(path, binaryData);
};

export const clipboardPngTauri = async (image: string) => {
  const { writeImage } = await import("@tauri-apps/plugin-clipboard-manager");

  const binaryData = await createPng(image);
  await writeImage(binaryData);
};
