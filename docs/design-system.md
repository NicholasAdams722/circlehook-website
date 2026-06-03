# Design System — Circle Hook

A minimal design system to keep the landing page coherent and easy to extend. v1 is intentionally narrow. Expand only as needed.

## Typography

**Heading typeface:** Fraunces
- Source: Google Fonts via `next/font/google`
- Weights used: 400, 500
- Used for: hero headline, section headings, "what you get" block titles
- Optical size axis: allow variable opsz, use larger optical sizes for the hero

**Body typeface:** Geist Sans (ships with shadcn/ui scaffold)
- Source: shadcn default, already configured
- Weights used: 400 for body, 500 for emphasis, 600 for button labels
- Used for: all body text, subheadlines, form labels, button text, footer

### Type scale (mobile first, scaled up at lg breakpoint)

| Role | Mobile | Desktop | Weight | Family |
|---|---|---|---|---|
| Hero headline | 40px / 1.1 | 64px / 1.05 | 500 | Fraunces |
| Section heading | 28px / 1.2 | 40px / 1.15 | 500 | Fraunces |
| Block heading | 18px / 1.3 | 20px / 1.3 | 600 | Geist Sans |
| Body | 17px / 1.6 | 18px / 1.65 | 400 | Geist Sans |
| Small / footer | 14px / 1.5 | 14px / 1.5 | 400 | Geist Sans |

### Line length

Body text capped at 65 characters per line on desktop. Use `max-w-prose` or `max-w-[65ch]`.

## Color

Minimal palette, defined as CSS variables in `app/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--background` | `#FAFAF7` | Page background, warm off-white |
| `--foreground` | `#1A1A1A` | Body text |
| `--muted` | `#5C5C5C` | Secondary text, footer |
| `--accent` | `#1F4A3F` | Primary accent (deep forest green) |
| `--accent-foreground` | `#FAFAF7` | Text on accent backgrounds |
| `--border` | `#E5E3DC` | Form inputs, dividers |

Dark mode is not implemented in v1.

The accent color appears on:
- Primary CTA buttons (background)
- Form submit button
- Link hover states
- Subtle accents (the period at the end of a heading, for example)

Use restraint. The page should feel mostly black text on warm white. The accent is a finishing touch, not a wash.

If Nick decides on a different accent before build, change `--accent` and `--accent-foreground` in one place. Everything else inherits.

## Spacing

Use Tailwind's default scale. Specific conventions:

- Section vertical padding: `py-24` mobile, `py-32` desktop
- Section horizontal padding: `px-6` mobile, `px-8` desktop
- Max content width: `max-w-3xl` for text-heavy sections, `max-w-5xl` for the what-you-get grid
- Gap between blocks in the what-you-get grid: `gap-12` mobile, `gap-16` desktop
- Gap between form fields: `gap-6`

## Components

Use shadcn/ui primitives where they exist. Don't reinvent.

For this build, the components in use:
- `Button` for CTAs
- `Input`, `Label`, `Textarea`, `Select` for the contact form
- `Form` (react-hook-form wrappers) for form state and validation

Custom components live in `components/`:
- `Section` wrapper that handles vertical padding and horizontal max-width
- `Heading` that handles the hero vs section vs block heading hierarchy

## Motion

Minimal in v1. No scroll-triggered animations, no parallax, no fancy reveals.

Acceptable motion:
- Subtle hover transitions on buttons and links (150ms ease)
- Fade-in on form submission state changes (200ms ease)
- A single subtle fade-up of the hero headline on load (max 300ms, no delay)

Avoid:
- Long page load animations (delay perceived performance)
- Marquee effects
- Animated background patterns
- Cursor follows, magnetic buttons, anything trendy

## Accessibility

- All text meets WCAG AA contrast against its background. The accent green at `#1F4A3F` passes against the warm off-white background.
- Focus rings are visible and use the accent color.
- Form inputs always have visible labels (not just placeholders).
- The page is fully usable with keyboard only.
- All interactive elements have a minimum 44x44px target on mobile.
- Heading hierarchy is semantic: one h1 (hero), h2 for section headings, h3 for block headings.
- Form errors are announced to screen readers via aria-live.

## Aesthetic reference points

If a design choice is unclear, lean toward what these would do:

- Stripe documentation: clean, restrained, type-led
- The New Yorker website (text density): generous line height, narrow column
- 37signals.com: short paragraphs, opinionated voice, no decoration
- Linear.app: precise spacing, single accent color, modern but not flashy

Avoid:

- Webflow agency templates
- FMG Suite or AdvisorWebsites aesthetic
- Glassmorphism, gradient meshes, generic SaaS hero illustrations
- Anything that screams "made with a template"

## File implementation

Typography setup in `app/layout.tsx`:

```tsx
import { Fraunces } from "next/font/google"
import { GeistSans } from "geist/font/sans"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

// Apply both to the html element via className or via Tailwind config
```

Tailwind config additions in `tailwind.config.ts`:

```ts
extend: {
  fontFamily: {
    serif: ["var(--font-fraunces)", "serif"],
    sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
  },
}
```

Color variables in `app/globals.css`:

```css
:root {
  --background: 60 20% 97%;
  --foreground: 0 0% 10%;
  --muted: 0 0% 36%;
  --accent: 158 41% 21%;
  --accent-foreground: 60 20% 97%;
  --border: 45 18% 88%;
}
```

(HSL values shown for compatibility with shadcn's color system. Convert from the hex codes in the color table.)
