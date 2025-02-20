import { isTauri } from "@tauri-apps/api/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";
import appUpdater from "./utils/tauri/app-updater";

if (isTauri()) {
  void appUpdater();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
