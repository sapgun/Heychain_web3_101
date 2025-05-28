"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Brain, Trophy, RotateCcw, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import TranslatableContent from "./translatable-content"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
  quiz: QuizQuestion
  title: string
}

export default function QuizModal({ isOpen, onClose, quiz, title }: QuizModalProps) {
  const { t } = useLanguage()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    const correct = selectedAnswer === quiz.correctAnswer
    setIsCorrect(correct)
    setShowResult(true)
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCorrect(false)
  }

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index ? "border-purple-500 bg-purple-500/20" : "border-gray-600 hover:border-purple-400"
    }

    if (index === quiz.correctAnswer) {
      return "border-green-500 bg-green-500/20 text-green-300"
    }

    if (selectedAnswer === index && selectedAnswer !== quiz.correctAnswer) {
      return "border-red-500 bg-red-500/20 text-red-300"
    }

    return "border-gray-600 text-gray-400"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gray-900 border-purple-500/20 mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">퀴즈: {title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 진행률 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">진행률</span>
              <span className="text-purple-400">{showResult ? "100%" : "진행 중"}</span>
            </div>
            <Progress value={showResult ? 100 : 50} className="h-2" />
          </div>

          {/* 질문 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <TranslatableContent originalText={quiz.question}>
              <h3 className="text-xl font-semibold text-white mb-4">{quiz.question}</h3>
            </TranslatableContent>

            {/* 선택지 */}
            <div className="space-y-3">
              {quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left border-2 rounded-lg transition-all ${getOptionStyle(index)}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <TranslatableContent originalText={option} showTranslateButton={false}>
                      <span>{option}</span>
                    </TranslatableContent>
                    {showResult && index === quiz.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                    )}
                    {showResult && selectedAnswer === index && selectedAnswer !== quiz.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 결과 및 설명 */}
          {showResult && (
            <div
              className={`border rounded-lg p-6 ${
                isCorrect ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"
              }`}
            >
              <div className="flex items-center space-x-2 mb-4">
                {isCorrect ? (
                  <>
                    <Trophy className="w-6 h-6 text-green-400" />
                    <span className="text-green-400 font-semibold text-lg">정답입니다! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-400" />
                    <span className="text-red-400 font-semibold text-lg">틀렸습니다 😅</span>
                  </>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-400">정답: </span>
                  <span className="text-green-300 font-medium">
                    {String.fromCharCode(65 + quiz.correctAnswer)}. {quiz.options[quiz.correctAnswer]}
                  </span>
                </div>

                <div>
                  <span className="text-sm text-gray-400 block mb-2">설명:</span>
                  <TranslatableContent originalText={quiz.explanation}>
                    <p className="text-gray-300 leading-relaxed">{quiz.explanation}</p>
                  </TranslatableContent>
                </div>
              </div>
            </div>
          )}

          {/* 액션 버튼 */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onClose} className="text-gray-400">
              {t.close}
            </Button>

            <div className="flex items-center space-x-2">
              {showResult && (
                <Button variant="outline" onClick={handleReset} className="flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>다시 풀기</span>
                </Button>
              )}

              {!showResult ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  정답 확인
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  완료
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
