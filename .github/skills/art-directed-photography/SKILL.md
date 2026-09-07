---
name: art-directed-photography
description: "Use when designing or reviewing Leila Khan Photography pages, image-led layouts, typography, responsive composition, hover effects, parallax, motion, or Three.js visuals."
argument-hint: "Describe the page, section, or interaction to art-direct"
---

# Art-Directed Photography

Use this skill to keep new work aligned with the project's visual language. Read [the design direction](../../../docs/design-direction.md) as the source of truth before making significant visual changes.

## Workflow

1. Identify the content hierarchy and the primary visual moment.
2. Check nearby components and data shapes before introducing new abstractions.
3. Establish the static composition first: type scale, whitespace, image ratios, alignment, and responsive behavior.
4. Prefer full-viewport or edge-reaching compositions when the content supports them.
5. Use asymmetric grids, offsets, overlaps, and unusual scale deliberately rather than randomly.
6. Use large display typography with small utility metadata and readable supporting copy.
7. Add only the motion that supports hierarchy, depth, orientation, or delight.
8. Add parallax or shaders only after the static layout works and only where the effect has a clear purpose.
9. Preserve a clear reading order on mobile and for keyboard and reduced-motion users.
10. Run `npm run lint` and `npm run build` after meaningful changes.

## Visual Checks

- Does the page feel architectural, playful, and authored?
- Is the photography the subject of the composition?
- Does the layout use the available width, including ultra-wide screens?
- Are image dimensions stable and crops intentional?
- Is whitespace doing useful compositional work?
- Are hover and scroll effects subtle enough to preserve focus?
- Does `prefers-reduced-motion` produce a calm equivalent experience?

## Implementation Preferences

- Follow existing App Router and TypeScript patterns.
- Prefer server components unless interaction requires a client component.
- Use `next/image` for photography.
- Use CSS Modules for component-owned layout, responsive rules, and motion.
- Keep design tokens, reset rules, shared typography, shared layout primitives, and shared interactive elements (buttons, form controls) in `src/app/styles/`.
- Keep `globals.css` limited to global imports and styles that genuinely cross component boundaries.
- Use `:global(...)` deliberately when a CSS Module must target a shared global utility.
- Keep CMS and API work separate from presentation components.
- Reuse existing tokens and components before adding new ones.
- Keep visual changes focused and avoid unrelated refactors.
