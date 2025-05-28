"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Crown, Clock, AlertCircle, Sparkles } from "lucide-react"
import { subscriptionPlans, tokenPacks } from "@/lib/subscription"
import { chatLimitManager } from "@/lib/chat-limit"

interface ChatLimitModalProps {
  isOpen: boolean
  onClose: () => void
  onSubscribe: (planId: string) => void
  onPurchaseTokens: (packId: string) => void
}

export default function ChatLimitModal({ isOpen, onClose, onSubscribe, onPurchaseTokens }: ChatLimitModalProps) {
  const usageStats = chatLimitManager.getUsageStats()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">일일 무료 질문 한도 도달</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 현재 상태 */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">무료 질문을 모두 사용했습니다</span>
              </div>
              <Badge variant="destructive">{usageStats.dailyQuestions}/5회 사용</Badge>
            </div>
            <p className="text-red-300 text-sm">
              다음 무료 질문 리셋까지: <span className="font-medium">{chatLimitManager.getTimeUntilReset()}</span>
            </p>
          </div>

          {/* 해결 방법 */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 즉시 사용 - 토큰 구매 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <h3 className="text-white font-medium">즉시 사용하기 - 토큰 구매</h3>
              </div>
              <p className="text-gray-400 text-sm">토큰을 구매하여 바로 AI 질문을 계속하세요</p>

              <div className="space-y-3">
                {tokenPacks.map((pack) => (
                  <div
                    key={pack.id}
                    className="border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-white font-medium">{pack.name}</h4>
                        <p className="text-gray-400 text-sm">
                          {pack.tokens}회 질문
                          {pack.bonus && <span className="text-yellow-500"> (+{pack.bonus}회 보너스!)</span>}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">₩{pack.price.toLocaleString()}</div>
                        <div className="text-gray-400 text-xs">
                          질문당 ₩{Math.round(pack.price / (pack.tokens + (pack.bonus || 0)))}
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                      onClick={() => onPurchaseTokens(pack.id)}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      토큰 구매하기
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* 장기 사용 - 구독 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-purple-500" />
                <h3 className="text-white font-medium">장기 사용 - 구독 플랜</h3>
              </div>
              <p className="text-gray-400 text-sm">정기 구독으로 더 저렴하게 무제한 사용하세요</p>

              <div className="space-y-3">
                {subscriptionPlans.slice(1).map((plan) => (
                  <div
                    key={plan.id}
                    className={`border rounded-lg p-4 transition-colors ${
                      plan.recommended
                        ? "border-purple-500/50 bg-purple-500/5"
                        : "border-gray-700 hover:border-purple-500/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-white font-medium">{plan.name}</h4>
                          {plan.recommended && (
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">추천</Badge>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">
                          {plan.queryLimit === -1 ? "무제한" : `하루 ${plan.queryLimit}회`} 질문
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">₩{plan.price.toLocaleString()}</div>
                        <div className="text-gray-400 text-xs">월 요금</div>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-4">
                      {plan.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-1 h-1 bg-purple-400 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.recommended
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                      onClick={() => onSubscribe(plan.id)}
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      구독하기
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 무료 이용 안내 */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">무료로 계속 이용하기</span>
            </div>
            <p className="text-blue-300 text-sm">
              매일 자정에 무료 질문 횟수가 리셋됩니다. 내일 다시 5회의 무료 질문을 이용하실 수 있어요!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
