import App from "./App.svelte";
import "./lib/styles/global.scss";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
