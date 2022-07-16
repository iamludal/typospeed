import Color from 'color';

export const defaultColors = ['#3498db', '#313131', '#c77a99'].map(color => Color(color));

export const LANGS = {
  en: 'English',
  fr: 'Français',
};

export type Lang = keyof typeof LANGS;
