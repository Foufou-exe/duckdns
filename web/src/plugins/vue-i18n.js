import { createI18n } from 'vue-i18n';

import fr from '@locales/fr.json';
import en from '@locales/en.json';
import de from '@locales/de.json';
import es from '@locales/es.json';
import ar from '@locales/ar.json';
import ru from '@locales/ru.json';
import id from '@locales/id.json';
import pt from '@locales/pt.json';
import ja from '@locales/ja.json';
import zh from '@locales/zh.json';

/**
 * Vue I18n instance for translating text.
 * @type {import('vue-i18n').I18n}
 */

const translate = createI18n({
  locale: 'en', // set the default language
  fallbackLocale: 'en', // defining the fallback language
  texte: {
    en,
    fr,
    de,
    es,
    ar,
    ru,
    id,
    pt,
    ja,
    zh
  }
});

export default translate;