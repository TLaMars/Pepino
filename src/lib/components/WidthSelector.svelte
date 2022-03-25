<script lang="ts">
  import ArrowLeft from "./assets/ArrowLeft.svelte";

  export let clientWidth = 520;

  let expanding = false;
  let direction: "LEFT" | "RIGHT" = null;
  let auto = true;

  function onMousedown(e: MouseEvent, clickDirection: "LEFT" | "RIGHT") {
    expanding = true;
    direction = clickDirection;
    auto = false;
  }

  function onMouseup() {
    expanding = false;
    direction = null;
  }

  function onMousemove(e: MouseEvent) {
    if (!expanding) return;

    let newWidth = clientWidth;

    if (direction === "LEFT") {
      newWidth -= e.movementX;
    } else if (direction === "RIGHT") {
      newWidth += e.movementX;
    }

    if (newWidth < 520) {
      clientWidth = 520;
      return;
    }

    if (newWidth > 1020) {
      clientWidth = 1020;
      return;
    }

    clientWidth = newWidth;
  }

  function reset() {
    auto = true;
  }

  $: width = auto ? `100%` : `${clientWidth}px`;
</script>

<svelte:window on:mouseup={onMouseup} on:mousemove={onMousemove} />

<div class="container" style="width: {width};" bind:clientWidth>
  <button
    class="handle"
    class:active={expanding}
    on:mousedown={(e) => onMousedown(e, "LEFT")}
  >
    <ArrowLeft />
  </button>
  <span class="line" />
  <span class="label" on:click={reset}>
    {#if auto}
      Auto
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
