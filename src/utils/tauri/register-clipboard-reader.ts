const registerClipboardReader = async (callback: (input: string) => void) => {
  const { getCurrentWindow } = await import("@tauri-apps/api/window");
  const { readText } = await import("@tauri-apps/plugin-clipboard-manager");
  const { register } = await import("@tauri-apps/plugin-global-shortcut");

  // eslint-disable-next-line no-secrets/no-secrets
  await register("CommandOrControl+Shift+V", async () => {
    await getCurrentWindow().show().catch(console.error);
    await getCurrentWindow().setFocus().catch(console.error);
    await readText().then(callback).catch(console.error);
  });
};

export default registerClipboardReader;
