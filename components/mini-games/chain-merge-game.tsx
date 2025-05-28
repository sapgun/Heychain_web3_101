"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, RotateCcw, Pause, Play } from "lucide-react"

interface ChainMergeGameProps {
  onClose: () => void
  onComplete: (score: number) => void
}

interface Chain {
  id: string
  level: number
  name: string
  symbol: string
  color: string
  size: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  isStatic: boolean
  sleepCounter: number
}

const CHAIN_LEVELS = [
  { level: 1, name: "Testnet", symbol: "TEST", color: "#94a3b8", size: 20 },
  { level: 2, name: "Dogecoin", symbol: "DOGE", color: "#fbbf24", size: 25 },
  { level: 3, name: "Litecoin", symbol: "LTC", color: "#a3a3a3", size: 30 },
  { level: 4, name: "Polygon", symbol: "MATIC", color: "#8b5cf6", size: 35 },
  { level: 5, name: "Arbitrum", symbol: "ARB", color: "#3b82f6", size: 40 },
  { level: 6, name: "Optimism", symbol: "OP", color: "#ef4444", size: 45 },
  { level: 7, name: "Avalanche", symbol: "AVAX", color: "#e11d48", size: 50 },
  { level: 8, name: "Solana", symbol: "SOL", color: "#9333ea", size: 55 },
  { level: 9, name: "BNB Chain", symbol: "BNB", color: "#f59e0b", size: 60 },
  { level: 10, name: "Ethereum", symbol: "ETH", color: "#6366f1", size: 65 },
  { level: 11, name: "Bitcoin", symbol: "BTC", color: "#f97316", size: 70 },
]

