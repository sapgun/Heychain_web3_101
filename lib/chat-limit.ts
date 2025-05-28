// 채팅 사용량 제한 관리

export interface UserLimits {
  dailyQuestions: number
  lastResetDate: string
  isPremium: boolean
  registeredAt?: number
  email?: string
}

const DAILY_FREE_LIMIT = 5
const STORAGE_KEY = "heychain_user_limits"

class ChatLimitManager {
  private getUserLimits(): UserLimits {
    if (typeof window === "undefined") {
      return {
        dailyQuestions: 0,
        lastResetDate: new Date().toISOString().split("T")[0],
        isPremium: false,
      }
    }

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const defaultLimits: UserLimits = {
        dailyQuestions: 0,
        lastResetDate: new Date().toISOString().split("T")[0],
        isPremium: false,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultLimits))
      return defaultLimits
    }

    const limits: UserLimits = JSON.parse(stored)

    // 날짜가 바뀌었다면 카운트 리셋
    const today = new Date().toISOString().split("T")[0]
    if (limits.lastResetDate !== today) {
      limits.dailyQuestions = 0
      limits.lastResetDate = today
      this.saveLimits(limits)
    }

    return limits
  }

  private saveLimits(limits: UserLimits): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(limits))
    }
  }

  canMakeQuery(): boolean {
    const limits = this.getUserLimits()
    return limits.isPremium || limits.dailyQuestions < DAILY_FREE_LIMIT
  }

  getRemainingQueries(): number {
    const limits = this.getUserLimits()
    if (limits.isPremium) return -1 // 무제한
    return Math.max(0, DAILY_FREE_LIMIT - limits.dailyQuestions)
  }

  incrementQueryCount(): void {
    const limits = this.getUserLimits()
    if (!limits.isPremium) {
      limits.dailyQuestions += 1
      this.saveLimits(limits)
    }
  }

  isRegistered(): boolean {
    const limits = this.getUserLimits()
    return !!limits.email
  }

  registerUser(email: string): void {
    const limits = this.getUserLimits()
    limits.email = email
    limits.registeredAt = Date.now()
    this.saveLimits(limits)
  }

  setPremium(isPremium: boolean): void {
    const limits = this.getUserLimits()
    limits.isPremium = isPremium
    this.saveLimits(limits)
  }

  getUsageStats() {
    const limits = this.getUserLimits()
    return {
      dailyQuestions: limits.dailyQuestions,
      remainingQueries: this.getRemainingQueries(),
      isPremium: limits.isPremium,
      isRegistered: this.isRegistered(),
      nextResetTime: this.getNextResetTime(),
    }
  }

  private getNextResetTime(): Date {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)
    return tomorrow
  }

  getTimeUntilReset(): string {
    const nextReset = this.getNextResetTime()
    const now = new Date()
    const diff = nextReset.getTime() - now.getTime()

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 0) {
      return `${hours}시간 ${minutes}분`
    }
    return `${minutes}분`
  }
}

export const chatLimitManager = new ChatLimitManager()
