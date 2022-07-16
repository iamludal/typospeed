import type Color from 'color';
import { writable } from 'svelte/store';
import { loadSettings, saveSettings } from '../services/settings';
import type { Lang } from '../ts/constants';

export type Settings = {
  colorTheme: Color;
  showRules: boolean;
  language: Lang;
  soundsEnabled: boolean;
};

const settings = writable<Settings>(loadSettings());

settings.subscribe(saveSettings);

export default settings;
