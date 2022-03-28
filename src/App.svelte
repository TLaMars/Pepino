<script lang="ts">
  import { writable } from "svelte/store";

  import Pepino from "./lib/components/Pepino.svelte";
  import ToolBar from "./lib/components/ToolBar.svelte";
  import WidthSelector from "./lib/components/WidthSelector.svelte";
  import type { Theme, Language, SettingPadding } from "./lib/types";
  import THEMES from "./lib/cconstants/themes";
  import LANGUAGES from "./lib/cconstants/languages";
  import "./lib/utils/code-mirror-imports";
  import "../src/lib/styles/code-mirror.scss";
  import {
    retrievePersisted,
    storePersisted,
  } from "./lib/utils/store-persisted";
  import {
    PEPINO_COLORED_BUTTONS,
    PEPINO_LINE_NUMBERS,
    PEPINO_PADDING,
    PEPINO_THEME,
  } from "./lib/cconstants/persisted-keys";

  let imageElement: HTMLElement;
  let width: number;

  let title = writable<string>("");
  let language = writable<Language>(LANGUAGES[0]);
  let background = writable<boolean>(true);
  let coloredButtons = writable<boolean>(
    retrievePersisted<boolean>(PEPINO_COLORED_BUTTONS) ?? false
  );
  let theme = writable<Theme>(
    retrievePersisted<Theme>(PEPINO_THEME) ?? THEMES[0]
  );
  let padding = writable<SettingPadding>(
    retrievePersisted<SettingPadding>(PEPINO_PADDING) ?? 16
  );
  let lineNumbers = writable<boolean>(
    retrievePersisted<boolean>(PEPINO_LINE_NUMBERS) ?? false
  );

  $: storePersisted(PEPINO_THEME, $theme);
  $: storePersisted(PEPINO_PADDING, $padding);
  $: storePersisted(PEPINO_COLORED_BUTTONS, $coloredButtons);
  $: storePersisted(PEPINO_LINE_NUMBERS, $lineNumbers);
</script>

<main>
  <ToolBar
    {imageElement}
    {background}
    {coloredButtons}
    {theme}
    {language}
    {padding}
    {lineNumbers}
    title={$title}
  />
  <div class="container">
    <Pepino
      language={$language}
      theme={$theme}
      bind:imageElement
      {width}
      background={$background}
      coloredButtons={$coloredButtons}
      padding={$padding}
      lineNumbers={$lineNumbers}
      {title}
    />
    <WidthSelector bind:width />
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin-top: 16rem;
    margin-bottom: 2rem;
  }
</style>
