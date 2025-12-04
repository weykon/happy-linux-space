import StickyTag from './StickyTag'

export default function ConceptCard({ concept, mode = 'beginner', lang = 'zh', index = 0 }) {
  const content = concept.content[lang]
  const modeContent = content[mode]
  const title = concept.title[lang]

  return (
    <article className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.07)] backdrop-blur-2xl">
      {/* Header - Concept title and persona */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{lang === 'zh' ? '系统概念' : 'System Concept'}</p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900">{title}</h3>
          {mode === 'beginner' && (
            <p className="mt-2 text-base text-slate-500">{modeContent.persona}</p>
          )}
        </div>
        <StickyTag label={`${mode === 'beginner' ? '新手' : '专业'} ${index + 1}`} index={index} />
      </div>

      {/* Story / Summary - Different for beginner vs professional */}
      {mode === 'beginner' ? (
        // BEGINNER MODE: Story and metaphor
        <>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">{modeContent.story}</p>

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-50/80 to-blue-50/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              {lang === 'zh' ? '记忆比喻' : 'Memory Metaphor'}
            </p>
            <p className="mt-2 text-4xl">{modeContent.metaphor.visualization}</p>
            <p className="mt-2 text-sm text-slate-600">{modeContent.metaphor.theme}</p>
          </div>
        </>
      ) : (
        // PROFESSIONAL MODE: Summary and key points
        <>
          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-700">{modeContent.summary}</p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                {lang === 'zh' ? '核心知识点' : 'Key Points'}
              </p>
              <div className="mt-4 space-y-4">
                {modeContent.keyPoints.map((point, idx) => (
                  <div key={idx} className="border-l-2 border-emerald-300 pl-4">
                    <p className="text-sm font-semibold text-slate-900">{point.concept}</p>
                    <p className="mt-1 text-sm text-slate-600">{point.explanation}</p>
                    <p className="mt-1 font-mono text-xs text-slate-500">💡 {point.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Use Cases - Only in professional mode */}
      {mode === 'professional' && modeContent.useCases && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              {lang === 'zh' ? '实战场景' : 'Use Cases'}
            </p>
            <div className="mt-4 space-y-4">
              {modeContent.useCases.map((useCase, idx) => (
                <div key={idx} className="rounded-xl bg-white/60 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {lang === 'zh' ? '场景' : 'Scenario'}: {useCase.scenario}
                  </p>
                  <p className="mt-2 font-mono text-xs text-slate-600">$ {useCase.solution}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {lang === 'zh' ? '💡 原理' : '💡 Reasoning'}: {useCase.reasoning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Difficulty badge */}
      <div className="mt-6 flex items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
          concept.category.difficulty === 'beginner'
            ? 'bg-emerald-100 text-emerald-700'
            : concept.category.difficulty === 'intermediate'
            ? 'bg-sky-100 text-sky-700'
            : 'bg-purple-100 text-purple-700'
        }`}>
          {concept.category.difficulty === 'beginner'
            ? (lang === 'zh' ? '入门' : 'Beginner')
            : concept.category.difficulty === 'intermediate'
            ? (lang === 'zh' ? '进阶' : 'Intermediate')
            : (lang === 'zh' ? '高级' : 'Advanced')
          }
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {concept.category.topic === 'security'
            ? (lang === 'zh' ? '安全权限' : 'Security')
            : concept.category.topic === 'system'
            ? (lang === 'zh' ? '系统管理' : 'System')
            : concept.category.topic === 'networking'
            ? (lang === 'zh' ? '网络通信' : 'Networking')
            : (lang === 'zh' ? '开发工具' : 'Development')
          }
        </span>
      </div>
    </article>
  )
}
