"use client";

import Window from "src/components/Window/Window";
import styles from "./page.module.scss";
import ControlBar from "src/components/ControlBar/ControlBar";
import dynamic from "next/dynamic";

const Pepino: React.FC = () => {
  return (
    <div className={styles.container}>
      <Window />
      <ControlBar />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Pepino), {
  ssr: false,
});
