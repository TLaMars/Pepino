import { useAtomValue } from "jotai";
import ControlBar from "./components/ControlBar/ControlBar";
import { loadingAtom } from "./store/control-settings";
import Window from "./components/Window/Window";
import cx from "./utils/classnames";
import styles from "./App.module.scss";

const Pepino: React.FC = () => {
  const isLoading = useAtomValue(loadingAtom);

  return (
    <div className={cx(styles.container, isLoading && styles.loading)}>
      <div data-tauri-drag-region className={styles.tauri}></div>
      <div className={styles.windowContainer}>
        <Window />
      </div>
      <ControlBar />
    </div>
  );
};

export default Pepino;
