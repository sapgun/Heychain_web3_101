// 사용량 제한 관리
export interface UsageLimit {
  count: number
  lastReset: Date
  isLimited: boolean
}

const DAILY_LIMIT = 5
const STORAGE_KEY = "heychain_usage"

export class UsageLimitManager {
  private getStoredUsage(): UsageLimit {
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

  private saveUsage(usage: UsageLimit): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(usage))
    } catch (error) {
      console.error("Failed to save usage data:", error)
    }
  }

  private isNewDay(lastReset: Date): boolean {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const resetDay = new Date(lastReset.getFullYear(), lastReset.getMonth(), lastReset.getDate())
    return today.getTime() > resetDay.getTime()
  }

  getCurrentUsage(): UsageLimit {
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
    const usage = this.getCurrentUsage()
    return usage.count < DAILY_LIMIT
  }

  incrementUsage(): UsageLimit {
    const usage = this.getCurrentUsage()
    const newUsage = {
      ...usage,
      count: usage.count + 1,
      isLimited: usage.count + 1 >= DAILY_LIMIT,
    }
    this.saveUsage(newUsage)
    return newUsage
  }

  getRemainingQuestions(): number {
    const usage = this.getCurrentUsage()
    return Math.max(0, DAILY_LIMIT - usage.count)
  }

  getResetTime(): Date {
    const usage = this.getCurrentUsage()
    const tomorrow = new Date(usage.lastReset)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)
    return tomorrow
  }

  getDailyLimit(): number {
    return DAILY_LIMIT
  }
}

export const usageLimitManager = new UsageLimitManager()
