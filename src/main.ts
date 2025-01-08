import App from "./App.svelte";
import "./lib/styles/global.scss";

import { mount } from "svelte";

const app = mount(App, {
  target: document.getElementById("app") ?? document.body,
});

export default app;
