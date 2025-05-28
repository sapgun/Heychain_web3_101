export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY

  return Response.json({
    hasApiKey: !!apiKey,
    apiKeyPrefix: apiKey?.substring(0, 7) || "없음",
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  })
}
