"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift, Sparkles, Crown, CheckCircle } from "lucide-react"
import { chatLimitManager } from "@/lib/chat-limit"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function SignupModal({ isOpen, onClose, onSuccess }: SignupModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)

    // 시뮬레이션: 실제로는 서버에 이메일 등록
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // 회원가입 처리
    chatLimitManager.registerUser(email)

    setIsLoading(false)
    setIsSuccess(true)

    // 2초 후 성공 처리
    setTimeout(() => {
      onSuccess()
      onClose()
      setIsSuccess(false)
      setEmail("")
    }, 2000)
  }

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md bg-gray-900 border-purple-500/20">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">회원가입 완료!</h3>
            <p className="text-gray-300 mb-4">HeyChain의 모든 기능을 이용해보세요.</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-gray-900 border-purple-500/20 mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">더 많은 기능을 무료로!</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 혜택 안내 */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">회원가입 혜택</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                <span>북마크 및 학습 진행률 저장</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                <span>개인화된 학습 추천</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                <span>뉴스레터 및 업데이트 알림</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                <span>커뮤니티 참여 권한</span>
              </li>
            </ul>
          </div>

          {/* 이메일 입력 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">이메일 주소</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">이메일은 안전하게 보호되며, 스팸 메일은 발송하지 않습니다.</p>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-sm lg:text-base"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>가입 중...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4" />
                  <span>무료 회원가입</span>
                </div>
              )}
            </Button>
          </form>

          {/* 프리미엄 플랜 유도 */}
          <div className="border-t border-gray-700 pt-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">더 많은 기능이 필요하다면?</p>
              <Button
                variant="outline"
                className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                onClick={() => {
                  // 프리미엄 모달 열기 로직
                }}
              >
                <Crown className="w-4 h-4 mr-2" />
                프리미엄 플랜 보기
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
