// 系统概念数据 - System Concepts Data
// 用剧院比喻系统，保持"甜品级"学习体验

export const systemConcepts = [
  {
    id: 'user-permissions',
    title: {
      zh: '用户与权限系统',
      en: 'User & Permission System'
    },
    category: {
      difficulty: 'beginner',
      topic: 'security'
    },
    content: {
      zh: {
        beginner: {
          persona: '剧院门票管理员 Percy',
          story: 'Percy 是剧院的门票管理员，他给不同观众发不同颜色的票：金票（root超级用户）能去任何地方，银票（普通用户）只能去指定区域，铜票（受限用户）只能站在走廊。每个座位（文件）上都贴着三个标签：主人能做什么（owner权限）、同行的朋友能做什么（group权限）、其他陌生人能做什么（others权限）。读(r)、写(w)、执行(x) 就像"能看、能写字、能坐下"三种权限。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🎫🔐'
          }
        },
        professional: {
          summary: 'Linux多用户权限模型，基于UID/GID和rwx权限位实现访问控制',
          keyPoints: [
            {
              concept: 'root vs 普通用户',
              explanation: 'UID 0 是超级用户，拥有系统全部权限；普通用户UID>=1000，受权限限制',
              example: 'sudo 命令临时获得root权限执行特定操作'
            },
            {
              concept: '权限三元组 rwx',
              explanation: 'read(4) write(2) execute(1) 组合成八进制数字，如755=rwxr-xr-x',
              example: 'chmod 755 script.sh 让所有人能执行脚本但只有owner能修改'
            },
            {
              concept: '用户组（Group）',
              explanation: '将多个用户归类管理，简化权限分配，一个用户可属于多个组',
              example: 'usermod -aG docker username 将用户加入docker组以使用docker命令'
            },
            {
              concept: 'setuid/setgid/sticky bit',
              explanation: '特殊权限位：setuid让程序以owner身份运行，sticky bit保护共享目录',
              example: '/usr/bin/passwd 有setuid权限，普通用户能改自己密码但实际以root权限修改/etc/shadow'
            }
          ],
          useCases: [
            {
              scenario: '多人协作项目权限设置',
              solution: 'chgrp team project/ && chmod 770 project/',
              reasoning: '设置团队组权限，组内成员完全控制，其他人无法访问'
            },
            {
              scenario: '保护敏感配置文件',
              solution: 'chmod 600 ~/.ssh/id_rsa',
              reasoning: '私钥文件只允许owner读写，防止其他用户窃取'
            },
            {
              scenario: '创建共享上传目录',
              solution: 'chmod 1777 /tmp/uploads',
              reasoning: 'sticky bit(1)确保用户只能删除自己上传的文件'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Ticket Manager Percy',
          story: 'Percy is the theater ticket manager who issues different colored tickets to different audiences: gold tickets (root superuser) grant access anywhere, silver tickets (regular users) allow entry to designated areas only, bronze tickets (restricted users) can only stand in the hallway. Each seat (file) has three labels: what the owner can do (owner permissions), what accompanying friends can do (group permissions), and what strangers can do (others permissions). Read(r), write(w), execute(x) are like "can view, can write, can sit down" - three types of permissions.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🎫🔐'
          }
        },
        professional: {
          summary: 'Linux multi-user permission model implementing access control via UID/GID and rwx permission bits',
          keyPoints: [
            {
              concept: 'root vs regular users',
              explanation: 'UID 0 is superuser with full system privileges; regular users have UID>=1000 with restricted permissions',
              example: 'sudo command grants temporary root privileges for specific operations'
            },
            {
              concept: 'rwx permission triplets',
              explanation: 'read(4) write(2) execute(1) combine into octal numbers like 755=rwxr-xr-x',
              example: 'chmod 755 script.sh allows everyone to execute but only owner can modify'
            },
            {
              concept: 'User Groups',
              explanation: 'Group multiple users for simplified permission management, users can belong to multiple groups',
              example: 'usermod -aG docker username adds user to docker group for docker command access'
            },
            {
              concept: 'setuid/setgid/sticky bit',
              explanation: 'Special permission bits: setuid runs programs as owner, sticky bit protects shared directories',
              example: '/usr/bin/passwd has setuid, allowing regular users to change their password while actually modifying /etc/shadow as root'
            }
          ],
          useCases: [
            {
              scenario: 'Multi-user project permission setup',
              solution: 'chgrp team project/ && chmod 770 project/',
              reasoning: 'Set team group permissions for full control by team members, no access for others'
            },
            {
              scenario: 'Protect sensitive configuration files',
              solution: 'chmod 600 ~/.ssh/id_rsa',
              reasoning: 'Private key accessible only by owner to prevent theft by other users'
            },
            {
              scenario: 'Create shared upload directory',
              solution: 'chmod 1777 /tmp/uploads',
              reasoning: 'sticky bit(1) ensures users can only delete their own uploaded files'
            }
          ]
        }
      }
    }
  },

  {
    id: 'file-system',
    title: {
      zh: '文件系统结构',
      en: 'File System Structure'
    },
    category: {
      difficulty: 'beginner',
      topic: 'system'
    },
    content: {
      zh: {
        beginner: {
          persona: '剧院建筑师 Archie',
          story: 'Archie 设计了整个剧院的布局：/ 是大门（根目录），/home 是每个演员的更衣室（用户家目录），/etc 是规则手册存放室（配置文件），/var 是道具仓库（变化的数据），/usr 是共享的化妆间和工具房（系统程序），/tmp 是演出后要清空的临时垃圾桶（临时文件），/boot 是剧院的电源开关房（启动文件），/dev 是舞台机关控制器（设备文件）。每个房间都有固定用途，不能乱放东西。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🏛️🗺️'
          }
        },
        professional: {
          summary: 'FHS（Filesystem Hierarchy Standard）定义Linux目录树结构和用途',
          keyPoints: [
            {
              concept: '/ 根目录',
              explanation: '文件系统的最顶层，所有目录的起点，包含系统启动必需的基础目录',
              example: 'cd / 到达根目录查看系统整体结构'
            },
            {
              concept: '/home 用户家目录',
              explanation: '每个普通用户的私人空间，存储个人文件、配置、数据',
              example: '/home/john 是john用户的工作空间，~快捷符号指向当前用户家目录'
            },
            {
              concept: '/etc 系统配置',
              explanation: 'et cetera（等等）的缩写，存放系统和应用的配置文件',
              example: '/etc/nginx/nginx.conf 是nginx服务器配置，/etc/passwd 是用户账户信息'
            },
            {
              concept: '/var 可变数据',
              explanation: 'variable data，存储经常变化的数据：日志、缓存、数据库',
              example: '/var/log 存放系统日志，/var/www 常用于网站文件'
            },
            {
              concept: '/usr Unix System Resources',
              explanation: '系统级程序和库，usr≠user，包含系统软件资源',
              example: '/usr/bin 存放用户命令，/usr/lib 存放共享库'
            },
            {
              concept: '/tmp 临时文件',
              explanation: '临时存储空间，系统重启时通常清空，权限宽松',
              example: '编译时的中间文件、下载的临时文件'
            }
          ],
          useCases: [
            {
              scenario: '查找应用配置文件',
              solution: 'ls /etc/nginx/ 或 ~/.config/appname/',
              reasoning: '系统级配置在/etc，用户级配置在~/.config'
            },
            {
              scenario: '排查应用错误日志',
              solution: 'tail -f /var/log/syslog 或应用特定日志',
              reasoning: '/var/log是日志标准位置，-f实时监控新日志'
            },
            {
              scenario: '安装目录选择',
              solution: '系统软件→/usr/local，用户软件→~/bin或~/opt',
              reasoning: '遵循FHS标准便于管理和权限控制'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Theater Architect Archie',
          story: 'Archie designed the entire theater layout: / is the main entrance (root directory), /home is each actor\'s dressing room (user home directories), /etc is the rulebook storage room (configuration files), /var is the props warehouse (variable data), /usr is shared makeup rooms and tool storage (system programs), /tmp is the temporary trash bin cleared after performances (temporary files), /boot is the theater\'s power switch room (boot files), /dev is the stage machinery controller (device files). Each room has a fixed purpose and items can\'t be placed randomly.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🏛️🗺️'
          }
        },
        professional: {
          summary: 'FHS (Filesystem Hierarchy Standard) defines Linux directory tree structure and purposes',
          keyPoints: [
            {
              concept: '/ root directory',
              explanation: 'Top level of filesystem, starting point of all directories, contains essential directories for system boot',
              example: 'cd / navigates to root directory to view overall system structure'
            },
            {
              concept: '/home user directories',
              explanation: 'Private space for each regular user to store personal files, configs, and data',
              example: '/home/john is john\'s workspace, ~ shortcut points to current user\'s home'
            },
            {
              concept: '/etc system configuration',
              explanation: 'Short for "et cetera", stores system and application configuration files',
              example: '/etc/nginx/nginx.conf is nginx config, /etc/passwd is user account info'
            },
            {
              concept: '/var variable data',
              explanation: 'Stores frequently changing data: logs, cache, databases',
              example: '/var/log stores system logs, /var/www commonly used for website files'
            },
            {
              concept: '/usr Unix System Resources',
              explanation: 'System-level programs and libraries, usr≠user, contains system software resources',
              example: '/usr/bin stores user commands, /usr/lib stores shared libraries'
            },
            {
              concept: '/tmp temporary files',
              explanation: 'Temporary storage space, usually cleared on reboot, permissive permissions',
              example: 'Intermediate compilation files, temporary downloads'
            }
          ],
          useCases: [
            {
              scenario: 'Locate application config files',
              solution: 'ls /etc/nginx/ or ~/.config/appname/',
              reasoning: 'System-wide configs in /etc, user configs in ~/.config'
            },
            {
              scenario: 'Troubleshoot application error logs',
              solution: 'tail -f /var/log/syslog or app-specific logs',
              reasoning: '/var/log is standard log location, -f monitors new logs in real-time'
            },
            {
              scenario: 'Choose installation directory',
              solution: 'System software→/usr/local, user software→~/bin or ~/opt',
              reasoning: 'Following FHS standards facilitates management and permission control'
            }
          ]
        }
      }
    }
  },

  {
    id: 'process-management',
    title: {
      zh: '进程管理',
      en: 'Process Management'
    },
    category: {
      difficulty: 'intermediate',
      topic: 'system'
    },
    content: {
      zh: {
        beginner: {
          persona: '舞台节目调度员 Sched',
          story: 'Sched 是剧院的节目调度员，她手里有个节目单（进程列表），每个节目都有编号（PID）、演出时间、占用舞台大小（内存）、演员数量（线程）。有些节目在前台表演（前台进程），观众能看见；有些在后台排练（后台进程），观众看不见但一直在进行。Sched 可以暂停节目（SIGSTOP）、继续演出（SIGCONT）、紧急叫停（SIGKILL），还能调整节目优先级（nice值）决定谁先上台。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🎬📋'
          }
        },
        professional: {
          summary: 'Linux进程调度、生命周期管理和资源控制机制',
          keyPoints: [
            {
              concept: 'PID与进程树',
              explanation: '每个进程有唯一PID，init/systemd(PID 1)是所有进程的祖先，形成树状结构',
              example: 'pstree查看进程树，$$变量获取当前shell的PID'
            },
            {
              concept: '前台 vs 后台进程',
              explanation: '前台进程占用终端等待交互，后台进程用&启动，释放终端继续工作',
              example: 'command & 后台运行，jobs查看后台任务，fg/bg切换前后台'
            },
            {
              concept: '信号（Signals）',
              explanation: 'Unix进程间通信机制，常用信号：SIGTERM(15)优雅终止，SIGKILL(9)强制杀死，SIGHUP(1)重载配置',
              example: 'kill -15 <PID> 发送终止信号，nginx -s reload 发送SIGHUP重载配置'
            },
            {
              concept: '优先级与nice值',
              explanation: 'nice值(-20到19)控制CPU调度优先级，数值越小优先级越高',
              example: 'nice -n 10 command 以低优先级运行，renice调整运行中进程'
            },
            {
              concept: '僵尸进程与孤儿进程',
              explanation: '僵尸进程：已终止但父进程未回收，孤儿进程：父进程先终止被init收养',
              example: 'ps aux | grep defunct 查找僵尸进程'
            }
          ],
          useCases: [
            {
              scenario: '后台运行耗时任务不阻塞终端',
              solution: 'nohup python train.py > output.log 2>&1 &',
              reasoning: 'nohup防止关闭终端后进程终止，&后台运行，重定向输出到日志'
            },
            {
              scenario: '优雅重启服务不中断连接',
              solution: 'systemctl reload nginx 或 kill -HUP $(cat /var/run/nginx.pid)',
              reasoning: 'SIGHUP信号触发重载配置，不杀死现有连接'
            },
            {
              scenario: '限制CPU密集任务影响系统',
              solution: 'nice -n 19 compress-videos.sh',
              reasoning: '最低优先级运行，避免影响其他关键服务'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Stage Scheduler Sched',
          story: 'Sched is the theater\'s program scheduler with a show list (process list). Each show has a number (PID), performance time, stage size occupied (memory), and number of actors (threads). Some shows perform on stage (foreground processes) visible to the audience; some rehearse backstage (background processes) invisible but ongoing. Sched can pause shows (SIGSTOP), resume performances (SIGCONT), emergency stop (SIGKILL), and adjust show priority (nice value) to decide who goes on stage first.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🎬📋'
          }
        },
        professional: {
          summary: 'Linux process scheduling, lifecycle management, and resource control mechanisms',
          keyPoints: [
            {
              concept: 'PID and process tree',
              explanation: 'Each process has unique PID, init/systemd(PID 1) is ancestor of all processes, forming tree structure',
              example: 'pstree views process tree, $$ variable gets current shell PID'
            },
            {
              concept: 'Foreground vs background processes',
              explanation: 'Foreground processes occupy terminal awaiting interaction, background processes launched with & free terminal',
              example: 'command & runs in background, jobs lists background tasks, fg/bg switches foreground/background'
            },
            {
              concept: 'Signals',
              explanation: 'Unix inter-process communication mechanism, common signals: SIGTERM(15) graceful termination, SIGKILL(9) force kill, SIGHUP(1) reload config',
              example: 'kill -15 <PID> sends termination signal, nginx -s reload sends SIGHUP to reload config'
            },
            {
              concept: 'Priority and nice values',
              explanation: 'nice value(-20 to 19) controls CPU scheduling priority, lower number = higher priority',
              example: 'nice -n 10 command runs with low priority, renice adjusts running process'
            },
            {
              concept: 'Zombie and orphan processes',
              explanation: 'Zombie: terminated but not reaped by parent, Orphan: parent terminated first, adopted by init',
              example: 'ps aux | grep defunct finds zombie processes'
            }
          ],
          useCases: [
            {
              scenario: 'Run time-consuming task in background without blocking terminal',
              solution: 'nohup python train.py > output.log 2>&1 &',
              reasoning: 'nohup prevents termination when closing terminal, & runs in background, redirects output to log'
            },
            {
              scenario: 'Gracefully restart service without interrupting connections',
              solution: 'systemctl reload nginx or kill -HUP $(cat /var/run/nginx.pid)',
              reasoning: 'SIGHUP signal triggers config reload without killing existing connections'
            },
            {
              scenario: 'Limit CPU-intensive task impact on system',
              solution: 'nice -n 19 compress-videos.sh',
              reasoning: 'Run at lowest priority to avoid affecting other critical services'
            }
          ]
        }
      }
    }
  },

  {
    id: 'environment-variables',
    title: {
      zh: '环境变量',
      en: 'Environment Variables'
    },
    category: {
      difficulty: 'beginner',
      topic: 'system'
    },
    content: {
      zh: {
        beginner: {
          persona: '剧院规则手册管理员 Envy',
          story: 'Envy 管理着剧院的规则手册，里面记录着各种"默认设置"：PATH 记录着去哪些房间找工具（命令搜索路径），HOME 记录着你的更衣室在哪（家目录），LANG 记录着剧院用什么语言交流（系统语言），USER 记录着你的名字（当前用户）。每个演员进场时都会拿到一份规则手册副本，有些规则只对你有效（局部变量），有些规则全剧院通用（全局变量）。你可以临时修改规则（export），也可以写进你的个人手册（~/.bashrc）让每次进场都生效。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📜🔧'
          }
        },
        professional: {
          summary: 'Shell环境变量系统，配置程序运行时环境和行为',
          keyPoints: [
            {
              concept: 'PATH 命令搜索路径',
              explanation: '冒号分隔的目录列表，shell按顺序查找可执行文件',
              example: 'echo $PATH 查看当前路径，export PATH=$PATH:/new/path 添加新路径'
            },
            {
              concept: 'HOME 用户家目录',
              explanation: '当前用户的主目录路径，~ 符号的展开目标',
              example: 'cd ~ 等同于 cd $HOME，配置文件通常放在 $HOME/.config'
            },
            {
              concept: '局部 vs 环境变量',
              explanation: '局部变量仅当前shell可见，export导出为环境变量子进程可继承',
              example: 'VAR=value 局部变量，export VAR=value 环境变量'
            },
            {
              concept: '配置文件加载顺序',
              explanation: 'Login shell: /etc/profile → ~/.bash_profile → ~/.bashrc，Non-login: ~/.bashrc',
              example: '永久设置写入~/.bashrc，source ~/.bashrc 立即生效'
            },
            {
              concept: '常用系统变量',
              explanation: 'USER当前用户，PWD当前目录，SHELL当前shell，LANG语言环境',
              example: 'env 查看所有环境变量，printenv PATH 查看特定变量'
            }
          ],
          useCases: [
            {
              scenario: '添加自定义脚本到PATH',
              solution: 'echo \'export PATH=$PATH:~/bin\' >> ~/.bashrc && source ~/.bashrc',
              reasoning: '将~/bin加入PATH后，该目录脚本可直接执行无需完整路径'
            },
            {
              scenario: '配置应用运行环境',
              solution: 'export NODE_ENV=production && npm start',
              reasoning: '临时设置环境变量控制应用行为，仅影响当前命令'
            },
            {
              scenario: '修改默认编辑器',
              solution: 'echo \'export EDITOR=vim\' >> ~/.bashrc',
              reasoning: '设置EDITOR变量，git commit等命令自动使用vim'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Theater Rulebook Manager Envy',
          story: 'Envy manages the theater\'s rulebook recording various "default settings": PATH records which rooms to find tools (command search path), HOME records where your dressing room is (home directory), LANG records what language the theater uses (system language), USER records your name (current user). Each actor receives a copy of the rulebook upon entry. Some rules only apply to you (local variables), some rules apply theater-wide (global variables). You can temporarily modify rules (export) or write them in your personal handbook (~/.bashrc) to take effect every time you enter.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📜🔧'
          }
        },
        professional: {
          summary: 'Shell environment variable system configuring program runtime environment and behavior',
          keyPoints: [
            {
              concept: 'PATH command search path',
              explanation: 'Colon-separated directory list, shell searches for executables in order',
              example: 'echo $PATH views current path, export PATH=$PATH:/new/path adds new path'
            },
            {
              concept: 'HOME user home directory',
              explanation: 'Current user\'s main directory path, target of ~ symbol expansion',
              example: 'cd ~ equals cd $HOME, config files typically in $HOME/.config'
            },
            {
              concept: 'Local vs environment variables',
              explanation: 'Local variables visible only in current shell, export makes environment variable inheritable by child processes',
              example: 'VAR=value local variable, export VAR=value environment variable'
            },
            {
              concept: 'Configuration file load order',
              explanation: 'Login shell: /etc/profile → ~/.bash_profile → ~/.bashrc, Non-login: ~/.bashrc',
              example: 'Write permanent settings to ~/.bashrc, source ~/.bashrc takes effect immediately'
            },
            {
              concept: 'Common system variables',
              explanation: 'USER current user, PWD current directory, SHELL current shell, LANG language environment',
              example: 'env views all environment variables, printenv PATH views specific variable'
            }
          ],
          useCases: [
            {
              scenario: 'Add custom scripts to PATH',
              solution: 'echo \'export PATH=$PATH:~/bin\' >> ~/.bashrc && source ~/.bashrc',
              reasoning: 'Adding ~/bin to PATH allows direct script execution without full path'
            },
            {
              scenario: 'Configure application runtime environment',
              solution: 'export NODE_ENV=production && npm start',
              reasoning: 'Temporarily set environment variable to control app behavior, affects only current command'
            },
            {
              scenario: 'Change default editor',
              solution: 'echo \'export EDITOR=vim\' >> ~/.bashrc',
              reasoning: 'Setting EDITOR variable makes commands like git commit automatically use vim'
            }
          ]
        }
      }
    }
  },

  {
    id: 'io-redirection',
    title: {
      zh: '输入输出重定向',
      en: 'I/O Redirection'
    },
    category: {
      difficulty: 'intermediate',
      topic: 'system'
    },
    content: {
      zh: {
        beginner: {
          persona: '导演的指挥手势 Director',
          story: 'Director 是剧院的导演，他用手势控制信息流向：👉 (>) 表示"把台词写到剧本里"（覆盖输出），👉👉 (>>) 表示"追加到剧本末尾"（追加输出），👈 (<) 表示"从剧本读取台词"（输入），|（管道）表示"前一个演员的话直接传给下一个"（管道传递），2> 表示"把错误信息记录到错误日志"（错误重定向），&> 表示"把所有声音都录下来"（标准输出和错误一起重定向）。有了这些手势，Director 能编排复杂的信息流动。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🎬📺'
          }
        },
        professional: {
          summary: 'Unix标准流（stdin/stdout/stderr）和重定向操作符',
          keyPoints: [
            {
              concept: '三个标准流',
              explanation: 'stdin(0)标准输入，stdout(1)标准输出，stderr(2)标准错误',
              example: 'command < input.txt 从文件读入，command > output.txt 输出到文件'
            },
            {
              concept: '> 覆盖 vs >> 追加',
              explanation: '> 覆盖目标文件，>> 追加到文件末尾',
              example: 'echo "log" > file.log 覆盖，echo "more" >> file.log 追加'
            },
            {
              concept: '2> 错误重定向',
              explanation: '单独重定向stderr，2>&1合并stderr到stdout',
              example: 'command 2> error.log 错误单独记录，command > all.log 2>&1 全部合并'
            },
            {
              concept: '/dev/null 黑洞设备',
              explanation: '特殊文件，丢弃所有写入数据，常用于静默输出',
              example: 'command > /dev/null 2>&1 静默运行，不显示任何输出'
            },
            {
              concept: 'Here Document (<<)',
              explanation: '多行输入重定向，EOF作为结束标记',
              example: 'cat <<EOF > file.txt\\nline1\\nline2\\nEOF 创建多行文件'
            }
          ],
          useCases: [
            {
              scenario: '保存命令输出到文件并查看错误',
              solution: 'command > output.txt 2> error.txt',
              reasoning: '标准输出和错误分别保存，便于分析'
            },
            {
              scenario: '追加日志不覆盖历史记录',
              solution: 'echo "$(date): Task completed" >> /var/log/myapp.log',
              reasoning: '>> 追加模式保留历史日志'
            },
            {
              scenario: '批量处理时静默运行',
              solution: 'for file in *.txt; do process $file > /dev/null 2>&1; done',
              reasoning: '避免大量输出刷屏，只关注最终结果'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Director\'s Gesture Commands',
          story: 'Director is the theater director who controls information flow with gestures: 👉 (>) means "write lines to script" (overwrite output), 👉👉 (>>) means "append to end of script" (append output), 👈 (<) means "read lines from script" (input), | (pipe) means "pass previous actor\'s words directly to next" (pipe transfer), 2> means "record error messages to error log" (error redirection), &> means "record all sounds" (redirect both stdout and stderr). With these gestures, Director can orchestrate complex information flows.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🎬📺'
          }
        },
        professional: {
          summary: 'Unix standard streams (stdin/stdout/stderr) and redirection operators',
          keyPoints: [
            {
              concept: 'Three standard streams',
              explanation: 'stdin(0) standard input, stdout(1) standard output, stderr(2) standard error',
              example: 'command < input.txt reads from file, command > output.txt outputs to file'
            },
            {
              concept: '> overwrite vs >> append',
              explanation: '> overwrites target file, >> appends to end of file',
              example: 'echo "log" > file.log overwrites, echo "more" >> file.log appends'
            },
            {
              concept: '2> error redirection',
              explanation: 'Separately redirect stderr, 2>&1 merges stderr to stdout',
              example: 'command 2> error.log records errors separately, command > all.log 2>&1 merges all'
            },
            {
              concept: '/dev/null black hole device',
              explanation: 'Special file discarding all written data, commonly used to silence output',
              example: 'command > /dev/null 2>&1 runs silently with no output displayed'
            },
            {
              concept: 'Here Document (<<)',
              explanation: 'Multi-line input redirection, EOF as end marker',
              example: 'cat <<EOF > file.txt\\nline1\\nline2\\nEOF creates multi-line file'
            }
          ],
          useCases: [
            {
              scenario: 'Save command output to file and view errors',
              solution: 'command > output.txt 2> error.txt',
              reasoning: 'Standard output and errors saved separately for easy analysis'
            },
            {
              scenario: 'Append logs without overwriting history',
              solution: 'echo "$(date): Task completed" >> /var/log/myapp.log',
              reasoning: '>> append mode preserves historical logs'
            },
            {
              scenario: 'Silent execution during batch processing',
              solution: 'for file in *.txt; do process $file > /dev/null 2>&1; done',
              reasoning: 'Avoid screen flooding with output, focus only on final results'
            }
          ]
        }
      }
    }
  },

  {
    id: 'systemd-services',
    title: {
      zh: 'systemd 服务系统',
      en: 'systemd Services'
    },
    category: {
      difficulty: 'advanced',
      topic: 'system'
    },
    content: {
      zh: {
        beginner: {
          persona: '驻场演出经理 Daemon',
          story: 'Daemon 管理剧院的驻场演出（系统服务），每个服务都有剧本文件（.service单元文件）规定何时开场（启动条件）、如何演出（执行命令）、出错怎么办（重启策略）。有些演出开门就开始（开机自启），有些需要预约（手动启动）。Daemon 还管理演出之间的依赖关系：灯光服务必须在表演服务之前就绪，数据库服务要在网站服务之前启动。systemctl 是 Daemon 的对讲机，用来发送"开始"、"停止"、"重启"、"查看状态"等指令。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '⚙️🎪'
          }
        },
        professional: {
          summary: 'systemd系统和服务管理器，统一管理启动、依赖、日志',
          keyPoints: [
            {
              concept: 'Unit单元类型',
              explanation: '.service服务，.socket套接字，.target目标（类似运行级别），.timer定时任务',
              example: 'systemctl list-units --type=service 列出所有服务单元'
            },
            {
              concept: 'systemctl基本操作',
              explanation: 'start/stop/restart启停，enable/disable开机自启，status查看状态',
              example: 'systemctl enable nginx 设置开机启动，systemctl status nginx 查看运行状态'
            },
            {
              concept: 'Unit文件结构',
              explanation: '[Unit]描述和依赖，[Service]执行配置，[Install]安装信息',
              example: '/etc/systemd/system/myapp.service 定义自定义服务'
            },
            {
              concept: '依赖管理',
              explanation: 'Wants弱依赖，Requires强依赖，After/Before顺序控制',
              example: 'After=network.target 确保网络就绪后启动'
            },
            {
              concept: 'journalctl日志系统',
              explanation: 'systemd集成日志管理，二进制格式，强大查询能力',
              example: 'journalctl -u nginx -f 实时查看nginx服务日志'
            }
          ],
          useCases: [
            {
              scenario: '创建自定义应用服务',
              solution: '编写/etc/systemd/system/myapp.service，systemctl daemon-reload && systemctl start myapp',
              reasoning: '标准化服务管理，开机自启和崩溃重启'
            },
            {
              scenario: '排查服务启动失败',
              solution: 'systemctl status service && journalctl -xe',
              reasoning: 'status查看概要，journalctl查看详细错误日志'
            },
            {
              scenario: '设置定时任务替代cron',
              solution: '创建.timer单元文件，OnCalendar定义时间',
              reasoning: 'systemd timer比cron更灵活，集成日志系统'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Resident Show Manager Daemon',
          story: 'Daemon manages the theater\'s resident shows (system services). Each service has a script file (.service unit file) specifying when to start (startup conditions), how to perform (execution commands), and what to do on errors (restart policies). Some shows start as soon as doors open (boot autostart), some need reservations (manual start). Daemon also manages dependencies between shows: lighting service must be ready before performance service, database service must start before website service. systemctl is Daemon\'s walkie-talkie for sending "start", "stop", "restart", "check status" commands.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '⚙️🎪'
          }
        },
        professional: {
          summary: 'systemd system and service manager, unified management of startup, dependencies, and logs',
          keyPoints: [
            {
              concept: 'Unit types',
              explanation: '.service services, .socket sockets, .target targets (like runlevels), .timer scheduled tasks',
              example: 'systemctl list-units --type=service lists all service units'
            },
            {
              concept: 'systemctl basic operations',
              explanation: 'start/stop/restart for control, enable/disable for boot autostart, status to check state',
              example: 'systemctl enable nginx sets boot startup, systemctl status nginx checks running state'
            },
            {
              concept: 'Unit file structure',
              explanation: '[Unit] description and dependencies, [Service] execution config, [Install] installation info',
              example: '/etc/systemd/system/myapp.service defines custom service'
            },
            {
              concept: 'Dependency management',
              explanation: 'Wants weak dependency, Requires strong dependency, After/Before order control',
              example: 'After=network.target ensures network ready before startup'
            },
            {
              concept: 'journalctl logging system',
              explanation: 'systemd integrated log management, binary format, powerful query capabilities',
              example: 'journalctl -u nginx -f real-time view nginx service logs'
            }
          ],
          useCases: [
            {
              scenario: 'Create custom application service',
              solution: 'Write /etc/systemd/system/myapp.service, systemctl daemon-reload && systemctl start myapp',
              reasoning: 'Standardized service management with boot autostart and crash recovery'
            },
            {
              scenario: 'Troubleshoot service startup failures',
              solution: 'systemctl status service && journalctl -xe',
              reasoning: 'status for overview, journalctl for detailed error logs'
            },
            {
              scenario: 'Setup scheduled tasks replacing cron',
              solution: 'Create .timer unit file, OnCalendar defines schedule',
              reasoning: 'systemd timers more flexible than cron, integrated logging system'
            }
          ]
        }
      }
    }
  },

  {
    id: 'networking-basics',
    title: {
      zh: '网络基础概念',
      en: 'Network Basics'
    },
    category: {
      difficulty: 'intermediate',
      topic: 'networking'
    },
    content: {
      zh: {
        beginner: {
          persona: '剧院通讯系统工程师 NetWork',
          story: 'NetWork 负责剧院的通讯系统。IP地址是每个房间的门牌号（192.168.1.100），端口号是房间里的具体窗口（80号窗口是网站接待，22号窗口是SSH后门，3306号窗口是数据库咨询台）。DNS是剧院的电话簿（google.com → 172.217.160.46），防火墙是保安（决定谁能进来），路由表是导航地图（去哪个网络走哪条路）。localhost(127.0.0.1)是自己房间的内线电话，0.0.0.0是"所有门都开"的意思。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '🌐📡'
          }
        },
        professional: {
          summary: 'Linux网络栈基础：IP地址、端口、协议、路由和防火墙',
          keyPoints: [
            {
              concept: 'IP地址与子网掩码',
              explanation: 'IPv4(32位)标识网络设备，子网掩码划分网络/主机部分',
              example: '192.168.1.100/24 表示192.168.1网段，255.255.255.0子网掩码'
            },
            {
              concept: '端口与服务映射',
              explanation: '16位数字(0-65535)，0-1023系统端口，1024-49151注册端口',
              example: 'HTTP:80, HTTPS:443, SSH:22, MySQL:3306, PostgreSQL:5432'
            },
            {
              concept: 'TCP vs UDP',
              explanation: 'TCP可靠连接导向，UDP无连接快速不可靠',
              example: 'Web/SSH用TCP保证数据完整，DNS/视频流用UDP追求速度'
            },
            {
              concept: 'localhost与回环地址',
              explanation: '127.0.0.1本机回环，::1 IPv6回环，不经过网卡',
              example: 'curl localhost:3000 测试本机服务'
            },
            {
              concept: '防火墙与iptables/nftables',
              explanation: '内核级包过滤，规则链控制流量进出',
              example: 'ufw allow 22/tcp 允许SSH连接'
            }
          ],
          useCases: [
            {
              scenario: '检查端口是否开放',
              solution: 'ss -tlnp | grep :80 或 netstat -tlnp | grep :80',
              reasoning: '-t TCP, -l 监听中, -n 数字显示, -p 显示进程'
            },
            {
              scenario: '测试网络连通性',
              solution: 'ping -c 4 google.com && traceroute google.com',
              reasoning: 'ping测试可达性，traceroute追踪路由路径'
            },
            {
              scenario: '查看本机IP和路由表',
              solution: 'ip addr show && ip route show',
              reasoning: 'ip命令现代替代ifconfig/route，功能更强大'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Theater Communication Engineer NetWork',
          story: 'NetWork is responsible for the theater\'s communication system. IP addresses are room numbers (192.168.1.100), port numbers are specific windows in rooms (window 80 is website reception, window 22 is SSH back door, window 3306 is database consultation desk). DNS is the theater phone book (google.com → 172.217.160.46), firewall is security (deciding who can enter), routing table is navigation map (which route to which network). localhost(127.0.0.1) is your own room\'s internal phone, 0.0.0.0 means "all doors open".',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '🌐📡'
          }
        },
        professional: {
          summary: 'Linux network stack basics: IP addresses, ports, protocols, routing, and firewalls',
          keyPoints: [
            {
              concept: 'IP addresses and subnet masks',
              explanation: 'IPv4(32-bit) identifies network devices, subnet mask divides network/host portions',
              example: '192.168.1.100/24 represents 192.168.1 segment, 255.255.255.0 subnet mask'
            },
            {
              concept: 'Ports and service mapping',
              explanation: '16-bit numbers(0-65535), 0-1023 system ports, 1024-49151 registered ports',
              example: 'HTTP:80, HTTPS:443, SSH:22, MySQL:3306, PostgreSQL:5432'
            },
            {
              concept: 'TCP vs UDP',
              explanation: 'TCP reliable connection-oriented, UDP connectionless fast unreliable',
              example: 'Web/SSH use TCP for data integrity, DNS/video streaming use UDP for speed'
            },
            {
              concept: 'localhost and loopback address',
              explanation: '127.0.0.1 local loopback, ::1 IPv6 loopback, bypasses network card',
              example: 'curl localhost:3000 tests local service'
            },
            {
              concept: 'Firewall and iptables/nftables',
              explanation: 'Kernel-level packet filtering, rule chains control traffic flow',
              example: 'ufw allow 22/tcp allows SSH connections'
            }
          ],
          useCases: [
            {
              scenario: 'Check if port is open',
              solution: 'ss -tlnp | grep :80 or netstat -tlnp | grep :80',
              reasoning: '-t TCP, -l listening, -n numeric display, -p show process'
            },
            {
              scenario: 'Test network connectivity',
              solution: 'ping -c 4 google.com && traceroute google.com',
              reasoning: 'ping tests reachability, traceroute traces routing path'
            },
            {
              scenario: 'View local IP and routing table',
              solution: 'ip addr show && ip route show',
              reasoning: 'ip command modern replacement for ifconfig/route, more powerful'
            }
          ]
        }
      }
    }
  },

  {
    id: 'package-managers',
    title: {
      zh: '包管理器',
      en: 'Package Managers'
    },
    category: {
      difficulty: 'beginner',
      topic: 'system'
    },
    content: {
      zh: {
        beginner: {
          persona: '道具供应商 Package',
          story: 'Package 是剧院的道具供应商，管理着所有演出需要的工具和材料。apt/dnf/pacman 是不同供应商的订货系统（包管理器），软件包就像打包好的道具箱（包含程序+依赖），仓库（repository）是供应商的仓库，你可以从官方仓库（稳定但版本旧）或第三方仓库（新鲜但风险高）订货。安装软件时，Package 会自动检查需要哪些配件（依赖），一次性全部送到。卸载时也会清理不再需要的配件（孤立包）。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📦🔧'
          }
        },
        professional: {
          summary: 'Linux软件包管理系统：安装、更新、依赖解析和版本控制',
          keyPoints: [
            {
              concept: 'Debian系：apt/dpkg',
              explanation: 'apt高级接口，dpkg底层工具，.deb包格式',
              example: 'apt update && apt install nginx，dpkg -l列出已安装包'
            },
            {
              concept: 'RedHat系：dnf/yum/rpm',
              explanation: 'dnf是yum继任者，rpm底层，.rpm包格式',
              example: 'dnf install nginx，rpm -qa查询所有包'
            },
            {
              concept: 'Arch系：pacman',
              explanation: '快速简洁的包管理器，滚动更新模型',
              example: 'pacman -Syu系统全面更新，pacman -S nginx安装'
            },
            {
              concept: '仓库（Repository）',
              explanation: '包索引和存储服务器，/etc/apt/sources.list配置',
              example: 'add-apt-repository ppa:user/repo添加PPA源'
            },
            {
              concept: '依赖管理',
              explanation: '自动解析和安装依赖包，避免"依赖地狱"',
              example: 'apt autoremove清理不再需要的依赖包'
            }
          ],
          useCases: [
            {
              scenario: '安装特定版本软件',
              solution: 'apt install nginx=1.18.0-0ubuntu1',
              reasoning: '生产环境锁定版本，避免自动更新导致兼容问题'
            },
            {
              scenario: '搜索包含特定文件的包',
              solution: 'apt-file search /usr/bin/convert 或 dnf provides /usr/bin/convert',
              reasoning: '反向查找文件所属包，排查命令缺失问题'
            },
            {
              scenario: '清理缓存释放空间',
              solution: 'apt clean && apt autoclean && apt autoremove',
              reasoning: '删除下载缓存和孤立依赖，回收磁盘空间'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Props Supplier Package',
          story: 'Package is the theater\'s props supplier managing all tools and materials needed for performances. apt/dnf/pacman are ordering systems from different suppliers (package managers), software packages are like packed prop boxes (containing program + dependencies), repository is the supplier\'s warehouse. You can order from official repositories (stable but older versions) or third-party repositories (fresh but higher risk). When installing software, Package automatically checks what accessories are needed (dependencies) and delivers everything at once. When uninstalling, it also cleans up no-longer-needed accessories (orphan packages).',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📦🔧'
          }
        },
        professional: {
          summary: 'Linux package management system: installation, updates, dependency resolution, and version control',
          keyPoints: [
            {
              concept: 'Debian family: apt/dpkg',
              explanation: 'apt high-level interface, dpkg low-level tool, .deb package format',
              example: 'apt update && apt install nginx, dpkg -l lists installed packages'
            },
            {
              concept: 'RedHat family: dnf/yum/rpm',
              explanation: 'dnf is yum successor, rpm low-level, .rpm package format',
              example: 'dnf install nginx, rpm -qa queries all packages'
            },
            {
              concept: 'Arch family: pacman',
              explanation: 'Fast and simple package manager, rolling release model',
              example: 'pacman -Syu full system update, pacman -S nginx install'
            },
            {
              concept: 'Repository',
              explanation: 'Package index and storage servers, configured in /etc/apt/sources.list',
              example: 'add-apt-repository ppa:user/repo adds PPA source'
            },
            {
              concept: 'Dependency management',
              explanation: 'Automatically resolves and installs dependency packages, avoiding "dependency hell"',
              example: 'apt autoremove cleans up no-longer-needed dependencies'
            }
          ],
          useCases: [
            {
              scenario: 'Install specific software version',
              solution: 'apt install nginx=1.18.0-0ubuntu1',
              reasoning: 'Lock version in production to avoid auto-update compatibility issues'
            },
            {
              scenario: 'Search for package containing specific file',
              solution: 'apt-file search /usr/bin/convert or dnf provides /usr/bin/convert',
              reasoning: 'Reverse lookup file ownership, troubleshoot missing commands'
            },
            {
              scenario: 'Clean cache to free space',
              solution: 'apt clean && apt autoclean && apt autoremove',
              reasoning: 'Delete download cache and orphan dependencies, reclaim disk space'
            }
          ]
        }
      }
    }
  },

  {
    id: 'shell-scripting',
    title: {
      zh: 'Shell 脚本基础',
      en: 'Shell Scripting Basics'
    },
    category: {
      difficulty: 'intermediate',
      topic: 'development'
    },
    content: {
      zh: {
        beginner: {
          persona: '编剧自动化助手 Scripter',
          story: 'Scripter 是剧院的编剧助手，能把重复的操作写成"剧本"（Shell脚本）自动执行。#!/bin/bash 是剧本的抬头（指定解释器），变量是演员的台词本（存储数据），if/for/while 是剧情的分支和循环（控制流程），函数是可以重复使用的经典桥段，管道|是演员之间的对话传递。Scripter 还能处理演员缺席（错误处理）、检查道具是否齐全（条件判断）、批量调度演员（循环处理）。写好的剧本可以反复使用，让繁琐工作自动化。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📜✍️'
          }
        },
        professional: {
          summary: 'Bash脚本编程基础：变量、控制流、函数和自动化',
          keyPoints: [
            {
              concept: 'Shebang与执行权限',
              explanation: '#!/bin/bash指定解释器，chmod +x script.sh添加执行权限',
              example: '#!/usr/bin/env bash 更具可移植性的写法'
            },
            {
              concept: '变量与引用',
              explanation: 'VAR=value赋值无空格，$VAR或${VAR}引用，""允许展开，\'\'原样输出',
              example: 'NAME="world"; echo "Hello $NAME" 输出Hello world'
            },
            {
              concept: '条件判断 if/case',
              explanation: '[ condition ]或[[ condition ]]测试，case多分支选择',
              example: 'if [ -f file.txt ]; then echo "exists"; fi 检查文件存在'
            },
            {
              concept: '循环 for/while',
              explanation: 'for遍历列表，while条件循环，break/continue控制',
              example: 'for file in *.txt; do process "$file"; done 批量处理文件'
            },
            {
              concept: '函数与参数',
              explanation: 'function_name() { commands; } 定义，$1 $2接收参数，$@所有参数',
              example: 'backup() { cp "$1" "$1.bak"; } 封装备份逻辑'
            },
            {
              concept: '错误处理',
              explanation: '$?获取上个命令退出码，set -e遇错即停，trap捕获信号',
              example: 'set -euo pipefail 严格模式：错误停止+未定义变量报错+管道错误传播'
            }
          ],
          useCases: [
            {
              scenario: '批量重命名文件',
              solution: 'for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done',
              reasoning: '${f%.jpeg}去除后缀，批量替换扩展名'
            },
            {
              scenario: '定时备份脚本',
              solution: '#!/bin/bash\\nset -e\\ntar -czf backup-$(date +%Y%m%d).tar.gz /data\\nfind /backups -mtime +7 -delete',
              reasoning: '压缩备份+日期命名+清理7天前旧备份'
            },
            {
              scenario: '环境检查脚本',
              solution: 'command -v docker >/dev/null 2>&1 || { echo "Docker not found"; exit 1; }',
              reasoning: 'command -v检查命令存在，不存在则报错退出'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Playwright Automation Assistant Scripter',
          story: 'Scripter is the theater\'s playwright assistant who can write "scripts" (Shell scripts) to automate repetitive operations. #!/bin/bash is the script header (specifying interpreter), variables are actors\' line books (storing data), if/for/while are plot branches and loops (control flow), functions are reusable classic scenes, pipe | is dialogue passing between actors. Scripter can also handle actor absences (error handling), check if props are complete (conditional judgments), batch schedule actors (loop processing). Well-written scripts can be reused repeatedly, automating tedious work.',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📜✍️'
          }
        },
        professional: {
          summary: 'Bash scripting fundamentals: variables, control flow, functions, and automation',
          keyPoints: [
            {
              concept: 'Shebang and execute permissions',
              explanation: '#!/bin/bash specifies interpreter, chmod +x script.sh adds execute permission',
              example: '#!/usr/bin/env bash more portable writing style'
            },
            {
              concept: 'Variables and references',
              explanation: 'VAR=value assigns without spaces, $VAR or ${VAR} references, "" allows expansion, \'\' outputs as-is',
              example: 'NAME="world"; echo "Hello $NAME" outputs Hello world'
            },
            {
              concept: 'Conditional if/case',
              explanation: '[ condition ] or [[ condition ]] tests, case for multi-branch selection',
              example: 'if [ -f file.txt ]; then echo "exists"; fi checks file existence'
            },
            {
              concept: 'Loops for/while',
              explanation: 'for iterates list, while conditional loop, break/continue control',
              example: 'for file in *.txt; do process "$file"; done batch processes files'
            },
            {
              concept: 'Functions and parameters',
              explanation: 'function_name() { commands; } defines, $1 $2 receive parameters, $@ all parameters',
              example: 'backup() { cp "$1" "$1.bak"; } encapsulates backup logic'
            },
            {
              concept: 'Error handling',
              explanation: '$? gets previous command exit code, set -e stops on error, trap catches signals',
              example: 'set -euo pipefail strict mode: stop on error + undefined variable error + pipe error propagation'
            }
          ],
          useCases: [
            {
              scenario: 'Batch rename files',
              solution: 'for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done',
              reasoning: '${f%.jpeg} removes suffix, batch replaces extensions'
            },
            {
              scenario: 'Scheduled backup script',
              solution: '#!/bin/bash\\nset -e\\ntar -czf backup-$(date +%Y%m%d).tar.gz /data\\nfind /backups -mtime +7 -delete',
              reasoning: 'Compress backup + date naming + clean backups older than 7 days'
            },
            {
              scenario: 'Environment check script',
              solution: 'command -v docker >/dev/null 2>&1 || { echo "Docker not found"; exit 1; }',
              reasoning: 'command -v checks command existence, exits with error if not found'
            }
          ]
        }
      }
    }
  },

  {
    id: 'logging-system',
    title: {
      zh: '日志系统',
      en: 'Logging System'
    },
    category: {
      difficulty: 'intermediate',
      topic: 'system'
    },
    content: {
      zh: {
        beginner: {
          persona: '演出记录员 Logger',
          story: 'Logger 是剧院的记录员，把每场演出的大小事件都写进日志本。/var/log 是档案室，syslog 是总记录本（系统日志），每个应用也有自己的记录本（nginx/access.log、mysql/error.log）。日志分等级：DEBUG是彩排笔记（调试信息），INFO是正常演出记录，WARNING是小插曲（警告），ERROR是演出事故（错误），CRITICAL是剧院失火（严重错误）。journalctl 是现代化的档案检索系统，能快速查找"某演员在某时段的所有记录"，还能实时监控正在发生的事（-f 跟踪模式）。',
          metaphor: {
            theme: 'icecream-theater',
            visualization: '📓🔍'
          }
        },
        professional: {
          summary: 'Linux系统日志架构：syslog、journald、应用日志和日志分析',
          keyPoints: [
            {
              concept: 'syslog协议与rsyslog',
              explanation: '标准日志协议，设施（facility）+级别（severity），rsyslog是常用实现',
              example: '/etc/rsyslog.conf配置日志路由规则'
            },
            {
              concept: 'systemd journald',
              explanation: 'systemd集成日志系统，二进制存储，结构化数据，强大查询',
              example: 'journalctl -u nginx --since "1 hour ago" 查询最近1小时nginx日志'
            },
            {
              concept: '日志级别',
              explanation: 'DEBUG(7) < INFO(6) < NOTICE(5) < WARNING(4) < ERR(3) < CRIT(2) < ALERT(1) < EMERG(0)',
              example: 'logger -p user.err "Error message" 手动记录错误日志'
            },
            {
              concept: '日志轮转 logrotate',
              explanation: '定期压缩和删除旧日志，防止磁盘占满',
              example: '/etc/logrotate.d/nginx 配置nginx日志轮转策略'
            },
            {
              concept: '应用日志位置',
              explanation: '系统日志/var/log/syslog，应用日志/var/log/<app>/，内核日志dmesg',
              example: 'tail -f /var/log/nginx/error.log 实时监控nginx错误'
            }
          ],
          useCases: [
            {
              scenario: '排查系统启动问题',
              solution: 'journalctl -b -p err 查看本次启动所有错误级别日志',
              reasoning: '-b本次启动，-p err过滤错误级别，快速定位启动失败原因'
            },
            {
              scenario: '分析应用性能瓶颈',
              solution: 'awk \'{print $7}\' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head',
              reasoning: '统计nginx访问最频繁的URL，识别热点接口'
            },
            {
              scenario: '实时监控多个日志文件',
              solution: 'tail -f /var/log/{nginx/error.log,mysql/error.log,syslog}',
              reasoning: '同时监控多个日志源，综合排查问题'
            }
          ]
        }
      },
      en: {
        beginner: {
          persona: 'Performance Recorder Logger',
          story: 'Logger is the theater recorder who writes down all events big and small from each performance into log books. /var/log is the archive room, syslog is the master logbook (system logs), each application also has its own logbook (nginx/access.log, mysql/error.log). Logs have levels: DEBUG is rehearsal notes (debug info), INFO is normal performance records, WARNING is minor incidents (warnings), ERROR is performance accidents (errors), CRITICAL is theater on fire (critical errors). journalctl is the modern archive retrieval system that can quickly find "all records of a certain actor during a certain period" and can also monitor events happening in real-time (-f follow mode).',
          metaphor: {
            theme: 'warehouse-inventory',
            visualization: '📓🔍'
          }
        },
        professional: {
          summary: 'Linux system logging architecture: syslog, journald, application logs, and log analysis',
          keyPoints: [
            {
              concept: 'syslog protocol and rsyslog',
              explanation: 'Standard logging protocol, facility + severity, rsyslog is common implementation',
              example: '/etc/rsyslog.conf configures log routing rules'
            },
            {
              concept: 'systemd journald',
              explanation: 'systemd integrated logging system, binary storage, structured data, powerful queries',
              example: 'journalctl -u nginx --since "1 hour ago" queries nginx logs from last hour'
            },
            {
              concept: 'Log levels',
              explanation: 'DEBUG(7) < INFO(6) < NOTICE(5) < WARNING(4) < ERR(3) < CRIT(2) < ALERT(1) < EMERG(0)',
              example: 'logger -p user.err "Error message" manually logs error message'
            },
            {
              concept: 'Log rotation logrotate',
              explanation: 'Periodically compress and delete old logs to prevent disk full',
              example: '/etc/logrotate.d/nginx configures nginx log rotation policy'
            },
            {
              concept: 'Application log locations',
              explanation: 'System logs /var/log/syslog, app logs /var/log/<app>/, kernel logs dmesg',
              example: 'tail -f /var/log/nginx/error.log real-time monitor nginx errors'
            }
          ],
          useCases: [
            {
              scenario: 'Troubleshoot system boot issues',
              solution: 'journalctl -b -p err view all error-level logs from current boot',
              reasoning: '-b current boot, -p err filters error level, quickly locate boot failure cause'
            },
            {
              scenario: 'Analyze application performance bottlenecks',
              solution: 'awk \'{print $7}\' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head',
              reasoning: 'Count most frequently accessed nginx URLs, identify hot endpoints'
            },
            {
              scenario: 'Real-time monitor multiple log files',
              solution: 'tail -f /var/log/{nginx/error.log,mysql/error.log,syslog}',
              reasoning: 'Monitor multiple log sources simultaneously for comprehensive troubleshooting'
            }
          ]
        }
      }
    }
  }
]

// 导出查询函数
export function getConceptsByCategory(category) {
  if (!category || category === 'all') {
    return systemConcepts
  }
  return systemConcepts.filter(concept => concept.category.topic === category)
}

export function getConceptsByDifficulty(difficulty) {
  if (!difficulty || difficulty === 'all') {
    return systemConcepts
  }
  return systemConcepts.filter(concept => concept.category.difficulty === difficulty)
}

export function getConceptById(id) {
  return systemConcepts.find(concept => concept.id === id)
}
