/**
 * Data aggregator and index builder
 * Provides multi-dimensional search, filtering, and organization
 */

import { commands, pipelineRecipes } from './commands'

// Create category indices for fast lookups
export const categoryIndex = {
  scenario: {},
  frequency: {},
  difficulty: {}
}

commands.forEach((cmd) => {
  const { scenario, frequency, difficulty } = cmd.category

  // Index by scenario
  if (!categoryIndex.scenario[scenario]) {
    categoryIndex.scenario[scenario] = []
  }
  categoryIndex.scenario[scenario].push(cmd)

  // Index by frequency
  if (!categoryIndex.frequency[frequency]) {
    categoryIndex.frequency[frequency] = []
  }
  categoryIndex.frequency[frequency].push(cmd)

  // Index by difficulty
  if (!categoryIndex.difficulty[difficulty]) {
    categoryIndex.difficulty[difficulty] = []
  }
  categoryIndex.difficulty[difficulty].push(cmd)
})

/**
 * Get commands by category
 * @param {string} dimension - 'scenario', 'frequency', or 'difficulty'
 * @param {string} value - the category value
 * @returns {array} filtered commands
 */
export function getByCategory(dimension, value) {
  return categoryIndex[dimension]?.[value] || []
}

/**
 * Search commands by keyword
 * Simple substring matching in command name, history, and summary
 * @param {string} query - search term
 * @param {string} lang - 'zh' or 'en'
 * @returns {array} matching commands
 */
export function searchCommands(query, lang = 'zh') {
  const lowerQuery = query.toLowerCase()

  return commands.filter((cmd) => {
    const content = cmd.content[lang]
    const command = cmd.command.toLowerCase()
    const summary = content.professional.summary.toLowerCase()
    const history = content.history.toLowerCase()

    return (
      command.includes(lowerQuery) ||
      summary.includes(lowerQuery) ||
      history.includes(lowerQuery)
    )
  })
}

/**
 * Get all unique categories
 * @returns {object} categories organized by dimension
 */
export function getAllCategories() {
  return {
    scenarios: Object.keys(categoryIndex.scenario),
    frequencies: Object.keys(categoryIndex.frequency),
    difficulties: Object.keys(categoryIndex.difficulty)
  }
}

/**
 * Get command by ID
 * @param {string} id - command id
 * @returns {object} command object or null
 */
export function getCommandById(id) {
  return commands.find((cmd) => cmd.id === id) || null
}

/**
 * Get all commands (with optional language filter)
 * @returns {array} all commands
 */
export function getAllCommands() {
  return commands
}

/**
 * Get pipeline recipes
 * @returns {array} pipeline recipe objects
 */
export function getPipelineRecipes() {
  return pipelineRecipes
}

// Export raw data for backward compatibility
export { commands, pipelineRecipes }
