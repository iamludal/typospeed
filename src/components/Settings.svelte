<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import IconButton from './shared/IconButton.svelte';
  import {
    colorSecondary,
    COLOR_HEX_REGEX,
    defaultColors,
    LANGS,
    MIN_CONTRAST,
  } from '../ts/constants';
  import settings, { Settings } from '../store/settings';
  import Icon from './shared/Icon.svelte';
  import IoMdCheckmark from 'svelte-icons/io/IoMdCheckmark.svelte';
  import MdDoNotDisturb from 'svelte-icons/md/MdDoNotDisturb.svelte';
  import { _ } from 'svelte-i18n';
  import Color from 'color';
  import { loadSettings, setColorTheme, setLanguage, setSoundsEnabled } from '../services/settings';

  let localSettings: Settings = loadSettings();

  let colorInput = localSettings.colorTheme.hex();
  let colorErrorMessageKey: string | null;

  $: colorErrorMessageKey = getColorErrorMessageKey(colorInput);

  const dispatch = createEventDispatcher();

  const close = () => dispatch('close');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  const getColorErrorMessageKey = (colorStr: string) => {
    if (!colorStr.match(COLOR_HEX_REGEX)) {
      return 'color-invalid';
    }

    const color = Color(colorStr);

    if (color.contrast(colorSecondary) < MIN_CONTRAST) {
      return 'color-too-bright';
    }

    return null;
  };

  const handleColorInputChange = () => {
    if (colorErrorMessageKey !== null) return;

    updateColorTheme(Color(colorInput));
  };

  const updateColorTheme = (color: Color) => {
    setColorTheme(color);
    colorInput = color.hex();
  };

  const handleLanguageChange = () => setLanguage(localSettings.language);

  const handleSoundsChange = () => setSoundsEnabled(localSettings.soundsEnabled);

  onMount(() => {
    settings.subscribe(newSettings => (localSettings = newSettings));
  });
</script>

<svelte:window on:keyup={handleKeyUp} />

<div class="modal" transition:fade={{ duration: 200 }} on:click|self={close}>
  <div class="modal__content">
    <h1>{$_('common.settings')}</h1>

    <div class="close">
      <IconButton on:click={close} icon={IoMdClose} />
    </div>

    <!-- Language -->
    <div class="section">
      <span class="section__title">{$_('settings.language')}</span>
      <select
        class="section__content"
        bind:value={localSettings.language}
        on:change={handleLanguageChange}
      >
        {#each Object.entries(LANGS) as [key, value]}
          <option value={key}>{value}</option>
        {/each}
      </select>
    </div>

    <!-- Sounds -->
    <div class="section">
      <span class="section__title">{$_('settings.sound-effects')}</span>
      <label class="switch section__content">
        <input
          type="checkbox"
          bind:checked={localSettings.soundsEnabled}
          on:change={handleSoundsChange}
        />
        <span class="switch__slider" />
      </label>
    </div>

    <!-- Color -->
    <div class="section">
      <span class="section__title">{$_('settings.theme.title')}</span>
      <div class="colors section__content">
        <div class="input-container">
          <input
            type="text"
            class="color-input"
            placeholder="#353535"
            class:color-input--invalid={colorErrorMessageKey !== null}
            bind:value={colorInput}
            on:input={handleColorInputChange}
          />
          {#if colorErrorMessageKey !== null}
            <div class="input-error">
              <Icon icon={MdDoNotDisturb} />
              {$_(`settings.theme.errors.${colorErrorMessageKey}`)}
            </div>
          {/if}
        </div>
        {#each defaultColors as color}
          <div
            class={`color ${color.hex() === colorInput ? 'color-active' : ''}`}
            style={`--color: ${color}`}
            on:click={() => updateColorTheme(color)}
          >
            {#if color.hex() === colorInput}
              <Icon icon={IoMdCheckmark} />
            {/if}
          </div>
        {/each}
      </div>
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
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }

  .modal__content {
    background-color: var(--color-primary);
    padding: 2rem;
    border-radius: 0.5rem;
    position: relative;
    max-width: 32rem;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 1em;
  }

  .section {
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    gap: 5rem;
  }

  .section:not(:last-of-type) {
    margin-bottom: 1.2em;
  }

  .section__title {
    font-size: x-large;
  }

  .section__content {
    justify-self: end;
  }

  select {
    cursor: pointer;
    width: max-content;
    color: var(--color-secondary);
    border-radius: 0.4em;
    border: 0.2em solid var(--color-secondary-transparent);
    background-color: transparent;
    font-size: large;
  }

  .colors {
    display: flex;
    gap: 0.3em;
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

  .input-container {
    position: relative;
    margin-inline-end: 0.2em;
  }
  .color-input {
    width: 9ch;
    background-color: transparent;
    border-radius: 0.4em;
    border: 0.2em solid var(--color-secondary-transparent);
    text-align: center;
    font-size: large;
  }

  .color-input--invalid {
    border: 0.2em solid var(--color-secondary-transparent);
  }

  .color-input::placeholder {
    color: var(--color-secondary);
    opacity: 0.4;
  }
  .input-error {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    font-size: small;
    margin-top: 0.25em;
  }

  .switch__slider {
    position: relative;
    padding: 0.1em;
    display: inline-block;
    width: 3em;
    height: 1.5em;
    border-radius: var(--radius-high);
    background-color: var(--color-secondary-transparent);
    cursor: pointer;
    transition: filter 100ms;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    display: none;
  }

  .switch input + .switch__slider {
    transition: opacity 100ms;
    opacity: 0.5;
  }

  .switch input:checked + .switch__slider {
    opacity: 1;
  }

  .switch input:checked + .switch__slider::before {
    left: calc(100% - 1.5em);
  }

  .switch__slider::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--color-secondary);
    transition: all 100ms;
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: scale(1.5);
  }
</style>
