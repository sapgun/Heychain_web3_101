"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Settings, Filter, Play, Pause, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import NewsDetailModal from "./news-detail-modal"

interface NewsItem {
  id: string
  chain: string
  title: string
  description: string
  url: string
  publishedAt: string
  source: string
  category: string
  imageUrl?: string
}

// 체인 로고 컴포넌트
const ChainLogo = ({ chain }: { chain: string }) => {
  const getChainColor = (chainName: string) => {
    const colors: Record<string, string> = {
      Ethereum: "from-blue-500 to-purple-500",
      Bitcoin: "from-orange-500 to-yellow-500",
      Solana: "from-purple-500 to-pink-500",
      Polygon: "from-purple-600 to-blue-500",
      Arbitrum: "from-blue-400 to-cyan-500",
      Optimism: "from-red-500 to-pink-500",
      Avalanche: "from-red-600 to-orange-500",
      Cardano: "from-blue-600 to-indigo-600",
      Polkadot: "from-pink-500 to-rose-500",
      Ripple: "from-blue-400 to-blue-600",
      Crypto: "from-gray-500 to-gray-600",
    }
    return colors[chainName] || "from-gray-500 to-gray-600"
  }

  return (
    <div
      className={`w-6 h-6 rounded-full bg-gradient-to-br ${getChainColor(chain)} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
    >
      {chain.charAt(0)}
    </div>
  )
}

export default function ChainNewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(60)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [language, setLanguage] = useState("ko")

  // 뉴스 데이터 가져오기
  const fetchNews = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/news?lang=${language}&category=${selectedCategory}`)
      const data = await response.json()

      if (data.success) {
        setNews(data.data)
      } else {
        console.error("뉴스 가져오기 실패:", data.error)
      }
    } catch (error) {
      console.error("뉴스 API 호출 실패:", error)
    } finally {
      setLoading(false)
    }
  }

  // 컴포넌트 마운트 시 뉴스 가져오기
  useEffect(() => {
    fetchNews()
  }, [language, selectedCategory])

  // 5분마다 뉴스 자동 업데이트
  useEffect(() => {
    const interval = setInterval(fetchNews, 5 * 60 * 1000) // 5분
    return () => clearInterval(interval)
  }, [language, selectedCategory])

  const categories = ["all", "DeFi", "NFT", "규제", "투자", "기술", "스테이킹", "게임", "ETF"]

  // 뉴스 아이템을 두 배로 복제하여 무한 스크롤 효과
  const newsItems = news.length > 0 ? [...news, ...news] : []

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    setIsPaused(!isPlaying)
  }

  const handleNewsClick = (newsItem: NewsItem) => {
    setSelectedNewsItem(newsItem)
    setIsModalOpen(true)
  }

  const formatTimeAgo = (dateString: string) => {
    const now = new Date()
    const publishedAt = new Date(dateString)
    const diffInMinutes = Math.floor((now.getTime() - publishedAt.getTime()) / (1000 * 60))

    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}시간 전`
    } else {
      return `${Math.floor(diffInMinutes / 1440)}일 전`
    }
  }

  if (loading) {
    return (
      <div className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span className="text-sm">최신 뉴스를 불러오는 중...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* 컨트롤 바 */}
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-medium">
                🔥 실시간 뉴스
              </div>
              <Badge variant="outline" className="text-xs">
                {news.length}개 소식
              </Badge>
              <span className="text-xs text-gray-500 hidden sm:inline">
                {news.length > 0 && formatTimeAgo(news[0].publishedAt)}
              </span>
            </div>

            <div className="flex items-center space-x-1 lg:space-x-2">
              {/* 언어 선택 - 모바일에서 숨김 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs hidden sm:flex">
                    {language === "ko" ? "🇰🇷 한국어" : "🇺🇸 English"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage("ko")}>🇰🇷 한국어</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")}>🇺🇸 English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 카테고리 필터 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Filter className="w-3 h-3 mr-1" />
                    {selectedCategory === "all" ? "전체" : selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>카테고리</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "bg-purple-100" : ""}
                    >
                      {category === "all" ? "전체" : category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 속도 조절 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Settings className="w-3 h-3 mr-1" />
                    속도
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>스크롤 속도</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSpeed(30)}>빠름 (30초)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSpeed(60)}>보통 (60초)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSpeed(90)}>느림 (90초)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 새로고침 */}
              <Button variant="ghost" size="sm" onClick={fetchNews} className="text-xs">
                <RefreshCw className="w-3 h-3" />
              </Button>

              {/* 재생/일시정지 */}
              <Button variant="ghost" size="sm" onClick={togglePlayPause} className="text-xs">
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </Button>
            </div>
          </div>

          {/* 뉴스 티커 */}
          <div
            className="flex-1 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {newsItems.length > 0 ? (
              <div
                className={`flex items-center space-x-6 ${isPlaying ? "animate-ticker" : ""} ${isPaused ? "animate-pause" : ""}`}
                style={{ animationDuration: `${speed}s` }}
              >
                {newsItems.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    onClick={() => handleNewsClick(item)}
                    className="flex items-center space-x-2 flex-shrink-0 group cursor-pointer"
                  >
                    <ChainLogo chain={item.chain} />
                    <span className="text-xs lg:text-sm text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                      <span className="text-purple-400 font-medium mr-1">{item.chain}:</span>
                      {item.title}
                    </span>
                    <Badge variant="secondary" className="text-xs ml-1 lg:ml-2 hidden sm:inline-flex">
                      {item.source}
                    </Badge>
                    <span className="text-xs text-gray-500 hidden lg:inline">{formatTimeAgo(item.publishedAt)}</span>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-2">
                <span className="text-sm text-gray-500">뉴스를 불러올 수 없습니다.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 뉴스 상세 모달 */}
      <NewsDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} newsItem={selectedNewsItem} />
    </>
  )
}
