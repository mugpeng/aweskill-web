---
name: aweskill
description: CLI-first skill package manager for AI agents
colors:
  background: "#0B0D1A"
  surface: "#141829"
  on-surface: "#FFFFFF"
  secondary: "#B8C0D0"
  accent: "#6366F1"
  accent-hover: "#818CF8"
  outline: "#1E2440"
  light-background: "#F8F9FC"
  light-surface: "#FFFFFF"
  light-on-surface: "#0F172A"
  light-secondary: "#64748B"
  light-accent: "#4F46E5"
  light-accent-hover: "#6366F1"
  light-outline: "#E2E8F0"
typography:
  display-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  body-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono, Fira Code, monospace
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    typography: "{typography.label-sm}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  code-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.code}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.md}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
---

## Overview

aweskill is a developer-facing CLI tool. The visual identity is dark, technical, and minimal — matching the brand logo's deep midnight-blue palette. The interface evokes a terminal aesthetic: clean, focused, distraction-free. The audience is developers who use AI coding agents.

## Colors

The palette is rooted in a deep midnight blue (#0B0D1A) with indigo accents.

- **Background (#0B0D1A):** The foundation — matches the brand logo directly.
- **Surface (#141829):** Slightly elevated cards and sections.
- **On-surface (#FFFFFF):** High-contrast white text for readability.
- **Secondary (#B8C0D0):** Muted slate for subtitles and metadata.
- **Accent (#6366F1):** Indigo for interactive elements — buttons, links, CTAs.
- **Outline (#1E2440):** Subtle borders that don't compete with content.

Light mode uses the same hue family inverted: cool white background, dark blue-black text, slightly deeper indigo accent for better contrast on light surfaces.

## Typography

Inter for all body text — modern, highly legible at all sizes, excellent for developer tools. JetBrains Mono for code blocks — distinct character shapes, ligature support, recognized by developers.

## Layout

Single-column, centered content. Maximum width of 1200px. Generous vertical spacing between sections (64px+). Mobile-first responsive design.

## Components

- **Install box:** Terminal-style dark card with monospace text and a copy button. Two variants side by side in the hero.
- **Feature card:** Surface-colored card with icon, title, and one-line description.
- **Badge:** Inline pill showing version, node requirement, license, or agent count.
- **Agent logo:** Grayscale icon that subtly colorizes on hover.

## Do's and Don'ts

- **Do** keep text minimal — every word must earn its place.
- **Do** use monospace font for all CLI commands and code snippets.
- **Do** maintain the dark-first aesthetic — light mode is a secondary concern.
- **Don't** add animations that distract from the install CTAs.
- **Don't** use colors outside the defined token set.
- **Don't** add navigation complexity — it's a single-page site.
