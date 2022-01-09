<script lang="ts">
  import Loader from './Loader.svelte';
  import { fetchWordsList } from '../ts/utils';
  import Game from './Game.svelte';
  import { settings } from '../ts/store';
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  const wordsPromise = fetchWordsList();

  onMount(() => {
    settings.subscribe(newSettings => {
      document.documentElement.style.setProperty('--color-primary', newSettings.colorTheme);
    });
  });
</script>

{#await wordsPromise}
  <Loader />
{:then wordsList}
  <Game {wordsList} />
{:catch}
  <p class="error">{$_('common.error')}</p>
{/await}

<style>
  :global(:root) {
    --color-secondary: #fff;
    --color-secondary-transparent: rgba(255, 255, 255, 0.15);
    --font-family: 'Montserrat';
    --transition: 0.3s;
    --radius-high: 500em;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    background: var(--color-primary);
    margin: 0;
    font-family: var(--font-family), sans-serif;
    color: var(--color-secondary);
    overflow: hidden;
  }

  :global(button) {
    border: none;
    outline: none;
    cursor: pointer;
  }

  :global(button, input) {
    font-family: var(--font-family);
    color: var(--color-secondary);
    outline: none;
    border: none;
  }

  :global(.hidden) {
    opacity: 0;
    pointer-events: none;
  }

  .error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
