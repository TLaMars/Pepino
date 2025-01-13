"use client";

import Window from "src/components/Window/Window";
import styles from "./page.module.scss";
import ControlBar from "src/components/ControlBar/ControlBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Window />
      <ControlBar />
    </div>
  );
}
