/**
 * Command Data Schema - Supports bilingual dual-track (beginner/professional)
 * and multi-dimensional categorization
 */

export const commandSchema = {
  // Basic identification
  id: 'string', // unique id
  command: 'string', // command name (ls, grep, etc)

  // Categorization (for filtering and organization)
  category: {
    scenario: 'string', // file-operations, text-processing, archives, networking, system-info, permissions
    frequency: 'string', // high, medium, low
    difficulty: 'string' // beginner, intermediate, advanced
  },

  // Multi-language content - Dual track (beginner metaphor vs professional scenario)
  content: {
    zh: {
      fullName: 'string', // expanded acronym
      beginner: {
        persona: 'string', // character name & role
        story: 'string', // narrative mnemonic
        metaphor: {
          theme: 'string', // icecream-theater, etc
          visualization: 'string' // emoji representation
        }
      },
      professional: {
        summary: 'string', // what it does
        useCases: [
          {
            problem: 'string', // real-world situation
            solution: 'string', // command example
            context: 'string' // when/why to use
          }
        ]
      },
      history: 'string', // historical origin
      parameters: [
        {
          flag: 'string', // -a, -l, etc
          mnemonic: 'string', // memory hook
          usage: 'string' // what it does
        }
      ],
      alternatives: [
        {
          name: 'string', // tool name
          note: 'string' // why/when to use
        }
      ]
    },

    en: {
      fullName: 'string',
      beginner: {
        persona: 'string',
        story: 'string',
        metaphor: {
          theme: 'string', // warehouse-inventory, cooking, etc
          visualization: 'string'
        }
      },
      professional: {
        summary: 'string',
        useCases: [
          {
            problem: 'string',
            solution: 'string',
            context: 'string'
          }
        ]
      },
      history: 'string',
      parameters: [],
      alternatives: []
    }
  },

  // Pipeline inspiration (appears in both languages)
  pipelineSpark: {
    label: 'string', // what the pipeline does
    recipe: 'string', // command chain
    tip: 'string' // explanation
  }
}

/**
 * Example command structure (ls):
 */
export const exampleCommand = {
  id: 'ls',
  command: 'ls',
  category: {
    scenario: 'file-operations',
    frequency: 'high',
    difficulty: 'beginner'
  },
  content: {
    zh: {
      fullName: 'list segments',
      beginner: {
        persona: '舞台经理 Luna Stage',
        story: '想像 Luna 拿着珍珠色的灯光清单，在后台一排排点亮设备...',
        metaphor: {
          theme: 'icecream-theater',
          visualization: '🎭🍦'
        }
      },
      professional: {
        summary: '列出目录内容的快速浏览工具',
        useCases: [
          {
            problem: '需要查看项目文件结构',
            solution: 'ls -la',
            context: '代码审查前快速了解目录组织'
          }
        ]
      },
      history: '诞生于 1971 年 AT&T Bell Labs...',
      parameters: [
        {
          flag: '-l',
          mnemonic: 'list like a ledger',
          usage: '显示详细信息'
        }
      ],
      alternatives: [
        { name: 'eza', note: 'Rust实现，彩色输出' }
      ]
    },
    en: {
      fullName: 'list segments',
      beginner: {
        persona: 'Inventory Manager Isa',
        story: 'Isa walks through the warehouse with her clipboard...',
        metaphor: {
          theme: 'warehouse-inventory',
          visualization: '📦🔍'
        }
      },
      professional: {
        summary: 'Quick directory content viewer',
        useCases: [
          {
            problem: 'Need to inspect project structure',
            solution: 'ls -la',
            context: 'Pre-code-review directory inspection'
          }
        ]
      },
      history: 'Born in 1971 at AT&T Bell Labs...',
      parameters: [
        {
          flag: '-l',
          mnemonic: 'list like a ledger',
          usage: 'show detailed information'
        }
      ],
      alternatives: [
        { name: 'eza', note: 'Rust-based, colored output' }
      ]
    }
  },
  pipelineSpark: {
    label: '开场前点兵',
    recipe: 'ls -1 | head -5 | pbcopy',
    tip: '将前5个文件名复制到剪贴板'
  }
}
