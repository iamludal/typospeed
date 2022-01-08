import type { Scores, words } from './types';
import { colors, COLOR_REGEX, LANGS } from './constants';
import type { Settings } from './store';

const WORDS_BASE_URL = '/assets/data/words-{LANG}.json';

/**
 * Get the words list (from local storage or url), and store it if not stored
 *
 * @returns a Promise, which resolves in the words list (array of string)
 */
export async function getWords(): Promise<words> {
  const settings = loadSettings();
  const wordsKey = `words-${settings.language}`;

  let wordsList: words = JSON.parse(localStorage.getItem(wordsKey));

  if (!wordsList) {
    wordsList = await fetchWordsList(settings.language);
    localStorage.setItem(wordsKey, JSON.stringify(wordsList));
  }

  return wordsList;
}

/**
 * Fetch the words list
 *
 * @returns a Promise, which resolves in the words list (array of string)
 */
async function fetchWordsList(lang: string): Promise<words> {
  const url = WORDS_BASE_URL.replace('{LANG}', lang);
  return fetch(url).then(data => data.json());
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
 * Load settings from local storage
 * @returns the settings
 */
export const loadSettings = (): Settings => {
  let settingsRaw: any;

  try {
    settingsRaw = JSON.parse(localStorage.getItem('settings'));
  } catch {
    settingsRaw = {};
  }

  const colorTheme = isValidColor(settingsRaw?.colorTheme) ? settingsRaw.colorTheme : colors[0];
  const langIsValid = isValidLang(settingsRaw?.language ?? '');

  const settings = {
    colorTheme: colorTheme,
    isNew: Boolean(settingsRaw?.isNew ?? true),
    language: langIsValid ? settingsRaw.language : LANGS[0],
    soundsEnabled: Boolean(settingsRaw?.soundsEnabled ?? true),
  };

  return settings;
};

/**
 * Save settings into local storage
 * @param settings the settings to save
 */
export const saveSettings = (settings: Settings): void => {
  localStorage.setItem('settings', JSON.stringify(settings));
};

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

/**
 * Verify if a color is valid
 * @param color the color to check
 * @returns true if the color is valid, false otherwise
 */
export const isValidColor = (color: string): boolean => {
  return COLOR_REGEX.test(color) && !isTooBright(color);
};

/**
 * Verify if a language is valid
 * @param lang the language to check
 * @returns true if the language is valid, false otherwise
 */
const isValidLang = (lang: string) => LANGS.includes(lang.toLowerCase());
