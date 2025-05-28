// 구독 관리 시스템

export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  features: string[]
  queryLimit: number // -1은 무제한
  recommended?: boolean
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "무료 플랜",
    price: 0,
    queryLimit: 5,
    features: ["하루 5회 AI 질문", "기본 Web3 가이드 접근", "커뮤니티 지원"],
  },
  {
    id: "basic",
    name: "베이직",
    price: 9900,
    queryLimit: 100,
    features: [
      "하루 100회 AI 질문",
      "모든 Web3 가이드 무제한 접근",
      "실시간 뉴스 알림",
      "개인화된 학습 추천",
      "우선 고객 지원",
    ],
    recommended: true,
  },
  {
    id: "premium",
    name: "프리미엄",
    price: 19900,
    queryLimit: -1,
    features: [
      "무제한 AI 질문",
      "고급 분석 및 인사이트",
      "독점 콘텐츠 접근",
      "1:1 전문가 상담 (월 1회)",
      "API 접근 권한",
      "24/7 VIP 지원",
    ],
  },
]

export interface TokenPack {
  id: string
  name: string
  tokens: number
  price: number
  bonus?: number
}

export const tokenPacks: TokenPack[] = [
  {
    id: "small",
    name: "스몰 팩",
    tokens: 20,
    price: 3900,
  },
  {
    id: "medium",
    name: "미디엄 팩",
    tokens: 50,
    price: 8900,
    bonus: 5,
  },
  {
    id: "large",
    name: "라지 팩",
    tokens: 100,
    price: 15900,
    bonus: 15,
  },
]

class SubscriptionManager {
  private getCurrentSubscription(): SubscriptionPlan {
    if (typeof window === "undefined") {
      return subscriptionPlans[0] // 무료 플랜
    }

    const stored = localStorage.getItem("heychain_subscription")
    if (!stored) {
      return subscriptionPlans[0]
    }

    const data = JSON.parse(stored)
    return subscriptionPlans.find((plan) => plan.id === data.planId) || subscriptionPlans[0]
  }

  private getTokenBalance(): number {
    if (typeof window === "undefined") return 0

    const stored = localStorage.getItem("heychain_tokens")
    return stored ? Number.parseInt(stored) : 0
  }

  subscribeToPlan(planId: string): void {
    const plan = subscriptionPlans.find((p) => p.id === planId)
    if (!plan) return

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "heychain_subscription",
        JSON.stringify({
          planId,
          subscribedAt: Date.now(),
          expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30일 후
        }),
      )
    }
  }

  purchaseTokens(packId: string): void {
    const pack = tokenPacks.find((p) => p.id === packId)
    if (!pack) return

    const currentTokens = this.getTokenBalance()
    const newTokens = currentTokens + pack.tokens + (pack.bonus || 0)

    if (typeof window !== "undefined") {
      localStorage.setItem("heychain_tokens", newTokens.toString())
    }
  }

  canMakeQuery(): boolean {
    const subscription = this.getCurrentSubscription()
    const tokens = this.getTokenBalance()

    if (subscription.queryLimit === -1) return true // 무제한
    if (tokens > 0) return true // 토큰 있음

    // 일일 제한 확인은 ChatLimitManager에서 처리
    return false
  }

  useQuery(): void {
    const subscription = this.getCurrentSubscription()
    const tokens = this.getTokenBalance()

    // 무제한 플랜이면 토큰 차감 안 함
    if (subscription.queryLimit === -1) return

    // 토큰이 있으면 토큰 우선 사용
    if (tokens > 0) {
      if (typeof window !== "undefined") {
        localStorage.setItem("heychain_tokens", (tokens - 1).toString())
      }
      return
    }

    // 나머지는 ChatLimitManager에서 처리
  }

  getStatus() {
    return {
      subscription: this.getCurrentSubscription(),
      tokens: this.getTokenBalance(),
      canQuery: this.canMakeQuery(),
    }
  }
}

export const subscriptionManager = new SubscriptionManager()
