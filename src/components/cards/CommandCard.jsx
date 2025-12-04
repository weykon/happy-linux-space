import StickyTag from './StickyTag'

export default function CommandCard({ command, mode = 'beginner', lang = 'zh', index = 0 }) {
  const content = command.content[lang]
  const modeContent = content[mode]
  const sharedContent = {
    history: content.history,
    parameters: content.parameters,
    alternatives: content.alternatives
  }

  return (
    <article className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.07)] backdrop-blur-2xl">
      {/* Header - Command name and persona */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{content.fullName}</p>
          <h3 className="mt-3 text-4xl font-semibold text-slate-900">{command.command}</h3>
          <p className="mt-2 text-base text-slate-500">{modeContent.persona}</p>
        </div>
        <StickyTag label={`${mode === 'beginner' ? '新手' : '专业'} ${index + 1}`} index={index} />
      </div>

      {/* Story / Summary - Different for beginner vs professional */}
      <p className="mt-6 text-lg leading-relaxed text-slate-700">{modeContent.story}</p>

      {/* Mode-specific content sections */}
      {mode === 'beginner' ? (
        // BEGINNER MODE: Visual metaphor and history
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-2 rounded-2xl bg-slate-50/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">记忆比喻</p>
            <p className="text-3xl">{modeContent.metaphor.visualization}</p>
            <p className="text-sm text-slate-600">{modeContent.metaphor.theme}</p>
          </div>
          <div className="space-y-2 rounded-2xl bg-slate-50/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">历史故事</p>
            <p className="text-sm text-slate-600">{sharedContent.history}</p>
          </div>
        </div>
      ) : (
        // PROFESSIONAL MODE: Use cases
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">使用场景</p>
            <div className="mt-4 space-y-3">
              {modeContent.useCases.map((useCase, idx) => (
                <div key={idx} className="border-l-2 border-sky-300 pl-3">
                  <p className="text-sm font-semibold text-slate-900">问题: {useCase.problem}</p>
                  <p className="mt-1 font-mono text-xs text-slate-600">$ {useCase.solution}</p>
                  <p className="mt-1 text-xs text-slate-500">💡 {useCase.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Shared sections: Parameters and alternatives */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">参数说明</h4>
          <ul className="mt-4 space-y-4">
            {sharedContent.parameters.map((param) => (
              <li key={param.flag} className="rounded-2xl border border-dashed border-rose-100/80 bg-rose-50/70 p-4">
                <p className="text-sm font-semibold text-rose-500">{param.flag}</p>
                <p className="text-base text-slate-900">{param.mnemonic}</p>
                <p className="text-sm text-slate-600">{param.usage}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">现代平替</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {sharedContent.alternatives.map((alt) => (
                <span key={alt.name} className="inline-flex rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-inner">
                  <strong className="mr-2 font-semibold text-slate-900">{alt.name}</strong>
                  {alt.note}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">管道灵感</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{command.pipelineSpark.label}</p>
            <p className="mt-2 font-mono text-sm text-slate-700">$ {command.pipelineSpark.recipe}</p>
            <p className="mt-2 text-sm text-slate-600">{command.pipelineSpark.tip}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
