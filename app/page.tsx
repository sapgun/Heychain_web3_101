"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Sparkles, ChevronRight, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { web3Data } from "@/app/data/web3-data"
import { searchKeywords } from "@/app/data/web3-data"
import ChainNewsTicker from "@/components/chain-news-ticker"
import AIChatModal from "@/components/ai-chat-modal"
import ChatLimitModal from "@/components/chat-limit-modal"
import SignupModal from "@/components/signup-modal"
import { subscriptionManager } from "@/lib/subscription"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  // 모달 상태
  const [isAIChatOpen, setIsAIChatOpen] = useState(false)
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

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
  }

  // 카테고리 선택
  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index)
    setSelectedItem(null)
    setSearchResults([])
    setSearchQuery("")
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* 헤더 */}
      <header className="border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">HeyChain 101</h1>
                <p className="text-sm text-gray-400">Web3 대화형 요약 비서</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="https://x.com/caro7370" target="_blank">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <span className="text-xs">Powered by SAPGUN</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex">
        {/* 사이드바 */}
        <div className="w-80 bg-gray-900/50 backdrop-blur-sm border-r border-purple-500/20 p-6">
          {/* 검색 */}
          <div className="mb-6">
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
          <div className="mb-6">
            <Button
              onClick={handleAIChatOpen}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI에게 질문하기
            </Button>
          </div>

          {/* 인기 키워드 */}
          <div className="mb-6">
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
            <h3 className="text-white font-medium mb-3 flex items-center">
              <span className="text-blue-400 mr-2">#</span>
              추천 키워드
            </h3>
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
            <ScrollArea className="h-[calc(100vh-500px)]">
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
        <div className="flex-1 p-8">
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
                      <h3 className="text-white font-medium">{result.question}</h3>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        {result.categoryName}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">{result.answer}</p>
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
                    <h3 className="text-2xl font-semibold text-white mb-6">{selectedItem.question}</h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{selectedItem.answer}</p>
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
                        <p className="text-blue-200">{selectedItem.tips}</p>
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
                      <h3 className="text-white font-medium mb-2">{item.question}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{item.answer}</p>
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
              <div className="text-lg text-purple-300 italic">"말 걸면 바로 요약해주는 대화형 Web3 위키"</div>
            </div>
          )}
        </div>
      </div>

      {/* 뉴스 티커를 하단에 배치 */}
      <ChainNewsTicker />

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
    </div>
  )
}
