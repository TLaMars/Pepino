<script lang="ts">
  import type { Gradient } from "../types";

  export let gradient: Gradient;
  export let background = false;
  export let smallSquare = false;
</script>

<div
  class="gradient"
  class:background
  class:small-square={smallSquare}
  style="--gradient-color-1: {gradient.color1}; --gradient-color-2: {gradient.color2}"
>
  <slot />
</div>

<style lang="scss">
  .gradient {
    background: linear-gradient(
      to bottom right,
      var(--gradient-color-1),
      var(--gradient-color-2)
    );
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .small-square {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.4rem;
    margin: 0;
    padding: 0;
  }
</style>
