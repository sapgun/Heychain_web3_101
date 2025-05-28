"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { MessageCircle, Menu, X, Sparkles, Search, ChevronRight, ChevronDown, TrendingUp, Hash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"

import AutocompleteSearch from "@/components/autocomplete-search"
import AIChatModal from "@/components/ai-chat-modal"
import HeaderGuideButton from "@/components/header-guide-button"
import QuizComponent from "@/components/quiz-component"
import PracticeComponent from "@/components/practice-component"

// Import data from existing files
import { searchKeywords } from "@/app/data/web3-data"
import { web3Data } from "@/app/data/web3-data"
import { texts } from "@/app/data/texts"

// Create popularSearches from searchKeywords
const popularSearches = {
  ko: searchKeywords.ko.slice(0, 7),
  en: searchKeywords.en.slice(0, 7),
}

// Search Suggestions Component
function SearchSuggestions({ keywords, popularSearches, onKeywordClick, language }) {
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
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 cursor-pointer transition-all text-xs min-h-[32px] px-2 py-1"
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
        <div className="flex items-center mb-3">
          <Hash className="w-4 h-4 text-blue-400 mr-2" />
          <h3 className="text-sm font-semibold text-blue-300">
            {language === "ko" ? "추천 키워드" : "Recommended Keywords"}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {keywords.slice(0, 8).map((keyword) => (
            <Badge
              key={keyword}
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 cursor-pointer transition-all text-xs min-h-[32px] px-2 py-1"
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

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // State variables
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "")
  const [currentData, setCurrentData] = useState(web3Data)
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [filteredItems, setFilteredItems] = useState([])
  const [expandedItems, setExpandedItems] = useState(new Set())
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  // Load initial search term from URL
  useEffect(() => {
    if (searchParams.get("q")) {
      setSearchTerm(searchParams.get("q"))
    }
  }, [searchParams])

  // Function to handle search submission
  const handleSearchSubmit = useCallback(
    (term) => {
      if (term.trim() !== "") {
        const results = []
        currentData.forEach((category) => {
          category.items.forEach((item) => {
            if (item.question.toLowerCase().includes(term.toLowerCase())) {
              results.push({ ...item, categoryName: category.category })
            }
          })
        })
        setFilteredItems(results)
        setShowWelcome(false)
        setSidebarOpen(false) // 검색 후 사이드바 닫기
      } else {
        setFilteredItems([])
      }
    },
    [currentData],
  )

  // Load search results on initial load if search term exists
  useEffect(() => {
    if (searchTerm) {
      handleSearchSubmit(searchTerm)
    }
  }, [searchTerm, handleSearchSubmit])

  // Function to handle category selection
  const handleCategorySelect = (index) => {
    setSelectedCategory(index)
    setFilteredItems(currentData[index].items)
    setShowWelcome(false)
    setSidebarOpen(false) // 카테고리 선택 후 사이드바 닫기
  }

  // Function to toggle item expansion
  const toggleExpanded = (id) => {
    const newExpandedItems = new Set(expandedItems)
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id)
    } else {
      newExpandedItems.add(id)
    }
    setExpandedItems(newExpandedItems)
  }

  // Sidebar content component
  const SidebarContent = () => (
    <div className="p-6 space-y-6 h-full overflow-y-auto">
      {/* Search */}
      <AutocompleteSearch suggestions={searchKeywords.ko} onSearchSubmit={handleSearchSubmit} language="ko" />

      {/* AI Chat Button */}
      <div className="space-y-2">
        <AIChatModal language="ko" />
      </div>

      {/* Search Suggestions - 검색어가 없을 때만 표시 */}
      {!searchTerm.trim() && (
        <SearchSuggestions
          keywords={searchKeywords.ko}
          popularSearches={popularSearches.ko}
          onKeywordClick={(keyword) => {
            setSearchTerm(keyword)
            handleSearchSubmit(keyword)
          }}
          language="ko"
        />
      )}

      {/* Categories */}
      <nav className="space-y-3">
        {currentData.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategorySelect(index)}
            className={`
              group w-full text-left px-4 py-4 rounded-xl transition-all duration-300 text-sm font-medium
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
  )

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 bg-gray-900/95 backdrop-blur-sm border-r border-purple-500/20 flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Dialog */}
      <Dialog open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <DialogContent className="w-full max-w-sm h-full m-0 p-0 bg-gray-900/98 backdrop-blur-sm border-r border-purple-500/20 rounded-none">
          <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
            <h2 className="text-lg font-bold text-white">메뉴</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <SidebarContent />
        </DialogContent>
      </Dialog>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="border-b border-purple-500/20 bg-gray-900/95 backdrop-blur-md sticky top-0 z-30 h-16">
          <div className="container mx-auto px-4 py-3 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity p-1 rounded-lg min-w-0"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-xl lg:text-2xl font-bold text-white truncate">HeyChain 101</h1>
                    <p className="text-sm text-gray-400 hidden sm:block">{texts.subtitle}</p>
                  </div>
                </button>
              </div>

              <div className="flex items-center space-x-4 flex-shrink-0">
                {/* X(Twitter) 소셜 버튼 */}
                <a
                  href="https://x.com/caro7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors hidden sm:inline">
                    Follow
                  </span>
                </a>

                {/* Powered by SAPGUN */}
                <div className="hidden md:flex items-center space-x-2 text-xs text-gray-500">
                  <span>Powered by</span>
                  <span className="font-semibold text-gray-400">SAPGUN</span>
                </div>

                <HeaderGuideButton />
                <Button variant="ghost" size="sm" className="lg:hidden text-white" onClick={() => setSidebarOpen(true)}>
                  <Menu className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8">
            {showWelcome ? (
              <div className="text-center py-12 lg:py-20">
                <div className="max-w-3xl mx-auto">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 animate-bounce">
                    <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                    {texts.welcome}
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">{texts.welcomeDesc}</p>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm lg:text-lg px-4 py-2">
                    "말 걸면 바로 요약해주는 대화형 Web3 위키"
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Results Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                    {searchTerm ? `"${searchTerm}" ${texts.searchResults}` : currentData[selectedCategory]?.category}
                  </h2>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 self-start lg:self-auto">
                    {filteredItems.length}개 항목
                  </Badge>
                </div>

                {/* Q&A Items */}
                {filteredItems.length === 0 ? (
                  <Card className="bg-gray-800/50 border-purple-500/20 p-6 lg:p-8 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-semibold mb-3">검색 결과가 없습니다</h3>
                        <p className="text-gray-400 mb-4">"{searchTerm}"에 대한 정보를 찾을 수 없습니다.</p>
                      </div>

                      {/* AI 질문 유도 */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                        <div className="flex items-center justify-center mb-3">
                          <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                          <h4 className="text-blue-300 font-medium">AI 어시스턴트에게 물어보세요!</h4>
                        </div>
                        <p className="text-blue-200 text-sm mb-4">
                          지식 데이터베이스에 없는 내용도 AI가 답변해드릴 수 있습니다.
                        </p>
                        <AIChatModal language="ko" searchQuery={searchTerm} />
                      </div>

                      {/* 관련 추천 */}
                      <div className="text-left">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">이런 주제는 어떠세요?</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                          {searchKeywords.ko.slice(0, 6).map((keyword) => (
                            <button
                              key={keyword}
                              onClick={() => {
                                setSearchTerm(keyword)
                                handleSearchSubmit(keyword)
                              }}
                              className="text-left p-3 rounded-lg bg-gray-700/30 hover:bg-gray-600/30 transition-colors text-sm text-gray-300 hover:text-white"
                            >
                              {keyword}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {filteredItems.map((item) => {
                      const isExpanded = expandedItems.has(item.id)
                      return (
                        <Card
                          key={item.id}
                          className="bg-gray-800/50 border-purple-500/20 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                          <button
                            onClick={() => toggleExpanded(item.id)}
                            className="w-full text-left p-4 lg:p-6 flex justify-between items-start hover:bg-purple-500/10 transition-colors"
                          >
                            <div className="flex-1 pr-4">
                              <h3 className="text-base lg:text-lg font-semibold text-white mb-2 leading-tight">
                                {item.question}
                              </h3>
                              {searchTerm && item.categoryName && (
                                <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
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
                            <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-purple-500/20">
                              <div className="pt-4 space-y-4">
                                <p className="text-gray-300 leading-relaxed">{item.answer}</p>

                                {/* Links */}
                                {item.links && item.links.length > 0 && (
                                  <div className="border-t border-gray-600/30 pt-4">
                                    <h4 className="text-sm font-medium text-gray-300 mb-2">참고 링크</h4>
                                    <div className="space-y-2">
                                      {item.links.map((link, index) => (
                                        <a
                                          key={index}
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                          <span className="mr-2">🔗</span>
                                          {link.title}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Tips */}
                                {item.tips && (
                                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                                    <h4 className="text-sm font-medium text-blue-300 mb-1">💡 팁</h4>
                                    <p className="text-sm text-gray-300">{item.tips}</p>
                                  </div>
                                )}

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
