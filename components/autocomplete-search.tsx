"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface AutocompleteSearchProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  onSearchSubmit: (value: string) => void
  language: "ko" | "en"
}

export function AutocompleteSearch({ searchTerm, onSearchChange, onSearchSubmit, language }: AutocompleteSearchProps) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestions = [
    "메타마스크 설정",
    "DeFi 프로토콜",
    "NFT 민팅",
    "스마트 컨트랙트",
    "가스비 최적화",
    "브릿지 사용법",
    "스테이킹 방법",
    "DAO 참여",
  ]

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (selectedIndex >= 0) {
        onSearchSubmit(filteredSuggestions[selectedIndex])
        setShowSuggestions(false)
      } else {
        onSearchSubmit(searchTerm)
        setShowSuggestions(false)
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
      setSelectedIndex(-1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearchSubmit(searchTerm)
    setShowSuggestions(false)
  }

  useEffect(() => {
    setSelectedIndex(-1)
  }, [searchTerm])

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative group">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={language === "ko" ? "질문 검색..." : "Search questions..."}
          value={searchTerm}
          onChange={(e) => {
            onSearchChange(e.target.value)
            setShowSuggestions(true)
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            // 약간의 지연을 두어 클릭 이벤트가 처리되도록 함
            setTimeout(() => setShowSuggestions(false), 200)
          }}
          onKeyDown={handleKeyDown}
          className="pl-10 bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
        />
      </form>

      {/* 자동완성 드롭다운 */}
      {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              onClick={() => {
                onSearchSubmit(suggestion)
                setShowSuggestions(false)
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                index === selectedIndex
                  ? "bg-purple-500/20 text-purple-300"
                  : "text-gray-300 hover:bg-purple-500/10 hover:text-white"
              }`}
            >
              <div className="flex items-center">
                <Search className="w-3 h-3 mr-2 text-gray-500" />
                {suggestion}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 키보드 네비게이션 힌트 (데스크톱에서만 표시) */}
      {showSuggestions && searchTerm && (
        <div className="hidden md:block absolute top-full left-0 right-0 mt-1 z-40">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-purple-500/20 rounded-b-lg px-3 py-2">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>↑↓ 탐색</span>
              <span>Enter 선택</span>
              <span>Esc 닫기</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AutocompleteSearch
