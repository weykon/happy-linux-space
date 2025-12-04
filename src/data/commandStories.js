export const commandStories = [
  {
    id: 'ls',
    command: 'ls',
    fullName: 'list segments',
    persona: '舞台经理 Luna Stage —— "ls" 像排练前点名的舞台监督。',
    story:
      '想像 Luna 拿着珍珠色的灯光清单，在后台一排排点亮设备：她的口头禅是 "列出去，才能安排得漂亮"，所以 ls 总是以平静的语调列出谁在场、谁缺席。',
    history:
      '诞生于 1971 年 AT&T Bell Labs，Kernighan 在最初的 UNIX 工具集里就设计了它。后来 BSD 将排序/着色加入家族，现代平替有 exa、eza。',
    focus:
      '快速浏览目录、与 shell 通配符搭配做批量操作，是所有管道的起点。',
    alternatives: [
      { name: 'exa / eza', note: 'Rust 实现，原生彩色树形输出。' },
      { name: 'find', note: '需要深度遍历或条件过滤时更高效。' }
    ],
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
    pipelineSpark: {
      label: '开场前点兵',
      recipe: 'ls -1 | head -5 | pbcopy',
      tip: '将前 5 个文件名复制到剪贴板，像导演把开场演员写在便签上。'
    }
  },
  {
    id: 'grep',
    command: 'grep',
    fullName: 'global regular expression print',
    persona: '侦探 Greta —— 手持放大镜在台词堆里找关键词。',
    story:
      'Greta 会把日记贴在冰淇淋色的便利贴上，每张代表一段日志。她用正则像线索，把目标资料钉在软木板。',
    history:
      '名字来自 ed 编辑命令 g/re/p，随着 1973 年 UNIX V4 发布。现代加速款有 ripgrep、ugrep，支持并行和编码检测。',
    focus:
      '检索文本、日志与配置，是排查故障的放大镜。',
    alternatives: [
      { name: 'ripgrep (rg)', note: 'Rust 写就，自动忽略 .gitignore，速度飞快。' },
      { name: 'ag / ugrep', note: '支持 PCRE2、语法高亮，更适合复杂模式。' }
    ],
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
    pipelineSpark: {
      label: '日志冰淇淋分层',
      recipe: 'grep -nE "ERROR|WARN" app.log | cut -d":" -f1-2',
      tip: '把重点行切出来，像剥开圣代的果酱层。'
    }
  },
  {
    id: 'awk',
    command: 'awk',
    fullName: 'Aho, Weinberger, Kernighan',
    persona: '剧本医生 A.W.K —— 三位编剧联手的对话剪辑器。',
    story:
      '他们像颜色不同的冰淇淋球：Aho 是草莓控制节奏，Weinberger 是抹茶安排变量，Kernighan 是香草负责输出。',
    history:
      '1977 年发表，最适合结构化文本。GNU awk (gawk) 继续拓展网络、时间函数，现代平替有 mawk、nawk。',
    focus:
      '对列数据做计算或格式化，是日志与 CSV 的即兴编舞。',
    alternatives: [
      { name: 'jq', note: 'JSON 世界的同类，结构化数据时更轻松。' },
      { name: 'python -m tabulate', note: '需要复杂逻辑时可以转向脚本语言。' }
    ],
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
    pipelineSpark: {
      label: '分镜配色',
      recipe: `grep "GET" access.log | awk '{ print $1, $7 }' | sort | uniq -c`,
      tip: '挑出热门接口，再加计数，像把剧本重点打上荧光。'
    }
  },
  {
    id: 'tar',
    command: 'tar',
    fullName: 'tape archive',
    persona: '收藏家 Tara —— 把零散 props 打包进丝绒箱。',
    story:
      'Tara 会给每个压缩包写上味道标签：「香草备份」「抹茶上线」。她懂得为长途旅行做轻量组合。',
    history:
      '最初为了磁带备份（1979），后来和 gzip、bzip2 结盟。BSD tar、GNU tar 支持更丰富的压缩格式。',
    focus:
      '归档与解包，团队协作的打包带。',
    alternatives: [
      { name: 'zip', note: '跨平台通用，Windows 友好。' },
      { name: 'zstd', note: '极快压缩，适合容器镜像。' }
    ],
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
    pipelineSpark: {
      label: '一键打包舞台',
      recipe: 'tar -czf backstage.tar.gz props/ && ls -lh backstage.tar.gz',
      tip: '打完包立即用 ls -lh 确认体积，像在便利贴写下热量。'
    }
  }
]

export const pipelineRecipes = [
  {
    title: '晨间侦查：列出演员再锁目标',
    chain: 'ls -1 | grep ".sh" | xargs -I{} chmod +x {}',
    idea: '先点名，再筛脚本，最后赋予执行权限，像排练前给表演者贴彩色徽章。'
  },
  {
    title: '日志圣代：分层查看甜与咸',
    chain: 'tail -f app.log | grep --color=never "WARN" | tee warn.log',
    idea: '即看即存，tee 像把酱汁分到现场杯与备用瓶。'
  },
  {
    title: '打包航线：过滤 + 计算 + 打包',
    chain: `grep -r "TODO" src | awk '{ print $1 }' | xargs tar -czf todos.tar.gz`,
    idea: '把 TODO 清单按文件聚合后一次打包，像把便利贴撕下塞进收纳袋。'
  }
]
