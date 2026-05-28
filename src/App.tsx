import React, { useState } from 'react';
import { 
  Sparkles, BookOpen, Layers, Bot, Compass, RefreshCw, 
  Settings2, Book, CheckCircle, FileText, ChevronRight,
  ArrowUpRight, Heart
} from 'lucide-react';
import { imageSuggestions } from './data';
import ArticleView from './components/ArticleView';
import ImageLab from './components/ImageLab';
import { 
  ChatComparison, MemoryLayers, ThesisComparison, AdvancedTools, 
  ConceptFlow, DeepSeekKeys, ModelSettingsSteps, DropdownSwitchChat, 
  SkillHubCatalog, LiteratureFlip, MultiCollage, MascotCardBanner 
} from './components/InteractiveSimulators';

export default function App() {
  const [activeSuggestionId, setActiveSuggestionId] = useState<number>(1);
  const [readMode, setReadMode] = useState<'study' | 'zen'>('study');

  const activeSuggestion = imageSuggestions.find(s => s.id === activeSuggestionId)!;

  // 渲染当前处于活动状态的仿真器
  const renderActiveSimulator = () => {
    switch(activeSuggestionId) {
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
      default: return <ChatComparison />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 scroll-smooth antialiased">
      
      {/* 全局 Geometric Balance 顶部导航栏 */}
      <h1 className="sr-only">IMA Copilot 视觉实战指南</h1>
      <header className="h-16 border-b border-slate-200 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-xs flex items-center justify-center shrink-0">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <div>
            <span className="font-bold text-sm md:text-md tracking-tight text-slate-900 block leading-tight">
              画境 · IMA Copilot 视觉实战指南
            </span>
            <span className="text-[10px] font-mono text-indigo-600 block mt-0.5 tracking-wider font-semibold">
              RAG PROCESS WORKSPACE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span 
              onClick={() => setReadMode('study')}
              className={`cursor-pointer transition-colors ${readMode === 'study' ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}
            >
              实战沙盒
            </span>
            <span 
              onClick={() => setReadMode('zen')}
              className={`cursor-pointer transition-colors ${readMode === 'zen' ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}
            >
              沉浸阅读
            </span>
          </div>
          <button 
            onClick={() => {
              alert("已打包并导出当前 AI 配图指南全部大纲与配置成果！");
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-xs font-semibold shadow-sm hover:bg-indigo-700 transition-colors active:scale-95"
          >
            导出全部
          </button>
        </div>
      </header>

      {/* 主工作空间 */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 lg:py-8 w-full flex-1">
        <div className={`grid grid-cols-1 ${readMode === 'zen' ? 'lg:grid-cols-1 max-w-3xl mx-auto' : 'lg:grid-cols-12'} gap-8 items-start`}>
          
          {/* 选项一：左侧快捷目录 (Geometric Balance Design) */}
          {readMode === 'study' && (
            <div className="hidden xl:block xl:col-span-3 space-y-5 text-left sticky top-22">
              <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">当前大纲内容</h2>
                  <span className="bg-indigo-50 px-2 py-0.5 rounded text-[9px] text-indigo-600 font-mono font-bold">12 SUGGESTIONS</span>
                </div>
                <div className="space-y-1 text-xs max-h-[380px] overflow-y-auto pr-1">
                  {imageSuggestions.map(s => {
                    const isSelected = s.id === activeSuggestionId;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setActiveSuggestionId(s.id);
                          document.getElementById(`suggestion-anchor-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className={`w-full text-left py-2 px-3 border-l-2 transition-all flex items-center gap-2 truncate ${
                          isSelected 
                            ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 font-bold font-mono pl-4' 
                            : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-light'
                        }`}
                      >
                        <span className="font-mono text-[9px] w-4 shrink-0 font-bold opacity-60">#{s.id}</span>
                        <span className="truncate">{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 学长毕业彩蛋卡片 - Geo themed */}
              <div className="border border-slate-200 p-5 rounded-lg bg-white space-y-3">
                <span className="text-[9.5px] font-bold font-mono text-slate-400 uppercase tracking-widest block">学长光电致谢:</span>
                <p className="text-xs leading-relaxed text-slate-500 font-serif italic">
                  “大四毕业季为了盲审，正是用 copilot 过滤查出 30 几篇超强英文 ToF 激光探测原图，完成了我的答辩，今天把全套干货配图实战献上。”
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-indigo-600 font-bold pt-1 border-t border-slate-100">
                  <Heart className="w-3.5 h-3.5 fill-current text-indigo-600 animate-pulse" />
                  <span>祝各位学弟学妹大捷！</span>
                </div>
              </div>
            </div>
          )}

          {/* 选项二：中间长篇大纲文章区 */}
          <div className={`${readMode === 'zen' ? 'col-span-full' : 'lg:col-span-7 xl:col-span-5 lg:border-r lg:border-slate-200 lg:pr-8'} space-y-4`}>
            <div className="bg-white border border-slate-200 p-6 md:p-10 rounded-lg shadow-xs">
              <ArticleView 
                activeSuggestionId={activeSuggestionId} 
                onSelectSuggestion={(id) => {
                  setActiveSuggestionId(id);
                }} 
              />
            </div>
          </div>

          {/* 选项三：右侧仿真操盘区 + AI 绘图室 */}
          {readMode === 'study' && (
            <div className="lg:col-span-5 xl:col-span-4 space-y-6 sticky top-22 text-left">
              
              {/* 实战交互沙箱 (Sandbox) with Indigo Highlight ring to show structural focus */}
              <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-sm ring-2 ring-indigo-500/20 ring-offset-1 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    实战交互沙箱 (Sandbox)
                  </h4>
                  <span className="text-[10px] text-slate-500 font-mono font-medium">IMG-{activeSuggestionId} ACTIVE</span>
                </div>
                
                {/* 仿真交互组件 */}
                <div className="min-h-[300px]">
                  {renderActiveSimulator()}
                </div>
              </div>

              {/* 配图提示词与 Imagen AI 画廊实验室 */}
              <div className="h-[480px]">
                <ImageLab 
                  activeSuggestionId={activeSuggestionId} 
                  onSelectSuggestion={(id) => {
                    setActiveSuggestionId(id);
                  }} 
                />
              </div>

            </div>
          )}

        </div>
      </main>

      {/* Bottom Status Bar matching Geometric Balance footer motif */}
      <footer className="h-12 bg-slate-900 text-white px-6 md:px-8 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-medium shrink-0">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-none">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            GPU STATUS: ACTIVE
          </span>
          <span>MODEL: FLUX-CONCEPT-V1</span>
          <span className="text-indigo-400">THEME: GEOMETRIC BALANCE</span>
          <span className="text-emerald-400 hidden sm:inline">GENERATION: SEQUENTIAL MODE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="opacity-50 text-[9px]">v1.0.4 - BUILD 2026</span>
        </div>
      </footer>

    </div>
  );
}

