<script lang="ts">
  export let theme: string;
</script>

<div
  class="container"
  class:beach={theme === "beach"}
  class:sunset={theme === "sunset"}
>
  <slot />
</div>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  :global(.sunset) {
    background: #ee0979;
    background: linear-gradient(to right, #ff6a00, #ee0979);
  }

  .beach {
    background: #00f2fe;
    background: linear-gradient(to right, #4facfe, #00f2fe);
  }
</style>
