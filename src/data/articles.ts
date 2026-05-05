export type ArticleLocale = 'en' | 'zh';

export interface ArticleMeta {
  slug: string;
  lang: ArticleLocale;
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
  langHref: string;
  tags: string[];
  feature: string;
}

export const articles: ArticleMeta[] = [
  {
    slug: 'let-your-ai-agent-manage-aweskill-for-you',
    lang: 'en',
    title: 'Let Your AI Agent Manage aweskill for You',
    description:
      'A practical guide to letting coding agents bootstrap aweskill, install Skills, build Bundles, check updates, and repair local Skill state.',
    date: '2026-05-05',
    readTime: '7 min read',
    href: '/articles/let-your-ai-agent-manage-aweskill-for-you',
    langHref: '/zh/articles/let-your-ai-agent-manage-aweskill-for-you',
    tags: ['Agent-operated', 'README.ai.md', 'Doctor'],
    feature: 'Agent autonomy',
  },
  {
    slug: 'stop-copying-skills',
    lang: 'en',
    title: 'Stop Copying Skills Into Every AI Agent',
    description:
      'How aweskill fixes the multi-agent Skill mess with one central store, multi-agent projection, Bundles, source-tracked updates, and recovery.',
    date: '2026-05-04',
    readTime: '8 min read',
    href: '/articles/stop-copying-skills',
    langHref: '/zh/articles/stop-copying-skills',
    tags: ['Multi-agent', 'Projection', 'Bundles'],
    feature: 'Skill sharing',
  },
  {
    slug: 'let-your-ai-agent-manage-aweskill-for-you',
    lang: 'zh',
    title: '让 AI Agent 自己管理 aweskill',
    description:
      '让 coding agent 自己完成 aweskill 引导、安装 Skills、创建 Bundle、检查更新，并在需要时修复本地 Skill 状态。',
    date: '2026-05-05',
    readTime: '7 分钟阅读',
    href: '/zh/articles/let-your-ai-agent-manage-aweskill-for-you',
    langHref: '/articles/let-your-ai-agent-manage-aweskill-for-you',
    tags: ['Agent 自主操作', 'README.ai.md', 'Doctor'],
    feature: 'Agent 自管理',
  },
  {
    slug: 'stop-copying-skills',
    lang: 'zh',
    title: '别再把 Skills 复制到每个 AI Agent 里了',
    description:
      'aweskill 如何用中央仓库、多 Agent 投影、Bundle、来源追踪更新和恢复能力，解决多 Agent Skill 管理混乱。',
    date: '2026-05-04',
    readTime: '8 分钟阅读',
    href: '/zh/articles/stop-copying-skills',
    langHref: '/articles/stop-copying-skills',
    tags: ['多 Agent', '投影', 'Bundle'],
    feature: 'Skills 共享',
  },
];

export function getArticles(lang: ArticleLocale) {
  return articles.filter((article) => article.lang === lang);
}
