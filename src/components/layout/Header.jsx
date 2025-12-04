import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation('common')

  return (
    <header className="rounded-[32px] border border-white/60 bg-white/70 p-10 shadow-[0_35px_120px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-slate-400">{t('app.title')}</p>
          <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">{t('app.subtitle')}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {t('app.description')}
          </p>
        </div>
        <LanguageSwitcher />
      </div>
      <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
        <span className="rounded-full bg-slate-100 px-4 py-2">{t('app.tags.tech')}</span>
        <span className="rounded-full bg-slate-100 px-4 py-2">{t('app.tags.style')}</span>
        <span className="rounded-full bg-slate-100 px-4 py-2">{t('app.tags.concept')}</span>
      </div>
    </header>
  )
}
