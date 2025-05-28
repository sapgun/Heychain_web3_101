"use client"

import React, { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { Search } from "lucide-react"

interface AutocompleteSearchProps {
  suggestions: string[]
  onSearchSubmit: (searchTerm: string) => void
  language: string
}

const AutocompleteSearch: React.FC<AutocompleteSearchProps> = ({ suggestions, onSearchSubmit, language }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchTerm) {
      setFilteredSuggestions(
        suggestions.filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    } else {
      setFilteredSuggestions([])
    }
    setSelectedIndex(-1) // Reset selected index when search term changes
  }, [searchTerm, suggestions])

  const onSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, filteredSuggestions.length - 1))
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    } else if (event.key === "Enter" && showSuggestions) {
      event.preventDefault()
      if (selectedIndex !== -1) {
        onSearchSubmit(filteredSuggestions[selectedIndex])
      } else if (searchTerm) {
        onSearchSubmit(searchTerm) // Submit the current search term if no suggestion is selected
      }
      setShowSuggestions(false)
    } else if (event.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
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
        className="pl-10 h-10 sm:h-auto bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all touch-manipulation"
      />

      {/* 자동완성 드롭다운 */}
      {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-lg z-50 max-h-48 sm:max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              onClick={() => {
                onSearchSubmit(suggestion)
                setShowSuggestions(false)
              }}
              className={`w-full text-left px-3 sm:px-4 py-3 sm:py-3 text-sm transition-colors touch-manipulation min-h-[44px] ${
                index === selectedIndex
                  ? "bg-purple-500/20 text-purple-300"
                  : "text-gray-300 hover:bg-purple-500/10 hover:text-white active:bg-purple-500/20"
              }`}
            >
              <div className="flex items-center">
                <Search className="w-3 h-3 mr-2 text-gray-500 flex-shrink-0" />
                <span className="truncate">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default AutocompleteSearch

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input {...props} ref={ref} />
})

Input.displayName = "Input"
