import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, ShieldAlert, BadgeInfo, Layout, BookOpen, Settings2 } from 'lucide-react';
import { imageSuggestions } from '../data';
import { 
  ChatComparison, MemoryLayers, ThesisComparison, AdvancedTools, 
  ConceptFlow, DeepSeekKeys, ModelSettingsSteps, DropdownSwitchChat, 
  SkillHubCatalog, LiteratureFlip, MultiCollage, MascotCardBanner 
} from './InteractiveSimulators';

interface ArticleViewProps {
  onSelectSuggestion: (id: number) => void;
  activeSuggestionId: number;
}

export default function ArticleView({ onSelectSuggestion, activeSuggestionId }: ArticleViewProps) {
  // 渲染文章内的配图标志框。当点击时会激发 activeSuggestionId 的改变
  const renderImageAnchor = (id: number) => {
    const suggestion = imageSuggestions.find(s => s.id === id);
    if (!suggestion) return null;

    const isActive = activeSuggestionId === id;

    return (
      <div 
        id={`suggestion-anchor-${id}`}
        onClick={() => onSelectSuggestion(id)}
        className={`my-8 p-5 transition-all cursor-pointer group relative overflow-hidden text-left ${
          isActive 
            ? 'bg-slate-900 border-l-4 border-l-indigo-600 text-white shadow-lg border-y border-r border-slate-900 scale-[1.01]' 
            : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-800'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-650'}`}>
                配图建议 #{id}
              </span>
              <span className={`text-xs font-medium ${isActive ? 'text-indigo-400' : 'text-slate-400'}`}>
                {suggestion.type === 'simulator' ? '交互仿真器' : suggestion.type === 'diagram' ? '递进图表' : '概念插图'}
              </span>
            </div>
            <h4 className={`text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-950'}`}>{suggestion.title}</h4>
            <p className={`text-xs font-light font-mono ${isActive ? 'text-slate-350' : 'text-slate-500'}`}>{suggestion.originalDescription}</p>
          </div>

          <div className="flex items-center gap-2 select-none shrink-0 text-xs font-bold font-sans">
            <span className={isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-indigo-650 group-hover:translate-x-0.5 transition-all'}>
              {isActive ? '正在右侧显示 ⚡' : '点击聚焦与仿真 ⏱'}
            </span>
            <ArrowRight className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-450 group-hover:translate-x-1 transition-all'}`} />
          </div>
        </div>

        {/* 内嵌的小提示：小屏幕直接展开仿真 */}
        <div className="mt-3 md:hidden border-t border-slate-200/20 pt-3">
          {renderInlineSimulator(id)}
        </div>
      </div>
    );
  };

  // 渲染内嵌或辅助仿真器 (只在窄屏内嵌，或右侧大屏时也会调用)
  const renderInlineSimulator = (id: number) => {
    switch(id) {
      case 1: return <ChatComparison />;
      case 2: return <MemoryLayers />;
      case 3: return <ThesisComparison />;
      case 4: return <AdvancedTools />;
      case 5: return <ConceptFlow />;
      case 6: return <DeepSeekKeys />;
      case 7: return <ModelSettingsSteps />;
      case 8: return <DropdownSwitchChat />;
      case 9: return <SkillHubCatalog />;
      case 10: return <LiteratureFlip />;
      case 11: return <MultiCollage />;
      case 12: return <MascotCardBanner />;
      default: return null;
    }
  };

  return (
    <div className="font-sans leading-relaxed text-slate-800 text-sm md:text-md space-y-6 max-w-2xl mx-auto py-4">
      
      {/* 封面/大标题 */}
      <div className="space-y-4 text-left border-b border-slate-100 pb-6">
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-widest">
          <BookOpen className="w-4 h-4" />
          光电信息毕业实战经历分享
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
          从 "每次重新自我介绍" 到 "越用越懂你"：为什么我把 AI 助手换成了 ima.copilot
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-550 font-mono bg-indigo-50/25 px-4 py-3 border-l-4 border-l-indigo-600 border-y border-r border-slate-200">
          <span className="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-xs text-[10px]">WRITER</span>
          <span className="font-extrabold text-slate-900">光电大四学长</span>
          <span className="text-slate-350">|</span>
          <span>方向：ToF飞行检测 &amp; 边缘MCU电路</span>
          <span className="text-slate-350">|</span>
          <span>2026年5月</span>
        </div>
      </div>

      {/* 正文 */}
      <p className="font-light text-slate-600 text-sm md:text-md leading-relaxed">
        打开豆包或千问，问了一个问题，回答还不错。第二天再打开，问了一个相关的问题——它完全忘了你昨天说过什么。你只能把背景、专业、需求<strong className="font-bold text-slate-900">从头再说一遍</strong>。
      </p>
      <p className="font-light text-slate-600 text-sm md:text-md leading-relaxed">
        一次两次还好。几十次之后，真的很累。
      </p>
      <div className="border-l-4 border-slate-900 pl-4 py-1 my-4 italic text-slate-500 text-xs md:text-sm font-sans bg-slate-50 rounded-r-lg">
        “一个不知道你是谁、在做什么、学过什么的 AI，它给的答案永远是『大众款』，而不是『为你定制的』。”
      </div>
      <p className="font-light text-slate-600 text-sm md:text-md leading-relaxed">
        这就是我转向 ima.copilot 的原因。
      </p>

      {/* 配图 1 */}
      {renderImageAnchor(1)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          一、ima.copilot 是什么？
        </h3>
        <p className="font-light text-slate-600 leading-relaxed mb-4">
          简单说，ima.copilot 是腾讯推出的 <strong className="font-bold text-slate-900">AI 知识 Agent</strong>。它不只是聊天工具，而是一个：
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs font-mono text-slate-600 text-left">
          <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-2">
            <span className="text-base">🧠</span>
            <div>
              <strong className="text-slate-900 block my-0.5">有记忆的</strong>
              <span>记住你的专业、背景、正在推进的项目</span>
            </div>
          </li>
          <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-2">
            <span className="text-base">📚</span>
            <div>
              <strong className="text-slate-900 block my-0.5">有知识库的</strong>
              <span>你可以把自己的文档、笔记、论文丢进去，基于你的私有知识回答</span>
            </div>
          </li>
          <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-2">
            <span className="text-base">🔧</span>
            <div>
              <strong className="text-slate-900 block my-0.5">能装技能的</strong>
              <span>像手机装 App 一样，给它装 Skill (技能)，能做更多专业事</span>
            </div>
          </li>
          <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-2">
            <span className="text-base">🤖</span>
            <div>
              <strong className="text-slate-900 block my-0.5">Agent 级别的</strong>
              <span>不只是单轮问答，还能自主规划分解复杂的多步任务</span>
            </div>
          </li>
        </ul>
      </div>

      {/* 配图 2 */}
      {renderImageAnchor(2)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          二、它和豆包、千问、DeepSeek 有什么区别？
        </h3>
        <p className="font-light text-slate-600 leading-relaxed mb-3">
          我做过真实的对比：
        </p>

        {/* 表格 */}
        <div className="overflow-x-auto my-4 border border-slate-150 rounded-xl bg-white text-[11px] font-mono text-slate-700">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-150 text-slate-800">
                <th className="p-2.5 font-bold">维度</th>
                <th className="p-2.5 font-bold">豆包（字节）</th>
                <th className="p-2.5 font-bold">通义千问（阿里）</th>
                <th className="p-2.5 font-bold">DeepSeek</th>
                <th className="p-2.5 font-bold text-teal-600">ima.copilot（腾讯）</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-2.5 font-bold bg-slate-50/30">本质</td>
                <td className="p-2.5">AI 聊天 App</td>
                <td className="p-2.5">AI 聊天 App</td>
                <td className="p-2.5">AI 聊天 App</td>
                <td className="p-2.5 font-bold text-teal-700">知识 Agent 平台</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-2.5 font-bold bg-slate-50/30">会聊天吗</td>
                <td className="p-2.5 text-emerald-600">✅</td>
                <td className="p-2.5 text-emerald-600">✅</td>
                <td className="p-2.5 text-emerald-600">✅</td>
                <td className="p-2.5 text-emerald-600 font-bold">✅</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-2.5 font-bold bg-slate-50/30">懂你在干嘛吗</td>
                <td className="p-2.5 text-rose-500">❌ 每次重来</td>
                <td className="p-2.5 text-rose-500">❌ 每次重来</td>
                <td className="p-2.5 text-rose-500">❌ 每次重来</td>
                <td className="p-2.5 font-bold text-teal-600 bg-teal-50/10">✅ 四层记忆系统</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-2.5 font-bold bg-slate-50/30">私有知识库</td>
                <td className="p-2.5 text-rose-500">❌ 没有</td>
                <td className="p-2.5 text-rose-500">❌ 没有</td>
                <td className="p-2.5 text-rose-500">❌ 没有</td>
                <td className="p-2.5 font-bold text-teal-600 bg-teal-50/10">✅ 深度绑定读书库</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-2.5 font-bold bg-slate-50/30">装专属技能</td>
                <td className="p-2.5 text-rose-500">❌ 没有</td>
                <td className="p-2.5 text-rose-500">❌ 没有</td>
                <td className="p-2.5 text-rose-500">❌ 没有</td>
                <td className="p-2.5 font-bold text-teal-600 bg-teal-50/10">✅ SkillHub 4.5万+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-light text-slate-600 leading-relaxed mb-4">
          <strong className="font-bold text-slate-900 border-b-2 border-dashed border-teal-300 pb-0.5">一句说清：豆包/千问/DeepSeek 是『聊天工具』，每次对话都是孤立的。ima.copilot 是『私人助理』，用得越久，越像你的数字大脑分身。</strong>
        </p>
      </div>

      {/* 配图 3 */}
      {renderImageAnchor(3)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          三、想玩得更深？这些进阶工具可以了解
        </h3>
        <p className="font-light text-slate-600 leading-relaxed mb-3">
          如果你对 AI 工具有更多好奇心，这里还有三款值得玩味的：
        </p>

        <ul className="space-y-2 text-xs font-mono text-slate-600">
          <li className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100 text-left">
            <span className="font-bold text-slate-900 min-w-28 shrink-0">1. ChatBox</span>
            <span>轻量多接口模型聊天客户端，适合不想安装一堆大块头 APP 的程序员。</span>
          </li>
          <li className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100 text-left">
            <span className="font-bold text-slate-900 min-w-28 shrink-0">2. Cherry Studio</span>
            <span>AI 桌面顶尖级工作站，内置 Agent 插件，支持 MCP 标准去串联和读取你电脑本地的 Keil 源码等。</span>
          </li>
          <li className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100 text-left">
            <span className="font-bold text-slate-900 min-w-28 shrink-0">3. RikkaHub</span>
            <span>安卓本地多用 AI 聚合客户端，手机爱好者的折腾玩具。</span>
          </li>
        </ul>
      </div>

      {/* 配图 4 */}
      {renderImageAnchor(4)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          四、先搞懂这几个大白话概念，不然容易懵
        </h3>
        <p className="font-light text-slate-600 leading-relaxed mb-4">
          在配置 Skill 和模型之前，先理清几个常听到的专业名词：
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden text-xs font-mono">
          <div className="grid grid-cols-3 bg-slate-50 py-2 border-b border-slate-200 text-slate-900 font-extrabold px-3">
            <span>术语</span>
            <span>大白话释义</span>
            <span>大厂类比</span>
          </div>
          <div className="divide-y divide-slate-100 px-3 py-1 bg-white text-slate-600">
            <div className="grid grid-cols-3 py-2">
              <span className="font-bold text-slate-800">Prompt</span>
              <span>你调戏AI说的大白话</span>
              <span>跟助理说的一句话指令</span>
            </div>
            <div className="grid grid-cols-3 py-2">
              <span className="font-bold text-teal-600">Skill</span>
              <span>提示词 + 代码 + API 的组合工具包</span>
              <span>提前备在助理手里的绝活操作手册</span>
            </div>
            <div className="grid grid-cols-3 py-2">
              <span className="font-bold text-indigo-600">Agent</span>
              <span>能自主规划多步完成任务的 AI</span>
              <span>不用你守着，自己能跑全套流程的干员</span>
            </div>
            <div className="grid grid-cols-3 py-2">
              <span className="font-bold text-slate-800">RAG</span>
              <span>让 AI 顺着你上传的书本查找答案</span>
              <span>不是背答案，而是当场查阅参考书</span>
            </div>
          </div>
        </div>
      </div>

      {/* 配图 5 */}
      {renderImageAnchor(5)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          五、实操：在 ima.copilot 里配置 DeepSeek V4 Pro
        </h3>
        <p className="font-light text-slate-600 leading-relaxed">
          ima 默认使用的是腾讯自己的模型。虽然已经很好用，但它<strong className="font-bold text-slate-900">支持外接你喜欢的任意闭源/开源模型</strong>。大四学长我极力推荐外接 <strong className="font-bold text-slate-900">DeepSeek</strong>：逻辑推理顶尖，写工程代码毫无语法毛刺，且价格比各家便宜了一大截！
        </p>
      </div>

      {/* 配图 6 */}
      {renderImageAnchor(6)}

      <div className="pt-2">
        <p className="font-light text-slate-600 leading-relaxed">
          拿到 DeepSeek 密钥之后，在 ima 中进行简单绑定：
        </p>
      </div>

      {/* 配图 7 */}
      {renderImageAnchor(7)}

      <div className="pt-2">
        <p className="font-light text-slate-600 leading-relaxed">
          保存后。下一次当要问跟单片机原理相关的学术重难点时，在对话窗口下方，点击切换模型便可直接唤醒 DeepSeek 迎战！
        </p>
      </div>

      {/* 配图 8 */}
      {renderImageAnchor(8)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          六、装上这些 Skill，效率翻倍
        </h3>
        <p className="font-light text-slate-600 leading-relaxed mb-4">
          Skill 绝对是 ima.copilot 高速突进的羽翼。不要乱装，只选最匹配大四学生科研、写文档和获取资讯刚需的几个：
        </p>
      </div>

      {/* 配图 9 */}
      {renderImageAnchor(9)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          七、真实案例：光电大四本科生写 ToF 论文的“降维敲击”
        </h3>
        <p className="font-light text-slate-600 leading-relaxed mb-3">
          写 ToF (飞行时间系统) 课程综述时，普通 AI 与配置好的专属 copilot 做一记对比：
        </p>
        <p className="font-light text-slate-600 leading-relaxed mb-3">
          普通 AI 在脑子空空没有实体支撑的情况下回答，为了应付主人，非常容易幻觉性幻设“根本不存在的新闻、期刊和学术论点”。然而 copilot 直接基于知网拉过来的 PDF 知识库作答，并提供一键定位出处，把幻觉风险降到接近于零。
        </p>
      </div>

      {/* 配图 10 */}
      {renderImageAnchor(10)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          八、除了写论文，它还在帮我做什么
        </h3>
        <p className="font-light text-slate-600 leading-relaxed mb-3">
          从查阅今日大事、分析微信划分笔记，到深夜时寻找单片机波特率乱码的硬件配置 Bug。它都完美顶上：
        </p>
      </div>

      {/* 配图 11 */}
      {renderImageAnchor(11)}

      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-950 mb-2">
          九、结语：聪明是 AI 的及格线，懂你才是 AI 的壁垒
        </h3>
        <p className="font-light text-slate-600 leading-relaxed">
          正如毕业论文终归是咱们自己的心血。豆包、千问也许是这个世界上很聪明的一帮导师，但他们太忙太健忘了。能时常留在你的电脑跟前，翻你的书，看你每一句代码注释，知道你专业瓶颈的那个，唯有你自己去花心思、有心持久打造出来的那个『数字伴侣』。
        </p>
      </div>

      {/* 配图 12 */}
      {renderImageAnchor(12)}

    </div>
  );
}
