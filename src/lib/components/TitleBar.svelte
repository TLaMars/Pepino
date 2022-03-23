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
    border-radius: var(--border-radius-s);
    background: var(--light-gray);
    margin-right: 0.8rem;
  }

  .colored {
    :nth-child(1) {
      background: var(--red);
    }
    :nth-child(2) {
      background: var(--yellow);
    }
    :nth-child(3) {
      background: var(--green);
    }
  }

  .title {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0 6rem 0 0;
    width: 100%;
    text-align: center;
    outline: none;
    font-family: var(--code);
    color: var(--white);
  }
</style>
