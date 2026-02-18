# PJ003 Meta-Log: 투명한 AI 협업 대시보드 기획서

## 1. 프로젝트 개요 (Core Concept)
**"AI와 함께 성장하는 과정을 있는 그대로 보여준다."**
단순한 결과물(포트폴리오) 전시가 아니라, **'어떤 고민을 했고, 어떤 에이전트와 협업했으며, 어떤 스킬을 사용했는지'**를 시각적으로 보여주는 **Live Log Dashboard**입니다.

## 2. 작업 워크플로우 (Task-based Conversation)
**"Task 별 대화창 분리"** 전략을 사용합니다.
- **1 Task = 1 Conversation**: 하나의 작업을 완료하면 대화창을 닫고 새로 시작합니다.
- **폴더 구조**:
    - **소스 코드**: `src/` (단일 React 프로젝트 유지)
    - **에이전트 산출물**: `tasks/` 폴더 아래에 작업별로 아카이빙합니다.
    
### 📂 디렉토리 구조 예시
```
PJ003_growth-log/
├── src/                # React 소스 코드 (누적됨)
├── tasks/              # 대화(Task)별 산출물 보관소
│   ├── 01_Inital_Setup/
│   │   ├── mas_log.md      # 해당 태스크의 로그
│   │   ├── requirements.md # PM의 기획
│   │   └── wireframes.md   # Designer의 기획
│   ├── 02_Layout_Design/
│   └── 03_Home_Page/
└── README.md
```

## 3. 에이전트의 목표 및 역할 정의
각 대화창(Task)마다 3명의 에이전트가 소환되어 협업합니다.

| 에이전트 | 역할 (Role) | 주요 활동 (Actions) |
| :--- | :--- | :--- |
| **PM Agent** | **기획 & 디렉팅** | - `tasks/XX/requirements.md` 작성<br>- 사용자 요구사항 구체화<br>- `src/data/logs.json` 업데이트 |
| **Designer Agent** | **설계 & 가이드** | - `tasks/XX/ui_guide.md` 작성<br>- 컴포넌트 디자인 (Tailwind 클래스 선정)<br>- UX 플로우 설계 |
| **Developer Agent** | **구현 & 테스트** | - `src/` 코드 작성<br>- 기능 구현 및 테스트<br>- 최종 결과물 검증 |

## 4. 주요 기능 명세 (Features) - "Meta-Log"

### A. 메인 대시보드 (Home)
- **Hero 섹션**: "AI Native Developer의 성장 기록"
- **MAS 활동 요약**: PM/Dev/Des 에이전트의 기여도 통계.
- **최신 로그 타임라인**: 최근 `tasks/` 폴더에 추가된 작업 내역 표시.

### B. DevLog (디테일 뷰)
- **로그 리스트**: `tasks/` 폴더의 내역을 파싱하여 리스트화.
- **로그 상세**: 각 태스크별 `requirements.md`나 `mas_log.md`를 뷰어로 보여줌.

### C. Portfolio
- 프로젝트 갤러리 및 AI 기여도 분석 차트.

## 5. 기술 스택
- **Framework**: React (Vite)
- **Style**: TailwindCSS, Framer Motion
- **Data**: Local JSON (File-based DB)
- **Deploy**: Cloudflare Pages
- **Analytics**: GA4, Clarity

## 6. 검증 계획 (각 Task 종료 시)
1.  **빌드 테스트**: `npm run build`
2.  **로그 기록 확인**: `tasks/XX/mas_log.md`가 충실히 작성되었는지 확인.
3.  **사용자 승인**: 결과물 시연 후 다음 대화창으로 이동.
