# Agent Operating Instructions — Circle Hook

This file governs how any agent (Claude Code, Cursor's AI features, or others) should behave when working in this repository. It complements `CLAUDE.md`, which covers what the project is and where things are. This file covers how to work.

## Communication style

- Be direct. Nick prefers plainspoken operator-style communication over consultant or marketing language.
- No em dashes. Use periods, commas, parentheses, or colons instead. This is a strict rule.
- Avoid filler phrases like "great question," "happy to help," or "let me know if." Get to the substance.
- When uncertain, ask one focused question rather than guessing. Do not stack multiple clarifying questions at once.

## Working style

- Read `CLAUDE.md` and the relevant document in `docs/` before starting a task.
- For substantive changes, propose the plan first and confirm before executing.
- For small changes (typo fixes, color tweaks, copy edits), proceed and report what was changed.
- Commit messages are short, imperative, and descriptive. Example: "Add Resend integration to contact form." Not "Updates."
- One concern per commit. Don't bundle a design change with a logic change.

## Quality bar

- Every page must render at 95+ Lighthouse on all four scores (performance, accessibility, best practices, SEO).
- Every interactive element must be keyboard accessible.
- Every form input must have a visible label and an aria-label fallback.
- No layout shift on load. Reserve space for fonts and images.
- No console errors or warnings in production.
- Mobile experience is non-negotiable. The site must be excellent on a phone before it's good on a desktop.

## File organization

- Page-specific section components live in `app/_sections/` and are imported into `app/page.tsx`.
- Reusable UI primitives live in `components/ui/` (shadcn defaults) and `components/` (custom).
- All site copy lives in `lib/content.ts`. Layout files import from there.
- All site metadata (title, description, OG tags) lives in `app/layout.tsx`.
- Environment variables are documented in `.env.example` at the repo root.

## When to ask Nick

Ask before:
- Adding any third-party dependency not already in `package.json`
- Changing the typography choices in `app/layout.tsx`
- Adding analytics, tracking, or cookie banners
- Modifying anything in `docs/`
- Changing the site's positioning or copy beyond microcopy refinements

Don't ask before:
- Refactoring component internals for clarity
- Adding type safety improvements
- Fixing accessibility issues
- Improving performance
- Adding meta tags, schema markup, or other SEO infrastructure consistent with the brief

## Tone for code comments

Comments are sparse and only present where the why is non-obvious. Don't comment what the code is doing. Comment why it's doing it that way, when the reason isn't visible from the code itself.

## Tone for site copy

Site copy is operator-to-operator. Imagine a director of operations at an RIA reading the page on a Tuesday morning while drinking coffee. The copy should:

- Acknowledge specific pain they've personally experienced
- Demonstrate insider knowledge through specifics, not credentials
- Avoid hype, superlatives, and marketing voice
- Use concrete language (Marketing Rule, Form ADV, CCO review, Lighthouse score) over abstract claims (great, premium, world-class)
- Stay confident but never boastful

Reread the site brief if in doubt.

## Definition of done

A task is done when:

1. The change is committed with a clear message
2. The site builds and deploys without errors
3. The change has been verified visually on both mobile and desktop viewports
4. Lighthouse scores remain at 95+ across all four categories
5. No new console errors or warnings have been introduced
6. Any new environment variables are documented in `.env.example`
