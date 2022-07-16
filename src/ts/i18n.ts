import { addMessages, init } from 'svelte-i18n';
import en from '../../i18n/en.json';
import fr from '../../i18n/fr.json';
import { loadSettings } from '../services/settings';

addMessages('en', en);
addMessages('fr', fr);

init({
  fallbackLocale: 'en',
  initialLocale: loadSettings().language,
});
