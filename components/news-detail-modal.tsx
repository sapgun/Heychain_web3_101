"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Bookmark, Share2, Clock } from "lucide-react"
import { useState, useEffect } from "react"

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

interface NewsDetailModalProps {
  isOpen: boolean
  onClose: () => void
  newsItem: NewsItem | null
}

export default function NewsDetailModal({ isOpen, onClose, newsItem }: NewsDetailModalProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    if (newsItem) {
      // 북마크 상태 확인
      const bookmarks = JSON.parse(localStorage.getItem("news-bookmarks") || "[]")
      setIsBookmarked(bookmarks.includes(newsItem.id))
    }
  }, [newsItem])

  if (!newsItem) return null

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // 실제로는 로컬 스토리지나 서버에 북마크 저장
    const bookmarks = JSON.parse(localStorage.getItem("news-bookmarks") || "[]")
    if (isBookmarked) {
      const filtered = bookmarks.filter((id: string) => id !== newsItem.id)
      localStorage.setItem("news-bookmarks", JSON.stringify(filtered))
    } else {
      bookmarks.push(newsItem.id)
      localStorage.setItem("news-bookmarks", JSON.stringify(bookmarks))
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: newsItem.title,
          text: newsItem.description,
          url: newsItem.url,
        })
      } catch (error) {
        console.log("공유 취소됨")
      }
    } else {
      // 폴백: 클립보드에 복사
      try {
        await navigator.clipboard.writeText(newsItem.url)
        alert("링크가 클립보드에 복사되었습니다!")
      } catch (error) {
        console.error("클립보드 복사 실패:", error)
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gray-900 border-purple-500/20">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                {newsItem.chain.charAt(0)}
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold text-white">{newsItem.chain}</DialogTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(newsItem.publishedAt)}</span>
                  <span>•</span>
                  <span>{newsItem.source}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBookmark}
                className={`${isBookmarked ? "text-yellow-500" : "text-gray-400"} hover:text-yellow-400`}
              >
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleShare} className="text-gray-400 hover:text-white">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">{newsItem.title}</h3>
            {/* 원문 보기 버튼 - 상단에 크게 배치 */}
            <div className="mb-6">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
              >
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>원문 기사 보러가기</span>
                </a>
              </Button>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                {newsItem.category}
              </Badge>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>{Math.floor((Date.now() - new Date(newsItem.publishedAt).getTime()) / (1000 * 60))}분 전</span>
              </div>
            </div>
          </div>

          {newsItem.imageUrl && (
            <div className="rounded-lg overflow-hidden">
              <img
                src={newsItem.imageUrl || "/placeholder.svg"}
                alt={newsItem.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  // 이미지 로드 실패 시 플레이스홀더로 대체
                  e.currentTarget.src = `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(newsItem.title)}`
                }}
              />
            </div>
          )}

          <div className="prose prose-sm max-w-none">
            <p className="text-gray-300 leading-relaxed">{newsItem.description}</p>
          </div>

          <div className="pt-4 border-t border-gray-700 text-center">
            <div className="text-sm text-gray-500">이 소식이 도움이 되셨나요?</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
