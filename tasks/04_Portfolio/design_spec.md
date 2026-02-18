# Task 05: Portfolio Page Design Spec

## 1. 개요
*   **목표**: 사용자(개발자)의 프로젝트 포트폴리오를 전시하는 갤러리 페이지 구현.
*   **핵심 가치**: 단순한 결과물 나열이 아니라, **"AI와의 협업 비중"**과 **"성장 포인트"**를 시각적으로 전달.

## 2. 데이터 구조 (`src/data/projects.json`)
*   각 프로젝트는 다음 정보를 포함:
    *   `id`: unique string (e.g., "pj001")
    *   `title`: 프로젝트 명
    *   `description`: 한 줄 소개
    *   `image`: 대표 이미지 URL (public 폴더 or placeholder)
    *   `tags`: 사용 기술 스택 (Array of strings, e.g., ["React", "Node.js"])
    *   `links`: 관련 링크 (GitHub, Demo, DevLog)
    *   `aiContribution`: AI 협업 비중 (0~100%) - *Unique selling point*
    *   `status`: 진행 상태 (Completed, In Progress)

## 3. UI 컴포넌트

### A. Layout (`src/pages/Portfolio.jsx`)
*   **Hero Section**: 간단한 소개와 인상적인 문구 ("Building with AI Agents").
*   **Filter/Search**: (추후 구현) 태그별 필터링 기능 고려.
*   **Grid**: Responsive Grid (Mobile 1, Tablet 2, Desktop 3 columns).

### B. Project Card (`src/components/portfolio/ProjectCard.jsx`)
*   **Visual**: 카드 상단에 썸네일 이미지 (hover 시 확대 효과).
*   **Content**: Title, Description, Tech Tags.
*   **Action**: "View Detail" or Links (GitHub, Website).
*   **Highlight**: AI 기여도를 보여주는 Progress Bar 또는 Badge.

## 4. 스타일링 (TailwindCSS)
*   **Card**: `bg-slate-800`, `rounded-xl`, `overflow-hidden`, `hover:shadow-lg`
*   **Text**: `text-white` (Title), `text-gray-400` (Desc)
*   **Tags**: `bg-blue-500/20`, `text-blue-300`, `text-xs`, `rounded-full`
