<script lang="ts">
  import Pepino from "./lib/components/Pepino.svelte";
  import "./lib/utils/code-mirror-imports";
  import "../src/lib/styles/code-mirror.scss";
  import "../src/lib/styles/themes.scss";
</script>

<main>
  <Pepino />
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
