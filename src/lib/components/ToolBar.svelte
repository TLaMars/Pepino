<script lang="ts">
  import type { Writable } from "svelte/store";

  import THEMES from "../constants/themes";
  import LANGUAGES from "../constants/languages";
  import ToolbarOption from "./ToolbarOption.svelte";
  import Select from "./Select.svelte";
  import type { Language, SelectOption, SettingPadding, Theme } from "../types";
  import Export from "./Export.svelte";
  import Dropdown from "./Dropdown.svelte";
  import Settings from "./assets/Settings.svelte";
  import ToggleSwitch from "./ToggleSwitch.svelte";

  export let imageElement: HTMLElement;
  export let background: Writable<boolean>;
  export let coloredButtons: Writable<boolean>;
  export let theme: Writable<Theme>;
  export let language: Writable<Language>;
  export let padding: Writable<SettingPadding>;
  export let lineNumbers: Writable<boolean>;
  export let title: string;

  let showBackground = $background;
  let buttons = $coloredButtons;
  let showLineNumbers = $lineNumbers;

  const paddings: SettingPadding[] = [16, 32, 64, 128];

  const themeOptions: SelectOption[] = THEMES.map(({ name, gradient }) => ({
    label: name,
    gradient,
  }));

  const languageOptions: SelectOption[] = LANGUAGES.map(({ name }) => ({
    label: name,
  }));

  function updateSelectedTheme({ label }: SelectOption) {
    const selectedTheme = THEMES.find(({ name }) => name === label);
    if (selectedTheme) {
      $theme = selectedTheme;
    }
  }

  function updateSelectedLanguage({ label }: SelectOption) {
    const selectedLanguage = LANGUAGES.find(({ name }) => name === label);
    if (selectedLanguage) {
      $language = selectedLanguage;
    }
  }

  $: $background = showBackground;
  $: $coloredButtons = buttons;
  $: $lineNumbers = showLineNumbers;
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
      <button slot="button" class="setting-button" aria-label="Settings"
        ><Settings /></button
      >
      <div slot="dropdown" class="dropdown">
        <div class="group">
          <ToolbarOption title="Background">
            <ToggleSwitch bind:checked={showBackground} />
          </ToolbarOption>
          <ToolbarOption title="Colored buttons">
            <ToggleSwitch bind:checked={buttons} />
          </ToolbarOption>
        </div>
        <ToolbarOption title="Padding">
          <div class="options">
            {#each paddings as p}
              <button
                class="options-button upper"
                class:active={$padding === p}
                on:click={() => ($padding = p)}
              >
                {p}
              </button>
            {/each}
          </div>
        </ToolbarOption>
        <ToolbarOption title="Line numbers">
          <ToggleSwitch bind:checked={showLineNumbers} />
        </ToolbarOption>
      </div>
    </Dropdown>
    <Export {imageElement} filename={title} />
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
    flex-direction: column;
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

  .options {
    display: flex;
    flex: 1;
    gap: 0.5rem;
  }

  .options-button {
    border: none;
    cursor: pointer;
    color: var(--white);
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
    border-radius: var(--border-radius-xs);
    background: var(--dark-gray);

    transition: all 0.2s linear;

    &.active {
      background: var(--dark-green);
    }

    &.upper {
      text-transform: uppercase;
    }
  }
</style>
