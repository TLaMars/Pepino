"use client";

import Window from "src/components/Window/Window";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Window />
    </div>
  );
}
