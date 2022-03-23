<script lang="ts">
  export let title: string;
</script>

<div class="option">
  <span class="title">{title}</span>
  <slot />
</div>

<style lang="scss">
  .option {
    display: flex;
    flex-direction: column;
    &:not(:first-child) {
      margin-left: 1.6rem;
    }
  }

  .title {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
</style>
