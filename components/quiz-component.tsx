"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface Quiz {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizComponentProps {
  quiz: Quiz
  language: "ko" | "en"
}

export function QuizComponent({ quiz, language }: QuizComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    setHasAnswered(true)
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setHasAnswered(false)
  }

  const isCorrect = selectedAnswer === quiz.correctAnswer

  return (
    <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
            🧠 {language === "ko" ? "퀴즈" : "Quiz"}
          </Badge>
          {hasAnswered && (
            <Button variant="ghost" size="sm" onClick={handleReset} className="text-gray-400 hover:text-white">
              <RotateCcw className="w-4 h-4 mr-1" />
              {language === "ko" ? "다시" : "Reset"}
            </Button>
          )}
        </div>

        <h4 className="text-white font-medium">{quiz.question}</h4>

        <div className="space-y-2">
          {quiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={hasAnswered}
              className={`w-full text-left p-3 rounded-lg border transition-all ${
                hasAnswered
                  ? index === quiz.correctAnswer
                    ? "bg-green-500/20 border-green-500/50 text-green-300"
                    : index === selectedAnswer && selectedAnswer !== quiz.correctAnswer
                      ? "bg-red-500/20 border-red-500/50 text-red-300"
                      : "bg-gray-700/30 border-gray-600/30 text-gray-400"
                  : selectedAnswer === index
                    ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                    : "bg-gray-700/30 border-gray-600/30 text-gray-300 hover:bg-gray-600/30 hover:border-gray-500/50"
              }`}
            >
              <div className="flex items-center">
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center mr-3 text-xs">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
                {hasAnswered && index === quiz.correctAnswer && (
                  <CheckCircle className="w-4 h-4 ml-auto text-green-400" />
                )}
                {hasAnswered && index === selectedAnswer && selectedAnswer !== quiz.correctAnswer && (
                  <XCircle className="w-4 h-4 ml-auto text-red-400" />
                )}
              </div>
            </button>
          ))}
        </div>

        {!hasAnswered && selectedAnswer !== null && (
          <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700">
            {language === "ko" ? "답안 제출" : "Submit Answer"}
          </Button>
        )}

        {showResult && (
          <div
            className={`p-4 rounded-lg border ${
              isCorrect
                ? "bg-green-500/10 border-green-500/30 text-green-300"
                : "bg-red-500/10 border-red-500/30 text-red-300"
            }`}
          >
            <div className="flex items-center mb-2">
              {isCorrect ? <CheckCircle className="w-5 h-5 mr-2" /> : <XCircle className="w-5 h-5 mr-2" />}
              <span className="font-medium">
                {isCorrect
                  ? language === "ko"
                    ? "정답입니다!"
                    : "Correct!"
                  : language === "ko"
                    ? "틀렸습니다."
                    : "Incorrect."}
              </span>
            </div>
            <p className="text-sm text-gray-300">{quiz.explanation}</p>
          </div>
        )}
      </div>
    </Card>
  )
}

export default QuizComponent
