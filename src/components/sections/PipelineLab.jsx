import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function PipelineLab({ recipes }) {
  const { t, i18n } = useTranslation('common')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const lang = i18n.language

  const categories = [
    { id: 'all', emoji: '🎭' },
    { id: 'basic', emoji: '🌱' },
    { id: 'network', emoji: '🌐' },
    { id: 'system', emoji: '⚙️' },
    { id: 'analysis', emoji: '📊' },
    { id: 'development', emoji: '💻' },
    { id: 'security', emoji: '🔐' },
    { id: 'advanced', emoji: '🚀' }
  ]

  const difficultyColors = {
    beginner: 'bg-emerald-100 text-emerald-700',
    intermediate: 'bg-sky-100 text-sky-700',
    advanced: 'bg-purple-100 text-purple-700'
  }

  const filteredRecipes = selectedCategory === 'all'
    ? recipes
    : recipes.filter(r => r.category === selectedCategory)

  return (
    <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-slate-900">{t('sections.pipelineLab.title')}</h2>
        <p className="text-slate-500">{t('sections.pipelineLab.subtitle')}</p>
      </div>

      {/* Category filter buttons */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-slate-900 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span className="mr-1">{cat.emoji}</span>
            {t(`pipelineCategories.${cat.id}`)}
          </button>
        ))}
      </div>

      {/* Pipeline cards grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <div
            key={typeof recipe.title === 'object' ? recipe.title[lang] : recipe.title}
            className="group rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                {typeof recipe.title === 'object' ? recipe.title[lang] : recipe.title}
              </p>
              {recipe.difficulty && (
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${difficultyColors[recipe.difficulty]}`}>
                  {t(`categories.${recipe.difficulty}`)}
                </span>
              )}
            </div>
            <div className="mt-4 rounded-2xl bg-slate-900 p-4">
              <p className="font-mono text-xs leading-relaxed text-slate-100">{recipe.chain}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {typeof recipe.idea === 'object' ? recipe.idea[lang] : recipe.idea}
            </p>
          </div>
        ))}
      </div>

      {/* Results count */}
      <div className="mt-6 text-center text-sm text-slate-400">
        {t('pipelineResults.count', { count: filteredRecipes.length })}
      </div>
    </section>
  )
}
