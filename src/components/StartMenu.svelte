<script lang="ts">
  import { fade } from 'svelte/transition';
  import { getScores } from '../ts/utils';
  import { createEventDispatcher, onMount } from 'svelte';
  import PlayCircle from 'svelte-icons/md/MdPlayArrow.svelte';
  import FaMedal from 'svelte-icons/fa/FaMedal.svelte';
  import Rules from './Rules.svelte';
  import Icon from './shared/Icon.svelte';
  import type { Scores } from '../ts/types';
  import IoMdHelpCircle from 'svelte-icons/io/IoMdHelpCircle.svelte';
  import IoMdSettings from 'svelte-icons/io/IoMdSettings.svelte';
  import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';
  import Settings from './Settings.svelte';
  import { settings } from '../ts/store';
  import { _ } from 'svelte-i18n';

  const GITHUB_LINK = 'https://github.com/iamludal/typospeed';

  export let scores: Scores = getScores();
  let rulesOpened: boolean = false;

  const { best, last } = scores;
  const dispatch = createEventDispatcher();

  let settingsOpen = false;
  let hidden = false;

  const hideRules = () => {
    rulesOpened = false;
    settings.update(oldSettings => ({ ...oldSettings, isNew: false }));
  };

  onMount(() => {
    settings.subscribe(({ isNew }) => {
      if (isNew) rulesOpened = true;
    });
  });
</script>

<div id="start-menu" class:hidden transition:fade={{ duration: 400 }}>
  <div id="scores">
    <div>
      <Icon icon={FaMedal} />
      {@html $_('menu.best-score', { values: { score: best } })}
    </div>
    <div>
      {@html $_('menu.last-score', { values: { score: last } })}
    </div>
  </div>
  <button id="play" on:click={() => dispatch('start')}>
    <Icon icon={PlayCircle} />
  </button>
  {#if rulesOpened}
    <Rules on:click={hideRules} />
  {:else}
    <div class="buttons" transition:fade={{ duration: 200 }}>
      <a
        href={GITHUB_LINK}
        target="_blank"
        rel="noreferrer noopener"
        title={$_('menu.items.github')}
        class="btn"
      >
        <Icon icon={FaGithubAlt} />
      </a>
      <button class="help btn" title={$_('menu.items.rules')} on:click={() => (rulesOpened = true)}>
        <Icon icon={IoMdHelpCircle} />
      </button>
      <button class="btn" title={$_('common.settings')} on:click={() => (settingsOpen = true)}>
        <Icon icon={IoMdSettings} />
      </button>
    </div>
  {/if}
</div>

{#if settingsOpen}
  <Settings on:close={() => (settingsOpen = false)} />
{/if}

<style>
  #start-menu {
    transition: var(--transition);
  }

  #start-menu.hidden #play {
    transform: translate(-50%, -50%) scale(10);
  }

  #start-menu.hidden #scores {
    transform: translateY(-100%);
  }

  #scores {
    flex-direction: column;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    columns: 2;
    column-rule: 1px solid var(--color-secondary);
    transition: var(--transition);
  }

  #play {
    display: flex;
    position: absolute;
    background: var(--color-secondary-transparent);
    padding: 20px;
    border-radius: var(--radius-high);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
    font-size: 2em;
  }

  #play:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  .buttons {
    top: 1rem;
    right: 1rem;
    position: absolute;
    display: flex;
    align-items: center;
  }

  .buttons .btn {
    opacity: 0.7;
    font-size: 2em;
    color: var(--color-secondary);
    transition: var(--transition);
    background: none;
    margin: 0 0.4em;
    padding: 0;
  }

  .buttons .btn:hover {
    opacity: 1;
    transform: scale(1.05);
  }
</style>
