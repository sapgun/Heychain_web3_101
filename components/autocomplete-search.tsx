"use client"

import type React from "react"
import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { useRouter } from "next/router"
import { ArrowUp, ArrowDown, CornerDownLeft, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"

interface AutocompleteSearchProps {
  texts: {
    searchPlaceholder: string
    recentSearches: string
    suggestions: string
  }
  onSearch: (term: string) => void
  getSuggestions: (term: string) => Promise<string[]>
  maxRecentSearches?: number
}

const AutocompleteSearch: React.FC<AutocompleteSearchProps> = ({
  texts,
  onSearch,
  getSuggestions,
  maxRecentSearches = 5,
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window === "undefined") return []
    const storedSearches = localStorage.getItem("recentSearches")
    return storedSearches ? JSON.parse(storedSearches) : []
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
  }, [recentSearches])

  const onSearchChange = async (value: string) => {
    setSearchTerm(value)
    if (value.trim() === "") {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    try {
      const fetchedSuggestions = await getSuggestions(value)
      setSuggestions(fetchedSuggestions)
      setIsOpen(fetchedSuggestions.length > 0)
      setSelectedIndex(-1) // Reset selected index when suggestions change
    } catch (error) {
      console.error("Error fetching suggestions:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch suggestions.",
      })
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion)
    addRecentSearch(suggestion)
    onSearch(suggestion)
    setIsOpen(false)
    router.push(`/?q=${encodeURIComponent(suggestion)}`)
  }

  const handleRecentSearchClick = (term: string) => {
    setSearchTerm(term)
    onSearch(term)
    setIsOpen(false)
    router.push(`/?q=${encodeURIComponent(term)}`)
  }

  const addRecentSearch = (term: string) => {
    setRecentSearches((prevSearches) => {
      const newSearches = [term, ...prevSearches.filter((t) => t !== term)]
      return newSearches.slice(0, maxRecentSearches)
    })
  }

  const removeRecentSearch = (e: React.MouseEvent, term: string) => {
    e.stopPropagation() // Prevent click from triggering handleRecentSearchClick
    setRecentSearches((prevSearches) => prevSearches.filter((t) => t !== term))
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return

    if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1))
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prevIndex) => (prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0))
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      handleSuggestionClick(suggestions[selectedIndex])
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  // Close suggestions on outside click
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

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      {/* Input 컴포넌트를 다음과 같이 수정 */}
      <Input
        ref={inputRef}
        type="text"
        placeholder={texts.searchPlaceholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => searchTerm.trim() && suggestions.length > 0 && setIsOpen(true)}
        className="pl-10 pr-10 bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all h-12 sm:h-10 text-base sm:text-sm"
      />

      {/* 자동완성 드롭다운을 다음과 같이 수정 */}
      {isOpen && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 mt-1 w-full bg-gray-800 border border-purple-500/30 rounded-lg shadow-lg overflow-hidden max-h-80 sm:max-h-96"
        >
          {/* 키보드 네비게이션 도움말 - 모바일에서는 숨김 */}
          <div className="hidden sm:flex px-3 py-2 border-b border-gray-700 items-center justify-between text-xs text-gray-400">
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
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 cursor-pointer transition-colors text-xs px-3 py-2 flex items-center min-h-[32px]"
                    onClick={() => handleRecentSearchClick(term)}
                  >
                    {term}
                    <X
                      className="h-3 w-3 ml-2 text-gray-400 hover:text-gray-300"
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
                  className={`px-3 py-3 sm:py-2 rounded-md cursor-pointer text-sm min-h-[44px] sm:min-h-auto flex items-center ${
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

export default AutocompleteSearch
