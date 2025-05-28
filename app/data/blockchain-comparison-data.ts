// 블록체인 비교 데이터
export const blockchainComparisonData = {
  // 처리 속도 (TPS)
  tps: {
    title: "처리 속도 (TPS)",
    description: "초당 처리 가능한 트랜잭션 수",
    data: [
      { name: "Ethereum", value: 15, color: "#627EEA" },
      { name: "Avalanche", value: 4500, color: "#E84142" },
      { name: "Solana", value: 65000, color: "#00FFA3" },
      { name: "Aptos", value: 10000, color: "#2ED8A7" },
      { name: "Sui", value: 120000, color: "#6FBCF0" },
      { name: "NEAR", value: 100000, color: "#000000" },
    ],
    maxValue: 150000,
    unit: "TPS",
  },

  // 완결성 시간
  finality: {
    title: "완결성 시간",
    description: "트랜잭션이 확정되는 데 걸리는 시간",
    data: [
      { name: "Ethereum", value: 12, color: "#627EEA" },
      { name: "Avalanche", value: 2, color: "#E84142" },
      { name: "Solana", value: 0.4, color: "#00FFA3" },
      { name: "Aptos", value: 0.7, color: "#2ED8A7" },
      { name: "Sui", value: 3, color: "#6FBCF0" },
      { name: "NEAR", value: 2, color: "#000000" },
    ],
    maxValue: 15,
    unit: "초",
    lowerIsBetter: true,
  },

  // 평균 트랜잭션 수수료
  fees: {
    title: "평균 트랜잭션 수수료",
    description: "일반적인 트랜잭션 처리 비용",
    data: [
      { name: "Ethereum", value: 2.5, color: "#627EEA" },
      { name: "Avalanche", value: 0.25, color: "#E84142" },
      { name: "Solana", value: 0.00025, color: "#00FFA3" },
      { name: "Aptos", value: 0.1, color: "#2ED8A7" },
      { name: "Sui", value: 0.1, color: "#6FBCF0" },
      { name: "NEAR", value: 0.05, color: "#000000" },
    ],
    maxValue: 3,
    unit: "USD",
    lowerIsBetter: true,
    logScale: true,
  },

  // 검증자 수
  validators: {
    title: "검증자 수",
    description: "네트워크를 검증하는 노드 수",
    data: [
      { name: "Ethereum", value: 500000, color: "#627EEA" },
      { name: "Avalanche", value: 1200, color: "#E84142" },
      { name: "Solana", value: 1800, color: "#00FFA3" },
      { name: "Aptos", value: 100, color: "#2ED8A7" },
      { name: "Sui", value: 120, color: "#6FBCF0" },
      { name: "NEAR", value: 100, color: "#000000" },
    ],
    maxValue: 600000,
    unit: "개",
    logScale: true,
  },
}

// 블록체인 특성 레이더 차트 데이터
export const blockchainRadarData = [
  {
    name: "Ethereum",
    color: "#627EEA",
    data: {
      "처리 속도": 1,
      확장성: 2,
      "개발 용이성": 5,
      "생태계 성숙도": 5,
      탈중앙화: 5,
      보안성: 5,
    },
  },
  {
    name: "Avalanche",
    color: "#E84142",
    data: {
      "처리 속도": 4,
      확장성: 4,
      "개발 용이성": 4,
      "생태계 성숙도": 4,
      탈중앙화: 3,
      보안성: 4,
    },
  },
  {
    name: "Solana",
    color: "#00FFA3",
    data: {
      "처리 속도": 5,
      확장성: 5,
      "개발 용이성": 3,
      "생태계 성숙도": 4,
      탈중앙화: 3,
      보안성: 3,
    },
  },
  {
    name: "Aptos",
    color: "#2ED8A7",
    data: {
      "처리 속도": 4,
      확장성: 4,
      "개발 용이성": 2,
      "생태계 성숙도": 2,
      탈중앙화: 3,
      보안성: 4,
    },
  },
  {
    name: "Sui",
    color: "#6FBCF0",
    data: {
      "처리 속도": 5,
      확장성: 5,
      "개발 용이성": 2,
      "생태계 성숙도": 1,
      탈중앙화: 2,
      보안성: 3,
    },
  },
  {
    name: "NEAR",
    color: "#000000",
    data: {
      "처리 속도": 4,
      확장성: 4,
      "개발 용이성": 4,
      "생태계 성숙도": 3,
      탈중앙화: 3,
      보안성: 4,
    },
  },
]

// 블록체인 기술 스택 비교 데이터
export const blockchainTechStackData = [
  {
    name: "Ethereum",
    color: "#627EEA",
    logo: "/ethereum-logo.svg",
    data: {
      "프로그래밍 언어": "Solidity",
      "합의 메커니즘": "PoS (이전 PoW)",
      "스마트 컨트랙트": "지원",
      "EVM 호환성": "네이티브",
      샤딩: "ETH 2.0에서 계획",
      "출시 연도": "2015",
    },
  },
  {
    name: "Avalanche",
    color: "#E84142",
    logo: "/avalanche-logo.svg",
    data: {
      "프로그래밍 언어": "Solidity, C-Chain",
      "합의 메커니즘": "Avalanche 합의",
      "스마트 컨트랙트": "지원",
      "EVM 호환성": "C-Chain에서 지원",
      샤딩: "서브넷 아키텍처",
      "출시 연도": "2020",
    },
  },
  {
    name: "Solana",
    color: "#00FFA3",
    logo: "/solana-logo.svg",
    data: {
      "프로그래밍 언어": "Rust, C, C++",
      "합의 메커니즘": "PoH + PoS",
      "스마트 컨트랙트": "지원",
      "EVM 호환성": "Neon EVM으로 부분 지원",
      샤딩: "미지원",
      "출시 연도": "2020",
    },
  },
  {
    name: "Aptos",
    color: "#2ED8A7",
    logo: "/aptos-logo.svg",
    data: {
      "프로그래밍 언어": "Move",
      "합의 메커니즘": "BFT",
      "스마트 컨트랙트": "지원",
      "EVM 호환성": "미지원",
      샤딩: "미지원",
      "출시 연도": "2022",
    },
  },
  {
    name: "Sui",
    color: "#6FBCF0",
    logo: "/sui-logo.svg",
    data: {
      "프로그래밍 언어": "Move",
      "합의 메커니즘": "Sui 합의",
      "스마트 컨트랙트": "지원",
      "EVM 호환성": "미지원",
      샤딩: "객체 중심 병렬 처리",
      "출시 연도": "2023",
    },
  },
  {
    name: "NEAR",
    color: "#000000",
    logo: "/near-logo.svg",
    data: {
      "프로그래밍 언어": "Rust, AssemblyScript",
      "합의 메커니즘": "Nightshade PoS",
      "스마트 컨트랙트": "지원",
      "EVM 호환성": "Aurora로 지원",
      샤딩: "Nightshade 샤딩",
      "출시 연도": "2020",
    },
  },
]
