import { createI18n } from 'vue-i18n'
import us from './locales/us.json'
import gr from './locales/gr.json'

function loadLocaleMessages() {
  const locales = [{ us: us }, { gr: gr }]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key] 
  })
  return messages;
}

export default createI18n({
  locale: 'us',
  fallbackLocale: 'us',
  messages: loadLocaleMessages()
})