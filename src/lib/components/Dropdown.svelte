<script lang="ts">
  import { fade } from "svelte/transition";

  import outsideClick from "../utils/outside-click";

  let visible = false;
</script>

<div
  class="container"
  role="button"
  tabindex="0"
  on:mouseenter={() => (visible = true)}
  on:touchstart={() => (visible = true)}
  on:mouseleave={() => (visible = false)}
  use:outsideClick={() => (visible = false)}
>
  <slot name="button" />
  {#if visible}
    <div class="outer-container">
      <div
        class="dropdown"
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 200 }}
      >
        <slot name="dropdown" />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;
    height: 100%;
  }

  .outer-container {
    padding-top: 1rem;
  }

  .dropdown {
    background: var(--gray);
    color: var(--white);
    border-radius: var(--border-radius-s);
    padding: 1.6rem;

    position: absolute;
    max-height: 20rem;
    overflow-y: auto;
    right: 0;
  }
</style>
