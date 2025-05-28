"use client"

import type React from "react"
import { useState } from "react"

interface Quiz {
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizComponentProps {
  quiz: Quiz
  onAnswer: (isCorrect: boolean) => void
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (index: number) => {
    if (answered) return

    setSelectedAnswer(index)
    setAnswered(true)

    const isCorrect = index === quiz.correctAnswer
    onAnswer(isCorrect)
  }

  return (
    <div className="space-y-4">
      <p className="text-lg sm:text-xl font-semibold text-gray-200 leading-relaxed">{quiz.question}</p>
      <div className="grid gap-4">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={answered}
            className={`
              w-full text-left p-4 rounded-lg border transition-all duration-200 min-h-[52px] flex items-center
              ${
                answered
                  ? index === quiz.correctAnswer
                    ? "bg-green-500/20 border-green-500/50 text-green-300"
                    : selectedAnswer === index
                      ? "bg-red-500/20 border-red-500/50 text-red-300"
                      : "bg-gray-700/30 border-gray-600 text-gray-400"
                  : "bg-gray-700/30 border-gray-600 text-gray-300 hover:bg-gray-600/50 hover:border-gray-500 active:scale-98"
              }
            `}
          >
            <span className="text-sm sm:text-base leading-relaxed">{option}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizComponent
