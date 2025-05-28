"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Send, Sparkles, Bot, User, Loader2, AlertCircle } from "lucide-react"
import { chatLimitManager } from "@/lib/chat-limit"
import { ChatLimitModal } from "@/components/chat-limit-modal"

interface AIChatModalProps {
  language: "ko" | "en"
  searchQuery?: string
}

export function AIChatModal({ language, searchQuery }: AIChatModalProps) {
  const [open, setOpen] = useState(false)
  const [showLimitModal, setShowLimitModal] = useState(false)
  const [chatUsage, setChatUsage] = useState(chatLimitManager.getCurrentUsage())
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialInput: searchQuery || "",
    onError: (error) => {
      console.error("Chat error:", error)
    },
    onFinish: () => {
      // 채팅 완료 후 사용량 증가
      const newUsage = chatLimitManager.incrementUsage()
      setChatUsage(newUsage)
    },
  })

  const texts = {
    ko: {
      title: "AI 어시스턴트",
      description: "Web3에 대한 모든 질문에 답변해드립니다",
      placeholder: "Web3에 대해 궁금한 것을 물어보세요...",
      button: "AI에게 질문하기",
      welcome: "안녕하세요! Web3에 대해 궁금한 것이 있으시면 언제든 물어보세요.",
      error: "오류가 발생했습니다. 다시 시도해주세요.",
      limitReached: "오늘의 질문 한도에 도달했습니다.",
    },
    en: {
      title: "AI Assistant",
      description: "Ask me anything about Web3",
      placeholder: "Ask me anything about Web3...",
      button: "Ask AI",
      welcome: "Hello! Feel free to ask me anything about Web3.",
      error: "An error occurred. Please try again.",
      limitReached: "You've reached today's question limit.",
    },
  }

  const currentTexts = texts[language]

  // 사용량 업데이트
  useEffect(() => {
    setChatUsage(chatLimitManager.getCurrentUsage())
  }, [open])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [messages])

  // 커스텀 submit 핸들러
  const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 사용량 체크
    if (!chatLimitManager.canMakeRequest()) {
      setShowLimitModal(true)
      return
    }

    // 정상적으로 제출
    handleSubmit(e)
  }

  const remainingChats = chatLimitManager.getRemainingChats()
  const resetTime = chatLimitManager.getResetTime()

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white min-h-[44px]">
            <Sparkles className="w-4 h-4 mr-2" />
            {currentTexts.button}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-[85vh] bg-gray-900 border-purple-500/20 flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-blue-400" />
                <div>
                  <DialogTitle className="text-white">{currentTexts.title}</DialogTitle>
                  <DialogDescription className="text-gray-400">{currentTexts.description}</DialogDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  className={`${
                    remainingChats > 2
                      ? "bg-green-500/20 text-green-300 border-green-500/30"
                      : remainingChats > 0
                        ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                  }`}
                >
                  남은 질문: {remainingChats}/5
                </Badge>
              </div>
            </div>
          </DialogHeader>

          {/* 사용량 경고 */}
          {remainingChats <= 2 && remainingChats > 0 && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 flex items-center space-x-2 flex-shrink-0">
              <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <p className="text-yellow-200 text-sm">
                {remainingChats === 1
                  ? "마지막 질문입니다. 더 많은 질문을 원하시면 토큰을 구매하거나 구독하세요."
                  : `${remainingChats}번의 질문이 남았습니다.`}
              </p>
            </div>
          )}

          {/* Chat Messages */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 pr-4">
            <div className="space-y-4 pb-4">
              {messages.length === 0 && (
                <div className="flex items-start space-x-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-blue-200 text-sm">{currentTexts.welcome}</p>
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-800 text-gray-200 border border-gray-700"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                      <span className="text-gray-400 text-sm">답변을 생성하고 있습니다...</span>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-300 text-sm">{currentTexts.error}</p>
                  <p className="text-red-400 text-xs mt-1">{error.message}</p>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Form */}
          <form onSubmit={handleCustomSubmit} className="flex space-x-2 pt-4 border-t border-gray-700 flex-shrink-0">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder={remainingChats > 0 ? currentTexts.placeholder : "질문 한도에 도달했습니다"}
              disabled={isLoading || remainingChats === 0}
              className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 disabled:opacity-50"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim() || remainingChats === 0}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 px-4"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </form>

          {/* Usage Info */}
          <div className="flex-shrink-0 pt-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>AI 어시스턴트가 도움을 드립니다</span>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  GPT-4o
                </Badge>
                {remainingChats === 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowLimitModal(true)}
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 text-xs h-6"
                  >
                    더 많은 질문하기
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 사용량 제한 모달 */}
      <ChatLimitModal
        open={showLimitModal}
        onOpenChange={setShowLimitModal}
        remainingChats={remainingChats}
        resetTime={resetTime}
      />
    </>
  )
}

export default AIChatModal
