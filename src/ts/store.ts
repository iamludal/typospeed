import { writable } from 'svelte/store';
import { loadSettings, saveSettings } from './utils';

export type Settings = {
  colorTheme: string;
  isNew: boolean;
  language: string;
  soundsEnabled: boolean;
};

export const settings = writable<Settings>(loadSettings());

settings.subscribe(saveSettings);
