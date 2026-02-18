# UI Polish Plan: Global Glassmorphism Adoption

## 1. Objective
Standardize the "Premium Glassmorphism" design language introduced in the Portfolio page across the entire application, specifically targeting the Home Dashboard and Navigation.

## 2. Designer Agent Specs (`tasks/04_Portfolio/ui_guide.md`)

### A. Core Design Tokens
*   **Background**: Dark Slate (`bg-slate-900`) with dynamic animated blobs (`animate-pulse`, `blur-[120px]`).
*   **Cards**:
    *   Base: `bg-slate-800/50`
    *   Border: `border-white/5` (Default) -> `border-blue-500/30` (Hover)
    *   Effect: `backdrop-blur-xl`, `hover:shadow-2xl`
*   **Typography**:
    *   Headings: `text-transparent bg-clip-text bg-gradient-to-r`
    *   Body: `text-slate-400`

### B. Component Redesign: `StatCard`
*   **Current**: Flat, simple border.
*   **New**:
    *   Add gradient overlay.
    *   Add hover lift effect (`y: -5`).
    *   Icon should have a glowing background container.

## 3. Developer Agent Tasks

### Step 1: Global Styles & Assets
*   [ ] Extract `BackgroundGlow` component from `Portfolio.jsx` to `src/components/layout/BackgroundGlow.jsx` for reuse.
*   [ ] Ensure `index.css` animations are globally available.

### Step 2: Component Refactoring
*   [ ] **Refactor `StatCard.jsx`**: Apply the new Glassmorphism styles.
*   [ ] **Refactor `HeroSection.jsx`**: Update text gradients and animations to match Portfolio.

### Step 3: Page Integration
*   [ ] **Update `Home.jsx`**:
    *   Insert `BackgroundGlow`.
    *   Update grid gaps and padding to match Portfolio's spaciousness.

## 4. Execution Sequence
1.  Extract `BackgroundGlow` (Dev).
2.  Refactor `StatCard` (Dev).
3.  Update `Home.jsx` (Dev).
4.  Verify Consistency (PM/Des).
