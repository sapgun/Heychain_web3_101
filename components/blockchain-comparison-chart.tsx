"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { InfoIcon, BarChart3, RadarIcon, Table2 } from "lucide-react"
import {
  blockchainComparisonData,
  blockchainRadarData,
  blockchainTechStackData,
} from "@/app/data/blockchain-comparison-data"

interface BlockchainComparisonChartProps {
  language?: "ko" | "en"
}

export function BlockchainComparisonChart({ language = "ko" }: BlockchainComparisonChartProps) {
  const [activeTab, setActiveTab] = useState("bar")

  const texts = {
    title: language === "ko" ? "블록체인 비교 차트" : "Blockchain Comparison Chart",
    description:
      language === "ko"
        ? "주요 블록체인의 성능과 특성을 비교합니다"
        : "Compare performance and characteristics of major blockchains",
    barChart: language === "ko" ? "막대 차트" : "Bar Chart",
    radarChart: language === "ko" ? "레이더 차트" : "Radar Chart",
    techStack: language === "ko" ? "기술 스택" : "Tech Stack",
    note: language === "ko" ? "참고" : "Note",
    noteText:
      language === "ko"
        ? "데이터는 2023년 기준이며, 네트워크 상황에 따라 실제 값은 다를 수 있습니다."
        : "Data is based on 2023 and actual values may vary depending on network conditions.",
  }

  return (
    <Card className="bg-gray-800/50 border-purple-500/20 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white text-xl">{texts.title}</CardTitle>
            <CardDescription className="text-gray-400">{texts.description}</CardDescription>
          </div>
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-300 border-yellow-500/30 flex items-center">
            <InfoIcon className="w-3 h-3 mr-1" />
            {texts.note}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="bar" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 bg-gray-700/50">
            <TabsTrigger value="bar" className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              {texts.barChart}
            </TabsTrigger>
            <TabsTrigger value="radar" className="flex items-center">
              <RadarIcon className="w-4 h-4 mr-2" />
              {texts.radarChart}
            </TabsTrigger>
            <TabsTrigger value="tech" className="flex items-center">
              <Table2 className="w-4 h-4 mr-2" />
              {texts.techStack}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bar" className="space-y-6">
            <BarChartComparison />
          </TabsContent>

          <TabsContent value="radar" className="space-y-6">
            <RadarChartComparison />
          </TabsContent>

          <TabsContent value="tech" className="space-y-6">
            <TechStackComparison />
          </TabsContent>
        </Tabs>

        <div className="text-xs text-gray-500 mt-4 italic">{texts.noteText}</div>
      </CardContent>
    </Card>
  )
}

