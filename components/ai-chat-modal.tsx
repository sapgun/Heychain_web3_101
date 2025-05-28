"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Bot, User, Sparkles, Loader2, AlertCircle, Clock } from "lucide-react"
import { generateSessionId } from "@/lib/analytics"
import { usageLimitManager, type UsageLimit } from "@/lib/usage-limit"

interface AIChatModalProps {
  language?: "ko" | "en"
}

export function AIChatModal({ language = "ko" }: AIChatModalProps) {
  const [open, setOpen] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
  const [usage, setUsage] = useState<UsageLimit>({ count: 0, lastReset: new Date(), isLimited: false })
  const [isClient, setIsClient] = useState(false)

  // 클라이언트 사이드에서만 실행되도록 보장
  useEffect(() => {
    setIsClient(true)
    if (typeof window !== "undefined") {
      setUsage(usageLimitManager.getCurrentUsage())
    }
  }, [])

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    headers: {
      "x-session-id": sessionId,
    },
    onError: (error) => {
      console.error("Chat error:", error)
    },
    onFinish: () => {
      // 질문이 성공적으로 완료되면 사용량 증가
      if (isClient) {
        const newUsage = usageLimitManager.incrementUsage()
        setUsage(newUsage)
      }
    },
  })

  const texts = {
    title: language === "ko" ? "AI 어시스턴트" : "AI Assistant",
    subtitle: language === "ko" ? "Web3에 대해 무엇이든 물어보세요" : "Ask anything about Web3",
    placeholder: language === "ko" ? "Web3에 대해 질문해보세요..." : "Ask about Web3...",
    askAI: language === "ko" ? "AI에게 질문하기" : "Ask AI",
    examples: language === "ko" ? "예시 질문" : "Example Questions",
    limitReached: language === "ko" ? "일일 질문 한도 초과" : "Daily Question Limit Reached",
    limitMessage:
      language === "ko"
        ? "오늘의 무료 질문 5회를 모두 사용하셨습니다. 내일 다시 이용해주세요!"
        : "You've used all 5 free questions for today. Please try again tomorrow!",
    remaining: language === "ko" ? "남은 질문" : "Questions Remaining",
    resetTime: language === "ko" ? "리셋 시간" : "Reset Time",
    signUpPrompt: language === "ko" ? "무제한 질문을 원하시면 회원가입을 해주세요" : "Sign up for unlimited questions",
    exampleQuestions:
      language === "ko"
        ? [
            "메타마스크 설치 방법을 알려주세요",
            "DeFi와 CeFi의 차이점은 무엇인가요?",
            "NFT 투자 시 주의사항은?",
            "가스비를 절약하는 방법이 있나요?",
            "DAO에 참여하려면 어떻게 해야 하나요?",
          ]
        : [
            "How do I install MetaMask?",
            "What's the difference between DeFi and CeFi?",
            "What should I be careful about when investing in NFTs?",
            "Are there ways to save on gas fees?",
            "How can I participate in a DAO?",
          ],
  }

  const handleExampleClick = (question: string) => {
    if (!usage.isLimited) {
      handleInputChange({ target: { value: question } } as any)
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isClient) return

    // 사용량 제한 확인
    if (!usageLimitManager.canMakeRequest()) {
      return
    }

    handleSubmit(e)
  }

  const canSubmit = isClient && usageLimitManager.canMakeRequest() && !isLoading && input.trim()

  // 클라이언트 사이드 렌더링이 완료되지 않았으면 로딩 표시
  if (!isClient) {
    return (
      <Button
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        size="lg"
        disabled
      >
        <Sparkles className="w-4 h-4 mr-2" />
        {texts.askAI}
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
          size="lg"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {texts.askAI}
          {usage.count > 0 && (
            <Badge className="ml-2 bg-white/20 text-white border-white/30">
              {usageLimitManager.getRemainingQuestions()}/5
            </Badge>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl h-[80vh] bg-gray-900 border-purple-500/20">
        <DialogHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-white text-lg">{texts.title}</DialogTitle>
                <DialogDescription className="text-gray-400 text-sm">{texts.subtitle}</DialogDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">온라인</Badge>
              <Badge
                className={`${
                  usage.isLimited
                    ? "bg-red-500/20 text-red-300 border-red-500/30"
                    : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                }`}
              >
                {texts.remaining}: {usageLimitManager.getRemainingQuestions()}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-full">
          {/* Usage Limit Warning */}
          {usage.isLimited && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                <h4 className="text-red-300 font-medium">{texts.limitReached}</h4>
              </div>
              <p className="text-red-200 text-sm mb-3">{texts.limitMessage}</p>
              <div className="flex items-center text-xs text-red-300">
                <Clock className="w-4 h-4 mr-1" />
                {texts.resetTime}: {usageLimitManager.getResetTime().toLocaleString()}
              </div>
              <Button
                size="sm"
                className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => {
                  // 회원가입 페이지로 이동하거나 모달 열기
                  alert("회원가입 기능은 곧 추가될 예정입니다!")
                }}
              >
                {texts.signUpPrompt}
              </Button>
            </div>
          )}

          {/* Chat Messages */}
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-medium mb-2">안녕하세요! 👋</h3>
                  <p className="text-gray-400 text-sm mb-2">Web3에 대해 궁금한 것이 있으시면 언제든 물어보세요.</p>
                  <p className="text-yellow-400 text-xs mb-6">
                    💡 하루에 {usageLimitManager.getDailyLimit()}번까지 무료로 질문할 수 있습니다!
                  </p>

                  {/* Example Questions */}
                  {!usage.isLimited && (
                    <div className="text-left">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">{texts.examples}:</h4>
                      <div className="space-y-2">
                        {texts.exampleQuestions.map((question, index) => (
                          <button
                            key={index}
                            onClick={() => handleExampleClick(question)}
                            disabled={usage.isLimited}
                            className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "user" ? "bg-purple-500 ml-2" : "bg-blue-500 mr-2"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.role === "user" ? "bg-purple-500 text-white" : "bg-gray-800 text-gray-100"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-800 px-4 py-3 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                        <span className="text-sm text-gray-300">답변을 생성하고 있습니다...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-start">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mr-2">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-red-500/20 border border-red-500/30 px-4 py-3 rounded-2xl">
                      <div className="text-sm text-red-300">죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Form */}
          <form onSubmit={onSubmit} className="flex space-x-2 pt-4 border-t border-gray-700">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder={usage.isLimited ? "일일 질문 한도에 도달했습니다" : texts.placeholder}
              disabled={isLoading || usage.isLimited}
              className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 disabled:opacity-50"
            />
            <Button
              type="submit"
              disabled={!canSubmit}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>

          {/* Usage Info */}
          {!usage.isLimited && usage.count > 0 && (
            <div className="pt-2 text-center">
              <p className="text-xs text-gray-500">
                오늘 {usage.count}/{usageLimitManager.getDailyLimit()}번 질문하셨습니다
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AIChatModal
