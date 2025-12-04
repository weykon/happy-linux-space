import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/layout/Header'
import MemoryFramework from './components/sections/MemoryFramework'
import TabNavigation from './components/layout/TabNavigation'
import ModeSwitch from './components/layout/ModeSwitch'
import SearchBar from './components/search/SearchBar'
import CommandList from './components/sections/CommandList'
import ConceptList from './components/sections/ConceptList'
import PipelineLab from './components/sections/PipelineLab'
import { commands, pipelineRecipes, getByCategory } from './data/index'
import { systemConcepts } from './data/concepts'

function App() {
  const { i18n } = useTranslation()
  const [mode, setMode] = useState('beginner')
  const [filteredCommands, setFilteredCommands] = useState(commands)

  const handleTabChange = useCallback(() => {
    // Tab change handled by category filtering
  }, [])

  const handleCategoryChange = useCallback((tab, category) => {
    if (tab === 'all' || !category) {
      setFilteredCommands(commands)
    } else {
      const filtered = getByCategory(tab, category)
      setFilteredCommands(filtered)
    }
  }, [])

  const handleSearch = useCallback(
    (results) => {
      if (results === null) {
        setFilteredCommands(commands)
      } else {
        setFilteredCommands(results)
      }
    },
    []
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-slate-50 to-sky-50 pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pt-16 sm:px-6 lg:px-8">
        {/* Header with language switcher */}
        <Header />

        {/* Memory framework cards */}
        <MemoryFramework />

        {/* Tab navigation for category filtering */}
        <TabNavigation onTabChange={handleTabChange} onCategoryChange={handleCategoryChange} />

        {/* Mode switcher - Beginner vs Professional */}
        <ModeSwitch mode={mode} onModeChange={setMode} />

        {/* Search bar */}
        <SearchBar onSearch={handleSearch} lang={i18n.language} />

        {/* Filtered command list */}
        <CommandList commands={filteredCommands} mode={mode} />

        {/* System concepts */}
        <ConceptList concepts={systemConcepts} mode={mode} />

        {/* Pipeline recipes */}
        <PipelineLab recipes={pipelineRecipes} />
      </div>
    </div>
  )
}

export default App
