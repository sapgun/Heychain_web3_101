"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Shuffle } from "lucide-react"

interface SearchSuggestionsProps {
  keywords: string[]
  onKeywordClick: (keyword: string) => void
  language: "ko" | "en"
}

export function SearchSuggestions({ keywords, onKeywordClick, language }: SearchSuggestionsProps) {
  const [suggestedKeywords, setSuggestedKeywords] = useState<string[]>([])

  const getRandomKeywords = () => {
    const shuffled = [...keywords].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 5)
  }

  useEffect(() => {
    setSuggestedKeywords(getRandomKeywords())
  }, [keywords])

  const refreshSuggestions = () => {
    setSuggestedKeywords(getRandomKeywords())
  }

  return (
    <div className="bg-gray-700/30 rounded-lg p-4 border border-purple-500/20">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-purple-300">
          {language === "ko" ? "추천 검색어" : "Suggested Keywords"}
        </h4>
        <button
          onClick={refreshSuggestions}
          className="text-purple-400 hover:text-purple-300 transition-colors"
          title={language === "ko" ? "새로고침" : "Refresh"}
        >
          <Shuffle className="w-4 h-4" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestedKeywords.map((keyword, index) => (
          <Badge
            key={`${keyword}-${index}`}
            variant="outline"
            className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 cursor-pointer transition-colors"
            onClick={() => onKeywordClick(keyword)}
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  )
}
