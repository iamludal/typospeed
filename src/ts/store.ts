import { writable } from 'svelte/store';
import { loadSettings, saveSettings } from './utils';

export type Settings = {
  colorTheme: string;
  soundsEnabled: boolean;
  isNew: boolean;
};

export const settings = writable<Settings>(loadSettings());

settings.subscribe(saveSettings);
