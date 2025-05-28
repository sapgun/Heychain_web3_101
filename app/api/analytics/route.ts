import type { NextRequest } from "next/server"
import { analyticsStore } from "@/lib/analytics"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get("type") || "stats"

    switch (type) {
      case "stats":
        const stats = analyticsStore.getUsageStats()
        return Response.json(stats)

      case "recent":
        const limit = Number.parseInt(searchParams.get("limit") || "50")
        const recentChats = analyticsStore.getRecentChats(limit)
        return Response.json(recentChats)

      default:
        return Response.json({ error: "Invalid type parameter" }, { status: 400 })
    }
  } catch (error) {
    console.error("Analytics API Error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
