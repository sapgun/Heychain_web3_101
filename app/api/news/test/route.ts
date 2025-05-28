import type { NextRequest } from "next/server"

// RSS 피드 테스트 및 진단용 API - 업데이트된 피드 목록
export async function GET(request: NextRequest) {
  const testResults = {
    timestamp: new Date().toISOString(),
    tests: [],
    recommendations: [],
  }

  // 업데이트된 테스트할 RSS 피드 목록
  const testFeeds = [
    // 한국어 피드
    {
      name: "코인텔레그래프 KR (전체)",
      url: "https://kr.cointelegraph.com/rss",
      expected: "Korean crypto news",
      priority: 1,
      language: "ko",
    },
    {
      name: "코인텔레그래프 KR (에디터스픽)",
      url: "https://kr.cointelegraph.com/editors_pick_rss",
      expected: "Korean crypto news (editor's pick)",
      priority: 2,
      language: "ko",
    },
    {
      name: "BeInCrypto 한국어",
      url: "https://kr.beincrypto.com/feed/",
      expected: "Korean crypto news",
      priority: 3,
      language: "ko",
    },
    {
      name: "토큰포스트",
      url: "https://rss.app/feeds/mYPCACzVBKWfuCiC.xml",
      expected: "Korean crypto news",
      priority: 4,
      language: "ko",
    },
    // 영어 피드 (주요)
    {
      name: "CoinTelegraph EN",
      url: "https://cointelegraph.com/rss",
      expected: "English crypto news",
      priority: 1,
      language: "en",
    },
    {
      name: "CoinDesk",
      url: "https://www.coindesk.com/arc/outboundfeeds/rss/",
      expected: "English crypto news",
      priority: 2,
      language: "en",
    },
    {
      name: "Decrypt",
      url: "https://decrypt.co/feed",
      expected: "English crypto news",
      priority: 3,
      language: "en",
    },
    {
      name: "The Block",
      url: "https://www.theblock.co/rss.xml",
      expected: "English crypto news",
      priority: 4,
      language: "en",
    },
    {
      name: "CryptoSlate",
      url: "https://cryptoslate.com/feed/",
      expected: "English crypto news",
      priority: 5,
      language: "en",
    },
    {
      name: "BeInCrypto EN",
      url: "https://beincrypto.com/feed/",
      expected: "English crypto news",
      priority: 6,
      language: "en",
    },
    {
      name: "CoinGape",
      url: "https://coingape.com/feed/",
      expected: "English crypto news",
      priority: 7,
      language: "en",
    },
    {
      name: "NewsBTC",
      url: "https://www.newsbtc.com/feed/",
      expected: "English crypto news",
      priority: 8,
      language: "en",
    },
    {
      name: "CryptoNews",
      url: "https://cryptonews.com/news/feed/",
      expected: "English crypto news",
      priority: 9,
      language: "en",
    },
    {
      name: "Bitcoin.com News",
      url: "https://news.bitcoin.com/feed/",
      expected: "English crypto news",
      priority: 10,
      language: "en",
    },
  ]

  // 병렬 테스트로 속도 향상
  const testPromises = testFeeds.map(async (feed) => {
    const testResult = {
      name: feed.name,
      url: feed.url,
      priority: feed.priority,
      language: feed.language,
      status: "unknown",
      details: {},
      errors: [],
      recommendations: [],
    }

    try {
      console.log(`Testing ${feed.name}`)

      const response = await fetch(feed.url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "application/rss+xml, application/xml, text/xml, application/atom+xml, */*",
          "Accept-Language": feed.language === "ko" ? "ko-KR,ko;q=0.9,en;q=0.8" : "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          "Cache-Control": "no-cache",
        },
        signal: AbortSignal.timeout(10000), // 10초 타임아웃
      })

      testResult.details = {
        httpStatus: response.status,
        statusText: response.statusText,
        contentType: response.headers.get("content-type"),
        contentLength: response.headers.get("content-length"),
        server: response.headers.get("server"),
      }

      if (!response.ok) {
        testResult.status = "http_error"
        testResult.errors.push(`HTTP ${response.status}: ${response.statusText}`)
        return testResult
      }

      const text = await response.text()
      testResult.details.actualContentLength = text.length

      // RSS/XML 형식 검증
      const hasRssTag = text.includes("<rss")
      const hasFeedTag = text.includes("<feed")
      const hasChannelTag = text.includes("<channel")
      const hasItemTag = text.includes("<item")
      const hasEntryTag = text.includes("<entry")

      testResult.details.formatAnalysis = {
        hasRssTag,
        hasFeedTag,
        hasChannelTag,
        hasItemTag,
        hasEntryTag,
      }

      if (hasRssTag && hasChannelTag && hasItemTag) {
        testResult.status = "valid_rss"
      } else if (hasFeedTag && hasEntryTag) {
        testResult.status = "valid_atom"
      } else if (text.includes("<!DOCTYPE html")) {
        testResult.status = "html_page"
        testResult.errors.push("HTML 페이지 반환")
      } else {
        testResult.status = "invalid_format"
        testResult.errors.push("유효하지 않은 RSS/Atom 형식")
      }

      // RSS 파서 테스트
      if (testResult.status === "valid_rss" || testResult.status === "valid_atom") {
        try {
          const Parser = (await import("rss-parser")).default
          const parser = new Parser({ timeout: 5000 })
          const feed = await parser.parseString(text)

          testResult.details.parserResult = {
            title: feed.title,
            itemCount: feed.items?.length || 0,
            language: feed.language,
          }

          if (feed.items && feed.items.length > 0) {
            testResult.status = "fully_working"
            testResult.details.sampleItem = {
              title: feed.items[0].title?.substring(0, 100),
              hasLink: !!feed.items[0].link,
              hasDescription: !!feed.items[0].description,
            }
          }
        } catch (parseError) {
          testResult.errors.push(`파싱 실패: ${parseError.message}`)
          testResult.status = "parse_error"
        }
      }
    } catch (error) {
      testResult.status = "network_error"
      testResult.errors.push(`네트워크 오류: ${error.message}`)
    }

    return testResult
  })

  // 모든 테스트 병렬 실행
  const results = await Promise.allSettled(testPromises)
  testResults.tests = results.map((result) =>
    result.status === "fulfilled"
      ? result.value
      : {
          name: "Unknown",
          status: "promise_error",
          errors: ["Promise 실행 실패"],
        },
  )

  // 통계 생성
  const workingFeeds = testResults.tests.filter(
    (t) => t.status === "fully_working" || t.status === "valid_rss" || t.status === "valid_atom",
  )

  const koreanFeeds = testResults.tests.filter((t) => t.language === "ko")
  const englishFeeds = testResults.tests.filter((t) => t.language === "en")

  const workingKorean = koreanFeeds.filter((t) => ["fully_working", "valid_rss", "valid_atom"].includes(t.status))
  const workingEnglish = englishFeeds.filter((t) => ["fully_working", "valid_rss", "valid_atom"].includes(t.status))

  testResults.recommendations = [
    `📊 전체 결과: ${testResults.tests.length}개 피드 중 ${workingFeeds.length}개 작동`,
    `🇰🇷 한국어: ${koreanFeeds.length}개 중 ${workingKorean.length}개 작동`,
    `🇺🇸 영어: ${englishFeeds.length}개 중 ${workingEnglish.length}개 작동`,
    "",
    "✅ 작동하는 피드:",
    ...workingFeeds.map((t) => `  - ${t.name}: ${t.details.parserResult?.itemCount || 0}개 아이템`),
    "",
    "❌ 실패한 피드:",
    ...testResults.tests
      .filter((t) => !["fully_working", "valid_rss", "valid_atom"].includes(t.status))
      .map((t) => `  - ${t.name}: ${t.errors.join(", ")}`),
  ]

  // NewsAPI 테스트 추가
  try {
    const hasNewsApiKey = !!process.env.NEWS_API_KEY
    testResults.recommendations.push("", "📰 NewsAPI 상태:")
    if (hasNewsApiKey) {
      testResults.recommendations.push("  ✅ NewsAPI 키 설정됨 - 백업 뉴스 소스로 활용 가능")
    } else {
      testResults.recommendations.push("  ⚠️ NewsAPI 키 없음 - RSS 피드만 사용")
    }
  } catch (error) {
    testResults.recommendations.push("  ❌ NewsAPI 확인 실패")
  }

  return Response.json({
    success: true,
    summary: {
      total: testResults.tests.length,
      working: workingFeeds.length,
      failed: testResults.tests.length - workingFeeds.length,
      korean: {
        total: koreanFeeds.length,
        working: workingKorean.length,
        workingFeeds: workingKorean
          .filter((t) => ["fully_working", "valid_rss", "valid_atom"].includes(t.status))
          .map((t) => t.name),
      },
      english: {
        total: englishFeeds.length,
        working: workingEnglish.length,
        workingFeeds: workingEnglish
          .filter((t) => ["fully_working", "valid_rss", "valid_atom"].includes(t.status))
          .map((t) => t.name),
      },
      newsApi: {
        available: !!process.env.NEWS_API_KEY,
        status: !!process.env.NEWS_API_KEY ? "configured" : "not_configured",
      },
    },
    details: testResults,
  })
}
