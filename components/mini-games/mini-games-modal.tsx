"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Brain, Puzzle, Trophy, Clock, Star, X, Play } from "lucide-react"
import Web3QuizGame from "./web3-quiz-game"
import CryptoMemoryGame from "./crypto-memory-game"
import BlockchainPuzzle from "./blockchain-puzzle"
import ChainMergeGame from "./chain-merge-game"

interface MiniGamesModalProps {
  isOpen: boolean
  onClose: () => void
}

interface GameScore {
  game: string
  score: number
  date: string
  grade: string
}

export default function MiniGamesModal({ isOpen, onClose }: MiniGamesModalProps) {
  const [currentGame, setCurrentGame] = useState<string | null>(null)
  const [scores, setScores] = useState<GameScore[]>([])

  if (!isOpen) return null

  const handleGameComplete = (game: string, score: number) => {
    const grade = score >= 900 ? "S" : score >= 800 ? "A" : score >= 700 ? "B" : score >= 600 ? "C" : "D"

    const newScore: GameScore = {
      game,
      score,
      date: new Date().toLocaleDateString(),
      grade,
    }

    setScores((prev) => [newScore, ...prev.slice(0, 4)]) // 최근 5개만 저장
    setCurrentGame(null)
  }

  const games = [
    {
      id: "quiz",
      title: "Web3 퀴즈 챌린지",
      description: "Web3 지식을 테스트하는 스피드 퀴즈",
      icon: Brain,
      difficulty: "중급",
      time: "5-10분",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "memory",
      title: "암호화폐 메모리 게임",
      description: "암호화폐 심볼을 기억하고 매치하세요",
      icon: Star,
      difficulty: "초급",
      time: "3-7분",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "puzzle",
      title: "블록체인 프로세스 퍼즐",
      description: "블록체인 거래 과정을 올바른 순서로 배열",
      icon: Puzzle,
      difficulty: "고급",
      time: "5-15분",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "merge",
      title: "체인 병합 게임",
      description: "같은 체인끼리 병합해서 비트코인을 만드세요",
      icon: Gamepad2,
      difficulty: "중급",
      time: "10-20분",
      color: "from-orange-500 to-red-500",
    },
  ]

  if (currentGame === "quiz") {
    return (
      <Web3QuizGame
        onClose={() => setCurrentGame(null)}
        onComplete={(score) => handleGameComplete("Web3 퀴즈", score)}
      />
    )
  }

  if (currentGame === "memory") {
    return (
      <CryptoMemoryGame
        onClose={() => setCurrentGame(null)}
        onComplete={(score) => handleGameComplete("메모리 게임", score)}
      />
    )
  }

  if (currentGame === "puzzle") {
    return (
      <BlockchainPuzzle
        onClose={() => setCurrentGame(null)}
        onComplete={(score) => handleGameComplete("블록체인 퍼즐", score)}
      />
    )
  }

  if (currentGame === "merge") {
    return (
      <ChainMergeGame
        onClose={() => setCurrentGame(null)}
        onComplete={(score) => handleGameComplete("체인 병합", score)}
      />
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl bg-gray-900 border-purple-500/30 max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-white">Web3 미니 게임</CardTitle>
                <p className="text-gray-400 text-sm">재미있게 배우는 Web3 지식</p>
              </div>
            </div>
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* 게임 목록 */}
          <div className="grid md:grid-cols-3 gap-4">
            {games.map((game) => (
              <Card key={game.id} className="bg-gray-800 border-gray-700 hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${game.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <game.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-white font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{game.description}</p>

                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {game.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {game.time}
                    </Badge>
                  </div>

                  <Button
                    onClick={() => setCurrentGame(game.id)}
                    className={`w-full bg-gradient-to-r ${game.color} hover:opacity-90`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    게임 시작
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 최근 점수 */}
          {scores.length > 0 && (
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                최근 점수
              </h3>
              <div className="space-y-2">
                {scores.map((score, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`
                          ${
                            score.grade === "S"
                              ? "border-yellow-500 text-yellow-300"
                              : score.grade === "A"
                                ? "border-green-500 text-green-300"
                                : score.grade === "B"
                                  ? "border-blue-500 text-blue-300"
                                  : score.grade === "C"
                                    ? "border-purple-500 text-purple-300"
                                    : "border-gray-500 text-gray-300"
                          }
                        `}
                      >
                        {score.grade}
                      </Badge>
                      <span className="text-white">{score.game}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-400 font-bold">{score.score}점</div>
                      <div className="text-gray-400 text-xs">{score.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 게임 설명 */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-2">🎮 게임 소개</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>
                • <strong>퀴즈 챌린지:</strong> 시간 제한 내에 Web3 문제를 풀어보세요
              </li>
              <li>
                • <strong>메모리 게임:</strong> 암호화폐 심볼을 기억하고 매치하세요
              </li>
              <li>
                • <strong>프로세스 퍼즐:</strong> 블록체인 거래 과정을 순서대로 배열하세요
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
