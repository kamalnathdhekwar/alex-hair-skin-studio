# Design Brief

## Direction

Alex Hair & Skin Studio — Premium luxury salon website with minimalist black/white/gold aesthetic inspired by high-end fashion brands.

## Tone

Refined, elegant minimalism executed with conviction—every element earns its space through premium materials (pure blacks, crisp whites, warm gold accents) and intentional whitespace. No busy patterns or gradients; clarity and luxury through restraint.

## Differentiation

Gold geometric dividers and borders create visual rhythm between alternating dark/light sections, making the salon feel curated and editorial—like a luxury magazine layout.

## Color Palette

| Token      | OKLCH         | Role                                           |
|-----------|---------------|------------------------------------------------|
| background | 0.99 0.002 0  | Off-white, pristine light mode base            |
| foreground | 0.08 0.002 0  | Pure black for text and strong contrast        |
| card       | 1.0 0 0       | Pure white cards on background                 |
| primary    | 0.08 0.002 0  | Deep black for dark sections                   |
| accent     | 0.72 0.18 65  | Warm gold for borders, buttons, dividers       |
| muted      | 0.92 0.002 0  | Light grey for subtle backgrounds              |

## Typography

- Display: Fraunces — elegant serif for headings, hero text, salon name
- Body: General Sans — clean, readable sans-serif for descriptions and UI labels
- Scale: hero `text-6xl md:text-7xl font-bold`, h2 `text-4xl md:text-5xl font-bold`, h3 `text-2xl font-semibold`, body `text-base md:text-lg`

## Elevation & Depth

Subtle layering through discrete shadows (shadow-subtle for cards, shadow-elevated for CTAs) and strategic background color shifts. No blur or glow effects—depth is earned through material presence and subtle geometry.

## Structural Zones

| Zone    | Background | Border                  | Notes                                                           |
|---------|-----------|------------------------|---------------------------------------------------------------|
| Header  | White      | Gold 2px bottom border | Navigation + logo on pristine white, sticky                   |
| Content | Alternating | Gold dividers         | Dark (black) sections with white text → Light (white) sections |
| Footer  | Black      | Gold top border        | Dark footer with contact info, social links in gold            |

## Spacing & Rhythm

Generous vertical rhythm (6-8 rem between sections) with 2rem horizontal padding on mobile (4rem on tablet, 6rem on desktop). Micro-spacing inside cards maintains breathing room—no cramped layouts. Cards have 1.5rem padding minimum.

## Component Patterns

- **Buttons**: Gold border, black text, hover: gold fill + white text, 2px border with rounded corners (6px)
- **Cards**: Pure white on light sections, dark grey (0.12 oklch) on dark sections, subtle shadow-subtle elevation, 1.5-2rem padding
- **Dividers**: Gradient line in gold (full opacity center, transparent edges) spanning full width with 1px height
- **Badge/Rating**: Gold accent text, no fill—just gold text with light background

## Motion

- **Entrance**: Fade-in at 0.6s cubic-ease-out for sections on scroll, staggered 100ms per child
- **Hover**: 0.2s ease-out color transition on buttons and links, shadow elevation on cards
- **Decorative**: None—motion is functional only, supporting accessibility and perceived performance

## Constraints

- No gradients except gold divider gradients (opacity fade)
- No drop shadows deeper than 12px blur
- Gold accent used sparingly—only on buttons, dividers, borders, and interactive elements
- Fully responsive: mobile (320px+) → tablet (768px) → desktop (1440px)
- All text contrasts AA+ compliant (4.5:1 minimum for body text, 3:1 for large text)

## Signature Detail

Gold geometric dividers between sections create an editorial, magazine-like flow—making the salon feel curated and premium while maintaining minimalist discipline.
