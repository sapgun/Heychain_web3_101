import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    // 환경 변수 확인
    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "OpenAI API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const { messages } = await req.json()

    // 메시지 유효성 검사
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const result = await streamText({
      model: openai("gpt-4o"),
      system: `당신은 HeyChain의 Web3 전문 AI 어시스턴트입니다. 

역할:
- Web3, 블록체인, 암호화폐, DeFi, NFT, DAO 등에 대한 전문적이고 정확한 정보 제공
- 복잡한 개념을 초보자도 이해할 수 있도록 쉽게 설명
- 실용적인 가이드와 단계별 설명 제공
- 보안과 안전에 대한 조언 포함

답변 스타일:
- 친근하고 접근하기 쉬운 톤
- 한국어로 답변 (사용자가 영어로 질문해도 한국어로 답변)
- 구체적인 예시와 실용적인 팁 포함
- 필요시 주의사항이나 위험 요소 언급
- 답변 길이는 적절하게 조절 (너무 길지 않게)

제한사항:
- 투자 조언은 하지 않음 (일반적인 정보만 제공)
- 불확실한 정보는 추측하지 않음
- 최신 가격 정보나 실시간 데이터는 제공하지 않음`,
      messages,
    })

    return result.toAIStreamResponse()
  } catch (error) {
    console.error("Chat API Error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
