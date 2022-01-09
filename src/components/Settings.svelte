<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import IconButton from './shared/IconButton.svelte';
  import { colors, COLOR_REGEX, LANGS } from '../ts/constants';
  import { Settings, settings } from '../ts/store';
  import { isTooBright, loadSettings } from '../ts/utils';
  import Icon from './shared/Icon.svelte';
  import IoMdCheckmark from 'svelte-icons/io/IoMdCheckmark.svelte';
  import MdDoNotDisturb from 'svelte-icons/md/MdDoNotDisturb.svelte';
  import { locale, _ } from 'svelte-i18n';

  let _settings: Settings = loadSettings();
  $: errorMessage = getErrorMessage(_settings.colorTheme);

  const dispatch = createEventDispatcher();

  const close = () => dispatch('close');

  const toggleSounds = () => {
    settings.update(oldSettings => ({ ...oldSettings, soundsEnabled: _settings.soundsEnabled }));
  };

  const setColor = (selectedColor: string) => {
    settings.update(oldSettings => ({ ...oldSettings, colorTheme: selectedColor }));
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  const getErrorMessage = (color: string) => {
    if (!COLOR_REGEX.test(color)) {
      return 'Invalid color';
    } else if (isTooBright(color)) {
      return 'Color is too bright';
    }
    return null;
  };

  const handleInputChange = () => {
    if (errorMessage === null) {
      setColor(_settings.colorTheme);
    }
  };

  // handle select change event
  const handleLanguageChange = (newLanguage: string) => {
    settings.update(oldSettings => ({ ...oldSettings, language: newLanguage }));
    locale.set(newLanguage);
  };

  onMount(() => {
    settings.subscribe(newSettings => (_settings = newSettings));
  });
</script>

<svelte:window on:keyup={handleKeyUp} />

<div class="modal" transition:fade={{ duration: 200 }} on:click|self={close}>
  <div class="modal__content">
    <h1>{$_('common.settings')}</h1>

    <div class="close">
      <IconButton on:click={close} icon={IoMdClose} />
    </div>

    <div class="section">
      <span class="section__title">{$_('settings.language')}</span>
      <select class="section__content" bind:value={_settings.language}>
        {#each Object.entries(LANGS) as [key, value]}
          <option value={key} on:click={() => handleLanguageChange(key)}>{value}</option>
        {/each}
      </select>
    </div>

    <div class="section">
      <span class="section__title">{$_('settings.sound-effects')}</span>
      <label class="switch section__content">
        <input type="checkbox" bind:checked={_settings.soundsEnabled} on:change={toggleSounds} />
        <span class="switch__slider" />
      </label>
    </div>

    <div class="section">
      <span class="section__title">{$_('settings.theme')}</span>
      <div class="colors section__content">
        <div class="input-container">
          <input
            type="text"
            class="color-input"
            placeholder="#353535"
            class:color-input--invalid={errorMessage !== null}
            bind:value={_settings.colorTheme}
            on:input={handleInputChange}
          />
          {#if errorMessage !== null}
            <div class="input-error">
              <Icon icon={MdDoNotDisturb} />
              {errorMessage}
            </div>
          {/if}
        </div>
        {#each colors as color}
          <div
            class={`color ${_settings.colorTheme === color ? 'color-active' : ''}`}
            style={`--color: ${color}`}
            on:click={() => setColor(color)}
          >
            {#if _settings.colorTheme === color}
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
