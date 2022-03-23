<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  import Pepino from "./lib/components/Pepino.svelte";
  import ToolBar from "./lib/components/ToolBar.svelte";
  import {
    ACTIVE_LANGUAGE_KEY,
    ACTIVE_THEME_KEY,
  } from "./lib/utils/context-keys";
  import type { Theme, Language } from "./lib/types";
  import THEMES from "./lib/cconstants/themes";
  import LANGUAGES from "./lib/cconstants/languages";
  import "./lib/utils/code-mirror-imports";
  import "../src/lib/styles/code-mirror.scss";

  let imageElement: HTMLElement;

  let theme = writable<Theme>(THEMES[0]);
  setContext(ACTIVE_THEME_KEY, theme);

  let language = writable<Language>(LANGUAGES[0]);
  setContext(ACTIVE_LANGUAGE_KEY, language);
</script>

<main>
  <ToolBar {imageElement} />
  <div class="container">
    <Pepino language={$language} theme={$theme} bind:imageElement />
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
  }

  .container {
    // min-height: 100vh;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    margin-top: 16rem;
    margin-bottom: 2rem;
  }
</style>
