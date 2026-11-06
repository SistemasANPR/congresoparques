# Overview


This is a React-based landing page application for "Congreso Parques Tijuana 2026" - a Latin American conference focused on public spaces and urban parks. The application is built as a full-stack web application with Express.js backend and React frontend, featuring a modern UI component system and responsive design. The landing page showcases event information, registration forms, and interactive elements to promote the conference.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for server-side logic
- **Development Server**: Custom Vite integration for SSR and hot module replacement
- **Session Management**: Built-in session handling with connect-pg-simple for PostgreSQL sessions
- **API Structure**: RESTful API endpoints with centralized error handling

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database integration
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Centralized schema definitions in shared directory for type consistency
- **Storage Interface**: Abstracted storage layer with both memory and database implementations

## Authentication and Authorization
- **Session-based**: Traditional session-based authentication using Express sessions
- **Storage**: PostgreSQL session storage for persistence across server restarts
- **User Management**: Basic user schema with username/password authentication

## Design System and Theming
- **Color Scheme**: ANPR brand colors (primary: #012787, accent: #BCCE16) with neutral supporting colors
- **Component System**: Comprehensive UI component library with consistent styling patterns
- **Accessibility**: ARIA attributes, keyboard navigation, and screen reader support built into components
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Development and Build Process
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Module Resolution**: ESM modules throughout the application
- **Build Process**: Vite handles frontend bundling, esbuild for backend compilation
- **Development Tools**: Hot reload, error overlays, and development banner integration

# External Dependencies

## Third-party Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Replit Platform**: Development environment with specialized Vite plugins for cartography and dev banners

## UI and Component Libraries
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Shadcn/ui**: Pre-built component library providing consistent design patterns
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel component for interactive content display

## Development and Build Tools
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation resolvers
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for managing component variants and styling
- **CMDK**: Command palette component for enhanced user interaction

## Database and ORM
- **Drizzle Kit**: Database migration and schema management tooling
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for runtime validation
- **PostgreSQL**: Primary database system via Neon's serverless platform

## Vercel Deployment Configuration
- **Config File**: `vercel.json` with build settings and URL rewrites for SPA
- **Build Config**: `vite.config.vercel.ts` - Vite config without Replit-specific plugins
- **Build Command**: `npm run build:vercel` - Generates static files in `dist/` folder
- **Output**: Static SPA with all assets optimized for production

## Pages and Routes
- `/` — Landing page
- `/expo-espacio-publico` — Expo Espacio Público 2026 info page; "¡Participa como Visitante!" section has two buttons: register + "Ver Directorio de Expositores"
- `/directorio-expositores` — Exhibitor directory with 19 companies; cards show logo (via image proxy from Google Drive), description, social links, PDF catalog; searchable by name/description; print-to-PDF button (vector via browser print dialog)

## SEO Implementation
- **Google Analytics**: GA4 tracking enabled (G-5JBQPS6SX1)
- **Meta Tags**: Title, description, keywords optimized for "Congreso Parques Urbanos Tijuana 2026"
- **Open Graph**: Facebook/LinkedIn sharing optimization
- **Twitter Cards**: Twitter sharing with large image preview
- **Structured Data**: JSON-LD schemas for Event, Organization, WebPage, BreadcrumbList
- **Geo Tags**: Location metadata for Tijuana, Baja California, México
