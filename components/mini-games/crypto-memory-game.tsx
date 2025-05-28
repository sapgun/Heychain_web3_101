"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, RotateCcw, Clock } from "lucide-react"

interface MemoryCard {
  id: number
  symbol: string
  name: string
  isFlipped: boolean
  isMatched: boolean
}

const cryptoCards = [
  { symbol: "₿", name: "Bitcoin" },
  { symbol: "Ξ", name: "Ethereum" },
  { symbol: "◎", name: "Solana" },
  { symbol: "⚡", name: "Lightning" },
  { symbol: "🔗", name: "Chainlink" },
  { symbol: "🦄", name: "Uniswap" },
  { symbol: "🥞", name: "PancakeSwap" },
  { symbol: "🌊", name: "SushiSwap" },
]

interface CryptoMemoryGameProps {
  onClose: () => void
  onComplete: (score: number) => void
}

export default function CryptoMemoryGame({ onClose, onComplete }: CryptoMemoryGameProps) {
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [moves, setMoves] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [gameState, setGameState] = useState<"playing" | "finished">("playing")
  const [gameStarted, setGameStarted] = useState(false)

  // 게임 초기화
  useEffect(() => {
    initializeGame()
  }, [])

  // 타이머
  useEffect(() => {
    if (!gameStarted || gameState !== "playing") return

    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStarted, gameState])

  const initializeGame = () => {
    const shuffledCards = [...cryptoCards, ...cryptoCards]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        symbol: card.symbol,
        name: card.name,
        isFlipped: false,
        isMatched: false,
      }))

    setCards(shuffledCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setTimeElapsed(0)
    setGameState("playing")
    setGameStarted(false)
  }

  const handleCardClick = (cardId: number) => {
    if (!gameStarted) setGameStarted(true)

    if (flippedCards.length === 2) return
    if (flippedCards.includes(cardId)) return
    if (cards[cardId].isMatched) return

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    setCards((prev) => prev.map((card) => (card.id === cardId ? { ...card, isFlipped: true } : card)))

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1)

      const [firstCard, secondCard] = newFlippedCards.map((id) => cards[id])

      if (firstCard.name === secondCard.name) {
        // 매치 성공
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) => (newFlippedCards.includes(card.id) ? { ...card, isMatched: true } : card)),
          )
          setMatchedPairs((prev) => prev + 1)
          setFlippedCards([])

          // 게임 완료 체크
          if (matchedPairs + 1 === cryptoCards.length) {
            setGameState("finished")
            const score = Math.max(1000 - moves * 10 - timeElapsed * 2, 100)
            onComplete(score)
          }
        }, 1000)
      } else {
        // 매치 실패
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) => (newFlippedCards.includes(card.id) ? { ...card, isFlipped: false } : card)),
          )
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getScoreGrade = () => {
    if (moves <= 10 && timeElapsed <= 30) return { grade: "S", color: "text-yellow-400", message: "완벽해요! 🏆" }
    if (moves <= 15 && timeElapsed <= 45) return { grade: "A", color: "text-green-400", message: "훌륭해요! 🌟" }
    if (moves <= 20 && timeElapsed <= 60) return { grade: "B", color: "text-blue-400", message: "잘했어요! 👍" }
    if (moves <= 25 && timeElapsed <= 90) return { grade: "C", color: "text-purple-400", message: "괜찮아요! 📚" }
    return { grade: "D", color: "text-gray-400", message: "더 연습해봐요! 💪" }
  }

  if (gameState === "finished") {
    const { grade, color, message } = getScoreGrade()
    const score = Math.max(1000 - moves * 10 - timeElapsed * 2, 100)

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
              <div className="text-white text-lg mb-4">{message}</div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 text-sm">시간</div>
                  <div className="text-white font-bold">{formatTime(timeElapsed)}</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-gray-400 text-sm">이동 횟수</div>
                  <div className="text-white font-bold">{moves}</div>
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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-gray-900 border-purple-500/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-white">암호화폐 메모리 게임</CardTitle>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-300">
                <Clock className="w-4 h-4" />
                {formatTime(timeElapsed)}
              </div>
              <div className="text-gray-300">이동: {moves}</div>
              <div className="text-gray-300">
                매치: {matchedPairs}/{cryptoCards.length}
              </div>
            </div>
          </div>

          <div className="text-gray-400 text-sm">같은 암호화폐 카드를 찾아 매치하세요!</div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  aspect-square rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-center text-3xl font-bold
                  ${
                    card.isMatched
                      ? "border-green-500 bg-green-500/20 text-green-300"
                      : card.isFlipped
                        ? "border-purple-500 bg-purple-500/20 text-white"
                        : "border-gray-600 bg-gray-800 hover:border-purple-400 hover:bg-gray-700"
                  }
                  ${flippedCards.includes(card.id) ? "scale-105" : ""}
                `}
              >
                {card.isFlipped || card.isMatched ? (
                  <div className="text-center">
                    <div className="text-2xl mb-1">{card.symbol}</div>
                    <div className="text-xs text-gray-400">{card.name}</div>
                  </div>
                ) : (
                  <div className="text-gray-600">?</div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Button onClick={initializeGame} variant="outline" className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />새 게임
            </Button>
            <Button onClick={onClose} variant="ghost" className="text-gray-400">
              게임 종료
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
