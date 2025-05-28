"use client"

import { Badge } from "@/components/ui/badge"
import { TrendingUp, Hash } from "lucide-react"

interface SearchSuggestionsProps {
  keywords: string[]
  popularSearches: string[]
  onKeywordClick: (keyword: string) => void
  language: "ko" | "en"
}

export function SearchSuggestions({ keywords, popularSearches, onKeywordClick, language }: SearchSuggestionsProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* 인기 검색어 */}
      <div>
        <div className="flex items-center mb-2 sm:mb-3">
          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-2" />
          <h3 className="text-xs sm:text-sm font-semibold text-purple-300">
            {language === "ko" ? "인기 검색어" : "Popular Searches"}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {popularSearches.map((search, index) => (
            <Badge
              key={search}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 cursor-pointer transition-all text-xs touch-manipulation min-h-[32px] px-2 py-1"
              onClick={() => onKeywordClick(search)}
            >
              <span className="text-purple-400 mr-1">#{index + 1}</span>
              <span className="truncate">{search}</span>
            </Badge>
          ))}
        </div>
      </div>

      {/* 추천 키워드 */}
      <div>
        <div className="flex items-center mb-2 sm:mb-3">
          <Hash className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-2" />
          <h3 className="text-xs sm:text-sm font-semibold text-blue-300">
            {language === "ko" ? "추천 키워드" : "Recommended Keywords"}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {keywords.slice(0, 8).map((keyword) => (
            <Badge
              key={keyword}
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 cursor-pointer transition-all text-xs touch-manipulation min-h-[32px] px-2 py-1"
              onClick={() => onKeywordClick(keyword)}
            >
              <span className="truncate">{keyword}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchSuggestions
