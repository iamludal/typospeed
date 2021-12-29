import type { Scores, words } from './types';
import { colors, COLOR_REGEX } from './constants';

const WORDS_URL = '/assets/data/words.json';

/**
 * Get the words list (from local storage or url), and store it if not stored
 *
 * @returns a Promise, which resolves in the words list (array of string)
 */
export async function getWords(): Promise<words> {
  let wordsList: words = JSON.parse(localStorage.getItem('words'));

  if (!wordsList) {
    wordsList = await fetchWordsList();
    localStorage.setItem('words', JSON.stringify(wordsList));
  }

  return wordsList;
}

/**
 * Fetch the words list
 *
 * @returns a Promise, which resolves in the words list (array of string)
 */
async function fetchWordsList(): Promise<words> {
  return fetch(WORDS_URL).then(data => data.json());
}

/**
 * Get the last score and best score from previous games. If no scores were
 * found, set their values to 0
 *
 * @returns the scores
 */
export function getScores(): Scores {
  const last = parseInt(localStorage.getItem('last')) || 0;
  const best = parseInt(localStorage.getItem('best')) || last;

  return { best, last };
}

/**
 * Save the score into the local storage
 *
 * @param score the score
 */
export function saveScore(score: number): void {
  const localBest = parseInt(localStorage.getItem('best')) || 0;
  const best = Math.max(score, localBest);

  localStorage.setItem('best', best.toString());
  localStorage.setItem('last', score.toString());
}

/**
 * Return true if the user is new (opening the game for the first time)
 */
export const userIsNew = (): Boolean => localStorage.getItem('isNew') === null;

/**
 * Set the user as not new
 */
export const registerUser = (): void => localStorage.setItem('isNew', 'false');

export function getColorTheme(): string {
  const colorTheme = localStorage.getItem('colorTheme') || colors[0];
  if (!COLOR_REGEX.test(colorTheme) || isTooBright(colorTheme)) {
    localStorage.setItem('colorTheme', colors[0]);
    return colors[0];
  }
  return colorTheme;
}

export function setColorTheme(colorTheme: string): void {
  localStorage.setItem('colorTheme', colorTheme);
}

/**
 * Determine whether or not a color is too bright to prevent the user
 * from not being able to read the text
 * @param color the color to check
 * @returns true if the color is too bright, false otherwise
 */
export function isTooBright(color: string): boolean {
  let hexa = color.substring(1);

  if (hexa.length === 3) {
    hexa = hexa.replace(/(.)/g, '$1$1');
  }

  const rgb = parseInt(hexa, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  return r + g + b > 3 * 190;
}
