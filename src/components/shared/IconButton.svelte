<script lang="ts">
  import Icon from '../Icon.svelte';

  export let icon: any;
</script>

<button on:click {...$$restProps}>
  <Icon {icon} />
</button>

<style>
  button {
    background: transparent;
    border: none;
    padding: 0.2rem;
    border-radius: 50%;
  }

  button:hover {
    background-color: var(--color-secondary-transparent);
  }
</style>
