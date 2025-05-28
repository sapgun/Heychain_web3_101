import type { NextRequest } from "next/server"

// 뉴스 아이템 타입 정의
interface NewsItem {
  id: string
  chain: string
  title: string
  description: string
  url: string
  publishedAt: string
  source: string
  category: string
  imageUrl?: string
}

// 체인 키워드 매핑
const chainKeywords = {
  ethereum: ["ethereum", "eth", "이더리움"],
  bitcoin: ["bitcoin", "btc", "비트코인"],
  solana: ["solana", "sol", "솔라나"],
  polygon: ["polygon", "matic", "폴리곤"],
  arbitrum: ["arbitrum", "arb", "아비트럼"],
  optimism: ["optimism", "op", "옵티미즘"],
  avalanche: ["avalanche", "avax", "아발란체"],
  cardano: ["cardano", "ada", "카르다노"],
  polkadot: ["polkadot", "dot", "폴카닷"],
  chainlink: ["chainlink", "link", "체인링크"],
}

// 뉴스에서 체인 추출 함수
function extractChainFromNews(title: string, description: string): string {
  const text = (title + " " + description).toLowerCase()

  for (const [chain, keywords] of Object.entries(chainKeywords)) {
    if (keywords.some((keyword) => text.includes(keyword))) {
      return chain.charAt(0).toUpperCase() + chain.slice(1)
    }
  }

  return "Crypto"
}

// 카테고리 추출 함수
function extractCategory(title: string, description: string): string {
  const text = (title + " " + description).toLowerCase()

  if (text.includes("defi") || text.includes("디파이") || text.includes("lending") || text.includes("yield")) {
    return "DeFi"
  }
  if (text.includes("nft") || text.includes("opensea") || text.includes("collectible")) {
    return "NFT"
  }
  if (text.includes("regulation") || text.includes("sec") || text.includes("규제")) {
    return "규제"
  }
  if (text.includes("partnership") || text.includes("collaboration") || text.includes("파트너십")) {
    return "파트너십"
  }
  if (text.includes("upgrade") || text.includes("update") || text.includes("업그레이드")) {
    return "업데이트"
  }
  if (text.includes("price") || text.includes("market") || text.includes("가격") || text.includes("시장")) {
    return "시장"
  }

  return "일반"
}

