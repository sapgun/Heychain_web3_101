"use client"

import { useState } from "react"
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
import { MessageCircle, Send, Bot, User, Sparkles, Loader2 } from "lucide-react"
import { generateSessionId } from "@/lib/analytics"

interface AIChatModalProps {
  language?: "ko" | "en"
}

export function AIChatModal({ language = "ko" }: AIChatModalProps) {
  const [open, setOpen] = useState(false)
  const [sessionId] = useState(() => generateSessionId())

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    headers: {
      "x-session-id": sessionId,
    },
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  const texts = {
    title: language === "ko" ? "AI 어시스턴트" : "AI Assistant",
    subtitle: language === "ko" ? "Web3에 대해 무엇이든 물어보세요" : "Ask anything about Web3",
    placeholder: language === "ko" ? "Web3에 대해 질문해보세요..." : "Ask about Web3...",
    askAI: language === "ko" ? "AI에게 질문하기" : "Ask AI",
    examples: language === "ko" ? "예시 질문" : "Example Questions",
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
    handleInputChange({ target: { value: question } } as any)
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
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">온라인</Badge>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-full">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-medium mb-2">안녕하세요! 👋</h3>
                  <p className="text-gray-400 text-sm mb-6">Web3에 대해 궁금한 것이 있으시면 언제든 물어보세요.</p>

                  {/* Example Questions */}
                  <div className="text-left">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">{texts.examples}:</h4>
                    <div className="space-y-2">
                      {texts.exampleQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleExampleClick(question)}
                          className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-gray-300 hover:text-white"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
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
          <form onSubmit={handleSubmit} className="flex space-x-2 pt-4 border-t border-gray-700">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder={texts.placeholder}
              disabled={isLoading}
              className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AIChatModal
