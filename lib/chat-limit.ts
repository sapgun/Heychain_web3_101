// AI 채팅 사용량 제한 관리
export interface ChatUsage {
  count: number
  lastReset: Date
  isLimited: boolean
}

const DAILY_CHAT_LIMIT = 5
const STORAGE_KEY = "heychain_chat_usage"

export class ChatLimitManager {
  private getStoredUsage(): ChatUsage {
    if (typeof window === "undefined") {
      return { count: 0, lastReset: new Date(), isLimited: false }
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        return { count: 0, lastReset: new Date(), isLimited: false }
      }

      const parsed = JSON.parse(stored)
      return {
        count: parsed.count || 0,
        lastReset: new Date(parsed.lastReset),
        isLimited: parsed.isLimited || false,
      }
    } catch {
      return { count: 0, lastReset: new Date(), isLimited: false }
    }
  }

  private saveUsage(usage: ChatUsage): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(usage))
    } catch (error) {
      console.error("Failed to save chat usage data:", error)
    }
  }

  private isNewDay(lastReset: Date): boolean {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const resetDay = new Date(lastReset.getFullYear(), lastReset.getMonth(), lastReset.getDate())
    return today.getTime() > resetDay.getTime()
  }

  getCurrentUsage(): ChatUsage {
    const usage = this.getStoredUsage()

    // 새로운 날이면 카운트 리셋
    if (this.isNewDay(usage.lastReset)) {
      const resetUsage = {
        count: 0,
        lastReset: new Date(),
        isLimited: false,
      }
      this.saveUsage(resetUsage)
      return resetUsage
    }

    return usage
  }

  canMakeRequest(): boolean {
    // 구독 사용자는 무제한 (나중에 구현)
    // if (userManager.hasActiveSubscription()) {
    //   return true
    // }

    // 토큰이 있으면 사용 가능 (나중에 구현)
    // if (userManager.hasTokens()) {
    //   return true
    // }

    // 무료 사용자는 일일 제한 확인
    const usage = this.getCurrentUsage()
    return usage.count < DAILY_CHAT_LIMIT
  }

  incrementUsage(): ChatUsage {
    // 구독 사용자나 토큰 사용자는 일일 제한을 증가시키지 않음 (나중에 구현)
    // if (userManager.hasActiveSubscription() || userManager.hasTokens()) {
    //   return this.getCurrentUsage()
    // }

    const usage = this.getCurrentUsage()
    const newUsage = {
      ...usage,
      count: usage.count + 1,
      isLimited: usage.count + 1 >= DAILY_CHAT_LIMIT,
    }
    this.saveUsage(newUsage)
    return newUsage
  }

  getRemainingChats(): number {
    // 구독 사용자는 무제한 (나중에 구현)
    // if (userManager.hasActiveSubscription()) {
    //   return Number.POSITIVE_INFINITY
    // }

    // 토큰 사용자는 토큰 수만큼 (나중에 구현)
    // const user = userManager.getUser()
    // if (user && user.tokens > 0) {
    //   return user.tokens
    // }

    // 무료 사용자는 일일 제한
    const usage = this.getCurrentUsage()
    return Math.max(0, DAILY_CHAT_LIMIT - usage.count)
  }

  getResetTime(): Date {
    const usage = this.getCurrentUsage()
    const tomorrow = new Date(usage.lastReset)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)
    return tomorrow
  }

  getDailyLimit(): number {
    return DAILY_CHAT_LIMIT
  }
}

export const chatLimitManager = new ChatLimitManager()
