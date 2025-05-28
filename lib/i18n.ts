"use client"

// 다국어 지원을 위한 번역 시스템

export type Language = "ko" | "en" | "ja" | "zh" | "es" | "fr"

export interface TranslationData {
  // 헤더
  title: string
  subtitle: string
  poweredBy: string

  // 네비게이션
  search: string
  searchPlaceholder: string
  askAI: string
  popularKeywords: string
  recommendedKeywords: string
  random: string
  categories: string
  backToList: string

  // 메인 콘텐츠
  welcome: string
  welcomeDescription: string
  slogan: string
  tip: string
  searchResults: string
  noResults: string

  // AI 채팅
  aiAssistant: string
  remainingQueries: string
  premium: string
  dailyLimitReached: string
  nextResetIn: string
  subscribeToPremium: string
  buyTokens: string
  startConversation: string
  startConversationDesc: string
  generating: string
  aiCanMakeErrors: string
  unlimited: string

  // 뉴스 티커
  liveNews: string
  newsCount: string
  offline: string
  online: string
  allNews: string
  category: string
  speed: string
  fast: string
  normal: string
  slow: string
  language: string
  noNewsAvailable: string
  noNewsInCategory: string
  backToAllNews: string
  refresh: string

  // 구독 및 결제
  freeQuestions: string
  basicPlan: string
  premiumPlan: string
  freePlan: string
  monthlyFee: string
  subscribe: string
  buyNow: string
  signUp: string
  email: string
  emailPlaceholder: string
  signUpBenefits: string
  signUpComplete: string

  // 공통
  loading: string
  error: string
  retry: string
  close: string
  save: string
  cancel: string
  confirm: string
  yes: string
  no: string
  next: string
  previous: string

  // 시간 표현
  minutesAgo: string
  hoursAgo: string
  daysAgo: string
  justNow: string
}

// 기본 한국어 번역
const koTranslations: TranslationData = {
  // 헤더
  title: "HeyChain 101",
  subtitle: "블록체인 미로의 친절한 나침반 🧭",
  poweredBy: "Powered by SAPGUN",

  // 네비게이션
  search: "검색",
  searchPlaceholder: "질문 검색...",
  askAI: "AI에게 질문하기",
  popularKeywords: "인기 키워드",
  recommendedKeywords: "추천 키워드",
  random: "🎲 랜덤",
  categories: "카테고리",
  backToList: "목록으로 돌아가기",

  // 메인 콘텐츠
  welcome: "Web3 세상에 오신 걸 환영해요! 🎉",
  welcomeDescription:
    "복잡한 블록체인 세상이 막막하신가요? 걱정 마세요! 왼쪽 메뉴에서 궁금한 주제를 골라보거나, 검색창에 질문을 던져보세요. HeyChain이 쉽고 재미있게 설명해드릴게요! 🚀",
  slogan: "복잡한 Web3, 이제 대화로 쉽게 배워요! 💬✨",
  tip: "💡 팁: AI 채팅으로 실시간 질문도 가능해요!",
  searchResults: "검색 결과",
  noResults: "검색 결과가 없습니다.",

  // AI 채팅
  aiAssistant: "HeyChain AI 어시스턴트",
  remainingQueries: "회 남음",
  premium: "프리미엄",
  dailyLimitReached: "일일 무료 질문 한도에 도달했습니다!",
  nextResetIn: "다음 리셋까지",
  subscribeToPremium: "유료 플랜 구독하기",
  buyTokens: "토큰 구매하기",
  startConversation: "HeyChain AI와 대화를 시작하세요!",
  startConversationDesc: "Web3, 블록체인, DeFi, NFT 등에 대해 무엇이든 물어보세요.",
  generating: "답변을 생성하고 있습니다...",
  aiCanMakeErrors: "AI는 실수할 수 있습니다. 중요한 정보는 검증하세요.",
  unlimited: "무제한 사용 가능",

  // 뉴스 티커
  liveNews: "🔥 실시간 뉴스",
  newsCount: "개 소식",
  offline: "오프라인",
  online: "온라인",
  allNews: "전체",
  category: "카테고리",
  speed: "속도",
  fast: "빠름 (30초)",
  normal: "보통 (60초)",
  slow: "느림 (90초)",
  language: "언어",
  noNewsAvailable: "표시할 뉴스가 없습니다.",
  noNewsInCategory: "카테고리에 뉴스가 없습니다.",
  backToAllNews: "전체 뉴스로",
  refresh: "새로고침",

  // 구독 및 결제
  freeQuestions: "무료 질문",
  basicPlan: "베이직",
  premiumPlan: "프리미엄",
  freePlan: "무료 플랜",
  monthlyFee: "월 요금",
  subscribe: "구독하기",
  buyNow: "구매하기",
  signUp: "회원가입",
  email: "이메일",
  emailPlaceholder: "your@email.com",
  signUpBenefits: "회원가입 혜택",
  signUpComplete: "회원가입 완료!",

  // 공통
  loading: "로딩 중...",
  error: "오류",
  retry: "다시 시도",
  close: "닫기",
  save: "저장",
  cancel: "취소",
  confirm: "확인",
  yes: "예",
  no: "아니오",
  next: "다음",
  previous: "이전",

  // 시간 표현
  minutesAgo: "분 전",
  hoursAgo: "시간 전",
  daysAgo: "일 전",
  justNow: "방금 전",
}

