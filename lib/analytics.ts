// 분석 및 사용량 추적을 위한 유틸리티

export interface ChatLog {
  question: string
  responseTime: number
  sessionId: string
  category: string
  timestamp: number
  tokenUsage?: {
    prompt: number
    completion: number
    total: number
  }
}

export interface AnalyticsData {
  totalQuestions: number
  averageResponseTime: number
  popularCategories: { [key: string]: number }
  dailyUsage: { [key: string]: number }
  recentChats: ChatLog[]
}

class AnalyticsStore {
  private chatLogs: ChatLog[] = []

  logChat(log: Omit<ChatLog, "timestamp">) {
    const chatLog: ChatLog = {
      ...log,
      timestamp: Date.now(),
    }
    this.chatLogs.push(chatLog)

    // 최근 1000개만 메모리에 보관
    if (this.chatLogs.length > 1000) {
      this.chatLogs = this.chatLogs.slice(-1000)
    }
  }

  getAnalytics(): AnalyticsData {
    const now = Date.now()
    const oneDayAgo = now - 24 * 60 * 60 * 1000
    const recentLogs = this.chatLogs.filter((log) => log.timestamp > oneDayAgo)

    const totalQuestions = recentLogs.length
    const averageResponseTime =
      totalQuestions > 0 ? recentLogs.reduce((sum, log) => sum + log.responseTime, 0) / totalQuestions : 0

    const popularCategories: { [key: string]: number } = {}
    const dailyUsage: { [key: string]: number } = {}

    recentLogs.forEach((log) => {
      // 카테고리별 집계
      popularCategories[log.category] = (popularCategories[log.category] || 0) + 1

      // 일별 사용량 집계
      const date = new Date(log.timestamp).toISOString().split("T")[0]
      dailyUsage[date] = (dailyUsage[date] || 0) + 1
    })

    return {
      totalQuestions,
      averageResponseTime,
      popularCategories,
      dailyUsage,
      recentChats: recentLogs.slice(-50), // 최근 50개만
    }
  }
}

export const analyticsStore = new AnalyticsStore()

// 질문 카테고리 분류 함수
export function categorizeQuestion(question: string): string {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("지갑") || lowerQuestion.includes("메타마스크") || lowerQuestion.includes("wallet")) {
    return "지갑"
  }
  if (lowerQuestion.includes("nft") || lowerQuestion.includes("대체불가토큰")) {
    return "NFT"
  }
  if (lowerQuestion.includes("defi") || lowerQuestion.includes("디파이") || lowerQuestion.includes("탈중앙화금융")) {
    return "DeFi"
  }
  if (lowerQuestion.includes("dao") || lowerQuestion.includes("다오")) {
    return "DAO"
  }
  if (lowerQuestion.includes("이더리움") || lowerQuestion.includes("ethereum")) {
    return "이더리움"
  }
  if (lowerQuestion.includes("비트코인") || lowerQuestion.includes("bitcoin")) {
    return "비트코인"
  }
  if (lowerQuestion.includes("스마트컨트랙트") || lowerQuestion.includes("smart contract")) {
    return "스마트컨트랙트"
  }
  if (lowerQuestion.includes("layer2") || lowerQuestion.includes("레이어2")) {
    return "Layer2"
  }
  if (lowerQuestion.includes("토큰") || lowerQuestion.includes("token")) {
    return "토큰"
  }

  return "일반"
}