// NewsAPI를 사용한 암호화폐 뉴스 가져오기
async function fetchCryptoNews(): Promise<NewsItem[]> {
  try {
    // NewsAPI 무료 버전 사용 (실제로는 API 키가 필요)
    const apiKey = process.env.NEWS_API_KEY || "demo" // 환경변수에서 API 키 가져오기

    // 여러 소스에서 뉴스 가져오기
    const sources = [
      // CoinDesk API (무료)
      "https://api.coindesk.com/v1/news/articles.json",
      // CryptoNews API 대안으로 일반 뉴스 API 사용
      `https://newsapi.org/v2/everything?q=cryptocurrency OR blockchain OR bitcoin OR ethereum&language=en&sortBy=publishedAt&pageSize=20&apiKey=${apiKey}`,
    ]

    // 더미 데이터 (실제 API 연동 전까지 사용)
    const dummyNews: NewsItem[] = [
      {
        id: "1",
        chain: "Ethereum",
        title: "이더리움 2.0 스테이킹 보상률 4.5% 상승",
        description: "이더리움 네트워크의 스테이킹 참여율 증가로 연간 보상률이 4.5% 상승했습니다.",
        url: "https://ethereum.org",
        publishedAt: new Date().toISOString(),
        source: "Ethereum Foundation",
        category: "스테이킹",
      },
      {
        id: "2",
        chain: "Bitcoin",
        title: "비트코인 ETF 승인으로 기관 투자 급증",
        description: "SEC의 비트코인 ETF 승인 이후 기관 투자자들의 비트코인 투자가 크게 증가했습니다.",
        url: "https://bitcoin.org",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: "CoinDesk",
        category: "투자",
      },
      {
        id: "3",
        chain: "Solana",
        title: "솔라나 생태계 DeFi TVL 50억 달러 돌파",
        description: "솔라나 블록체인의 DeFi 프로토콜들의 총 예치 자산이 50억 달러를 돌파했습니다.",
        url: "https://solana.com",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: "Solana Labs",
        category: "DeFi",
      },
      {
        id: "4",
        chain: "Polygon",
        title: "폴리곤, 새로운 zkEVM 메인넷 출시",
        description: "폴리곤이 영지식 증명 기반의 새로운 zkEVM 메인넷을 공식 출시했습니다.",
        url: "https://polygon.technology",
        publishedAt: new Date(Date.now() - 10800000).toISOString(),
        source: "Polygon Team",
        category: "기술",
      },
      {
        id: "5",
        chain: "Arbitrum",
        title: "아비트럼 원, 월간 거래량 100억 달러 달성",
        description: "아비트럼 원 네트워크의 월간 거래량이 사상 최초로 100억 달러를 달성했습니다.",
        url: "https://arbitrum.io",
        publishedAt: new Date(Date.now() - 14400000).toISOString(),
        source: "Arbitrum Foundation",
        category: "성장",
      },
      {
        id: "6",
        chain: "Cardano",
        title: "카르다노, 새로운 스마트 컨트랙트 업그레이드",
        description: "카르다노가 Plutus V3 스마트 컨트랙트 플랫폼의 새로운 업그레이드를 발표했습니다.",
        url: "https://cardano.org",
        publishedAt: new Date(Date.now() - 18000000).toISOString(),
        source: "IOHK",
        category: "업데이트",
      },
      {
        id: "7",
        chain: "Avalanche",
        title: "아발란체, 서브넷 기반 게임 플랫폼 출시",
        description: "아발란체가 서브넷 기술을 활용한 새로운 블록체인 게임 플랫폼을 출시했습니다.",
        url: "https://avax.network",
        publishedAt: new Date(Date.now() - 21600000).toISOString(),
        source: "Ava Labs",
        category: "게임",
      },
      {
        id: "8",
        chain: "Polkadot",
        title: "폴카닷, 새로운 파라체인 슬롯 경매 시작",
        description: "폴카닷 네트워크에서 12번째 파라체인 슬롯 경매가 시작되었습니다.",
        url: "https://polkadot.network",
        publishedAt: new Date(Date.now() - 25200000).toISOString(),
        source: "Web3 Foundation",
        category: "경매",
      },
    ]

    // 실제 API 호출 (현재는 더미 데이터 반환)
    // 실제 구현 시에는 위의 sources를 사용하여 실제 API 호출
    return dummyNews
  } catch (error) {
    console.error("뉴스 가져오기 실패:", error)
    return []
  }
}

// 코인니스 스타일 뉴스 (한국어)
async function fetchKoreanCryptoNews(): Promise<NewsItem[]> {
  // 실제로는 코인니스 API나 다른 한국 암호화폐 뉴스 API 사용
  const koreanNews: NewsItem[] = [
    {
      id: "kr-1",
      chain: "Bitcoin",
      title: "비트코인, 연말 10만 달러 전망 제기",
      description: "주요 투자기관들이 비트코인의 연말 목표가를 10만 달러로 상향 조정했습니다.",
      url: "https://coinness.com",
      publishedAt: new Date().toISOString(),
      source: "코인니스",
      category: "전망",
    },
    {
      id: "kr-2",
      chain: "Ethereum",
      title: "이더리움 현물 ETF 승인 임박, 시장 기대감 고조",
      description: "미국 SEC의 이더리움 현물 ETF 승인이 임박한 것으로 알려져 시장의 기대감이 높아지고 있습니다.",
      url: "https://tokenpost.kr",
      publishedAt: new Date(Date.now() - 1800000).toISOString(),
      source: "토큰포스트",
      category: "ETF",
    },
    {
      id: "kr-3",
      chain: "Ripple",
      title: "리플, SEC와의 법정 분쟁 최종 합의",
      description: "리플이 SEC와의 3년간 법정 분쟁을 최종 합의로 마무리했다고 발표했습니다.",
      url: "https://coinness.com",
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      source: "코인니스",
      category: "규제",
    },
  ]

  return koreanNews
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const language = searchParams.get("lang") || "en"
    const category = searchParams.get("category") || "all"

    let news: NewsItem[] = []

    if (language === "ko") {
      news = await fetchKoreanCryptoNews()
    } else {
      news = await fetchCryptoNews()
    }

    // 카테고리 필터링
    if (category !== "all") {
      news = news.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    }

    // 최신순 정렬
    news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    return Response.json({
      success: true,
      data: news,
      total: news.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("뉴스 API 오류:", error)
    return Response.json(
      {
        success: false,
        error: "뉴스를 가져오는데 실패했습니다.",
        data: [],
      },
      { status: 500 },
    )
  }
}
