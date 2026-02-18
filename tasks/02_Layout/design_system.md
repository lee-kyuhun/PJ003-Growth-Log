# PJ003 Meta-Log Design System

## 1. Color Palette (Dark Theme Default)

- **Background**: `bg-gray-900` (#111827) - Main background
- **Surface**: `bg-gray-800` (#1f2937) - Cards, Sidebar
- **Primary**: `text-indigo-400` (#818cf8) - Links, Active states
- **Secondary**: `text-teal-400` (#2dd4bf) - Accents, Highlights
- **Text**: `text-gray-100` (#f3f4f6) - Main text
- **Muted**: `text-gray-400` (#9ca3af) - Secondary text, Footer

## 2. Typography

- **Font Family**: System UI (San Francisco, Inter, Segoe UI)
- **Code**: `font-mono` (Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)

## 3. Layout Structure

### Main Layout
- **Navbar**: Fixed top, `h-16`, glassmorphism (`backdrop-blur-md bg-gray-900/70`).
- **Main Content**: `pt-16` (to account for fixed navbar), `min-h-screen`.
- **Footer**: `py-8`, `text-center`.
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

### Components

#### Navbar
- Logo: "Meta-Log" (Bold, Primary Color)
- Links: Home, DevLog, Portfolio, About

#### Footer
- Copyright
- Social Links (GitHub, LinkedIn)

## 4. Routing Structure

- `/`: Home (Task 03)
- `/devlog`: DevLog List (Task 04)
- `/portfolio`: Portfolio (Task 05)
