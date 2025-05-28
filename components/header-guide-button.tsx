"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import { UsageGuideModal } from "@/components/usage-guide-modal"

export function HeaderGuideButton() {
  const [showGuideModal, setShowGuideModal] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowGuideModal(true)}
        className="text-gray-400 hover:text-white hover:bg-gray-800"
      >
        <BookOpen className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">사용법</span>
      </Button>
      <UsageGuideModal open={showGuideModal} onOpenChange={setShowGuideModal} />
    </>
  )
}

export default HeaderGuideButton
