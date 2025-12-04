import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function PipelineLab({ recipes }) {
  const { t } = useTranslation('common')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // 获取所有分类
  const categories = [
    { id: 'all', label: '全部', emoji: '🎭' },
    { id: 'basic', label: '基础', emoji: '🌱' },
    { id: 'network', label: '网络', emoji: '🌐' },
    { id: 'system', label: '系统', emoji: '⚙️' },
    { id: 'analysis', label: '分析', emoji: '📊' },
    { id: 'development', label: '开发', emoji: '💻' },
    { id: 'security', label: '安全', emoji: '🔐' },
    { id: 'advanced', label: '高级', emoji: '🚀' }
  ]

  // 难度标记颜色
  const difficultyColors = {
    beginner: 'bg-emerald-100 text-emerald-700',
    intermediate: 'bg-sky-100 text-sky-700',
    advanced: 'bg-purple-100 text-purple-700'
  }

  const difficultyLabels = {
    beginner: '入门',
    intermediate: '进阶',
    advanced: '高级'
  }

  // 过滤 recipes
  const filteredRecipes = selectedCategory === 'all'
    ? recipes
    : recipes.filter(r => r.category === selectedCategory)

  return (
    <section className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-slate-900">{t('sections.pipelineLab.title')}</h2>
        <p className="text-slate-500">{t('sections.pipelineLab.subtitle')}</p>
      </div>

      {/* 分类筛选按钮 */}
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
            {cat.label}
          </button>
        ))}
      </div>

      {/* Pipeline 卡片网格 */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.title}
            className="group rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                {recipe.title}
              </p>
              {recipe.difficulty && (
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${difficultyColors[recipe.difficulty]}`}>
                  {difficultyLabels[recipe.difficulty]}
                </span>
              )}
            </div>
            <div className="mt-4 rounded-2xl bg-slate-900 p-4">
              <p className="font-mono text-xs leading-relaxed text-slate-100">{recipe.chain}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{recipe.idea}</p>
          </div>
        ))}
      </div>

      {/* 显示结果数量 */}
      <div className="mt-6 text-center text-sm text-slate-400">
        共 {filteredRecipes.length} 个 Pipeline 组合
      </div>
    </section>
  )
}
