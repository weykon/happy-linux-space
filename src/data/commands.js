/**
 * Commands database - New schema with dual-track (beginner/professional) support
 * Ready for expansion to 50+ commands
 */

export const commands = [
  {
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
          persona: '舞台经理 Luna',
          story: 'Luna 是剧团的舞台经理，每场演出前她都会拿着点名册，逐一确认演员是否到齐。ls 就像 Luna 的点名册，帮你快速浏览目录里有哪些"演员"（文件）在场，还能显示他们的"简历"（权限、大小、时间戳）。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🎭📋'
          }
        },
        professional: {
          summary: '列出目录内容的快速浏览工具',
          useCases: [
            {
              problem: '需要查看项目文件结构',
              solution: 'ls -la',
              context: '代码审查前快速了解目录组织'
            },
            {
              problem: '查找最近修改的文件',
              solution: 'ls -lt | head -10',
              context: '开发调试时定位最新更改'
            }
          ]
        },
        history: '诞生于 1971 年 AT&T Bell Labs，Kernighan 在最初的 UNIX 工具集里就设计了它。后来 BSD 将排序/着色加入家族，现代平替有 exa、eza。',
        parameters: [
          {
            flag: '-l',
            mnemonic: 'list like a ledger —— 像账本一样列细节',
            usage: '显示权限、拥有者与时间戳，像翻账本补剧情。'
          },
          {
            flag: '-a',
            mnemonic: 'all the actors —— 不遗漏隐藏角色',
            usage: '包含以 . 开头的文件，适合调试配置。'
          },
          {
            flag: '-h',
            mnemonic: 'human hugs —— 尺寸要让人秒懂',
            usage: '配合 -l 以 KB/MB 显示大小，方便估算传输成本。'
          }
        ],
        alternatives: [
          { name: 'exa / eza', note: 'Rust 实现，原生彩色树形输出。' },
          { name: 'find', note: '需要深度遍历或条件过滤时更高效。' }
        ]
      },
      en: {
        fullName: 'list segments',
        beginner: {
          persona: 'Stage Manager Luna',
          story: 'Luna is the theater stage manager. Before every show, she carries her roster, checking off each actor to ensure everyone is present. ls is like Luna\'s roster, helping you quickly browse which "performers" (files) are in the directory, along with their "resumes" (permissions, sizes, timestamps).',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📦📋'
          }
        },
        professional: {
          summary: 'Quick directory content viewer and organizer',
          useCases: [
            {
              problem: 'Need to inspect project structure',
              solution: 'ls -la',
              context: 'Pre-code-review directory understanding'
            },
            {
              problem: 'Find recently modified files',
              solution: 'ls -lt | head -10',
              context: 'Development debugging to locate latest changes'
            }
          ]
        },
        history: 'Born in 1971 at AT&T Bell Labs, designed by Kernighan as part of the original UNIX toolkit. BSD later added sorting/coloring. Modern alternatives: exa, eza.',
        parameters: [
          {
            flag: '-l',
            mnemonic: 'list like a ledger',
            usage: 'Show permissions, owner, and timestamp for details.'
          },
          {
            flag: '-a',
            mnemonic: 'all items (including hidden)',
            usage: 'Include dot-files, useful for config debugging.'
          },
          {
            flag: '-h',
            mnemonic: 'human-readable sizes',
            usage: 'Pair with -l to display KB/MB instead of bytes.'
          }
        ],
        alternatives: [
          { name: 'exa / eza', note: 'Rust-based with native colored tree output' },
          { name: 'find', note: 'More efficient for deep traversal or complex filtering' }
        ]
      }
    },
    pipelineSpark: {
      label: '开场前点兵 / Pre-show Inventory Check',
      recipe: 'ls -1 | head -5 | pbcopy',
      tip: '将前 5 个文件名复制到剪贴板，像导演把开场演员写在便签上 / Copy first 5 filenames to clipboard, like directing opening actors onto the stage.'
    }
  },
  {
    id: 'grep',
    command: 'grep',
    category: {
      scenario: 'text-processing',
      frequency: 'high',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'global regular expression print',
        beginner: {
          persona: '侦探 Greta',
          story: 'Greta 是剧团的首席侦探，擅长在剧本中寻找线索和关键词。grep 就像 Greta 的放大镜，能在成千上万行日志中快速定位"ERROR"这样的犯罪证据，帮你破解代码疑案。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🔍🎭'
          }
        },
        professional: {
          summary: '检索文本、日志与配置，是排查故障的放大镜',
          useCases: [
            {
              problem: '服务器日志中查找ERROR记录',
              solution: 'grep "ERROR" app.log | wc -l',
              context: '故障排查时快速统计错误数量'
            },
            {
              problem: '在多个代码文件中查找函数调用',
              solution: 'grep -r "functionName" src/',
              context: '代码重构时追踪函数使用情况'
            }
          ]
        },
        history: '名字来自 ed 编辑命令 g/re/p，随着 1973 年 UNIX V4 发布。现代加速款有 ripgrep、ugrep，支持并行和编码检测。',
        parameters: [
          {
            flag: '-r',
            mnemonic: 'rabbit hole —— 一路钻进子目录',
            usage: '递归搜索，查整棵仓库。'
          },
          {
            flag: '-n',
            mnemonic: 'note the line —— 给每行加编号',
            usage: '输出行号，方便立刻跳回编辑器。'
          },
          {
            flag: '-E',
            mnemonic: 'extended emotions —— 打开扩展正则',
            usage: '允许使用 + 与 | 等扩展符，讲复杂桥段。'
          }
        ],
        alternatives: [
          { name: 'ripgrep (rg)', note: 'Rust 写就，自动忽略 .gitignore，速度飞快。' },
          { name: 'ag / ugrep', note: '支持 PCRE2、语法高亮，更适合复杂模式。' }
        ]
      },
      en: {
        fullName: 'global regular expression print',
        beginner: {
          persona: 'Detective Greta',
          story: 'Greta is the theater\'s lead detective, expert at finding clues and keywords in scripts. grep is like Greta\'s magnifying glass, quickly locating "ERROR" evidence among thousands of log lines, helping you solve code mysteries.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🔍📦'
          }
        },
        professional: {
          summary: 'Search text files and logs with pattern matching',
          useCases: [
            {
              problem: 'Find ERROR records in server logs',
              solution: 'grep "ERROR" app.log | wc -l',
              context: 'Troubleshooting - quickly count total errors'
            },
            {
              problem: 'Locate function calls across codebase',
              solution: 'grep -r "functionName" src/',
              context: 'Refactoring - track function usage patterns'
            }
          ]
        },
        history: 'Named from ed editor command g/re/p, released with UNIX V4 in 1973. Modern speedups: ripgrep, ugrep with parallelism and encoding detection.',
        parameters: [
          {
            flag: '-r',
            mnemonic: 'recursive search',
            usage: 'Search entire directory tree and subdirectories.'
          },
          {
            flag: '-n',
            mnemonic: 'line numbers',
            usage: 'Output line numbers for quick editor navigation.'
          },
          {
            flag: '-E',
            mnemonic: 'extended regex',
            usage: 'Enable extended regex patterns (+, |, etc).'
          }
        ],
        alternatives: [
          { name: 'ripgrep (rg)', note: 'Rust-based, auto-ignores .gitignore, blazing fast' },
          { name: 'ag / ugrep', note: 'PCRE2 support, syntax highlighting, complex patterns' }
        ]
      }
    },
    pipelineSpark: {
      label: '日志圣代分层 / Error Log Investigation',
      recipe: 'grep -nE "ERROR|WARN" app.log | cut -d":" -f1-2',
      tip: '把重点行切出来，像剥开圣代的果酱层 / Extract critical lines like peeling a sundae layer to reveal the jam.'
    }
  },
  {
    id: 'awk',
    command: 'awk',
    category: {
      scenario: 'text-processing',
      frequency: 'medium',
      difficulty: 'advanced'
    },
    content: {
      zh: {
        fullName: 'Aho, Weinberger, Kernighan',
        beginner: {
          persona: '编舞师 Ava',
          story: 'Ava 是剧团的编舞师，擅长把演员按列排队，第一列跳探戈、第二列跳华尔兹。awk 就像 Ava，能从 CSV 表格里挑出第3列求和，或把日志按字段重新编排成完美的舞蹈队形。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '💃🎭'
          }
        },
        professional: {
          summary: '对列数据做计算或格式化，是日志与 CSV 的即兴编舞',
          useCases: [
            {
              problem: '从CSV提取特定列并求和',
              solution: 'awk -F"," \'{sum+=$3} END {print sum}\' data.csv',
              context: '数据分析时快速统计数值列'
            },
            {
              problem: '统计接口访问频率',
              solution: 'grep "GET" access.log | awk \'{print $1, $7}\' | sort | uniq -c',
              context: '日志分析时识别热点接口'
            }
          ]
        },
        history: '1977 年发表，最适合结构化文本。GNU awk (gawk) 继续拓展网络、时间函数，现代平替有 mawk、nawk。',
        parameters: [
          {
            flag: '-F ","',
            mnemonic: 'flavor separator —— 逗号决定口味层',
            usage: '设置分隔符，告诉 awk 如何切字段。'
          },
          {
            flag: 'BEGIN { ... }',
            mnemonic: 'before the overture —— 演出前先设舞台',
            usage: '初始化变量、打印表头。'
          },
          {
            flag: 'END { ... }',
            mnemonic: 'encore —— 收官时总结',
            usage: '输出统计或收尾信息。'
          }
        ],
        alternatives: [
          { name: 'jq', note: 'JSON 世界的同类，结构化数据时更轻松。' },
          { name: 'python -m tabulate', note: '需要复杂逻辑时可以转向脚本语言。' }
        ]
      },
      en: {
        fullName: 'Aho, Weinberger, Kernighan',
        beginner: {
          persona: 'Choreographer Ava',
          story: 'Ava is the theater choreographer, expert at arranging performers in columns - first column dances tango, second column dances waltz. awk is like Ava, extracting column 3 from CSV for summation, or rearranging log fields into perfect dance formations.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '💃📦'
          }
        },
        professional: {
          summary: 'Compute and reformat column data - the improvisational dance of logs and CSVs',
          useCases: [
            {
              problem: 'Extract columns from CSV and sum values',
              solution: 'awk -F"," \'{sum+=$3} END {print sum}\' data.csv',
              context: 'Data analysis - quick numeric column totals'
            },
            {
              problem: 'Find hot APIs by access frequency',
              solution: 'grep "GET" access.log | awk \'{print $1, $7}\' | sort | uniq -c',
              context: 'Log analysis - identify bottleneck endpoints'
            }
          ]
        },
        history: 'Published in 1977, best for structured text. GNU awk (gawk) extended with network/time functions. Modern alternatives: mawk, nawk.',
        parameters: [
          {
            flag: '-F ","',
            mnemonic: 'field separator',
            usage: 'Define delimiter - how to split fields.'
          },
          {
            flag: 'BEGIN { ... }',
            mnemonic: 'before processing',
            usage: 'Initialize variables and print headers.'
          },
          {
            flag: 'END { ... }',
            mnemonic: 'after processing',
            usage: 'Print totals or final summaries.'
          }
        ],
        alternatives: [
          { name: 'jq', note: 'JSON equivalent, smoother for structured data' },
          { name: 'python', note: 'Move to scripting for complex logic' }
        ]
      }
    },
    pipelineSpark: {
      label: '分镜配色 / API Access Pattern Analysis',
      recipe: 'grep "GET" access.log | awk \'{ print $1, $7 }\' | sort | uniq -c',
      tip: '挑出热门接口，再加计数，像把剧本重点打上荧光 / Highlight popular endpoints with counts, like marking script focus points with highlighters.'
    }
  },
  {
    id: 'tar',
    command: 'tar',
    category: {
      scenario: 'archives',
      frequency: 'medium',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'tape archive',
        beginner: {
          persona: '打包师 Tara',
          story: 'Tara 是剧团的道具打包师，巡演前她把所有布景道具装进大箱子。tar 就像 Tara 的魔法箱，能把整个项目目录压缩成一个.tar.gz文件，方便传输和备份，像把整个舞台装进行李箱。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📦🎭'
          }
        },
        professional: {
          summary: '归档与解包，团队协作的打包带',
          useCases: [
            {
              problem: '备份整个项目目录',
              solution: 'tar -czf backup.tar.gz project/',
              context: '日常维护时创建压缩备份'
            },
            {
              problem: '快速传输多个文件',
              solution: 'tar -cf - files/ | ssh remote "tar -xf -"',
              context: '远程部署时流式传输避免本地空间'
            }
          ]
        },
        history: '最初为了磁带备份（1979），后来和 gzip、bzip2 结盟。BSD tar、GNU tar 支持更丰富的压缩格式。',
        parameters: [
          {
            flag: '-c',
            mnemonic: 'create the cupcake —— 新做一盒蛋糕',
            usage: '创建归档文件。'
          },
          {
            flag: '-x',
            mnemonic: 'x-ray the box —— 打开旧宝盒',
            usage: '解压归档。'
          },
          {
            flag: '-z / -j / -J',
            mnemonic: 'select the syrup —— 选择 gzip / bzip2 / xz 风味',
            usage: '搭配不同压缩算法满足体积或速度需求。'
          }
        ],
        alternatives: [
          { name: 'zip', note: '跨平台通用，Windows 友好。' },
          { name: 'zstd', note: '极快压缩，适合容器镜像。' }
        ]
      },
      en: {
        fullName: 'tape archive',
        beginner: {
          persona: 'Packer Tara',
          story: 'Tara is the theater prop packer. Before tours, she packs all sets and props into big trunks. tar is like Tara\'s magic trunk, compressing entire project directories into .tar.gz files for easy transfer and backup - like packing the whole stage into luggage.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📦🎒'
          }
        },
        professional: {
          summary: 'Archive and extract files - the packaging tape of team collaboration',
          useCases: [
            {
              problem: 'Backup entire project directory',
              solution: 'tar -czf backup.tar.gz project/',
              context: 'Daily maintenance - create compressed backups'
            },
            {
              problem: 'Transfer multiple files efficiently',
              solution: 'tar -cf - files/ | ssh remote "tar -xf -"',
              context: 'Remote deployment - stream to avoid local disk space'
            }
          ]
        },
        history: 'Originally for tape backups (1979), later allied with gzip and bzip2. BSD tar and GNU tar support diverse compression formats.',
        parameters: [
          {
            flag: '-c',
            mnemonic: 'create archive',
            usage: 'Create a new archive file.'
          },
          {
            flag: '-x',
            mnemonic: 'extract files',
            usage: 'Extract files from archive.'
          },
          {
            flag: '-z / -j / -J',
            mnemonic: 'compression format',
            usage: 'Choose gzip / bzip2 / xz for size vs speed tradeoff.'
          }
        ],
        alternatives: [
          { name: 'zip', note: 'Cross-platform, Windows-friendly' },
          { name: 'zstd', note: 'Ultra-fast compression, great for container images' }
        ]
      }
    },
    pipelineSpark: {
      label: '一键打包舞台 / Single-command Package Deploy',
      recipe: 'tar -czf backstage.tar.gz props/ && ls -lh backstage.tar.gz',
      tip: '打完包立即用 ls -lh 确认体积，像在便利贴写下热量 / Verify size immediately after packing, like writing calories on a dessert label.'
    }
  },
  {
    id: 'cd',
    command: 'cd',
    category: {
      scenario: 'file-operations',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'change directory',
        beginner: {
          persona: '导航员 Navi',
          story: 'Navi 是剧团的舞台导航员，负责带演员从化妆间走到舞台中央。cd 就像 Navi 的指路牌，帮你在文件系统的迷宫里快速切换位置，从主目录跳到项目文件夹只需一个命令。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🧭🎭'
          }
        },
        professional: {
          summary: '切换工作目录，是导航代码库的第一步',
          useCases: [
            {
              problem: '进入项目目录开始工作',
              solution: 'cd ~/projects/my-app',
              context: '开发工作流的起点'
            },
            {
              problem: '返回上级目录',
              solution: 'cd ..',
              context: '快速在层级间切换'
            }
          ]
        },
        history: '最初的UNIX导航工具（1971年），简化了文件系统遍历。几乎每个shell都内置了这个命令。',
        parameters: [
          {
            flag: '路径',
            mnemonic: '目标位置 —— 绝对路径或相对路径',
            usage: '指定要切换到的目录。'
          },
          {
            flag: 'cd -',
            mnemonic: '回到上次目录 —— 像舞台记忆',
            usage: '切换回之前的工作目录。'
          },
          {
            flag: 'cd ~',
            mnemonic: '家目录 —— 最熟悉的舞台',
            usage: '快速回到用户主目录。'
          }
        ],
        alternatives: [
          { name: 'pushd/popd', note: '维护目录栈，适合多层级切换' },
          { name: 'autojump/z', note: '智能跳转，记住常用目录' }
        ]
      },
      en: {
        fullName: 'change directory',
        beginner: {
          persona: 'Navigator Navi',
          story: 'Navi is the theater navigator, guiding actors from dressing rooms to center stage. cd is like Navi\'s directional signs, helping you quickly switch locations in the filesystem maze - from home to project folder with one command.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🧭📦'
          }
        },
        professional: {
          summary: 'Switch working directory for file navigation',
          useCases: [
            {
              problem: 'Enter project directory to start work',
              solution: 'cd ~/projects/my-app',
              context: 'Development workflow starting point'
            },
            {
              problem: 'Return to previous directory',
              solution: 'cd -',
              context: 'Quick navigation between two locations'
            }
          ]
        },
        history: 'Original UNIX navigation tool (1971), simplified filesystem traversal. Built into virtually every shell.',
        parameters: [
          {
            flag: 'path',
            mnemonic: 'target location',
            usage: 'Absolute or relative path to directory.'
          },
          {
            flag: 'cd -',
            mnemonic: 'previous directory',
            usage: 'Switch back to last working directory.'
          },
          {
            flag: 'cd ~',
            mnemonic: 'home directory',
            usage: 'Return to user home directory.'
          }
        ],
        alternatives: [
          { name: 'pushd/popd', note: 'Maintain directory stack for multi-level navigation' },
          { name: 'autojump/z', note: 'Smart jumping with frequency-based suggestions' }
        ]
      }
    },
    pipelineSpark: {
      label: '快速导航与任务执行 / Quick Navigation and Task',
      recipe: 'cd ~/projects && pwd && ls -1 | head -5',
      tip: '进入项目目录，确认位置，快速浏览结构 / Enter project, confirm location, preview structure.'
    }
  },
  {
    id: 'pwd',
    command: 'pwd',
    category: {
      scenario: 'file-operations',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'print working directory',
        beginner: {
          persona: '定位员 Perry',
          story: 'Perry 是剧团的定位员，拿着GPS确保大家知道现在在剧院的哪个房间。pwd 就像 Perry 的定位器，随时告诉你当前在文件系统的哪个目录，避免在迷宫里迷路。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📍🎭'
          }
        },
        professional: {
          summary: '显示当前工作目录的完整路径',
          useCases: [
            {
              problem: '确认当前位置，避免操作错误',
              solution: 'pwd',
              context: '脚本执行前验证环境'
            },
            {
              problem: '在shell脚本中获取当前目录路径',
              solution: 'BASEDIR=$(pwd)',
              context: '动态构建文件路径'
            }
          ]
        },
        history: '与cd一样古老（1971年），是UNIX shell的基础工具之一。',
        parameters: [
          {
            flag: '-L',
            mnemonic: '逻辑路径 —— 显示符号链接',
            usage: '显示包含符号链接的逻辑路径。'
          },
          {
            flag: '-P',
            mnemonic: '物理路径 —— 解析真实位置',
            usage: '跟随符号链接，显示真实物理路径。'
          }
        ],
        alternatives: [
          { name: 'echo $PWD', note: '通过环境变量快速查看' },
          { name: 'dirs', note: '显示目录栈中的所有位置' }
        ]
      },
      en: {
        fullName: 'print working directory',
        beginner: {
          persona: 'Locator Perry',
          story: 'Perry is the theater locator with GPS, ensuring everyone knows which room they\'re in. pwd is like Perry\'s locator, always telling you which directory you\'re currently in the filesystem, preventing getting lost in the maze.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📍📦'
          }
        },
        professional: {
          summary: 'Display the absolute path of working directory',
          useCases: [
            {
              problem: 'Confirm current location before operations',
              solution: 'pwd',
              context: 'Verify environment before script execution'
            },
            {
              problem: 'Capture current directory in shell script',
              solution: 'BASEDIR=$(pwd)',
              context: 'Build file paths dynamically'
            }
          ]
        },
        history: 'Ancient as cd (1971), fundamental UNIX shell utility.',
        parameters: [
          {
            flag: '-L',
            mnemonic: 'logical path',
            usage: 'Show path with symbolic links resolved logically.'
          },
          {
            flag: '-P',
            mnemonic: 'physical path',
            usage: 'Show real physical path by following symlinks.'
          }
        ],
        alternatives: [
          { name: 'echo $PWD', note: 'Quick check via environment variable' },
          { name: 'dirs', note: 'Show all locations in directory stack' }
        ]
      }
    },
    pipelineSpark: {
      label: '验证位置后执行 / Verify Location Then Execute',
      recipe: 'pwd && cd src && pwd && ls',
      tip: '每次目录变更后验证位置，确保操作准确 / Verify after each directory change to ensure accuracy.'
    }
  },
  {
    id: 'cp',
    command: 'cp',
    category: {
      scenario: 'file-operations',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'copy file or directory',
        beginner: {
          persona: '复制员 Cora',
          story: 'Cora 是剧团的复制员，能用复印机快速复制剧本。cp 就像 Cora 的复印机，能复制文件和目录，原件保留不动，创建一份完全相同的副本用于备份或实验。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📋🎭'
          }
        },
        professional: {
          summary: '复制文件或目录，保留原文件',
          useCases: [
            {
              problem: '创建配置文件备份',
              solution: 'cp config.json config.json.bak',
              context: '变更前保留安全副本'
            },
            {
              problem: '递归复制整个项目目录',
              solution: 'cp -r old-project/ new-project/',
              context: '快速创建项目副本用于实验'
            }
          ]
        },
        history: '1971年UNIX工具集的一部分，三十年来保持简洁。现代shell通常提供-i交互确认。',
        parameters: [
          {
            flag: '-r',
            mnemonic: 'recursive —— 递归复制',
            usage: '复制目录及其所有子目录和文件。'
          },
          {
            flag: '-i',
            mnemonic: 'interactive —— 交互式确认',
            usage: '覆盖前询问，避免意外删除。'
          },
          {
            flag: '-v',
            mnemonic: 'verbose —— 显示复制过程',
            usage: '打印每个复制的文件名。'
          }
        ],
        alternatives: [
          { name: 'rsync', note: '增量复制，只传输变更部分，速度更快' },
          { name: 'ditto (macOS)', note: '保留更多元数据，专为macOS优化' }
        ]
      },
      en: {
        fullName: 'copy file or directory',
        beginner: {
          persona: 'Copier Cora',
          story: 'Cora is the theater copier who quickly duplicates scripts with her copy machine. cp is like Cora\'s copier, duplicating files and directories while keeping originals intact - perfect for backups or experiments.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📋📦'
          }
        },
        professional: {
          summary: 'Copy files or directories while preserving originals',
          useCases: [
            {
              problem: 'Create backup of configuration file',
              solution: 'cp config.json config.json.bak',
              context: 'Preserve safe copy before modifications'
            },
            {
              problem: 'Recursively copy entire project directory',
              solution: 'cp -r old-project/ new-project/',
              context: 'Quickly create copy for experimentation'
            }
          ]
        },
        history: 'Part of 1971 UNIX toolkit, maintained simplicity for 50+ years. Modern shells add -i for interactive confirmation.',
        parameters: [
          {
            flag: '-r',
            mnemonic: 'recursive copy',
            usage: 'Copy directory and all subdirectories recursively.'
          },
          {
            flag: '-i',
            mnemonic: 'interactive',
            usage: 'Prompt before overwriting, preventing accidents.'
          },
          {
            flag: '-v',
            mnemonic: 'verbose',
            usage: 'Print each filename as it is copied.'
          }
        ],
        alternatives: [
          { name: 'rsync', note: 'Incremental copy, transfers only changes, much faster' },
          { name: 'ditto (macOS)', note: 'Preserves metadata better, macOS-optimized' }
        ]
      }
    },
    pipelineSpark: {
      label: '备份与验证 / Backup and Verification',
      recipe: 'cp -r project project.bak && diff -r project project.bak && echo "Backup verified"',
      tip: '复制后用diff验证，像对账簿逐行核对 / Verify copy with diff like auditing ledgers line-by-line.'
    }
  },
  {
    id: 'mv',
    command: 'mv',
    category: {
      scenario: 'file-operations',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'move or rename file',
        beginner: {
          persona: '搬运工 Mover',
          story: 'Mover 是剧团的道具搬运工，负责把道具从仓库搬到舞台，或者给道具重新贴标签。mv 就像 Mover，既能移动文件到新目录，也能给文件改名，一气呵成不留副本。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🚚🎭'
          }
        },
        professional: {
          summary: '移动或重命名文件与目录，无需复制',
          useCases: [
            {
              problem: '将文件移到新目录',
              solution: 'mv old_file.txt ../archive/old_file.txt',
              context: '清理工作目录，归档旧文件'
            },
            {
              problem: '批量重命名文件',
              solution: 'mv config.yaml config.yaml.old',
              context: '升级配置前备份原配置'
            }
          ]
        },
        history: '同样来自1971年UNIX，解决了cp+rm的效率问题。在同一文件系统内速度极快。',
        parameters: [
          {
            flag: '-i',
            mnemonic: 'interactive —— 交互式确认',
            usage: '覆盖前询问，防止意外。'
          },
          {
            flag: '-v',
            mnemonic: 'verbose —— 显示移动过程',
            usage: '打印每个操作。'
          },
          {
            flag: '-n',
            mnemonic: 'no-clobber —— 不覆盖',
            usage: '若目标存在则跳过，安全模式。'
          }
        ],
        alternatives: [
          { name: 'rename', note: '专用于批量重命名，支持正则' },
          { name: 'mmv', note: '多重移动，支持通配符组合' }
        ]
      },
      en: {
        fullName: 'move or rename file',
        beginner: {
          persona: 'Mover',
          story: 'Mover is the theater prop transporter, moving props from warehouse to stage or relabeling them. mv is like Mover, both moving files to new directories and renaming them - seamlessly without leaving duplicates.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🚚📦'
          }
        },
        professional: {
          summary: 'Move or rename files/directories without copying',
          useCases: [
            {
              problem: 'Move file to archive directory',
              solution: 'mv old_file.txt ../archive/old_file.txt',
              context: 'Clean workspace, archive obsolete files'
            },
            {
              problem: 'Rename configuration before upgrade',
              solution: 'mv config.yaml config.yaml.old',
              context: 'Preserve original config with new name'
            }
          ]
        },
        history: 'From 1971 UNIX, solved inefficiency of cp+rm. Lightning-fast on same filesystem.',
        parameters: [
          {
            flag: '-i',
            mnemonic: 'interactive',
            usage: 'Prompt before overwrite, prevents accidents.'
          },
          {
            flag: '-v',
            mnemonic: 'verbose',
            usage: 'Print each operation.'
          },
          {
            flag: '-n',
            mnemonic: 'no-clobber',
            usage: 'Skip if target exists, safe mode.'
          }
        ],
        alternatives: [
          { name: 'rename', note: 'Dedicated batch rename with regex support' },
          { name: 'mmv', note: 'Multi-move with wildcard pattern matching' }
        ]
      }
    },
    pipelineSpark: {
      label: '重新组织与转移 / Reorganize and Archive',
      recipe: 'mv *.log logs/ && mv logs/ archive-$(date +%Y%m%d) && ls -la archive*',
      tip: '先移动相关文件，再以日期戳命名归档目录，形成清晰的时间线 / Move related files first, then archive with date stamp for clean timeline.'
    }
  },
  {
    id: 'rm',
    command: 'rm',
    category: {
      scenario: 'file-operations',
      frequency: 'high',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'remove file or directory',
        beginner: {
          persona: '清洁工 Remmy',
          story: 'Remmy 是剧团的清洁工，负责清理不要的道具和布景，但她的清理是永久的，没有回收站。rm 就像 Remmy 的碎纸机，一旦删除文件就无法恢复，使用时要格外小心。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🗑️⚠️'
          }
        },
        professional: {
          summary: '永久删除文件或目录，需谨慎使用',
          useCases: [
            {
              problem: '清理临时文件',
              solution: 'rm -f *.tmp *.log',
              context: '减少磁盘占用，保持目录整洁'
            },
            {
              problem: '递归删除整个目录树',
              solution: 'rm -rf build/ dist/',
              context: '清理构建工件，重新编译'
            }
          ]
        },
        history: '1971年UNIX一部分，以永久性著称。没有回收站，所以必须谨慎。现代系统多配rm -i来避免意外。',
        parameters: [
          {
            flag: '-r',
            mnemonic: 'recursive —— 递归删除',
            usage: '删除目录及其所有内容。'
          },
          {
            flag: '-f',
            mnemonic: 'force —— 强制删除',
            usage: '不询问，直接删除只读文件。'
          },
          {
            flag: '-i',
            mnemonic: 'interactive —— 交互式确认',
            usage: '删除前逐一询问，防止误删。'
          }
        ],
        alternatives: [
          { name: 'trash-cli', note: '删到回收站而不是永久删除' },
          { name: 'rm-improved (rip)', note: '安全删除，支持预览和恢复' }
        ]
      },
      en: {
        fullName: 'remove file or directory',
        beginner: {
          persona: 'Cleaner Remmy',
          story: 'Remmy is the theater cleaner who removes unwanted props and sets, but her cleanup is permanent - no recycle bin. rm is like Remmy\'s shredder, once files are deleted they can\'t be recovered, so use with extreme care.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🗑️⚠️'
          }
        },
        professional: {
          summary: 'Permanently delete files or directories - use with caution',
          useCases: [
            {
              problem: 'Clean up temporary files',
              solution: 'rm -f *.tmp *.log',
              context: 'Reduce disk usage, maintain clean directory'
            },
            {
              problem: 'Recursively delete entire directory tree',
              solution: 'rm -rf build/ dist/',
              context: 'Clean build artifacts for fresh compile'
            }
          ]
        },
        history: 'Part of 1971 UNIX, famous for permanence - no recycle bin. Modern systems often alias rm to rm -i to prevent accidents.',
        parameters: [
          {
            flag: '-r',
            mnemonic: 'recursive delete',
            usage: 'Delete directory and all its contents.'
          },
          {
            flag: '-f',
            mnemonic: 'force delete',
            usage: 'Delete without asking, even read-only files.'
          },
          {
            flag: '-i',
            mnemonic: 'interactive',
            usage: 'Prompt before each deletion, prevent accidents.'
          }
        ],
        alternatives: [
          { name: 'trash-cli', note: 'Move to recycle bin instead of permanent deletion' },
          { name: 'rm-improved (rip)', note: 'Safe deletion with preview and recovery options' }
        ]
      }
    },
    pipelineSpark: {
      label: '安全清理与验证 / Safe Cleanup and Verification',
      recipe: 'find . -name "*.tmp" -o -name "*.bak" | head -5 && rm -i *.tmp',
      tip: '先用find预览要删除的文件，再用rm -i逐个确认 / Preview with find first, then confirm each deletion with rm -i.'
    }
  },
  {
    id: 'mkdir',
    command: 'mkdir',
    category: {
      scenario: 'file-operations',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'make directory',
        beginner: {
          persona: '建筑师 Mika',
          story: 'Mika 是剧团的舞台建筑师，负责搭建新的房间和隔间。mkdir 就像 Mika 的建筑图纸，能快速创建新目录，甚至一次性建立多层嵌套的目录结构，为项目打好基础框架。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🏗️🎭'
          }
        },
        professional: {
          summary: '创建新目录，为文件组织奠基础',
          useCases: [
            {
              problem: '创建新项目目录结构',
              solution: 'mkdir -p src/{components,utils,data}',
              context: '项目初始化时快速建立目录树'
            },
            {
              problem: '为每日日志创建专属目录',
              solution: 'mkdir logs-$(date +%Y%m%d)',
              context: '自动化维护，按日期隔离日志'
            }
          ]
        },
        history: '1971年UNIX基础工具，与cd配套使用。-p标志在1987年GNU coreutils引入，支持创建父目录。',
        parameters: [
          {
            flag: '-p',
            mnemonic: 'parents —— 一次创建多层目录',
            usage: '自动创建必要的父目录。'
          },
          {
            flag: '-m',
            mnemonic: 'mode —— 设置权限',
            usage: '指定目录权限（如755）。'
          },
          {
            flag: '-v',
            mnemonic: 'verbose —— 显示创建过程',
            usage: '打印每个创建的目录。'
          }
        ],
        alternatives: [
          { name: 'mkdirat', note: '相对于fd创建目录，更精确控制' },
          { name: 'tmux/screen新窗口', note: '创建虚拟"工作间"而非物理目录' }
        ]
      },
      en: {
        fullName: 'make directory',
        beginner: {
          persona: 'Architect Mika',
          story: 'Mika is the theater architect, building new rooms and compartments. mkdir is like Mika\'s blueprints, quickly creating new directories or even multilevel nested structures - laying the foundation framework for projects.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🏗️📦'
          }
        },
        professional: {
          summary: 'Create directories for file organization',
          useCases: [
            {
              problem: 'Create project directory structure',
              solution: 'mkdir -p src/{components,utils,data}',
              context: 'Initialize project with nested directories'
            },
            {
              problem: 'Create daily log directories',
              solution: 'mkdir logs-$(date +%Y%m%d)',
              context: 'Automated maintenance with date-based isolation'
            }
          ]
        },
        history: 'Fundamental 1971 UNIX tool paired with cd. The -p flag added in 1987 GNU coreutils enables parent directory creation.',
        parameters: [
          {
            flag: '-p',
            mnemonic: 'parents flag',
            usage: 'Automatically create necessary parent directories.'
          },
          {
            flag: '-m',
            mnemonic: 'mode',
            usage: 'Set directory permissions (e.g., 755).'
          },
          {
            flag: '-v',
            mnemonic: 'verbose',
            usage: 'Print each directory created.'
          }
        ],
        alternatives: [
          { name: 'mkdirat', note: 'Create relative to fd for precise control' },
          { name: 'tmux/screen new window', note: 'Create virtual workspace instead of physical directory' }
        ]
      }
    },
    pipelineSpark: {
      label: '批量创建目录结构 / Bulk Directory Structure',
      recipe: 'mkdir -pv project/{src,tests,build,docs} && ls -la project/',
      tip: '创建完整项目骨架，一次性验证结构 / Create complete project skeleton, verify structure in one command.'
    }
  },
  {
    id: 'touch',
    command: 'touch',
    category: {
      scenario: 'file-operations',
      frequency: 'medium',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'change file timestamps or create file',
        beginner: {
          persona: '记录员 Tina',
          story: 'Tina 是剧团的时间记录员，用打卡机记录演员的到场时间。touch 就像 Tina 的打卡机，能创建新的空白签到表（空文件），或者给旧签到表更新时间戳，证明"我在这里"。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '⏰🎭'
          }
        },
        professional: {
          summary: '创建空文件或更新文件修改时间',
          useCases: [
            {
              problem: '快速创建新文件',
              solution: 'touch .env.example',
              context: '为示例配置占位'
            },
            {
              problem: '更新文件时间戳（不修改内容）',
              solution: 'touch -d "2024-01-01" old-file.txt',
              context: '伪造文件日期用于测试'
            }
          ]
        },
        history: '1971年UNIX初代工具，原意是"触摸"文件以更新修改时间。后来发现创建空文件的副作用很有用。',
        parameters: [
          {
            flag: '-a',
            mnemonic: 'access time —— 只改访问时间',
            usage: '仅更新文件的访问时间。'
          },
          {
            flag: '-m',
            mnemonic: 'modify time —— 只改修改时间',
            usage: '仅更新文件的修改时间。'
          },
          {
            flag: '-d',
            mnemonic: 'date —— 指定时间',
            usage: '设置特定日期/时间。'
          }
        ],
        alternatives: [
          { name: 'date > file', note: '创建包含时间戳的有内容文件' },
          { name: 'echo > file', note: '创建包含换行的文件' }
        ]
      },
      en: {
        fullName: 'change file timestamps or create file',
        beginner: {
          persona: 'Timekeeper Tina',
          story: 'Tina is the theater timekeeper with her punch clock, recording when actors arrive. touch is like Tina\'s clock, creating new blank attendance sheets (empty files) or updating old sheets\' timestamps to prove "I was here".',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '⏰📦'
          }
        },
        professional: {
          summary: 'Create empty files or update modification times',
          useCases: [
            {
              problem: 'Quickly create new file',
              solution: 'touch .env.example',
              context: 'Reserve placeholder for example config'
            },
            {
              problem: 'Update file timestamp without content change',
              solution: 'touch -d "2024-01-01" old-file.txt',
              context: 'Fake file dates for testing'
            }
          ]
        },
        history: 'Original 1971 UNIX tool, meant to "touch" files to update modification time. Creating empty files was a useful side effect.',
        parameters: [
          {
            flag: '-a',
            mnemonic: 'access time',
            usage: 'Update only the access time.'
          },
          {
            flag: '-m',
            mnemonic: 'modification time',
            usage: 'Update only the modification time.'
          },
          {
            flag: '-d',
            mnemonic: 'date',
            usage: 'Set specific date/time.'
          }
        ],
        alternatives: [
          { name: 'date > file', note: 'Create file with timestamp content' },
          { name: 'echo > file', note: 'Create file with newline' }
        ]
      }
    },
    pipelineSpark: {
      label: '快速初始化文件框架 / Quick File Initialization',
      recipe: 'touch {.env,.gitignore,README.md} && ls -la | grep -E "^\\." && file *',
      tip: '创建配置文件框架，检查并显示文件类型 / Create config skeleton, inspect and show file types.'
    }
  },
  {
    id: 'sed',
    command: 'sed',
    category: {
      scenario: 'text-processing',
      frequency: 'medium',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'stream editor',
        beginner: {
          persona: '剧本编辑 Sedi',
          story: 'Sedi 是剧团的剧本编辑，能在不打开整本剧本的情况下快速替换台词或删除场景。sed 就像 Sedi 的红笔，一行一行流式处理文本，批量修改配置文件就像改剧本一样高效。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '✏️🎭'
          }
        },
        professional: {
          summary: '流式编辑器，逐行处理文本无需加载全文',
          useCases: [
            {
              problem: '替换文件中的所有匹配文本',
              solution: 'sed "s/old/new/g" file.txt',
              context: '大文件内容替换，高效不占用内存'
            },
            {
              problem: '删除特定行（如注释行）',
              solution: 'sed "/^#/d" config.sh',
              context: '清理配置文件中的注释'
            }
          ]
        },
        history: '1975年在贝尔实验室设计，用于自动化文本编辑。被称为最强大却最神秘的UNIX工具之一。',
        parameters: [
          {
            flag: 's',
            mnemonic: 'substitute —— 替换',
            usage: '替换匹配的文本。'
          },
          {
            flag: 'd',
            mnemonic: 'delete —— 删除',
            usage: '删除匹配的行。'
          },
          {
            flag: 'p',
            mnemonic: 'print —— 打印',
            usage: '打印匹配的行。'
          }
        ],
        alternatives: [
          { name: 'awk', note: '更灵活的文本处理，支持复杂逻辑' },
          { name: 'perl', note: 'PCRE正则，更强大的编程能力' }
        ]
      },
      en: {
        fullName: 'stream editor',
        beginner: {
          persona: 'Script Editor Sedi',
          story: 'Sedi is the theater script editor who quickly replaces lines or deletes scenes without opening the entire script. sed is like Sedi\'s red pen, processing text line by line in streaming fashion - batch modifying config files as efficiently as editing scripts.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '✏️📦'
          }
        },
        professional: {
          summary: 'Stream editor for line-by-line text processing without loading entire file',
          useCases: [
            {
              problem: 'Replace all occurrences in large file',
              solution: 'sed "s/old/new/g" file.txt',
              context: 'Efficient text replacement without memory overhead'
            },
            {
              problem: 'Remove comment lines from config',
              solution: 'sed "/^#/d" config.sh',
              context: 'Clean configuration files'
            }
          ]
        },
        history: 'Designed in 1975 at Bell Labs for automation. Called one of most powerful yet mysterious UNIX tools.',
        parameters: [
          {
            flag: 's',
            mnemonic: 'substitute',
            usage: 'Replace matched text.'
          },
          {
            flag: 'd',
            mnemonic: 'delete',
            usage: 'Delete matched lines.'
          },
          {
            flag: 'p',
            mnemonic: 'print',
            usage: 'Print matched lines.'
          }
        ],
        alternatives: [
          { name: 'awk', note: 'More flexible text processing with complex logic' },
          { name: 'perl', note: 'PCRE regex with powerful programming capabilities' }
        ]
      }
    },
    pipelineSpark: {
      label: '批量编辑与替换 / Batch Editing and Replacement',
      recipe: 'sed -i "s/localhost/127.0.0.1/g" config.txt && sed -n "1,5p" config.txt',
      tip: '原地修改文件再显示前5行验证修改 / Edit in-place then show first 5 lines to verify changes.'
    }
  },
  {
    id: 'cat',
    command: 'cat',
    category: {
      scenario: 'text-processing',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'concatenate and print files',
        beginner: {
          persona: '朗读者 Cate',
          story: 'Cate 是剧团的台词朗读者，能快速朗读剧本内容，也能把多份剧本合并成一个完整故事。cat 就像 Cate，既能快速查看文件内容，也能合并多个文件，一气呵成。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📖🎭'
          }
        },
        professional: {
          summary: '查看文件内容或合并多个文件',
          useCases: [
            {
              problem: '快速查看配置文件内容',
              solution: 'cat .env',
              context: '验证环境变量设置'
            },
            {
              problem: '合并多个日志文件',
              solution: 'cat *.log > combined.log',
              context: '集中分析多份日志'
            }
          ]
        },
        history: '1971年UNIX初代，最古老也最常用的工具。名字来自"concatenate"，但实际上最常用场景是单文件查看。',
        parameters: [
          {
            flag: '-n',
            mnemonic: 'number —— 显示行号',
            usage: '为每行添加行号。'
          },
          {
            flag: '-s',
            mnemonic: 'squeeze —— 压缩空白行',
            usage: '将连续空行压缩为单行。'
          },
          {
            flag: '-A',
            mnemonic: 'show all —— 显示隐藏字符',
            usage: '显示制表符和换行符。'
          }
        ],
        alternatives: [
          { name: 'less / more', note: '分页查看，适合大文件' },
          { name: 'head / tail', note: '只看开头或结尾' }
        ]
      },
      en: {
        fullName: 'concatenate and print files',
        beginner: {
          persona: 'Reader Cate',
          story: 'Cate is the theater script reader who quickly reads script contents or merges multiple scripts into one complete story. cat is like Cate, both quickly viewing file contents and merging multiple files seamlessly.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📖📦'
          }
        },
        professional: {
          summary: 'View file contents or concatenate multiple files',
          useCases: [
            {
              problem: 'Quickly view configuration file',
              solution: 'cat .env',
              context: 'Verify environment variables'
            },
            {
              problem: 'Merge multiple log files',
              solution: 'cat *.log > combined.log',
              context: 'Centralized analysis of logs'
            }
          ]
        },
        history: 'Original 1971 UNIX tool, oldest and most-used. Name from "concatenate" but most common use is single file viewing.',
        parameters: [
          {
            flag: '-n',
            mnemonic: 'number lines',
            usage: 'Add line numbers to each line.'
          },
          {
            flag: '-s',
            mnemonic: 'squeeze',
            usage: 'Compress consecutive blank lines.'
          },
          {
            flag: '-A',
            mnemonic: 'show all',
            usage: 'Show all non-printing characters.'
          }
        ],
        alternatives: [
          { name: 'less / more', note: 'Paging view for large files' },
          { name: 'head / tail', note: 'Show only beginning or end' }
        ]
      }
    },
    pipelineSpark: {
      label: '文件查看与合并 / File Viewing and Merging',
      recipe: 'cat file1.txt file2.txt | wc -l && cat file*.txt > archive.txt',
      tip: '先统计合并后的行数，再完成合并 / Count total lines first, then finalize merge.'
    }
  },
  {
    id: 'head',
    command: 'head',
    category: {
      scenario: 'text-processing',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'output the first part of files',
        beginner: {
          persona: '预览员 Hedda',
          story: 'Hedda 是剧团的剧本预览员，只需要看开头几页就能判断剧本风格。head 就像 Hedda，快速展示文件的开头部分，默认前10行，让你秒懂内容大概。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '👀🎭'
          }
        },
        professional: {
          summary: '显示文件开头部分，快速预览内容',
          useCases: [
            {
              problem: '快速查看日志开始部分',
              solution: 'head -20 app.log',
              context: '了解日志初始状态'
            },
            {
              problem: '检查CSV文件的列结构',
              solution: 'head -1 data.csv',
              context: '确认数据格式'
            }
          ]
        },
        history: '1971年UNIX初代，设计用于快速采样。与tail成对使用，覆盖文件的两端。',
        parameters: [
          {
            flag: '-n',
            mnemonic: 'number —— 指定行数',
            usage: '显示前n行（默认10）。'
          },
          {
            flag: '-c',
            mnemonic: 'characters —— 按字节计数',
            usage: '显示前n个字节。'
          },
          {
            flag: '-q',
            mnemonic: 'quiet —— 不显示文件名',
            usage: '省略文件名头。'
          }
        ],
        alternatives: [
          { name: 'sed "1,Np"', note: '更灵活的行选择' },
          { name: 'awk "NR<=N"', note: '支持条件判断的行提取' }
        ]
      },
      en: {
        fullName: 'output the first part of files',
        beginner: {
          persona: 'Previewer Hedda',
          story: 'Hedda is the theater script previewer who judges script style by reading just the opening pages. head is like Hedda, quickly showing the beginning of files (default 10 lines) so you instantly grasp the content.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '👀📦'
          }
        },
        professional: {
          summary: 'Display the beginning of files for quick preview',
          useCases: [
            {
              problem: 'Quickly view start of large log file',
              solution: 'head -20 app.log',
              context: 'Understand initial log state'
            },
            {
              problem: 'Check CSV column structure',
              solution: 'head -1 data.csv',
              context: 'Confirm data format'
            }
          ]
        },
        history: 'Original 1971 UNIX tool, designed for quick sampling. Pairs with tail to cover both file ends.',
        parameters: [
          {
            flag: '-n',
            mnemonic: 'number of lines',
            usage: 'Show first n lines (default 10).'
          },
          {
            flag: '-c',
            mnemonic: 'characters',
            usage: 'Show first n bytes.'
          },
          {
            flag: '-q',
            mnemonic: 'quiet',
            usage: 'Omit filename header.'
          }
        ],
        alternatives: [
          { name: 'sed "1,Np"', note: 'More flexible line selection' },
          { name: 'awk "NR<=N"', note: 'Conditional line extraction' }
        ]
      }
    },
    pipelineSpark: {
      label: '快速数据采样与预览 / Quick Data Sampling',
      recipe: 'head -1 data.csv && head -3 data.csv | tail -2',
      tip: '先看列头，再看中间数据行 / Show headers first, then middle rows.'
    }
  },
  {
    id: 'tail',
    command: 'tail',
    category: {
      scenario: 'text-processing',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'output the last part of files',
        beginner: {
          persona: '结尾追踪者 Taylor',
          story: 'Taylor 是剧团的结尾追踪者，专门关注剧本的最后几页和最新添加的台词。tail 就像 Taylor，显示文件结尾内容，-f 参数还能实时跟踪日志新增内容，像现场直播一样。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📺🎭'
          }
        },
        professional: {
          summary: '显示文件末尾，实时监测日志增长',
          useCases: [
            {
              problem: '实时监测应用日志',
              solution: 'tail -f app.log',
              context: '开发调试时跟踪最新日志'
            },
            {
              problem: '查看最近提交的git日志',
              solution: 'tail -20 .git/logs/HEAD',
              context: '追踪版本控制历史'
            }
          ]
        },
        history: '1971年UNIX初代，与head配对。-f标志在BSD中引入，实现日志实时跟踪。',
        parameters: [
          {
            flag: '-n',
            mnemonic: 'number —— 指定行数',
            usage: '显示最后n行（默认10）。'
          },
          {
            flag: '-f',
            mnemonic: 'follow —— 实时跟踪',
            usage: '监视文件增长，实时显示新内容。'
          },
          {
            flag: '-F',
            mnemonic: 'follow even if rotated —— 跟踪日志轮转',
            usage: '即使文件被轮转也继续跟踪。'
          }
        ],
        alternatives: [
          { name: 'less +F', note: '分页实时监视' },
          { name: 'journalctl -f', note: 'systemd日志实时跟踪' }
        ]
      },
      en: {
        fullName: 'output the last part of files',
        beginner: {
          persona: 'Ending Tracker Taylor',
          story: 'Taylor is the theater ending tracker, focusing on the last pages of scripts and newly added lines. tail is like Taylor, showing file endings - the -f flag even real-time tracks new log content like a live broadcast.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📺📦'
          }
        },
        professional: {
          summary: 'Display end of files with real-time log monitoring',
          useCases: [
            {
              problem: 'Monitor application logs in real-time',
              solution: 'tail -f app.log',
              context: 'Track latest logs during development debugging'
            },
            {
              problem: 'Check recent git commits',
              solution: 'tail -20 .git/logs/HEAD',
              context: 'Track version control history'
            }
          ]
        },
        history: 'Original 1971 UNIX tool paired with head. The -f flag introduced in BSD enables real-time log tailing.',
        parameters: [
          {
            flag: '-n',
            mnemonic: 'number of lines',
            usage: 'Show last n lines (default 10).'
          },
          {
            flag: '-f',
            mnemonic: 'follow',
            usage: 'Monitor file growth, show new content in real-time.'
          },
          {
            flag: '-F',
            mnemonic: 'follow with rotation',
            usage: 'Continue following even if file is rotated.'
          }
        ],
        alternatives: [
          { name: 'less +F', note: 'Paging real-time monitor' },
          { name: 'journalctl -f', note: 'systemd log real-time tracking' }
        ]
      }
    },
    pipelineSpark: {
      label: '日志实时监控 / Real-time Log Monitoring',
      recipe: 'tail -f app.log | grep -i "error"',
      tip: '实时跟踪日志并过滤错误信息 / Monitor logs in real-time while filtering for errors.'
    }
  },
  {
    id: 'gzip',
    command: 'gzip',
    category: {
      scenario: 'archives',
      frequency: 'medium',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'compress or expand files',
        beginner: {
          persona: '压缩师 Zippy',
          story: 'Zippy 是剧团的道具压缩师，能把大型布景压缩成小包裹方便运输。gzip 就像 Zippy 的真空压缩袋，能把大文件压缩到原来的1/10大小，节省存储空间和传输时间。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🗜️🎭'
          }
        },
        professional: {
          summary: '压缩文件以节省存储和传输带宽',
          useCases: [
            {
              problem: '压缩大日志文件',
              solution: 'gzip app.log',
              context: '归档日志，节省磁盘空间'
            },
            {
              problem: '解压压缩文件',
              solution: 'gzip -d backup.tar.gz',
              context: '恢复备份内容'
            }
          ]
        },
        history: '1992年由Jean-loup Gailly设计，基于DEFLATE算法。成为GNU Zip标准，与tar紧密配合。',
        parameters: [
          {
            flag: '-d',
            mnemonic: 'decompress —— 解压',
            usage: '解压gzip文件。'
          },
          {
            flag: '-k',
            mnemonic: 'keep —— 保留原文件',
            usage: '压缩后保留原文件。'
          },
          {
            flag: '-9',
            mnemonic: 'max compression —— 最大压缩',
            usage: '最高压缩率（较慢）。'
          }
        ],
        alternatives: [
          { name: 'bzip2', note: '更高的压缩率，但速度较慢' },
          { name: 'xz', note: '最高的压缩率，现代标准' }
        ]
      },
      en: {
        fullName: 'compress or expand files',
        beginner: {
          persona: 'Compressor Zippy',
          story: 'Zippy is the theater prop compressor, squeezing large sets into small packages for easy transport. gzip is like Zippy\'s vacuum bags, compressing large files to 1/10 original size, saving storage and transfer time.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🗜️📦'
          }
        },
        professional: {
          summary: 'Compress files to save storage and bandwidth',
          useCases: [
            {
              problem: 'Compress large log files',
              solution: 'gzip app.log',
              context: 'Archive logs and save disk space'
            },
            {
              problem: 'Decompress gzip files',
              solution: 'gzip -d backup.tar.gz',
              context: 'Restore backup contents'
            }
          ]
        },
        history: 'Designed in 1992 by Jean-loup Gailly based on DEFLATE algorithm. Became GNU Zip standard, tightly paired with tar.',
        parameters: [
          {
            flag: '-d',
            mnemonic: 'decompress',
            usage: 'Decompress gzip files.'
          },
          {
            flag: '-k',
            mnemonic: 'keep',
            usage: 'Keep original file after compression.'
          },
          {
            flag: '-9',
            mnemonic: 'max compression',
            usage: 'Highest compression ratio (slower).'
          }
        ],
        alternatives: [
          { name: 'bzip2', note: 'Higher compression ratio but slower speed' },
          { name: 'xz', note: 'Highest compression ratio, modern standard' }
        ]
      }
    },
    pipelineSpark: {
      label: '日志压缩存档 / Log Compression Archive',
      recipe: 'gzip -c app.log > app-$(date +%Y%m%d).log.gz && ls -lh app-*.log.gz',
      tip: '压缩同时保留原文件，显示压缩结果体积 / Compress while keeping original, show compression results.'
    }
  },
  {
    id: 'ps',
    command: 'ps',
    category: {
      scenario: 'system-info',
      frequency: 'medium',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'process status',
        beginner: {
          persona: '监工 Priscilla',
          story: 'Priscilla 是剧团的舞台监工，手持名单检查哪些演员正在台上表演，占用了多少舞台空间。ps 就像 Priscilla 的监控名单，显示所有正在运行的进程和它们的资源占用情况。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '👁️🎭'
          }
        },
        professional: {
          summary: '查看当前进程状态，诊断系统运行情况',
          useCases: [
            {
              problem: '查看所有正在运行的进程',
              solution: 'ps aux',
              context: '系统监测和调试'
            },
            {
              problem: '查找特定应用的进程ID',
              solution: 'ps aux | grep node',
              context: '获取进程号用于kill或kill -9'
            }
          ]
        },
        history: '1971年UNIX初代，提供进程表快照。结合top使用可以获得实时监测。',
        parameters: [
          {
            flag: 'a',
            mnemonic: 'all users —— 显示所有用户进程',
            usage: '显示所有用户的进程。'
          },
          {
            flag: 'u',
            mnemonic: 'user-friendly —— 用户友好格式',
            usage: '显示用户名、CPU使用率等。'
          },
          {
            flag: 'x',
            mnemonic: 'all processes —— 包括后台进程',
            usage: '显示没有控制终端的进程。'
          }
        ],
        alternatives: [
          { name: 'top', note: '实时交互式进程监视' },
          { name: 'htop', note: '更人性化的进程监视工具' }
        ]
      },
      en: {
        fullName: 'process status',
        beginner: {
          persona: 'Supervisor Priscilla',
          story: 'Priscilla is the theater stage supervisor with her roster, checking which actors are performing on stage and how much space they occupy. ps is like Priscilla\'s monitoring list, showing all running processes and their resource usage.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '👁️📦'
          }
        },
        professional: {
          summary: 'View current process status for system diagnosis',
          useCases: [
            {
              problem: 'View all running processes',
              solution: 'ps aux',
              context: 'System monitoring and debugging'
            },
            {
              problem: 'Find process ID of specific application',
              solution: 'ps aux | grep node',
              context: 'Get PID for kill or kill -9 operations'
            }
          ]
        },
        history: 'Original 1971 UNIX tool providing process table snapshot. Combined with top for real-time monitoring.',
        parameters: [
          {
            flag: 'a',
            mnemonic: 'all users',
            usage: 'Show processes for all users.'
          },
          {
            flag: 'u',
            mnemonic: 'user-friendly',
            usage: 'Show username, CPU usage, etc.'
          },
          {
            flag: 'x',
            mnemonic: 'all processes',
            usage: 'Include processes without controlling terminal.'
          }
        ],
        alternatives: [
          { name: 'top', note: 'Real-time interactive process monitor' },
          { name: 'htop', note: 'More user-friendly process monitor' }
        ]
      }
    },
    pipelineSpark: {
      label: '进程监测与过滤 / Process Monitoring and Filtering',
      recipe: 'ps aux | head -1 && ps aux | grep -i node | grep -v grep',
      tip: '显示列头后过滤特定进程 / Show headers first, then filter specific processes.'
    }
  },
  {
    id: 'top',
    command: 'top',
    category: {
      scenario: 'system-info',
      frequency: 'medium',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'display top processes',
        beginner: {
          persona: '实时监督 Topsy',
          story: 'Topsy 是剧团的实时监督员，守着大屏幕实时显示每个演员的体力消耗和舞台占用率。top 就像 Topsy 的监控大屏，动态刷新显示系统资源使用情况，帮你找出"最累"的进程。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📊🎭'
          }
        },
        professional: {
          summary: '实时交互式监视系统进程和资源占用',
          useCases: [
            {
              problem: '实时监测CPU和内存使用情况',
              solution: 'top',
              context: '诊断系统性能瓶颈'
            },
            {
              problem: '找出占用资源最多的进程',
              solution: 'top -o %CPU',
              context: '按CPU使用率排序'
            }
          ]
        },
        history: '1984年在UCB设计，后来由多个开源项目改进。htop是现代的替代品。',
        parameters: [
          {
            flag: '-u',
            mnemonic: 'user —— 显示特定用户进程',
            usage: '只显示指定用户的进程。'
          },
          {
            flag: '-p',
            mnemonic: 'pid —— 显示特定PID',
            usage: '只监控指定进程ID。'
          },
          {
            flag: '-o',
            mnemonic: 'order —— 排序字段',
            usage: '按指定字段排序（%CPU、%MEM等）。'
          }
        ],
        alternatives: [
          { name: 'htop', note: '更直观的彩色交互界面' },
          { name: 'btop', note: '现代的Rust实现，更快更漂亮' }
        ]
      },
      en: {
        fullName: 'display top processes',
        beginner: {
          persona: 'Real-time Supervisor Topsy',
          story: 'Topsy is the theater real-time supervisor watching a big screen showing each actor\'s energy consumption and stage occupation rate. top is like Topsy\'s monitoring dashboard, dynamically refreshing system resource usage to find the "most exhausted" processes.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📊📦'
          }
        },
        professional: {
          summary: 'Real-time interactive system and resource monitoring',
          useCases: [
            {
              problem: 'Monitor CPU and memory usage in real-time',
              solution: 'top',
              context: 'Diagnose system performance bottlenecks'
            },
            {
              problem: 'Find processes consuming most resources',
              solution: 'top -o %CPU',
              context: 'Sort by CPU usage'
            }
          ]
        },
        history: 'Designed in 1984 at UCB, improved by many open-source projects. htop is the modern alternative.',
        parameters: [
          {
            flag: '-u',
            mnemonic: 'user',
            usage: 'Show only processes of specific user.'
          },
          {
            flag: '-p',
            mnemonic: 'pid',
            usage: 'Monitor only specific process ID.'
          },
          {
            flag: '-o',
            mnemonic: 'order',
            usage: 'Sort by specified field (%CPU, %MEM, etc).'
          }
        ],
        alternatives: [
          { name: 'htop', note: 'More intuitive colorful interactive interface' },
          { name: 'btop', note: 'Modern Rust implementation, faster and prettier' }
        ]
      }
    },
    pipelineSpark: {
      label: '实时系统监控 / Real-time System Monitor',
      recipe: 'top -b -n 1 | head -12 && echo "---" && top -b -n 1 | grep -i node',
      tip: '单次输出系统状态并过滤特定进程 / Output system state once and filter specific processes.'
    }
  },
  {
    id: 'chmod',
    command: 'chmod',
    category: {
      scenario: 'permissions',
      frequency: 'medium',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'change mode/permissions',
        beginner: {
          persona: '门卫 Charlie',
          story: 'Charlie 是剧院的门卫，负责发放不同颜色的通行证：绿色可进入（读），黄色可修改布景（写），红色可操控设备（执行）。chmod 就像 Charlie 手中的权限印章，决定文件的访问级别。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🔐🎭'
          }
        },
        professional: {
          summary: '改变文件权限，控制读写执行权限',
          useCases: [
            {
              problem: '让脚本可执行',
              solution: 'chmod +x deploy.sh',
              context: '脚本部署前的权限设置'
            },
            {
              problem: '删除所有人的写权限',
              solution: 'chmod a-w config.json',
              context: '保护配置文件不被误改'
            }
          ]
        },
        history: '1971年UNIX初代，定义了r(读)、w(写)、x(执行)权限体系。八进制表示法兼容至今。',
        parameters: [
          {
            flag: '+/-',
            mnemonic: '添加或删除权限',
            usage: '+添加，-删除权限。'
          },
          {
            flag: 'u/g/o/a',
            mnemonic: 'user/group/other/all',
            usage: '指定权限对象。'
          },
          {
            flag: 'r/w/x',
            mnemonic: 'read/write/execute',
            usage: '指定权限类型。'
          }
        ],
        alternatives: [
          { name: '八进制表示法', note: 'chmod 755 file 更简洁' },
          { name: 'umask', note: '设置默认权限掩码' }
        ]
      },
      en: {
        fullName: 'change mode/permissions',
        beginner: {
          persona: 'Gatekeeper Charlie',
          story: 'Charlie is the theater gatekeeper issuing different colored passes: green for entry (read), yellow for modifying sets (write), red for operating equipment (execute). chmod is like Charlie\'s permission stamp, determining file access levels.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🔐📦'
          }
        },
        professional: {
          summary: 'Change file permissions for read/write/execute control',
          useCases: [
            {
              problem: 'Make script executable',
              solution: 'chmod +x deploy.sh',
              context: 'Permission setup before script deployment'
            },
            {
              problem: 'Remove write permission for all',
              solution: 'chmod a-w config.json',
              context: 'Protect config files from accidental changes'
            }
          ]
        },
        history: 'Original 1971 UNIX, defined r(read), w(write), x(execute) system. Octal notation still compatible today.',
        parameters: [
          {
            flag: '+/-',
            mnemonic: 'add or remove',
            usage: '+ adds, - removes permissions.'
          },
          {
            flag: 'u/g/o/a',
            mnemonic: 'user/group/other/all',
            usage: 'Specify permission target.'
          },
          {
            flag: 'r/w/x',
            mnemonic: 'read/write/execute',
            usage: 'Specify permission type.'
          }
        ],
        alternatives: [
          { name: 'octal notation', note: 'chmod 755 file more concise' },
          { name: 'umask', note: 'Set default permission mask' }
        ]
      }
    },
    pipelineSpark: {
      label: '权限管理与验证 / Permission Management and Verification',
      recipe: 'chmod +x script.sh && ls -l script.sh && ./script.sh --help',
      tip: '修改权限后列出验证，再执行脚本测试 / Verify permission change, then execute script to test.'
    }
  },
  {
    id: 'chown',
    command: 'chown',
    category: {
      scenario: 'permissions',
      frequency: 'low',
      difficulty: 'advanced'
    },
    content: {
      zh: {
        fullName: 'change owner/group',
        beginner: {
          persona: '产权官 Owen',
          story: 'Owen 是剧团的产权官，只有总监授权才能转移道具的所有权和管理组别。chown 就像 Owen 的转让合同，需要 sudo 权限才能变更文件的所有者和所属组，确保资源的正规管理。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '👑🎭'
          }
        },
        professional: {
          summary: '改变文件所有者和所属组，需要root权限',
          useCases: [
            {
              problem: '将文件所有权转移给其他用户',
              solution: 'sudo chown newuser:newgroup file.txt',
              context: '系统管理和文件权限移交'
            },
            {
              problem: '递归改变目录所有者',
              solution: 'sudo chown -R app:app /var/www/app',
              context: '部署应用时设置权限'
            }
          ]
        },
        history: '1971年UNIX初代，通常需要root权限。在多用户系统中管理资源所有权。',
        parameters: [
          {
            flag: 'user',
            mnemonic: '新所有者用户名',
            usage: '指定新的文件所有者。'
          },
          {
            flag: ':group',
            mnemonic: '新所属组',
            usage: '指定新的所属组。'
          },
          {
            flag: '-R',
            mnemonic: 'recursive —— 递归改变',
            usage: '递归改变目录及其内容。'
          }
        ],
        alternatives: [
          { name: '权限组(ACL)', note: '更细粒度的权限控制' },
          { name: 'sudoers配置', note: '限制特定用户的sudo权限' }
        ]
      },
      en: {
        fullName: 'change owner/group',
        beginner: {
          persona: 'Property Officer Owen',
          story: 'Owen is the theater property officer - only with director authorization can he transfer prop ownership and group assignments. chown is like Owen\'s transfer contract, requiring sudo privileges to change file owners and groups, ensuring proper resource management.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '👑📦'
          }
        },
        professional: {
          summary: 'Change file owner and group - requires root privilege',
          useCases: [
            {
              problem: 'Transfer file ownership to another user',
              solution: 'sudo chown newuser:newgroup file.txt',
              context: 'System administration and permission transfer'
            },
            {
              problem: 'Recursively change directory owner',
              solution: 'sudo chown -R app:app /var/www/app',
              context: 'Set permissions when deploying applications'
            }
          ]
        },
        history: 'Original 1971 UNIX, usually requires root. Manages resource ownership in multi-user systems.',
        parameters: [
          {
            flag: 'user',
            mnemonic: 'new owner username',
            usage: 'Specify new file owner.'
          },
          {
            flag: ':group',
            mnemonic: 'new group',
            usage: 'Specify new group.'
          },
          {
            flag: '-R',
            mnemonic: 'recursive',
            usage: 'Recursively change directory and contents.'
          }
        ],
        alternatives: [
          { name: 'ACL permissions', note: 'More granular permission control' },
          { name: 'sudoers config', note: 'Restrict specific users\' sudo rights' }
        ]
      }
    },
    pipelineSpark: {
      label: '权限迁移与验证 / Permission Migration and Verification',
      recipe: 'sudo chown app:app /var/www && sudo ls -la /var/www && stat /var/www',
      tip: '修改后用ls和stat验证所有者和权限 / Verify ownership and permissions with ls and stat.'
    }
  },
  {
    id: 'ip',
    command: 'ip',
    category: {
      scenario: 'networking',
      frequency: 'high',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'internet protocol',
        beginner: {
          persona: '网络管家 Iris',
          story: 'Iris 是剧团的网络管家，负责管理每个演员的"身份证"（IP地址）和通信线路。ip 命令就像 Iris 的管理台，能查看所有网络接口、IP地址、路由信息，是现代 Linux 网络配置的瑞士军刀。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🌐🎭'
          }
        },
        professional: {
          summary: '现代网络配置工具，查看和管理网络接口、IP地址、路由',
          useCases: [
            {
              problem: '查看所有网络接口和IP地址',
              solution: 'ip addr show',
              context: '排查网络连接问题，确认本机IP'
            },
            {
              problem: '查看路由表信息',
              solution: 'ip route show',
              context: '诊断网络路由配置问题'
            },
            {
              problem: '查看网络接口统计信息',
              solution: 'ip -s link',
              context: '监控网络流量和丢包情况'
            }
          ]
        },
        history: '2001年推出，取代老旧的ifconfig。功能更强大，支持多地址、VPN、网桥等现代网络需求。',
        parameters: [
          {
            flag: 'addr',
            mnemonic: 'address —— 查看IP地址',
            usage: '显示网络接口的IP地址信息。'
          },
          {
            flag: 'link',
            mnemonic: 'link layer —— 链路层信息',
            usage: '显示网络接口的MAC地址和状态。'
          },
          {
            flag: 'route',
            mnemonic: 'routing table —— 路由表',
            usage: '显示和管理路由表。'
          },
          {
            flag: '-s',
            mnemonic: 'statistics —— 统计信息',
            usage: '显示网络接口的流量统计。'
          }
        ],
        alternatives: [
          { name: 'ifconfig', note: '传统工具，大多数发行版仍支持' },
          { name: 'nmcli', note: 'NetworkManager命令行工具，更高级' }
        ]
      },
      en: {
        fullName: 'internet protocol',
        beginner: {
          persona: 'Network Manager Iris',
          story: 'Iris is the theater network manager, managing each actor\'s "ID card" (IP address) and communication lines. The ip command is like Iris\'s control panel, viewing all network interfaces, IP addresses, and routing info - the Swiss Army knife of modern Linux networking.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🌐📦'
          }
        },
        professional: {
          summary: 'Modern network configuration tool for viewing and managing interfaces, IPs, and routes',
          useCases: [
            {
              problem: 'View all network interfaces and IP addresses',
              solution: 'ip addr show',
              context: 'Troubleshoot network connectivity, confirm local IP'
            },
            {
              problem: 'View routing table information',
              solution: 'ip route show',
              context: 'Diagnose network routing configuration issues'
            },
            {
              problem: 'View network interface statistics',
              solution: 'ip -s link',
              context: 'Monitor network traffic and packet loss'
            }
          ]
        },
        history: 'Released in 2001, replacing aging ifconfig. More powerful with support for multi-address, VPN, bridges, and modern networking.',
        parameters: [
          {
            flag: 'addr',
            mnemonic: 'address info',
            usage: 'Show IP address information for interfaces.'
          },
          {
            flag: 'link',
            mnemonic: 'link layer',
            usage: 'Show MAC addresses and interface status.'
          },
          {
            flag: 'route',
            mnemonic: 'routing table',
            usage: 'Display and manage routing table.'
          },
          {
            flag: '-s',
            mnemonic: 'statistics',
            usage: 'Show traffic statistics for interfaces.'
          }
        ],
        alternatives: [
          { name: 'ifconfig', note: 'Traditional tool, still supported in most distros' },
          { name: 'nmcli', note: 'NetworkManager CLI, more advanced' }
        ]
      }
    },
    pipelineSpark: {
      label: '快速网络诊断 / Quick Network Diagnosis',
      recipe: 'ip addr show | grep inet && ip route show',
      tip: '先看本机IP，再看路由表，快速了解网络配置 / Check local IP first, then routing table for quick network overview.'
    }
  },
  {
    id: 'ping',
    command: 'ping',
    category: {
      scenario: 'networking',
      frequency: 'high',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'packet internet groper',
        beginner: {
          persona: '信号员 Ping',
          story: 'Ping 是剧团的信号员，负责向远方的剧院发送信号灯，确认对方是否在线。ping 命令就像 Ping 的信号灯，发送网络数据包测试目标主机是否可达，并测量往返时间，是最基础的网络诊断工具。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📡🎭'
          }
        },
        professional: {
          summary: '测试网络连通性和延迟，最基础的网络诊断工具',
          useCases: [
            {
              problem: '测试网络是否连通',
              solution: 'ping google.com',
              context: '快速检查互联网连接是否正常'
            },
            {
              problem: '测试网络延迟',
              solution: 'ping -c 10 8.8.8.8',
              context: '发送10个包测试网络质量和稳定性'
            },
            {
              problem: '持续监控网络连接',
              solution: 'ping -i 5 server.com',
              context: '每5秒ping一次，监控网络稳定性'
            }
          ]
        },
        history: '1983年由Mike Muuss创建，名字来自声纳的"ping"声。是最古老也最常用的网络诊断工具。',
        parameters: [
          {
            flag: '-c',
            mnemonic: 'count —— 发送次数',
            usage: '指定发送的数据包数量。'
          },
          {
            flag: '-i',
            mnemonic: 'interval —— 时间间隔',
            usage: '设置发送数据包的间隔时间（秒）。'
          },
          {
            flag: '-W',
            mnemonic: 'wait time —— 超时时间',
            usage: '设置等待响应的超时时间。'
          },
          {
            flag: '-s',
            mnemonic: 'size —— 包大小',
            usage: '设置发送数据包的大小（字节）。'
          }
        ],
        alternatives: [
          { name: 'mtr', note: '结合ping和traceroute的高级工具' },
          { name: 'fping', note: '支持批量ping多个主机' }
        ]
      },
      en: {
        fullName: 'packet internet groper',
        beginner: {
          persona: 'Signaler Ping',
          story: 'Ping is the theater signaler, sending signal lights to distant theaters to confirm if they\'re online. The ping command is like Ping\'s signal light, sending network packets to test if target hosts are reachable and measuring round-trip time - the most basic network diagnostic tool.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📡📦'
          }
        },
        professional: {
          summary: 'Test network connectivity and latency - the most basic network diagnostic tool',
          useCases: [
            {
              problem: 'Test if network is connected',
              solution: 'ping google.com',
              context: 'Quickly check if internet connection is working'
            },
            {
              problem: 'Test network latency',
              solution: 'ping -c 10 8.8.8.8',
              context: 'Send 10 packets to test network quality and stability'
            },
            {
              problem: 'Continuously monitor network connection',
              solution: 'ping -i 5 server.com',
              context: 'Ping every 5 seconds to monitor network stability'
            }
          ]
        },
        history: 'Created in 1983 by Mike Muuss, named after sonar "ping" sound. The oldest and most commonly used network diagnostic tool.',
        parameters: [
          {
            flag: '-c',
            mnemonic: 'count packets',
            usage: 'Specify number of packets to send.'
          },
          {
            flag: '-i',
            mnemonic: 'interval',
            usage: 'Set interval between sending packets (seconds).'
          },
          {
            flag: '-W',
            mnemonic: 'wait timeout',
            usage: 'Set timeout for waiting for response.'
          },
          {
            flag: '-s',
            mnemonic: 'packet size',
            usage: 'Set size of packets to send (bytes).'
          }
        ],
        alternatives: [
          { name: 'mtr', note: 'Advanced tool combining ping and traceroute' },
          { name: 'fping', note: 'Supports batch pinging multiple hosts' }
        ]
      }
    },
    pipelineSpark: {
      label: '网络质量测试 / Network Quality Test',
      recipe: 'ping -c 10 8.8.8.8 | tail -2',
      tip: '发送10个包后显示统计信息，快速了解丢包率和延迟 / Send 10 packets then show stats to quickly check packet loss and latency.'
    }
  },
  {
    id: 'netstat',
    command: 'netstat',
    category: {
      scenario: 'networking',
      frequency: 'high',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'network statistics',
        beginner: {
          persona: '连接监督 Netta',
          story: 'Netta 是剧团的连接监督，手持详细清单记录每个演员正在通话的对象和使用的电话线路。netstat 就像 Netta 的监控清单，显示所有网络连接、监听端口、路由表，帮你了解网络活动状况。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📞🎭'
          }
        },
        professional: {
          summary: '查看网络连接、端口监听、路由表等网络统计信息',
          useCases: [
            {
              problem: '查看所有监听的端口',
              solution: 'netstat -tuln',
              context: '检查哪些服务正在监听端口'
            },
            {
              problem: '查看哪个程序占用特定端口',
              solution: 'netstat -tulnp | grep :8080',
              context: '查找端口8080被哪个进程占用'
            },
            {
              problem: '查看所有活动连接',
              solution: 'netstat -ant',
              context: '监控当前所有网络连接状态'
            }
          ]
        },
        history: '从早期UNIX系统就存在，是经典的网络诊断工具。现代Linux推荐使用ss作为替代。',
        parameters: [
          {
            flag: '-t',
            mnemonic: 'TCP —— TCP连接',
            usage: '显示TCP连接。'
          },
          {
            flag: '-u',
            mnemonic: 'UDP —— UDP连接',
            usage: '显示UDP连接。'
          },
          {
            flag: '-l',
            mnemonic: 'listening —— 监听端口',
            usage: '只显示正在监听的端口。'
          },
          {
            flag: '-n',
            mnemonic: 'numeric —— 数字显示',
            usage: '用数字显示地址和端口，不解析域名。'
          },
          {
            flag: '-p',
            mnemonic: 'program —— 程序信息',
            usage: '显示占用端口的程序名和PID。'
          }
        ],
        alternatives: [
          { name: 'ss', note: '现代替代品，速度更快' },
          { name: 'lsof', note: '更强大的文件和端口查看工具' }
        ]
      },
      en: {
        fullName: 'network statistics',
        beginner: {
          persona: 'Connection Supervisor Netta',
          story: 'Netta is the theater connection supervisor with a detailed list recording which actors are talking to whom and which phone lines they\'re using. netstat is like Netta\'s monitoring list, showing all network connections, listening ports, and routing tables to help you understand network activity.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📞📦'
          }
        },
        professional: {
          summary: 'View network connections, port listening, routing tables and other network statistics',
          useCases: [
            {
              problem: 'View all listening ports',
              solution: 'netstat -tuln',
              context: 'Check which services are listening on ports'
            },
            {
              problem: 'Find which program is using a specific port',
              solution: 'netstat -tulnp | grep :8080',
              context: 'Find which process is occupying port 8080'
            },
            {
              problem: 'View all active connections',
              solution: 'netstat -ant',
              context: 'Monitor status of all current network connections'
            }
          ]
        },
        history: 'Existed since early UNIX systems, a classic network diagnostic tool. Modern Linux recommends ss as replacement.',
        parameters: [
          {
            flag: '-t',
            mnemonic: 'TCP connections',
            usage: 'Show TCP connections.'
          },
          {
            flag: '-u',
            mnemonic: 'UDP connections',
            usage: 'Show UDP connections.'
          },
          {
            flag: '-l',
            mnemonic: 'listening ports',
            usage: 'Show only listening ports.'
          },
          {
            flag: '-n',
            mnemonic: 'numeric display',
            usage: 'Show addresses and ports numerically, no DNS resolution.'
          },
          {
            flag: '-p',
            mnemonic: 'program info',
            usage: 'Show program name and PID using the port.'
          }
        ],
        alternatives: [
          { name: 'ss', note: 'Modern replacement, much faster' },
          { name: 'lsof', note: 'More powerful file and port viewing tool' }
        ]
      }
    },
    pipelineSpark: {
      label: '端口监听诊断 / Port Listening Diagnosis',
      recipe: 'netstat -tuln | grep LISTEN | sort -k4',
      tip: '列出所有监听端口并按端口号排序 / List all listening ports sorted by port number.'
    }
  },
  {
    id: 'lsof',
    command: 'lsof',
    category: {
      scenario: 'networking',
      frequency: 'medium',
      difficulty: 'advanced'
    },
    content: {
      zh: {
        fullName: 'list open files',
        beginner: {
          persona: '档案管理员 Elsie',
          story: 'Elsie 是剧团的档案管理员，能精确追踪每个演员打开了哪些文件、占用了哪条电话线。lsof 就像 Elsie 的追踪系统，不仅能查看打开的文件，还能看到哪个进程占用哪个端口，是系统诊断的"X光机"。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🔬🎭'
          }
        },
        professional: {
          summary: '列出所有打开的文件和网络连接，强大的系统诊断工具',
          useCases: [
            {
              problem: '查看端口被哪个进程占用',
              solution: 'lsof -i :8080',
              context: '端口冲突时快速定位占用进程'
            },
            {
              problem: '查看某个程序打开的所有文件',
              solution: 'lsof -c nginx',
              context: '调试程序文件访问问题'
            },
            {
              problem: '查看某个用户的所有网络连接',
              solution: 'lsof -u username -i',
              context: '安全审计时检查用户活动'
            }
          ]
        },
        history: '1980年代开发，名字虽然叫"list open files"但功能远不止于此，是系统管理员的瑞士军刀。',
        parameters: [
          {
            flag: '-i',
            mnemonic: 'internet —— 网络连接',
            usage: '显示网络连接，可指定端口如 -i :8080。'
          },
          {
            flag: '-c',
            mnemonic: 'command —— 命令名',
            usage: '显示指定程序打开的文件。'
          },
          {
            flag: '-u',
            mnemonic: 'user —— 用户',
            usage: '显示指定用户打开的文件。'
          },
          {
            flag: '-p',
            mnemonic: 'PID —— 进程ID',
            usage: '显示指定进程打开的文件。'
          }
        ],
        alternatives: [
          { name: 'fuser', note: '查找使用文件或套接字的进程' },
          { name: 'ss', note: '专注网络连接，速度更快' }
        ]
      },
      en: {
        fullName: 'list open files',
        beginner: {
          persona: 'Archive Manager Elsie',
          story: 'Elsie is the theater archive manager, precisely tracking which files each actor has opened and which phone lines they\'re using. lsof is like Elsie\'s tracking system - not only viewing open files but also seeing which process uses which port, the "X-ray machine" of system diagnosis.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🔬📦'
          }
        },
        professional: {
          summary: 'List all open files and network connections - powerful system diagnostic tool',
          useCases: [
            {
              problem: 'Find which process is using a port',
              solution: 'lsof -i :8080',
              context: 'Quickly locate process during port conflicts'
            },
            {
              problem: 'View all files opened by a program',
              solution: 'lsof -c nginx',
              context: 'Debug program file access issues'
            },
            {
              problem: 'View all network connections for a user',
              solution: 'lsof -u username -i',
              context: 'Security audit to check user activity'
            }
          ]
        },
        history: 'Developed in 1980s. Though named "list open files", its functionality extends far beyond - the Swiss Army knife for system administrators.',
        parameters: [
          {
            flag: '-i',
            mnemonic: 'internet connections',
            usage: 'Show network connections, can specify port like -i :8080.'
          },
          {
            flag: '-c',
            mnemonic: 'command name',
            usage: 'Show files opened by specified program.'
          },
          {
            flag: '-u',
            mnemonic: 'user',
            usage: 'Show files opened by specified user.'
          },
          {
            flag: '-p',
            mnemonic: 'process ID',
            usage: 'Show files opened by specified process.'
          }
        ],
        alternatives: [
          { name: 'fuser', note: 'Find processes using files or sockets' },
          { name: 'ss', note: 'Focused on network connections, much faster' }
        ]
      }
    },
    pipelineSpark: {
      label: '端口占用排查 / Port Occupation Investigation',
      recipe: 'lsof -i :8080 && ps aux | grep $(lsof -t -i :8080)',
      tip: '找到占用端口的进程，再查看进程详细信息 / Find process using port, then view process details.'
    }
  },
  {
    id: 'dig',
    command: 'dig',
    category: {
      scenario: 'networking',
      frequency: 'medium',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'domain information groper',
        beginner: {
          persona: 'DNS侦探 Digby',
          story: 'Digby 是剧团的DNS侦探，擅长查找域名背后的真实地址。dig 就像 Digby 的侦查工具，能查询DNS记录、追踪域名解析路径、诊断DNS问题，是网络管理员的必备工具。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🕵️🎭'
          }
        },
        professional: {
          summary: 'DNS查询工具，诊断域名解析问题',
          useCases: [
            {
              problem: '查询域名的A记录（IP地址）',
              solution: 'dig google.com',
              context: '查看域名解析到的IP地址'
            },
            {
              problem: '查询特定类型的DNS记录',
              solution: 'dig google.com MX',
              context: '查询邮件服务器配置'
            },
            {
              problem: '追踪DNS解析路径',
              solution: 'dig +trace google.com',
              context: 'DNS问题排查时追踪解析过程'
            }
          ]
        },
        history: '取代老旧的nslookup，提供更详细的DNS信息和更灵活的查询选项。',
        parameters: [
          {
            flag: '@dns-server',
            mnemonic: '指定DNS服务器 —— 使用特定服务器查询',
            usage: '如 dig @8.8.8.8 google.com。'
          },
          {
            flag: '+trace',
            mnemonic: 'trace path —— 追踪解析路径',
            usage: '显示完整的DNS解析过程。'
          },
          {
            flag: '+short',
            mnemonic: 'short output —— 简短输出',
            usage: '只显示查询结果，不显示详细信息。'
          },
          {
            flag: 'MX/NS/TXT',
            mnemonic: 'record type —— 记录类型',
            usage: '指定查询的DNS记录类型。'
          }
        ],
        alternatives: [
          { name: 'nslookup', note: '传统DNS查询工具，功能较简单' },
          { name: 'host', note: '更简洁的DNS查询命令' }
        ]
      },
      en: {
        fullName: 'domain information groper',
        beginner: {
          persona: 'DNS Detective Digby',
          story: 'Digby is the theater DNS detective, expert at finding real addresses behind domain names. dig is like Digby\'s investigation tool - querying DNS records, tracing domain resolution paths, and diagnosing DNS issues - an essential tool for network administrators.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🕵️📦'
          }
        },
        professional: {
          summary: 'DNS query tool for diagnosing domain resolution issues',
          useCases: [
            {
              problem: 'Query A record (IP address) of domain',
              solution: 'dig google.com',
              context: 'View IP address domain resolves to'
            },
            {
              problem: 'Query specific type of DNS record',
              solution: 'dig google.com MX',
              context: 'Query mail server configuration'
            },
            {
              problem: 'Trace DNS resolution path',
              solution: 'dig +trace google.com',
              context: 'Trace resolution process when troubleshooting DNS'
            }
          ]
        },
        history: 'Replaced aging nslookup, providing more detailed DNS information and more flexible query options.',
        parameters: [
          {
            flag: '@dns-server',
            mnemonic: 'specify DNS server',
            usage: 'E.g., dig @8.8.8.8 google.com.'
          },
          {
            flag: '+trace',
            mnemonic: 'trace resolution path',
            usage: 'Show complete DNS resolution process.'
          },
          {
            flag: '+short',
            mnemonic: 'short output',
            usage: 'Show only query results without details.'
          },
          {
            flag: 'MX/NS/TXT',
            mnemonic: 'record type',
            usage: 'Specify type of DNS record to query.'
          }
        ],
        alternatives: [
          { name: 'nslookup', note: 'Traditional DNS query tool, simpler functionality' },
          { name: 'host', note: 'More concise DNS query command' }
        ]
      }
    },
    pipelineSpark: {
      label: 'DNS快速诊断 / Quick DNS Diagnosis',
      recipe: 'dig +short google.com && dig +short google.com @8.8.8.8',
      tip: '先用默认DNS查询，再用Google DNS对比，排查DNS问题 / Query with default DNS first, then compare with Google DNS to troubleshoot.'
    }
  },
  {
    id: 'curl',
    command: 'curl',
    category: {
      scenario: 'networking',
      frequency: 'high',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'client URL',
        beginner: {
          persona: '快递员 Carly',
          story: 'Carly 是剧团的网络快递员，能从远程服务器获取数据或发送信息。curl 就像 Carly 的快递车，支持HTTP、FTP等多种协议，能下载文件、测试API、发送表单，是开发者的得力助手。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🚀🎭'
          }
        },
        professional: {
          summary: '强大的URL传输工具，支持多种协议的数据传输',
          useCases: [
            {
              problem: '测试API接口',
              solution: 'curl https://api.example.com/users',
              context: 'API开发和调试'
            },
            {
              problem: '下载文件',
              solution: 'curl -O https://example.com/file.zip',
              context: '从网络下载文件到本地'
            },
            {
              problem: '发送POST请求',
              solution: 'curl -X POST -d "name=test" https://api.example.com',
              context: '测试表单提交和API调用'
            }
          ]
        },
        history: '1997年由Daniel Stenberg创建，名字来自"see URL"的谐音。支持20多种协议，是最流行的命令行HTTP客户端。',
        parameters: [
          {
            flag: '-O',
            mnemonic: 'output to file —— 保存为原文件名',
            usage: '下载文件并保持原文件名。'
          },
          {
            flag: '-o',
            mnemonic: 'output filename —— 指定保存文件名',
            usage: '下载并指定保存的文件名。'
          },
          {
            flag: '-X',
            mnemonic: 'request method —— 请求方法',
            usage: '指定HTTP方法（GET/POST/PUT等）。'
          },
          {
            flag: '-d',
            mnemonic: 'data —— 发送数据',
            usage: '发送POST数据。'
          },
          {
            flag: '-H',
            mnemonic: 'header —— HTTP头',
            usage: '添加自定义HTTP头信息。'
          }
        ],
        alternatives: [
          { name: 'wget', note: '专注下载，支持递归下载' },
          { name: 'httpie', note: '更人性化的HTTP客户端' }
        ]
      },
      en: {
        fullName: 'client URL',
        beginner: {
          persona: 'Courier Carly',
          story: 'Carly is the theater network courier, fetching data from remote servers or sending information. curl is like Carly\'s delivery van, supporting HTTP, FTP and many protocols - downloading files, testing APIs, sending forms - a developer\'s powerful assistant.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🚀📦'
          }
        },
        professional: {
          summary: 'Powerful URL transfer tool supporting data transfer over multiple protocols',
          useCases: [
            {
              problem: 'Test API endpoints',
              solution: 'curl https://api.example.com/users',
              context: 'API development and debugging'
            },
            {
              problem: 'Download files',
              solution: 'curl -O https://example.com/file.zip',
              context: 'Download files from network to local'
            },
            {
              problem: 'Send POST request',
              solution: 'curl -X POST -d "name=test" https://api.example.com',
              context: 'Test form submission and API calls'
            }
          ]
        },
        history: 'Created in 1997 by Daniel Stenberg, name is pun on "see URL". Supports 20+ protocols, most popular command-line HTTP client.',
        parameters: [
          {
            flag: '-O',
            mnemonic: 'output to file',
            usage: 'Download file keeping original filename.'
          },
          {
            flag: '-o',
            mnemonic: 'output filename',
            usage: 'Download and specify save filename.'
          },
          {
            flag: '-X',
            mnemonic: 'request method',
            usage: 'Specify HTTP method (GET/POST/PUT etc).'
          },
          {
            flag: '-d',
            mnemonic: 'data',
            usage: 'Send POST data.'
          },
          {
            flag: '-H',
            mnemonic: 'header',
            usage: 'Add custom HTTP header.'
          }
        ],
        alternatives: [
          { name: 'wget', note: 'Focused on downloading, supports recursive downloads' },
          { name: 'httpie', note: 'More user-friendly HTTP client' }
        ]
      }
    },
    pipelineSpark: {
      label: 'API测试与调试 / API Testing and Debugging',
      recipe: 'curl -s https://api.github.com/users/github | jq ".name, .location"',
      tip: '获取API数据并用jq解析JSON，快速提取需要的字段 / Fetch API data and parse JSON with jq to quickly extract needed fields.'
    }
  },
  {
    id: 'which',
    command: 'which',
    category: {
      scenario: 'networking',
      frequency: 'medium',
      difficulty: 'beginner'
    },
    content: {
      zh: {
        fullName: 'locate a command',
        beginner: {
          persona: '寻路者 Willa',
          story: 'Willa 是剧团的寻路者，能快速找到任何工具存放的位置。which 就像 Willa 的寻宝图，能告诉你命令程序的完整路径，帮你确认使用的是哪个版本的程序。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🗺️🎭'
          }
        },
        professional: {
          summary: '查找命令的完整路径，确认使用的程序版本',
          useCases: [
            {
              problem: '查找程序的安装位置',
              solution: 'which python',
              context: '确认使用的是哪个Python版本'
            },
            {
              problem: '检查命令是否安装',
              solution: 'which docker || echo "Docker未安装"',
              context: '脚本中检查依赖是否存在'
            },
            {
              problem: '查看多个命令位置',
              solution: 'which python python3 pip',
              context: '批量检查多个命令的路径'
            }
          ]
        },
        history: '经典UNIX工具，通过搜索PATH环境变量来定位命令。简单但实用。',
        parameters: [
          {
            flag: '-a',
            mnemonic: 'all —— 显示所有匹配',
            usage: '显示PATH中所有匹配的程序路径。'
          }
        ],
        alternatives: [
          { name: 'whereis', note: '不仅查找可执行文件，还查找源码和手册' },
          { name: 'type', note: 'Shell内置命令，显示命令的类型和位置' }
        ]
      },
      en: {
        fullName: 'locate a command',
        beginner: {
          persona: 'Pathfinder Willa',
          story: 'Willa is the theater pathfinder, quickly finding where any tool is stored. which is like Willa\'s treasure map, telling you the complete path of command programs and confirming which version you\'re using.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🗺️📦'
          }
        },
        professional: {
          summary: 'Find complete path of commands, confirm program version in use',
          useCases: [
            {
              problem: 'Find program installation location',
              solution: 'which python',
              context: 'Confirm which Python version is being used'
            },
            {
              problem: 'Check if command is installed',
              solution: 'which docker || echo "Docker not installed"',
              context: 'Check if dependencies exist in scripts'
            },
            {
              problem: 'View locations of multiple commands',
              solution: 'which python python3 pip',
              context: 'Batch check paths of multiple commands'
            }
          ]
        },
        history: 'Classic UNIX tool, locates commands by searching PATH environment variable. Simple but practical.',
        parameters: [
          {
            flag: '-a',
            mnemonic: 'show all matches',
            usage: 'Show all matching program paths in PATH.'
          }
        ],
        alternatives: [
          { name: 'whereis', note: 'Finds executables, source, and manuals' },
          { name: 'type', note: 'Shell builtin showing command type and location' }
        ]
      }
    },
    pipelineSpark: {
      label: '程序路径查找 / Program Path Finding',
      recipe: 'which -a python && ls -la $(which python)',
      tip: '找到所有Python路径，再查看详细信息确认是否为符号链接 / Find all Python paths, then view details to confirm if symlinks.'
    }
  },
  {
    id: 'find',
    command: 'find',
    category: {
      scenario: 'file-operations',
      frequency: 'high',
      difficulty: 'intermediate'
    },
    content: {
      zh: {
        fullName: 'search for files',
        beginner: {
          persona: '寻宝猎人 Finn',
          story: 'Finn 是剧团的寻宝猎人，能在整个剧院的每个角落搜索特定的道具。find 就像 Finn 的探测雷达，能按名称、大小、时间、权限等条件递归搜索文件，是文件查找的终极武器。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🔎🎭'
          }
        },
        professional: {
          summary: '强大的文件搜索工具，支持复杂条件组合和批量操作',
          useCases: [
            {
              problem: '按名称查找文件',
              solution: 'find . -name "*.log"',
              context: '递归查找当前目录下所有.log文件'
            },
            {
              problem: '查找大文件',
              solution: 'find / -type f -size +100M',
              context: '查找系统中大于100MB的文件'
            },
            {
              problem: '查找并删除过期文件',
              solution: 'find /tmp -type f -mtime +7 -delete',
              context: '删除7天前的临时文件，自动清理'
            },
            {
              problem: '查找特定权限的文件',
              solution: 'find . -type f -perm 777',
              context: '查找所有权限为777的文件（安全审计）'
            }
          ]
        },
        history: '最早的UNIX文件查找工具之一，功能强大但语法复杂。现代替代品如fd提供了更友好的接口。',
        parameters: [
          {
            flag: '-name',
            mnemonic: 'filename pattern —— 文件名模式',
            usage: '按文件名查找，支持通配符如 "*.txt"。'
          },
          {
            flag: '-type',
            mnemonic: 'file type —— 文件类型',
            usage: 'f=文件, d=目录, l=符号链接。'
          },
          {
            flag: '-size',
            mnemonic: 'file size —— 文件大小',
            usage: '按大小查找，如 +100M（大于100MB）。'
          },
          {
            flag: '-mtime',
            mnemonic: 'modification time —— 修改时间',
            usage: '按修改时间查找，如 -7（最近7天内）。'
          },
          {
            flag: '-exec',
            mnemonic: 'execute command —— 执行命令',
            usage: '对找到的文件执行命令，如 -exec rm {} \\;。'
          },
          {
            flag: '-delete',
            mnemonic: 'delete files —— 删除文件',
            usage: '直接删除找到的文件（谨慎使用）。'
          }
        ],
        alternatives: [
          { name: 'fd', note: 'Rust实现，速度快且语法友好' },
          { name: 'locate', note: '基于数据库索引，速度快但需更新' },
          { name: 'mlocate', note: 'locate的现代版本' }
        ]
      },
      en: {
        fullName: 'search for files',
        beginner: {
          persona: 'Treasure Hunter Finn',
          story: 'Finn is the theater treasure hunter, searching every corner of the theater for specific props. find is like Finn\'s detection radar, recursively searching files by name, size, time, permissions - the ultimate weapon for file finding.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🔎📦'
          }
        },
        professional: {
          summary: 'Powerful file search tool supporting complex condition combinations and batch operations',
          useCases: [
            {
              problem: 'Find files by name',
              solution: 'find . -name "*.log"',
              context: 'Recursively find all .log files in current directory'
            },
            {
              problem: 'Find large files',
              solution: 'find / -type f -size +100M',
              context: 'Find files larger than 100MB in system'
            },
            {
              problem: 'Find and delete expired files',
              solution: 'find /tmp -type f -mtime +7 -delete',
              context: 'Delete temporary files older than 7 days for auto cleanup'
            },
            {
              problem: 'Find files with specific permissions',
              solution: 'find . -type f -perm 777',
              context: 'Find all files with 777 permissions (security audit)'
            }
          ]
        },
        history: 'One of the earliest UNIX file finding tools, powerful but complex syntax. Modern alternatives like fd provide friendlier interfaces.',
        parameters: [
          {
            flag: '-name',
            mnemonic: 'filename pattern',
            usage: 'Find by filename, supports wildcards like "*.txt".'
          },
          {
            flag: '-type',
            mnemonic: 'file type',
            usage: 'f=file, d=directory, l=symlink.'
          },
          {
            flag: '-size',
            mnemonic: 'file size',
            usage: 'Find by size, e.g., +100M (larger than 100MB).'
          },
          {
            flag: '-mtime',
            mnemonic: 'modification time',
            usage: 'Find by modification time, e.g., -7 (within last 7 days).'
          },
          {
            flag: '-exec',
            mnemonic: 'execute command',
            usage: 'Execute command on found files, e.g., -exec rm {} \\;.'
          },
          {
            flag: '-delete',
            mnemonic: 'delete files',
            usage: 'Directly delete found files (use with caution).'
          }
        ],
        alternatives: [
          { name: 'fd', note: 'Rust implementation, faster with friendly syntax' },
          { name: 'locate', note: 'Database-indexed, fast but needs updates' },
          { name: 'mlocate', note: 'Modern version of locate' }
        ]
      }
    },
    pipelineSpark: {
      label: '文件清理与整理 / File Cleanup and Organization',
      recipe: 'find . -name "*.tmp" -mtime +30 -ls -delete',
      tip: '查找30天前的临时文件，先列出再删除 / Find temp files older than 30 days, list then delete.'
    }
  }
]

