"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Languages, Loader2, AlertCircle, Check } from "lucide-react"
import { translateTextWithAI } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"

interface AITranslateButtonProps {
  text: string
  onTranslated?: (translatedText: string) => void
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
  showOriginal?: boolean
}

export default function AITranslateButton({
  text,
  onTranslated,
  variant = "ghost",
  size = "sm",
  showOriginal = true,
}: AITranslateButtonProps) {
  const { language, t } = useLanguage()
  const [isTranslating, setIsTranslating] = useState(false)
  const [translatedText, setTranslatedText] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showTranslation, setShowTranslation] = useState(false)

  // 한국어면 번역 버튼 숨김
  if (language === "ko") {
    return null
  }

  const handleTranslate = async () => {
    if (translatedText) {
      // 이미 번역된 경우 토글
      setShowTranslation(!showTranslation)
      return
    }

    setIsTranslating(true)
    setError(null)

    try {
      const result = await translateTextWithAI(text, language)
      setTranslatedText(result)
      setShowTranslation(true)
      onTranslated?.(result)
    } catch (err) {
      setError(t.translationFailed)
      console.error("Translation failed:", err)
    } finally {
      setIsTranslating(false)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Button
          variant={variant}
          size={size}
          onClick={handleTranslate}
          disabled={isTranslating}
          className="flex items-center space-x-1"
        >
          {isTranslating ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : translatedText ? (
            <Check className="w-3 h-3" />
          ) : (
            <Languages className="w-3 h-3" />
          )}
          <span className="text-xs">
            {isTranslating ? t.translating : translatedText ? t.translatedText : t.translateWithAI}
          </span>
        </Button>

        {error && (
          <Badge variant="destructive" className="text-xs">
            <AlertCircle className="w-3 h-3 mr-1" />
            {error}
          </Badge>
        )}
      </div>

      {/* 번역 결과 표시 */}
      {translatedText && showTranslation && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 space-y-2">
          {showOriginal && (
            <div>
              <div className="text-xs text-gray-500 mb-1">{t.originalText}:</div>
              <div className="text-sm text-gray-300">{text}</div>
            </div>
          )}
          <div>
            <div className="text-xs text-blue-400 mb-1">{t.translatedText}:</div>
            <div className="text-sm text-blue-200">{translatedText}</div>
          </div>
        </div>
      )}
    </div>
  )
}
