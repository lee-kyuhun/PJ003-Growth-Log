# Task 03 Design Specs: Home Dashboard
**Author:** [Lead Designer] Designer Agent
**Date:** 2026-02-18
**Reference:** `tasks/03_Home/01_requirements.md`

## 1. Design Concept: "Digital Garden & Terminal"
Combining the organic growth of a garden with the raw power of a terminal.
*   **Keywords:** Professional, Developer-first, Living, Minimalist.
*   **Dominant Color:** Dark Mode (Slate/Zinc) with specialized accents.

## 2. Color Palette (Tailwind)
*   **Background:** `bg-slate-900` (Main), `bg-slate-800` (Cards/Sections)
*   **Primary Accent (Growth):** `text-emerald-400` (Success, Completed tasks)
*   **Secondary Accent (Active):** `text-sky-400` (Current Phase, In-progress)
*   **Text:** `text-slate-100` (Headings), `text-slate-400` (Body/Meta)

## 3. Layout Structure (Wireframe)

### A. Navbar (Existing)
*   Ensure "Home" is active.

### B. Hero Section ("The Pulse")
*   **Container:** Full width, `h-[60vh]`, Flex center.
*   **Background:** Subtle grid pattern + Radial gradient glow (Emerald/Sky).
*   **Content:**
    *   `H1`: "Meta-Log: The Growth of Intelligence" (Font: Inter, Bold, 5xl).
    *   `Sub`: "Tracking the evolution of Multi-Agent Systems..." (Font: JetBrains Mono, 1xl, Typewriter effect).
    *   **Action:** Primary Button "View Latest Logs" (Arrow icon).

### C. Stats Dashboard (Grid)
*   **Layout:** 3-column grid (`grid-cols-1 md:grid-cols-3 gap-6`).
*   **Card Design:**
    *   `bg-white/5` (Glassmorphism), `border border-white/10`, `rounded-xl`.
    *   **Hover:** `hover:border-emerald-500/50` transition.
    *   **Content:**
        *   **Icon:** (Lucide React icons)
        *   **Label:** Uppercase tracking-wider (`text-xs text-slate-500`).
        *   **Value:** Big number (`text-4xl font-bold`).

### D. Recent Activity (DevLog Preview)
*   **Header:** "System Activity"
*   **List Style:** "Terminal Log" style.
    *   Each item: `Date` (Mono) | `Agent` (Badge) | `Message`
    *   Example: `2026-02-18 | [PM Agent] | Phase 1 Planning Completed`

## 4. Component Requirements (Developer Handoff)
1.  **`HeroSection.jsx`**: Needs `framer-motion` for the typewriter effect (or simple CSS animation).
2.  **`StatCard.jsx`**: Reusable component. Props: `title`, `value`, `icon`, `trend`.
3.  **`ActivityFeed.jsx`**: Map through mock data array.

## 5. Assets
*   **Icons:** `lucide-react` (Activity, Layers, Code, Zap).
*   **Fonts:** `Inter` (UI), `Fira Code` or `JetBrains Mono` (Code/Logs).
