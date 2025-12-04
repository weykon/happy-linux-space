/**
 * Migration script: Convert old commandStories format to new schema
 * This transforms the original 4 commands to support dual-track (beginner/professional)
 *
 * Run once to generate new data structure, then delete this file
 */

import { commandStories as oldStories } from './commandStories'

// Mapping old commands to new schema categories
const categoryMapping = {
  ls: { scenario: 'file-operations', frequency: 'high', difficulty: 'beginner' },
  grep: { scenario: 'text-processing', frequency: 'high', difficulty: 'intermediate' },
  awk: { scenario: 'text-processing', frequency: 'medium', difficulty: 'advanced' },
  tar: { scenario: 'archives', frequency: 'medium', difficulty: 'intermediate' }
}

// English metaphor themes for each command
const englishMetaphors = {
  ls: {
    persona: 'Inventory Manager Isa',
    story: 'Isa walks through the warehouse with her clipboard, counting boxes and checking labels. She can sort by size, date, or color-coded priority tags.',
    theme: 'warehouse-inventory',
    visualization: '📦🔍'
  },
  grep: {
    persona: 'Detective Diana',
    story: 'Diana scans through filing cabinets with a magnifying glass, pulling out folders with specific keywords highlighted in yellow.',
    theme: 'warehouse-inventory',
    visualization: '🔎⚡'
  },
  awk: {
    persona: 'Assembly Line Supervisor Ana',
    story: 'Ana orchestrates the factory floor like a conductor, transforming raw materials at each station and combining outputs.',
    theme: 'warehouse-inventory',
    visualization: '🏭⚙️'
  },
  tar: {
    persona: 'Warehouse Curator Tara',
    story: 'Tara packs items into labeled boxes and containers, with different wrapping methods for different delivery needs.',
    theme: 'warehouse-inventory',
    visualization: '📦✨'
  }
}

export function migrateCommand(oldCommand) {
  const { id } = oldCommand
  const category = categoryMapping[id] || { scenario: 'other', frequency: 'low', difficulty: 'beginner' }
  const englishMeta = englishMetaphors[id] || {}

  return {
    id,
    command: oldCommand.command,
    category,
    content: {
      zh: {
        fullName: oldCommand.fullName,
        beginner: {
          persona: oldCommand.persona,
          story: oldCommand.story,
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🍦'
          }
        },
        professional: {
          summary: oldCommand.focus,
          useCases: [
            {
              problem: '实际使用场景',
              solution: oldCommand.pipelineSpark.recipe,
              context: oldCommand.pipelineSpark.tip
            }
          ]
        },
        history: oldCommand.history,
        parameters: oldCommand.parameters,
        alternatives: oldCommand.alternatives
      },
      en: {
        fullName: oldCommand.fullName,
        beginner: {
          persona: englishMeta.persona || 'Manager M.',
          story: englishMeta.story || oldCommand.story,
          metaphor: {
            theme: englishMeta.theme || 'warehouse-inventory',
            visualization: englishMeta.visualization || '📦'
          }
        },
        professional: {
          summary: oldCommand.focus,
          useCases: [
            {
              problem: 'Real-world usage scenario',
              solution: oldCommand.pipelineSpark.recipe,
              context: oldCommand.pipelineSpark.tip
            }
          ]
        },
        history: oldCommand.history,
        parameters: oldCommand.parameters,
        alternatives: oldCommand.alternatives
      }
    },
    pipelineSpark: oldCommand.pipelineSpark
  }
}

// Generate migrated data
export const migratedCommands = oldStories.map(migrateCommand)

console.log('✅ Migration complete. Generated', migratedCommands.length, 'commands in new schema.')
