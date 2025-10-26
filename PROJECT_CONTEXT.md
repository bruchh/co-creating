# Project Context

## Tech Stack

- **VitePress** `^2.0.0-alpha.12` - Static site generator for documentation and landing pages
- **Vue 3** - Component framework (with `<script setup>` syntax)
- **Tailwind CSS** `^4.1.16` - Utility-first CSS framework
- **@tailwindcss/vite** `^4.1.16` - Vite plugin for Tailwind
- **shadcn-vue** - UI component library built on Radix Vue
- **TypeScript** - Type-safe development

## Project Structure

```
toolkit/
├── .vitepress/
│   ├── config.mts              # VitePress configuration
│   └── theme/
│       ├── index.ts            # Custom theme entry
│       ├── style.css           # Global styles + Tailwind import
│       └── components/         # Theme-level components
│
├── components/
│   ├── ui/                     # shadcn-vue components (auto-generated)
│   │   └── button/
│   ├── landing/                # Landing page sections
│   │   ├── Hero.vue
│   │   ├── Features.vue
│   │   └── CallToAction.vue
│   └── shared/                 # Reusable components for both landing & docs
│
├── lib/
│   └── utils.ts                # Utility functions (includes cn() for class merging)
│
├── docs/                       # Documentation markdown files
│   ├── guide/
│   │   ├── getting-started.md
│   │   └── framework.md
│   └── reference/
│       └── case-studies.md
│
├── public/                     # Static assets (images, fonts, etc.)
│   └── images/
│
└── index.md                    # Landing page (root)
```

## Path Aliases

- `@/*` resolves to `toolkit/*`
- Example: `import { Button } from '@/components/ui/button'`

## Component Guidelines

### Vue Component Structure
```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
// Component logic here
</script>

<template>
  <!-- Template here -->
</template>
```

### Using Tailwind CSS
- Use utility classes directly in templates
- Use `cn()` helper from `@/lib/utils` to merge classes conditionally
- Tailwind v4 syntax: `@import "tailwindcss"` in CSS

### shadcn-vue Components
- Install new components: `npx shadcn-vue@latest add <component-name>`
- Components auto-install to `toolkit/components/ui/`
- Import from `@/components/ui/<component-name>`
- May need `/* @vue-ignore */` for type extends (e.g., PrimitiveProps)

## Landing Page Structure

The `index.md` file uses `layout: page` and imports Vue components:

```md
---
layout: page
---

<script setup>
import Hero from '@/components/landing/Hero.vue'
import Features from '@/components/landing/Features.vue'
</script>

<Hero />
<Features />
```

## Key Configuration Files

- `components.json` - shadcn-vue configuration
- `tsconfig.json` - TypeScript with path aliases
- `tailwind.config.js` - Tailwind configuration (for shadcn compatibility)
- `toolkit/.vitepress/config.mts` - VitePress config with Vite plugins and navigation

## Development Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Notes for AI Agents

When creating new landing page sections:
1. Create Vue components in `toolkit/components/landing/`
2. Use TypeScript with `<script setup lang="ts">`
3. Import and use shadcn-vue components from `@/components/ui/`
4. Use Tailwind utility classes for styling
5. Follow responsive design patterns (e.g., `md:grid-cols-3`)
6. Import new sections in `toolkit/index.md`