export default function ChainMergeGame({ onClose, onComplete }: ChainMergeGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chainsRef = useRef<Chain[]>([])
  const [nextChain, setNextChain] = useState<Chain | null>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [dropPosition, setDropPosition] = useState(175)
  const [highestLevel, setHighestLevel] = useState(1)
  const [chainCount, setChainCount] = useState(0)
  const gameLoopRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const frameCountRef = useRef<number>(0)

  const CANVAS_WIDTH = 350
  const CANVAS_HEIGHT = 500
  const GROUND_Y = CANVAS_HEIGHT - 50
  const GRAVITY = 0.6
  const FRICTION = 0.85
  const BOUNCE = 0.3
  const MAX_VELOCITY = 8
  const SLEEP_THRESHOLD = 0.1
  const SLEEP_TIME = 60 // 60프레임 동안 정지하면 슬립

  // 새로운 체인 생성
  const createNewChain = useCallback((x = 175) => {
    const level = Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3
    const chainData = CHAIN_LEVELS[level - 1]

    return {
      id: `chain_${Date.now()}_${Math.random()}`,
      level,
      name: chainData.name,
      symbol: chainData.symbol,
      color: chainData.color,
      size: chainData.size,
      radius: chainData.size / 2,
      x,
      y: 50,
      vx: 0,
      vy: 0,
      isStatic: false,
      sleepCounter: 0,
    }
  }, [])

  // 게임 초기화
  const initGame = useCallback(() => {
    chainsRef.current = []
    setScore(0)
    setGameOver(false)
    setHighestLevel(1)
    setChainCount(0)
    setNextChain(createNewChain())
    frameCountRef.current = 0
  }, [createNewChain])

  // 체인 떨어뜨리기
  const dropChain = useCallback(() => {
    if (!nextChain || gameOver || isPaused) return

    const newChain: Chain = {
      ...nextChain,
      id: `chain_${Date.now()}_${Math.random()}`,
      x: dropPosition,
      y: 50,
      vx: 0,
      vy: 1,
      isStatic: false,
      sleepCounter: 0,
    }

    chainsRef.current.push(newChain)
    setChainCount((prev) => prev + 1)
    setNextChain(createNewChain())
  }, [nextChain, gameOver, isPaused, dropPosition, createNewChain])

  // 충돌 감지 (최적화된 버전)
  const checkCollision = (chain1: Chain, chain2: Chain) => {
    const dx = chain1.x - chain2.x
    const dy = chain1.y - chain2.y
    const distanceSquared = dx * dx + dy * dy
    const minDistanceSquared = (chain1.radius + chain2.radius) ** 2
    return distanceSquared < minDistanceSquared
  }

  // 충돌 해결 (최적화된 버전)
  const resolveCollision = (chain1: Chain, chain2: Chain) => {
    const dx = chain1.x - chain2.x
    const dy = chain1.y - chain2.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const minDistance = chain1.radius + chain2.radius

    if (distance < minDistance && distance > 0.1) {
      const overlap = minDistance - distance
      const separationX = (dx / distance) * overlap * 0.5
      const separationY = (dy / distance) * overlap * 0.5

      chain1.x += separationX
      chain1.y += separationY
      chain2.x -= separationX
      chain2.y -= separationY

      // 간단한 속도 교환
      const normalX = dx / distance
      const normalY = dy / distance
      const relativeVelocity = (chain1.vx - chain2.vx) * normalX + (chain1.vy - chain2.vy) * normalY

      if (relativeVelocity > 0) return

      const impulse = -relativeVelocity * 0.4
      chain1.vx += impulse * normalX * 0.5
      chain1.vy += impulse * normalY * 0.5
      chain2.vx -= impulse * normalX * 0.5
      chain2.vy -= impulse * normalY * 0.5

      // 충돌 시 슬립 해제
      chain1.sleepCounter = 0
      chain2.sleepCounter = 0
      chain1.isStatic = false
      chain2.isStatic = false
    }
  }

  // 체인 병합
  const mergeChains = (chain1: Chain, chain2: Chain) => {
    if (chain1.level !== chain2.level || chain1.level >= CHAIN_LEVELS.length) return null

    const newLevel = chain1.level + 1
    const chainData = CHAIN_LEVELS[newLevel - 1]

    return {
      id: `merged_${Date.now()}_${Math.random()}`,
      level: newLevel,
      name: chainData.name,
      symbol: chainData.symbol,
      color: chainData.color,
      size: chainData.size,
      radius: chainData.size / 2,
      x: (chain1.x + chain2.x) / 2,
      y: (chain1.y + chain2.y) / 2,
      vx: (chain1.vx + chain2.vx) * 0.3,
      vy: (chain1.vy + chain2.vy) * 0.3,
      isStatic: false,
      sleepCounter: 0,
    }
  }

  // 최적화된 물리 업데이트
  const updatePhysics = useCallback(() => {
    const chains = chainsRef.current
    frameCountRef.current++

    // 병합할 체인들 찾기
    const toMerge: [number, number][] = []
    const toRemove = new Set<number>()

    // 활성 체인들만 물리 계산
    const activeChains: number[] = []
    chains.forEach((chain, index) => {
      if (!chain.isStatic) {
        activeChains.push(index)
      }
    })

    // 물리 업데이트 (활성 체인만)
    activeChains.forEach((index) => {
      const chain = chains[index]
      if (toRemove.has(index)) return

      // 중력 적용
      chain.vy += GRAVITY

      // 속도 제한
      chain.vx = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, chain.vx))
      chain.vy = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, chain.vy))

      // 위치 업데이트
      chain.x += chain.vx
      chain.y += chain.vy

      // 벽 충돌
      if (chain.x - chain.radius < 0) {
        chain.x = chain.radius
        chain.vx = Math.abs(chain.vx) * BOUNCE
      }
      if (chain.x + chain.radius > CANVAS_WIDTH) {
        chain.x = CANVAS_WIDTH - chain.radius
        chain.vx = -Math.abs(chain.vx) * BOUNCE
      }

      // 바닥 충돌
      if (chain.y + chain.radius > GROUND_Y) {
        chain.y = GROUND_Y - chain.radius
        chain.vy = -Math.abs(chain.vy) * BOUNCE
        chain.vx *= FRICTION
      }

      // 슬립 체크
      const velocityMagnitude = Math.abs(chain.vx) + Math.abs(chain.vy)
      if (velocityMagnitude < SLEEP_THRESHOLD) {
        chain.sleepCounter++
        if (chain.sleepCounter > SLEEP_TIME) {
          chain.isStatic = true
          chain.vx = 0
          chain.vy = 0
        }
      } else {
        chain.sleepCounter = 0
      }

      // 게임 오버 체크
      if (chain.y - chain.radius < 100 && chain.isStatic) {
        setGameOver(true)
      }
    })

    // 충돌 검사 (활성 체인들과 모든 체인 간)
    activeChains.forEach((i) => {
      if (toRemove.has(i)) return
      const chain1 = chains[i]

      for (let j = 0; j < chains.length; j++) {
        if (i >= j || toRemove.has(j)) continue
        const chain2 = chains[j]

        // 거리 기반 조기 컬링
        const dx = chain1.x - chain2.x
        const dy = chain1.y - chain2.y
        const maxDistance = chain1.radius + chain2.radius + 5
        if (Math.abs(dx) > maxDistance || Math.abs(dy) > maxDistance) continue

        if (checkCollision(chain1, chain2)) {
          // 같은 레벨이면 병합 예약
          if (chain1.level === chain2.level && chain1.level < CHAIN_LEVELS.length) {
            toMerge.push([i, j])
          } else {
            // 물리적 충돌 해결
            resolveCollision(chain1, chain2)
          }
        }
      }
    })

    // 병합 처리
    const newChains: Chain[] = []
    toMerge.forEach(([i, j]) => {
      if (!toRemove.has(i) && !toRemove.has(j)) {
        const merged = mergeChains(chains[i], chains[j])
        if (merged) {
          newChains.push(merged)
          toRemove.add(i)
          toRemove.add(j)

          // 점수 추가
          const points = chains[i].level * 10
          setScore((prev) => prev + points)
          setHighestLevel((prev) => Math.max(prev, merged.level))
        }
      }
    })

    // 제거되지 않은 체인들과 새로 병합된 체인들 합치기
    if (toRemove.size > 0 || newChains.length > 0) {
      const remainingChains = chains.filter((_, index) => !toRemove.has(index))
      chainsRef.current = [...remainingChains, ...newChains]
      setChainCount(chainsRef.current.length)
    }
  }, [])

  // 최적화된 게임 루프
  const gameLoop = useCallback(() => {
    if (isPaused || gameOver) return

    updatePhysics()
    gameLoopRef.current = requestAnimationFrame(gameLoop)
  }, [isPaused, gameOver, updatePhysics])

  // 게임 루프 시작/정지
  useEffect(() => {
    if (!isPaused && !gameOver) {
      gameLoopRef.current = requestAnimationFrame(gameLoop)
    } else {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [isPaused, gameOver, gameLoop])

  // 최적화된 캔버스 렌더링
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 캔버스 클리어
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // 배경
    ctx.fillStyle = "#1f2937"
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // 바닥
    ctx.fillStyle = "#374151"
    ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y)

    // 게임 오버 라인
    ctx.strokeStyle = "#ef4444"
    ctx.lineWidth = 2
    ctx.setLineDash([10, 5])
    ctx.beginPath()
    ctx.moveTo(0, 100)
    ctx.lineTo(CANVAS_WIDTH, 100)
    ctx.stroke()
    ctx.setLineDash([])

    // 게임 오버 라인 텍스트
    ctx.fillStyle = "#ef4444"
    ctx.font = "12px Arial"
    ctx.textAlign = "left"
    ctx.fillText("GAME OVER LINE", 10, 95)

    // 드롭 라인
    ctx.strokeStyle = "#6b7280"
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(dropPosition, 0)
    ctx.lineTo(dropPosition, 100)
    ctx.stroke()
    ctx.setLineDash([])

    // 체인들 그리기 (배치 렌더링)
    chainsRef.current.forEach((chain) => {
      // 그림자 효과 (정적 체인은 생략)
      if (!chain.isStatic) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
        ctx.beginPath()
        ctx.arc(chain.x + 2, chain.y + 2, chain.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // 체인 본체
      ctx.fillStyle = chain.color
      ctx.beginPath()
      ctx.arc(chain.x, chain.y, chain.radius, 0, Math.PI * 2)
      ctx.fill()

      // 테두리 (정적 체인은 더 얇게)
      ctx.strokeStyle = chain.isStatic ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = chain.isStatic ? 0.5 : 1
      ctx.stroke()

      // 심볼 텍스트
      ctx.fillStyle = "white"
      ctx.font = `bold ${Math.max(8, chain.radius / 2)}px Arial`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(chain.symbol, chain.x, chain.y)
    })

    // 다음 체인 미리보기
    if (nextChain && !gameOver) {
      ctx.globalAlpha = 0.7

      // 체인
      ctx.fillStyle = nextChain.color
      ctx.beginPath()
      ctx.arc(dropPosition, 30, nextChain.radius, 0, Math.PI * 2)
      ctx.fill()

      // 테두리
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 1
      ctx.stroke()

      // 심볼
      ctx.fillStyle = "white"
      ctx.font = `bold ${Math.max(8, nextChain.radius / 2)}px Arial`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(nextChain.symbol, dropPosition, 30)

      ctx.globalAlpha = 1
    }

    // 게임 오버 오버레이
    if (gameOver) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      ctx.fillStyle = "white"
      ctx.font = "24px Arial"
      ctx.textAlign = "center"
      ctx.fillText("Game Over!", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
      ctx.font = "16px Arial"
      ctx.fillText(`Final Score: ${score}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 40)
    }
  }, [chainCount, nextChain, dropPosition, gameOver, score])

  // 마우스 이벤트
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (gameOver || isPaused) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (CANVAS_WIDTH / rect.width)
    setDropPosition(Math.max(30, Math.min(CANVAS_WIDTH - 30, x)))
  }

  // 캔버스 클릭 핸들러
  const handleCanvasClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      e.preventDefault()
      e.stopPropagation()
      dropChain()
    },
    [dropChain],
  )

  // 게임 초기화
  useEffect(() => {
    initGame()
  }, [initGame])

  // 게임 완료 처리
  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        onComplete(score)
      }, 2000)
    }
  }, [gameOver, score, onComplete])

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-gray-900 border-purple-500/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl text-white">⛓️ 체인 병합 게임</CardTitle>
              <p className="text-gray-400 text-sm">같은 체인끼리 병합해서 더 큰 체인을 만드세요!</p>
            </div>
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* 게임 정보 */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Badge variant="outline" className="text-purple-300 border-purple-500">
                점수: {score}
              </Badge>
              <Badge variant="outline" className="text-blue-300 border-blue-500">
                최고 레벨: {CHAIN_LEVELS[highestLevel - 1]?.name || "Testnet"}
              </Badge>
              <Badge variant="outline" className="text-green-300 border-green-500">
                체인: {chainsRef.current.length}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setIsPaused(!isPaused)} variant="outline" size="sm" disabled={gameOver}>
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </Button>
              <Button onClick={initGame} variant="outline" size="sm">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* 게임 캔버스 */}
          <div className="flex justify-center">
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="border border-gray-700 rounded-lg cursor-crosshair max-w-full h-auto"
              onMouseMove={handleMouseMove}
              onClick={handleCanvasClick}
              style={{ maxHeight: "60vh" }}
              onTouchMove={(e) => {
                if (gameOver || isPaused) return
                e.preventDefault()

                const canvas = canvasRef.current
                if (!canvas) return

                const rect = canvas.getBoundingClientRect()
                const touch = e.touches[0]
                const x = (touch.clientX - rect.left) * (CANVAS_WIDTH / rect.width)
                setDropPosition(Math.max(30, Math.min(CANVAS_WIDTH - 30, x)))
              }}
              onTouchEnd={(e) => {
                e.preventDefault()
                handleCanvasClick(e as any)
              }}
            />
          </div>

          {/* 체인 레벨 가이드 */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-3">🔗 체인 진화 단계</h4>
            <div className="grid grid-cols-6 gap-2">
              {CHAIN_LEVELS.slice(0, 6).map((chain, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center text-white text-xs"
                    style={{ backgroundColor: chain.color }}
                  >
                    {chain.symbol}
                  </div>
                  <div className="text-xs text-gray-400">{chain.name}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-2 text-gray-400 text-xs">... → ETH → BTC (최종 목표!)</div>
          </div>

          {/* 게임 설명 */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
            <h4 className="text-green-300 font-semibold mb-2">🎮 게임 방법</h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p>• 마우스로 위치를 조정하고 클릭해서 체인을 떨어뜨리세요</p>
              <p>• 같은 체인끼리 닿으면 더 큰 체인으로 합쳐집니다</p>
              <p>• 빨간 선을 넘으면 게임 오버! 비트코인을 만들어보세요! 🚀</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
