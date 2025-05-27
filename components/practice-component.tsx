"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, AlertTriangle, BookOpen } from "lucide-react"

interface PracticeProps {
  practice: {
    title: string
    steps: string[]
    warning?: string
  }
  language: "ko" | "en"
}

export function PracticeComponent({ practice, language }: PracticeProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleStep = (index: number) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(index)) {
      newCompleted.delete(index)
    } else {
      newCompleted.add(index)
    }
    setCompletedSteps(newCompleted)
  }

  const resetProgress = () => {
    setCompletedSteps(new Set())
  }

  const progress = (completedSteps.size / practice.steps.length) * 100

  return (
    <Card className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BookOpen className="w-5 h-5 text-green-400 mr-2" />
          <h4 className="text-lg font-semibold text-green-300">
            {language === "ko" ? "실습 가이드" : "Practice Guide"}
          </h4>
        </div>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          size="sm"
          className="text-green-300 hover:text-green-200"
        >
          {isExpanded ? (language === "ko" ? "접기" : "Collapse") : language === "ko" ? "펼치기" : "Expand"}
        </Button>
      </div>

      <h5 className="text-white font-medium mb-4">{practice.title}</h5>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{language === "ko" ? "진행률" : "Progress"}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-3">
          {practice.steps.map((step, index) => (
            <div
              key={index}
              className={`
                flex items-start p-3 rounded-lg border transition-all duration-200 cursor-pointer
                ${
                  completedSteps.has(index)
                    ? "bg-green-500/20 border-green-500/50"
                    : "bg-gray-700/30 border-gray-600 hover:bg-gray-600/30"
                }
              `}
              onClick={() => toggleStep(index)}
            >
              <div className="flex-shrink-0 mt-0.5 mr-3">
                {completedSteps.has(index) ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <span
                className={`text-sm ${completedSteps.has(index) ? "text-green-300 line-through" : "text-gray-300"}`}
              >
                {step}
              </span>
            </div>
          ))}

          {practice.warning && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-300 text-sm">{practice.warning}</p>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <Button
              onClick={resetProgress}
              variant="outline"
              size="sm"
              className="border-green-500/30 text-green-300 hover:bg-green-500/10"
            >
              {language === "ko" ? "초기화" : "Reset"}
            </Button>
            {completedSteps.size === practice.steps.length && (
              <div className="flex items-center text-green-300 text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                {language === "ko" ? "완료!" : "Completed!"}
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  )
}