// 막대 차트 비교 컴포넌트
function BarChartComparison() {
  const [selectedMetric, setSelectedMetric] = useState<keyof typeof blockchainComparisonData>("tps")
  const metricData = blockchainComparisonData[selectedMetric]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.keys(blockchainComparisonData).map((key) => (
          <Badge
            key={key}
            variant="outline"
            className={`cursor-pointer transition-all ${
              selectedMetric === key
                ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                : "bg-gray-700/30 text-gray-400 border-gray-600 hover:bg-gray-700/50"
            }`}
            onClick={() => setSelectedMetric(key as keyof typeof blockchainComparisonData)}
          >
            {blockchainComparisonData[key as keyof typeof blockchainComparisonData].title}
          </Badge>
        ))}
      </div>

      <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-white font-medium">{metricData.title}</h4>
          <span className="text-xs text-gray-400">{metricData.description}</span>
        </div>

        <div className="space-y-4 mt-6">
          {metricData.data
            .slice()
            .sort((a, b) => (metricData.lowerIsBetter ? a.value - b.value : b.value - a.value))
            .map((item) => {
              // 로그 스케일 적용 (옵션)
              let percentage
              if (metricData.logScale) {
                const logMax = Math.log(metricData.maxValue)
                const logValue = Math.log(item.value)
                percentage = (logValue / logMax) * 100
              } else {
                percentage = (item.value / metricData.maxValue) * 100
              }

              return (
                <div key={item.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-gray-300 font-mono">
                      {item.value < 0.01 ? item.value.toExponential(2) : item.value.toLocaleString()} {metricData.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.max(percentage, 1)}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

// 레이더 차트 비교 컴포넌트
function RadarChartComparison() {
  const [selectedChains, setSelectedChains] = useState<string[]>(blockchainRadarData.map((chain) => chain.name))

  const toggleChain = (chainName: string) => {
    if (selectedChains.includes(chainName)) {
      if (selectedChains.length > 1) {
        setSelectedChains(selectedChains.filter((name) => name !== chainName))
      }
    } else {
      setSelectedChains([...selectedChains, chainName])
    }
  }

  // 레이더 차트에 사용할 특성들
  const features = Object.keys(blockchainRadarData[0].data)

  // 각 특성의 최대값 (5)
  const maxValue = 5

  // 차트 크기 계산
  const size = 300
  const centerX = size / 2
  const centerY = size / 2
  const radius = size * 0.4

  // 각 특성의 각도 계산
  const angleStep = (Math.PI * 2) / features.length

  // 특성 위치 계산
  const featurePoints = features.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2 // -90도에서 시작
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      label: {
        x: centerX + (radius + 20) * Math.cos(angle),
        y: centerY + (radius + 20) * Math.sin(angle),
      },
      angle,
    }
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {blockchainRadarData.map((chain) => (
          <Badge
            key={chain.name}
            variant="outline"
            className={`cursor-pointer transition-all ${
              selectedChains.includes(chain.name)
                ? "bg-opacity-20 border-opacity-50"
                : "bg-gray-700/30 text-gray-400 border-gray-600 hover:bg-gray-700/50"
            }`}
            style={{
              backgroundColor: selectedChains.includes(chain.name) ? `${chain.color}33` : undefined,
              borderColor: selectedChains.includes(chain.name) ? `${chain.color}88` : undefined,
              color: selectedChains.includes(chain.name) ? chain.color : undefined,
            }}
            onClick={() => toggleChain(chain.name)}
          >
            {chain.name}
          </Badge>
        ))}
      </div>

      <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-700 flex justify-center">
        <div className="relative" style={{ width: size, height: size }}>
          {/* 배경 그리드 */}
          {[1, 2, 3, 4, 5].map((level) => (
            <polygon
              key={`level-${level}`}
              points={featurePoints
                .map((point) => {
                  const ratio = level / maxValue
                  const x = centerX + (point.x - centerX) * ratio
                  const y = centerY + (point.y - centerY) * ratio
                  return `${x},${y}`
                })
                .join(" ")}
              fill="none"
              stroke="#4B5563"
              strokeWidth="1"
              opacity={level === 5 ? 0.7 : 0.3}
            />
          ))}

          {/* 축 */}
          {featurePoints.map((point, i) => (
            <line
              key={`axis-${i}`}
              x1={centerX}
              y1={centerY}
              x2={point.x}
              y2={point.y}
              stroke="#4B5563"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}

          {/* 특성 라벨 */}
          {featurePoints.map((point, i) => (
            <text
              key={`label-${i}`}
              x={point.label.x}
              y={point.label.y}
              textAnchor={
                point.angle === -Math.PI / 2
                  ? "middle"
                  : point.angle > -Math.PI / 2 && point.angle < Math.PI / 2
                    ? "start"
                    : "end"
              }
              dominantBaseline={
                point.angle === Math.PI / 2 ? "hanging" : point.angle > 0 && point.angle < Math.PI ? "hanging" : "auto"
              }
              fontSize="10"
              fill="#9CA3AF"
            >
              {features[i]}
            </text>
          ))}

          {/* 체인별 데이터 */}
          {selectedChains.map((chainName) => {
            const chain = blockchainRadarData.find((c) => c.name === chainName)
            if (!chain) return null

            // 각 특성의 값에 따른 점 위치 계산
            const points = features.map((feature, i) => {
              const value = chain.data[feature as keyof typeof chain.data] as number
              const ratio = value / maxValue
              const angle = i * angleStep - Math.PI / 2
              const x = centerX + radius * ratio * Math.cos(angle)
              const y = centerY + radius * ratio * Math.sin(angle)
              return `${x},${y}`
            })

            return (
              <g key={`chain-${chainName}`}>
                <polygon
                  points={points.join(" ")}
                  fill={`${chain.color}33`}
                  stroke={chain.color}
                  strokeWidth="2"
                  opacity="0.8"
                />
                {features.map((feature, i) => {
                  const value = chain.data[feature as keyof typeof chain.data] as number
                  const ratio = value / maxValue
                  const angle = i * angleStep - Math.PI / 2
                  const x = centerX + radius * ratio * Math.cos(angle)
                  const y = centerY + radius * ratio * Math.sin(angle)

                  return <circle key={`point-${chainName}-${i}`} cx={x} cy={y} r="3" fill={chain.color} />
                })}
              </g>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// 기술 스택 비교 컴포넌트
function TechStackComparison() {
  const [selectedChains, setSelectedChains] = useState<string[]>(blockchainTechStackData.map((chain) => chain.name))

  const toggleChain = (chainName: string) => {
    if (selectedChains.includes(chainName)) {
      if (selectedChains.length > 1) {
        setSelectedChains(selectedChains.filter((name) => name !== chainName))
      }
    } else {
      setSelectedChains([...selectedChains, chainName])
    }
  }

  // 기술 스택 속성들
  const techProperties = Object.keys(blockchainTechStackData[0].data)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {blockchainTechStackData.map((chain) => (
          <Badge
            key={chain.name}
            variant="outline"
            className={`cursor-pointer transition-all ${
              selectedChains.includes(chain.name)
                ? "bg-opacity-20 border-opacity-50"
                : "bg-gray-700/30 text-gray-400 border-gray-600 hover:bg-gray-700/50"
            }`}
            style={{
              backgroundColor: selectedChains.includes(chain.name) ? `${chain.color}33` : undefined,
              borderColor: selectedChains.includes(chain.name) ? `${chain.color}88` : undefined,
              color: selectedChains.includes(chain.name) ? chain.color : undefined,
            }}
            onClick={() => toggleChain(chain.name)}
          >
            {chain.name}
          </Badge>
        ))}
      </div>

      <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-700 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2 px-3 text-gray-400 font-medium">특성</th>
              {selectedChains.map((chainName) => {
                const chain = blockchainTechStackData.find((c) => c.name === chainName)
                if (!chain) return null

                return (
                  <th
                    key={`header-${chainName}`}
                    className="text-left py-2 px-3 font-medium"
                    style={{ color: chain.color }}
                  >
                    {chain.name}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {techProperties.map((property) => (
              <tr key={`row-${property}`} className="border-b border-gray-700/50">
                <td className="py-3 px-3 text-white font-medium">{property}</td>
                {selectedChains.map((chainName) => {
                  const chain = blockchainTechStackData.find((c) => c.name === chainName)
                  if (!chain) return null

                  const value = chain.data[property as keyof typeof chain.data]

                  return (
                    <td key={`cell-${chainName}-${property}`} className="py-3 px-3 text-gray-300">
                      {value}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
