import Color from 'color';
import { getLocaleFromNavigator, locale } from 'svelte-i18n';
import settings, { Settings } from '../store/settings';
import { defaultColors, Lang, LANGS } from '../ts/constants';

/**
 * Get the correct language
 * @param lang the initial language, that may be valid or not
 * @returns the correct language
 */
const getLanguage = (lang?: string): Lang => {
  if (!lang) {
    lang = getLocaleFromNavigator();
  }

  if (lang in LANGS) {
    return lang as Lang;
  }

  return 'en';
};

/**
 * Load settings from local storage
 * @returns the settings
 */
export const loadSettings = (): Settings => {
  const settingsRaw = localStorage.getItem('settings');

  let settings: any;

  try {
    settings = JSON.parse(settingsRaw);
  } catch {
    settings = {};
  }

  let colorTheme: Color;

  if (settings?.colorTheme) {
    try {
      colorTheme = Color(settings?.colorTheme);
    } catch {
      colorTheme = Color(defaultColors[0]);
    }
  } else {
    colorTheme = defaultColors[0];
  }

  return {
    colorTheme,
    showRules: Boolean(settings?.showRules ?? true),
    language: getLanguage(settings?.language),
    soundsEnabled: Boolean(settings?.soundsEnabled ?? true),
  };
};

/**
 * Save settings into local storage
 * @param settings the settings to save
 */
export const saveSettings = (settings: Settings): void => {
  const jsonSettings = { ...settings, colorTheme: settings.colorTheme.hex() };
  localStorage.setItem('settings', JSON.stringify(jsonSettings));
};

// Setters

export const setLanguage = (language: Lang) => {
  settings.update(s => ({ ...s, language }));
  locale.set(language);
};

export const setColorTheme = (colorTheme: Color) => {
  settings.update(s => ({ ...s, colorTheme }));
};

export const setSoundsEnabled = (soundsEnabled: boolean) => {
  settings.update(s => ({ ...s, soundsEnabled }));
};
