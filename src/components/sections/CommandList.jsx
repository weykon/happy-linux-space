import { useTranslation } from 'react-i18next'
import CommandCard from '../cards/CommandCard'

export default function CommandList({ commands, mode = 'beginner' }) {
  const { t, i18n } = useTranslation('common')
  const lang = i18n.language

  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-slate-900">{t('sections.commandStories.title')}</h2>
        <p className="text-slate-500">{t('sections.commandStories.subtitle')}</p>
      </div>
      <div className="space-y-10">
        {commands.map((command, index) => (
          <CommandCard key={command.id} command={command} mode={mode} lang={lang} index={index} />
        ))}
      </div>
    </section>
  )
}
