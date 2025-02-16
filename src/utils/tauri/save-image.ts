const saveTauriImage = async (image: string, filename: string) => {
  const { writeFile } = await import("@tauri-apps/plugin-fs");
  const { save } = await import("@tauri-apps/plugin-dialog");

  const path = await save({
    defaultPath: filename,
    filters: [{ name: "Images", extensions: ["png", "svg"] }],
  });

  if (!path) return;

  const base64Data = image.replace(/^data:image\/png;base64,/, "");
  const binaryData = new Uint8Array(
    atob(base64Data)
      .split("")
      .map((char) => char.charCodeAt(0)),
  );
  await writeFile(path, binaryData);
};

export default saveTauriImage;
