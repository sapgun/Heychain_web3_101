"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Search,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Zap,
  Shield,
  Coins,
  Crown,
  ArrowRight,
} from "lucide-react"

interface UsageGuideModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UsageGuideModal({ open, onOpenChange }: UsageGuideModalProps) {
  const [activeTab, setActiveTab] = useState("basics")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-purple-500/20 overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <DialogTitle className="text-white text-xl">HeyChain 사용 가이드</DialogTitle>
          </div>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-6 bg-gray-800">
            <TabsTrigger value="basics" className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              기본 사용법
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              AI 채팅
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center">
              <Search className="w-4 h-4 mr-2" />
              검색 기능
            </TabsTrigger>
            <TabsTrigger value="premium" className="flex items-center">
              <Crown className="w-4 h-4 mr-2" />
              프리미엄
            </TabsTrigger>
          </TabsList>

          {/* 기본 사용법 탭 */}
          <TabsContent value="basics" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">HeyChain 시작하기</h3>
              <p className="text-gray-400 text-sm">Web3를 쉽게 배울 수 있는 대화형 학습 플랫폼</p>
            </div>

            <div className="grid gap-6">
              {/* 단계 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">카테고리 선택하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      왼쪽 사이드바에서 관심 있는 Web3 카테고리를 선택하세요. 지갑, 블록체인 기초, NFT 등 다양한 주제가
                      있습니다.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-3 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400/50 mr-3"></div>
                      <span className="text-gray-300 text-sm">👛 지갑 & 신원</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 단계 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">질문 확인하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      카테고리를 선택하면 관련 질문 목록이 표시됩니다. 궁금한 질문을 클릭하여 답변을 확인하세요.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <h5 className="text-sm font-medium text-white mb-1">메타마스크란 무엇이고 어떻게 설치하나요?</h5>
                      <div className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-gray-400">클릭하여 답변 보기</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 단계 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">학습 자료 활용하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      각 답변에는 퀴즈와 실습 가이드가 포함되어 있습니다. 이를 통해 개념을 더 깊이 이해하고 실제로
                      적용해볼 수 있습니다.
                    </p>
                    <div className="flex space-x-3">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">🧠 퀴즈</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">🛠️ 실습 가이드</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* AI 채팅 탭 */}
          <TabsContent value="ai" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">AI 어시스턴트 활용하기</h3>
              <p className="text-gray-400 text-sm">Web3에 대한 모든 질문에 답변해드립니다</p>
            </div>

            <div className="grid gap-6">
              {/* AI 채팅 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">AI 채팅 시작하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      "AI에게 질문하기" 버튼을 클릭하여 AI 어시스턴트와 대화를 시작하세요. 기본 카테고리에 없는 질문도
                      자유롭게 물어볼 수 있습니다.
                    </p>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI에게 질문하기
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI 채팅 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">질문 한도 확인하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      무료 사용자는 하루 5회까지 질문할 수 있습니다. 질문 횟수는 매일 자정에 초기화됩니다.
                    </p>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">남은 질문: 3/5</Badge>
                      <span className="text-xs text-gray-400">매일 자정에 초기화</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI 채팅 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">대화 이어가기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      AI는 이전 대화 내용을 기억하므로, 후속 질문을 통해 더 깊이 있는 대화를 나눌 수 있습니다.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="flex items-start mb-3">
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-2">
                          <MessageCircle className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-purple-500 text-white px-3 py-2 rounded-lg text-xs">NFT란 무엇인가요?</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-gray-800 text-gray-200 px-3 py-2 rounded-lg text-xs">
                          NFT(Non-Fungible Token)는 대체 불가능한 토큰으로...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 검색 기능 탭 */}
          <TabsContent value="search" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">검색 기능 활용하기</h3>
              <p className="text-gray-400 text-sm">원하는 정보를 빠르게 찾아보세요</p>
            </div>

            <div className="grid gap-6">
              {/* 검색 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">검색어 입력하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      상단 검색창에 키워드를 입력하여 관련 질문과 답변을 찾을 수 있습니다.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-2 flex items-center">
                      <Search className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-400 text-sm">메타마스크 설정</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 검색 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">추천 키워드 활용하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      인기 검색어와 추천 키워드를 클릭하여 빠르게 검색할 수 있습니다.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 cursor-pointer"
                      >
                        <span className="text-purple-400 mr-1">#1</span>
                        메타마스크
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 cursor-pointer"
                      >
                        <span className="text-purple-400 mr-1">#2</span>
                        NFT
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20 cursor-pointer"
                      >
                        <span className="text-purple-400 mr-1">#3</span>
                        DeFi
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* 검색 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">검색 결과 확인하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      검색 결과에서 원하는 질문을 클릭하여 자세한 답변을 확인하세요.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-sm font-medium text-white">검색 결과: "메타마스크"</h5>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">3개 항목</Badge>
                      </div>
                      <div className="text-xs text-gray-400">관련 질문들이 여기에 표시됩니다...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 프리미엄 탭 */}
          <TabsContent value="premium" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">프리미엄 기능 활용하기</h3>
              <p className="text-gray-400 text-sm">더 많은 기능과 혜택을 누려보세요</p>
            </div>

            <div className="grid gap-6">
              {/* 프리미엄 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500/20 text-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">무제한 질문하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      프리미엄 구독을 통해 AI 어시스턴트에게 무제한으로 질문할 수 있습니다.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">무제한</Badge>
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                        <Crown className="w-3 h-3 mr-1" />
                        구독하기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 프리미엄 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">토큰 구매하기</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      필요한 만큼만 토큰을 구매하여 질문할 수 있습니다. 토큰 1개 = 질문 1회
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">토큰 10개</Badge>
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Coins className="w-3 h-3 mr-1" />
                        구매하기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 프리미엄 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">프리미엄 혜택</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      프리미엄 사용자는 우선 응답, 고급 분석, 이메일 지원 등 다양한 혜택을 누릴 수 있습니다.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center text-xs text-gray-300">
                        <Shield className="w-3 h-3 text-green-400 mr-1" />
                        우선 응답
                      </div>
                      <div className="flex items-center text-xs text-gray-300">
                        <Zap className="w-3 h-3 text-green-400 mr-1" />
                        고급 분석
                      </div>
                      <div className="flex items-center text-xs text-gray-300">
                        <MessageCircle className="w-3 h-3 text-green-400 mr-1" />
                        이메일 지원
                      </div>
                      <div className="flex items-center text-xs text-gray-300">
                        <Sparkles className="w-3 h-3 text-green-400 mr-1" />
                        새로운 기능 우선 체험
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500">더 궁금한 점이 있으시면 AI 어시스턴트에게 물어보세요!</p>
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            시작하기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UsageGuideModal