// Export pipeline recipes - Advanced combinations
export const pipelineRecipes = [
  {
    title: '晨间侦查：列出演员再锁目标',
    chain: 'ls -1 | grep ".sh" | xargs -I{} chmod +x {}',
    idea: '先点名，再筛脚本，最后赋予执行权限，像排练前给表演者贴彩色徽章。',
    category: 'basic',
    difficulty: 'beginner'
  },
  {
    title: '日志圣代：分层查看甜与咸',
    chain: 'tail -f app.log | grep --color=never "WARN" | tee warn.log',
    idea: '即看即存，tee 像把酱汁分到现场杯与备用瓶。',
    category: 'basic',
    difficulty: 'beginner'
  },
  {
    title: '打包航线：过滤 + 计算 + 打包',
    chain: `grep -r "TODO" src | awk '{ print $1 }' | xargs tar -czf todos.tar.gz`,
    idea: '把 TODO 清单按文件聚合后一次打包，像把便利贴撕下塞进收纳袋。',
    category: 'basic',
    difficulty: 'intermediate'
  },
  {
    title: '网络诊断圣代：IP + 路由 + DNS',
    chain: 'ip addr show | grep inet && ip route | head -3 && dig +short google.com',
    idea: '三层诊断：先看本机地址，再看路由配置，最后测试DNS解析，像检查舞台的网络、灯光、音响。',
    category: 'network',
    difficulty: 'intermediate'
  },
  {
    title: '端口侦探：找出占用者',
    chain: 'lsof -i :8080 | tail -n +2 | awk \'{print $2}\' | xargs ps -p',
    idea: '找到占用端口的PID，再查看进程详情，像追踪谁在占用化妆间。',
    category: 'network',
    difficulty: 'intermediate'
  },
  {
    title: '磁盘清理师：找大户删临时',
    chain: 'find . -type f -size +10M -mtime +7 -exec ls -lh {} \\; | head -10',
    idea: '找出7天前大于10MB的临时文件，先预览再决定删除，像整理道具仓库。',
    category: 'system',
    difficulty: 'intermediate'
  },
  {
    title: '日志统计大师：IP访问排行',
    chain: 'cat access.log | awk \'{print $1}\' | sort | uniq -c | sort -rn | head -10',
    idea: '提取IP → 排序 → 去重计数 → 倒序，找出访问最多的前10个IP，像统计最受欢迎的观众。',
    category: 'analysis',
    difficulty: 'intermediate'
  },
  {
    title: '代码考古学家：提交历史',
    chain: 'git log --oneline --since="1 week ago" | wc -l',
    idea: '统计一周提交数，像回顾排练进度表。',
    category: 'development',
    difficulty: 'beginner'
  },
  {
    title: '权限安全审计：找777漏洞',
    chain: 'find . -type f -perm 777 -ls | awk \'{print $11}\' | head -20',
    idea: '找出所有权限过于开放的文件，潜在安全风险，像检查后台门锁。',
    category: 'security',
    difficulty: 'intermediate'
  },
  {
    title: '进程资源猎手：找内存大户',
    chain: 'ps aux --sort=-%mem | head -6 | awk \'{print $2, $4, $11}\'',
    idea: '按内存使用倒序，提取PID、内存占用、进程名，像找出最耗体力的演员。',
    category: 'system',
    difficulty: 'intermediate'
  },
  {
    title: 'API快速测试：获取JSON字段',
    chain: 'curl -s https://api.github.com/users/github | grep -o \'"login": "[^"]*"\'',
    idea: '获取JSON → 提取特定字段，快速验证API返回，像试吃甜品的一口。',
    category: 'network',
    difficulty: 'advanced'
  },
  {
    title: '文件去重专家：查找重复',
    chain: 'find . -type f -exec md5sum {} + | sort | uniq -w32 -dD',
    idea: '计算所有文件MD5 → 排序 → 找出重复，像找出剧本的副本。',
    category: 'advanced',
    difficulty: 'advanced'
  }
]
