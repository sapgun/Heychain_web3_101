"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap, Grid, List } from "lucide-react"
import ChainNewsTicker from "./chain-news-ticker"

export default function NewsSection() {
  const [newsView, setNewsView] = useState<"ticker" | "widget" | "both">("both")

  return (
    <div className="w-full space-y-4">
      {/* 뉴스 섹션 헤더 */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold text-white">📰 실시간 Web3 뉴스</h2>
            <Badge variant="outline" className="text-xs">
              Live
            </Badge>
          </div>

          {/* 뷰 전환 버튼 */}
          <div className="flex items-center space-x-2">
            <Button
              variant={newsView === "ticker" ? "default" : "ghost"}
              size="sm"
              onClick={() => setNewsView("ticker")}
              className="text-xs"
            >
              <Zap className="w-3 h-3 mr-1" />
              티커
            </Button>
            <Button
              variant={newsView === "widget" ? "default" : "ghost"}
              size="sm"
              onClick={() => setNewsView("widget")}
              className="text-xs"
            >
              <Grid className="w-3 h-3 mr-1" />
              위젯
            </Button>
            <Button
              variant={newsView === "both" ? "default" : "ghost"}
              size="sm"
              onClick={() => setNewsView("both")}
              className="text-xs"
            >
              <List className="w-3 h-3 mr-1" />
              전체
            </Button>
          </div>
        </div>
      </div>

      {/* 뉴스 티커 (항상 표시 또는 선택적 표시) */}
      {(newsView === "ticker" || newsView === "both") && <ChainNewsTicker />}

      {/* RSS.app 위젯 섹션 */}
      {(newsView === "widget" || newsView === "both") && (
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">📊 뉴스 피드</h3>
              <Badge variant="outline" className="text-xs">
                RSS.app
              </Badge>
            </div>

            {/* RSS.app 위젯 컨테이너 */}
            <div className="relative">
              <div
                id="rss-widget-container"
                className="rounded-lg overflow-hidden"
                style={{
                  filter: "invert(1) hue-rotate(180deg)", // 다크모드 적용
                  background: "transparent",
                }}
              >
                <rssapp-wall id="3XUZKXvWllJ8oxAB"></rssapp-wall>
              </div>

              {/* 오버레이로 스타일 조정 */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg"></div>
            </div>

            <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
              <span>Powered by RSS.app</span>
              <a
                href="https://rss.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-purple-400 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                <span>RSS.app에서 더 보기</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
