"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X, ArrowUp, ArrowDown, CornerDownLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { web3Data } from "@/app/data/web3-data"

interface AutocompleteSearchProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  onSearchSubmit: (value: string) => void
  language: "ko" | "en"
}

export function AutocompleteSearch({ searchTerm, onSearchChange, onSearchSubmit, language }: AutocompleteSearchProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // 로컬 스토리지에서 최근 검색어 불러오기
  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches")
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches))
    }
  }, [])

  // 검색어 저장
  const saveSearch = (term: string) => {
    if (!term.trim()) return

    const newRecentSearches = [term, ...recentSearches.filter((s) => s !== term)].slice(0, 5)

    setRecentSearches(newRecentSearches)
    localStorage.setItem("recentSearches", JSON.stringify(newRecentSearches))
  }

  // 검색어 입력에 따른 자동완성 제안
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    const term = searchTerm.toLowerCase()
    const allSuggestions = new Set<string>()

    // 카테고리 이름에서 검색
    web3Data.forEach((category) => {
      if (category.category.toLowerCase().includes(term)) {
        allSuggestions.add(category.category)
      }

      // 질문과 답변에서 검색
      category.items.forEach((item) => {
        if (item.question.toLowerCase().includes(term)) {
          allSuggestions.add(item.question)
        }

        // 답변에서 키워드 추출 (첫 100자 내에서만)
        const answerPreview = item.answer.slice(0, 100).toLowerCase()
        if (answerPreview.includes(term)) {
          const words = item.question.split(" ")
          if (words.length > 3) {
            allSuggestions.add(words.slice(0, 3).join(" ") + "...")
          } else {
            allSuggestions.add(item.question)
          }
        }
      })
    })

    // 최대 7개까지만 표시
    setSuggestions(Array.from(allSuggestions).slice(0, 7))
    setIsOpen(allSuggestions.size > 0)
    setSelectedIndex(-1)
  }, [searchTerm])

  // 키보드 네비게이션
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    // 위 화살표
    if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1))
    }
    // 아래 화살표
    else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev >= suggestions.length - 1 ? 0 : prev + 1))
    }
    // 엔터
    else if (e.key === "Enter") {
      e.preventDefault()
      if (selectedIndex >= 0) {
        const selected = suggestions[selectedIndex]
        onSearchChange(selected)
        onSearchSubmit(selected)
        saveSearch(selected)
        setIsOpen(false)
      } else if (searchTerm.trim()) {
        onSearchSubmit(searchTerm)
        saveSearch(searchTerm)
        setIsOpen(false)
      }
    }
    // ESC
    else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  // 검색창 외부 클릭 시 자동완성 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // 검색어 지우기
  const clearSearch = () => {
    onSearchChange("")
    setIsOpen(false)
    inputRef.current?.focus()
  }

  // 검색어 선택
  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion)
    onSearchSubmit(suggestion)
    saveSearch(suggestion)
    setIsOpen(false)
  }

  // 최근 검색어 선택
  const handleRecentSearchClick = (term: string) => {
    onSearchChange(term)
    onSearchSubmit(term)
    setIsOpen(false)
  }

  // 최근 검색어 삭제
  const removeRecentSearch = (e: React.MouseEvent, term: string) => {
    e.stopPropagation()
    const newRecentSearches = recentSearches.filter((s) => s !== term)
    setRecentSearches(newRecentSearches)
    localStorage.setItem("recentSearches", JSON.stringify(newRecentSearches))
  }

  const texts = {
    searchPlaceholder: language === "ko" ? "질문 검색..." : "Search questions...",
    recentSearches: language === "ko" ? "최근 검색어" : "Recent Searches",
    suggestions: language === "ko" ? "추천 검색어" : "Suggestions",
    noRecentSearches: language === "ko" ? "최근 검색어가 없습니다" : "No recent searches",
  }

  return (
    <div className="relative w-full">
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={texts.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchTerm.trim() && setSuggestions.length > 0 && setIsOpen(true)}
          className="pl-10 pr-10 bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* 자동완성 드롭다운 */}
      {isOpen && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 mt-1 w-full bg-gray-800 border border-purple-500/30 rounded-lg shadow-lg overflow-hidden"
        >
          {/* 키보드 네비게이션 도움말 */}
          <div className="px-3 py-2 border-b border-gray-700 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                <ArrowDown className="h-3 w-3" />
                <span className="ml-1">이동</span>
              </div>
              <div className="flex items-center">
                <CornerDownLeft className="h-3 w-3 mr-1" />
                <span>선택</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">ESC로 닫기</div>
          </div>

          {/* 최근 검색어 */}
          {recentSearches.length > 0 && (
            <div className="p-3 border-b border-gray-700">
              <div className="text-xs text-gray-400 mb-2">{texts.recentSearches}</div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((term, index) => (
                  <Badge
                    key={`recent-${index}`}
                    variant="outline"
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 cursor-pointer transition-colors text-xs px-2 py-1 flex items-center"
                    onClick={() => handleRecentSearchClick(term)}
                  >
                    {term}
                    <X
                      className="h-3 w-3 ml-1 text-gray-400 hover:text-gray-300"
                      onClick={(e) => removeRecentSearch(e, term)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* 추천 검색어 */}
          <div className="p-3">
            <div className="text-xs text-gray-400 mb-2">{texts.suggestions}</div>
            <div className="space-y-1">
              {suggestions.map((suggestion, index) => (
                <div
                  key={`suggestion-${index}`}
                  className={`px-3 py-2 rounded-md cursor-pointer text-sm ${
                    selectedIndex === index ? "bg-purple-500/30 text-white" : "text-gray-300 hover:bg-gray-700/50"
                  }`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
