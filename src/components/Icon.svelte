<script lang="ts">
  export let icon: any;
</script>

<div class="icon" {...$$props}>
  <svelte:component this={icon} class="" />
</div>

<style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    display: inline-block;
  }
</style>
