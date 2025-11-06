# Portfolio Website Architecture

## System Overview
A modern, performant portfolio website built with Next.js App Router, showcasing professional projects, career timeline, and contact information. The architecture emphasizes performance, SEO, and user experience.

## Technology Stack

### Core Framework
- **Next.js 15.5.4**: React framework with App Router for file-based routing, server components, and optimized builds
- **React 19.2.0**: UI library with latest features and performance improvements
- **TypeScript 5.9.3**: Type safety and enhanced developer experience

### Styling & UI
- **Tailwind CSS 4.1.17**: Utility-first CSS framework for rapid UI development
- **PostCSS 8.5.6**: CSS processing with Tailwind plugin
- **CSS-in-JS**: Tailwind v4 uses CSS-based configuration (no JS config file)

### Development Tools
- **ESLint 9.37.0**: Code linting with Next.js recommended rules
- **TypeScript ESLint**: Type-aware linting rules

## Project Structure

```
InBrowserDesigner/
├── client/                          # Next.js application root
│   ├── app/                         # App Router directory
│   │   ├── (routes)/                # Route groups (optional)
│   │   │   ├── page.tsx            # Home page (/)
│   │   │   ├── timeline/
│   │   │   │   └── page.tsx        # Timeline page (/timeline)
│   │   │   └── projects/
│   │   │       └── page.tsx        # Projects page (/projects)
│   │   ├── components/              # Shared components
│   │   │   ├── navigation.tsx      # Site navigation
│   │   │   └── footer.tsx          # Site footer
│   │   ├── layout.tsx               # Root layout (wraps all pages)
│   │   └── globals.css              # Global styles (Tailwind import)
│   ├── public/                      # Static assets (images, fonts, etc.)
│   ├── .eslintrc.json              # ESLint configuration
│   ├── postcss.config.mjs          # PostCSS configuration
│   ├── tsconfig.json               # TypeScript configuration
│   ├── package.json                # Dependencies and scripts
│   └── next-env.d.ts               # Next.js TypeScript declarations
├── ARCHITECTURE.md                  # This file
└── windsurfrules.md                # Development guidelines
```

## Architectural Decisions

### 1. App Router (Next.js 15)
**Decision**: Use App Router instead of Pages Router

**Rationale**:
- Server Components by default for better performance
- Improved data fetching with async/await in components
- Better code splitting and bundle optimization
- Nested layouts and templates
- Streaming and Suspense support

### 2. Server Components First
**Decision**: Use Server Components by default, Client Components only when needed

**Rationale**:
- Reduced JavaScript bundle size
- Faster initial page loads
- Better SEO with server-side rendering
- Automatic code splitting

**Client Components needed for**:
- Interactive elements (navigation, forms)
- Browser APIs (localStorage, window)
- React hooks (useState, useEffect)
- Event handlers

### 3. File-Based Routing
**Decision**: Use Next.js file-based routing with route groups

**Structure**:
```
app/
├── page.tsx              → /
├── timeline/
│   └── page.tsx         → /timeline
└── projects/
    └── page.tsx         → /projects
```

### 4. Component Organization
**Decision**: Separate components from routes

**Rationale**:
- Clear separation of concerns
- Easier component reuse
- Better discoverability
- Simplified testing

### 5. Styling Strategy
**Decision**: Tailwind CSS with utility-first approach

**Rationale**:
- Rapid development
- Consistent design system
- Minimal CSS bundle (purged unused styles)
- Responsive design made easy
- No CSS naming conflicts

### 6. TypeScript Configuration
**Decision**: Strict mode disabled, baseUrl set to `./app`

**Rationale**:
- Easier onboarding (strict mode can be enabled later)
- Cleaner imports with path aliases
- Better IDE autocomplete

## Data Flow

### Page Rendering Flow
```
User Request
    ↓
Next.js Router
    ↓
Root Layout (layout.tsx)
    ↓
Navigation Component
    ↓
Page Component (Server Component)
    ↓
Footer Component
    ↓
HTML Response
```

### Component Hierarchy
```
RootLayout
├── Navigation (Client Component)
├── Page (Server Component)
│   └── Page-specific content
└── Footer (Client Component)
```

## Performance Optimizations

### 1. Server Components
- Default to Server Components for static content
- Reduces client-side JavaScript

### 2. Code Splitting
- Automatic route-based code splitting
- Dynamic imports for heavy components

### 3. Image Optimization
- Use `next/image` for automatic optimization
- Lazy loading by default
- WebP/AVIF format conversion

### 4. Font Optimization
- Use `next/font` for optimal font loading
- Automatic font subsetting

### 5. CSS Optimization
- Tailwind CSS purges unused styles
- Critical CSS inlined automatically

## SEO Strategy

### 1. Metadata API
```typescript
// In each page.tsx
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: { ... },
}
```

### 2. Semantic HTML
- Proper heading hierarchy (h1 → h6)
- Semantic tags (nav, main, footer, article, section)
- Accessible landmarks

### 3. Performance
- Fast page loads (Core Web Vitals)
- Server-side rendering for initial content
- Optimized images and fonts

## Accessibility

### Standards
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels

### Implementation
- Semantic HTML elements
- Focus management
- Color contrast ratios
- Alt text for images

## Scalability Considerations

### Future Enhancements
1. **Content Management**: Add CMS integration (e.g., Sanity, Contentful)
2. **Analytics**: Integrate analytics (e.g., Google Analytics, Plausible)
3. **Animations**: Add motion with Framer Motion
4. **Dark Mode**: Implement theme switching
5. **Blog**: Add blog section with MDX support
6. **Internationalization**: Add i18n support if needed

### Code Organization at Scale
```
app/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── features/        # Feature-specific components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── constants/           # App constants
```

## Development Workflow

### Local Development
1. `npm run dev` - Start development server (http://localhost:3000)
2. Hot reload enabled for instant feedback
3. TypeScript type checking in IDE

### Code Quality
1. ESLint for code linting
2. TypeScript for type safety
3. Prettier for code formatting (optional)

### Build & Deploy
1. `npm run build` - Production build
2. `npm run start` - Preview production build
3. Deploy to Vercel/Netlify/other platforms

## Security Considerations

### Best Practices
- No sensitive data in client components
- Environment variables for secrets
- CSP headers for XSS protection
- HTTPS only in production

## Monitoring & Analytics

### Future Implementation
- Performance monitoring (Core Web Vitals)
- Error tracking (Sentry)
- User analytics (privacy-focused)
- Uptime monitoring

## Documentation

### Code Documentation
- JSDoc comments for complex functions
- README for setup instructions
- This architecture document for system overview

### Component Documentation
- Props interfaces with descriptions
- Usage examples in comments
- Storybook (future consideration)

## Conclusion

This architecture provides a solid foundation for a modern, performant portfolio website. It leverages the latest Next.js features while maintaining simplicity and scalability. The structure allows for easy maintenance and future enhancements as requirements evolve.
