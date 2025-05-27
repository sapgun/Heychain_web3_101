import { web3Data } from "@/app/data/web3-data"

// 인기 검색어 (실제로는 서버에서 분석하거나 API로 가져올 수 있음)
export const popularSearches = {
  ko: ["메타마스크", "NFT", "이더리움", "지갑", "DeFi", "레이어2", "스테이킹"],
  en: ["MetaMask", "NFT", "Ethereum", "Wallet", "DeFi", "Layer 2", "Staking"],
}

// 검색 결과 타입
export interface SearchResult {
  id: string
  question: string
  answer: string
  categoryName: string
  categoryId: number
  itemIndex: number
  relevance: number
}

// 검색 함수
export function searchWeb3Data(searchTerm: string, language: "ko" | "en" = "ko"): SearchResult[] {
  if (!searchTerm.trim()) return []

  const term = searchTerm.toLowerCase()
  const results: SearchResult[] = []

  const data = language === "ko" ? web3Data : web3Data // 영어 버전 데이터로 변경 필요

  data.forEach((category, categoryIndex) => {
    category.items.forEach((item, itemIndex) => {
      // 관련성 점수 계산
      let relevance = 0

      // 질문에 검색어가 포함되면 높은 점수
      if (item.question.toLowerCase().includes(term)) {
        relevance += 10
        // 질문 시작 부분에 검색어가 있으면 더 높은 점수
        if (item.question.toLowerCase().startsWith(term)) {
          relevance += 5
        }
      }

      // 답변에 검색어가 포함되면 낮은 점수
      if (item.answer.toLowerCase().includes(term)) {
        relevance += 5
        // 답변 시작 부분에 검색어가 있으면 더 높은 점수
        if (item.answer.toLowerCase().substring(0, 50).includes(term)) {
          relevance += 2
        }
      }

      // 카테고리 이름에 검색어가 포함되면 추가 점수
      if (category.category.toLowerCase().includes(term)) {
        relevance += 3
      }

      // 관련성이 있는 경우만 결과에 추가
      if (relevance > 0) {
        results.push({
          id: item.id,
          question: item.question,
          answer: item.answer,
          categoryName: category.category,
          categoryId: categoryIndex,
          itemIndex: itemIndex,
          relevance: relevance,
        })
      }
    })
  })

  // 관련성 점수로 정렬
  return results.sort((a, b) => b.relevance - a.relevance)
}

// 검색어 자동완성 제안
export function getSuggestions(searchTerm: string, language: "ko" | "en" = "ko", limit = 7): string[] {
  if (!searchTerm.trim()) return []

  const term = searchTerm.toLowerCase()
  const suggestions = new Set<string>()

  const data = language === "ko" ? web3Data : web3Data // 영어 버전 데이터로 변경 필요

  // 카테고리 이름에서 검색
  data.forEach((category) => {
    if (category.category.toLowerCase().includes(term)) {
      suggestions.add(category.category)
    }

    // 질문에서 검색
    category.items.forEach((item) => {
      if (item.question.toLowerCase().includes(term)) {
        suggestions.add(item.question)
      }
    })
  })

  return Array.from(suggestions).slice(0, limit)
}
