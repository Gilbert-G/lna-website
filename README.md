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

### Brand Colors

- **Primary**: Blue (#2563EB) — main brand color
- **Secondary**: Indigo accent — complementary color
- **Destructive**: Red — errors and danger actions
- **Neutral**: Slate gray scale

### Typography

- **Sans**: Inter (via next/font)
- **Mono**: JetBrains Mono (via next/font)

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
