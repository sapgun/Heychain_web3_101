"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart3, MessageCircle, Clock, TrendingUp, Zap, RefreshCw, Calendar, Hash } from "lucide-react"
import { type UsageStats, type ChatAnalytics, formatDuration, formatNumber } from "@/lib/analytics"

interface AnalyticsDashboardProps {
  language?: "ko" | "en"
}

export function AnalyticsDashboard({ language = "ko" }: AnalyticsDashboardProps) {
  const [stats, setStats] = useState<UsageStats | null>(null)
  const [recentChats, setRecentChats] = useState<ChatAnalytics[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const texts = {
    title: language === "ko" ? "사용량 분석" : "Usage Analytics",
    description:
      language === "ko" ? "AI 채팅 사용 현황과 인기 질문을 확인하세요" : "Monitor AI chat usage and popular questions",
    overview: language === "ko" ? "개요" : "Overview",
    popularQuestions: language === "ko" ? "인기 질문" : "Popular Questions",
    recentActivity: language === "ko" ? "최근 활동" : "Recent Activity",
    totalQuestions: language === "ko" ? "총 질문 수" : "Total Questions",
    totalTokens: language === "ko" ? "총 토큰 사용량" : "Total Tokens",
    avgResponseTime: language === "ko" ? "평균 응답 시간" : "Avg Response Time",
    questionsToday: language === "ko" ? "오늘 질문" : "Questions Today",
    questionsThisWeek: language === "ko" ? "이번 주 질문" : "This Week",
    questionsThisMonth: language === "ko" ? "이번 달 질문" : "This Month",
    refresh: language === "ko" ? "새로고침" : "Refresh",
    lastUpdated: language === "ko" ? "마지막 업데이트" : "Last Updated",
    category: language === "ko" ? "카테고리" : "Category",
    count: language === "ko" ? "횟수" : "Count",
    responseTime: language === "ko" ? "응답 시간" : "Response Time",
    noData: language === "ko" ? "데이터가 없습니다" : "No data available",
    question: language === "ko" ? "질문" : "Question",
    timestamp: language === "ko" ? "시간" : "Timestamp",
  }

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      const [statsResponse, recentResponse] = await Promise.all([
        fetch("/api/analytics?type=stats"),
        fetch("/api/analytics?type=recent&limit=20"),
      ])

      if (statsResponse.ok && recentResponse.ok) {
        const statsData = await statsResponse.json()
        const recentData = await recentResponse.json()

        setStats(statsData)
        setRecentChats(recentData)
        setLastUpdated(new Date())
      }
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()

    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchAnalytics, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading && !stats) {
    return (
      <Card className="bg-gray-800/50 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            {texts.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="w-6 h-6 animate-spin text-purple-400" />
            <span className="ml-2 text-gray-400">Loading analytics...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!stats) {
    return (
      <Card className="bg-gray-800/50 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">{texts.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-center py-8">{texts.noData}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-800/50 border-purple-500/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              {texts.title}
            </CardTitle>
            <CardDescription className="text-gray-400">{texts.description}</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">
              {texts.lastUpdated}: {lastUpdated.toLocaleTimeString()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchAnalytics}
              disabled={loading}
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 bg-gray-700/50">
            <TabsTrigger value="overview">{texts.overview}</TabsTrigger>
            <TabsTrigger value="popular">{texts.popularQuestions}</TabsTrigger>
            <TabsTrigger value="recent">{texts.recentActivity}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-300 text-sm font-medium">{texts.totalQuestions}</p>
                    <p className="text-white text-2xl font-bold">{formatNumber(stats.totalQuestions)}</p>
                  </div>
                  <MessageCircle className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-300 text-sm font-medium">{texts.totalTokens}</p>
                    <p className="text-white text-2xl font-bold">{formatNumber(stats.totalTokens)}</p>
                  </div>
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-300 text-sm font-medium">{texts.avgResponseTime}</p>
                    <p className="text-white text-2xl font-bold">{formatDuration(stats.avgResponseTime)}</p>
                  </div>
                  <Clock className="w-8 h-8 text-purple-400" />
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-300 text-sm font-medium">{texts.questionsToday}</p>
                    <p className="text-white text-2xl font-bold">{stats.questionsToday}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-orange-400" />
                </div>
              </div>
            </div>

            {/* Time-based Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h3 className="text-white font-medium mb-4 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  시간별 통계
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{texts.questionsToday}</span>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                      {stats.questionsToday}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{texts.questionsThisWeek}</span>
                    <Badge variant="outline" className="border-green-500/30 text-green-300">
                      {stats.questionsThisWeek}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{texts.questionsThisMonth}</span>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                      {stats.questionsThisMonth}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4">
                <h3 className="text-white font-medium mb-4 flex items-center">
                  <Hash className="w-4 h-4 mr-2" />
                  카테고리별 분포
                </h3>
                <div className="space-y-3">
                  {Object.entries(stats.categoryBreakdown)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 5)
                    .map(([category, count]) => (
                      <div key={category} className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{category}</span>
                        <Badge variant="outline" className="border-gray-500/30 text-gray-300">
                          {count}
                        </Badge>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-4">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-white font-medium mb-4">상위 10개 인기 질문</h3>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {stats.topQuestions.map((q, index) => (
                    <div key={q.question} className="flex items-start justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mr-2">
                            #{index + 1}
                          </Badge>
                          {q.category && (
                            <Badge variant="outline" className="border-gray-500/30 text-gray-400 text-xs">
                              {q.category}
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{q.question}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>
                            {texts.count}: {q.count}
                          </span>
                          <span>
                            {texts.responseTime}: {formatDuration(q.avgResponseTime)}
                          </span>
                          <span>마지막: {new Date(q.lastAsked).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-white font-medium mb-4">최근 20개 질문</h3>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {recentChats.map((chat) => (
                    <div key={chat.id} className="p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="border-gray-500/30 text-gray-400 text-xs">
                          {chat.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{new Date(chat.timestamp).toLocaleString()}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{chat.question}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>
                          {texts.responseTime}: {formatDuration(chat.responseTime)}
                        </span>
                        {chat.tokenUsage && <span>토큰: {chat.tokenUsage.total}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default AnalyticsDashboard
