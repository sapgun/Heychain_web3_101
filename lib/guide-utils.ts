// 사용자 가이드 관련 유틸리티
export const GUIDE_VIEWED_KEY = "heychain_guide_viewed"

export function hasViewedGuide(): boolean {
  if (typeof window === "undefined") return false

  try {
    return localStorage.getItem(GUIDE_VIEWED_KEY) === "true"
  } catch {
    return false
  }
}

export function markGuideAsViewed(): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(GUIDE_VIEWED_KEY, "true")
  } catch (error) {
    console.error("Failed to save guide viewed state:", error)
  }
}
