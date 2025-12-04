import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(nextLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.1)] backdrop-blur-sm transition-all hover:scale-105 hover:shadow-[0_12px_30px_rgba(15,23,42,0.15)]"
      aria-label="Toggle language"
    >
      {i18n.language === 'zh' ? '🇨🇳 中文' : '🇺🇸 English'}
    </button>
  )
}
