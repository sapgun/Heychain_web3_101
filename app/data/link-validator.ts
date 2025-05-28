// 링크 유효성 검사 유틸리티
export async function validateLink(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" })
    return response.ok
  } catch {
    return false
  }
}

export const linkCategories = {
  official: "공식 사이트",
  tutorial: "튜토리얼",
  documentation: "문서",
  tool: "도구",
  community: "커뮤니티",
}
