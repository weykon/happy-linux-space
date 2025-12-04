import { useTranslation } from 'react-i18next'

export default function MemoryFramework() {
  const { t } = useTranslation('common')

  const frameworkKeys = ['commandRole', 'parameterFlavor', 'pipelineSundae', 'alternativeIngredients']

  return (
    <section className="grid gap-6 md:grid-cols-2">
      {frameworkKeys.map((key) => (
        <div key={key} className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <h3 className="text-xl font-semibold text-slate-900">{t(`sections.memoryFramework.${key}.title`)}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(`sections.memoryFramework.${key}.detail`)}</p>
        </div>
      ))}
    </section>
  )
}
