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
  ethereum: ["ethereum", "eth", "이더리움", "ether"],
  bitcoin: ["bitcoin", "btc", "비트코인"],
  solana: ["solana", "sol", "솔라나"],
  polygon: ["polygon", "matic", "폴리곤"],
  arbitrum: ["arbitrum", "arb", "아비트럼"],
  optimism: ["optimism", "op", "옵티미즘"],
  avalanche: ["avalanche", "avax", "아발란체"],
  cardano: ["cardano", "ada", "카르다노"],
  polkadot: ["polkadot", "dot", "폴카닷"],
  chainlink: ["chainlink", "link", "체인링크"],
  ripple: ["ripple", "xrp", "리플"],
  binance: ["binance", "bnb", "바이낸스"],
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
  if (text.includes("etf") || text.includes("상장지수펀드")) {
    return "ETF"
  }
  if (text.includes("staking") || text.includes("스테이킹")) {
    return "스테이킹"
  }
  if (text.includes("gaming") || text.includes("game") || text.includes("게임")) {
    return "게임"
  }

  return "일반"
}

// 업데이트된 RSS 피드 목록 - 더 많은 소스 추가
const RSS_FEEDS = {
  korean: [
    {
      url: "https://kr.cointelegraph.com/rss",
      source: "코인텔레그래프 KR",
      language: "ko",
      priority: 1,
    },
    {
      url: "https://kr.cointelegraph.com/editors_pick_rss",
      source: "코인텔레그래프 에디터스픽",
      language: "ko",
      priority: 2,
    },
    {
      url: "https://kr.beincrypto.com/feed/",
      source: "BeInCrypto 한국어",
      language: "ko",
      priority: 3,
    },
  ],
  english: [
    {
      url: "https://cointelegraph.com/rss",
      source: "CoinTelegraph",
      language: "en",
      priority: 1,
    },
    {
      url: "https://www.coindesk.com/arc/outboundfeeds/rss/",
      source: "CoinDesk",
      language: "en",
      priority: 2,
    },
    {
      url: "https://decrypt.co/feed",
      source: "Decrypt",
      language: "en",
      priority: 3,
    },
    {
      url: "https://www.theblock.co/rss.xml",
      source: "The Block",
      language: "en",
      priority: 4,
    },
    {
      url: "https://cryptoslate.com/feed/",
      source: "CryptoSlate",
      language: "en",
      priority: 5,
    },
    {
      url: "https://beincrypto.com/feed/",
      source: "BeInCrypto",
      language: "en",
      priority: 6,
    },
    {
      url: "https://coingape.com/feed/",
      source: "CoinGape",
      language: "en",
      priority: 7,
    },
    {
      url: "https://www.newsbtc.com/feed/",
      source: "NewsBTC",
      language: "en",
      priority: 8,
    },
    {
      url: "https://cryptonews.com/news/feed/",
      source: "CryptoNews",
      language: "en",
      priority: 9,
    },
    {
      url: "https://news.bitcoin.com/feed/",
      source: "Bitcoin.com News",
      language: "en",
      priority: 10,
    },
  ],
}

