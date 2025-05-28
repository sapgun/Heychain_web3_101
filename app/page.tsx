"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronRight, Menu, MessageCircle, Sparkles, X } from "lucide-react"
import AutocompleteSearch from "@/components/autocomplete-search"
import SearchSuggestions from "@/components/search-suggestions"
import QuizComponent from "@/components/quiz-component"
import PracticeComponent from "@/components/practice-component"
import { texts } from "@/data/texts"
import { searchKeywords, popularSearches } from "@/data/search-data"
import { initialData } from "@/data/data"

export default function Home() {
  const [showApp, setShowApp] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [expandedItems, setExpandedItems] = useState(new Set())
  const [currentData, setCurrentData] = useState(initialData.ko)
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSearchSubmit = (term: string) => {
    setSearchTerm(term)
    setSidebarOpen(false)
  }

  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index)
    setSearchTerm("")
    setSidebarOpen(false)
  }

  const toggleExpanded = (id: string) => {
    const newExpandedItems = new Set(expandedItems)
    if (expandedItems.has(id)) {
      newExpandedItems.delete(id)
    } else {
      newExpandedItems.add(id)
    }
    setExpandedItems(newExpandedItems)
  }

  const filteredItems = searchTerm
    ? currentData
        .flatMap((category) => category.items)
        .filter((item) => item.question.toLowerCase().includes(searchTerm.toLowerCase()))
    : currentData[selectedCategory]?.items || []

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setShowApp(false)}
                className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity p-1 rounded-lg"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-2xl font-bold text-white">HeyChain 101</h1>
                  <p className="text-xs sm:text-sm text-gray-400">{texts.subtitle}</p>
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white p-2 h-10 w-10"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`
    fixed inset-y-0 left-0 z-50 w-full sm:w-80 bg-gradient-to-b from-gray-900/98 to-gray-800/98 backdrop-blur-sm border-r border-purple-500/20 
    transform transition-all duration-300 ease-in-out
    md:relative md:translate-x-0 md:z-auto md:w-80 md:bg-gradient-to-b md:from-gray-900/95 md:to-gray-800/95
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
        >
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 h-full overflow-y-auto">
            {/* 모바일에서 닫기 버튼 추가 */}
            <div className="flex items-center justify-between md:hidden mb-4">
              <h2 className="text-lg font-bold text-white">메뉴</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-white p-2 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Search */}
            <AutocompleteSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSearchSubmit={handleSearchSubmit}
              language="ko"
            />

            {/* Search Suggestions - 검색어가 없을 때만 표시 */}
            {!searchTerm.trim() && (
              <SearchSuggestions
                keywords={searchKeywords.ko}
                popularSearches={popularSearches.ko}
                onKeywordClick={(keyword) => {
                  setSearchTerm(keyword)
                  handleSearchSubmit(keyword)
                  setSidebarOpen(false) // 모바일에서 검색 후 사이드바 닫기
                }}
                language="ko"
              />
            )}

            {/* Categories */}
            <nav className="space-y-2 sm:space-y-3">
              {currentData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategorySelect(index)}
                  className={`
            group w-full text-left px-3 sm:px-4 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm font-medium
            relative overflow-hidden min-h-[48px] flex items-center
            ${
              selectedCategory === index
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:scale-102"
            }
          `}
                >
                  <div className="relative z-10 flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                        selectedCategory === index ? "bg-white" : "bg-purple-400/50 group-hover:bg-purple-400"
                      }`}
                    ></div>
                    <span className="leading-tight">{category.category}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-8 pb-20 sm:pb-8">
            {showWelcome ? (
              <div className="text-center py-8 sm:py-20">
                <div className="max-w-3xl mx-auto px-2 sm:px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 animate-bounce">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {texts.welcome}
                  </h2>
                  <p className="text-sm sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">{texts.welcomeDesc}</p>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs sm:text-lg px-3 sm:px-4 py-2 sm:py-2">
                    "말 걸면 바로 요약해주는 대화형 Web3 위키"
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <h2 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                    {searchTerm ? `"${searchTerm}" ${texts.searchResults}` : currentData[selectedCategory]?.category}
                  </h2>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 self-start sm:self-auto text-xs sm:text-sm">
                    {filteredItems.length}개 항목
                  </Badge>
                </div>

                {/* Q&A Items */}
                {filteredItems.length === 0 ? (
                  <Card className="bg-gray-800/50 border-purple-500/20 p-6 sm:p-8 text-center">
                    <p className="text-gray-400 text-sm sm:text-base">{texts.noResults}</p>
                  </Card>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {filteredItems.map((item) => {
                      const isExpanded = expandedItems.has(item.id)
                      return (
                        <Card
                          key={item.id}
                          className="bg-gray-800/50 border-purple-500/20 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                          <button
                            onClick={() => toggleExpanded(item.id)}
                            className="w-full text-left p-4 sm:p-6 flex justify-between items-start hover:bg-purple-500/10 transition-colors min-h-[60px] sm:min-h-auto"
                          >
                            <div className="flex-1 pr-3 sm:pr-4">
                              <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2 leading-tight">
                                {item.question}
                              </h3>
                              {searchTerm && item.categoryName && (
                                <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs mt-2">
                                  {item.categoryName}
                                </Badge>
                              )}
                            </div>
                            <div className="flex-shrink-0 ml-2">
                              {isExpanded ? (
                                <ChevronDown className="w-5 h-5 text-purple-400 transition-transform duration-200" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-purple-400 transition-transform duration-200" />
                              )}
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-purple-500/20 animate-in slide-in-from-top-2 duration-300">
                              <div className="pt-4 space-y-4">
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.answer}</p>

                                {/* Quiz Component */}
                                {item.quiz && <QuizComponent quiz={item.quiz} language="ko" />}

                                {/* Practice Component */}
                                {item.practice && <PracticeComponent practice={item.practice} language="ko" />}
                              </div>
                            </div>
                          )}
                        </Card>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
