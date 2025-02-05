"use client";

import { useAtomValue } from "jotai";
import dynamic from "next/dynamic";
import ControlBar from "src/components/ControlBar/ControlBar";
import Window from "src/components/Window/Window";
import { loadingAtom } from "src/store/control-settings";
import cx from "src/utils/classnames";
import styles from "./page.module.scss";

const Pepino: React.FC = () => {
  const isLoading = useAtomValue(loadingAtom);

  return (
    <div className={cx(styles.container, isLoading && styles.loading)}>
      <div className={styles.windowContainer}>
        <Window />
      </div>
      <ControlBar />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Pepino), {
  ssr: false,
});