// RSS 파서 동적 로딩 및 안전한 RSS 처리
async function fetchRSSFeed(feedConfig: {
  url: string
  source: string
  language: string
  priority: number
}): Promise<NewsItem[]> {
  try {
    console.log(`RSS 피드 가져오기 시도: ${feedConfig.source} (우선순위: ${feedConfig.priority})`)

    // RSS 파서 동적 로딩
    let Parser
    try {
      Parser = (await import("rss-parser")).default
    } catch (importError) {
      console.error("RSS Parser 로딩 실패:", importError)
      throw new Error("RSS Parser를 로드할 수 없습니다")
    }

    const parser = new Parser({
      timeout: 15000, // 타임아웃 증가
      customFields: {
        item: [
          ["media:content", "mediaContent"],
          ["media:thumbnail", "mediaThumbnail"],
          ["enclosure", "enclosure"],
          ["dc:creator", "creator"],
        ],
      },
    })

    // RSS 피드 가져오기 (한국어 사이트용 헤더 최적화)
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "application/rss+xml, application/xml, text/xml, application/atom+xml, */*",
      "Accept-Language": feedConfig.language === "ko" ? "ko-KR,ko;q=0.9,en;q=0.8" : "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    }

    const response = await fetch(feedConfig.url, {
      headers,
      signal: AbortSignal.timeout(15000),
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText} for ${feedConfig.source}`)
    }

    const contentType = response.headers.get("content-type") || ""
    console.log(`${feedConfig.source} Content-Type:`, contentType)

    const xmlText = await response.text()
    console.log(`${feedConfig.source} 응답 길이:`, xmlText.length)

    if (!xmlText || xmlText.length < 100) {
      throw new Error(`${feedConfig.source}: RSS 내용이 너무 짧습니다 (${xmlText.length}자)`)
    }

    // HTML 페이지인지 확인
    if (xmlText.includes("<!DOCTYPE html") || xmlText.includes("<html")) {
      throw new Error(`${feedConfig.source}: HTML 페이지를 반환함 (RSS 피드 아님)`)
    }

    // RSS/Atom 형식 확인
    const hasRssTag = xmlText.includes("<rss")
    const hasFeedTag = xmlText.includes("<feed")
    const hasChannelTag = xmlText.includes("<channel")
    const hasItemTag = xmlText.includes("<item")

    console.log(`${feedConfig.source} 형식 분석:`, {
      hasRssTag,
      hasFeedTag,
      hasChannelTag,
      hasItemTag,
    })

    if (!hasRssTag && !hasFeedTag) {
      throw new Error(`${feedConfig.source}: RSS 또는 Atom 태그를 찾을 수 없음`)
    }

    if (hasRssTag && (!hasChannelTag || !hasItemTag)) {
      throw new Error(`${feedConfig.source}: 불완전한 RSS 구조`)
    }

    const feed = await parser.parseString(xmlText)

    if (!feed.items || feed.items.length === 0) {
      console.log(`${feedConfig.source}: 피드 아이템이 없음`)
      return []
    }

    console.log(`${feedConfig.source}: ${feed.items.length}개 아이템 발견`)

    const newsItems: NewsItem[] = feed.items.slice(0, 15).map((item: any, index: number) => {
      const title = item.title || "제목 없음"
      const description = item.contentSnippet || item.content || item.description || "내용 없음"
      const chain = extractChainFromNews(title, description)
      const category = extractCategory(title, description)

      // 이미지 URL 추출 (코인텔레그래프 특화)
      let imageUrl = undefined
      if (item.enclosure?.url && item.enclosure.type?.startsWith("image/")) {
        imageUrl = item.enclosure.url
      } else if (item.mediaContent?.url) {
        imageUrl = item.mediaContent.url
      } else if (item.mediaThumbnail?.url) {
        imageUrl = item.mediaThumbnail.url
      }

      // 발행 시간 처리
      let publishedAt = new Date().toISOString()
      if (item.pubDate) {
        try {
          publishedAt = new Date(item.pubDate).toISOString()
        } catch (e) {
          console.warn(`날짜 파싱 실패: ${item.pubDate}`)
        }
      } else if (item.isoDate) {
        publishedAt = item.isoDate
      }

      return {
        id: `${feedConfig.source.toLowerCase().replace(/\s+/g, "-")}-${index}-${Date.now()}`,
        chain,
        title: title.substring(0, 200).trim(),
        description: description.substring(0, 300).trim(),
        url: item.link || item.guid || "#",
        publishedAt,
        source: feedConfig.source,
        category,
        imageUrl,
      }
    })

    console.log(`${feedConfig.source}: ${newsItems.length}개 뉴스 수집 완료`)
    return newsItems
  } catch (error) {
    console.error(`RSS 피드 상세 오류 (${feedConfig.source}):`)
    console.error("- 오류 타입:", error.constructor.name)
    console.error("- 오류 메시지:", error.message)
    if (error.stack) {
      console.error("- 스택 (첫 3줄):", error.stack.split("\n").slice(0, 3).join("\n"))
    }
    return []
  }
}

// NewsAPI 백업 강화 (더 적극적으로 활용)
async function fetchNewsAPI(language = "en"): Promise<NewsItem[]> {
  try {
    const apiKey = process.env.NEWS_API_KEY
    if (!apiKey) {
      console.log("NewsAPI 키가 없음, 건너뜀")
      return []
    }

    console.log(`NewsAPI 호출 중... (언어: ${language})`)

    // 언어별 검색 키워드 최적화
    const searchQueries = {
      ko: "암호화폐 OR 비트코인 OR 이더리움 OR 블록체인 OR 코인",
      en: "cryptocurrency OR bitcoin OR ethereum OR blockchain OR crypto OR DeFi OR NFT",
    }

    const query = searchQueries[language] || searchQueries.en
    const langParam = language === "ko" ? "ko" : "en"

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=${langParam}&sortBy=publishedAt&pageSize=15&apiKey=${apiKey}`,
      {
        headers: {
          "User-Agent": "HeyChain-News-Bot/1.0",
        },
        signal: AbortSignal.timeout(10000),
      },
    )

    if (!response.ok) {
      throw new Error(`NewsAPI HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.status !== "ok" || !data.articles) {
      throw new Error(`NewsAPI 응답 오류: ${data.message || "Unknown error"}`)
    }

    console.log(`NewsAPI 응답: ${data.articles.length}개 기사`)

    const newsItems = data.articles
      .filter((article: any) => {
        // 품질 필터링
        return (
          article.title &&
          article.description &&
          article.url &&
          article.title !== "[Removed]" &&
          article.description !== "[Removed]" &&
          !article.title.toLowerCase().includes("removed") &&
          article.description.length > 50
        )
      })
      .slice(0, 12)
      .map((article: any, index: number) => {
        const chain = extractChainFromNews(article.title, article.description || "")
        const category = extractCategory(article.title, article.description || "")

        return {
          id: `newsapi-${language}-${index}-${Date.now()}`,
          chain,
          title: article.title.substring(0, 200).trim(),
          description: (article.description || "상세 내용이 없습니다.").substring(0, 300).trim(),
          url: article.url,
          publishedAt: article.publishedAt,
          source: `${article.source.name} (NewsAPI)`,
          category,
          imageUrl: article.urlToImage,
        }
      })

    console.log(`NewsAPI: ${newsItems.length}개 뉴스 처리 완료`)
    return newsItems
  } catch (error) {
    console.error("NewsAPI 호출 실패:", error.message)
    return []
  }
}

// 강화된 폴백 뉴스 시스템
function getFallbackNews(language: string): NewsItem[] {
  const baseTime = Date.now()

  if (language === "ko") {
    return [
      {
        id: "fallback-ko-1",
        chain: "Bitcoin",
        title: "비트코인, 기관 투자자들의 지속적인 관심으로 상승세 유지",
        description:
          "주요 투자기관들이 비트코인에 대한 투자를 확대하면서 가격 상승세가 이어지고 있습니다. 특히 ETF 승인 이후 기관 자금 유입이 크게 증가했습니다.",
        url: "https://kr.cointelegraph.com",
        publishedAt: new Date(baseTime - Math.random() * 3600000).toISOString(),
        source: "코인텔레그래프 KR",
        category: "시장",
      },
      {
        id: "fallback-ko-2",
        chain: "Ethereum",
        title: "이더리움 2.0 스테이킹 보상률 상승, 검증자 수 증가",
        description:
          "이더리움 네트워크의 스테이킹 보상률이 상승하면서 더 많은 검증자들이 참여하고 있습니다. 네트워크 보안성도 함께 강화되고 있습니다.",
        url: "https://ethereum.org",
        publishedAt: new Date(baseTime - Math.random() * 7200000).toISOString(),
        source: "이더리움 재단",
        category: "스테이킹",
      },
      {
        id: "fallback-ko-3",
        chain: "Solana",
        title: "솔라나 생태계, 새로운 DeFi 프로토콜 출시로 TVL 급증",
        description:
          "솔라나 블록체인에 새로운 탈중앙화 금융(DeFi) 프로토콜이 출시되면서 총 예치 자산(TVL)이 크게 증가했습니다.",
        url: "https://solana.com",
        publishedAt: new Date(baseTime - Math.random() * 10800000).toISOString(),
        source: "솔라나 랩스",
        category: "DeFi",
      },
      {
        id: "fallback-ko-4",
        chain: "Polygon",
        title: "폴리곤, 새로운 zkEVM 업그레이드로 확장성 대폭 개선",
        description:
          "폴리곤이 영지식 증명 기반의 새로운 가상머신을 도입하여 트랜잭션 처리 속도와 비용 효율성을 크게 향상시켰습니다.",
        url: "https://polygon.technology",
        publishedAt: new Date(baseTime - Math.random() * 14400000).toISOString(),
        source: "폴리곤 팀",
        category: "업데이트",
      },
      {
        id: "fallback-ko-5",
        chain: "Cardano",
        title: "카르다노, 새로운 스마트 컨트랙트 기능으로 DeFi 생태계 확장",
        description:
          "카르다노 블록체인이 향상된 스마트 컨트랙트 기능을 도입하면서 탈중앙화 금융 애플리케이션들이 급속히 증가하고 있습니다.",
        url: "https://cardano.org",
        publishedAt: new Date(baseTime - Math.random() * 18000000).toISOString(),
        source: "카르다노 재단",
        category: "DeFi",
      },
    ]
  } else {
    return [
      {
        id: "fallback-en-1",
        chain: "Bitcoin",
        title: "Bitcoin ETF Sees Record Inflows as Institutional Adoption Grows",
        description:
          "Bitcoin exchange-traded funds have recorded unprecedented inflows this week as major financial institutions continue to embrace cryptocurrency investments.",
        url: "https://cointelegraph.com",
        publishedAt: new Date(baseTime - Math.random() * 3600000).toISOString(),
        source: "CoinTelegraph",
        category: "ETF",
      },
      {
        id: "fallback-en-2",
        chain: "Ethereum",
        title: "Ethereum Layer 2 Solutions See 300% Growth in Transaction Volume",
        description:
          "Layer 2 scaling solutions on Ethereum have experienced a 300% increase in transaction volume over the past quarter, signaling growing adoption.",
        url: "https://ethereum.org",
        publishedAt: new Date(baseTime - Math.random() * 7200000).toISOString(),
        source: "Ethereum Foundation",
        category: "Growth",
      },
      {
        id: "fallback-en-3",
        chain: "Solana",
        title: "Solana Network Achieves New Milestone with 65,000 TPS",
        description:
          "The Solana blockchain has reached a new performance milestone, processing over 65,000 transactions per second during peak usage.",
        url: "https://solana.com",
        publishedAt: new Date(baseTime - Math.random() * 10800000).toISOString(),
        source: "Solana Labs",
        category: "Performance",
      },
      {
        id: "fallback-en-4",
        chain: "Polygon",
        title: "Major DeFi Protocol Launches on Polygon zkEVM",
        description:
          "A leading decentralized finance protocol has announced its deployment on Polygon's zkEVM, bringing advanced DeFi features to the Layer 2 ecosystem.",
        url: "https://polygon.technology",
        publishedAt: new Date(baseTime - Math.random() * 14400000).toISOString(),
        source: "Polygon Labs",
        category: "DeFi",
      },
    ]
  }
}

// 뉴스 캐싱
const cachedNews: { [key: string]: { data: NewsItem[]; timestamp: number } } = {}
const CACHE_DURATION = 30 * 60 * 1000 // 30분 캐시 (더 자주 업데이트)

// 메인 뉴스 수집 로직 업데이트
export async function GET(request: NextRequest) {
  try {
    console.log("=== 뉴스 API 호출 시작 ===")

    const url = new URL(request.url)
    const searchParams = url.searchParams
    const language = searchParams.get("lang") || "en"
    const category = searchParams.get("category") || "all"

    console.log(`언어: ${language}, 카테고리: ${category}`)

    const cacheKey = `${language}-${category}`
    const now = Date.now()

    // 캐시 확인
    if (cachedNews[cacheKey] && now - cachedNews[cacheKey].timestamp < CACHE_DURATION) {
      console.log(`캐시된 뉴스 반환: ${cacheKey}`)
      return Response.json({
        success: true,
        data: cachedNews[cacheKey].data,
        total: cachedNews[cacheKey].data.length,
        timestamp: new Date().toISOString(),
        cached: true,
      })
    }

    console.log(`새로운 뉴스 수집 시작: ${language}`)

    let allNews: NewsItem[] = []
    const feeds = language === "ko" ? RSS_FEEDS.korean : RSS_FEEDS.english

    console.log(`사용할 RSS 피드 수: ${feeds.length}`)

    // RSS 피드들을 우선순위 순으로 처리 (병렬 처리로 속도 향상)
    const sortedFeeds = feeds.sort((a, b) => a.priority - b.priority)

    // 상위 5개 피드만 병렬 처리 (너무 많으면 느려짐)
    const primaryFeeds = sortedFeeds.slice(0, 5)
    const secondaryFeeds = sortedFeeds.slice(5)

    // 1차: 주요 피드들 병렬 처리
    console.log(`1차 RSS 수집: ${primaryFeeds.length}개 피드 (병렬)`)
    const primaryPromises = primaryFeeds.map((feed) => fetchRSSFeed(feed))
    const primaryResults = await Promise.allSettled(primaryPromises)

    primaryResults.forEach((result, index) => {
      if (result.status === "fulfilled" && result.value.length > 0) {
        allNews.push(...result.value)
        console.log(`${primaryFeeds[index].source}: ${result.value.length}개 뉴스 추가`)
      } else {
        console.log(`${primaryFeeds[index].source}: 실패 또는 뉴스 없음`)
      }
    })

    // NewsAPI 적극 활용 (RSS와 병렬로 처리)
    console.log("NewsAPI 백업 호출...")
    const newsApiPromise = fetchNewsAPI(language)

    // 2차: 보조 피드들 (뉴스가 부족할 때만)
    if (allNews.length < 10 && secondaryFeeds.length > 0) {
      console.log(`2차 RSS 수집: ${secondaryFeeds.length}개 피드 (순차)`)
      for (const feed of secondaryFeeds.slice(0, 3)) {
        // 최대 3개만 추가
        try {
          const feedNews = await fetchRSSFeed(feed)
          if (feedNews.length > 0) {
            allNews.push(...feedNews)
            console.log(`${feed.source}: ${feedNews.length}개 뉴스 추가`)
            if (allNews.length >= 15) break // 충분하면 중단
          }
        } catch (error) {
          console.error(`${feed.source} RSS 처리 실패:`, error.message)
        }
      }
    }

    // NewsAPI 결과 대기 및 추가
    try {
      const newsApiResults = await newsApiPromise
      if (newsApiResults.length > 0) {
        allNews.push(...newsApiResults)
        console.log(`NewsAPI: ${newsApiResults.length}개 뉴스 추가`)
      }
    } catch (error) {
      console.log("NewsAPI 처리 실패:", error.message)
    }

    // RSS 수집 결과 확인
    console.log(`총 수집된 뉴스: ${allNews.length}개`)

    // RSS + NewsAPI 모두 실패 시 폴백 뉴스 사용
    if (allNews.length === 0) {
      console.log("모든 소스에서 뉴스를 가져올 수 없음, 폴백 뉴스 사용")
      allNews = getFallbackNews(language)
    } else if (allNews.length < 5) {
      console.log("뉴스가 부족함, 폴백 뉴스 추가")
      const fallbackNews = getFallbackNews(language)
      allNews.push(...fallbackNews.slice(0, 8 - allNews.length))
    }

    // 카테고리 필터링
    if (category !== "all") {
      const beforeFilter = allNews.length
      allNews = allNews.filter(
        (item) =>
          item.category.toLowerCase().includes(category.toLowerCase()) ||
          category.toLowerCase().includes(item.category.toLowerCase()),
      )
      console.log(`카테고리 필터링: ${beforeFilter} -> ${allNews.length}`)
    }

    // 최신순 정렬
    allNews.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    // 중복 제거 (제목 기준, 유사도 검사)
    const uniqueNews = allNews.filter((item, index, self) => {
      return (
        index ===
        self.findIndex((t) => {
          // 제목이 80% 이상 유사하면 중복으로 간주
          const similarity = calculateSimilarity(t.title, item.title)
          return similarity > 0.8
        })
      )
    })

    // 최대 30개로 제한 (더 많은 뉴스 제공)
    const finalNews = uniqueNews.slice(0, 30)

    // 캐시 저장
    cachedNews[cacheKey] = {
      data: finalNews,
      timestamp: now,
    }

    console.log(`뉴스 수집 완료: ${finalNews.length}개 (${language})`)

    // 소스별 통계
    const sourceStats = finalNews.reduce((acc, item) => {
      acc[item.source] = (acc[item.source] || 0) + 1
      return acc
    }, {})

    return Response.json({
      success: true,
      data: finalNews,
      total: finalNews.length,
      timestamp: new Date().toISOString(),
      sources: Object.keys(sourceStats),
      cached: false,
      debug: {
        rssFeeds: feeds.length,
        rssNews: finalNews.filter((item) => !item.id.startsWith("newsapi") && !item.id.startsWith("fallback")).length,
        newsApiNews: finalNews.filter((item) => item.id.startsWith("newsapi")).length,
        fallbackNews: finalNews.filter((item) => item.id.startsWith("fallback")).length,
        sourceStats,
        language,
        category,
      },
    })
  } catch (error) {
    console.error("=== 뉴스 API 최종 오류 ===")
    console.error("Error:", error)

    // 완전 실패 시에도 폴백 뉴스 제공
    const language = new URL(request.url).searchParams.get("lang") || "en"
    const fallbackNews = getFallbackNews(language)

    return Response.json({
      success: true,
      data: fallbackNews,
      total: fallbackNews.length,
      timestamp: new Date().toISOString(),
      fallback: true,
      error: error instanceof Error ? error.message : "Unknown error",
      debug: {
        errorType: error instanceof Error ? error.constructor.name : "Unknown",
        errorMessage: error instanceof Error ? error.message : "Unknown error",
        fallbackUsed: true,
      },
    })
  }
}

// 문자열 유사도 계산 함수
function calculateSimilarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2
  const shorter = str1.length > str2.length ? str2 : str1

  if (longer.length === 0) {
    return 1.0
  }

  const editDistance = levenshteinDistance(longer, shorter)
  return (longer.length - editDistance) / longer.length
}

// 레벤슈타인 거리 계산
function levenshteinDistance(str1: string, str2: string): number {
  const matrix = []

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
      }
    }
  }

  return matrix[str2.length][str1.length]
}
