const registerClipboardReader = async (callback: (input: string) => void) => {
  const { listen } = await import("@tauri-apps/api/event");
  const { getCurrentWindow } = await import("@tauri-apps/api/window");

  await listen("clipboard_shortcut", async (event) => {
    await getCurrentWindow().setFocus().catch(console.error);
    callback(event.payload as string);
  });
};

export default registerClipboardReader;
