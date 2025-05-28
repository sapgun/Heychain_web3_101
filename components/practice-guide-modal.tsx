"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, AlertTriangle, ExternalLink, BookOpen, ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import TranslatableContent from "./translatable-content"

interface PracticeStep {
  title: string
  description: string
  completed?: boolean
}

interface PracticeGuide {
  title: string
  description: string
  steps: PracticeStep[]
  warning?: string
  links?: { title: string; url: string }[]
}

interface PracticeGuideModalProps {
  isOpen: boolean
  onClose: () => void
  guide: PracticeGuide
  categoryTitle: string
}

export default function PracticeGuideModal({ isOpen, onClose, guide, categoryTitle }: PracticeGuideModalProps) {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const handleStepComplete = (stepIndex: number) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(stepIndex)) {
      newCompleted.delete(stepIndex)
    } else {
      newCompleted.add(stepIndex)
    }
    setCompletedSteps(newCompleted)
  }

  const handleNext = () => {
    if (currentStep < guide.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progressPercentage = (completedSteps.size / guide.steps.length) * 100

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-purple-500/20 mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white">실습 가이드: {categoryTitle}</span>
              <p className="text-sm text-gray-400 font-normal">{guide.title}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 진행률 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">진행률</span>
              <span className="text-green-400">
                {completedSteps.size}/{guide.steps.length} 완료
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* 가이드 설명 */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <TranslatableContent originalText={guide.description}>
              <p className="text-blue-200">{guide.description}</p>
            </TranslatableContent>
          </div>

          {/* 경고 메시지 */}
          {guide.warning && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <TranslatableContent originalText={guide.warning}>
                  <p className="text-yellow-200 text-sm">{guide.warning}</p>
                </TranslatableContent>
              </div>
            </div>
          )}

          {/* 단계별 가이드 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 단계 목록 (사이드바) */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">단계 목록</h3>
              <div className="space-y-2">
                {guide.steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-full p-3 text-left rounded-lg border transition-all ${
                      currentStep === index
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleStepComplete(index)
                        }}
                        className="flex-shrink-0"
                      >
                        {completedSteps.has(index) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">
                          {index + 1}. {step.title}
                        </div>
                        <div className="text-xs text-gray-400">{completedSteps.has(index) ? "완료됨" : "진행 중"}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 현재 단계 상세 */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-purple-300 border-purple-500/30">
                      단계 {currentStep + 1}
                    </Badge>
                    {completedSteps.has(currentStep) && (
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">완료</Badge>
                    )}
                  </div>
                  <button
                    onClick={() => handleStepComplete(currentStep)}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {completedSteps.has(currentStep) ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <TranslatableContent originalText={guide.steps[currentStep].title} className="mb-4">
                  <h4 className="text-xl font-semibold text-white">{guide.steps[currentStep].title}</h4>
                </TranslatableContent>

                <TranslatableContent originalText={guide.steps[currentStep].description}>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {guide.steps[currentStep].description}
                    </p>
                  </div>
                </TranslatableContent>

                {/* 네비게이션 버튼 */}
                <div className="flex items-center justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>이전 단계</span>
                  </Button>

                  <Button
                    onClick={handleNext}
                    disabled={currentStep === guide.steps.length - 1}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center space-x-2"
                  >
                    <span>다음 단계</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 참고 링크 */}
          {guide.links && guide.links.length > 0 && (
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">참고 링크</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {guide.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-2 rounded border border-gray-600 hover:border-blue-500 transition-colors text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm truncate">{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 완료 상태 */}
          {completedSteps.size === guide.steps.length && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-300 mb-2">실습 완료! 🎉</h3>
              <p className="text-green-200">모든 단계를 완료했습니다. 수고하셨어요!</p>
            </div>
          )}

          {/* 액션 버튼 */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <Button variant="ghost" onClick={onClose} className="text-gray-400">
              {t.close}
            </Button>

            <div className="text-sm text-gray-500">실습을 통해 실제 경험을 쌓아보세요!</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
