"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, RotateCcw, Clock, Lightbulb, CheckCircle } from "lucide-react"

interface PuzzlePiece {
  id: number
  content: string
  correctPosition: number
  currentPosition: number
}

const blockchainSteps = [
  "사용자가 거래를 요청",
  "거래가 메모리 풀에 대기",
  "채굴자가 거래를 선택",
  "작업 증명(PoW) 수행",
  "새로운 블록 생성",
  "네트워크에 블록 전파",
  "노드들이 블록 검증",
  "블록체인에 블록 추가",
]

interface BlockchainPuzzleProps {
  onClose: () => void
  onComplete: (score: number) => void
}

export default function BlockchainPuzzle({ onClose, onComplete }: BlockchainPuzzleProps) {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([])
  const [draggedPiece, setDraggedPiece] = useState<number | null>(null)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [gameState, setGameState] = useState<"playing" | "finished">("playing")
  const [gameStarted, setGameStarted] = useState(false)
  const [hints, setHints] = useState(3)

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (!gameStarted || gameState !== "playing") return

    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStarted, gameState])

  const initializeGame = () => {
    const shuffledPieces = blockchainSteps
      .map((step, index) => ({
        id: index,
        content: step,
        correctPosition: index,
        currentPosition: index,
      }))
      .sort(() => Math.random() - 0.5)
      .map((piece, index) => ({
        ...piece,
        currentPosition: index,
      }))

    setPieces(shuffledPieces)
    setTimeElapsed(0)
    setGameState("playing")
    setGameStarted(false)
    setHints(3)
  }

  const handleDragStart = (pieceId: number) => {
    if (!gameStarted) setGameStarted(true)
    setDraggedPiece(pieceId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetPosition: number) => {
    if (draggedPiece === null) return

    const draggedPieceData = pieces.find((p) => p.id === draggedPiece)
    const targetPieceData = pieces.find((p) => p.currentPosition === targetPosition)

    if (!draggedPieceData || !targetPieceData) return

    setPieces((prev) =>
      prev.map((piece) => {
        if (piece.id === draggedPiece) {
          return { ...piece, currentPosition: targetPosition }
        }
        if (piece.currentPosition === targetPosition) {
          return { ...piece, currentPosition: draggedPieceData.currentPosition }
        }
        return piece
      }),
    )

    setDraggedPiece(null)

    // 게임 완료 체크
    setTimeout(() => {
      checkGameCompletion()
    }, 100)
  }

  const checkGameCompletion = () => {
    const isComplete = pieces.every((piece) => piece.correctPosition === piece.currentPosition)

    if (isComplete) {
      setGameState("finished")
      const score = Math.max(1000 - timeElapsed * 5 - (3 - hints) * 50, 100)
      onComplete(score)
    }
  }

  const useHint = () => {
    if (hints <= 0) return

    // 잘못된 위치에 있는 첫 번째 조각을 올바른 위치로 이동
    const wrongPiece = pieces.find((piece) => piece.correctPosition !== piece.currentPosition)
    if (!wrongPiece) return

    const correctPositionPiece = pieces.find((piece) => piece.currentPosition === wrongPiece.correctPosition)
    if (!correctPositionPiece) return

    setPieces((prev) =>
      prev.map((piece) => {
        if (piece.id === wrongPiece.id) {
          return { ...piece, currentPosition: wrongPiece.correctPosition }
        }
        if (piece.id === correctPositionPiece.id) {
          return { ...piece, currentPosition: wrongPiece.currentPosition }
        }
        return piece
      }),
    )

    setHints((prev) => prev - 1)

    setTimeout(() => {
      checkGameCompletion()
    }, 100)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getScoreGrade = () => {
    if (timeElapsed <= 60 && hints >= 2) return { grade: "S", color: "text-yellow-400", message: "완벽해요! 🏆" }
    if (timeElapsed <= 90 && hints >= 1) return { grade: "A", color: "text-green-400", message: "훌륭해요! 🌟" }
    if (timeElapsed <= 120) return { grade: "B", color: "text-blue-400", message: "잘했어요! 👍" }
    if (timeElapsed <= 180) return { grade: "C", color: "text-purple-400", message: "괜찮아요! 📚" }
    return { grade: "D", color: "text-gray-400", message: "더 연습해봐요! 💪" }
  }

  if (gameState === "finished") {
    const { grade, color, message } = getScoreGrade()
    const score = Math.max(1000 - timeElapsed * 5 - (3 - hints) * 50, 100)

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-gray-900 border-purple-500/30">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">퍼즐 완성!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className={`text-6xl font-bold ${color} mb-2`}>{grade}</div>
              <div className="text-white text-lg mb-4">{message}</div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 text-sm">시간</div>
                  <div className="text-white font-bold">{formatTime(timeElapsed)}</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 text-sm">남은 힌트</div>
                  <div className="text-white font-bold">{hints}</div>
                </div>
                <div className="bg-gray-800 p-3 rounded col-span-2">
                  <div className="text-gray-400 text-sm">점수</div>
                  <div className="text-purple-400 font-bold text-xl">{score}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={initializeGame} className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500">
                <RotateCcw className="w-4 h-4 mr-2" />
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

  const sortedPieces = [...pieces].sort((a, b) => a.currentPosition - b.currentPosition)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-3xl bg-gray-900 border-purple-500/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-white">블록체인 프로세스 퍼즐</CardTitle>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-300">
                <Clock className="w-4 h-4" />
                {formatTime(timeElapsed)}
              </div>
              <div className="text-gray-300">힌트: {hints}</div>
            </div>
          </div>

          <div className="text-gray-400 text-sm">블록체인 거래 처리 과정을 올바른 순서로 배열하세요!</div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3 mb-6">
            {sortedPieces.map((piece, index) => (
              <div
                key={piece.id}
                draggable
                onDragStart={() => handleDragStart(piece.id)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
                className={`
                  p-4 rounded-lg border-2 cursor-move transition-all duration-200 flex items-center justify-between
                  ${
                    piece.correctPosition === piece.currentPosition
                      ? "border-green-500 bg-green-500/20 text-green-300"
                      : "border-gray-600 bg-gray-800 hover:border-purple-400 text-gray-300 hover:text-white"
                  }
                  ${draggedPiece === piece.id ? "opacity-50 scale-95" : ""}
                `}
              >
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    {index + 1}
                  </Badge>
                  <span>{piece.content}</span>
                </div>
                {piece.correctPosition === piece.currentPosition && <CheckCircle className="w-5 h-5 text-green-400" />}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button onClick={useHint} disabled={hints <= 0} variant="outline" className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                힌트 사용 ({hints})
              </Button>
              <Button onClick={initializeGame} variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />새 게임
              </Button>
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
