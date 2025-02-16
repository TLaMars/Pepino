import { isTauri } from "@tauri-apps/api/core";
import { useAtomValue } from "jotai";
import ControlBar from "src/components/ControlBar/ControlBar";
import Window from "src/components/Window/Window";
import { loadingAtom } from "src/store/control-settings";
import cx from "src/utils/classnames";

import styles from "./App.module.scss";

const Pepino: React.FC = () => {
  const isLoading = useAtomValue(loadingAtom);

  return (
    <div className={cx(styles.container, isLoading && styles.loading)}>
      {isTauri() && <div data-tauri-drag-region className={styles.tauri}></div>}
      <div className={styles.windowContainer}>
        <Window />
      </div>
      <ControlBar />
    </div>
  );
};

export default Pepino;
