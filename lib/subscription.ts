// 구독 및 결제 관련 타입과 유틸리티
export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  currency: string
  period: "monthly" | "yearly"
  features: string[]
  questionsLimit: number | "unlimited"
  popular?: boolean
}

export interface TokenPackage {
  id: string
  name: string
  price: number
  currency: string
  tokens: number
  bonus?: number
  popular?: boolean
}

export interface User {
  id: string
  email: string
  name?: string
  subscription?: {
    planId: string
    status: "active" | "canceled" | "expired"
    expiresAt: Date
  }
  tokens: number
  createdAt: Date
}

// 구독 플랜 정의
export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "무료 플랜",
    price: 0,
    currency: "KRW",
    period: "monthly",
    features: ["하루 5회 질문", "기본 Web3 정보", "커뮤니티 지원"],
    questionsLimit: 5,
  },
  {
    id: "pro-monthly",
    name: "프로 월간",
    price: 9900,
    currency: "KRW",
    period: "monthly",
    features: ["무제한 질문", "우선 응답", "고급 분석", "이메일 지원", "새로운 기능 우선 체험"],
    questionsLimit: "unlimited",
    popular: true,
  },
  {
    id: "pro-yearly",
    name: "프로 연간",
    price: 99000,
    currency: "KRW",
    period: "yearly",
    features: [
      "무제한 질문",
      "우선 응답",
      "고급 분석",
      "이메일 지원",
      "새로운 기능 우선 체험",
      "2개월 무료 (연간 결제 시)",
    ],
    questionsLimit: "unlimited",
  },
]

// 토큰 패키지 정의
export const tokenPackages: TokenPackage[] = [
  {
    id: "tokens-10",
    name: "스타터 팩",
    price: 2900,
    currency: "KRW",
    tokens: 10,
  },
  {
    id: "tokens-50",
    name: "베이직 팩",
    price: 12900,
    currency: "KRW",
    tokens: 50,
    bonus: 5,
    popular: true,
  },
  {
    id: "tokens-100",
    name: "프리미엄 팩",
    price: 24900,
    currency: "KRW",
    tokens: 100,
    bonus: 15,
  },
  {
    id: "tokens-500",
    name: "울트라 팩",
    price: 99000,
    currency: "KRW",
    tokens: 500,
    bonus: 100,
  },
]

// 사용자 관리 클래스
class UserManager {
  private storageKey = "heychain_user"

  getUser(): User | null {
    if (typeof window === "undefined") return null

    try {
      const stored = localStorage.getItem(this.storageKey)
      if (!stored) return null

      const parsed = JSON.parse(stored)
      return {
        ...parsed,
        createdAt: new Date(parsed.createdAt),
        subscription: parsed.subscription
          ? {
              ...parsed.subscription,
              expiresAt: new Date(parsed.subscription.expiresAt),
            }
          : undefined,
      }
    } catch {
      return null
    }
  }

  saveUser(user: User): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(this.storageKey, JSON.stringify(user))
    } catch (error) {
      console.error("Failed to save user data:", error)
    }
  }

  createUser(email: string, name?: string): User {
    const user: User = {
      id: crypto.randomUUID(),
      email,
      name,
      tokens: 0,
      createdAt: new Date(),
    }

    this.saveUser(user)
    return user
  }

  updateUserTokens(tokens: number): User | null {
    const user = this.getUser()
    if (!user) return null

    user.tokens = Math.max(0, user.tokens + tokens)
    this.saveUser(user)
    return user
  }

  updateUserSubscription(planId: string): User | null {
    const user = this.getUser()
    if (!user) return null

    const plan = subscriptionPlans.find((p) => p.id === planId)
    if (!plan) return null

    const expiresAt = new Date()
    if (plan.period === "monthly") {
      expiresAt.setMonth(expiresAt.getMonth() + 1)
    } else {
      expiresAt.setFullYear(expiresAt.getFullYear() + 1)
    }

    user.subscription = {
      planId,
      status: "active",
      expiresAt,
    }

    this.saveUser(user)
    return user
  }

  hasActiveSubscription(): boolean {
    const user = this.getUser()
    if (!user?.subscription) return false

    return user.subscription.status === "active" && user.subscription.expiresAt > new Date()
  }

  canMakeUnlimitedQuestions(): boolean {
    return this.hasActiveSubscription()
  }

  hasTokens(): boolean {
    const user = this.getUser()
    return (user?.tokens || 0) > 0
  }

  useToken(): boolean {
    const user = this.getUser()
    if (!user || user.tokens <= 0) return false

    user.tokens -= 1
    this.saveUser(user)
    return true
  }
}

export const userManager = new UserManager()

// 유틸리티 함수들
export function formatPrice(price: number, currency = "KRW"): string {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency,
  }).format(price)
}

export function getPlanFeatures(planId: string): string[] {
  const plan = subscriptionPlans.find((p) => p.id === planId)
  return plan?.features || []
}

export function canUserMakeQuestion(): {
  canAsk: boolean
  reason?: "daily_limit" | "no_tokens" | "no_subscription"
  suggestion?: "buy_tokens" | "subscribe" | "wait"
} {
  const user = userManager.getUser()

  // 구독 사용자는 무제한
  if (userManager.canMakeUnlimitedQuestions()) {
    return { canAsk: true }
  }

  // 토큰이 있으면 사용 가능
  if (userManager.hasTokens()) {
    return { canAsk: true }
  }

  // 비회원이거나 토큰/구독이 없는 경우
  if (!user) {
    return {
      canAsk: false,
      reason: "daily_limit",
      suggestion: "subscribe",
    }
  }

  return {
    canAsk: false,
    reason: "no_tokens",
    suggestion: "buy_tokens",
  }
}
