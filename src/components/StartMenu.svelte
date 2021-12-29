<script lang="ts">
  import { fade } from 'svelte/transition';
  import { getScores, userIsNew, registerUser } from '../ts/utils';
  import { createEventDispatcher } from 'svelte';
  import PlayCircle from 'svelte-icons/md/MdPlayArrow.svelte';
  import FaMedal from 'svelte-icons/fa/FaMedal.svelte';
  import Rules from './Rules.svelte';
  import Icon from './shared/Icon.svelte';
  import type { Scores } from '../ts/types';
  import IoMdHelpCircle from 'svelte-icons/io/IoMdHelpCircle.svelte';
  import IoMdSettings from 'svelte-icons/io/IoMdSettings.svelte';
  import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';
  import Settings from './Settings.svelte';

  const GITHUB_LINK = 'https://github.com/iamludal/typospeed';

  export let scores: Scores = getScores();
  let isNew: Boolean = userIsNew();

  const { best, last } = scores;
  const dispatch = createEventDispatcher();

  let settingsOpen = false;
  let hidden = false;
</script>

<div id="start-menu" class:hidden transition:fade={{ duration: 400 }}>
  <div id="scores">
    <div>
      <Icon icon={FaMedal} />
      Best score:
      <strong>{best}</strong>
    </div>
    <div>Last score: <strong>{last}</strong></div>
  </div>
  <button id="play" on:click={() => dispatch('start')}>
    <Icon icon={PlayCircle} />
  </button>
  {#if isNew}
    <Rules
      on:click={() => {
        registerUser();
        isNew = false;
      }}
    />
  {:else}
    <div class="buttons" transition:fade={{ duration: 200 }}>
      <a
        href={GITHUB_LINK}
        target="_blank"
        rel="noreferrer noopener"
        title="Star me on GitHub"
        class="btn"
      >
        <Icon icon={FaGithubAlt} />
      </a>
      <button class="help btn" title="Click me for help" on:click={() => (isNew = true)}>
        <Icon icon={IoMdHelpCircle} />
      </button>
      <button class="btn" title="Settings" on:click={() => (settingsOpen = true)}>
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
