<script lang="ts">
  import { PEPINO_IMAGE_SCALE } from "../cconstants/persisted-keys";

  import type { ImageScale, ImageType } from "../types";

  import createImage from "../utils/create-image";
  import { retrievePersisted, storePersisted } from "../utils/store-persisted";
  import Arrow from "./assets/Arrow.svelte";
  import Dropdown from "./Dropdown.svelte";
  import ToolbarOption from "./ToolbarOption.svelte";

  export let imageElement: HTMLElement;

  let mode: ImageType = "png";
  let scale: ImageScale =
    retrievePersisted<ImageScale>(PEPINO_IMAGE_SCALE) ?? 2;
  let filename = "";

  const scales: ImageScale[] = [1, 2, 4, 8];
  const modes: ImageType[] = ["png", "svg"];

  function setScale(newScale: ImageScale) {
    scale = newScale;
  }

  $: storePersisted(PEPINO_IMAGE_SCALE, scale);
</script>

<div class="container">
  <button
    class="export-button"
    on:click={() => createImage(imageElement, mode, scale, filename)}
  >
    Export
  </button>
  <Dropdown>
    <button slot="button" class="dropdown-button">
      <Arrow />
    </button>
    <div slot="dropdown" class="dropdown">
      <ToolbarOption title="Filename">
        <div class="options">
          <input
            bind:value={filename}
            placeholder="Pepino"
            class="options-input"
          />
        </div>
      </ToolbarOption>
      <ToolbarOption title="Scale">
        <div class="options">
          {#each scales as s}
            <button
              class="options-button"
              class:active={scale === s}
              on:click={() => setScale(s)}
            >
              {s}x
            </button>
          {/each}
        </div>
      </ToolbarOption>
      <ToolbarOption title="Download as">
        <div class="options">
          {#each modes as m}
            <button
              class="options-button upper"
              on:click={() => createImage(imageElement, m, scale, filename)}
            >
              {m}
            </button>
          {/each}
        </div>
      </ToolbarOption>
    </div>
  </Dropdown>
</div>

<style lang="scss">
  .container {
    display: flex;
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;

    color: var(--white);
    border: none;
    background: transparent;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  .export-button {
    border-radius: var(--border-radius-s) 0 0 var(--border-radius-s);
    background: var(--dark-green);
    padding: 0 1.6rem;
    font-weight: bold;
  }

  .dropdown-button {
    border-left: 0.2rem solid var(--lime);
    border-radius: 0 var(--border-radius-s) var(--border-radius-s) 0;
    background: var(--dark-green);
    padding: 0 0.8rem;
    height: 100%;
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }

  .options {
    display: flex;
    flex: 1;
    gap: 0.5rem;
  }

  .options-button {
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

  .options-input {
    font-size: 1.2rem;
    background: var(--dark-gray);
    margin: 0;
    border-radius: var(--border-radius-xs);
    border: none;
    padding: 0.6rem 1rem;
    color: var(--white);
  }
</style>
