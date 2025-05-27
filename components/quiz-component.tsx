"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, XCircle, HelpCircle } from "lucide-react"

interface QuizProps {
  quiz: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  language: "ko"
}

export function QuizComponent({ quiz, language }: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const isCorrect = selectedAnswer === quiz.correctAnswer

  return (
    <Card className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 sm:p-6">
      <div className="flex items-center mb-3 sm:mb-4">
        <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2" />
        <h4 className="text-base sm:text-lg font-semibold text-blue-300">퀴즈</h4>
      </div>

      <p className="text-white mb-3 sm:mb-4 font-medium text-sm sm:text-base">{quiz.question}</p>

      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
            className={`
            w-full text-left p-2 sm:p-3 rounded-lg border transition-all duration-200 text-sm sm:text-base
            ${
              showResult
                ? index === quiz.correctAnswer
                  ? "bg-green-500/20 border-green-500/50 text-green-300"
                  : index === selectedAnswer && index !== quiz.correctAnswer
                    ? "bg-red-500/20 border-red-500/50 text-red-300"
                    : "bg-gray-700/30 border-gray-600 text-gray-300"
                : selectedAnswer === index
                  ? "bg-blue-500/20 border-blue-500/50 text-blue-300"
                  : "bg-gray-700/30 border-gray-600 text-gray-300 hover:bg-gray-600/30"
            }
          `}
          >
            <div className="flex items-center">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-current flex items-center justify-center mr-2 sm:mr-3 text-xs font-bold">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
              {showResult && index === quiz.correctAnswer && (
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 ml-auto" />
              )}
              {showResult && index === selectedAnswer && index !== quiz.correctAnswer && (
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 ml-auto" />
              )}
            </div>
          </button>
        ))}
      </div>

      {!showResult ? (
        <Button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          답안 제출
        </Button>
      ) : (
        <div className="space-y-4">
          <div
            className={`p-3 sm:p-4 rounded-lg ${isCorrect ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}
          >
            <div className="flex items-center mb-2">
              {isCorrect ? (
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
              ) : (
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2" />
              )}
              <span className={`font-semibold text-sm sm:text-base ${isCorrect ? "text-green-300" : "text-red-300"}`}>
                {isCorrect ? "정답입니다!" : "틀렸습니다."}
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">{quiz.explanation}</p>
          </div>
          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
          >
            다시 풀기
          </Button>
        </div>
      )}
    </Card>
  )
}
