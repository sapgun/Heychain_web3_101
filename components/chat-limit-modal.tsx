"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Crown, Coins, CheckCircle, ArrowRight } from "lucide-react"
import { SignupModal } from "@/components/signup-modal"

interface ChatLimitModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  remainingChats: number
  resetTime: Date
}

export function ChatLimitModal({ open, onOpenChange, remainingChats, resetTime }: ChatLimitModalProps) {
  const [showSignup, setShowSignup] = useState(false)
  const [selectedOption, setSelectedOption] = useState<"tokens" | "subscription" | null>(null)

  const formatTimeUntilReset = (resetTime: Date) => {
    const now = new Date()
    const diff = resetTime.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}시간 ${minutes}분`
  }

  const handleOptionSelect = (option: "tokens" | "subscription") => {
    setSelectedOption(option)
    setShowSignup(true)
  }

  const handleSignupSuccess = () => {
    setShowSignup(false)
    onOpenChange(false)
    // 여기서 선택된 옵션에 따라 토큰 구매 또는 구독 모달을 열 수 있습니다
    if (selectedOption === "tokens") {
      // 토큰 구매 모달 열기 (나중에 구현)
      console.log("Open token purchase modal")
    } else if (selectedOption === "subscription") {
      // 구독 모달 열기 (나중에 구현)
      console.log("Open subscription modal")
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl bg-gray-900 border-purple-500/20">
          <DialogHeader>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-white text-xl">일일 질문 한도 도달</DialogTitle>
                <DialogDescription className="text-gray-400">
                  오늘의 무료 AI 질문 {remainingChats === 0 ? "5회를 모두 사용" : `${5 - remainingChats}회 사용`}
                  하셨습니다
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* 현재 상태 */}
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-orange-300 font-medium">무료 사용량</h3>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  {5 - remainingChats}/5 사용
                </Badge>
              </div>
              <p className="text-orange-200 text-sm mb-3">무료 사용자는 하루에 5회까지 AI에게 질문할 수 있습니다.</p>
              <div className="flex items-center text-sm text-orange-300">
                <Clock className="w-4 h-4 mr-2" />
                <span>{formatTimeUntilReset(resetTime)} 후 초기화</span>
              </div>
            </div>

            {/* 해결 방법 */}
            <div>
              <h3 className="text-white font-semibold mb-4">더 많은 질문을 하려면?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* 토큰 구매 옵션 */}
                <Card className="bg-gray-800/50 border-blue-500/30 hover:border-blue-500/50 transition-all cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Coins className="w-5 h-5 text-blue-400" />
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">추천</Badge>
                    </div>
                    <CardTitle className="text-white text-lg">토큰 구매</CardTitle>
                    <CardDescription className="text-gray-400">필요한 만큼만 구매하세요</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        토큰 1개 = 질문 1회
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        토큰은 만료되지 않음
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        즉시 사용 가능
                      </div>
                    </div>
                    <Button
                      onClick={() => handleOptionSelect("tokens")}
                      className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-all"
                    >
                      <Coins className="w-4 h-4 mr-2" />
                      토큰 구매하기
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* 구독 옵션 */}
                <Card className="bg-gray-800/50 border-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Crown className="w-5 h-5 text-purple-400" />
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">인기</Badge>
                    </div>
                    <CardTitle className="text-white text-lg">프리미엄 구독</CardTitle>
                    <CardDescription className="text-gray-400">무제한으로 이용하세요</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        무제한 AI 질문
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        우선 응답 지원
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        프리미엄 기능 이용
                      </div>
                    </div>
                    <Button
                      onClick={() => handleOptionSelect("subscription")}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group-hover:scale-105 transition-all"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      구독하기
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 무료 대안 */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">무료로 계속 이용하기</h4>
              <p className="text-gray-400 text-sm mb-3">
                내일 자정에 질문 횟수가 초기화됩니다. 그 전까지는 기존 Q&A 자료를 탐색해보세요!
              </p>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Q&A 자료 보기
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 회원가입 모달 */}
      <SignupModal open={showSignup} onOpenChange={setShowSignup} onSuccess={handleSignupSuccess} />
    </>
  )
}

export default ChatLimitModal
