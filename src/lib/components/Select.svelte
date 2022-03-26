<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SelectOption as SelectOptionType } from "../types";
  import outsideClick from "../utils/outside-click";
  import Arrow from "./assets/Arrow.svelte";
  import Gradient from "./Gradient.svelte";
  import SelectOption from "./SelectOption.svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher<{ click: SelectOptionType }>();

  export let options: SelectOptionType[];
  export let selected: string;

  let visible = false;

  $: selectedOption = options.find(({ label }) => label === selected);

  function handleClick(option: SelectOptionType) {
    dispatch("click", option);
    visible = false;
  }
</script>

<div class="container" use:outsideClick={() => (visible = false)}>
  <button class="select" on:click={() => (visible = !visible)}>
    <div class="left">
      {#if selectedOption.gradient}
        <Gradient gradient={selectedOption.gradient} smallSquare />
      {/if}
      <span>{selectedOption.label}</span>
    </div>
    <Arrow />
  </button>
  {#if visible}
    <div class="options" in:fade={{ duration: 200 }}>
      {#each options as option, index (index)}
        <SelectOption
          gradient={option.gradient}
          label={option.label}
          active={selectedOption.label === option.label}
          on:click={() => handleClick(option)}
        />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;
  }

  .select {
    background: var(--gray);
    color: var(--white);
    border-radius: var(--border-radius-s);
    border: none;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    font-size: 1.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
    text-transform: capitalize;
    margin: 0;

    .left {
      display: flex;
      gap: 0.5rem;
    }
  }

  .options {
    background: var(--gray);
    color: var(--white);
    border-radius: var(--border-radius-s);
    padding: 0.6rem;

    position: absolute;
    margin-top: 1rem;
    width: calc(100% - 1.6rem);
    max-height: 20rem;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
  }
</style>
