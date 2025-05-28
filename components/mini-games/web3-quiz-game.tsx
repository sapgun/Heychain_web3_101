"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Zap, Clock, CheckCircle, XCircle } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  difficulty: "easy" | "medium" | "hard"
  category: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "DeFi는 무엇의 줄임말인가요?",
    options: ["Decentralized Finance", "Digital Finance", "Distributed Finance", "Delegated Finance"],
    correct: 0,
    explanation: "DeFi는 Decentralized Finance(탈중앙화 금융)의 줄임말입니다.",
    difficulty: "easy",
    category: "DeFi",
  },
  {
    id: 2,
    question: "이더리움의 네이티브 토큰은 무엇인가요?",
    options: ["BTC", "ETH", "USDT", "BNB"],
    correct: 1,
    explanation: "이더리움의 네이티브 토큰은 ETH(Ether)입니다.",
    difficulty: "easy",
    category: "Ethereum",
  },
  {
    id: 3,
    question: "NFT에서 'Non-Fungible'의 의미는?",
    options: ["교환 가능한", "대체 불가능한", "분할 가능한", "복제 가능한"],
    correct: 1,
    explanation: "Non-Fungible은 '대체 불가능한'이라는 의미로, 각각이 고유한 가치를 가집니다.",
    difficulty: "medium",
    category: "NFT",
  },
  {
    id: 4,
    question: "Layer 2 솔루션의 주요 목적은?",
    options: ["보안 강화", "확장성 개선", "탈중앙화 증대", "익명성 보장"],
    correct: 1,
    explanation: "Layer 2는 주로 메인넷의 확장성을 개선하여 더 빠르고 저렴한 거래를 가능하게 합니다.",
    difficulty: "medium",
    category: "Layer 2",
  },
  {
    id: 5,
    question: "zk-SNARK에서 'zk'는 무엇을 의미하나요?",
    options: ["Zero Knowledge", "Zone Keeper", "Zeta Key", "Zip Key"],
    correct: 0,
    explanation: "zk는 Zero Knowledge(영지식)를 의미하며, 정보를 공개하지 않고도 증명할 수 있는 기술입니다.",
    difficulty: "hard",
    category: "Privacy",
  },
]

interface Web3QuizGameProps {
  onClose: () => void
  onComplete: (score: number) => void
}

export default function Web3QuizGame({ onClose, onComplete }: Web3QuizGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameState, setGameState] = useState<"playing" | "answered" | "finished">("playing")
  const [answers, setAnswers] = useState<boolean[]>([])

  // 타이머
  useEffect(() => {
    if (gameState !== "playing" || timeLeft === 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState, timeLeft])

  const handleTimeUp = () => {
    setAnswers((prev) => [...prev, false])
    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedAnswer(null)
        setTimeLeft(30)
        setGameState("playing")
      }, 1500)
    } else {
      setGameState("finished")
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (gameState !== "playing") return

    setSelectedAnswer(answerIndex)
    setGameState("answered")

    const isCorrect = answerIndex === quizQuestions[currentQuestion].correct
    setAnswers((prev) => [...prev, isCorrect])

    if (isCorrect) {
      const points =
        quizQuestions[currentQuestion].difficulty === "easy"
          ? 10
          : quizQuestions[currentQuestion].difficulty === "medium"
            ? 20
            : 30
      setScore((prev) => prev + points + Math.max(0, timeLeft - 10)) // 시간 보너스
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedAnswer(null)
        setTimeLeft(30)
        setGameState("playing")
      } else {
        setGameState("finished")
        onComplete(score)
      }
    }, 2000)
  }

  const getScoreGrade = () => {
    const percentage = (score / (quizQuestions.length * 30)) * 100
    if (percentage >= 90) return { grade: "S", color: "text-yellow-400", message: "완벽해요! 🏆" }
    if (percentage >= 80) return { grade: "A", color: "text-green-400", message: "훌륭해요! 🌟" }
    if (percentage >= 70) return { grade: "B", color: "text-blue-400", message: "잘했어요! 👍" }
    if (percentage >= 60) return { grade: "C", color: "text-purple-400", message: "괜찮아요! 📚" }
    return { grade: "D", color: "text-gray-400", message: "더 공부해봐요! 💪" }
  }

  if (gameState === "finished") {
    const { grade, color, message } = getScoreGrade()

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-gray-900 border-purple-500/30">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">게임 완료!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className={`text-6xl font-bold ${color} mb-2`}>{grade}</div>
              <div className="text-white text-lg mb-2">{message}</div>
              <div className="text-gray-300">
                점수: <span className="text-purple-400 font-bold">{score}</span>점
              </div>
              <div className="text-gray-300">
                정답률:{" "}
                <span className="text-green-400 font-bold">
                  {answers.filter(Boolean).length}/{quizQuestions.length}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-semibold">문제별 결과</h4>
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                  <span className="text-gray-300 text-sm">{q.category}</span>
                  {answers[index] ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => window.location.reload()}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500"
              >
                다시 하기
              </Button>
              <Button onClick={onClose} variant="outline" className="flex-1">
                닫기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-gray-900 border-purple-500/30">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="border-purple-500/30 text-purple-300">
              {question.category}
            </Badge>
            <Badge
              variant="outline"
              className={`${
                question.difficulty === "easy"
                  ? "border-green-500/30 text-green-300"
                  : question.difficulty === "medium"
                    ? "border-yellow-500/30 text-yellow-300"
                    : "border-red-500/30 text-red-300"
              }`}
            >
              {question.difficulty}
            </Badge>
          </div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">
              문제 {currentQuestion + 1} / {quizQuestions.length}
            </span>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span className={timeLeft <= 10 ? "text-red-400 animate-pulse" : ""}>{timeLeft}초</span>
            </div>
          </div>

          <Progress value={progress} className="mb-4" />

          <CardTitle className="text-xl text-white leading-relaxed">{question.question}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={gameState !== "playing"}
                variant="outline"
                className={`p-4 h-auto text-left justify-start transition-all duration-200 ${
                  gameState === "answered" && index === question.correct
                    ? "border-green-500 bg-green-500/20 text-green-300"
                    : gameState === "answered" && index === selectedAnswer && index !== question.correct
                      ? "border-red-500 bg-red-500/20 text-red-300"
                      : selectedAnswer === index
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white"
                }`}
              >
                <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </div>

          {gameState === "answered" && (
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">설명</span>
              </div>
              <p className="text-gray-300">{question.explanation}</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">점수: {score}</span>
            </div>
            <Button onClick={onClose} variant="ghost" className="text-gray-400">
              게임 종료
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
