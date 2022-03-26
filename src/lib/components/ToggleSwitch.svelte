<script>
  export let checked = false;
</script>

<label class="switch">
  <input type="checkbox" bind:checked />
  <span class="slider round" />
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 4.4rem;
    height: 2.4rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--black);
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    left: 0.4rem;
    bottom: 0.4rem;
    background-color: var(--white);
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--dark-green);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--dark-green);
  }

  input:checked + .slider:before {
    transform: translateX(2rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: var(--border-radius-m);
  }

  .slider.round:before {
    border-radius: var(--border-radius-m);
  }
</style>
