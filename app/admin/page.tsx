"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { BlockchainComparisonChart } from "@/components/blockchain-comparison-chart"
import { Shield, BarChart3, Database, Settings } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === "heychain2025") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("잘못된 비밀번호입니다.")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-800/50 border-purple-500/20">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-white">HeyChain 관리자</CardTitle>
            <CardDescription className="text-gray-400">
              관리자 대시보드에 접근하려면 비밀번호를 입력하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400"
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">HeyChain 관리자</h1>
                <p className="text-sm text-gray-400">사용량 분석 및 시스템 관리</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              <Database className="w-3 h-3 mr-1" />
              실시간 모니터링
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Analytics Dashboard */}
        <AnalyticsDashboard language="ko" />

        {/* Blockchain Comparison Chart */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-2" />
            시스템 구성 요소
          </h2>
          <BlockchainComparisonChart language="ko" />
        </div>

        {/* Quick Actions */}
        <Card className="bg-gray-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">빠른 작업</CardTitle>
            <CardDescription className="text-gray-400">시스템 관리 및 설정 작업</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                onClick={() => window.location.reload()}
              >
                데이터 새로고침
              </Button>
              <Button
                variant="outline"
                className="border-green-500/30 text-green-300 hover:bg-green-500/10"
                onClick={() => window.open("/api/analytics?type=stats", "_blank")}
              >
                API 상태 확인
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                onClick={() => setIsAuthenticated(false)}
              >
                로그아웃
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
