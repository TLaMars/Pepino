const registerClipboardShortcut = async (callback: (input: string) => void) => {
  const { getCurrentWindow } = await import("@tauri-apps/api/window");
  const { register } = await import("@tauri-apps/plugin-global-shortcut");
  const { readText } = await import("@tauri-apps/plugin-clipboard-manager");
  // eslint-disable-next-line no-secrets/no-secrets
  await register("CmdOrControl+Shift+V", async () => {
    await getCurrentWindow().setFocus().catch(console.error);
    const clipboardText = await readText();
    callback(clipboardText);
  });
};
export default registerClipboardShortcut;
