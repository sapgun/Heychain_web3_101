"use client"

import type React from "react"

import { useState } from "react"
import AITranslateButton from "./ai-translate-button"

interface TranslatableContentProps {
  children: React.ReactNode
  originalText: string
  className?: string
  showTranslateButton?: boolean
}

export default function TranslatableContent({
  children,
  originalText,
  className = "",
  showTranslateButton = true,
}: TranslatableContentProps) {
  const [translatedText, setTranslatedText] = useState<string | null>(null)
  const [showTranslation, setShowTranslation] = useState(false)

  const handleTranslated = (translated: string) => {
    setTranslatedText(translated)
    setShowTranslation(true)
  }

  return (
    <div className={className}>
      {/* 원본 콘텐츠 */}
      {!showTranslation && children}

      {/* 번역된 콘텐츠 */}
      {showTranslation && translatedText && (
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-line">{translatedText}</div>
        </div>
      )}

      {/* 번역 버튼 */}
      {showTranslateButton && (
        <div className="mt-4 flex items-center justify-between">
          <AITranslateButton text={originalText} onTranslated={handleTranslated} showOriginal={false} />
          {translatedText && (
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className="text-xs text-blue-400 hover:text-blue-300 underline"
            >
              {showTranslation ? "원문 보기" : "번역문 보기"}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
