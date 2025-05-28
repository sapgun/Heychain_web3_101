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
    <div className="space-y-4">
      {/* 인기 검색어 */}
      <div>
        <div className="flex items-center mb-3">
          <TrendingUp className="w-4 h-4 text-purple-400 mr-2" />
          <h3 className="text-sm font-semibold text-purple-300">
            {language === "ko" ? "인기 검색어" : "Popular Searches"}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <Badge
              key={search}
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 cursor-pointer transition-all text-xs"
              onClick={() => onKeywordClick(search)}
            >
              <span className="text-purple-400 mr-1">#{index + 1}</span>
              {search}
            </Badge>
          ))}
        </div>
      </div>

      {/* 추천 키워드 */}
      <div>
        <div className="flex items-center mb-3">
          <Hash className="w-4 h-4 text-blue-400 mr-2" />
          <h3 className="text-sm font-semibold text-blue-300">
            {language === "ko" ? "추천 키워드" : "Recommended Keywords"}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <Badge
              key={keyword}
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 cursor-pointer transition-all text-xs"
              onClick={() => onKeywordClick(keyword)}
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchSuggestions
