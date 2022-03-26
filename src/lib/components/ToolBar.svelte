<script lang="ts">
  import type { Writable } from "svelte/store";

  import THEMES from "../cconstants/themes";
  import LANGUAGES from "../cconstants/languages";
  import ToolbarOption from "./ToolbarOption.svelte";
  import Select from "./Select.svelte";
  import type { Language, SelectOption, Theme } from "../types";
  import { getContext } from "svelte";
  import { ACTIVE_LANGUAGE_KEY, ACTIVE_THEME_KEY } from "../utils/context-keys";
  import Export from "./Export.svelte";

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

  <Export {imageElement} />
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
    box-shadow: var(--box-shadow);
    z-index: 10;
  }

  .left {
    display: flex;
    gap: 1.6rem;
  }
</style>
