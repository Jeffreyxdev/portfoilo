# UI Changes Log

## Date: February 25, 2026

---

### 1. Hero Component — Layout Restoration

**File:** `src/Components/Hero.jsx`

The Hero section was reverted from a **centered, single-column** layout back to its **original left-aligned, two-column** layout:

- **Left column:** Title ("Creative Software Engineer."), subtitle, two bio paragraphs, and social media icon links (Facebook, X/Twitter, Instagram, LinkedIn)
- **Right column:** Hero image (`head1.png`) with a purple-bordered box behind it
- Responsive flex layout: stacks vertically on mobile, side-by-side on tablet/desktop
- Original paddings and spacings restored (`px-[38px]`, `pt-[100px]`, `lg:pl-[80px]`, etc.)

**Kept from the redesign:**

- Aurora background blobs (purple, cyan, violet gradients)
- Three.js particle system (200 purple/cyan particles with additive blending)
- `SplitText` animation on the title
- Dark grid overlay
- Framer Motion entrance animations
- Updated accent color `#7c3aed` (was `#6f1cd7`)

---

### 2. Dark Theme & Design System

**File:** `src/index.css`

- CSS custom properties for the dark theme (`--bg-primary: #0a0a0f`, `--accent-purple: #7c3aed`, `--accent-cyan: #06b6d4`, etc.)
- Aurora blob animations (`aurora-shift` keyframes, `.aurora-bg` / `.aurora-blob` classes)
- Spotlight card hover effects with glow and lift
- Grid background pattern (`.dark-grid-bg`)
- Section divider gradient line
- Glow button with animated gradient border
- Custom scrollbar styling (purple on dark)
- Tailwind CSS v4 `@theme` directive for Poppins font

---

### 3. VS Code Configuration

**File:** `.vscode/settings.json` _(new)_

- Added `"css.lint.unknownAtRules": "ignore"` to suppress the "Unknown at rule @theme" warning caused by Tailwind CSS v4's custom directives

---

### 4. Lint & Code Quality Fixes

| File                                        | Change                                                                      |
| ------------------------------------------- | --------------------------------------------------------------------------- |
| `src/Components/Hero.jsx`                   | Removed unused `LetterGlitch` import; fixed typo "managment" → "management" |
| `src/Components/Footer.jsx`                 | Removed unused `React` import                                               |
| `src/Components/reactbits/GradientText.jsx` | Suppressed `react/prop-types` ESLint rule                                   |
| `src/Components/reactbits/LetterGlitch.jsx` | Suppressed `react/prop-types` ESLint rule                                   |
| `src/Components/reactbits/SplitText.jsx`    | Suppressed `react/prop-types` ESLint rule                                   |
| `src/Components/Resume.jsx`                 | Suppressed `react/prop-types` ESLint rule                                   |
