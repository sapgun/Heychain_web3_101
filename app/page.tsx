"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Zap, BookOpen, Sparkles, Shield, ChevronDown, ChevronRight, Menu, X, Send } from "lucide-react"
import { web3Data, searchKeywords } from "./data/web3-data"
import { QuizComponent } from "@/components/quiz-component"
import { PracticeComponent } from "@/components/practice-component"
import { SearchSuggestions } from "@/components/search-suggestions"
import { AutocompleteSearch } from "@/components/autocomplete-search"
import { popularSearches } from "@/utils/search-utils"

export default function HeyChainApp() {
  const [selectedCategory, setSelectedCategory] = useState<number>(-1)
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [showApp, setShowApp] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isClient, setIsClient] = useState(false)

  // Ensure client-side rendering for interactive elements
  useEffect(() => {
    setIsClient(true)
  }, [])

  const currentData = web3Data

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return selectedCategory >= 0 ? currentData[selectedCategory].items : []
    }

    const results: Array<any> = []
    const term = searchTerm.toLowerCase()

    currentData.forEach((category) => {
      category.items.forEach((item) => {
        if (item.question.toLowerCase().includes(term) || item.answer.toLowerCase().includes(term)) {
          results.push({
            ...item,
            categoryName: category.category,
          })
        }
      })
    })

    return results
  }, [searchTerm, selectedCategory, currentData])

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index)
    setSearchTerm("")
    setSidebarOpen(false)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isClient) return

    console.log("Newsletter subscription:", email)
    setEmail("")
    alert("뉴스레터 구독이 완료되었습니다!")
  }

  const showWelcome = selectedCategory === -1 && !searchTerm.trim()

  const texts = {
    title: "HeyChain",
    subtitle: "Web3 대화형 요약 비서",
    heroTitle: "Web3, 이제 대화로 배우세요",
    heroDescription:
      "복잡한 백서나 위키는 그만! zk-Rollup부터 메타마스크 설정까지, 질문 한 번이면 바로 핵심만 짚어 간단하게 설명해드립니다.",
    startNow: "지금 질문하기",
    howToUse: "사용법 보기",
    home: "홈으로",
    search: "질문 검색...",
    welcome: "Web3의 세계에 오신 것을 환영합니다!",
    welcomeDesc:
      "왼쪽 메뉴에서 궁금한 카테고리를 선택하거나 질문을 검색하여 Web3에 대한 모든 것을 알아보세요. HeyChain이 여러분의 Web3 여정을 도와드립니다.",
    searchResults: "검색 결과",
    noResults: "검색 결과가 없습니다.",
    newsletter: "뉴스레터 구독",
    newsletterDesc: "Web3 최신 소식과 HeyChain 업데이트를 받아보세요",
    emailPlaceholder: "이메일 주소를 입력하세요",
    subscribe: "구독하기",
  }

  // Prevent hydration mismatch by not rendering interactive elements until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-lg">Loading HeyChain...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!showApp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">{texts.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                onClick={() => setShowApp(true)}
              >
                {texts.startNow}
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">🧠 {texts.subtitle}</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Web3, 이제{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">대화</span>로
              배우세요
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{texts.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
                onClick={() => setShowApp(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {texts.startNow}
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <BookOpen className="w-5 h-5 mr-2" />
                {texts.howToUse}
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">HeyChain이 할 수 있는 일</h2>
            <p className="text-gray-400 text-lg">Web3의 모든 것을 간단한 대화로 해결하세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">개념 설명</CardTitle>
                <CardDescription className="text-gray-400">
                  PoW vs PoS, Optimistic vs ZK Rollup 등 헷갈리는 개념들을 명확하게 비교 설명
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">실전 가이드</CardTitle>
                <CardDescription className="text-gray-400">
                  지갑 생성, 체인 브릿지, NFT 민팅 등 실제 사용법을 단계별로 안내
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">보안 & 안전</CardTitle>
                <CardDescription className="text-gray-400">
                  Sybil 공격, 가스비 최적화 등 Web3 환경에서 안전하게 활동하는 방법
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Newsletter Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{texts.newsletter}</h3>
              <p className="text-gray-400 mb-6">{texts.newsletterDesc}</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder={texts.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {texts.subscribe}
                </Button>
              </form>
            </div>

            {/* Brand Section */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">{texts.title}</span>
              </div>
              <p className="text-gray-400 mb-4">
                Web3를 더 쉽게, 더 빠르게 배울 수 있도록 돕는 대화형 학습 플랫폼입니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2025 HeyChain. Web3를 더 쉽게, 더 빠르게.</p>
              <span className="text-gray-600 text-sm">•</span>
              <p className="text-gray-500 text-sm">
                powered by{" "}
                <a
                  href="https://x.com/caro7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer"
                >
                  SAPGUN
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // 검색 핸들러 함수 추가 (onSearchSubmit)
  const handleSearchSubmit = (value: string) => {
    // 검색어가 있을 때만 검색 실행
    if (value.trim()) {
      setSearchTerm(value)
      setSelectedCategory(-1) // 카테고리 선택 초기화
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* App Header */}
      <header className="border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setShowApp(false)}
                className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-white">HeyChain 101</h1>
                  <p className="text-xs sm:text-sm text-gray-400">{texts.subtitle}</p>
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside
          className={`
    fixed inset-y-0 left-0 z-50 w-72 sm:w-80 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm border-r border-purple-500/20 
    transform transition-all duration-500 ease-in-out
    md:relative md:translate-x-0 md:z-auto md:w-80
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
        >
          <div className="p-6 space-y-6 h-full overflow-y-auto">
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
                    relative overflow-hidden
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
                    {category.category}
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-3 sm:px-6 py-4 sm:py-8">
            {showWelcome ? (
              <div className="text-center py-10 sm:py-20">
                <div className="max-w-3xl mx-auto px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 animate-bounce">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">{texts.welcome}</h2>
                  <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">{texts.welcomeDesc}</p>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                    "말 걸면 바로 요약해주는 대화형 Web3 위키"
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {searchTerm ? `"${searchTerm}" ${texts.searchResults}` : currentData[selectedCategory]?.category}
                  </h2>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 self-start sm:self-auto">
                    {filteredItems.length}개 항목
                  </Badge>
                </div>

                {/* Q&A Items */}
                {filteredItems.length === 0 ? (
                  <Card className="bg-gray-800/50 border-purple-500/20 p-8 text-center">
                    <p className="text-gray-400">{texts.noResults}</p>
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
                            className="w-full text-left p-3 sm:p-6 flex justify-between items-start hover:bg-purple-500/10 transition-colors"
                          >
                            <div className="flex-1 pr-2 sm:pr-4">
                              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                                {item.question}
                              </h3>
                              {searchTerm && item.categoryName && (
                                <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                                  {item.categoryName}
                                </Badge>
                              )}
                            </div>
                            <div className="flex-shrink-0">
                              {isExpanded ? (
                                <ChevronDown className="w-5 h-5 text-purple-400 transition-transform duration-200" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-purple-400 transition-transform duration-200" />
                              )}
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="px-3 sm:px-6 pb-3 sm:pb-6 border-t border-purple-500/20 animate-in slide-in-from-top-2 duration-300">
                              <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
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
