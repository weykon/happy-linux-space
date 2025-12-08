import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getAllCategories } from '../../data/index'

const TABS = [
  {
    id: 'scenario',
    icon: '🎯',
    key: 'tabs.scenario'
  },
  {
    id: 'frequency',
    icon: '⚡',
    key: 'tabs.frequency'
  },
  {
    id: 'difficulty',
    icon: '📊',
    key: 'tabs.difficulty'
  },
  {
    id: 'all',
    icon: '📚',
    key: 'tabs.all'
  }
]

// Helper to get initial tab from URL hash
const getInitialTab = () => {
  const hash = window.location.hash.slice(2) // Remove '#/'
  if (hash) {
    const [tab] = hash.split('/')
    if (tab && TABS.some((t) => t.id === tab)) {
      return tab
    }
  }
  return TABS[0].id
}

// Helper to get initial category from URL hash
const getInitialCategory = (categories) => {
  const hash = window.location.hash.slice(2) // Remove '#/'
  if (hash) {
    const [tab, category] = hash.split('/')
    if (category && tab && TABS.some((t) => t.id === tab)) {
      return category
    }
  }
  // Default to first category of first tab
  const firstTab = TABS[0].id
  return categories[`${firstTab}s`]?.[0] || null
}

export default function TabNavigation({ onTabChange, onCategoryChange }) {
  const { t } = useTranslation('common')
  const categories = getAllCategories()
  const [activeTab, setActiveTab] = useState(getInitialTab)
  const [activeCategory, setActiveCategory] = useState(() => getInitialCategory(categories))

  // Update URL hash when tab changes
  useEffect(() => {
    window.location.hash = `#/${activeTab}${activeCategory ? `/${activeCategory}` : ''}`
  }, [activeTab, activeCategory])

  // Notify parent when tab changes
  useEffect(() => {
    if (activeTab === 'all') {
      onTabChange('all')
      onCategoryChange(null, null)
    } else if (activeCategory) {
      onTabChange(activeTab)
      onCategoryChange(activeTab, activeCategory)
    }
  }, [activeTab, activeCategory, onTabChange, onCategoryChange])

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    if (tabId === 'all') {
      setActiveCategory(null)
    } else {
      // Auto-select first category
      const categoryKey = `${tabId}s`
      const firstCategory = categories[categoryKey]?.[0]
      setActiveCategory(firstCategory || null)
    }
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  // Get categories for current tab
  const getCategoriesForTab = () => {
    const categoryKey = `${activeTab}s`
    return categories[categoryKey] || []
  }

  const tabCategories = getCategoriesForTab()

  return (
    <div className="space-y-4 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
      {/* Main Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-rose-100 to-amber-100 text-slate-900 shadow-[0_8px_20px_rgba(251,113,133,0.2)]'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            {t(tab.key)}
          </button>
        ))}
      </div>

      {/* Sub-categories for selected tab */}
      {activeTab !== 'all' && tabCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tabCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                activeCategory === category
                  ? 'bg-sky-100 text-sky-900 shadow-[0_4px_12px_rgba(135,206,250,0.3)]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t(`categories.${category}`, category)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
