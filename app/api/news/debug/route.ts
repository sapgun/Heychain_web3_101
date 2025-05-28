import type { NextRequest } from "next/server"

// 디버깅용 API 엔드포인트
export async function GET(request: NextRequest) {
  const debugInfo = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    nodeVersion: process.version,
    availablePackages: {},
    rssTestResults: [],
    errors: [],
  }

  try {
    // 1. 패키지 확인
    try {
      const Parser = require("rss-parser")
      debugInfo.availablePackages = {
        "rss-parser": "✅ Available",
        version: Parser.version || "Unknown",
      }
    } catch (error) {
      debugInfo.availablePackages = {
        "rss-parser": "❌ Not found",
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }

    // 2. 간단한 RSS 테스트
    const testFeeds = [
      {
        name: "CoinTelegraph",
        url: "https://cointelegraph.com/rss",
      },
      {
        name: "CoinDesk",
        url: "https://www.coindesk.com/arc/outboundfeeds/rss/",
      },
    ]

    for (const feed of testFeeds) {
      try {
        console.log(`Testing RSS feed: ${feed.name}`)

        const response = await fetch(feed.url, {
          headers: {
            "User-Agent": "HeyChain-News-Bot/1.0",
            Accept: "application/rss+xml, application/xml, text/xml",
          },
          signal: AbortSignal.timeout(5000),
        })

        const result = {
          name: feed.name,
          url: feed.url,
          status: response.status,
          statusText: response.statusText,
          contentType: response.headers.get("content-type"),
          success: response.ok,
        }

        if (response.ok) {
          const text = await response.text()
          result.contentLength = text.length
          result.hasRssContent = text.includes("<rss") || text.includes("<feed")
        }

        debugInfo.rssTestResults.push(result)
      } catch (error) {
        debugInfo.rssTestResults.push({
          name: feed.name,
          url: feed.url,
          error: error instanceof Error ? error.message : "Unknown error",
          success: false,
        })
      }
    }

    // 3. 환경 변수 확인
    debugInfo.environment = {
      NODE_ENV: process.env.NODE_ENV,
      hasNewsApiKey: !!process.env.NEWS_API_KEY,
      hasOpenAiKey: !!process.env.OPENAI_API_KEY,
    }

    return Response.json({
      success: true,
      debug: debugInfo,
    })
  } catch (error) {
    debugInfo.errors.push({
      type: "General Error",
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    })

    return Response.json({
      success: false,
      debug: debugInfo,
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
