<script lang="ts">
  import Loader from './Loader.svelte';
  import Game from './Game.svelte';
  import settings from '../store/settings';
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import { fetchWordsList } from '../services/words';
  import { loadSettings } from '../services/settings';
  import { colorSecondary } from '../ts/constants';

  let wordsPromise = fetchWordsList();
  let lang = loadSettings().language;

  onMount(() => {
    settings.subscribe(newSettings => {
      const { style } = document.documentElement;
      style.setProperty('--color-primary', newSettings.colorTheme.hex());
      style.setProperty('--color-secondary', colorSecondary.hex());
      style.setProperty('--color-secondary-transparent', colorSecondary.alpha(0.2).string());
      if (newSettings.language !== lang) {
        lang = newSettings.language;
        wordsPromise = fetchWordsList();
      }
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
