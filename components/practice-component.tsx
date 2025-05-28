"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronDown, ExternalLink, CheckCircle } from "lucide-react"

interface PracticeStep {
  title: string
  description: string
  tips?: string
}

interface Practice {
  title: string
  description: string
  steps: PracticeStep[]
  links?: Array<{ title: string; url: string }>
}

interface PracticeComponentProps {
  practice: Practice
  language: "ko" | "en"
}

export function PracticeComponent({ practice, language }: PracticeComponentProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set())
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const toggleStep = (stepIndex: number) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(stepIndex)) {
      newExpanded.delete(stepIndex)
    } else {
      newExpanded.add(stepIndex)
    }
    setExpandedSteps(newExpanded)
  }

  const toggleComplete = (stepIndex: number) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(stepIndex)) {
      newCompleted.delete(stepIndex)
    } else {
      newCompleted.add(stepIndex)
    }
    setCompletedSteps(newCompleted)
  }

  return (
    <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
            🛠️ {language === "ko" ? "실습 가이드" : "Practice Guide"}
          </Badge>
          <div className="text-xs text-gray-400">
            {completedSteps.size}/{practice.steps.length} {language === "ko" ? "완료" : "completed"}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">{practice.title}</h4>
          <p className="text-sm text-gray-300">{practice.description}</p>
        </div>

        <div className="space-y-3">
          {practice.steps.map((step, index) => {
            const isExpanded = expandedSteps.has(index)
            const isCompleted = completedSteps.has(index)

            return (
              <div
                key={index}
                className={`border rounded-lg transition-all ${
                  isCompleted ? "border-green-500/50 bg-green-500/5" : "border-gray-600/30 bg-gray-700/20"
                }`}
              >
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full text-left p-3 flex items-center justify-between hover:bg-gray-600/20 transition-colors"
                >
                  <div className="flex items-center flex-1">
                    <div className="flex items-center mr-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${
                          isCompleted ? "border-green-500 bg-green-500" : "border-gray-500"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-xs text-gray-400">{index + 1}</span>
                        )}
                      </div>
                    </div>
                    <span className={`font-medium ${isCompleted ? "text-green-300" : "text-white"}`}>{step.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-3 pb-3 border-t border-gray-600/30">
                    <div className="pt-3 space-y-3">
                      <p className="text-sm text-gray-300">{step.description}</p>

                      {step.tips && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                          <h5 className="text-sm font-medium text-blue-300 mb-1">
                            💡 {language === "ko" ? "팁" : "Tip"}
                          </h5>
                          <p className="text-xs text-gray-300">{step.tips}</p>
                        </div>
                      )}

                      <Button
                        size="sm"
                        variant={isCompleted ? "outline" : "default"}
                        onClick={() => toggleComplete(index)}
                        className={
                          isCompleted
                            ? "border-green-500/50 text-green-300 hover:bg-green-500/10"
                            : "bg-green-600 hover:bg-green-700"
                        }
                      >
                        {isCompleted
                          ? language === "ko"
                            ? "완료됨"
                            : "Completed"
                          : language === "ko"
                            ? "완료 표시"
                            : "Mark Complete"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {practice.links && practice.links.length > 0 && (
          <div className="border-t border-gray-600/30 pt-4">
            <h5 className="text-sm font-medium text-gray-300 mb-2">
              {language === "ko" ? "참고 링크" : "Reference Links"}
            </h5>
            <div className="space-y-2">
              {practice.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export default PracticeComponent
