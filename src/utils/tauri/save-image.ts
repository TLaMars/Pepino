const saveTauriImage = async (
  image: string,
  filename: string,
  copyToClipboard: boolean,
) => {
  const { writeFile } = await import("@tauri-apps/plugin-fs");
  const { writeImage } = await import("@tauri-apps/plugin-clipboard-manager");
  const { save } = await import("@tauri-apps/plugin-dialog");

  const base64Data = image.replace(/^data:image\/png;base64,/, "");
  const binaryData = new Uint8Array(
    atob(base64Data)
      .split("")
      .map((char) => char.charCodeAt(0)),
  );

  if (copyToClipboard) {
    await writeImage(binaryData);
    return;
  }

  const path = await save({
    defaultPath: filename,
    filters: [{ name: "Images", extensions: ["png", "svg"] }],
  });

  if (!path) return;

  await writeFile(path, binaryData);
};

export default saveTauriImage;
