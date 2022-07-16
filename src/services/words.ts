import { loadSettings } from './settings';

const WORDS_BASE_URL = '/assets/data/words-{LANG}.json';

export interface WordProps {
  readonly value: string;
  readonly x: number;
  readonly duration: number;
  readonly id: string;
  [otherProp: string]: any;
}

export type Words = Array<string>;

/**
 * Fetch the words list
 *
 * @returns a Promise, which resolves in the words list (array of string)
 */
export async function fetchWordsList(): Promise<Words> {
  const settings = loadSettings();
  const url = WORDS_BASE_URL.replace('{LANG}', settings.language);
  return fetch(url).then(data => data.json());
}
