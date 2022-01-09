import { addMessages, init } from 'svelte-i18n';
import { loadSettings } from './utils';
import en from '../../i18n/en.json';
import fr from '../../i18n/fr.json';

addMessages('en', en);
addMessages('fr', fr);

init({
  fallbackLocale: 'en',
  initialLocale: loadSettings().language,
});
