"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  MessageCircle,
  Zap,
  BookOpen,
  Sparkles,
  Shield,
  Search,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Globe,
  ExternalLink,
  Send,
} from "lucide-react"
import { web3Data, web3DataEn } from "./data/web3-data"
import { QuizComponent } from "@/components/quiz-component"
import { PracticeComponent } from "@/components/practice-component"
import { SearchSuggestions } from "@/components/search-suggestions"
import { searchKeywords } from "./data/web3-data"

type Language = "ko" | "en"

export default function HeyChainApp() {
  const [selectedCategory, setSelectedCategory] = useState<number>(-1)
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [showApp, setShowApp] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [language, setLanguage] = useState<Language>("ko")
  const [email, setEmail] = useState("")

  const currentData = language === "ko" ? web3Data : web3DataEn

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
    // Newsletter subscription logic here
    console.log("Newsletter subscription:", email)
    setEmail("")
    alert(language === "ko" ? "뉴스레터 구독이 완료되었습니다!" : "Newsletter subscription completed!")
  }

  const showWelcome = selectedCategory === -1 && !searchTerm.trim()

  const texts = {
    ko: {
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
    },
    en: {
      title: "HeyChain",
      subtitle: "Web3 Interactive Summary Assistant",
      heroTitle: "Learn Web3 through Conversation",
      heroDescription:
        "No more complex whitepapers or wikis! From zk-Rollup to MetaMask setup, get simple explanations with just one question.",
      startNow: "Ask Now",
      howToUse: "How to Use",
      home: "Home",
      search: "Search questions...",
      welcome: "Welcome to the World of Web3!",
      welcomeDesc:
        "Select a category from the left menu or search for questions to learn everything about Web3. HeyChain will guide your Web3 journey.",
      searchResults: "Search Results",
      noResults: "No search results found.",
      newsletter: "Newsletter",
      newsletterDesc: "Get the latest Web3 news and HeyChain updates",
      emailPlaceholder: "Enter your email address",
      subscribe: "Subscribe",
    },
  }

  const t = texts[language]

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
              <span className="text-2xl font-bold text-white">{t.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <Globe className="w-4 h-4 mr-2" />
                    {language === "ko" ? "한국어" : "English"}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage("ko")}>한국어</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                onClick={() => setShowApp(true)}
              >
                {t.startNow}
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">🧠 {t.subtitle}</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {language === "ko" ? (
                <>
                  Web3, 이제{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    대화
                  </span>
                  로 배우세요
                </>
              ) : (
                <>
                  Learn Web3 through{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Conversation
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
                onClick={() => setShowApp(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.startNow}
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <BookOpen className="w-5 h-5 mr-2" />
                {t.howToUse}
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {language === "ko" ? "HeyChain이 할 수 있는 일" : "What HeyChain Can Do"}
            </h2>
            <p className="text-gray-400 text-lg">
              {language === "ko"
                ? "Web3의 모든 것을 간단한 대화로 해결하세요"
                : "Solve everything about Web3 through simple conversations"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === "ko" ? "개념 설명" : "Concept Explanation"}</CardTitle>
                <CardDescription className="text-gray-400">
                  {language === "ko"
                    ? "PoW vs PoS, Optimistic vs ZK Rollup 등 헷갈리는 개념들을 명확하게 비교 설명"
                    : "Clear comparative explanations of confusing concepts like PoW vs PoS, Optimistic vs ZK Rollup"}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === "ko" ? "실전 가이드" : "Practical Guide"}</CardTitle>
                <CardDescription className="text-gray-400">
                  {language === "ko"
                    ? "지갑 생성, 체인 브릿지, NFT 민팅 등 실제 사용법을 단계별로 안내"
                    : "Step-by-step guidance for wallet creation, chain bridging, NFT minting, and more"}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{language === "ko" ? "보안 & 안전" : "Security & Safety"}</CardTitle>
                <CardDescription className="text-gray-400">
                  {language === "ko"
                    ? "Sybil 공격, 가스비 최적화 등 Web3 환경에서 안전하게 활동하는 방법"
                    : "How to stay safe in Web3 environment including Sybil attacks, gas optimization, and more"}
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
              <h3 className="text-2xl font-bold text-white mb-4">{t.newsletter}</h3>
              <p className="text-gray-400 mb-6">{t.newsletterDesc}</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
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
                  {t.subscribe}
                </Button>
              </form>
            </div>

            {/* Brand Section */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">{t.title}</span>
              </div>
              <p className="text-gray-400 mb-4">
                {language === "ko"
                  ? "Web3를 더 쉽게, 더 빠르게 배울 수 있도록 돕는 대화형 학습 플랫폼입니다."
                  : "An interactive learning platform that helps you learn Web3 easier and faster."}
              </p>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://x.com/caro7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow on X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 HeyChain. {language === "ko" ? "Web3를 더 쉽게, 더 빠르게." : "Making Web3 easier and faster."}
              </p>
              <span className="text-gray-600 text-sm">•</span>
              <p className="text-gray-500 text-sm">
                powered by <span className="text-purple-400 font-semibold">SAPGUN</span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                {language === "ko" ? "개인정보처리방침" : "Privacy Policy"}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                {language === "ko" ? "이용약관" : "Terms of Service"}
              </Button>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* App Header */}
      <header className="border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">HeyChain 101</h1>
                <p className="text-sm text-gray-400">{t.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <Globe className="w-4 h-4 mr-2" />
                    {language === "ko" ? "한국어" : "English"}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage("ko")}>한국어</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => setShowApp(false)}
              >
                {t.home}
              </Button>
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
        {/* Enhanced Sidebar with Animations */}
        <aside
          className={`
          fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm border-r border-purple-500/20 
          transform transition-all duration-500 ease-in-out
          md:relative md:translate-x-0 md:z-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="p-6 space-y-6 h-full overflow-y-auto">
            {/* Animated Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Web3 Explorer</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
            </div>

            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
              <Input
                type="text"
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
              />
            </div>

            {/* Search Suggestions - 검색어가 비어있을 때만 표시 */}
            {!searchTerm.trim() && (
              <SearchSuggestions
                keywords={searchKeywords[language]}
                onKeywordClick={(keyword) => setSearchTerm(keyword)}
                language={language}
              />
            )}

            {/* Categories with Enhanced Styling */}
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
                  {selectedCategory === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Floating Elements for Web3 Vibe */}
            <div className="absolute top-20 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-8 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 right-6 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            {showWelcome ? (
              <div className="text-center py-20">
                <div className="max-w-3xl mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6">{t.welcome}</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t.welcomeDesc}</p>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-lg px-4 py-2">
                    {language === "ko"
                      ? '"말 걸면 바로 요약해주는 대화형 Web3 위키"'
                      : '"Interactive Web3 Wiki that summarizes instantly when you ask"'}
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Results Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">
                    {searchTerm ? `"${searchTerm}" ${t.searchResults}` : currentData[selectedCategory]?.category}
                  </h2>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {filteredItems.length}
                    {language === "ko" ? "개 항목" : " items"}
                  </Badge>
                </div>

                {/* Q&A Items */}
                {filteredItems.length === 0 ? (
                  <Card className="bg-gray-800/50 border-purple-500/20 p-8 text-center">
                    <p className="text-gray-400">{t.noResults}</p>
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
                            className="w-full text-left p-6 flex justify-between items-start hover:bg-purple-500/10 transition-colors"
                          >
                            <div className="flex-1 pr-4">
                              <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
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
                            <div className="px-6 pb-6 border-t border-purple-500/20 animate-in slide-in-from-top-2 duration-300">
                              <div className="pt-4 space-y-4">
                                <p className="text-gray-300 leading-relaxed">{item.answer}</p>

                                {/* Quiz Component */}
                                {item.quiz && <QuizComponent quiz={item.quiz} language={language} />}

                                {/* Practice Component */}
                                {item.practice && <PracticeComponent practice={item.practice} language={language} />}

                                {/* Enhanced Links Section */}
                                {item.links && item.links.length > 0 && (
                                  <div className="bg-gray-700/30 rounded-lg p-4 border border-purple-500/20">
                                    <h4 className="text-sm font-semibold text-purple-300 mb-3 flex items-center">
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      {language === "ko" ? "유용한 링크" : "Useful Links"}
                                    </h4>
                                    <div className="space-y-2">
                                      {item.links.map((link: any, linkIndex: number) => (
                                        <a
                                          key={linkIndex}
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors group"
                                        >
                                          <ExternalLink className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                                          {link.title}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Tips Section */}
                                {item.tips && (
                                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                                      💡 {language === "ko" ? "팁" : "Tips"}
                                    </h4>
                                    <p className="text-sm text-gray-300">{item.tips}</p>
                                  </div>
                                )}
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
