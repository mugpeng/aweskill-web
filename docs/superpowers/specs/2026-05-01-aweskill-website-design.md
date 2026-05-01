# aweskill Website Design Spec

## Overview

Minimal landing page for aweskill, a CLI-first skill package manager for AI agents. Primary goal: drive installs. Secondary: community trust via agent count and badges. Bilingual (EN/ZH). Very few words.

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS v4
- **Design System:** DESIGN.md (google-labs-code/design.md spec)
- **Deployment:** Static files, GitHub Pages compatible

## Directory Structure

```
website/
├── DESIGN.md              # Design system (YAML tokens + markdown rationale)
├── astro.config.mjs
├── tailwind.config.ts
├── package.json
├── tsconfig.json
├── src/
│   ├── pages/
│   │   ├── index.astro          # English homepage
│   │   └── zh/index.astro       # Chinese homepage
│   ├── i18n/
│   │   ├── en.json              # English strings
│   │   └── zh.json              # Chinese strings
│   ├── layouts/
│   │   └── Layout.astro         # Base layout (head, fonts, dark/light toggle)
│   └── components/
│       ├── Header.astro         # Logo + lang toggle + GitHub link
│       ├── Hero.astro           # Tagline + two install CTAs + badges
│       ├── Features.astro       # 4 feature cards
│       ├── Agents.astro         # Agent logo grid
│       └── Footer.astro         # Links
└── public/
    └── logo.png
```

## Page Sections

### Header (sticky top)
- Left: aweskill logo + text
- Right: `EN | 中` toggle, GitHub icon link

### Hero
- H1: "aweskill"
- Subtitle: "Skill Package Manager for AI Agents" / "AI Agent 的技能包管理器"
- Two install boxes side by side:
  - **Human:** terminal-style code block with `npm install -g aweskill` + copy button
  - **AI Agent:** `Read https://github.com/mugpeng/aweskill/blob/main/README.ai.md` + copy button
- Badge row: version / node / license / 47 agents

### Features
- 4 cards (icon + title + one sentence):
  - Install — from npm, GitHub, local paths
  - Bundle — package skills by project/team
  - Project — symlink to 47+ AI agents
  - Doctor — auto-detect and fix broken links

### Agents
- Title: "Works with 47+ AI Agents"
- Logo grid for major agents, text list for the rest

### Footer
- GitHub / npm / License (MPL-2.0) / README links

## Color Palette

### Dark (default, matches logo)
| Token | Hex | Usage |
|-------|-----|-------|
| background | #0B0D1A | Page background |
| surface | #141829 | Cards/sections |
| on-surface | #FFFFFF | Primary text |
| secondary | #B8C0D0 | Subtitles |
| accent | #6366F1 | Buttons/links |
| accent-hover | #818CF8 | Hover state |
| outline | #1E2440 | Borders |

### Light
| Token | Hex | Usage |
|-------|-----|-------|
| background | #F8F9FC | Page background |
| surface | #FFFFFF | Cards/sections |
| on-surface | #0F172A | Primary text |
| secondary | #64748B | Subtitles |
| accent | #4F46E5 | Buttons/links |
| accent-hover | #6366F1 | Hover state |
| outline | #E2E8F0 | Borders |

## Typography

- **Body:** Inter, system-ui, sans-serif
- **Code:** JetBrains Mono, Fira Code, monospace

## i18n

- `/` serves English, `/zh` serves Chinese
- Language toggle in header switches between them
- All strings in JSON dictionary files
- `<html lang="en">` / `<html lang="zh">` for SEO

## Design Principles

- Fewest words possible
- Terminal/code aesthetic for install commands
- Dark mode default (matches brand logo)
- System preference detection for light mode
- Manual toggle override
