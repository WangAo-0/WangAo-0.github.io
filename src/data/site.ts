export const site = {
  name: "WangAo-0",
  title: "WangAo-0 | 技术博客、产品原型与思考",
  description: "WangAo-0 的个人知识主页，记录技术路线、博客、产品原型和长期思考。",
  url: "https://wangao-0.github.io",
  email: "oliverdebox@163.com",
  resumeUrl: "/resume/WangAo-0-resume.pdf",
  githubUrl: "https://github.com/WangAo-0",
  mediaLinks: [
    { label: "Bilibili", href: "#", note: "待补充主页链接" },
    { label: "YouTube", href: "#", note: "待补充频道链接" },
    { label: "小红书 / 知识视频", href: "#", note: "待补充平台链接" },
  ],
};

export const blogCategories = [
  {
    id: "network",
    title: "网络",
    description: "协议、网络调试、分布式通信、Web 访问链路。",
  },
  {
    id: "database",
    title: "数据库",
    description: "数据建模、查询优化、事务、向量数据库和数据组织。",
  },
  {
    id: "system",
    title: "系统",
    description: "操作系统、工程环境、部署、性能和可靠性。",
  },
  {
    id: "ai-application",
    title: "AI 应用",
    description: "把 AI 接入真实工作流，关注提示词、harness 和评估。",
    children: [
      { title: "提示词", description: "任务表达、上下文组织、输出约束和提示词复盘。" },
      { title: "Harness", description: "工具调用、评测脚手架、数据流和自动化运行环境。" },
    ],
  },
  {
    id: "ai-inference",
    title: "AI 推理",
    description: "模型推理、上下文窗口、服务部署、吞吐和成本。",
  },
  {
    id: "ai-training",
    title: "AI 训练",
    description: "数据、训练流程、微调、评估和实验记录。",
  },
  {
    id: "prototype",
    title: "产品原型",
    description: "从想法到可用产品的原型设计、验证和复盘。",
  },
];

export const prototypes = [
  {
    title: "自动化开发提效的 Agent 程序员包",
    category: "Agentic Developer Kit",
    description:
      "一个不只是会写代码的 agent，而是包含外围环境、开发准则、测试规范和上线维护流程的完整产品交付系统。",
    scope: ["需求沟通", "方案设计", "开发实现", "测试验证", "上线发布", "维护优化", "新需求迭代"],
  },
  {
    title: "炒股理财的 Agent 平台",
    category: "Finance Agent Platform",
    description:
      "面向个人投资研究的 agent 平台，聚焦信息汇总、风险提示、策略复盘和决策辅助，不替代用户判断。",
    scope: ["资讯聚合", "组合跟踪", "风险提示", "策略复盘"],
  },
  {
    title: "个性化信息洞察系统",
    category: "Personal Insight System",
    description:
      "持续搜集、组织和总结个人关注的信息，并输出更有价值的 insight，而不是只做信息搬运。",
    scope: ["信息搜集", "主题聚类", "摘要生成", "洞察输出"],
  },
  {
    title: "多 Agent 协作平台",
    category: "Multi-Agent Collaboration",
    description:
      "探索多个 agent 如何分工、协作、互相审查和交付复杂任务，重点关注协议、边界和可观测性。",
    scope: ["任务拆解", "角色分工", "协作协议", "结果评审"],
  },
];

export const roadmap = [
  {
    stage: "01",
    title: "夯实 Web 与工程基础",
    items: ["HTML/CSS/JavaScript", "Git 与 GitHub", "静态站点部署", "基础测试和文档"],
  },
  {
    stage: "02",
    title: "建立后端、数据库和系统视角",
    items: ["网络协议", "数据库设计", "接口设计", "日志、监控和性能"],
  },
  {
    stage: "03",
    title: "系统化学习 AI 工程",
    items: ["提示词工程", "Agent harness", "推理服务", "训练和评估"],
  },
  {
    stage: "04",
    title: "做可用的产品原型",
    items: ["自动化开发 agent", "投资研究 agent", "信息洞察系统", "多 agent 协作平台"],
  },
];
