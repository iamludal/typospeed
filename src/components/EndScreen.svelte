<script lang="ts">
  import type { Scores } from '../ts/types';
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import PlayCircle from 'svelte-icons/md/MdPlayArrow.svelte';
  import MdMenu from 'svelte-icons/md/MdMenu.svelte';
  import FaRegSadCry from 'svelte-icons/fa/FaRegSadCry.svelte';
  import Icon from './shared/Icon.svelte';
  import { _ } from 'svelte-i18n';

  export let scores: Scores;

  const { last, best } = scores;

  const dispatch = createEventDispatcher();
</script>

<div class="wrapper" out:fade={{ duration: 200 }} in:fade={{ duration: 800 }}>
  <Icon icon={FaRegSadCry} style="font-size: 3em" />

  <h1>{$_('game-over.title')}</h1>

  <h2>{$_('game-over.last-score', { values: { score: last } })}</h2>
  <p>{$_('game-over.best-score', { values: { score: best } })}</p>

  <div class="btns">
    <button class="btn" on:click={() => dispatch('menu')}>
      <Icon icon={MdMenu} />
      {$_('game-over.menu')}
    </button>
    <button class="btn" on:click={() => dispatch('playagain')}>
      <Icon icon={PlayCircle} />
      {$_('game-over.play-again')}
    </button>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  h2 {
    margin-bottom: 0;
  }

  .btns {
    margin-top: 1rem;
  }

  .btn {
    background: var(--color-secondary);
    border-radius: var(--radius-high);
    padding: 0.6em 1em;
    font-weight: bold;
    font-size: 1.05em;
    color: var(--color-primary);
    margin: 0.5em;
    transition: var(--transition);
    border: 0.2em solid var(--color-secondary);
  }

  .btn:hover {
    color: var(--color-secondary);
    background: transparent;
  }
</style>
