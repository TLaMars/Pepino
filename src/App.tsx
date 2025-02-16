import { useAtomValue } from "jotai";
import ControlBar from "src/components/ControlBar/ControlBar";
import { loadingAtom } from "src/store/control-settings";
import Window from "src/components/Window/Window";
import cx from "src/utils/classnames";
import styles from "./App.module.scss";
import { isTauri } from "@tauri-apps/api/core";

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
