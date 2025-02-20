// export enum AppUpdaterEvent {
//   Started = "Started",
//   Progress = "Progress",
//   Finished = "Finished",
//   Failed = "Failed",
//   NoUpdate = "NoUpdate",
// }

const appUpdater = async () => {
  const { check } = await import("@tauri-apps/plugin-updater");
  const { relaunch } = await import("@tauri-apps/plugin-process");
  try {
    const update = await check();

    if (update && update.available) {
      let downloaded = 0;
      let contentLength = 0;
      // alternatively we could also call update.download() and update.install() separately
      await update.downloadAndInstall((event) => {
        switch (event.event) {
          case "Started":
            contentLength = event.data.contentLength || 0;
            console.info(
              `started downloading ${event.data.contentLength} bytes`,
            );
            break;
          case "Progress":
            downloaded += event.data.chunkLength;
            console.info(`downloaded ${downloaded} from ${contentLength}`);
            break;
          case "Finished":
            console.info("download finished");
            break;
          default:
            break;
        }
      });

      await relaunch();
    }
  } catch (e) {
    console.error(e);
  }
};

export default appUpdater;
