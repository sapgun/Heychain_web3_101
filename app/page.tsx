"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Sparkles,
  ChevronRight,
  Star,
  ArrowRight,
  Brain,
  BookOpen,
  Play,
  MessageCircle,
  Zap,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { web3Data } from "@/app/data/web3-data"
import { searchKeywords } from "@/app/data/web3-data"
import ChainNewsTicker from "@/components/chain-news-ticker"
import AIChatModal from "@/components/ai-chat-modal"
import ChatLimitModal from "@/components/chat-limit-modal"
import SignupModal from "@/components/signup-modal"
import QuizModal from "@/components/quiz-modal"
import PracticeGuideModal from "@/components/practice-guide-modal"
import LanguageSelector from "@/components/language-selector"
import TranslatableContent from "@/components/translatable-content"
import { subscriptionManager } from "@/lib/subscription"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { t } = useLanguage()
  const [isHomePage, setIsHomePage] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  // 모달 상태
  const [isAIChatOpen, setIsAIChatOpen] = useState(false)
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isPracticeOpen, setIsPracticeOpen] = useState(false)

  // 애니메이션 상태 추가
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Web3 용어들
  const web3Terms = [
    "DeFi",
    "NFT",
    "DAO",
    "Blockchain",
    "Smart Contract",
    "MetaMask",
    "Ethereum",
    "Layer 2",
    "Staking",
    "Yield Farming",
    "DEX",
    "Web3",
    "Crypto",
    "Token",
    "Wallet",
    "dApp",
    "Gas Fee",
    "Mining",
    "Consensus",
    "Decentralized",
  ]

  // 홈으로 돌아가기 함수
  const handleGoHome = () => {
    setIsHomePage(true)
    setSelectedCategory(null)
    setSelectedItem(null)
    setSearchQuery("")
    setSearchResults([])
  }

  // Web3 알아보기 버튼 클릭
  const handleExploreWeb3 = () => {
    setIsHomePage(false)
  }

  // 검색 기능
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const results: any[] = []
    web3Data.forEach((category, categoryIndex) => {
      category.items.forEach((item, itemIndex) => {
        if (
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          results.push({
            ...item,
            categoryIndex,
            itemIndex,
            categoryName: category.category,
          })
        }
      })
    })

    setSearchResults(results)
    setIsHomePage(false)
  }

  // 카테고리 선택
  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index)
    setSelectedItem(null)
    setSearchResults([])
    setSearchQuery("")
    setIsHomePage(false)
  }

  // 항목 선택
  const handleItemSelect = (categoryIndex: number, itemIndex: number) => {
    setSelectedCategory(categoryIndex)
    setSelectedItem(web3Data[categoryIndex].items[itemIndex])
  }

  // 검색 결과에서 항목 선택
  const handleSearchResultSelect = (result: any) => {
    setSelectedCategory(result.categoryIndex)
    setSelectedItem(result)
    setSearchQuery("")
    setSearchResults([])
  }

  // 키워드 클릭 핸들러
  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword)
    // 자동으로 검색 실행
    const results: any[] = []
    web3Data.forEach((category, categoryIndex) => {
      category.items.forEach((item, itemIndex) => {
        if (
          item.question.toLowerCase().includes(keyword.toLowerCase()) ||
          item.answer.toLowerCase().includes(keyword.toLowerCase())
        ) {
          results.push({
            ...item,
            categoryIndex,
            itemIndex,
            categoryName: category.category,
          })
        }
      })
    })
    setSearchResults(results)
    setIsHomePage(false)
  }

  // AI 채팅 모달 핸들러
  const handleAIChatOpen = () => {
    setIsAIChatOpen(true)
  }

  const handleLimitReached = () => {
    setIsAIChatOpen(false)
    setIsLimitModalOpen(true)
  }

  const handleSignupPrompt = () => {
    setIsAIChatOpen(false)
    setIsSignupModalOpen(true)
  }

  const handleSubscribe = (planId: string) => {
    subscriptionManager.subscribeToPlan(planId)
    setIsLimitModalOpen(false)
    setIsAIChatOpen(true)
  }

  const handlePurchaseTokens = (packId: string) => {
    subscriptionManager.purchaseTokens(packId)
    setIsLimitModalOpen(false)
    setIsAIChatOpen(true)
  }

  const handleSignupSuccess = () => {
    setIsSignupModalOpen(false)
    setIsAIChatOpen(true)
  }

  // 퀴즈 및 실습 핸들러
  const handleQuizOpen = () => {
    setIsQuizOpen(true)
  }

  const handlePracticeOpen = () => {
    setIsPracticeOpen(true)
  }

  // 타이핑 효과 - 속도 조정 (100ms → 150ms)
  useEffect(() => {
    if (!isHomePage) return

    const text = "Web3, 이제 대화로 배우세요"
    let index = 0

    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(typeTimer)
      }
    }, 150) // 100ms에서 150ms로 변경

    return () => clearInterval(typeTimer)
  }, [isHomePage])

  // 커서 깜빡임
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  // 카드 순차 애니메이션 - 간격 조정 (200ms → 400ms)
  useEffect(() => {
    if (!isHomePage || !isTypingComplete) return

    const timers = [0, 1, 2].map(
      (index) =>
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index])
        }, index * 400), // 200ms에서 400ms로 변경
    )

    return () => timers.forEach(clearTimeout)
  }, [isHomePage, isTypingComplete])

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // 홈 화면 렌더링
  const renderHomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col relative overflow-hidden">
      {/* 떠다니는 Web3 용어들 - 애니메이션 강화 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {web3Terms.map((term, index) => (
          <div
            key={term}
            className={`absolute font-bold animate-float ${
              index % 4 === 0
                ? "text-purple-300/20 text-lg"
                : index % 4 === 1
                  ? "text-pink-300/20 text-xl"
                  : index % 4 === 2
                    ? "text-blue-300/20 text-base"
                    : "text-green-300/20 text-lg"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {term}
          </div>
        ))}

        {/* 추가 파티클 효과 */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* 헤더 */}
      <header className="border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-bold text-white">HeyChain</h1>
                <p className="text-xs lg:text-sm text-gray-400">Web3 대화형 요약 비서</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <Link href="https://x.com/caro7370" target="_blank">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 hidden sm:flex"
                >
                  <span className="text-xs">Powered by @caro7370</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* 메인 타이틀 - 타이핑 효과 적용 */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight min-h-[200px] lg:min-h-[280px]">
              <span className="block mb-4">
                {typedText.split(",")[0]}
                {typedText.includes(",") && ","}
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                {typedText.split(",")[1]?.trim() || ""}
                {showCursor && !isTypingComplete && <span className="animate-pulse text-white">|</span>}
              </span>
            </h1>
            <div
              className={`transition-all duration-1000 ${isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                복잡한 백서나 위키는 그만! <br />
                zk-Rollup부터 메타마스크 설정까지, <br />
                질문 한 번이면 바로 핵심만 짚어 간단하게 설명해드립니다.
              </p>
            </div>
          </div>

          {/* 메인 버튼 - 리플 효과 추가 */}
          <div
            className={`mb-12 transition-all duration-1000 delay-500 ${isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              onClick={handleExploreWeb3}
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Sparkles className="w-6 h-6 mr-3 animate-spin-slow" />
              Web3 알아보기
              <span className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150"></span>
            </Button>
          </div>

          {/* 특징 카드들 - 순차 애니메이션 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: MessageCircle,
                title: "대화형 학습",
                desc: "AI와 대화하며 Web3 개념을 쉽게 이해하세요",
                color: "purple",
              },
              { icon: Zap, title: "빠른 답변", desc: "복잡한 개념도 몇 초 만에 핵심만 요약", color: "yellow" },
              {
                icon: Shield,
                title: "신뢰할 수 있는 정보",
                desc: "검증된 Web3 전문 지식을 기반으로 한 답변",
                color: "green",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 transform transition-all duration-700 hover:scale-105 hover:bg-gray-700/40 hover:border-purple-400/40 group ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <card.icon
                  className={`w-12 h-12 mb-4 mx-auto transition-all duration-300 group-hover:scale-110 ${
                    card.color === "purple"
                      ? "text-purple-400 group-hover:text-purple-300"
                      : card.color === "yellow"
                        ? "text-yellow-400 group-hover:text-yellow-300"
                        : "text-green-400 group-hover:text-green-300"
                  }`}
                />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 사용 방법 섹션 - 애니메이션 강화 */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8 animate-slide-up">사용 방법</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Web3 알아보기 클릭", desc: "메인 화면으로 이동하여 다양한 Web3 주제를 탐색하세요" },
              { step: "2", title: "카테고리 선택", desc: "관심 있는 주제의 카테고리를 선택하거나 검색하세요" },
              { step: "3", title: "질문 선택", desc: "궁금한 질문을 클릭하여 자세한 설명을 확인하세요" },
              { step: "4", title: "AI 채팅 활용", desc: "추가 질문이 있다면 AI 채팅으로 더 자세히 알아보세요" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <span
                    className="text-white font-bold text-xl animate-wave"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 뉴스 티커 */}
      <ChainNewsTicker />
    </div>
  )

  // 메인 화면 렌더링
  const renderMainPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* 헤더 */}
      <header className="border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center space-x-2 lg:space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleGoHome}
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-bold text-white">HeyChain</h1>
                <p className="text-xs lg:text-sm text-gray-400">Web3 대화형 요약 비서</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <Link href="https://x.com/caro7370" target="_blank">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 hidden sm:flex"
                >
                  <span className="text-xs">Powered by @caro7370</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* 사이드바 */}
        <div className="w-full lg:w-80 bg-gray-900/50 backdrop-blur-sm border-b lg:border-r lg:border-b-0 border-purple-500/20 p-4 lg:p-6">
          {/* 검색 */}
          <div className="mb-4 lg:mb-6">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="질문 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
            </form>
          </div>

          {/* AI 질문하기 버튼 */}
          <div className="mb-4 lg:mb-6">
            <Button
              onClick={handleAIChatOpen}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm lg:text-base"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI에게 질문하기
            </Button>
          </div>

          {/* 인기 키워드 */}
          <div className="mb-4 lg:mb-6 hidden sm:block">
            <h3 className="text-white font-medium mb-3 flex items-center">
              <span className="text-purple-400 mr-2">#</span>
              인기 키워드
            </h3>
            <div className="space-y-2">
              {["NFT", "DeFi", "DAO", "이더리움", "메타마스크", "스마트 컨트랙트", "레이어2"].map((keyword, index) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  className="mr-2 mb-2 border-purple-500/30 text-purple-300 hover:bg-purple-500/20 cursor-pointer"
                  onClick={() => handleKeywordClick(keyword)}
                >
                  <span className="text-purple-400 mr-1">#{index + 1}</span>
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>

          {/* 추천 키워드 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-medium flex items-center">
                <span className="text-blue-400 mr-2">#</span>
                추천 키워드
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                onClick={() => {
                  // 랜덤 키워드 선택
                  const randomIndex = Math.floor(Math.random() * searchKeywords.ko.length)
                  const randomKeyword = searchKeywords.ko[randomIndex]
                  handleKeywordClick(randomKeyword)
                }}
              >
                랜덤
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {searchKeywords.ko.slice(0, 8).map((keyword) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 cursor-pointer text-xs"
                  onClick={() => handleKeywordClick(keyword)}
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>

          {/* 카테고리 목록 */}
          <div>
            <h3 className="text-white font-medium mb-3">카테고리</h3>
            <ScrollArea className="h-32 sm:h-48 lg:h-[calc(100vh-500px)]">
              <div className="space-y-1">
                {web3Data.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === index ? "default" : "ghost"}
                    className={`w-full justify-start text-left ${
                      selectedCategory === index
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => handleCategorySelect(index)}
                  >
                    <span className="truncate text-sm">{category.category}</span>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="flex-1 p-4 lg:p-8">
          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Search className="w-6 h-6 mr-2" />
                검색 결과: "{searchQuery}"
              </h2>
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
                    onClick={() => handleSearchResultSelect(result)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <TranslatableContent originalText={result.question} showTranslateButton={false}>
                        <h3 className="text-white font-medium">{result.question}</h3>
                      </TranslatableContent>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        {result.categoryName}
                      </Badge>
                    </div>
                    <TranslatableContent originalText={result.answer} showTranslateButton={false}>
                      <p className="text-gray-300 text-sm line-clamp-2">{result.answer}</p>
                    </TranslatableContent>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedCategory !== null ? (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{web3Data[selectedCategory].category}</h2>
              {selectedItem ? (
                <div className="space-y-6">
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-white mb-4"
                    onClick={() => setSelectedItem(null)}
                  >
                    <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
                    목록으로 돌아가기
                  </Button>

                  <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-lg">
                    <TranslatableContent originalText={selectedItem.question} className="mb-6">
                      <h3 className="text-2xl font-semibold text-white">{selectedItem.question}</h3>
                    </TranslatableContent>

                    <TranslatableContent originalText={selectedItem.answer}>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{selectedItem.answer}</p>
                      </div>
                    </TranslatableContent>

                    {/* 인터랙티브 요소들 */}
                    <div className="flex flex-wrap gap-3 mt-8">
                      {/* 퀴즈 버튼 */}
                      {selectedItem.quiz && (
                        <Button
                          onClick={handleQuizOpen}
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 flex items-center space-x-2"
                        >
                          <Brain className="w-4 h-4" />
                          <span>퀴즈 풀기</span>
                        </Button>
                      )}

                      {/* 실습 가이드 버튼 */}
                      {selectedItem.practice && (
                        <Button
                          onClick={handlePracticeOpen}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 flex items-center space-x-2"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>실습 가이드</span>
                        </Button>
                      )}

                      {/* 동영상 튜토리얼 버튼 (예시) */}
                      <Button
                        variant="outline"
                        className="border-orange-500/30 text-orange-300 hover:bg-orange-500/20 flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>동영상 보기</span>
                      </Button>
                    </div>

                    {selectedItem.links && selectedItem.links.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-white font-semibold mb-4">참고 링크</h4>
                        <ul className="space-y-2">
                          {selectedItem.links.map((link: any, i: number) => (
                            <li key={i}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                              >
                                {link.title}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedItem.tips && (
                      <div className="mt-8 bg-blue-500/10 border border-blue-500/20 p-6 rounded-lg">
                        <h4 className="text-blue-300 font-semibold flex items-center mb-3">
                          <Star className="w-5 h-5 mr-2" />팁
                        </h4>
                        <TranslatableContent originalText={selectedItem.tips} showTranslateButton={false}>
                          <p className="text-blue-200">{selectedItem.tips}</p>
                        </TranslatableContent>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {web3Data[selectedCategory].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
                      onClick={() => handleItemSelect(selectedCategory, itemIndex)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <TranslatableContent originalText={item.question} showTranslateButton={false}>
                          <h3 className="text-white font-medium">{item.question}</h3>
                        </TranslatableContent>
                        <div className="flex items-center space-x-2">
                          {item.quiz && (
                            <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                              <Brain className="w-3 h-3 mr-1" />
                              퀴즈
                            </Badge>
                          )}
                          {item.practice && (
                            <Badge variant="outline" className="border-green-500/30 text-green-300">
                              <BookOpen className="w-3 h-3 mr-1" />
                              실습
                            </Badge>
                          )}
                        </div>
                      </div>
                      <TranslatableContent originalText={item.answer} showTranslateButton={false}>
                        <p className="text-gray-400 text-sm line-clamp-2">{item.answer}</p>
                      </TranslatableContent>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center mb-8">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Web3의 세계에 오신 것을 환영합니다!</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                왼쪽 메뉴에서 궁금한 카테고리를 선택하거나 질문을 검색하여 Web3에 대한 모든 것을 알아보세요. HeyChain이
                여러분의 Web3 여정을 도와드립니다.
              </p>
              <div className="text-lg text-purple-300 italic mb-4">💡 복잡한 Web3, 이제 쉽게 배우세요!</div>
              <div className="text-sm text-gray-400">💬 AI 채팅으로 더 자세한 질문도 가능합니다</div>
            </div>
          )}
        </div>
      </div>

      {/* 뉴스 티커를 하단에 배치 */}
      <ChainNewsTicker />
    </div>
  )

  return (
    <>
      {isHomePage ? renderHomePage() : renderMainPage()}

      {/* 모달들 */}
      <AIChatModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        onLimitReached={handleLimitReached}
        onSignupPrompt={handleSignupPrompt}
      />

      <ChatLimitModal
        isOpen={isLimitModalOpen}
        onClose={() => setIsLimitModalOpen(false)}
        onSubscribe={handleSubscribe}
        onPurchaseTokens={handlePurchaseTokens}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSuccess={handleSignupSuccess}
      />

      {/* 퀴즈 모달 */}
      {selectedItem?.quiz && (
        <QuizModal
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          quiz={selectedItem.quiz}
          title={selectedItem.question}
        />
      )}

      {/* 실습 가이드 모달 */}
      {selectedItem?.practice && (
        <PracticeGuideModal
          isOpen={isPracticeOpen}
          onClose={() => setIsPracticeOpen(false)}
          guide={selectedItem.practice}
          categoryTitle={selectedItem.question}
        />
      )}
    </>
  )
}
