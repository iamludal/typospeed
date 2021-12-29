import { writable } from 'svelte/store';
import { colors } from './constants';

export const settings = writable({
  colorTheme: colors[0],
});
