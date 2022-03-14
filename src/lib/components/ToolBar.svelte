<script lang="ts">
  import createImage from "../utils/create-image";

  export let imageElement: HTMLElement;
</script>

<div class="container">
  <button on:click={() => createImage(imageElement)}>Export</button>
</div>

<style>
  .container {
    border-radius: 1.2rem;
    padding: 1rem;
  }

  button {
    border: none;
    border-radius: 0.5rem;
    color: white;
    background: rgb(0, 140, 255);
    padding: 1rem 1.6rem;
    cursor: pointer;
  }
</style>
