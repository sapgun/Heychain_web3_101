"use client"

import type React from "react"

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useState, useEffect } from "react"
import {
  ExternalLink,
  Filter,
  Play,
  Pause,
  RefreshCw,
  AlertCircle,
  Wifi,
  WifiOff,
  ArrowLeft,
  Gauge,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import NewsDetailModal from "./news-detail-modal"
import LanguageSelector from "./language-selector"
import { useLanguage } from "@/lib/language-context"

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

// 커스텀 슬라이더 컴포넌트
const CustomSlider = ({
  value,
  onChange,
  min = 0.2,
  max = 2.5,
  step = 0.1,
}: {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(236, 72, 153) ${percentage}%, rgb(55, 65, 81) ${percentage}%, rgb(55, 65, 81) 100%)`,
        }}
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, rgb(168, 85, 247), rgb(236, 72, 153));
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, rgb(168, 85, 247), rgb(236, 72, 153));
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
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
  const { t, language } = useLanguage()
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1.0) // 단일 값으로 변경
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [retryCount, setRetryCount] = useState(0)
  const [isSpeedPopoverOpen, setIsSpeedPopoverOpen] = useState(false)

  // 속도를 CSS 애니메이션 지속시간으로 변환하는 함수
  const getAnimationDuration = (speedValue: number) => {
    // 기본 60초를 기준으로 속도 배율 적용
    // 속도가 높을수록 애니메이션이 빨라짐 (지속시간이 짧아짐)
    const baseDuration = 60 // 기본 60초
    return baseDuration / speedValue
  }

  // 속도 레이블 생성 함수
  const getSpeedLabel = (speedValue: number) => {
    if (speedValue <= 0.3) return "매우 느림"
    if (speedValue <= 0.5) return "느림"
    if (speedValue <= 0.8) return "조금 느림"
    if (speedValue <= 1.2) return "보통"
    if (speedValue <= 1.5) return "빠름"
    if (speedValue <= 2.0) return "매우 빠름"
    return "초고속"
  }

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
      60 * 60 * 1000, // 1시간으로 변경
    )

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
        return `${diffInMinutes}${t.minutesAgo}`
      } else if (diffInMinutes < 1440) {
        return `${Math.floor(diffInMinutes / 60)}${t.hoursAgo}`
      } else {
        return `${Math.floor(diffInMinutes / 1440)}${t.daysAgo}`
      }
    } catch (error) {
      return t.justNow
    }
  }

  const handleRetry = () => {
    setRetryCount(0)
    fetchNews()
  }

  const handleGoBack = () => {
    // 전체 카테고리로 돌아가기
    setSelectedCategory("all")
    setError(null)
    fetchNews()
  }

  // 속도 프리셋 함수들
  const setSpeedPreset = (speedValue: number) => {
    setSpeed(speedValue)
    setIsSpeedPopoverOpen(false)
  }

  if (loading && news.length === 0) {
    return (
      <div className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span className="text-sm">{t.loading}</span>
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
            <span className="text-sm">{isOnline ? error : t.offline}</span>
            <Button variant="ghost" size="sm" onClick={handleRetry} className="ml-2 text-xs">
              <RefreshCw className="w-3 h-3 mr-1" />
              {t.retry}
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
          <div className="flex items-center space-x-3 text-gray-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">
              {selectedCategory === "all" ? t.noNewsAvailable : `'${selectedCategory}' ${t.noNewsInCategory}`}
            </span>
            <div className="flex items-center space-x-2">
              {selectedCategory !== "all" && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleGoBack}
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  <ArrowLeft className="w-3 h-3 mr-1" />
                  {t.backToAllNews}
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={handleRetry} className="text-xs">
                <RefreshCw className="w-3 h-3 mr-1" />
                {t.refresh}
              </Button>
            </div>
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
                {t.liveNews}
              </div>
              <Badge variant="outline" className="text-xs">
                {news.length}
                {t.newsCount}
              </Badge>
              {!isOnline && (
                <Badge variant="destructive" className="text-xs">
                  <WifiOff className="w-3 h-3 mr-1" />
                  {t.offline}
                </Badge>
              )}
              {isOnline && (
                <Badge variant="outline" className="text-xs text-green-400 border-green-400">
                  <Wifi className="w-3 h-3 mr-1" />
                  {t.online}
                </Badge>
              )}
              <span className="text-xs text-gray-500 hidden sm:inline">
                {news.length > 0 && formatTimeAgo(news[0].publishedAt)}
              </span>
            </div>

            <div className="flex items-center space-x-1 lg:space-x-2">
              {/* 언어 선택 */}
              <LanguageSelector showLabel={false} />

              {/* 카테고리 필터 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Filter className="w-3 h-3 mr-1" />
                    {selectedCategory === "all" ? t.allNews : selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{t.category}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "bg-purple-100" : ""}
                    >
                      {category === "all" ? t.allNews : category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 속도 조절 - 팝오버로 변경 */}
              <Popover open={isSpeedPopoverOpen} onOpenChange={setIsSpeedPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Gauge className="w-3 h-3 mr-1" />
                    <span className="hidden sm:inline">{speed.toFixed(1)}x</span>
                    <span className="sm:hidden">{speed.toFixed(1)}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-gray-900 border-gray-700" align="end">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-white">속도 조절</h4>
                      <Badge variant="outline" className="text-xs">
                        {speed.toFixed(1)}x ({getSpeedLabel(speed)})
                      </Badge>
                    </div>

                    {/* 커스텀 슬라이더 */}
                    <div className="space-y-3">
                      <CustomSlider value={speed} onChange={setSpeed} min={0.2} max={2.5} step={0.1} />

                      {/* 속도 표시 */}
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>0.2x (매우 느림)</span>
                        <span>1.0x (보통)</span>
                        <span>2.5x (초고속)</span>
                      </div>
                    </div>

                    {/* 프리셋 버튼들 */}
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400 mb-2">빠른 설정:</div>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm" onClick={() => setSpeedPreset(0.3)} className="text-xs h-8">
                          0.3x
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSpeedPreset(0.5)} className="text-xs h-8">
                          0.5x
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSpeedPreset(1.0)} className="text-xs h-8">
                          1.0x
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSpeedPreset(1.3)} className="text-xs h-8">
                          1.3x
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSpeedPreset(1.5)} className="text-xs h-8">
                          1.5x
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setSpeedPreset(2.0)} className="text-xs h-8">
                          2.0x
                        </Button>
                      </div>
                    </div>

                    {/* 현재 설정 정보 */}
                    <div className="text-xs text-gray-500 pt-2 border-t border-gray-700">
                      현재 속도: {speed.toFixed(1)}x ({getSpeedLabel(speed)})
                      <br />한 바퀴 시간: 약 {Math.round(getAnimationDuration(speed))}초
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

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
            className="flex-1 overflow-hidden relative ticker-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {newsItems.length > 0 ? (
              <div
                className={`ticker-content ${isPlaying ? "" : ""} ${isPaused ? "animate-pause" : ""}`}
                style={{
                  animationDuration: `${getAnimationDuration(speed)}s`,
                  animationPlayState: isPlaying ? (isPaused ? "paused" : "running") : "paused",
                }}
              >
                {/* 원본 뉴스 아이템들 */}
                {news.map((item, index) => (
                  <div
                    key={`original-${item.id}-${index}`}
                    onClick={() => handleNewsClick(item)}
                    className="flex items-center space-x-2 flex-shrink-0 group cursor-pointer mr-6"
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

                {/* 복제된 뉴스 아이템들 (무한 루프용) */}
                {news.map((item, index) => (
                  <div
                    key={`duplicate-${item.id}-${index}`}
                    onClick={() => handleNewsClick(item)}
                    className="flex items-center space-x-2 flex-shrink-0 group cursor-pointer mr-6"
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
                <span className="text-sm text-gray-500">{t.noNewsAvailable}</span>
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
