"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Settings, Filter, Play, Pause, RefreshCw, AlertCircle, Wifi, WifiOff } from "lucide-react"
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
      Chainlink: "from-blue-500 to-blue-700",
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
  const [error, setError] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(60)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [language, setLanguage] = useState("ko")
  const [isOnline, setIsOnline] = useState(true)
  const [retryCount, setRetryCount] = useState(0)

  // 네트워크 상태 감지
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // 뉴스 데이터 가져오기
  const fetchNews = async (showLoading = true) => {
    if (showLoading) {
      setLoading(true)
    }
    setError(null)

    try {
      console.log(`뉴스 가져오기 시도 (${retryCount + 1}회)`)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10초 타임아웃

      const response = await fetch(`/api/news?lang=${language}&category=${selectedCategory}`, {
        signal: controller.signal,
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`잘못된 응답 형식: ${contentType}`)
      }

      const data = await response.json()

      if (data.success && data.data && Array.isArray(data.data)) {
        setNews(data.data)
        setRetryCount(0) // 성공 시 재시도 카운트 리셋
        console.log(`뉴스 로드 성공: ${data.data.length}개`)

        if (data.fallback) {
          console.log("기본 뉴스 사용 중")
        }
      } else {
        throw new Error(data.error || "뉴스 데이터가 올바르지 않습니다")
      }
    } catch (error) {
      console.error("뉴스 가져오기 실패:", error)

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          setError("요청 시간이 초과되었습니다")
        } else if (error.message.includes("fetch")) {
          setError("네트워크 연결을 확인해주세요")
        } else {
          setError(error.message)
        }
      } else {
        setError("알 수 없는 오류가 발생했습니다")
      }

      // 재시도 로직
      if (retryCount < 3) {
        console.log(`${retryCount + 1}초 후 재시도...`)
        setTimeout(
          () => {
            setRetryCount((prev) => prev + 1)
            fetchNews(false)
          },
          (retryCount + 1) * 1000,
        )
      }
    } finally {
      if (showLoading) {
        setLoading(false)
      }
    }
  }

  // 컴포넌트 마운트 시 뉴스 가져오기
  useEffect(() => {
    fetchNews()
  }, [language, selectedCategory])

  // 10분마다 뉴스 자동 업데이트 (백그라운드)
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isOnline && !error) {
          fetchNews(false) // 로딩 표시 없이 백그라운드 업데이트
        }
      },
      10 * 60 * 1000,
    ) // 10분

    return () => clearInterval(interval)
  }, [language, selectedCategory, isOnline, error])

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
    try {
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
    } catch (error) {
      return "방금 전"
    }
  }

  const handleRetry = () => {
    setRetryCount(0)
    fetchNews()
  }

  if (loading && news.length === 0) {
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

  if (error && news.length === 0) {
    return (
      <div className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-red-400">
            {isOnline ? <AlertCircle className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
            <span className="text-sm">{isOnline ? error : "오프라인 상태입니다"}</span>
            <Button variant="ghost" size="sm" onClick={handleRetry} className="ml-2 text-xs">
              <RefreshCw className="w-3 h-3 mr-1" />
              다시 시도
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (news.length === 0) {
    return (
      <div className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">표시할 뉴스가 없습니다.</span>
            <Button variant="ghost" size="sm" onClick={handleRetry} className="ml-2 text-xs">
              <RefreshCw className="w-3 h-3 mr-1" />
              새로고침
            </Button>
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
              {!isOnline && (
                <Badge variant="destructive" className="text-xs">
                  <WifiOff className="w-3 h-3 mr-1" />
                  오프라인
                </Badge>
              )}
              {isOnline && (
                <Badge variant="outline" className="text-xs text-green-400 border-green-400">
                  <Wifi className="w-3 h-3 mr-1" />
                  온라인
                </Badge>
              )}
              <span className="text-xs text-gray-500 hidden sm:inline">
                {news.length > 0 && formatTimeAgo(news[0].publishedAt)}
              </span>
            </div>

            <div className="flex items-center space-x-1 lg:space-x-2">
              {/* 언어 선택 */}
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
              <Button variant="ghost" size="sm" onClick={handleRetry} className="text-xs" disabled={loading}>
                <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
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