// AI 번역 캐시
const translationCache = new Map<string, TranslationData>()

// AI 번역 함수
async function translateWithAI(text: string, targetLanguage: Language): Promise<string> {
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        targetLanguage,
        sourceLanguage: "ko",
      }),
    })

    if (!response.ok) {
      throw new Error("Translation failed")
    }

    const data = await response.json()
    return data.translatedText || text
  } catch (error) {
    console.error("Translation error:", error)
    return text // 실패 시 원본 텍스트 반환
  }
}

// 전체 번역 데이터 생성
async function generateTranslations(targetLanguage: Language): Promise<TranslationData> {
  if (targetLanguage === "ko") {
    return koTranslations
  }

  // 캐시 확인
  const cacheKey = targetLanguage
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!
  }

  const translations: Partial<TranslationData> = {}

  // 모든 텍스트를 병렬로 번역
  const translationPromises = Object.entries(koTranslations).map(async ([key, value]) => {
    const translatedValue = await translateWithAI(value, targetLanguage)
    return [key, translatedValue]
  })

  const results = await Promise.all(translationPromises)

  results.forEach(([key, value]) => {
    ;(translations as any)[key] = value
  })

  const finalTranslations = translations as TranslationData

  // 캐시에 저장
  translationCache.set(cacheKey, finalTranslations)

  return finalTranslations
}

// 언어별 기본 번역 (AI 번역 실패 시 사용)
const fallbackTranslations: Record<Language, Partial<TranslationData>> = {
  ko: koTranslations,
  en: {
    title: "HeyChain 101",
    subtitle: "Your Friendly Compass in the Blockchain Maze 🧭",
    poweredBy: "Powered by SAPGUN",
    search: "Search",
    searchPlaceholder: "Search questions...",
    askAI: "Ask AI",
    popularKeywords: "Popular Keywords",
    recommendedKeywords: "Recommended Keywords",
    random: "🎲 Random",
    categories: "Categories",
    welcome: "Welcome to the Web3 World! 🎉",
    welcomeDescription:
      "Feeling overwhelmed by the complex blockchain world? Don't worry! Choose a topic from the left menu or ask questions in the search bar. HeyChain will explain everything easily and fun! 🚀",
    slogan: "Complex Web3, now easy to learn through conversation! 💬✨",
    tip: "💡 Tip: Real-time questions available via AI chat!",
    liveNews: "🔥 Live News",
    language: "Language",
    loading: "Loading...",
    error: "Error",
    retry: "Retry",
  },
  ja: {
    title: "HeyChain 101",
    subtitle: "ブロックチェーンの迷路の親切なコンパス 🧭",
    search: "検索",
    askAI: "AIに質問",
    language: "言語",
    loading: "読み込み中...",
  },
  zh: {
    title: "HeyChain 101",
    subtitle: "区块链迷宫中的友善指南针 🧭",
    search: "搜索",
    askAI: "询问AI",
    language: "语言",
    loading: "加载中...",
  },
  es: {
    title: "HeyChain 101",
    subtitle: "Tu Brújula Amigable en el Laberinto Blockchain 🧭",
    search: "Buscar",
    askAI: "Preguntar a IA",
    language: "Idioma",
    loading: "Cargando...",
  },
  fr: {
    title: "HeyChain 101",
    subtitle: "Votre Boussole Amicale dans le Labyrinthe Blockchain 🧭",
    search: "Rechercher",
    askAI: "Demander à l'IA",
    language: "Langue",
    loading: "Chargement...",
  },
}

// 번역 훅
export function useTranslation(language: Language = "ko") {
  const [translations, setTranslations] = useState<TranslationData>(
    (fallbackTranslations[language] as TranslationData) || koTranslations,
  )
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (language === "ko") {
      setTranslations(koTranslations)
      return
    }

    setIsLoading(true)

    generateTranslations(language)
      .then(setTranslations)
      .catch(() => {
        // AI 번역 실패 시 폴백 사용
        setTranslations({
          ...koTranslations,
          ...fallbackTranslations[language],
        } as TranslationData)
      })
      .finally(() => setIsLoading(false))
  }, [language])

  return { t: translations, isLoading }
}

// 언어 정보
export const languages: Record<Language, { name: string; flag: string; nativeName: string }> = {
  ko: { name: "Korean", flag: "🇰🇷", nativeName: "한국어" },
  en: { name: "English", flag: "🇺🇸", nativeName: "English" },
  ja: { name: "Japanese", flag: "🇯🇵", nativeName: "日本語" },
  zh: { name: "Chinese", flag: "🇨🇳", nativeName: "中文" },
  es: { name: "Spanish", flag: "🇪🇸", nativeName: "Español" },
  fr: { name: "French", flag: "🇫🇷", nativeName: "Français" },
}

import { useState, useEffect } from "react"
