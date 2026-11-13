# LNA Brand Style Guide (Website v4)

Design token reference for the LNA marketing website (lnaflow.com). Epic: LNA-269.

---

## Color Palette

### Primary (LNA navy)

Never use Microsoft `#0067B8` or IBM Blue 60 `#0F62FE` as the brand colour.

| Token                  | Hex       | Usage                                   |
| ---------------------- | --------- | --------------------------------------- |
| `--primary`            | `#14366F` | **Brand / CTA fill**, links, focus ring |
| `--primary-hover`      | `#0F2A57` | Primary button hover                    |
| `--primary-pressed`    | `#0A1F42` | Primary button pressed                  |
| `--primary-foreground` | `#FFFFFF` | Text on primary fill                    |

### Neutrals (Carbon greys)

| Token        | Hex       | Usage                                      |
| ------------ | --------- | ------------------------------------------ |
| `--gray-100` | `#161616` | Body / heading text; **footer background** |
| `--gray-70`  | `#525252` | Body copy (16/24)                          |
| `--gray-30`  | `#C6C6C6` | Muted on dark surfaces                     |
| `--gray-20`  | `#E0E0E0` | Borders, dividers, inputs                  |
| `--gray-10`  | `#F4F4F4` | Subtle surfaces; ghost button hover        |
| `--legal`    | `#000000` | Footer legal strip                         |

Semantic aliases: `--foreground` = Gray 100, `--muted-foreground` = Gray 70, `--border` / `--input` = Gray 20, `--muted` / `--secondary` = Gray 10.

### Status colours (tables only)

| Token             | Hex       | Usage       |
| ----------------- | --------- | ----------- |
| `--status-high`   | `#198038` | High / ok   |
| `--status-medium` | `#B28600` | Medium      |
| `--status-low`    | `#DA1E28` | Low / error |

### Product-mockup-only colours

| Token                | Hex       | Usage              |
| -------------------- | --------- | ------------------ |
| `--excel-green`      | `#217346` | Excel chrome       |
| `--excel-green-dark` | `#107C41` | Excel accent       |
| `--sheet-header`     | `#1F4E78` | Spreadsheet header |

Do **not** use these as marketing brand colours.

---

## Typography

### Font families (self-hosted, SIL OFL)

Production font requests must be **same-origin**. Do not load from `fonts.googleapis.com` / `fonts.gstatic.com`.

| Token         | Font          | Fallback                              | Weights       |
| ------------- | ------------- | ------------------------------------- | ------------- |
| `--font-sans` | IBM Plex Sans | `"Helvetica Neue", Arial, sans-serif` | 300, 400, 600 |
| `--font-mono` | IBM Plex Mono | `Menlo, Consolas, monospace`          | 400, 600      |

Files: `src/fonts/*.woff2` · wired via `src/lib/fonts.ts` (`next/font/local`).

### Type scale

| Utility / role      | Size / line          | Weight | Notes              |
| ------------------- | -------------------- | ------ | ------------------ |
| `.text-hero`        | 54/64 (36/44 mobile) | 300    | Hero display       |
| `.text-h2`          | 42/50                | 300    | Section titles     |
| `.text-h3`          | 28/36                | 400    | Subheads           |
| `.text-tile`        | 20/28                | 400    | Tile / step titles |
| `.text-lead`        | 20/28                | 400    | Lead paragraphs    |
| `.text-body` / body | 16/24                | 400    | Gray 70            |

**Weight 600 only** for: table headers, row keys, the wordmark, footer column titles.

---

## Layout

| Token             | Value    | Usage                                  |
| ----------------- | -------- | -------------------------------------- |
| `--container-max` | `1584px` | Content column max-width (`Container`) |
| `--grid-gutter`   | `32px`   | Column gutters                         |

- **16 columns** at ≥ 1056px
- **8 columns** below 1056px
- **4 columns** below 672px

Utility: `.lna-grid` (or `<Container grid>`). Side padding on `Container` is 32px (`px-8`).

### Spacing (8px scale)

`16 / 24 / 32 / 48 / 64 / 96` → Tailwind `gap-4` … `gap-24` / `p-4` … `p-24`.

---

## Shape & elevation

| Rule          | Value                                                     |
| ------------- | --------------------------------------------------------- |
| Border radius | **0px** on buttons, cards, tiles, inputs, tables, dialogs |
| Box shadow    | **none**                                                  |
| Gradients     | **none** (marketing chrome)                               |
| Pills / glass | **none**                                                  |

`--radius` and all `--radius-*` theme tokens are `0`.

---

## Buttons

| Property | Value                                                     |
| -------- | --------------------------------------------------------- |
| Height   | `48px` (`h-12`)                                           |
| Padding  | `13px 64px 13px 16px` (label left, icon right 16px)       |
| Primary  | Navy fill `#14366F` → hover `#0F2A57` → pressed `#0A1F42` |
| Ghost    | Navy text; hover background Gray 10                       |

---

## Icons

**Library:** [Lucide Icons](https://lucide.dev/) — outlined, inherit `currentColor`. Button icons default to 16px.

---

## Motion

| Property        | Duration    | Easing |
| --------------- | ----------- | ------ |
| Color / opacity | `150–200ms` | `ease` |

Respect `prefers-reduced-motion`.
