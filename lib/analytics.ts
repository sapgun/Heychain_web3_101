// Analytics tracking utilities
export interface ChatAnalytics {
  id: string
  timestamp: Date
  question: string
  responseTime: number
  tokenUsage?: {
    prompt: number
    completion: number
    total: number
  }
  userAgent?: string
  sessionId: string
  category?: string
  satisfied?: boolean
  isLimitedUser?: boolean // 추가
  dailyQuestionCount?: number // 추가
}

export interface PopularQuestion {
  question: string
  count: number
  lastAsked: Date
  avgResponseTime: number
  category?: string
}

export interface UsageStats {
  totalQuestions: number
  totalTokens: number
  avgResponseTime: number
  questionsToday: number
  questionsThisWeek: number
  questionsThisMonth: number
  topQuestions: PopularQuestion[]
  categoryBreakdown: Record<string, number>
}

// Simple in-memory storage for demo (replace with actual database in production)
class AnalyticsStore {
  private chatLogs: ChatAnalytics[] = []
  private questionCounts: Map<string, PopularQuestion> = new Map()

  logChat(analytics: Omit<ChatAnalytics, "id" | "timestamp">) {
    const chatLog: ChatAnalytics = {
      ...analytics,
      id: crypto.randomUUID(),
      timestamp: new Date(),
    }

    this.chatLogs.push(chatLog)
    this.updateQuestionCount(analytics.question, analytics.responseTime, analytics.category)

    // Keep only last 1000 entries in memory
    if (this.chatLogs.length > 1000) {
      this.chatLogs = this.chatLogs.slice(-1000)
    }

    return chatLog
  }

  private updateQuestionCount(question: string, responseTime: number, category?: string) {
    const normalizedQuestion = this.normalizeQuestion(question)
    const existing = this.questionCounts.get(normalizedQuestion)

    if (existing) {
      existing.count++
      existing.lastAsked = new Date()
      existing.avgResponseTime = (existing.avgResponseTime + responseTime) / 2
    } else {
      this.questionCounts.set(normalizedQuestion, {
        question: normalizedQuestion,
        count: 1,
        lastAsked: new Date(),
        avgResponseTime: responseTime,
        category,
      })
    }
  }

  private normalizeQuestion(question: string): string {
    // Normalize similar questions to group them together
    return question.toLowerCase().replace(/[?!.]/g, "").replace(/\s+/g, " ").trim()
  }

  getUsageStats(): UsageStats {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    const questionsToday = this.chatLogs.filter((log) => log.timestamp >= today).length
    const questionsThisWeek = this.chatLogs.filter((log) => log.timestamp >= weekAgo).length
    const questionsThisMonth = this.chatLogs.filter((log) => log.timestamp >= monthAgo).length

    const totalTokens = this.chatLogs.reduce((sum, log) => sum + (log.tokenUsage?.total || 0), 0)

    const avgResponseTime =
      this.chatLogs.length > 0
        ? this.chatLogs.reduce((sum, log) => sum + log.responseTime, 0) / this.chatLogs.length
        : 0

    const topQuestions = Array.from(this.questionCounts.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)

    const categoryBreakdown: Record<string, number> = {}
    this.chatLogs.forEach((log) => {
      if (log.category) {
        categoryBreakdown[log.category] = (categoryBreakdown[log.category] || 0) + 1
      }
    })

    return {
      totalQuestions: this.chatLogs.length,
      totalTokens,
      avgResponseTime,
      questionsToday,
      questionsThisWeek,
      questionsThisMonth,
      topQuestions,
      categoryBreakdown,
    }
  }

  getRecentChats(limit = 50): ChatAnalytics[] {
    return this.chatLogs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, limit)
  }
}

export const analyticsStore = new AnalyticsStore()

// Utility functions
export function generateSessionId(): string {
  return crypto.randomUUID()
}

export function categorizeQuestion(question: string): string {
  const questionLower = question.toLowerCase()

  if (
    questionLower.includes("메타마스크") ||
    questionLower.includes("metamask") ||
    questionLower.includes("지갑") ||
    questionLower.includes("wallet")
  ) {
    return "지갑 & 신원"
  }
  if (
    questionLower.includes("defi") ||
    questionLower.includes("디파이") ||
    questionLower.includes("유동성") ||
    questionLower.includes("스왑")
  ) {
    return "DeFi"
  }
  if (questionLower.includes("nft") || questionLower.includes("민팅") || questionLower.includes("opensea")) {
    return "NFT"
  }
  if (questionLower.includes("dao") || questionLower.includes("거버넌스") || questionLower.includes("투표")) {
    return "DAO"
  }
  if (
    questionLower.includes("보안") ||
    questionLower.includes("해킹") ||
    questionLower.includes("피싱") ||
    questionLower.includes("2fa")
  ) {
    return "보안"
  }
  if (questionLower.includes("가스") || questionLower.includes("수수료") || questionLower.includes("트랜잭션")) {
    return "블록체인 기초"
  }
  if (
    questionLower.includes("레이어2") ||
    questionLower.includes("layer 2") ||
    questionLower.includes("롤업") ||
    questionLower.includes("arbitrum") ||
    questionLower.includes("optimism")
  ) {
    return "Layer 2"
  }

  return "기타"
}

export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`
  return `${(ms / 60000).toFixed(1)}m`
}

export function formatNumber(num: number): string {
  if (num < 1000) return num.toString()
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K`
  return `${(num / 1000000).toFixed(1)}M`
}
