import { ImageSuggestion } from './types';

export const imageSuggestions: ImageSuggestion[] = [
  {
    id: 1,
    title: "ima.copilot 对话界面与普通 AI 对比",
    originalDescription: "ima.copilot 的熊猫头像 + 对话界面截图，展示 copilot 和普通 AI 对话的区别",
    defaultPrompt: "A sleek and modern minimalist 3D rendering of a futuristic tech panda mascot wearing glowing VR glasses, sitting next to a clean holographic micro-chat interface with Chinese words 'ima' and 'copilot'. Soft dark slate grey studio lighting, pastel teal and electric orange accents, high-end visual branding.",
    imageName: "panda_copilot_concept",
    type: "simulator",
    aspectRatio: "4:3"
  },
  {
    id: 2,
    title: "四层记忆系统示意图",
    originalDescription: "ima.copilot 四层记忆系统示意图（Soul / User / Memory / Agent），可手绘或用 ima 官方素材",
    defaultPrompt: "An elegant and premium abstract 3D diagram explaining a four-layer artificial intelligence memory system. Glowing layered semi-transparent glass discs stacked vertically, labeled elegantly with 'Soul', 'User', 'Memory', 'Agent'. Dreamy light rays passing through disks, soft neon blue, golden warm tones, dark carbon fiber background.",
    imageName: "four_layer_memory_system",
    type: "diagram",
    aspectRatio: "1:1"
  },
  {
    id: 3,
    title: "写课程论文大纲对比",
    originalDescription: "豆包/千问 vs copilot 对同一个问题的回答对比截图（用“帮我写课程论文大纲”作为示例）",
    defaultPrompt: "A comparison visualization of two chat screens side-by-side. Left side labeled 'Ordinary AI' with a generic template answer, right side labeled 'ima.copilot' with personalized Optical Engineering graduation thesis outline. Infographic layout, flat design style, clean colors.",
    imageName: "thesis_outline_comparison",
    type: "comparative",
    aspectRatio: "4:3"
  },
  {
    id: 4,
    title: "AI 进阶工具横向对比",
    originalDescription: "工具对比图（ChatBox / Cherry Studio / RikkaHub 三款工具的界面 Logo 排成一行）",
    defaultPrompt: "A beautiful minimalist graphic showing logos and sleek minimalist UI outlines of Chatbox, Cherry Studio, and RikkaHub modern desktop and mobile apps arranged in a clean layout. Cyberpunk elements, premium vector look.",
    imageName: "ai_tool_comparison",
    type: "concept",
    aspectRatio: "16:9"
  },
  {
    id: 5,
    title: "概念递进关系图",
    originalDescription: "概念关系图：Prompt → Skill → Agent 递进关系示意图，可手绘或用思维导图",
    defaultPrompt: "A clean modern high-quality schematic graphic showing 'Prompt to Skill to Agent' evolution. Three glowing nodes connected by golden flowing light streams. Isometric high-tech vector graphics, floating crystal blocks containing complex icons, dark slate premium grid background.",
    imageName: "prompt_skill_agent_flow",
    type: "diagram",
    aspectRatio: "4:3"
  },
  {
    id: 6,
    title: "DeepSeek API Key 安全配置",
    originalDescription: "DeepSeek 官网 API Keys 页面截图，标注“创建 Key”按钮位置（打码 Key值）",
    defaultPrompt: "A sleek modern web dashboard UI of platform.deepseek.com. Highlighted button with neon border reading 'Create API Key', blurred list of keys with dots, clean developer administrative dashboard aesthetic.",
    imageName: "deepseek_api_keys",
    type: "simulator",
    aspectRatio: "16:9"
  },
  {
    id: 7,
    title: "ima 模型设置三步法",
    originalDescription: "ima 模型设置页面的逐步截图（3张拼成一张：添加模型 → 粘贴 Key → 选择模型完成）",
    defaultPrompt: "A three-step horizontal progress layout showing setup screens: 1. Add Custom Model, 2. Enter API Credentials, 3. Success Check. High-fidelity glassmorphism design, clean soft studio lighting.",
    imageName: "model_settings_steps",
    type: "simulator",
    aspectRatio: "16:9"
  },
  {
    id: 8,
    title: "在对话中灵活切换模型",
    originalDescription: "copilot 对话中切换到 DeepSeek 的界面截图，展示模型选择下拉菜单",
    defaultPrompt: "A close-up high-fidelity UI shot of a modern chatbot dropdown menu labeled 'Switch Model'. Selecting 'DeepSeek V4 Pro' with a warm orange dot, surrounding chat UI is sleek dark blue and clean gray.",
    imageName: "switch_model_dropdown",
    type: "simulator",
    aspectRatio: "4:3"
  },
  {
    id: 9,
    title: "ima SkillHub 推荐合集",
    originalDescription: "ima SkillHub 搜索页面截图，展示 Skills 浏览界面",
    defaultPrompt: "A responsive app store interface labeled 'SkillHub'. Grid of beautifully styled cards showing various functional plug-ins like 'WeChat Reading', 'Tencent News', with tiny illustrative icons, modern app store catalog aesthetic.",
    imageName: "skillhub_catalog",
    type: "simulator",
    aspectRatio: "4:3"
  },
  {
    id: 10,
    title: "参考文献真实度拷问",
    originalDescription: "对比图：左侧截图展示千问“编造参考文献”的翻车现场，右侧展示 copilot 基于知识库的准确回答",
    defaultPrompt: "A visual clash split screen. On the left: a red-tinted screen with error stamps and messy made-up optical science sources. On the right: a pristine green-themed clean document structure backed by real references, with golden sparkles.",
    imageName: "reference_accuracy_comparison",
    type: "comparative",
    aspectRatio: "4:3"
  },
  {
    id: 11,
    title: "日常高效使用多场景",
    originalDescription: "日常使用场景的多图拼接：书架截图 + 新闻查询 + 代码分析，展示 copilot 的多种使用方式",
    defaultPrompt: "A beautiful multi-pane collage. Top-left: electronic bookshelf with book covers. Top-right: live summary report of current affairs. Bottom: C51 code file with bug fixes in bright orange and clean blue terminal. Balanced grid layout.",
    imageName: "daily_use_collage",
    type: "concept",
    aspectRatio: "16:9"
  },
  {
    id: 12,
    title: "文章收尾视觉 Banner",
    originalDescription: "文章结尾配图：ima.copilot 的熊猫 Logo + 一句话 “你的知识 Agent” 字样，作为全文收尾",
    defaultPrompt: "A gorgeous widescreen horizontal banner representing 'Your Personal Knowledge Agent'. A modern, friendly cyberpunk panda tech mascot with glowing cyan details, holding an illuminated orb of knowledge filled with digital sparkles. 'Your Intellectual Companion' written in premium elegant lettering.",
    imageName: "knowledge_agent_mascot",
    type: "banner",
    aspectRatio: "16:9"
  }
];
