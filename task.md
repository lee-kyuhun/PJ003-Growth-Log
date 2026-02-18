# PJ003 Meta-Log 작업 목록 (Task-based)

각 체크박스 그룹은 **하나의 새로운 대화창(Conversation)**에 해당합니다.

## Phase 1: 기반 구축 (Setup)

### [x] Task 01: 프로젝트 초기화 ✅
- **목표**: React 프로젝트 생성 및 저장소 연결
- **산출물**: `tasks/01_Init/`, `src/` 초기 코드
- [x] Vite React 프로젝트 생성 (`PJ003_growth-log`)
- [x] GitHub 레포지토리 초기화 및 푸시
- [x] TailwindCSS 설치 및 설정
- [x] `tasks/` 폴더 구조 생성

### [x] Task 02: 레이아웃 및 디자인 시스템
- **목표**: 앱의 기본 골격과 스타일 가이드라인 수립
- **산출물**: `tasks/02_Layout/`, `src/components/layout/`
- [x] 라우터 설정 (`react-router-dom`)
- [x] 메인 레이아웃 개발 (Navbar, Footer)
- [x] 폰트 및 컬러 팔레트 정의 (Designer Agent)

## Phase 2: 핵심 기능 (Core Features)

### [x] Task 03: 홈 대시보드 구현 ✅
- **목표**: 메인 페이지 통계 및 Hero 섹션
- **산출물**: `tasks/03_Home/`, `src/pages/Home.jsx`
- [x] Hero 섹션 (애니메이션 포함)
- [x] MAS 통계 위젯 (Mock 데이터)

### [x] Task 04: DevLog 시스템 구축 (핵심!)
- **목표**: `tasks/` 폴더의 로그를 읽어서 보여주는 뷰어 만들기
- **산출물**: `tasks/03_Devlog/`, `src/pages/DevLog.jsx`
- [x] 마크다운 파서 연동
- [x] 로그 리스트 페이지
- [x] 로그 상세 뷰어 페이지

### [x] Task 05: 포트폴리오 페이지 ✅
- **목표**: 프로젝트 갤러리 구현
- **산출물**: `tasks/04_Portfolio/`
- [x] Implement Glassmorphism Design
- [x] Standardize Home & StatCard UI (Global Polish) ✅

## Phase 3: 배포 및 분석 (Final)

### [x] Task 06: 분석 도구 및 배포
- **목표**: GA4/Clarity 연동 및 Cloudflare 배포
- **산출물**: `tasks/05_Deploy/`
- [x] GA4 / Clarity 스크립트 삽입 (GTM 연동 완료)
- [x] Cloudflare Pages 배포
- [x] 최종 테스트
