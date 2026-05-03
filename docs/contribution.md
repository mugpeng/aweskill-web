# Contributing

Thanks for your interest in contributing to aweskill-web!

## Development Setup

Make sure you have Node.js 18+ and npm installed.

```bash
# Clone the repo
git clone https://github.com/mugpeng/aweskill.git
cd aweskill/aweskill-web

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:4321` to see it in action.

## Commands

- `npm run dev` - Dev mode with hot reload
- `npm run build` - Production build
- `npm run preview` - Preview build output

## Project Structure

```
src/
├── components/     # Page components (Header, Hero, Features, etc.)
├── i18n/          # Internationalization config
├── layouts/       # Page layouts
├── pages/         # Page routes
└── styles/        # Styles
```

## Tech Stack

- **Astro** - Static site generation with partial hydration
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety

## Code Style

ESLint and Prettier are configured. Run before submitting:

```bash
npm run lint
```

## Commits

Write clear commit messages. Linking to related issues is appreciated.

Feel free to open an issue if you have questions!
