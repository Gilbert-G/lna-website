# LNA Website

[![CI](https://github.com/Gilbert-G/lna-website/actions/workflows/ci.yml/badge.svg)](https://github.com/Gilbert-G/lna-website/actions/workflows/ci.yml)

The marketing and product website for [LNA](https://github.com/Gilbert-G/LNA) — a modern full-stack SaaS platform.

Built with [Next.js](https://nextjs.org), [TypeScript](https://typescriptlang.org), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Getting Started

### Prerequisites

- Node.js 20 LTS (see `.nvmrc`)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Gilbert-G/lna-website.git
cd lna-website

# Use the correct Node version (if using nvm)
nvm use

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the development server     |
| `npm run build`        | Create a production build        |
| `npm start`            | Start the production server      |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format code with Prettier        |
| `npm run format:check` | Check formatting without changes |
| `npm run type-check`   | Run TypeScript type checking     |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── design-system/    # Design system component showcase
│   ├── globals.css       # Global styles and design tokens
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # UI components (shadcn/ui + custom)
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── container.tsx  # Max-width wrapper component
│       ├── input.tsx
│       └── section.tsx    # Full-width section component
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── styles/               # Additional style files
```

## Design System

Visit `/design-system` in the running app to see a live showcase of all components, colors, and typography.

### Brand Colors (Website v4)

- **Primary**: LNA navy `#14366F` (hover `#0F2A57`, pressed `#0A1F42`)
- **Neutrals**: Carbon Gray 100/70/30/20/10 (`#161616` … `#F4F4F4`)
- **Status** (tables only): high `#198038`, medium `#B28600`, low `#DA1E28`
- **Radius**: 0px · no shadows / gradients / pills

### Typography

- **Sans**: IBM Plex Sans 300/400/600 (self-hosted woff2, SIL OFL)
- **Mono**: IBM Plex Mono 400/600 (self-hosted woff2)
- Fallbacks: `"Helvetica Neue", Arial, sans-serif` / `Menlo, Consolas, monospace`

### Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

## CI/CD

GitHub Actions runs lint, type-check, and build on every PR and push to `main`. See `.github/workflows/ci.yml`.

## Conventions

- **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint + husky)
- **Formatting**: Prettier runs on pre-commit via lint-staged
- **Linting**: ESLint with Next.js recommended rules

## License

Private — All rights reserved.
