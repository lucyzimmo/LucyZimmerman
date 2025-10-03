# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. It's deployed to GitHub Pages and showcases projects, skills, and professional experience.

**Homepage**: https://lucyzimmo.github.io/LucyZimmerman

## Common Commands

### Development
```bash
npm run dev              # Start development server with Turbopack
npm run build            # Production build
npm start                # Start production server
npm run lint             # Run ESLint
```

### Deployment
The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch. The workflow is configured in `.github/workflows/nextjs.yml`.

## Architecture

### Application Structure
- **Single Page Application**: The entire portfolio is a client-side rendered single-page app
- **Main Component**: `src/components/Portfolio.tsx` contains all portfolio sections (projects, skills, experience)
- **Page Entry**: `src/app/page.tsx` renders the Portfolio component
- **Layout**: `src/app/layout.tsx` sets up global font (Nanum Gothic Coding) and HTML structure

### Key Components
- **Portfolio Component** (`src/components/Portfolio.tsx`):
  - Manages all content via two main data arrays: `projects` and `jobs`
  - Contains inline components: Navbar, Projects section, Skills section, Experience section
  - Uses Framer Motion for animations
  - All sections use scroll-based animations with `whileInView`

- **UI Components** (`src/components/ui/`):
  - `Card.tsx`: Reusable card component for projects and experience items
  - `Button.tsx`: Button component (currently unused in main portfolio)

### Styling
- **Tailwind CSS**: Primary styling framework
- **Color Scheme**: Dark theme with `#1a1a2e` background, `#1F51FF` accent blue
- **Animations**: Framer Motion handles all transitions and scroll-based animations

### Static Assets
- Images stored in `public/images/` directory
- Referenced in Portfolio component data arrays via relative paths (e.g., `"images/Quad.png"`)

## Configuration Notes

### Next.js Config
- Minimal configuration in `next.config.ts`
- GitHub Pages deployment uses static export (configured via GitHub Actions)
- Font optimization handled through next/font/google

### TypeScript
- Type declarations for react-slick in `src/@types/react-slick.d.ts`
- Standard Next.js TypeScript setup

## Content Updates

To update portfolio content, edit the data arrays in `src/components/Portfolio.tsx`:
- **Projects**: Modify the `projects` array (line 6)
- **Experience**: Modify the `jobs` array (line 64)
- **Skills**: Modify the skills arrays in the Skills section (lines 240-286)

Each project/job object requires: title, description, image path, and link (github/link field).
