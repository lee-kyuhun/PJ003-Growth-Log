# Task 06: 분석 도구 연동 및 배포 계획 (Deployment Plan)

## 1. 목표 (Goal)
- 사용자 행동 분석을 위한 **Google Analytics 4 (GA4)** 및 **Microsoft Clarity** 연동.
- **Cloudflare Pages**를 통한 정적 사이트 배포.
- **SPA 라우팅 문제 해결** (`_redirects` 파일 생성).

## 2. 작업 상세 (Detail Tasks)

### A. 분석 도구 연동 (Analytics)
- [ ] **GA4 설정**:
    - `react-ga4` 라이브러리 설치.
    - `src/utils/analytics.js` 유틸리티 생성.
    - `App.jsx`에서 초기화 및 페이지뷰 추적 (`useEffect`).
- [ ] **Microsoft Clarity 설정**:
    - `react-microsoft-clarity` 설치 또는 스크립트 삽입.
    - `App.jsx`에서 초기화.
- [ ] **환경 변수 설정**:
    - `.env` 파일에 `VITE_GA_MEASUREMENT_ID`, `VITE_CLARITY_ID` 추가.

### B. 배포 설정 (Deployment)
- [ ] **Build 설정**:
    - `vite.config.js` 확인 (Output dir: `dist`).
    - `npm run build` 테스트.
- [ ] **Cloudflare Pages**:
    - (옵션) `wrangler` CLI 사용 또는 GitHub 연동 가이드 작성.
    - `public/_redirects` 파일 생성 (SPA 라우팅 문제 해결용: `/* /index.html 200`).

## 3. 필요 정보 (Requirements from User)
- **GA4 Measurement ID** (예: `G-XXXXXXXXXX`)
- **Clarity Project ID** (예: `jksdf78sdf`)

## 4. 실행 순서
1. `npm install react-ga4 react-microsoft-clarity`
2. 환경 변수 파일 생성 (`.env.example`)
3. `Analytics` 컴포넌트 구현 및 `App.jsx` 적용
4. `public/_redirects` 파일 생성
5. 빌드 테스트
