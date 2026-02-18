# PJ003 Meta-Log Design System (v2.0 Premium)

## 1. Core Philosophy: "Premium Glassmorphism"
*   **Keywords**: Deep, Glowing, Fluid, Futuristic.
*   **Inspiration**: Linear, Raycast, Modern AI Interfaces.

## 2. Color Palette (Theme Uplift)
*   **Background**: `bg-slate-900` + Animated Gradients (Blue/Purple/Pink).
*   **Surface**: `bg-slate-800/50` (Glass)
*   **Primary**: Blue-500 to Purple-500 Gradient.
*   **Secondary**: Pink-500, Emerald-400 (for Success states).
*   **Text**:
    *   Headings: `text-white` or Gradient Text.
    *   Body: `text-slate-400`.

## 3. Component Tokens

### Cards (`ProjectCard`, `StatCard`)
*   **Base**: `bg-slate-800/50 backdrop-blur-xl border border-white/5`
*   **Hover**: `border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1`
*   **Transition**: `transition-all duration-300`

### Typography
*   **Hero**: `text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x`
*   **Font**: System UI + `font-mono` for data.

## 4. Layout & Effects
*   **Global Background**: Use `<BackgroundGlow />` component for consistent ambient lighting.
*   **Animations**: `framer-motion` for entry (`opacity: 0, y: 20` -> `opacity: 1, y: 0`).
