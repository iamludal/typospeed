<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import IconButton from './shared/IconButton.svelte';
  import { colors } from '../ts/constants';
  import { settings } from '../ts/store';
  import { getColorTheme, setColorTheme } from '../ts/utils';
  import Icon from './shared/Icon.svelte';
  import IoMdCheckmark from 'svelte-icons/io/IoMdCheckmark.svelte';

  let currenctColor: string;

  const dispatch = createEventDispatcher();

  const close = () => dispatch('close');

  const setColor = (selectedColor: string) => {
    settings.update(oldSettings => ({ ...oldSettings, colorTheme: selectedColor }));
    setColorTheme(selectedColor);
    currenctColor = selectedColor;
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  onMount(() => {
    window.addEventListener('keyup', handleKeyUp);
    currenctColor = getColorTheme();
  });

  onDestroy(() => {
    window.removeEventListener('keyup', handleKeyUp);
  });
</script>

<div class="modal" transition:fade={{ duration: 200 }} on:click|self={close}>
  <div class="modal__content">
    <h1>Settings</h1>

    <div class="section">
      <span class="section__title">Theme</span>
      <div class="colors">
        {#each colors as color}
          <div
            class={`color ${currenctColor === color ? 'color-active' : ''}`}
            style={`--color: ${color}`}
            on:click={() => setColor(color)}
          >
            {#if currenctColor === color}
              <Icon icon={IoMdCheckmark} />
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <div class="close">
      <IconButton on:click={close} icon={IoMdClose} />
    </div>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal__content {
    background-color: var(--color-primary);
    padding: 2rem;
    border-radius: 0.5rem;
    position: relative;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 1em;
  }

  .section {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .section__title {
    font-size: x-large;
  }

  .colors {
    display: flex;
    gap: 0.2em;
  }

  .color {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: var(--color);
    cursor: pointer;
    transition: filter 100ms;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-secondary);
  }

  .color:hover {
    filter: brightness(0.9);
  }

  .color-active {
    border: 0.2em solid var(--color-secondary-transparent);
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: scale(1.5);
  }
</style>
