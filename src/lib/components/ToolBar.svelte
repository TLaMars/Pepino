<script lang="ts">
  import type { Writable } from "svelte/store";

  import THEMES from "../cconstants/themes";
  import LANGUAGES from "../cconstants/languages";
  import createImage from "../utils/create-image";
  import ToolbarOption from "./ToolbarOption.svelte";
  import Select from "./Select.svelte";
  import type { Language, SelectOption, Theme } from "../types";
  import { getContext } from "svelte";
  import { ACTIVE_LANGUAGE_KEY, ACTIVE_THEME_KEY } from "../utils/context-keys";

  export let imageElement: HTMLElement;

  const themeOptions: SelectOption[] = THEMES.map(({ name, gradient }) => ({
    label: name,
    gradient,
  }));

  const languageOptions: SelectOption[] = LANGUAGES.map(({ name }) => ({
    label: name,
  }));

  let theme = getContext<Writable<Theme>>(ACTIVE_THEME_KEY);
  let language = getContext<Writable<Language>>(ACTIVE_LANGUAGE_KEY);

  function updateSelectedTheme({ label }: SelectOption) {
    $theme = THEMES.find(({ name }) => name === label);
  }

  function updateSelectedLanguage({ label }: SelectOption) {
    $language = LANGUAGES.find(({ name }) => name === label);
  }
</script>

<div class="container">
  <div class="left">
    <ToolbarOption title="Language">
      <Select
        options={languageOptions}
        selected={$language.name}
        on:click={(e) => updateSelectedLanguage(e.detail)}
      />
    </ToolbarOption>

    <ToolbarOption title="Theme">
      <Select
        options={themeOptions}
        selected={$theme.name}
        on:click={(e) => updateSelectedTheme(e.detail)}
      />
    </ToolbarOption>
  </div>

  <button class="export" on:click={() => createImage(imageElement)}>
    Export
  </button>
</div>

<style lang="scss">
  .container {
    position: fixed;
    top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: var(--border-radius-m);
    padding: 1.6rem;
    background: var(--dark-gray);
    min-width: 60rem;
    height: 5rem;
    box-shadow: 0 0.8rem 3.2rem 0 rgba(0, 0, 0, 0.6);
    z-index: 10;
  }

  .left {
    display: flex;
  }

  .export {
    border: none;
    border-radius: var(--border-radius-s);
    color: var(--white);
    background: var(--dark-green);
    padding: 0 2.7rem;
    cursor: pointer;
    height: 100%;
    font-weight: bold;
  }
</style>
