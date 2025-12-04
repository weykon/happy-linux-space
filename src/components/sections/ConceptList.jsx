import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ConceptCard from '../cards/ConceptCard'

export default function ConceptList({ concepts, mode = 'beginner' }) {
  const { t, i18n } = useTranslation('common')
  const lang = i18n.language
  const [selectedTopic, setSelectedTopic] = useState('all')

  // Filter concepts by topic
  const filteredConcepts = selectedTopic === 'all'
    ? concepts
    : concepts.filter(c => c.category.topic === selectedTopic)

  // Topic filter buttons
  const topics = [
    { id: 'all', label: t('conceptTabs.all'), emoji: '🎭' },
    { id: 'security', label: t('conceptTabs.security'), emoji: '🔐' },
    { id: 'system', label: t('conceptTabs.system'), emoji: '⚙️' },
    { id: 'networking', label: t('conceptTabs.networking'), emoji: '🌐' },
    { id: 'development', label: t('conceptTabs.development'), emoji: '💻' }
  ]

  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-slate-900">{t('sections.systemConcepts.title')}</h2>
        <p className="text-slate-500">{t('sections.systemConcepts.subtitle')}</p>
      </div>

      {/* Topic filter buttons */}
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedTopic === topic.id
                ? 'bg-slate-900 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span className="mr-1">{topic.emoji}</span>
            {topic.label}
          </button>
        ))}
      </div>

      {/* Concept cards */}
      <div className="space-y-10">
        {filteredConcepts.map((concept, index) => (
          <ConceptCard key={concept.id} concept={concept} mode={mode} lang={lang} index={index} />
        ))}
      </div>

      {/* Count display */}
      <div className="text-center text-sm text-slate-400">
        {lang === 'zh' ? `共 ${filteredConcepts.length} 个系统概念` : `${filteredConcepts.length} System Concepts Total`}
      </div>
    </section>
  )
}
