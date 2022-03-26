<script lang="ts">
  import ArrowLeft from "./assets/ArrowLeft.svelte";

  export let width: number | "auto" = "auto";

  let expanding = false;
  let direction: "LEFT" | "RIGHT" = null;
  let clientWidth: number;
  let reset = false;

  function onMousedown(e: MouseEvent, clickDirection: "LEFT" | "RIGHT") {
    expanding = true;
    direction = clickDirection;
    width = clientWidth;
  }

  function onMouseup() {
    expanding = false;
    direction = null;
  }

  function onMousemove(e: MouseEvent) {
    if (!expanding) return;

    let newWidth = clientWidth;

    if (direction === "LEFT") {
      newWidth -= e.movementX * 2;
    } else if (direction === "RIGHT") {
      newWidth += e.movementX * 2;
    }

    if (newWidth < 520) {
      width = 520;
      return;
    }

    if (newWidth > 1020) {
      width = 1020;
      return;
    }

    width = newWidth;
  }

  function onReset() {
    width = "auto";
  }

  $: elementWidth = width === "auto" ? "auto" : `${width}px`;
</script>

<svelte:window on:mouseup={onMouseup} on:mousemove={onMousemove} />

<div class="container" style="width: {elementWidth};" bind:clientWidth>
  <button
    class="handle"
    class:active={expanding}
    on:mousedown={(e) => onMousedown(e, "LEFT")}
  >
    <ArrowLeft />
  </button>
  <span class="line" />
  <span
    class="label"
    on:click={onReset}
    on:mouseleave={() => (reset = false)}
    on:mouseenter={() => (reset = true)}
  >
    {#if width === "auto" && !reset}
      Auto
    {:else if reset}
      Reset
    {:else}
      {clientWidth}px
    {/if}
  </span>
  <span class="line" />
  <button
    class="handle right"
    class:active={expanding}
    on:mousedown={(e) => onMousedown(e, "RIGHT")}
  >
    <ArrowLeft />
  </button>
</div>

<style lang="scss">
  .container {
    min-width: 52rem;
    max-width: 102rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
  }

  .line {
    flex-grow: 1;
    height: 0.2rem;
    background-color: var(--gray);
  }

  .label {
    color: var(--white);
    background: var(--gray);
    padding: 0.4rem 1rem;
    border-radius: var(--border-radius-xs);
    font-size: 1.4rem;
    text-align: center;
    cursor: pointer;
  }

  .handle {
    display: flex;
    background: transparent;
    padding: 0;
    margin: 0;
    border: none;

    transition: all 0.1s ease-in-out;

    &:hover {
      transform: scale(1.4);
      cursor: col-resize;
    }

    &.active {
      transform: scale(1.4);
    }

    &.right {
      transform: rotate(180deg);

      &:hover {
        transform: scale(1.4) rotate(180deg);
        cursor: col-resize;
      }

      &.active {
        transform: scale(1.4) rotate(180deg);
      }
    }
  }
</style>
