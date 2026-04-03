# Agent Guidelines for PassoLento

This document provides essential information for AI coding agents working on the PassoLento codebase.

## Project Overview

**Tech Stack**: Next.js 15.3.3 (App Router) + React 19 + TypeScript 5  
**Build Target**: Static Site Generation (SSG) - no server runtime  
**Port**: Development runs on port 8000  
**Language**: Italian (content, comments, variable names)

## Commands

### Build & Development
```bash
npm run dev      # Start dev server on http://localhost:8000
npm run build    # Production build (outputs to /out directory)
npm run start    # Start production server
npm run lint     # Run ESLint (Next.js defaults)
```

### Testing
**No test framework configured.** If adding tests:
- Prefer Vitest for unit tests (faster than Jest with Next.js)
- Use `@testing-library/react` for component tests
- Test files should be colocated: `ComponentName.test.tsx`

### Bundle Analysis
```bash
ANALYZE=true npm run build  # Analyze bundle size
```

## Code Style & Conventions

### File Organization
```
src/
├── app/
│   ├── components/        # Shared React components (PascalCase.tsx)
│   ├── [route]/          # Route segments (kebab-case/)
│   │   └── page.tsx      # Route pages (lowercase)
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── page.tsx          # Homepage
└── data/                 # JSON data files (camelCase.json)
```

### Naming Conventions
- **Components**: PascalCase (e.g., `BlogPostCard.tsx`)
- **Pages**: lowercase `page.tsx` (Next.js convention)
- **Routes**: kebab-case directories (e.g., `privacy-policy/`)
- **Data files**: camelCase (e.g., `blogPosts.json`)
- **CSS Modules**: `[name].module.css`
- **Variables/functions**: camelCase
- **Types/Interfaces**: PascalCase

### Import Order & Style
```typescript
// 1. React/Next.js framework
import { useState, useEffect } from 'react';
import Link from "next/link";
import type { Metadata } from "next/types";

// 2. Internal components/utilities (use @/ alias)
import Button from "@/app/components/Button";
import blogPosts from "@/data/blogPosts.json";

// 3. Relative imports
import "./globals.css";
import Header from "./components/Header";
```

**Rules:**
- Always use `@/` path alias for imports from `src/`
- Never use relative paths like `../../` when `@/` can be used
- ES Modules only (no CommonJS)

### TypeScript
- **Strict mode enabled** - all code must pass strict type checking
- Always define interfaces for component props
- Use `type` for unions/primitives, `interface` for objects
- Prefer explicit return types for exported functions
- Use TypeScript's utility types (e.g., `ReactNode`, `ButtonHTMLAttributes`)

**Example:**
```typescript
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "neutral" | "ghost";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = "primary",
  onClick,
  disabled = false 
}: ButtonProps) {
  // ...
}
```

### React Component Patterns

#### Server vs Client Components
**Default to Server Components.** Only use `'use client'` when necessary:
- Browser APIs (window, document, localStorage)
- Event handlers (onClick, onChange)
- React hooks (useState, useEffect)
- Interactive state management

**Server Component** (default):
```typescript
// No directive needed
import Button from "@/app/components/Button";

export default function BlogPostCard({ title, excerpt }: Props) {
  return <article>...</article>;
}
```

**Client Component**:
```typescript
'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

#### Component Structure
```typescript
'use client'; // Only if needed

import statements...

// Type definitions
interface Props {
  // ...
}

// Component
export default function ComponentName({ prop1, prop2 }: Props) {
  // Hooks
  const [state, setState] = useState();
  
  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    };
  }, []);

  // Event handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Styling
- **Global CSS**: Use `globals.css` for reusable classes
- **CSS Modules**: For component-specific styles
- **Inline styles**: Only for dynamic values (avoid otherwise)
- **Class names**: Use semantic names, kebab-case (e.g., `nav-container`, `btn-primary`)
- Font Awesome icons: Available globally via CDN

### Performance Best Practices
- Use `for...of` instead of `.forEach()` for better performance
- Implement proper cleanup in `useEffect`
- Minimize client-side JavaScript (prefer Server Components)
- Optimize images (WebP/AVIF formats supported)
- Static data imports are bundled at build time

### Error Handling
- Handle null/undefined cases explicitly
- Use optional chaining (`?.`) for DOM queries
- Type guard for type assertions: `(element as HTMLElement)`
- Validate external data (JSON imports, API responses)

### Accessibility
- Include `aria-label` on interactive elements
- Use semantic HTML (`<nav>`, `<article>`, `<section>`)
- Ensure buttons have `type="button"` (avoid form submission)
- External links: include `rel="noopener noreferrer"`

## Data Management
- Content stored in JSON files (`/src/data/`)
- Static imports at build time (no runtime fetching)
- Images in `/public/` directory (organized by feature)
- Use Next.js `<Image>` component for optimization

## Git Workflow
- Write commit messages in English
- Keep commits atomic and focused
- No force pushes to main branch

## Common Pitfalls
- Don't use `'use client'` by default - only when required
- Don't import Server Components in Client Components
- Don't use browser APIs in Server Components
- Don't use relative imports when `@/` alias is cleaner
- Remember: this is a static site - no server-side runtime

## Performance Notes
- Build outputs static HTML (no Node.js server needed)
- console.log statements removed in production builds
- Target: modern browsers with ES2020+ support
- Bundle analyzer available for optimization
