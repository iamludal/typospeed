import Color from 'color';

export const defaultColors = ['#3498db', '#313131', '#c77a99'].map(color => Color(color));

export const colorSecondary = Color('white');

export const MIN_CONTRAST = 1.5;

export const COLOR_HEX_REGEX = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i;

export const LANGS = {
  en: 'English',
  fr: 'Français',
};

export type Lang = keyof typeof LANGS;
