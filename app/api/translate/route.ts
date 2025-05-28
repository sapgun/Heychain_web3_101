import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { text, targetLanguage, sourceLanguage = "ko" } = await req.json()

    if (!text || !targetLanguage) {
      return Response.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // 언어 코드를 언어명으로 변환
    const languageNames: Record<string, string> = {
      ko: "Korean",
      en: "English",
      ja: "Japanese",
      zh: "Chinese",
      es: "Spanish",
      fr: "French",
    }

    const sourceLangName = languageNames[sourceLanguage] || "Korean"
    const targetLangName = languageNames[targetLanguage] || "English"

    const result = await streamText({
      model: openai("gpt-4o"),
      system: `You are a professional translator specializing in Web3, blockchain, and cryptocurrency terminology. 

Your task:
- Translate the given text from ${sourceLangName} to ${targetLangName}
- Maintain the original meaning and tone
- Keep technical terms accurate
- Preserve emojis and special characters
- For UI text, keep it concise and user-friendly
- If the text contains placeholders like {0}, {1}, etc., keep them unchanged

Important:
- Only return the translated text, nothing else
- Do not add explanations or notes
- Maintain the same formatting as the original`,
      prompt: `Translate this text from ${sourceLangName} to ${targetLangName}:

"${text}"`,
      maxTokens: 500,
    })

    // 스트림을 텍스트로 변환
    const translatedText = await result.text

    return Response.json({
      translatedText: translatedText.trim(),
      sourceLanguage,
      targetLanguage,
    })
  } catch (error) {
    console.error("Translation API error:", error)
    return Response.json(
      { error: "Translation failed", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
