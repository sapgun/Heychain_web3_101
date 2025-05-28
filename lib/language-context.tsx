"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Language, useTranslation } from "./i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: any
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko")
  const { t, isLoading } = useTranslation(language)

  // 로컬 스토리지에서 언어 설정 로드
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("heychain-language") as Language
      if (savedLanguage && ["ko", "en", "ja", "zh", "es", "fr"].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("heychain-language", lang)
    }
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
