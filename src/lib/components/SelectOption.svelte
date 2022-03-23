<script lang="ts">
  import type { Gradient as GradientType } from "../types";
  import Gradient from "./Gradient.svelte";

  export let gradient: GradientType | undefined;
  export let label: string;
  export let active = false;
</script>

<button class="option" class:active on:click>
  {#if gradient}
    <Gradient {gradient} smallSquare />
  {/if}
  <span class="label">{label}</span>
</button>

<style lang="scss">
  .option {
    background: transparent;
    border: none;
    color: white;
    text-align: left;
    cursor: pointer;
    padding: 0.6rem;
    border-radius: var(--border-radius-xs);

    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 0.2rem;
    }

    &:hover {
      background: var(--dark-gray);
    }
  }

  .label {
    text-transform: capitalize;
    margin-left: 0.5rem;
    font-size: 1.4rem;
  }

  .active {
    background: var(--dark-gray);
  }
</style>
