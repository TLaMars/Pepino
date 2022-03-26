<script lang="ts">
  import type { Writable } from "svelte/store";

  import THEMES from "../cconstants/themes";
  import LANGUAGES from "../cconstants/languages";
  import ToolbarOption from "./ToolbarOption.svelte";
  import Select from "./Select.svelte";
  import type { Language, SelectOption, Theme } from "../types";
  import Export from "./Export.svelte";
  import Dropdown from "./Dropdown.svelte";
  import Settings from "./assets/Settings.svelte";
  import ToggleSwitch from "./ToggleSwitch.svelte";

  export let imageElement: HTMLElement;
  export let background: Writable<boolean>;
  export let coloredButtons: Writable<boolean>;
  export let theme: Writable<Theme>;
  export let language: Writable<Language>;

  let showBackground = $background;
  let buttons = $coloredButtons;

  const themeOptions: SelectOption[] = THEMES.map(({ name, gradient }) => ({
    label: name,
    gradient,
  }));

  const languageOptions: SelectOption[] = LANGUAGES.map(({ name }) => ({
    label: name,
  }));

  function updateSelectedTheme({ label }: SelectOption) {
    $theme = THEMES.find(({ name }) => name === label);
  }

  function updateSelectedLanguage({ label }: SelectOption) {
    $language = LANGUAGES.find(({ name }) => name === label);
  }

  $: $background = showBackground;
  $: $coloredButtons = buttons;
</script>

<div class="container">
  <div class="group">
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

  <div class="group">
    <Dropdown>
      <button slot="button" class="setting-button"><Settings /></button>
      <div slot="dropdown" class="dropdown">
        <ToolbarOption title="Background">
          <ToggleSwitch bind:checked={showBackground} />
        </ToolbarOption>
        <ToolbarOption title="Colored buttons">
          <ToggleSwitch bind:checked={showBackground} />
        </ToolbarOption>
      </div>
    </Dropdown>
    <Export {imageElement} />
  </div>
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

  .group {
    display: flex;
    height: 100%;
    gap: 1.6rem;
  }

  .dropdown {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .setting-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gray);
    color: var(--white);
    border-radius: var(--border-radius-s);
    border: none;
    height: 100%;
    width: 5rem;
    cursor: pointer;
  }
</style>
