"use client"

import type React from "react"

// components/search-suggestions.tsx
import { Shuffle, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useClient } from "usehooks-ts"

interface SearchSuggestionsProps {
  suggestedKeywords: string[]
  popularSearches: string[]
  texts: {
    suggestedKeywords: string
    popularSearches: string
    refresh: string
  }
  onKeywordClick: (keyword: string) => void
  refreshSuggestions: () => void
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestedKeywords,
  popularSearches,
  texts,
  onKeywordClick,
  refreshSuggestions,
}) => {
  const isClient = useClient()
  const displayKeywords = suggestedKeywords.slice(0, 5)

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* 추천 검색어 */}
      <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4 border border-purple-500/20">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h4 className="text-sm font-semibold text-purple-300">{texts.suggestedKeywords}</h4>
          {isClient && (
            <button
              onClick={refreshSuggestions}
              className="text-purple-400 hover:text-purple-300 transition-colors p-2 -m-2 rounded-lg"
              title={texts.refresh}
            >
              <Shuffle className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {displayKeywords.map((keyword, index) => (
            <Badge
              key={`${keyword}-${index}`}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 cursor-pointer transition-colors text-sm px-3 py-2 min-h-[36px] flex items-center"
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
            <h4 className="text-sm font-semibold text-blue-300 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              {texts.popularSearches}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((keyword, index) => (
              <Badge
                key={`popular-${keyword}-${index}`}
                variant="outline"
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 cursor-pointer transition-colors text-sm px-3 py-2 min-h-[36px] flex items-center"
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

export default SearchSuggestions
