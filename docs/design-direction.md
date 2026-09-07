# Leila Khan Photography Design Direction

## North Star

The site should feel like a quiet, art-directed photography archive: architectural, playful, and human. It should feel authored rather than corporate, with the photography and typography sharing equal visual weight.

## Visual Language

- Use a mostly black and white palette with restrained neutral tones.
- Use huge editorial typography as a compositional element, not only as a heading.
- Prefer bold geometric or condensed sans-serif display type for major statements.
- Pair display type with small, quiet uppercase metadata and a readable neutral sans-serif.
- Use generous whitespace and allow compositions to breathe.
- Use broken grids, asymmetric alignment, overlaps, offsets, and intentional imbalance.
- Let images interrupt text and extend toward the edges of the viewport.
- Use full-width imagery or video for major transitions and gallery moments.
- Keep controls minimal, clear, and slightly unexpected where appropriate.
- Use one restrained accent color only when it adds meaning or orientation.

## Composition

- Design for the full viewport, including ultra-wide screens.
- Avoid default centered containers when a more expressive composition serves the content.
- Establish hierarchy through scale, position, whitespace, and contrast before adding decoration.
- Make the first viewport communicate Leila Khan, photography, and place immediately.
- Keep image crops intentional and make image ratios stable to prevent layout shift.
- Preserve a clear reading order at every breakpoint, even when the desktop layout is asymmetric.

## Reference Patterns

Distilled from a set of agency/studio portfolio sites (ABCS, Cyclops Club, Studio Nuts, Unikorns, Vucko, Watson, Inertia Studios). Those are loud, type-led agency sites, not photography archives — borrow the structural techniques below, not their tone, dark punctuation sections, or agency copy voice ("we speak emotion").

- Layer two or three small, offset, slightly rotated photographs beside or across a large headline instead of relying on a single hero image — this is a concrete way to execute the broken-grid rule above without adding decoration.
- Use a weight or color shift within one large heading (e.g. one line in `--muted`, the next in `--ink`) to build hierarchy inside a single display statement, rather than stacking separate headings.
- Keep scroll cues and section labels lowercase, quiet, and parenthetical ("scroll to explore ↓") rather than styled as buttons — matches "controls minimal, clear, and slightly unexpected."
- An uneven-width horizontal filmstrip of three or four images is a legitimate alternative to a grid for a "latest work" moment — keep each image's own ratio stable rather than forcing a uniform row height.
- A small live/local detail (a time, a place, a count) in the header or footer can support the "human" north star in one restrained line — do not let it become a decorative widget.
- Avoid: emoji or icons substituted into running headline text, marquee/ticker text, full-bleed dark sections used purely as tonal punctuation, and inline agency-voice copy — none of that fits a quiet, human, photography-first site.

## Motion

- Start with a strong static composition before adding motion.
- Prefer a small number of meaningful transitions over constant animation.
- Use subtle reveals, image scale, opacity, and position changes for entrance and hover states.
- Use parallax sparingly and only when it supports depth or directs attention.
- Respect `prefers-reduced-motion` and provide a calm, non-animated experience.
- Reserve Three.js or shader work for a meaningful hero or gallery moment, not decoration.

## Responsive Rules

- Test desktop, ultra-wide, tablet, and mobile layouts.
- Scale typography and image dimensions with responsive constraints, not arbitrary viewport text scaling.
- Keep long words and labels inside their containers.
- On mobile, allow the broken grid to become a deliberate stacked rhythm rather than forcing desktop offsets.
- Keep navigation and primary links easy to scan and operate.

## Content And Implementation

- Keep static content shapes ready for later Strapi replacement.
- Keep frontend presentation separate from CMS and API concerns.
- Use the App Router and server components by default.
- Use CSS Modules for component-owned styles so visual composition and responsive behavior stay close to the component they serve.
- Keep shared tokens, reset rules, typography, layout primitives, and interactive elements (buttons, form controls) in `src/app/styles/`; keep `globals.css` as the global entry point.
- Do not grow a monolithic global stylesheet or create route styles when a component owns the visual behavior.
- Use `next/image` for local and approved remote photography.
- Give every meaningful image useful alt text; decorative images should be explicitly treated as decorative.
- Validate meaningful changes with `npm run lint` and `npm run build`.

## Design Review Questions

Before considering a page complete, ask:

1. Does the composition feel authored, or could it belong to any site?
2. Is typography doing meaningful visual work?
3. Is whitespace intentional rather than leftover?
4. Are the images presented as the subject rather than decoration?
5. Does the layout use the available viewport well at ultra-wide sizes?
6. Does motion improve hierarchy, orientation, or delight?
7. Does the experience remain clear and comfortable on mobile and with reduced motion?
