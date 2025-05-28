"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Mail, User, Eye, EyeOff, CheckCircle } from "lucide-react"
import { userManager } from "@/lib/subscription"

interface SignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

export function SignupModal({ open, onOpenChange, onSuccess }: SignupModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState<"form" | "success">("form")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요"
    }

    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요"
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요"
    } else if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // 실제로는 서버 API 호출
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // 사용자 생성
      const user = userManager.createUser(formData.email, formData.name)
      console.log("User created:", user)

      setStep("success")

      // 2초 후 자동으로 모달 닫기
      setTimeout(() => {
        onSuccess()
        onOpenChange(false)
        setStep("form")
        setFormData({ email: "", name: "", password: "", confirmPassword: "" })
      }, 2000)
    } catch (error) {
      console.error("Signup error:", error)
      setErrors({ general: "회원가입 중 오류가 발생했습니다. 다시 시도해주세요." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (step === "success") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md bg-gray-900 border-green-500/20">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">회원가입 완료!</h3>
            <p className="text-gray-400 text-sm mb-4">
              환영합니다! 이제 토큰을 구매하거나 구독을 통해 무제한으로 질문하실 수 있습니다.
            </p>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              🎉 가입 축하 보너스 토큰 3개 지급!
            </Badge>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-900 border-purple-500/20">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-white text-lg">HeyChain 회원가입</DialogTitle>
              <DialogDescription className="text-gray-400 text-sm">
                무제한 질문과 프리미엄 기능을 이용하세요
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.general && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-300 text-sm">{errors.general}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              이메일 주소
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
              />
            </div>
            {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              이름
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
              />
            </div>
            {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              비밀번호
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="8자 이상 입력해주세요"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pr-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-xs">{errors.password}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-300">
              비밀번호 확인
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
            />
            {errors.confirmPassword && <p className="text-red-400 text-xs">{errors.confirmPassword}</p>}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50"
            >
              {isLoading ? "가입 중..." : "회원가입"}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              가입하시면{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                이용약관
              </a>{" "}
              및{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                개인정보처리방침
              </a>
              에 동의하는 것으로 간주됩니다.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SignupModal
