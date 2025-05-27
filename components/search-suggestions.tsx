"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Shuffle, TrendingUp } from "lucide-react"

interface SearchSuggestionsProps {
  keywords: string[]
  popularSearches?: string[]
  onKeywordClick: (keyword: string) => void
  language: "ko" | "en"
}

export function SearchSuggestions({
  keywords,
  popularSearches = [],
  onKeywordClick,
  language,
}: SearchSuggestionsProps) {
  const [suggestedKeywords, setSuggestedKeywords] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)

  // Get deterministic initial keywords to avoid hydration mismatch
  const getInitialKeywords = () => {
    return keywords.slice(0, 5)
  }

  const getRandomKeywords = () => {
    const shuffled = [...keywords].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 5)
  }

  useEffect(() => {
    setIsClient(true)
    // Set initial keywords deterministically on client
    setSuggestedKeywords(getInitialKeywords())
  }, [])

  const refreshSuggestions = () => {
    if (isClient) {
      setSuggestedKeywords(getRandomKeywords())
    }
  }

  // Always show initial keywords during SSR and initial render
  const displayKeywords = isClient && suggestedKeywords.length > 0 ? suggestedKeywords : getInitialKeywords()

  const texts = {
    suggestedKeywords: language === "ko" ? "추천 검색어" : "Suggested Keywords",
    popularSearches: language === "ko" ? "인기 검색어" : "Popular Searches",
    refresh: language === "ko" ? "새로고침" : "Refresh",
  }

  return (
    <div className="space-y-4">
      {/* 추천 검색어 */}
      <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4 border border-purple-500/20">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h4 className="text-xs sm:text-sm font-semibold text-purple-300">{texts.suggestedKeywords}</h4>
          {isClient && (
            <button
              onClick={refreshSuggestions}
              className="text-purple-400 hover:text-purple-300 transition-colors"
              title={texts.refresh}
            >
              <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {displayKeywords.map((keyword, index) => (
            <Badge
              key={`${keyword}-${index}`}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 cursor-pointer transition-colors text-xs sm:text-sm px-2 py-1"
              onClick={() => onKeywordClick(keyword)}
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </div>

      {/* 인기 검색어 */}
      {popularSearches.length > 0 && (
        <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4 border border-blue-500/20">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h4 className="text-xs sm:text-sm font-semibold text-blue-300 flex items-center">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {texts.popularSearches}
            </h4>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {popularSearches.map((keyword, index) => (
              <Badge
                key={`popular-${keyword}-${index}`}
                variant="outline"
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 cursor-pointer transition-colors text-xs sm:text-sm px-2 py-1"
                onClick={() => onKeywordClick(keyword)}
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
