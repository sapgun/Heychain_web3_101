"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Zap, Check, CreditCard, Coins } from "lucide-react"
import { subscriptionPlans, tokenPackages, formatPrice, userManager } from "@/lib/subscription"

interface SubscriptionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
  defaultTab?: "subscription" | "tokens"
}

export function SubscriptionModal({
  open,
  onOpenChange,
  onSuccess,
  defaultTab = "subscription",
}: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedTokens, setSelectedTokens] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleSubscribe = async (planId: string) => {
    setIsLoading(true)
    setSelectedPlan(planId)

    try {
      // 실제로는 결제 API 호출
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // 구독 업데이트
      userManager.updateUserSubscription(planId)

      alert("구독이 완료되었습니다! 이제 무제한으로 질문하실 수 있습니다.")
      onSuccess()
      onOpenChange(false)
    } catch (error) {
      console.error("Subscription error:", error)
      alert("결제 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsLoading(false)
      setSelectedPlan(null)
    }
  }

  const handleBuyTokens = async (packageId: string) => {
    setIsLoading(true)
    setSelectedTokens(packageId)

    try {
      // 실제로는 결제 API 호출
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const tokenPackage = tokenPackages.find((p) => p.id === packageId)
      if (tokenPackage) {
        const totalTokens = tokenPackage.tokens + (tokenPackage.bonus || 0)
        userManager.updateUserTokens(totalTokens)

        alert(`토큰 ${totalTokens}개가 충전되었습니다!`)
        onSuccess()
        onOpenChange(false)
      }
    } catch (error) {
      console.error("Token purchase error:", error)
      alert("결제 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsLoading(false)
      setSelectedTokens(null)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-purple-500/20 overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-white text-xl">프리미엄으로 업그레이드</DialogTitle>
              <DialogDescription className="text-gray-400">무제한 질문과 프리미엄 기능을 이용하세요</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 bg-gray-800">
            <TabsTrigger value="subscription" className="flex items-center">
              <Crown className="w-4 h-4 mr-2" />
              구독 플랜
            </TabsTrigger>
            <TabsTrigger value="tokens" className="flex items-center">
              <Coins className="w-4 h-4 mr-2" />
              토큰 구매
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscription" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">월간 또는 연간 구독으로 무제한 이용</h3>
              <p className="text-gray-400 text-sm">언제든지 취소 가능하며, 첫 7일은 무료로 체험하실 수 있습니다</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {subscriptionPlans
                .filter((plan) => plan.id !== "free")
                .map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all ${
                      plan.popular ? "ring-2 ring-purple-500/50" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">인기</Badge>
                      </div>
                    )}

                    <CardHeader className="text-center">
                      <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-3xl font-bold text-white">{formatPrice(plan.price)}</span>
                        <span className="text-gray-400">/{plan.period === "monthly" ? "월" : "년"}</span>
                      </div>
                      {plan.period === "yearly" && (
                        <Badge variant="outline" className="border-green-500/30 text-green-300">
                          2개월 무료
                        </Badge>
                      )}
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handleSubscribe(plan.id)}
                        disabled={isLoading}
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                            : "bg-gray-700 hover:bg-gray-600"
                        } ${selectedPlan === plan.id ? "opacity-50" : ""}`}
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        {selectedPlan === plan.id ? "결제 중..." : "구독하기"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="tokens" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">필요한 만큼만 토큰 구매</h3>
              <p className="text-gray-400 text-sm">토큰 1개 = 질문 1회, 토큰은 만료되지 않습니다</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tokenPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all ${
                    pkg.popular ? "ring-2 ring-blue-500/50" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">추천</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-white text-lg">{pkg.name}</CardTitle>
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-2xl font-bold text-white">{formatPrice(pkg.price)}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span className="text-xl font-bold text-white">{pkg.tokens}</span>
                        <span className="text-gray-400">토큰</span>
                      </div>
                      {pkg.bonus && (
                        <Badge variant="outline" className="border-yellow-500/30 text-yellow-300">
                          +{pkg.bonus} 보너스
                        </Badge>
                      )}
                    </div>

                    <div className="text-center text-sm text-gray-400">
                      <p>토큰당 {formatPrice(pkg.price / (pkg.tokens + (pkg.bonus || 0)))}</p>
                    </div>

                    <Button
                      onClick={() => handleBuyTokens(pkg.id)}
                      disabled={isLoading}
                      className={`w-full bg-blue-600 hover:bg-blue-700 ${selectedTokens === pkg.id ? "opacity-50" : ""}`}
                    >
                      <Coins className="w-4 h-4 mr-2" />
                      {selectedTokens === pkg.id ? "구매 중..." : "구매하기"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="text-blue-300 font-medium mb-1">토큰 사용 안내</h4>
                  <ul className="text-sm text-blue-200 space-y-1">
                    <li>• 토큰 1개로 AI에게 질문 1회 가능</li>
                    <li>• 토큰은 만료되지 않으며 언제든 사용 가능</li>
                    <li>• 구독 중에는 토큰을 사용하지 않음</li>
                    <li>• 환불은 구매 후 7일 이내 가능</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500">
            안전한 결제를 위해 토스페이먼츠를 사용합니다. 결제 정보는 암호화되어 보호됩니다.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SubscriptionModal
