import { useTranslation } from 'react-i18next'

export default function ModeSwitch({ mode, onModeChange }) {
  const { t } = useTranslation('common')

  return (
    <div className="flex gap-3">
      <button
        onClick={() => onModeChange('beginner')}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          mode === 'beginner'
            ? 'bg-rose-100 text-rose-900 shadow-[0_8px_20px_rgba(251,113,133,0.2)]'
            : 'bg-white/80 text-slate-700 hover:scale-105'
        }`}
        title={t('modes.beginnerDesc')}
      >
        🎨 {t('modes.beginner')}
      </button>
      <button
        onClick={() => onModeChange('professional')}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          mode === 'professional'
            ? 'bg-sky-100 text-sky-900 shadow-[0_8px_20px_rgba(135,206,250,0.2)]'
            : 'bg-white/80 text-slate-700 hover:scale-105'
        }`}
        title={t('modes.professionalDesc')}
      >
        ⚙️ {t('modes.professional')}
      </button>
    </div>
  )
}
