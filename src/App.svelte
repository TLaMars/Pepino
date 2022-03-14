<script lang="ts">
  import Pepino from "./lib/components/Pepino.svelte";
  import ToolBar from "./lib/components/ToolBar.svelte";
  import "./lib/utils/code-mirror-imports";
  import "../src/lib/styles/code-mirror.scss";
  import "../src/lib/styles/themes.scss";

  let imageElement: HTMLElement;
</script>

<main>
  <ToolBar {imageElement} />
  <Pepino bind:imageElement />
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
