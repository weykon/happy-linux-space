import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import zhCommon from './locales/zh/common.json'
import zhCommands from './locales/zh/commands.json'
import zhMetaphors from './locales/zh/metaphors.json'
import zhScenarios from './locales/zh/scenarios.json'

import enCommon from './locales/en/common.json'
import enCommands from './locales/en/commands.json'
import enMetaphors from './locales/en/metaphors.json'
import enScenarios from './locales/en/scenarios.json'

const resources = {
  zh: {
    common: zhCommon,
    commands: zhCommands,
    metaphors: zhMetaphors,
    scenarios: zhScenarios
  },
  en: {
    common: enCommon,
    commands: enCommands,
    metaphors: enMetaphors,
    scenarios: enScenarios
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // React already escapes
    }
  })

export default i18n
