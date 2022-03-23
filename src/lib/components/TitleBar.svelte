<script lang="ts">
  export let colored = false;
</script>

<div class="title-bar">
  <div class="buttons" class:colored>
    <span class="button" />
    <span class="button" />
    <span class="button" />
  </div>
  <input class="title" placeholder="Untitled-1" />
</div>

<style lang="scss">
  .title-bar {
    display: flex;
  }

  .buttons {
    display: flex;
  }

  .button {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.6rem;
    background-color: #9e9fa1;
    margin-right: 0.8rem;
  }

  .colored {
    :nth-child(1) {
      background: #ed6a5e;
    }
    :nth-child(2) {
      background: #f5bf4f;
    }
    :nth-child(3) {
      background: #62c554;
    }
  }

  .title {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0 6rem 0 0;
    width: 100%;
    text-align: center;
    outline: none;
    font-family: var(--code);
    color: white;
  }
</style>
