import { isTauri } from "@tauri-apps/api/core";
import { Image } from "@tauri-apps/api/image";
import { Menu } from "@tauri-apps/api/menu";
import { resolveResource } from "@tauri-apps/api/path";
import { TrayIcon } from "@tauri-apps/api/tray";
import { useAtomValue } from "jotai";
import ControlBar from "src/components/ControlBar/ControlBar";
import Frame from "src/components/Frame/Frame";
import { loadingAtom } from "src/store/control-settings";
import cx from "src/utils/classnames";

import styles from "./App.module.scss";

if (isTauri()) {
  const iconPath = await resolveResource("icons/pepino.png");
  const image = await Image.fromPath(iconPath).catch(console.error);

  if (!image) {
    throw new Error("Failed to load image");
  }

  await TrayIcon.new({
    icon: image,
    iconAsTemplate: true,
    menuOnLeftClick: true,
    menu: await Menu.new({
      items: [
        {
          id: "Quit",
          text: "Quit",
          action: () => {
            // window.__TAURI__.invoke("quit");
          },
        },
      ],
    }),
  }).catch(console.error);
}

const Pepino: React.FC = () => {
  const isLoading = useAtomValue(loadingAtom);

  return (
    <div className={cx(styles.container, isLoading && styles.loading)}>
      {isTauri() && <div data-tauri-drag-region className={styles.tauri}></div>}
      <div className={styles.frameSpacing}>
        <Frame />
      </div>
      <ControlBar />
    </div>
  );
};

export default Pepino;
