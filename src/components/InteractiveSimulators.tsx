import React, { useState, useEffect } from 'react';
import { 
  User, Brain, Bot, Wrench, Shield, CheckCircle, ChevronRight, 
  BookOpen, Sparkles, AlertTriangle, Play, RefreshCw, Layers, 
  Search, Server, Plus, Copy, Eye, EyeOff, LayoutGrid, Terminal,
  Newspaper, Check, Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ==========================================
// SIMULATOR 1 COMPONENT: Dialogue Chat & Identity Comparison
// ==========================================
export function ChatComparison() {
  const [activeTab, setActiveTab] = useState<'standard' | 'copilot'>('copilot');
  const [copied, setCopied] = useState(false);

  const ordinaryChat = [
    { sender: 'user', text: '帮我写一下单片机倒计时代码' },
    { sender: 'ai', text: '好的，这里是单片机倒计时的简单代码。因为不知道你使用的是什么单片机（比如51, STM32或者Arduino），默认提供51单片机使用定时器0进行倒计时的汇编或C语言框架：\n\n```c\n#include <reg51.h>\nvoid Timer0_Init() {\n  TMOD |= 0x01;\n  TH0 = 0xFC; TL0 = 0x18; // 1ms\n}\n```\n如果需要其它的单片机版本或者带数码管管脚配置，请重新告诉我硬件配置。' }
  ];

  const copilotChat = [
    { sender: 'user', text: '帮我写一下单片机倒计时代码' },
    { sender: 'ai', text: '✨ **检测到记忆/背景信息：光电大四，目前在做「篮球计时器」项目** ✨\n\n针对你目前在写的使用 51 单片机 + 4位共阳数码管 的篮球倒计时模块，我已结合你昨天在知识库上传的 `C51_UART_Timer.txt` 帮你写好了。这里直接适配你的 `P0` 段码和 `P2` 位选管脚：\n\n```c\n// 自动匹配你项目的控制引脚\n#define segment_pin P0 \nsbit active_pin1 = P2^0; // 适配篮球计时器硬件\n// 已在定时器中断中加入24s和14s短振保护触点\n```\n你可以直接点击复制，昨天的串口通讯参数（9600 bps）已经封装进去。' }
  ];

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col h-[400px]">
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-teal-400" />
          <span className="text-xs font-mono text-slate-400 ml-2">对话引擎对比测试</span>
        </div>
        <div className="flex bg-slate-200/60 p-0.5 rounded-lg text-xs font-medium">
          <button 
            className={`px-3 py-1 rounded-md transition-all ${activeTab === 'standard' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            onClick={() => setActiveTab('standard')}
          >
            普通 AI
          </button>
          <button 
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${activeTab === 'copilot' ? 'bg-white text-teal-600 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-900'}`}
            onClick={() => setActiveTab('copilot')}
          >
            <Sparkles className="w-3 h-3" /> ima.copilot
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/40 text-sm">
        <AnimatePresence mode="wait">
          {activeTab === 'standard' ? (
            <motion.div 
              key="standard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="text-xs text-center text-slate-400 my-1">⚙️ 历史记忆：无</div>
              {ordinaryChat.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${msg.sender === 'user' ? 'bg-slate-200 text-slate-800 rounded-tr-none' : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100'}`}>
                    <div className="whitespace-pre-line font-light">{msg.text}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="copilot"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="text-xs text-center text-teal-500 font-medium bg-teal-50 rounded-full py-1 px-4 border border-teal-100/50 w-fit mx-auto">
                ⚡ 自动装载四层记忆：【背景：大四光电】+【项目：篮球计时器】+【昨天笔记】
              </div>
              {copilotChat.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${msg.sender === 'user' ? 'bg-teal-600 text-white rounded-tr-none' : 'bg-white text-slate-800 shadow-sm rounded-tl-none border border-slate-200/60'}`}>
                    {msg.sender === 'ai' ? (
                      <div>
                        {/* 熊猫头像 */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600 mb-1.5">
                          <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-sans tracking-tighter text-[9px]">🐼</span>
                          ima.copilot
                        </div>
                        <div className="whitespace-pre-line font-light leading-relaxed">{msg.text}</div>
                      </div>
                    ) : (
                      <div className="font-light">{msg.text}</div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="p-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 text-center">
        {activeTab === 'standard' ? '❌ 每次询问，AI 都视你为“陌生路人”，重复解释十分痛苦' : '✅ 每次提问，AI 都会调用历史长短期记忆，省去数百字重复背景描述'}
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 2 COMPONENT: Four Layer Memory Interactive Diagram
// ==========================================
export function MemoryLayers() {
  const [activeLayer, setActiveLayer] = useState<'soul' | 'user' | 'memory' | 'agent'>('soul');

  const layersInfo = {
    soul: {
      title: "Soul (核心灵魂)",
      desc: "定位你的生、老、病、死、姓名与专业身份。决定你是高级软件工程师，还是光刻工艺和光电技术领域的学者。这是 AI 对你建立终身定位的基础。",
      details: [
        "姓名：3199145705hs (用户)",
        "身份标签：大四本科生",
        "专业身份：光电信息科学与工程",
        "核心关注：论文写作、考研备考"
      ],
      color: "bg-indigo-500",
      textColor: "text-indigo-600"
    },
    user: {
      title: "User (用户短期偏好)",
      desc: "设定你的特定聊天习惯以及工作格式。如更偏爱简洁易读的代码片段，习惯在论文写作时引用 IEEE 格式，日常对话语气追求高效等。",
      details: [
        "语言偏好：极简中文",
        "代码偏好：C语言（Keil C51/STM32HAL）",
        "工作风格：提供可直接运行的代码加重要警告"
      ],
      color: "bg-blue-500",
      textColor: "text-blue-600"
    },
    memory: {
      title: "Memory (知识长久记忆)",
      desc: "你以前讨论过的技术、问错过的 UART 故障、丢到书籍夹里的专业论著。它是不断自我丰富、通过知识图谱沉淀的私有大脑。",
      details: [
        "昨天探讨：C51串口9600波特率下寄存器配置失误",
        "上传记录：ToF飞行时间探阻PDF说明",
        "读书记录：《微机原理与接口技术》三篇读书笔记"
      ],
      color: "bg-teal-500",
      textColor: "text-teal-600"
    },
    agent: {
      title: "Agent (工具与执行层)",
      desc: "让大模型不再只是『纸上谈兵』。能够代表你去驱动微信读书导笔记、腾讯新闻挖今天热点、或者调用 DeepSeek、腾讯元宝的多步执行体。",
      details: [
        "支持服务：SkillHub、MCP、外部API",
        "核心能力：自驱动复杂步骤（如写一句话，直接整理出5篇ToF大纲并自动找好考题）"
      ],
      color: "bg-emerald-500",
      textColor: "text-emerald-500"
    }
  };

  return (
    <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col md:flex-row gap-6">
      {/* 记忆层叠 3D 手绘感拟真渲染 */}
      <div className="flex-1 flex flex-col justify-center items-center py-6 border border-slate-100 rounded-xl bg-slate-50/50">
        <span className="text-xs font-mono text-slate-400 mb-4 tracking-wider">3D 极简记忆空间模型</span>
        
        <div className="relative w-48 h-48 flex items-center justify-center transform scale-75 md:scale-90">
          {/* Agent Layer */}
          <button 
            onClick={() => setActiveLayer('agent')}
            className={`absolute top-0 w-36 h-10 rounded-full border border-emerald-400/80 cursor-pointer shadow-lg transition-all transform flex items-center justify-center gap-1.5 hover:-translate-y-1 ${activeLayer === 'agent' ? 'bg-emerald-50/90 ring-2 ring-emerald-500 scale-105' : 'bg-white'}`}
            style={{ transform: 'rotateX(55deg) rotateY(-5deg) translateY(0px) translateZ(60px)' }}
          >
            <Wrench className="w-4.5 h-4.5 text-emerald-600 transform -rotate-[5deg]" />
            <span className="text-xs font-mono text-emerald-700 font-bold">Agent 层</span>
          </button>

          {/* Memory Layer */}
          <button 
            onClick={() => setActiveLayer('memory')}
            className={`absolute top-10 w-36 h-10 rounded-full border border-teal-400/80 cursor-pointer shadow-lg transition-all transform flex items-center justify-center gap-1.5 hover:-translate-y-1 ${activeLayer === 'memory' ? 'bg-teal-50/90 ring-2 ring-teal-500 scale-105' : 'bg-white'}`}
            style={{ transform: 'rotateX(55deg) rotateY(-5deg) translateY(24px) translateZ(40px)' }}
          >
            <Brain className="w-4.5 h-4.5 text-teal-600" />
            <span className="text-xs font-mono text-teal-700 font-bold">Memory 层</span>
          </button>

          {/* User Layer */}
          <button 
            onClick={() => setActiveLayer('user')}
            className={`absolute top-20 w-36 h-10 rounded-full border border-blue-400/80 cursor-pointer shadow-lg transition-all transform flex items-center justify-center gap-1.5 hover:-translate-y-1 ${activeLayer === 'user' ? 'bg-blue-50/90 ring-2 ring-blue-500 scale-105' : 'bg-white'}`}
            style={{ transform: 'rotateX(55deg) rotateY(-5deg) translateY(48px) translateZ(20px)' }}
          >
            <User className="w-4.5 h-4.5 text-blue-600" />
            <span className="text-xs font-mono text-blue-700 font-bold">User 层</span>
          </button>

          {/* Soul Layer */}
          <button 
            onClick={() => setActiveLayer('soul')}
            className={`absolute top-30 w-36 h-10 rounded-full border border-indigo-400/80 cursor-pointer shadow-lg transition-all transform flex items-center justify-center gap-1.5 hover:-translate-y-1 ${activeLayer === 'soul' ? 'bg-indigo-50/90 ring-2 ring-indigo-500 scale-105' : 'bg-white'}`}
            style={{ transform: 'rotateX(55deg) rotateY(-5deg) translateY(72px) translateZ(0px)' }}
          >
            <Bot className="w-4.5 h-4.5 text-indigo-600" />
            <span className="text-xs font-mono text-indigo-700 font-bold">Soul 灵魂层</span>
          </button>
        </div>
        
        <p className="text-[10px] text-slate-400 px-6 text-center mt-6">
          ☝️ 点击不同圆盘图层，解锁这一层如何在后台协助主模型进行推理
        </p>
      </div>

      {/* 记忆详情 */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2.5 h-2.5 rounded-full ${layersInfo[activeLayer].color}`} />
            <h4 className={`text-md font-bold ${layersInfo[activeLayer].textColor}`}>
              {layersInfo[activeLayer].title}
            </h4>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed font-light mb-4">
            {layersInfo[activeLayer].desc}
          </p>

          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">已持久化数据项</span>
          <div className="space-y-1.5">
            {layersInfo[activeLayer].details.map((item, id) => (
              <div key={id} className="flex items-start gap-2 bg-slate-50 border border-slate-100 p-2 rounded-lg text-xs text-slate-600 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50/80 border border-dashed border-slate-200 p-3 rounded-xl mt-4 text-[11px] text-slate-500 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span>四层结构联合协作，构成了 ima.copilot 的 “懂你” 壁垒：它真正让 AI 告别无脑白痴状态。</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 3 COMPONENT: Thesis Outline Comparison
// ==========================================
export function ThesisComparison() {
  const [outlineType, setOutlineType] = useState<'standard' | 'copilot'>('copilot');

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col h-[400px]">
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-700">“课程综述大纲”输出对比</span>
        <div className="flex bg-slate-200/60 p-0.5 rounded-lg text-xs font-medium">
          <button 
            className={`px-3 py-1 rounded-md transition-all ${outlineType === 'standard' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            onClick={() => setOutlineType('standard')}
          >
            普通 AI 给的大纲
          </button>
          <button 
            className={`px-3 py-1 rounded-md transition-all ${outlineType === 'copilot' ? 'bg-white text-teal-600 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-900'}`}
            onClick={() => setOutlineType('copilot')}
          >
            copilot 精准推送
          </button>
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/30">
        <AnimatePresence mode="wait">
          {outlineType === 'standard' ? (
            <motion.div 
              key="std-outline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3 font-mono text-xs text-slate-500"
            >
              <div className="text-sm font-bold text-slate-800 mb-2">《毕业课程论文大纲模版》</div>
              <div className="space-y-2 font-sans">
                <p className="font-semibold text-slate-700">第一章、引言</p>
                <p className="pl-4">1.1 研究背景及意义</p>
                <p className="pl-4">1.2 国内外研究现状 (填入自己专业的现状)</p>
                <p className="pl-4">1.3 论文主要工作与结构安排</p>
                
                <p className="font-semibold text-slate-700 mt-2">第二章、相关理论与方法</p>
                <p className="pl-4">2.1 本研究所涉及的核心概念介绍</p>
                <p className="pl-4">2.2 基础算法与主流方案 (这里根据实际情况撰写即可)</p>
                
                <p className="font-semibold text-slate-700 mt-2">第三章、实际课题实现与测试</p>
                <p className="pl-4">3.1 实验步骤设置</p>
                <p className="pl-4">3.2 数据处理结果 (请参考网上数据)</p>
              </div>
              <div className="text-red-500 bg-red-50 p-2 rounded-lg mt-4 font-sans text-xs">
                ⚠️ 普通 AI 失去了你是光电专业的背景，只能给出模版套路。字里行间到处是“自己填入”、“据实编写”，说了等于没说。
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="cop-outline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3 text-xs text-slate-700 font-sans"
            >
              <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900 mb-2">
                <span className="bg-teal-500 text-white w-4 h-4 rounded text-[9px] flex items-center justify-center font-bold">ToF</span>
                《面向芯片级微光组件的 ToF (飞行时间) 三维传感技术综述》
              </div>
              
              <div className="space-y-1.5 text-slate-600 leading-normal pl-2 border-l-2 border-teal-400">
                <div className="font-bold text-slate-900">第一章、引言</div>
                <p className="pl-3">1.1 自动驾驶与光电检测中三维重构的核心瓶颈</p>
                <p className="pl-3">1.2 **基于光相位延迟的 ToF (间接型 iToF) 与时间振荡计数 (直接型 dToF) 原理对比** (重点对比)</p>
                
                <div className="font-bold text-slate-900 mt-2">第二章、单片光波导发射与接收芯片架构</div>
                <p className="pl-3">2.1 SPAD (单光子雪崩二极管) 阵列与 CMOS 工艺集成</p>
                <p className="pl-3">2.2 **结合微信知识库《ToF_2026_Tech.pdf》中的微透镜滤光方案**：如何滤除强背景噪声</p>
                
                <div className="font-bold text-slate-900 mt-2">第三章、倒计时与单片机通讯电路方案</div>
                <p className="pl-3">3.1 **光电实验里「单片机篮球计时器」中的 0.1ms 级 UART 高精中断计数** (这块已经适配你之前的C51参数)</p>
                <p className="pl-3">3.2 信号时延校准与测试：实测光波导损耗限制与提升路线</p>
              </div>

              <div className="bg-teal-55/70 bg-teal-50/60 p-2.5 rounded-lg border border-teal-100 font-sans text-[11px] text-teal-800 leading-relaxed mt-3 shadow-2xs">
                🌟 **ima.copilot 分析**：太懂你了！它不光知道你是光电专业，还把你平时在微信读书读的 ToF 架构文章、以及以前在聊天里调通过的“篮球计时器单片机 UART 代码”揉和进成了极其切合的高端大纲！
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-3 bg-slate-100/50 border-t border-slate-100 text-xs text-center text-slate-400 font-medium">
        {outlineType === 'standard' ? '🙅 这是一个平庸无奇、任何人都能查得到的通用骨架' : '👏 这是一个量身定制、已经深度融合你过往代码项目和书架论文的“满分”大纲'}
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 4 COMPONENT: Advanced UI Tools Matrix
// ==========================================
export function AdvancedTools() {
  const [selectedTool, setSelectedTool] = useState<string>('cherry');

  const tools = [
    {
      id: 'chatbox',
      name: "Chatbox",
      tagline: "极轻量多端 AI 客户端",
      suit: "临时聊天、喜欢简单、全平台懒人必备",
      adv: "可绑定 OpenAI, Gemini, DeepSeek 任意 API；多端同步，极为敏捷好用。",
      dis: "不带长期记忆 Agent 系统，无微信生态联动，难以管理庞杂知识库。",
      mcp: "不支持 / 极弱",
      theme: "from-blue-500 to-cyan-500"
    },
    {
      id: 'cherry',
      name: "Cherry Studio",
      tagline: "极客级桌面 AI 知识工作站",
      suit: "深度玩家、光电等学术方向，需要 MCP 架构",
      adv: "支持超级丰富的本地模型导入，内含庞大 Agent 应用库；完全适配 MCP 插件标准，能将电脑本地文件、文件夹、编译器串联在一起。",
      dis: "需要自己申请各家 API 并充值，配置门槛中等偏上，对移动端支持弱。",
      mcp: "完美支持 (MCP 标准接口)",
      theme: "from-amber-500 to-rose-500 animate-pulse-subtle"
    },
    {
      id: 'rikka',
      name: "RikkaHub",
      tagline: "安卓端多功能 AI 挂饰",
      suit: "手机党、便携式 AI 挂载、喜欢折腾 API者",
      adv: "在手机上能轻松联动本地脚本，界面极其精美，对国内多模型适配极佳。",
      dis: "对桌面端缺乏支持，缺乏大屏多文档并排阅读分析的高效视图。",
      mcp: "支持移动端 MCP 轻插件",
      theme: "from-violet-500 to-indigo-500"
    }
  ];

  const current = tools.find(t => t.id === selectedTool)!;

  return (
    <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
        <span className="text-xs font-bold text-slate-500">点击切换高级发烧友客户端对比：</span>
        <div className="flex gap-1.5">
          {tools.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTool(t.id)}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${selectedTool === t.id ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-200/50 text-slate-600 hover:bg-slate-200'}`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className={`p-4 rounded-xl text-white bg-gradient-to-r ${current.theme} shadow-sm transition-all duration-300`}>
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">精选发烧友客户端</span>
            <h3 className="text-xl font-extrabold">{current.name}</h3>
          </div>
          <span className="text-xs font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full block">{current.tagline}</span>
        </div>
        <p className="text-xs text-white/90 font-light mt-3">适合：{current.suit}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        <div className="border border-slate-100 p-3 rounded-xl bg-slate-50/50">
          <span className="font-bold text-slate-700 block mb-1">✅ 核心强项：</span>
          <p className="text-slate-600 font-sans leading-relaxed">{current.adv}</p>
        </div>
        <div className="border border-slate-100 p-3 rounded-xl bg-slate-50/50">
          <span className="font-bold text-rose-600 block mb-1">❌ 限制所在：</span>
          <p className="text-slate-600 font-sans leading-relaxed">{current.dis}</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs border border-dashed border-slate-200 p-3 rounded-xl font-mono">
        <span className="text-slate-400">MCP (Model Context Protocol) 适配：</span>
        <span className={`font-bold ${current.mcp.includes('完美') ? 'text-emerald-600' : 'text-slate-400'}`}>
          {current.mcp}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 5 COMPONENT: Prompt -> Skill -> Agent Evolution
// ==========================================
export function ConceptFlow() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "1. Prompt (提示词)",
      subtitle: "人类向 AI 发出的白话指令",
      desc: "“帮我写一下篮球赛 24 秒倒计时器的原理并找出关键代码”。这就是提示词。它是 AI 的最基本指令接口，特点是：『一次性、无工具联动、纯静态交互』。",
      color: "border-blue-400 text-blue-600 bg-blue-50/50",
      icon: <Bot className="w-5 h-5 text-blue-500" />
    },
    {
      title: "2. Skill (技能组合卡)",
      subtitle: "提示词 + 外部API + 业务流 的封装",
      desc: "在 ima.copilot 中，你可以创建一个『C51单片机专家』Skill。它将论文参考文献、UART调试框架强制固化下来，当你说出一句倒计时，它自动读取绑定的微信读书笔记配合输出。特点是：『可重用、绑定工具和背景资料』。",
      color: "border-teal-400 text-teal-600 bg-teal-50/50",
      icon: <Wrench className="w-5 h-5 text-teal-500" />
    },
    {
      title: "3. Agent (全功能智能体)",
      subtitle: "拥有 记忆(Memory) + 自主规划 决断力的超级分身",
      desc: "Agent 不仅包含上面的 Skill，它更拥有 Soul(了解你是谁) 以及 Memory。当你吩咐『帮我把光电毕业大纲拟一下』。它会自己调用 微信读书Skill + RAG 文档深度检索 + 拆分成步骤1、步骤2 去自动编写，无需你人工守在电脑前多轮追问。特点是：『自主、拟合人类心智、懂你、闭环解决问题』。",
      color: "border-indigo-400 text-indigo-600 bg-indigo-50/50",
      icon: <Brain className="w-5 h-5 text-indigo-500" />
    }
  ];

  return (
    <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-4">
      <span className="text-xs font-mono text-slate-400 text-center tracking-widest block">AI 架构进化三部曲 🚀</span>
      
      {/* 流程演变横向排布 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 my-2">
        {steps.map((s, id) => (
          <React.Fragment key={id}>
            <button 
              onClick={() => setStep(id)}
              className={`flex-1 w-full text-left p-3 border-2 rounded-xl cursor-pointer transition-all ${step === id ? `${s.color} border-current shadow-md ring-2 ring-slate-900/10 scale-102` : 'border-slate-100 bg-white opacity-60 hover:opacity-100'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                {s.icon}
                <span className="text-xs font-mono font-extrabold">{s.title}</span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">{s.subtitle}</p>
            </button>
            {id < 2 && (
              <ChevronRight className="w-5 h-5 text-slate-300 md:rotate-0 rotate-90 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 详细释义展示 */}
      <div className="p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/30 font-sans">
        <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-1.5">
          <Bot className="w-4.5 h-4.5 text-slate-600" />
          {steps[step].title} — <span className="text-xs font-normal text-slate-500">{steps[step].subtitle}</span>
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed font-light font-mono">
          {steps[step].desc}
        </p>
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 6 COMPONENT: DeepSeek Key Administrative Dashboard
// ==========================================
export function DeepSeekKeys() {
  const [keys, setKeys] = useState<{ id: string; name: string; key: string; created: string; show: boolean }[]>([
    { id: '1', name: "ima_copilot_connection", key: "sk-dsk982e70df4a029fe801123cdbaec0", created: "2026-05-28", show: false }
  ]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const addNewKey = () => {
    const randomHex = Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('');
    const newK = {
      id: String(keys.length + 1),
      name: `key_for_workspace_${keys.length + 1}`,
      key: `sk-ds${randomHex.substring(0, 30)}`,
      created: "2026-05-28",
      show: false
    };
    setKeys([...keys, newK]);
  };

  const toggleShow = (idx: number) => {
    const updated = [...keys];
    updated[idx].show = !updated[idx].show;
    setKeys(updated);
  };

  const copyKey = (val: string, idx: number) => {
    navigator.clipboard.writeText(val);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900 shadow-xl flex flex-col text-slate-100 font-mono text-xs">
      <div className="bg-slate-950 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-orange-400" />
          <span className="font-extrabold text-xs tracking-tight text-slate-350">DeepSeek Console - API Keys</span>
        </div>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">服务运行：正常</span>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div>
            <h4 className="font-bold text-slate-200">API keys 授权库</h4>
            <p className="text-[10px] text-slate-400 font-light mt-0.5">这些密钥用于在第三方软件(如 ima.copilot) 里获取 DeepSeek 完整的顶尖推理算力。</p>
          </div>
          <button 
            onClick={addNewKey}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-3 rounded-lg shadow-sm font-sans flex items-center gap-1 cursor-pointer shrink-0 transition"
          >
            <Plus className="w-3.5 h-3.5" /> 创建新 Key
          </button>
        </div>

        <div className="space-y-2">
          {keys.map((k, idx) => (
            <div key={k.id} className="bg-slate-950/70 border border-slate-800 p-3 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="font-bold text-slate-200 text-[11px] block">{k.name}</span>
                <div className="flex items-center gap-2 text-slate-400 font-sans">
                  <span>创建日期: {k.created}</span>
                </div>
              </div>

              <div className="flex items-center bg-slate-900 px-2.5 py-1.5 rounded border border-slate-800 w-full md:w-auto max-w-sm justify-between">
                <span className="mr-3 text-emerald-400 font-mono tracking-wide truncate">
                  {k.show ? k.key : `sk-ds••••••••••••••••••••${k.key.substring(k.key.length - 4)}`}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => toggleShow(idx)} className="text-slate-400 hover:text-white transition">
                    {k.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button onClick={() => copyKey(k.key, idx)} className="text-slate-400 hover:text-white transition relative">
                    {copiedIndex === idx ? (
                      <Check className="w-4 h-4 text-emerald-400 animate-scale-up" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-950/50 border-t border-slate-800/80 px-4 py-2.5 text-[10px] text-amber-400 flex items-center gap-1.5 font-sans leading-relaxed">
        <Shield className="w-4 h-4 shrink-0 text-amber-500" />
        <span>⚠️ **安全警告**：API 密钥如同您的数字信用钱包。请勿发在贴吧、微信群或者上传到公开的 GitHub 源码目录，防止额度失窃。</span>
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 7 COMPONENT: Add Model Stepper
// ==========================================
export function ModelSettingsSteps() {
  const [step, setStep] = useState(0);

  const stepsData = [
    {
      label: "步骤 一：获取 DeepSeek 密钥",
      desc: "打开 DeepSeek 开源平台，登录并找到 API Key，一键创建并将生成的 `sk-ds...` 复制到剪贴板中（这一步我们在上面已经模拟啦！）。",
      action: "已备好 Key"
    },
    {
      label: "步骤 二：打开 ima 模型设置",
      desc: "启动桌面端/手机端 ima.copilot，在右下角点击『我』 → 『设置』 → 『添加自定义模型』，选择「DeepSeek」然后贴入你复制的那段密码。",
      action: "贴入钥匙并测试连通性"
    },
    {
      label: "步骤 三：勾选 deepseek-chat 保存",
      desc: "把设置切换为 deepseek-chat (V4 高效推理版本)，点击保存。恭喜！您的私人助理大后台，立刻升级成了目前全国同价位智商一流的顶尖大模型！",
      action: "大功告成！去聊天"
    }
  ];

  return (
    <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-4">
      {/* 进度导航器 */}
      <h4 className="text-xs font-mono text-slate-400 text-center uppercase tracking-widest">在 ima.copilot 中绑定自定义大模型：</h4>
      
      <div className="flex justify-between items-center max-w-md mx-auto w-full px-4">
        {stepsData.map((_, i) => (
          <React.Fragment key={i}>
            <button 
              onClick={() => setStep(i)}
              className={`w-8 h-8 rounded-full border-2 font-bold font-mono text-sm flex items-center justify-center transition-all ${step === i ? 'bg-slate-900 border-slate-900 text-white ring-4 ring-slate-100 scale-110' : i < step ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300'}`}
            >
              {i + 1}
            </button>
            {i < 2 && (
              <div className={`flex-1 h-0.5 mx-2 ${i < step ? 'bg-emerald-400' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 步骤详情 */}
      <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 mt-2">
        <h5 className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
          <CheckCircle className={`w-4 h-4 ${step === 2 ? 'text-emerald-500' : 'text-slate-400'}`} />
          {stepsData[step].label}
        </h5>
        <p className="text-xs text-slate-500 font-light leading-relaxed mt-2 font-mono">
          {stepsData[step].desc}
        </p>
      </div>

      <div className="flex justify-between mt-1.5">
        <button 
          onClick={() => setStep(prev => Math.max(0, prev - 1))}
          className="px-3 py-1.5 text-xs font-bold border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
          disabled={step === 0}
        >
          上一步
        </button>
        <button 
          onClick={() => setStep(prev => Math.min(2, prev + 1))}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-1.5 px-4 text-xs rounded-lg shadow-xs transition flex items-center gap-1 cursor-pointer"
        >
          {step === 2 ? '体验最终切换 🚀' : '下一步'}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 8 COMPONENT: Dialog Model Select & Real-time Chat
// ==========================================
export function DropdownSwitchChat() {
  const [model, setModel] = useState<'hunyuan' | 'deepseek'>('deepseek');
  const [showMenu, setShowMenu] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string; model?: string }[]>([
    { sender: 'user', text: "你好，帮我写个ToF系统的基本公式" },
    { sender: 'ai', text: "在直接飞行时间(dToF)测量系统中，距离 D 是根据光脉冲从发射到返回经历的往返时间 Δt 来确定的。基本理论公式为：\n\n$$D = \\frac{c \\cdot \\Delta t}{2}$$\n\n其中 $c$ 是真空中（或介质中）的光速。在间接飞行时间(iToF)系统中，我们则是通过解调正弦调制光反射后与参考信号之间的相位差 $\\varphi$：\n\n$$D = \\frac{c}{4\\pi \\cdot f_{mod}} \\cdot \\varphi$$\n\n其中 $f_{mod}$ 是光源强度的空间正弦调制频率。此系统通常需要在多相位(如0°, 90°, 180°, 270°)下测量电荷量来完成复原。", model: "DeepSeek V4-Pro" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const simulateAILive = (userText: string) => {
    setIsTyping(true);
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    
    setTimeout(() => {
      let response = "";
      if (model === 'hunyuan') {
        response = `[腾讯混元 3.0 助手] 收到！在光电传感器中，设计 ToF 接收机通常首先考虑背噪压制和 SPAD 的暗计数率(DCR)。你可以点击左侧添加更多微信读书资料以调优分析；若有51单片机工程，请随时发送。`;
      } else {
        response = `[DeepSeek V4-Pro (推理强化)] ✨ 结合你的光电专业背景，我推荐使用四相位相关积分法来解调 iToF 方程式：\n\n$$\\varphi = \\arctan\\left(\\frac{Q_3 - Q_1}{Q_0 - Q_2}\\right)$$\n\n利用在你的 C51 中断中设置的 AD0 读取管脚，将数据在 20ms 的采样周期内做卡尔曼低通滑窗滤波。这样做能够在没有加装双光栅微结构的情况下阻绝强红外溢噪！`;
      }
      setMessages(prev => [...prev, { sender: 'ai', text: response, model: model === 'deepseek' ? 'DeepSeek V4-Pro' : '腾讯混元 3.0' }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isTyping) return;
    simulateAILive(inputVal);
    setInputVal('');
  };

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col h-[400px]">
      {/* 顶部栏 + 切换下拉 */}
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-700">正在与：{model === 'deepseek' ? 'DeepSeek V4-Pro' : '腾讯混元 3.0'} 对话</span>
        
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="bg-slate-200/70 hover:bg-slate-200 px-2.5 py-1 rounded-md text-xs font-bold transition flex items-center gap-1 cursor-pointer text-slate-700"
          >
            <Sliders className="w-3.5 h-3.5" /> 切换模型 ▼
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 w-44 p-1">
              <button 
                onClick={() => { setModel('hunyuan'); setShowMenu(false); }}
                className={`w-full text-left font-mono px-3 py-2 text-xs rounded hover:bg-slate-50 flex items-center justify-between ${model === 'hunyuan' ? 'text-teal-600 font-bold bg-teal-50/20' : 'text-slate-600'}`}
              >
                <span>腾讯混元 3.0 (官方)</span>
                {model === 'hunyuan' && <Check className="w-3.5 h-3.5" />}
              </button>
              <button 
                onClick={() => { setModel('deepseek'); setShowMenu(false); }}
                className={`w-full text-left font-mono px-3 py-2 text-xs rounded hover:bg-slate-50 flex items-center justify-between ${model === 'deepseek' ? 'text-orange-600 font-bold bg-orange-50/20' : 'text-slate-600'}`}
              >
                <span>DeepSeek V4-Pro 🔥</span>
                {model === 'deepseek' && <Check className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 聊天消息区域 */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/20 text-xs">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${m.sender === 'user' ? 'bg-slate-800 text-white rounded-tr-none' : 'bg-white text-slate-800 shadow-sm rounded-tl-none border border-slate-100'}`}>
              <div className="font-mono whitespace-pre-line leading-relaxed font-light">
                {m.sender === 'ai' && (
                  <span className={`text-[9px] uppercase font-bold tracking-widest block mb-1.5 ${m.model?.includes('Deep') ? 'text-orange-500' : 'text-teal-500'}`}>
                    {m.model} 回答 ⚡
                  </span>
                )}
                {m.text}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-2xl px-4 py-2 text-slate-400 italic animate-pulse">
              正在深度思考、搜罗你的专属记忆库和全套 Skill 接口...
            </div>
          </div>
        )}
      </div>

      {/* 输入框 */}
      <form onSubmit={handleSubmit} className="border-t border-slate-100 p-2.5 bg-slate-50 flex gap-2">
        <input 
          type="text" 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={`输入想问的模型 (当前: ${model === 'deepseek' ? 'DeepSeek' : '腾讯混元'})...`}
          className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-300 font-sans"
        />
        <button 
          type="submit" 
          className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-4 py-1.5 text-xs rounded-lg transition shrink-0 cursor-pointer"
        >
          发送
        </button>
      </form>
    </div>
  );
}

// ==========================================
// SIMULATOR 9 COMPONENT: SkillHub Plugin Catalog
// ==========================================
export function SkillHubCatalog() {
  const [skills, setSkills] = useState<{ id: string; name: string; icon: string; count: string; installed: boolean; desc: string; textCol: string; borderCol: string }[]>([
    { id: '1', name: "微信读书", icon: "📚", count: "128.5K 使用", installed: true, desc: "绑定你的书架、读书时长与下划线。写论文缺公式、备考查教材时，一键导入作核心佐证库。", textCol: "text-blue-600", borderCol: "border-blue-200" },
    { id: '2', name: "腾讯新闻", icon: "📰", count: "98.1K 使用", installed: false, desc: "全天候资讯查证，辟谣，防套路。一个指令获得今日朝报与真实深度解析，避免被网络谣言污染思维。", textCol: "text-rose-600", borderCol: "border-rose-200" },
    { id: '3', name: "ima-report", icon: "📊", count: "55.4K 使用", installed: true, desc: "生成结构化学术或商业汇报。输入选题一键生成大纲、对比矩阵与行研结论，写期末论文综述之利器。", textCol: "text-teal-600", borderCol: "border-teal-200" },
    { id: '4', name: "document-pro", icon: "📄", count: "89.2K 使用", installed: false, desc: "学术巨文献超级分析仪。无论多厚多长的多公式理学、工学、电磁、外语 PDF，多层次瞬间融会贯通。", textCol: "text-violet-600", borderCol: "border-violet-200" },
    { id: '5', name: "Data Analysis", icon: "📈", count: "42.0K 使用", installed: false, desc: "工程数据自动计算与高拟真折线图、极坐标图绘制。直接输入 CSV 或矩阵就能在对话中算出均方差。", textCol: "text-amber-600", borderCol: "border-amber-200" },
    { id: '6', name: "summarize", icon: "📝", count: "72.8K 使用", installed: false, desc: "超长文章、深度公众号、B站实战视频、讲座一键精干总结，彻底帮你在这个多信息碎片时代去芜存菁。", textCol: "text-emerald-600", borderCol: "border-emerald-200" },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleInstall = (id: string) => {
    setSkills(prev => prev.map(s => s.id === id ? { ...s, installed: !s.installed } : s));
  };

  const filtered = skills.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
        <div>
          <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
            <LayoutGrid className="w-4.5 h-4.5 text-teal-600" />
            腾讯官方 SkillHub 应用商店
          </h4>
          <span className="text-[10px] text-slate-400 block mt-0.5">为你精排大四光电学生的“黄金必装” 6 大技能：</span>
        </div>
        
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜索 35,000+ 个实战技能..."
            className="w-full bg-white border border-slate-200 pl-8.5 pr-2.5 py-1.5 text-xs rounded-lg outline-none focus:ring-1 focus:ring-teal-500 text-slate-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filtered.map(s => (
          <div key={s.id} className={`border border-solid p-3 rounded-xl flex flex-col justify-between hover:shadow-xs transition ${s.borderCol} ${s.installed ? 'bg-slate-50/20' : 'bg-white'}`}>
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xl">{s.icon}</span>
                <span className="text-[9px] font-mono text-slate-400 font-bold tracking-wider">{s.count}</span>
              </div>
              <h5 className="font-bold text-slate-900 text-xs mb-1">{s.name}</h5>
              <p className="text-[10px] text-slate-500 font-light leading-normal font-sans mb-3">{s.desc}</p>
            </div>

            <button 
              onClick={() => toggleInstall(s.id)}
              className={`w-full font-bold py-1 px-3 text-[10px] rounded-lg transition-all cursor-pointer ${s.installed ? 'bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              {s.installed ? '✓ 已添加至我的 copilot' : '一键启用 Skill'}
            </button>
          </div>
        ))}
      </div>
      
      {/* 底部已安装面包圈概况 */}
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
        <span>当前加载在专属 Agent 上的武器库：</span>
        {skills.filter(s => s.installed).map(s => (
          <span key={s.id} className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md flex items-center gap-1 font-sans">
            <span>{s.icon}</span>
            <span>{s.name}</span>
          </span>
        ))}
        {skills.filter(s => s.installed).length === 0 && (
          <span className="text-rose-500">❌ 空空如也，对话将失去微信读书和报告能力</span>
        )}
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 10 COMPONENT: Literature Flip Accuracy
// ==========================================
export function LiteratureFlip() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
        <div>
          <span className="text-xs font-bold text-slate-500">文献引证可信度深度对比测试</span>
          <p className="text-[10px] text-slate-400 font-light mt-0.5">大四同学们写大论文，参考文献最怕是编造的。看看两种 AI 的做法：</p>
        </div>
        <button 
          onClick={() => setFlipped(!flipped)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-1.5 px-3.5 text-xs rounded-lg transition cursor-pointer font-sans"
        >
          {flipped ? '点击切回: 普通 AI 翻车现场' : '点击查看: copilot 精准实考'}
        </button>
      </div>

      <div className="relative h-64 overflow-hidden rounded-xl border border-dashed border-slate-200 bg-slate-50/20">
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div 
              key="trash-refs"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="absolute inset-0 p-4 flex flex-col justify-between text-rose-800 bg-rose-50/50"
            >
              <div>
                <div className="flex items-center gap-1.5 text-rose-600 mb-2">
                  <AlertTriangle className="w-5 h-5 animate-bounce-subtle" />
                  <span className="font-extrabold text-xs tracking-tight">普通通用型 AI 编造参考文献警告！</span>
                </div>
                
                <div className="space-y-2 border-l-2 border-rose-300 pl-3 text-xs leading-relaxed font-mono text-rose-900">
                  <p className="line-through text-rose-400 font-light">1. [1] 张华, 王五. 《基于飞行时间ToF三维重构理论的改进》. 载《中国光电学报》, 2024年4期: 58-62页.</p>
                  <p className="text-[10px] text-rose-500 italic mt-0.5">⚠️ 真实性：假！历史上根本没有这个刊物，两人在2024也没有发表过此类重构理论论文，属于大模型根据概率编造。</p>
                  
                  <p className="line-through text-rose-400 font-light mt-2">2. [2] Smith, J. etc. \"A high-aperture SPAD design for time-of-flight\". Journal of IEEE Circuits, vol.55, 2023.</p>
                  <p className="text-[10px] text-rose-500 italic mt-0.5">⚠️ 真实性：假！文章卷号、论文名都是拼凑词，去谷歌学术或IEEE Xplore一搜全是空白，直接用在毕业论文答辩中必挂！</p>
                </div>
              </div>
              <div className="text-[10px] text-rose-600 bg-white border border-rose-100 p-2.5 rounded-lg font-sans">
                💡 **翻车原因**：通用大模型只凭神经网络记忆吐字，脑子里根本没有真正的物理学文献库。问它没有的参考文献，它就会“一本正经地胡说八道”。
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="gold-refs"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="absolute inset-0 p-4 flex flex-col justify-between text-teal-850 bg-teal-50/30"
            >
              <div>
                <div className="flex items-center gap-1.5 text-teal-600 mb-2 font-mono">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="font-extrabold text-xs tracking-tight">ima.copilot RAG 关联私有知识库真理溯源!</span>
                </div>
                
                <div className="space-y-2.5 border-l-2 border-teal-400 pl-3 text-xs leading-relaxed font-mono text-teal-900">
                  <p>1. [1] **基于你昨晚在知识库上传的微薄 PDF 英文原文**：D. F. G. etc. \"Indirect Time-of-Flight Sensors: Dynamic Range Extension\", *IEEE Journal of Solid-State Circuits*, vol. 56, no. 8, pp. 2489-2501, 2021.</p>
                  <p className="text-[10px] text-emerald-600 italic">✔ 验证：百分之百真实！直接根据你导入的 PDF 剖析输出，支持原文精点定位阅读。</p>
                  
                  <p className="mt-2">2. [2] **结合你的微信读书书架书籍**：《微机原理及应用系统设计》, 清华大学出版社, 第4章串口寄存器设置, 第105页.</p>
                  <p className="text-[10px] text-emerald-600 italic">✔ 验证：百分之百真实！微信读书 Skill 直接核对目录章节导出，彻底封杀幻觉！</p>
                </div>
              </div>
              <div className="text-[10px] text-teal-800 bg-white border border-teal-100 p-2.5 rounded-lg font-sans leading-normal">
                🔥 **为什么这么准？**：RAG 专利检索机制，直接把你的个人笔记、书籍、电脑 PDF 文献作为专属检索大纲。不是瞎猜，是真的在“翻你的真书”检索完后才进行作答！
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 11 COMPONENT: Multi Scenario Tab Collage
// ==========================================
export function MultiCollage() {
  const [scene, setScene] = useState<'reading' | 'news' | 'code'>('reading');

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col h-[400px]">
      <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-700">日常使用场景多图仿真</span>
        <div className="flex bg-slate-200/60 p-0.5 rounded-lg text-xs font-medium">
          <button 
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${scene === 'reading' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            onClick={() => setScene('reading')}
          >
            <BookOpen className="w-3.5 h-3.5" /> 微信读书联动
          </button>
          <button 
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${scene === 'news' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            onClick={() => setScene('news')}
          >
            <Newspaper className="w-3.5 h-3.5" /> 今日早报核验
          </button>
          <button 
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${scene === 'code' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            onClick={() => setScene('code')}
          >
            <Terminal className="w-3.5 h-3.5" /> 单片机代码修正
          </button>
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/20 font-mono text-xs">
        <AnimatePresence mode="wait">
          {scene === 'reading' && (
            <motion.div 
              key="read-scene"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-3 font-sans"
            >
              <div className="bg-teal-50 border border-teal-150 p-3 rounded-xl">
                <span className="text-[10px] font-mono text-teal-600 font-bold tracking-widest block uppercase mb-1">加载[微信读书] SKILL</span>
                <p className="text-xs text-slate-700 font-semibold mb-1">“我这周在微信读书看的所有关于红外光敏三极管的划线笔记直接输出”</p>
              </div>
              <div className="border border-slate-100 bg-white p-3.5 rounded-xl space-y-2 text-slate-600 text-xs shadow-2xs leading-relaxed">
                <p className="font-bold text-slate-800 border-b border-slate-100 pb-1.5 flex items-center gap-1.5">
                  📚 书名：《光电功能材料与传感器器件》第6章笔记
                </p>
                <div className="bg-slate-50 p-2 rounded-lg font-mono text-[11px] text-slate-500 italic">
                  “划线：当红外光强变化时，本征PN结中的少数载流子扩散时，响应频率极限主要受到极间结电容 C_j 的克制……”
                </div>
                <div className="bg-slate-50 p-2 rounded-lg font-mono text-[11px] text-slate-500 italic mt-2">
                  “划线：为了提高 850nm 处的峰值响应率，常在PN结附近注入锑(Sb)掺杂物，做势垒反射镜……”
                </div>
                <p className="text-[10px] text-teal-600 font-semibold mt-2">⚡ copilot 分析建议：写第七章论文光接收放大时，可将『掺杂物势垒效应』以及『结电容截止主频下降公式』揉和进抗噪综述中！</p>
              </div>
            </motion.div>
          )}

          {scene === 'news' && (
            <motion.div 
              key="news-scene"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-3 font-sans"
            >
              <div className="bg-rose-50 border border-rose-150 p-3 rounded-xl">
                <span className="text-[10px] font-mono text-rose-600 font-bold tracking-widest block uppercase mb-1">加载[腾讯新闻与核验] SKILL</span>
                <p className="text-xs text-slate-750 font-semibold mb-1">“搜一下今天有什么核心的热点新闻，并过滤假雷点”</p>
              </div>
              <div className="border border-slate-100 bg-white p-3.5 rounded-xl space-y-2.5 text-slate-600 text-xs shadow-2xs">
                <div className="flex justify-between text-slate-400 font-mono text-[10px] pb-1 border-b border-slate-100">
                  <span>实时新闻源: 腾讯新闻中心</span>
                  <span>今日: 2026-05-28</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-50/50 p-2 rounded-lg">
                    <span className="bg-rose-500 text-white font-bold text-[9px] px-1.5 py-0.5 rounded mr-1.5">新闻焦点</span>
                    <strong className="text-slate-800 text-xs">大模型标准化多模端侧评估委员会在沪设立</strong>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">昨日，腾讯、百度联合多家工学机构推动了端侧（如手机、IoT芯片）轻量推理架构评估，重点考据 API 回调性能。这跟你在做的单片机边缘智能有点联动哦。</p>
                  </div>
                  <div className="bg-slate-50/50 p-2 rounded-lg">
                    <span className="bg-teal-500 text-white font-bold text-[9px] px-1.5 py-0.5 rounded mr-1.5">较真核证</span>
                    <strong className="text-slate-800 text-xs">网传“C51内核全部被高能RISC-V淘汰”核验</strong>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">【假】腾讯新闻较真平台辟谣：由于极度的低单位报价、超强的车规冗余安全性，传统8051内核在全球年出货量仍大于40亿颗，并非网传全部被替。大家可以安心修学！</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {scene === 'code' && (
            <motion.div 
              key="code-scene"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-3 font-mono"
            >
              <div className="bg-amber-50 border border-amber-150 p-3 rounded-xl font-sans">
                <span className="text-[10px] font-mono text-amber-600 font-bold tracking-widest block uppercase mb-1">加载[单片机专家] SKILL</span>
                <p className="text-xs text-slate-705 font-semibold mb-1">“为什么我的晶振11.0592MHz，UART 接收依然疯狂乱码”</p>
              </div>
              
              <div className="border border-slate-150 bg-slate-900 p-3 rounded-xl text-[11px] text-slate-300 leading-normal space-y-1">
                <p className="text-yellow-400">// 🔍 帮您揪出了问题：</p>
                <p className="text-rose-450 line-through text-slate-500">SCON = 0x50; // 你写的配置 </p>
                <p className="text-rose-450 line-through text-slate-500">TMOD = 0x20; T1 = 0xFD; // 用于 9600 bps</p>
                <p className="text-emerald-400">// 💡 修正建议：你虽然配了寄存器，但漏写了对晶振倍频辅助控制寄存器 PCON 的设置！</p>
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-emerald-400 font-normal leading-relaxed mt-1">
                  PCON &amp;= 0x7F; // SMOD = 0 (波特率不加倍)<br />
                  TR1 = 1; &nbsp; &nbsp; &nbsp;// ⚠️ 你漏掉了最重要的 TR1 = 1 定时器运行启动指令！导致波特率脉冲发不出来，UART自然乱码崩溃。
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ==========================================
// SIMULATOR 12 COMPONENT: Final Mascot Card Banner
// ==========================================
export function MascotCardBanner() {
  return (
    <div className="border border-slate-250 rounded-2xl overflow-hidden shadow-md flex bg-slate-900 border-none relative h-56 text-slate-100 p-6 flex-col md:flex-row justify-between items-center bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950">
      {/* 装饰霓虹背影 */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="space-y-3 z-10 text-center md:text-left">
        <div className="flex gap-1.5 items-center justify-center md:justify-start">
          <span className="w-5 h-5 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-[9px] tracking-tight shrink-0">🐼</span>
          <span className="text-[10px] uppercase tracking-widest font-extrabold text-teal-400">ima.copilot 知识 Agent</span>
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight">“ 聪明是 AI 的及格线，懂你才是 AI 的壁垒 ”</h3>
        <p className="text-xs text-slate-400 font-light max-w-sm md:max-w-md">
          通过深度记忆沉淀和专属外部武器，把它培养成一个比你自己还懂你单片机代码、读书历史的完美终身助理。
        </p>
      </div>

      <div className="z-10 mt-4 md:mt-0 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700/80 flex items-center justify-center relative shadow-lg transform hover:scale-105 transition-all">
          <span className="text-5xl select-none">🐼</span>
          <div className="absolute -bottom-1 -right-1 bg-teal-500 text-white p-1 rounded-full text-[9px] font-bold shadow-sm ring-2 ring-slate-900">
            ACTIVE
          </div>
        </div>
        <span className="text-[10px] text-slate-400 font-mono mt-2 tracking-widest">@ima_personal_agent</span>
      </div>
    </div>
  );
}
