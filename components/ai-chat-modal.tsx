"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Send, Bot, User, AlertCircle, Zap, Crown, Clock } from "lucide-react"
import { chatLimitManager } from "@/lib/chat-limit"
import { subscriptionManager } from "@/lib/subscription"

interface AIChatModalProps {
  isOpen: boolean
  onClose: () => void
  onLimitReached: () => void
  onSignupPrompt: () => void
}

export default function AIChatModal({ isOpen, onClose, onLimitReached, onSignupPrompt }: AIChatModalProps) {
  const [isLimitReached, setIsLimitReached] = useState(false)
  const [usageStats, setUsageStats] = useState(chatLimitManager.getUsageStats())
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const subscriptionStatus = subscriptionManager.getStatus()

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    onFinish: () => {
      // 질문 사용량 증가
      chatLimitManager.incrementQueryCount()
      updateUsageStats()
    },
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  const updateUsageStats = () => {
    setUsageStats(chatLimitManager.getUsageStats())
  }

  useEffect(() => {
    updateUsageStats()
  }, [isOpen])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 사용량 제한 확인
    if (!chatLimitManager.canMakeQuery() && !subscriptionManager.canMakeQuery()) {
      setIsLimitReached(true)
      onLimitReached()
      return
    }

    // 회원가입 유도 (3회 사용 후)
    if (usageStats.dailyQuestions >= 2 && !usageStats.isRegistered && !usageStats.isPremium) {
      onSignupPrompt()
      return
    }

    handleSubmit(e)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl lg:h-[80vh] h-[90vh] bg-gray-900 border-purple-500/20 mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <span className="text-white text-sm lg:text-base">HeyChain AI 어시스턴트</span>
            </div>
            <div className="flex items-center space-x-1 lg:space-x-2">
              {/* 사용량 표시 */}
              {!usageStats.isPremium && (
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={usageStats.remainingQueries > 2 ? "default" : "destructive"}
                    className="flex items-center space-x-1 text-xs"
                  >
                    <Zap className="w-3 h-3" />
                    <span className="hidden sm:inline">
                      {usageStats.remainingQueries === -1 ? "∞" : usageStats.remainingQueries}회 남음
                    </span>
                    <span className="sm:hidden">
                      {usageStats.remainingQueries === -1 ? "∞" : usageStats.remainingQueries}
                    </span>
                  </Badge>
                  {subscriptionStatus.tokens > 0 && (
                    <Badge variant="outline" className="flex items-center space-x-1 border-yellow-500 text-yellow-500">
                      <Crown className="w-3 h-3" />
                      <span>{subscriptionStatus.tokens} 토큰</span>
                    </Badge>
                  )}
                </div>
              )}

              {usageStats.isPremium && (
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                  <Crown className="w-3 h-3 mr-1" />
                  프리미엄
                </Badge>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-full space-y-4">
          {/* 제한 도달 알림 */}
          {isLimitReached && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">일일 무료 질문 한도에 도달했습니다!</span>
              </div>
              <p className="text-red-300 text-sm mt-2">
                다음 리셋까지: <span className="font-medium">{chatLimitManager.getTimeUntilReset()}</span>
              </p>
              <div className="flex items-center space-x-2 mt-3">
                <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                  유료 플랜 구독하기
                </Button>
                <Button size="sm" variant="outline">
                  토큰 구매하기
                </Button>
              </div>
            </div>
          )}

          {/* 채팅 메시지 영역 */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 border border-gray-700 rounded-lg">
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-medium mb-2">HeyChain AI와 대화를 시작하세요!</h3>
                  <p className="text-gray-400 text-sm">Web3, 블록체인, DeFi, NFT 등에 대해 무엇이든 물어보세요.</p>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-gray-800 text-gray-100 border border-gray-700"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-gray-400 text-sm">답변을 생성하고 있습니다...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* 입력 영역 */}
          <form onSubmit={onSubmit} className="flex items-center space-x-2 lg:space-x-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder={isLimitReached ? "일일 무료 한도에 도달했습니다..." : "Web3에 대해 무엇이든 물어보세요..."}
              disabled={isLoading || isLimitReached}
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm lg:text-base"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim() || isLimitReached}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-3 lg:px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>

          {/* 하단 정보 */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3" />
              <span>
                {!usageStats.isPremium && `다음 리셋: ${chatLimitManager.getTimeUntilReset()}`}
                {usageStats.isPremium && "무제한 사용 가능"}
              </span>
            </div>
            <div>AI는 실수할 수 있습니다. 중요한 정보는 검증하세요.</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
