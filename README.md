# Heychain — Web3 + AI Explorer

![Next.js](https://img.shields.io/badge/Next.js-15.2.8-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![AI](https://img.shields.io/badge/AI-Integration-orange)

**Web3와 AI를 결합한 실험적 프로젝트**

Heychain은 Next.js + Vercel AI SDK를 활용해 Web3 환경에서 AI를 활용하는 인터페이스를 탐구하는 포트폴리오 프로젝트입니다.

## 🚀 Live Demo
**[https://heychain-web3-101-af7g.vercel.app/](https://heychain-web3-101-af7g.vercel.app/)**

## ✨ 주요 기능
- AI 채팅 인터페이스 (v0.dev + 수동 커스터마이징)
- 다크모드 지원 및 현대적인 UI/UX
- API Route 기반 백엔드 기능 (Chat, Translate, News 등)
- Next.js 15 App Router + React 19

## 🛠 Tech Stack
- **Framework**: Next.js 15.2.8 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI + shadcn/ui
- **AI**: Vercel AI SDK (`ai@3.4.33` + `@ai-sdk/openai`)
- **Package Manager**: pnpm
- **Deployment**: Vercel (Hobby Plan)

## 📁 프로젝트 구조
app/
├── api/           # Chat, Translate, News 등 API Routes
components/        # AI Chat Modal, UI Components
hooks/             # Custom React Hooks
lib/               # Utility functions
public/            # Static assets
text## 🔮 향후 계획 (Roadmap)
- Web3 지갑 연결 (wagmi + viem)
- Chainlink Data Feed / CCIP 연동
- 온체인 데이터 기반 AI 에이전트
- 멀티체인 지원 (EVM + Solana)

## ⚠️ Note
이 프로젝트는 **v0.dev**로 초기 UI를 생성한 후, 직접 커스터마이징하며 개발 중인 실험 프로젝트입니다.
