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
  }

  .title {
    color: var(--light-gray);
    font-size: 1.2rem;
    font-weight: 500;
    white-space: nowrap;
    margin-bottom: 0.2rem;
  }
</style>
