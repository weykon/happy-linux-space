import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { searchCommands } from '../../data/index'

export default function SearchBar({ onSearch, lang = 'zh' }) {
  const { t } = useTranslation('common')
  const [query, setQuery] = useState('')

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value
      setQuery(value)

      if (value.trim()) {
        const results = searchCommands(value, lang)
        onSearch(results)
      } else {
        onSearch(null) // Reset to show all
      }
    },
    [lang, onSearch]
  )

  const handleClear = useCallback(() => {
    setQuery('')
    onSearch(null)
  }, [onSearch])

  return (
    <div className="relative">
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.1)] backdrop-blur-sm focus-within:border-sky-300 focus-within:shadow-[0_12px_30px_rgba(135,206,250,0.2)]">
        <span className="text-lg">🔍</span>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={t('search.placeholder')}
          className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 outline-none"
        />
        {query && (
          <button
            onClick={handleClear}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {query && (
        <p className="mt-2 text-xs text-slate-500">
          {/* Search result count - will be shown by parent */}
        </p>
      )}
    </div>
  )
}
