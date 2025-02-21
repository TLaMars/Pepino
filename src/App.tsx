import { isTauri } from "@tauri-apps/api/core";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import ControlBar from "src/components/ControlBar/ControlBar";
import Frame from "src/components/Frame/Frame";
import { loadingAtom } from "src/store/control-settings";
import cx from "src/utils/classnames";
import appUpdater, { AppUpdaterEvent } from "./utils/tauri/app-updater";

import styles from "./App.module.scss";

const Pepino: React.FC = () => {
  const isLoading = useAtomValue(loadingAtom);
  const [updaterResult, setUpdaterResult] = useState<AppUpdaterEvent>();

  useEffect(() => {
    const getUpdateResult = async () => {
      const result = await appUpdater();
      setUpdaterResult(result);
    };

    void getUpdateResult();
  }, []);

  return (
    <>
      <div className={cx(styles.container, isLoading && styles.loading)}>
        {isTauri() && (
          <div data-tauri-drag-region className={styles.tauri}></div>
        )}
        <div className={styles.frameSpacing}>
          <Frame />
        </div>
        <ControlBar />
      </div>
      {updaterResult === AppUpdaterEvent.Finished && <div>Update Finished</div>}
      {updaterResult === AppUpdaterEvent.Failed && <div>Update Failed</div>}
      {updaterResult === AppUpdaterEvent.NoUpdate && (
        <div>No Update Available</div>
      )}
    </>
  );
};

export default Pepino;
