import { isTauri } from "@tauri-apps/api/core";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import ControlBar from "src/components/ControlBar/ControlBar";
import Frame from "src/components/Frame/Frame";
import { loadingAtom } from "src/store/control-settings";
import cx from "src/utils/classnames";
import type { AppUpdaterEvent } from "./utils/tauri/app-updater";
import appUpdater from "./utils/tauri/app-updater";

import styles from "./App.module.scss";

const Pepino: React.FC = () => {
  const isLoading = useAtomValue(loadingAtom);
  const [, setUpdaterResult] = useState<AppUpdaterEvent>();

  useEffect(() => {
    // Tauri app updater
    const getUpdateResult = async () => {
      const result = await appUpdater();
      setUpdaterResult(result);
    };

    void getUpdateResult();
  }, []);

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
