import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { analyticsStore, categorizeQuestion } from "@/lib/analytics"

export async function POST(req: Request) {
  console.log("=== Chat API Called ===")

  try {
    // 환경 변수 확인
    const apiKey = process.env.OPENAI_API_KEY
    console.log("API Key exists:", !!apiKey)

    if (!apiKey) {
      console.error("❌ OpenAI API key not found")
      return Response.json({ error: "OpenAI API key not configured" }, { status: 500 })
    }

    // 요청 본문 파싱
    const body = await req.json()
    console.log("Request body:", body)

    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      console.error("❌ Invalid messages format:", messages)
      return Response.json({ error: "Invalid messages format" }, { status: 400 })
    }

    console.log("✅ Messages received:", messages.length)

    // 분석을 위한 데이터 수집
    const startTime = Date.now()
    const userMessage = messages[messages.length - 1]?.content || ""
    const sessionId = req.headers.get("x-session-id") || "anonymous"

    // OpenAI API 호출
    console.log("🤖 Calling OpenAI API...")

    const result = streamText({
      model: openai("gpt-4o"),
      system: `당신은 HeyChain의 Web3 전문 AI 어시스턴트입니다.

역할:
- Web3, 블록체인, 암호화폐, DeFi, NFT, DAO 등에 대한 전문적이고 정확한 정보 제공
- 복잡한 개념을 초보자도 이해할 수 있도록 쉽게 설명
- 실용적인 가이드와 단계별 설명 제공

답변 스타일:
- 친근하고 접근하기 쉬운 톤
- 한국어로 답변
- 구체적인 예시와 실용적인 팁 포함
- 답변 길이는 적절하게 조절

제한사항:
- 투자 조언은 하지 않음 (일반적인 정보만 제공)
- 불확실한 정보는 추측하지 않음`,
      messages,
      onFinish: async (result) => {
        // 분석 데이터 저장
        const endTime = Date.now()
        const responseTime = endTime - startTime
        const category = categorizeQuestion(userMessage)

        analyticsStore.logChat({
          question: userMessage,
          responseTime,
          sessionId,
          category,
          tokenUsage: result.usage
            ? {
                prompt: result.usage.promptTokens,
                completion: result.usage.completionTokens,
                total: result.usage.totalTokens,
              }
            : undefined,
        })
      },
    })

    console.log("✅ OpenAI API call successful")

    // toDataStreamResponse 메서드 사용
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("❌ Chat API Error:", error)

    return Response.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
