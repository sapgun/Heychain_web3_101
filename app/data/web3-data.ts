export const searchKeywords = {
  ko: [
    "NFT",
    "DeFi",
    "DAO",
    "이더리움",
    "메타마스크",
    "스마트 컨트랙트",
    "레이어2",
    "토큰",
    "지갑",
    "거래소",
    "Avalanche",
    "Solana",
    "Aptos",
    "Sui",
    "NEAR",
  ],
  en: [
    "NFT",
    "DeFi",
    "DAO",
    "Ethereum",
    "MetaMask",
    "Smart Contract",
    "Layer 2",
    "Token",
    "Wallet",
    "Exchange",
    "Avalanche",
    "Solana",
    "Aptos",
    "Sui",
    "NEAR",
  ],
}

export const web3Data = [
  {
    category: "1. 👛 Wallet & Identity (지갑 & 신원)",
    items: [
      {
        id: "1-1",
        question: "메타마스크란 무엇이고 어떻게 설치하나요?",
        answer:
          "메타마스크는 브라우저 확장 프로그램 및 모바일 앱 형태의 암호화폐 지갑으로, 주로 이더리움 및 EVM 호환 블록체인과 상호작용하는 데 사용됩니다. 공식 웹사이트에서 다운로드하여 설치하고, 안내에 따라 새 지갑을 생성하거나 기존 지갑을 복구할 수 있습니다.",
        links: [
          { title: "메타마스크 공식 사이트", url: "https://metamask.io/" },
          { title: "메타마스크 설치 가이드", url: "https://metamask.io/download/" },
        ],
        tips: "메타마스크 설치 시 공식 웹사이트를 통해 다운로드하고, 시드 구문은 안전하게 오프라인으로 보관하세요.",
        quiz: {
          question: "메타마스크에 대한 설명으로 옳지 않은 것은?",
          options: [
            "브라우저 확장 프로그램으로 사용할 수 있다",
            "이더리움 네트워크와 상호작용할 수 있다",
            "개인 키를 사용자 대신 안전하게 관리해준다",
            "시드 구문 없이도 지갑을 복구할 수 있다",
          ],
          correctAnswer: 3,
          explanation:
            "메타마스크는 시드 구문(복구 구문)이 없으면 지갑을 복구할 수 없습니다. 시드 구문은 지갑의 모든 계정을 생성하는 데 사용되는 유일한 백업 수단이므로 반드시 안전하게 보관해야 합니다.",
        },
        practice: {
          title: "메타마스크 설치 및 지갑 생성하기",
          steps: [
            "1. metamask.io 공식 웹사이트 방문",
            "2. 브라우저에 맞는 확장 프로그램 다운로드",
            "3. '지갑 생성' 선택",
            "4. 비밀번호 설정",
            "5. 시드 구문(12단어) 안전하게 백업",
            "6. 시드 구문 확인 과정 완료",
          ],
          warning:
            "⚠️ 시드 구문은 절대 스크린샷으로 저장하거나 온라인에 저장하지 마세요. 종이에 적어 안전한 곳에 보관하세요.",
        },
      },
      {
        id: "1-2",
        question: "프라이빗 키와 시드 구문의 차이는?",
        answer:
          "프라이빗 키는 특정 계정의 자산에 접근할 수 있는 비밀번호와 같은 고유한 암호 코드입니다. 시드 구문(또는 복구 구문)은 이 프라이빗 키들을 생성하고 지갑 전체를 복구하는 데 사용되는 12~24개의 단어 조합입니다.",
        links: [
          { title: "프라이빗 키 설명", url: "https://ethereum.org/ko/developers/docs/accounts/" },
          { title: "시드 구문 안전하게 보관하기", url: "https://support.ledger.com/hc/en-us/articles/360005514233" },
        ],
        tips: "프라이빗 키와 시드 구문은 절대 타인과 공유하지 마세요. 이는 디지털 자산의 열쇠와 같습니다.",
        quiz: {
          question: "시드 구문과 프라이빗 키에 대한 설명으로 옳은 것은?",
          options: [
            "프라이빗 키는 여러 개의 시드 구문을 생성할 수 있다",
            "시드 구문은 여러 개의 프라이빗 키를 생성할 수 있다",
            "프라이빗 키와 시드 구문은 항상 동일하다",
            "시드 구문은 프라이빗 키보다 보안성이 낮다",
          ],
          correctAnswer: 1,
          explanation:
            "시드 구문은 결정적 알고리즘을 통해 여러 개의 프라이빗 키를 생성할 수 있습니다. 하나의 시드 구문으로 여러 계정(각각 고유한 프라이빗 키를 가짐)을 관리할 수 있는 이유가 이것입니다.",
        },
      },
      {
        id: "1-3",
        question: "지갑 주소는 어떻게 생성되며 몇 개까지 만들 수 있나요?",
        answer:
          "지갑 주소는 공개키로부터 파생되며, 암호화폐를 주고받는 데 사용되는 고유 식별자입니다. 하나의 시드 구문으로 이론상 거의 무한대에 가까운 지갑 주소를 생성할 수 있습니다.",
        links: [
          { title: "이더리움 주소 형식", url: "https://ethereum.org/ko/developers/docs/accounts/#account-creation" },
          { title: "HD 지갑 설명", url: "https://learnmeabitcoin.com/technical/hd-wallets" },
        ],
        tips: "여러 개의 지갑 주소를 사용하면 프라이버시를 강화하고 자산을 용도별로 구분할 수 있습니다.",
      },
    ],
  },
  {
    category: "2. 🪙 암호화폐 기초 (Crypto Basics)",
    items: [
      {
        id: "2-1",
        question: "암호화폐란 무엇인가요?",
        answer:
          "암호화폐는 암호화 기술을 사용하여 거래의 보안을 유지하고, 새로운 화폐 발행을 통제하는 디지털 또는 가상 화폐입니다. 중앙 은행이나 금융 기관의 통제를 받지 않고 분산된 네트워크에서 운영됩니다.\n\n**핵심 특징:**\n• **탈중앙화**: 중앙 기관의 통제 없이 P2P 네트워크에서 운영\n• **암호화 보안**: 해시 함수와 디지털 서명으로 보안 유지\n• **투명성**: 모든 거래가 블록체인에 공개적으로 기록\n• **불변성**: 한번 기록된 거래는 변경이 거의 불가능\n• **희소성**: 대부분의 암호화폐는 발행량이 제한됨",
        links: [
          { title: "비트코인 백서", url: "https://bitcoin.org/bitcoin.pdf" },
          { title: "이더리움 소개", url: "https://ethereum.org/ko/what-is-ethereum/" },
        ],
        tips: "암호화폐 투자는 높은 변동성을 가지므로 신중하게 접근해야 합니다. 먼저 소액으로 시작하여 기술을 이해한 후 투자 규모를 늘리는 것이 좋습니다.",
        quiz: {
          question: "암호화폐의 핵심 특징이 아닌 것은?",
          options: ["탈중앙화된 네트워크", "암호화 기술 사용", "중앙은행의 통제", "블록체인 기반"],
          correctAnswer: 2,
          explanation:
            "암호화폐는 중앙은행이나 금융기관의 통제를 받지 않는 탈중앙화된 시스템입니다. 중앙은행의 통제는 암호화폐의 특성이 아닙니다.",
        },
        practice: {
          title: "첫 번째 암호화폐 지갑 만들기",
          steps: [
            "1. 메타마스크 공식 사이트(metamask.io) 방문",
            "2. 브라우저 확장 프로그램 설치",
            "3. '지갑 생성' 선택",
            "4. 강력한 비밀번호 설정",
            "5. 시드 구문(12개 단어) 안전하게 백업",
            "6. 시드 구문 확인 테스트 완료",
          ],
          warning: "⚠️ 시드 구문은 절대 온라인에 저장하지 마세요. 종이에 적어서 안전한 곳에 보관하세요.",
        },
      },
      {
        id: "2-2",
        question: "블록체인이란 무엇인가요?",
        answer:
          "블록체인은 거래 기록을 분산된 공개 장부에 기록하는 기술입니다. 각 블록은 이전 블록의 해시값을 포함하여 연결되어 있어, 데이터의 위변조가 어렵습니다. 이러한 특성 덕분에 높은 보안성과 투명성을 제공합니다.",
        links: [
          { title: "블록체인 작동 방식", url: "https://www.investopedia.com/terms/b/blockchain.asp" },
          { title: "분산 원장 기술(DLT)", url: "https://www.ibm.com/kr-ko/topics/distributed-ledger-technology" },
        ],
        tips: "블록체인은 다양한 산업 분야에서 혁신적인 변화를 가져올 수 있습니다.",
        quiz: {
          question: "블록체인의 핵심 특성이 아닌 것은?",
          options: ["분산 원장 기술", "데이터 불변성", "중앙 기관의 통제", "암호화 기술 사용"],
          correctAnswer: 2,
          explanation:
            "블록체인은 중앙 기관의 통제 없이 분산된 네트워크에서 운영되는 것이 핵심 특성입니다. 중앙 기관의 통제는 블록체인의 특성이 아닙니다.",
        },
        practice: {
          title: "블록체인 탐색기로 트랜잭션 추적하기",
          steps: [
            "1. Etherscan.io 접속하기",
            "2. 검색창에 트랜잭션 해시 입력",
            "3. From/To 주소 확인하기",
            "4. 가스비와 블록 번호 확인",
            "5. Input Data 섹션에서 스마트 컨트랙트 호출 내용 확인",
            "6. Event Logs에서 이벤트 발생 내역 확인",
          ],
          warning: "⚠️ 피싱 사이트 주의! 항상 공식 URL(etherscan.io)을 확인하세요.",
        },
      },
      {
        id: "2-3",
        question: "지갑(Wallet) 종류와 사용법",
        answer:
          "암호화폐 지갑은 개인 키를 보관하고 암호화폐를 안전하게 관리할 수 있는 도구입니다. 소프트웨어 지갑(데스크톱, 모바일, 웹)과 하드웨어 지갑(콜드 월렛)이 있으며, 사용 목적과 보안 요구 사항에 따라 적절한 지갑을 선택해야 합니다.",
        links: [
          { title: "메타마스크 사용법", url: "https://metamask.io/download/" },
          {
            title: "콜드 월렛 비교",
            url: "https://www.coindesk.com/tech/2021/03/29/hot-wallets-vs-cold-wallets-whats-the-difference/",
          },
        ],
        tips: "개인 키는 절대 타인에게 공유하지 마세요. 분실 시 자산을 잃을 수 있습니다.",
        quiz: {
          question: "암호화폐 지갑에 대한 설명으로 옳지 않은 것은?",
          options: [
            "하드웨어 지갑은 프라이빗 키를 오프라인에 저장한다",
            "핫월렛은 인터넷에 연결된 지갑이다",
            "지갑 주소는 프라이빗 키로부터 생성된다",
            "시드 구문은 타인과 공유해도 안전하다",
          ],
          correctAnswer: 3,
          explanation:
            "시드 구문은 절대 타인과 공유해서는 안 됩니다. 시드 구문을 알고 있는 사람은 지갑의 모든 자산에 접근할 수 있습니다.",
        },
        practice: {
          title: "메타마스크 보안 설정 강화하기",
          steps: [
            "1. 메타마스크 설정 메뉴 열기",
            "2. '보안 및 개인정보' 선택",
            "3. '시드 구문 공개' 기능 비활성화",
            "4. 자동 잠금 시간 설정 (5분 권장)",
            "5. 피싱 감지 기능 활성화",
            "6. 하드웨어 지갑 연결 설정 (선택사항)",
          ],
          warning: "⚠️ 시드 구문은 절대 온라인에 입력하거나 스크린샷으로 저장하지 마세요.",
        },
      },
    ],
  },
  {
    category: "3. 💰 암호화폐 거래 (Crypto Trading)",
    items: [
      {
        id: "3-1",
        question: "거래소(Exchange) 선택 시 고려 사항",
        answer:
          "거래량, 보안, 수수료, 지원하는 암호화폐 종류, 사용자 인터페이스, 고객 지원 등 다양한 요소를 고려해야 합니다. 신뢰할 수 있는 거래소를 선택하고, 보안 설정을 강화하는 것이 중요합니다.",
        links: [
          { title: "바이낸스", url: "https://www.binance.com/ko" },
          { title: "코인베이스", url: "https://www.coinbase.com/" },
        ],
        tips: "분산 거래소(DEX)도 고려해 보세요. 중앙화된 거래소와 다른 장단점이 있습니다.",
        practice: {
          title: "거래소 보안 설정 체크리스트",
          steps: [
            "1. 2FA(이중 인증) 설정하기",
            "2. 출금 화이트리스트 설정",
            "3. API 키 권한 최소화",
            "4. 로그인 알림 설정",
            "5. 안티피싱 코드 설정",
            "6. 정기적인 보안 감사 로그 확인",
          ],
          warning: "⚠️ 거래소에 장기간 큰 금액을 보관하지 마세요. Not your keys, not your coins!",
        },
      },
      {
        id: "3-2",
        question: "시장 분석 기초: 차트 보는 법",
        answer:
          "캔들 차트, 이동평균선, 거래량 지표 등을 활용하여 시장의 추세를 파악할 수 있습니다. 기술적 분석 외에도, 프로젝트의 기본적 가치(백서, 팀, 로드맵)를 분석하는 것이 중요합니다.",
        links: [
          { title: "캔들 차트 설명", url: "https://www.investopedia.com/trading/candlestick-charting/" },
          { title: "TradingView", url: "https://www.tradingview.com/" },
        ],
        tips: "과거의 데이터가 미래를 보장하지 않습니다. 항상 리스크 관리를 염두에 두세요.",
        quiz: {
          question: "캔들 차트에서 '도지(Doji)' 패턴은 무엇을 의미하는가?",
          options: ["강한 상승 추세", "강한 하락 추세", "시장의 불확실성과 방향성 부재", "거래량의 급격한 증가"],
          correctAnswer: 2,
          explanation:
            "도지(Doji) 패턴은 시가와 종가가 거의 같은 캔들로, 시장 참여자들 사이의 균형과 불확실성을 나타내며 추세 전환의 신호가 될 수 있습니다.",
        },
      },
      {
        id: "3-3",
        question: "주문(Order) 종류: 지정가, 시장가",
        answer:
          "지정가는 원하는 가격에 주문을 내는 방식이고, 시장가는 현재 시장 가격으로 즉시 거래하는 방식입니다. 상황에 따라 적절한 주문 방식을 선택하여 거래 효율성을 높일 수 있습니다.",
        links: [
          { title: "주문 방식 설명", url: "https://www.binance.com/en/support/faq/360020390472" },
          { title: "슬리피지(Slippage)", url: "https://academy.binance.com/en/articles/slippage-in-crypto-trading" },
        ],
        tips: "시장 변동성이 큰 경우, 지정가 주문이 체결되지 않을 수 있습니다.",
        quiz: {
          question: "시장 변동성이 높을 때 어떤 주문 방식이 슬리피지(slippage) 위험이 더 큰가?",
          options: [
            "지정가 주문(Limit Order)",
            "시장가 주문(Market Order)",
            "스탑 주문(Stop Order)",
            "OCO 주문(One Cancels the Other)",
          ],
          correctAnswer: 1,
          explanation:
            "시장가 주문은 현재 시장에서 즉시 체결되므로, 변동성이 높을 때 예상 가격과 실제 체결 가격 간의 차이(슬리피지)가 크게 발생할 수 있습니다. 반면 지정가 주문은 지정한 가격 이상으로만 체결됩니다.",
        },
      },
    ],
  },
  {
    category: "4. 🔐 보안 (Security)",
    items: [
      {
        id: "4-1",
        question: "2FA(Two-Factor Authentication) 설정",
        answer:
          "2FA는 계정 보안을 강화하는 추가적인 인증 단계입니다. 비밀번호 외에, 휴대폰 인증 코드나 OTP(One-Time Password)를 사용하여 로그인 보안을 강화할 수 있습니다.",
        links: [
          { title: "Google Authenticator", url: "https://support.google.com/accounts/answer/185839?hl=ko" },
          { title: "Authy", url: "https://authy.com/" },
        ],
        tips: "2FA를 활성화하면 해킹 시도를 크게 줄일 수 있습니다.",
        practice: {
          title: "Google Authenticator로 2FA 설정하기",
          steps: [
            "1. Google Authenticator 앱 다운로드",
            "2. 거래소/지갑의 보안 설정 메뉴 접속",
            "3. 2FA 활성화 선택",
            "4. QR 코드 스캔 또는 수동 키 입력",
            "5. 6자리 인증 코드 입력하여 확인",
            "6. 백업 코드 안전한 곳에 저장",
          ],
          warning: "⚠️ 휴대폰 분실에 대비해 백업 코드를 반드시 오프라인에 보관하세요.",
        },
      },
      {
        id: "4-2",
        question: "피싱(Phishing) 공격 예방",
        answer:
          "출처가 불분명한 링크나 이메일을 클릭하지 않고, 개인 정보를 요구하는 메시지에 응답하지 않아야 합니다. 공식 웹사이트 주소를 확인하고, 의심스러운 활동을 발견하면 즉시 거래소에 신고해야 합니다.",
        links: [
          {
            title: "피싱 공격 예방 가이드",
            url: "https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-attacks",
          },
          { title: "보안 뉴스", url: "https://krebsonsecurity.com/" },
        ],
        tips: "항상 의심하고 확인하는 습관을 가지세요.",
        quiz: {
          question: "피싱 공격을 식별하는 방법으로 적절하지 않은 것은?",
          options: [
            "이메일이나 메시지의 발신자 주소 확인",
            "웹사이트 URL 철자 확인",
            "HTTPS 보안 연결 확인",
            "긴급하게 행동을 촉구하는 메시지 신뢰",
          ],
          correctAnswer: 3,
          explanation:
            "긴급하게 행동을 촉구하는 메시지는 피싱 공격의 전형적인 특징입니다. 이러한 메시지는 사용자가 신중하게 생각할 시간을 주지 않고 즉각적인 행동을 유도하여 실수하게 만듭니다.",
        },
      },
      {
        id: "4-3",
        question: "콜드 월렛(Cold Wallet) 사용",
        answer:
          "콜드 월렛은 인터넷에 연결되지 않은 하드웨어 지갑으로, 암호화폐를 오프라인 상태로 보관하여 해킹 위험을 줄일 수 있습니다. 장기 투자자에게 적합합니다.",
        links: [
          { title: "Ledger", url: "https://www.ledger.com/" },
          { title: "Trezor", url: "https://trezor.io/" },
        ],
        tips: "콜드 월렛의 복구 구문(Seed Phrase)을 안전하게 보관하세요.",
        quiz: {
          question: "콜드 월렛(Cold Wallet)의 주요 장점은?",
          options: ["거래 속도가 빠르다", "사용이 매우 편리하다", "해킹 위험이 낮다", "수수료가 저렴하다"],
          correctAnswer: 2,
          explanation:
            "콜드 월렛은 인터넷에 연결되지 않은 오프라인 상태로 프라이빗 키를 보관하기 때문에 해킹 위험이 크게 낮아집니다. 이것이 콜드 월렛의 주요 장점입니다.",
        },
      },
    ],
  },
  {
    category: "5. 💡 DeFi (Decentralized Finance)",
    items: [
      {
        id: "5-1",
        question: "DeFi란 무엇인가요?",
        answer:
          "DeFi는 블록체인 기술을 기반으로 구축된 탈중앙화 금융 시스템입니다. 은행과 같은 중개 기관 없이 암호화폐를 통해 대출, 예금, 거래 등의 금융 서비스를 제공합니다.",
        links: [
          { title: "DeFi 설명", url: "https://ethereum.org/ko/defi/" },
          { title: "DeFi Pulse", url: "https://defipulse.com/" },
        ],
        tips: "DeFi는 높은 수익률을 제공하지만, 스마트 컨트랙트 버그, 해킹 등의 위험도 존재합니다.",
        practice: {
          title: "Uniswap에서 첫 스왑 해보기",
          steps: [
            "1. app.uniswap.org 접속",
            "2. 지갑 연결 (Connect Wallet)",
            "3. 스왑할 토큰 쌍 선택",
            "4. 금액 입력 및 예상 수령액 확인",
            "5. 슬리피지 설정 확인 (기본 0.5%)",
            "6. 첫 거래 시 토큰 승인(Approve) 후 스왑 실행",
          ],
          warning: "⚠️ 가스비가 높을 때는 거래를 미루는 것이 좋습니다. 항상 슬리피지 설정을 확인하세요.",
        },
      },
      {
        id: "5-2",
        question: "DEX (Decentralized Exchange) 사용법",
        answer:
          "DEX는 중앙 기관 없이 사용자들이 직접 암호화폐를 거래할 수 있는 플랫폼입니다. Uniswap, SushiSwap 등이 대표적이며, 개인 지갑을 연결하여 거래할 수 있습니다.",
        links: [
          { title: "Uniswap", url: "https://uniswap.org/" },
          { title: "SushiSwap", url: "https://www.sushi.com/" },
        ],
        tips: "DEX 사용 시, 슬리피지 설정과 가스비를 고려해야 합니다.",
        quiz: {
          question: "DEX(탈중앙화 거래소)의 특징이 아닌 것은?",
          options: [
            "사용자가 자신의 자산에 대한 통제권을 유지한다",
            "중앙 기관 없이 P2P 방식으로 거래한다",
            "KYC(고객 확인) 절차가 항상 필요하다",
            "스마트 컨트랙트를 통해 거래가 실행된다",
          ],
          correctAnswer: 2,
          explanation:
            "DEX는 일반적으로 KYC 절차를 요구하지 않는 것이 특징입니다. 이는 중앙화 거래소(CEX)와의 주요 차이점 중 하나입니다.",
        },
      },
      {
        id: "5-3",
        question: "유동성 공급(Liquidity Providing)",
        answer:
          "유동성 공급은 DEX에 암호화폐 쌍을 예치하여 거래를 활성화하는 데 기여하고, 그 대가로 수수료를 받는 것입니다. 높은 수익을 얻을 수 있지만, Impermanent Loss(비영구적 손실) 위험이 있습니다.",
        links: [
          { title: "Impermanent Loss 설명", url: "https://academy.binance.com/en/articles/impermanent-loss-explained" },
          { title: "유동성 공급 가이드", url: "https://www.gemini.com/learn/what-is-liquidity-pool" },
        ],
        tips: "유동성 공급 전, Impermanent Loss에 대해 충분히 이해해야 합니다.",
        quiz: {
          question: "유동성 공급(LP)에서 '비영구적 손실(Impermanent Loss)'이 발생하는 상황은?",
          options: [
            "풀에 예치한 두 토큰의 가격 비율이 변하지 않을 때",
            "풀에 예치한 두 토큰의 가격 비율이 변할 때",
            "거래량이 매우 적을 때",
            "LP 토큰의 가치가 상승할 때",
          ],
          correctAnswer: 1,
          explanation:
            "비영구적 손실은 유동성 풀에 예치한 두 토큰의 가격 비율이 예치 시점과 비교해 변화할 때 발생합니다. 이로 인해 단순히 토큰을 보유했을 때보다 자산 가치가 낮아질 수 있습니다.",
        },
      },
    ],
  },
  {
    category: "6. 🖼️ NFT (Non-Fungible Token)",
    items: [
      {
        id: "6-1",
        question: "NFT란 무엇인가요?",
        answer:
          "NFT는 대체 불가능한 토큰으로, 디지털 자산의 소유권을 증명하는 데 사용됩니다. 이미지, 비디오, 음악, 게임 아이템 등 다양한 형태의 디지털 콘텐츠를 NFT로 발행할 수 있습니다.",
        links: [
          { title: "NFT 설명", url: "https://ethereum.org/ko/nft/" },
          { title: "OpenSea", url: "https://opensea.io/" },
        ],
        tips: "NFT 투자는 높은 위험을 수반하므로 신중하게 접근해야 합니다.",
        practice: {
          title: "OpenSea에서 NFT 구매하기",
          steps: [
            "1. OpenSea.io 접속 및 지갑 연결",
            "2. 관심 있는 컬렉션 검색",
            "3. 컬렉션 인증 마크 확인",
            "4. 개별 NFT의 거래 내역 확인",
            "5. Buy Now 또는 Make Offer 선택",
            "6. 가스비 포함 총 비용 확인 후 구매",
          ],
          warning: "⚠️ 가짜 컬렉션에 주의하세요. 항상 공식 링크와 인증 마크를 확인하세요.",
        },
      },
      {
        id: "6-2",
        question: "NFT 구매 및 판매 방법",
        answer:
          "OpenSea, Rarible 등의 NFT 마켓플레이스에서 NFT를 구매하거나 판매할 수 있습니다. 메타마스크와 같은 암호화폐 지갑을 연결하여 거래를 진행합니다.",
        links: [
          { title: "Rarible", url: "https://rarible.com/" },
          { title: "NFT 마켓플레이스 비교", url: "https://www.creativebloq.com/features/nft-marketplaces" },
        ],
        tips: "NFT 구매 전, 프로젝트의 신뢰성과 커뮤니티를 확인하는 것이 중요합니다.",
        quiz: {
          question: "NFT 마켓플레이스에서 '가스 전쟁(Gas War)'이 발생하는 상황은?",
          options: [
            "NFT 가격이 급락할 때",
            "인기 있는 NFT 컬렉션이 처음 출시될 때",
            "NFT 마켓플레이스가 해킹당했을 때",
            "NFT 로열티가 없을 때",
          ],
          correctAnswer: 1,
          explanation:
            "가스 전쟁은 인기 있는 NFT 컬렉션이 처음 출시될 때 많은 사람들이 동시에 민팅하려고 경쟁하면서 가스 가격을 높여 빠르게 트랜잭션을 처리받으려는 현상입니다.",
        },
      },
      {
        id: "6-3",
        question: "NFT 활용 사례",
        answer:
          "디지털 아트, 게임 아이템, 멤버십 카드, 부동산 등 다양한 분야에서 NFT가 활용되고 있습니다. 특히, 메타버스와 결합하여 새로운 디지털 경제를 구축하는 데 기여하고 있습니다.",
        links: [
          { title: "NFT 게임", url: "https://playtoearn.net/" },
          {
            title: "메타버스 NFT",
            url: "https://www.forbes.com/sites/cathyhackl/2021/04/04/nfts-and-the-metaverse-how-non-fungible-tokens-will-drive-the-future-of-digital-economies/?sh=6c0425a31953",
          },
        ],
        tips: "NFT는 단순한 투기 자산을 넘어, 다양한 가능성을 가진 기술입니다.",
        quiz: {
          question: "NFT의 활용 사례로 적절하지 않은 것은?",
          options: ["디지털 아트 소유권 증명", "게임 내 아이템 거래", "익명 결제 시스템", "이벤트 티켓 및 멤버십"],
          correctAnswer: 2,
          explanation:
            "익명 결제 시스템은 일반적으로 NFT의 주요 활용 사례가 아닙니다. NFT는 고유성과 소유권 증명에 중점을 두며, 익명 결제는 다른 암호화폐나 프라이버시 코인의 영역입니다.",
        },
      },
    ],
  },
  {
    category: "7. 🌐 DAO (Decentralized Autonomous Organization)",
    items: [
      {
        id: "7-1",
        question: "DAO란 무엇인가요?",
        answer:
          "DAO는 블록체인 기반의 탈중앙화된 자율 조직입니다. 스마트 컨트랙트에 의해 운영되며, 구성원들의 투표를 통해 의사 결정을 진행합니다. 투명하고 민주적인 조직 운영이 가능합니다.",
        links: [
          { title: "DAO 설명", url: "https://ethereum.org/ko/dao/" },
          { title: "DAOhaus", url: "https://daohaus.club/" },
        ],
        tips: "DAO 참여 전, 조직의 목표와 운영 방식에 대해 충분히 이해해야 합니다.",
        practice: {
          title: "Snapshot에서 DAO 투표 참여하기",
          steps: [
            "1. snapshot.org 접속",
            "2. 참여하고 싶은 DAO 검색",
            "3. 지갑 연결 및 투표권 확인",
            "4. 활성 제안(Active Proposals) 확인",
            "5. 제안 내용 숙독 후 투표",
            "6. 투표 결과 및 실행 상황 추적",
          ],
          warning: "⚠️ 투표 전 제안의 세부 내용과 영향을 충분히 이해하세요.",
        },
      },
      {
        id: "7-2",
        question: "DAO 참여 방법",
        answer:
          "DAO의 멤버십 토큰을 구매하거나, DAO에 기여하여 멤버가 될 수 있습니다. Snapshot과 같은 플랫폼을 통해 투표에 참여하고, DAO의 의사 결정에 영향을 미칠 수 있습니다.",
        links: [
          { title: "Snapshot", url: "https://snapshot.org/" },
          { title: "DAO 멤버십", url: "https://consensys.net/blog/blockchain/how-to-join-a-dao/" },
        ],
        tips: "DAO는 새로운 형태의 조직 운영 방식이므로, 적극적으로 참여하고 배우는 자세가 중요합니다.",
        quiz: {
          question: "DAO 거버넌스 참여에 대한 설명으로 옳은 것은?",
          options: [
            "모든 DAO는 1인 1표의 투표 방식을 사용한다",
            "DAO 투표는 항상 온체인에서 이루어진다",
            "거버넌스 토큰 보유량에 따라 투표 영향력이 달라질 수 있다",
            "DAO 제안은 개발팀만 할 수 있다",
          ],
          correctAnswer: 2,
          explanation:
            "많은 DAO에서는 거버넌스 토큰 보유량에 비례하여 투표 영향력이 결정됩니다. 이는 더 많은 지분을 가진 참여자가 더 큰 의사결정 권한을 갖는 방식입니다.",
        },
      },
      {
        id: "7-3",
        question: "DAO 활용 사례",
        answer:
          "투자, 자선, 소셜 네트워킹 등 다양한 분야에서 DAO가 활용되고 있습니다. 특히, 프로젝트 자금 관리 및 커뮤니티 운영에 효과적입니다.",
        links: [
          {
            title: "DAO 사례",
            url: "https://builtin.com/blockchain/decentralized-autonomous-organization-dao-examples",
          },
          {
            title: "자선 DAO",
            url: "https://www.coindesk.com/layer2/2022/12/16/crypto-winter-didnt-kill-giving-daos/",
          },
        ],
        tips: "DAO는 조직 운영의 투명성과 효율성을 높이는 데 기여할 수 있습니다.",
        quiz: {
          question: "다음 중 DAO의 일반적인 활용 사례가 아닌 것은?",
          options: ["투자 펀드 관리", "오픈소스 프로젝트 거버넌스", "중앙화된 기업 운영", "자선 기금 분배"],
          correctAnswer: 2,
          explanation:
            "중앙화된 기업 운영은 DAO의 탈중앙화 철학과 상반됩니다. DAO는 주로 탈중앙화된 의사결정과 투명한 운영을 위해 사용됩니다.",
        },
      },
    ],
  },
  {
    category: "8. ⛓️ Layer 2 Scaling Solutions",
    items: [
      {
        id: "8-1",
        question: "Layer 2란 무엇인가요?",
        answer:
          "Layer 2는 메인 블록체인(Layer 1)의 확장성 문제를 해결하기 위해 구축된 솔루션입니다. 각 블록은 이전 블록의 해시값을 포함하여 연결되어 있어, 데이터의 위변조가 어렵습니다. 이러한 특성 덕분에 높은 보안성과 투명성을 제공합니다.",
        links: [
          { title: "Layer 2 설명", url: "https://ethereum.org/ko/layer-2/" },
          { title: "L2BEAT", url: "https://l2beat.com/" },
        ],
        tips: "Layer 2 솔루션은 이더리움 네트워크의 확장성을 크게 향상시킬 수 있습니다.",
        practice: {
          title: "이더리움에서 Arbitrum으로 브릿지하기",
          steps: [
            "1. bridge.arbitrum.io 접속",
            "2. 메타마스크 연결",
            "3. 브릿지할 ETH/토큰 금액 입력",
            "4. 예상 도착 시간 확인 (약 10분)",
            "5. 트랜잭션 승인 및 전송",
            "6. Arbitrum 네트워크로 전환하여 잔액 확인",
          ],
          warning: "⚠️ 브릿지 시 소량으로 먼저 테스트하세요. 공식 브릿지만 사용하세요.",
        },
      },
      {
        id: "8-2",
        question: "Optimistic Rollups vs ZK-Rollups",
        answer:
          "Optimistic Rollups는 트랜잭션이 유효하다고 가정하고, 문제가 발견될 경우에만 검증을 수행합니다. ZK-Rollups는 영지식 증명(Zero-Knowledge Proof)을 사용하여 트랜잭션의 유효성을 검증합니다. 각각 장단점이 있으며, 사용 사례에 따라 적합한 솔루션을 선택해야 합니다.",
        links: [
          {
            title: "Optimistic Rollups 설명",
            url: "https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/",
          },
          { title: "ZK-Rollups 설명", url: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/" },
        ],
        tips: "ZK-Rollups는 Optimistic Rollups보다 높은 보안성을 제공하지만, 더 복잡한 기술을 사용합니다.",
        quiz: {
          question: "Optimistic Rollup과 ZK-Rollup의 차이점으로 옳은 것은?",
          options: [
            "ZK-Rollup은 사기 증명(fraud proof)을 사용한다",
            "Optimistic Rollup은 출금 시 대기 시간이 없다",
            "ZK-Rollup은 영지식 증명(zero-knowledge proof)을 사용한다",
            "Optimistic Rollup은 EVM 호환성이 낮다",
          ],
          correctAnswer: 2,
          explanation:
            "ZK-Rollup은 영지식 증명(zero-knowledge proof)을 사용하여 트랜잭션의 유효성을 증명합니다. 반면 Optimistic Rollup은 사기 증명(fraud proof)을 사용하며, 출금 시 이의 제기 기간이 필요합니다.",
        },
      },
      {
        id: "8-3",
        question: "주요 Layer 2 프로젝트",
        answer:
          "Arbitrum, Optimism, zkSync, StarkNet 등이 대표적인 Layer 2 프로젝트입니다. 각 프로젝트는 고유한 기술적 특징과 생태계를 가지고 있습니다.",
        links: [
          { title: "Arbitrum", url: "https://arbitrum.io/" },
          { title: "Optimism", url: "https://www.optimism.io/" },
        ],
        tips: "Layer 2 프로젝트를 사용하기 전에, 해당 프로젝트의 보안성과 탈중앙화 수준을 확인하는 것이 중요합니다.",
        quiz: {
          question: "다음 중 옵티미스틱 롤업(Optimistic Rollup) 기술을 사용하는 Layer 2 프로젝트는?",
          options: ["zkSync", "StarkNet", "Arbitrum", "Scroll"],
          correctAnswer: 2,
          explanation:
            "Arbitrum은 옵티미스틱 롤업 기술을 사용하는 대표적인 Layer 2 프로젝트입니다. zkSync, StarkNet, Scroll은 모두 ZK 롤업 기술을 사용합니다.",
        },
      },
    ],
  },
  {
    category: "9. ✍️ 스마트 컨트랙트 개발 (Smart Contract Development)",
    items: [
      {
        id: "9-1",
        question: "Solidity 개발 환경 설정",
        answer:
          "Remix IDE, Truffle, Hardhat 등을 사용하여 Solidity 스마트 컨트랙트를 개발할 수 있습니다. 각 개발 환경은 고유한 장단점을 가지고 있으며, 사용자의 숙련도와 프로젝트의 요구 사항에 따라 적절한 환경을 선택해야 합니다.",
        links: [
          { title: "Remix IDE", url: "https://remix.ethereum.org/" },
          { title: "Truffle", url: "https://trufflesuite.com/" },
        ],
        tips: "Remix IDE는 간단한 컨트랙트 개발 및 테스트에 적합하며, Truffle과 Hardhat은 복잡한 프로젝트 관리에 유용합니다.",
        practice: {
          title: "Remix IDE에서 첫 스마트 컨트랙트 배포하기",
          steps: [
            "1. remix.ethereum.org 접속",
            "2. 새 파일 생성 (HelloWorld.sol)",
            "3. 간단한 컨트랙트 코드 작성",
            "4. Solidity 컴파일러에서 컴파일",
            "5. Deploy & Run 탭에서 환경 선택",
            "6. 테스트넷에 배포 및 함수 테스트",
          ],
          warning: "⚠️ 메인넷 배포 전 반드시 테스트넷에서 충분히 테스트하세요.",
        },
      },
      {
        id: "9-2",
        question: "ERC-20 토큰 컨트랙트 작성",
        answer:
          "ERC-20은 대체 가능한 토큰을 위한 표준 인터페이스입니다. OpenZeppelin Contracts 라이브러리를 사용하여 ERC-20 토큰 컨트랙트를 쉽게 작성할 수 있습니다.",
        links: [
          { title: "ERC-20 설명", url: "https://ethereum.org/ko/developers/docs/standards/tokens/erc-20/" },
          { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/4.x/" },
        ],
        tips: "OpenZeppelin 라이브러리를 사용하면 보안 감사를 거친 코드를 활용할 수 있어 안전합니다.",
        quiz: {
          question: "ERC-20 토큰 표준에 필수적인 함수가 아닌 것은?",
          options: ["transfer", "approve", "mint", "balanceOf"],
          correctAnswer: 2,
          explanation:
            "mint 함수는 ERC-20 표준에 정의된 필수 함수가 아닙니다. 이는 토큰 발행 로직으로, 구현 방식은 개발자가 자유롭게 결정할 수 있습니다. transfer, approve, balanceOf는 ERC-20 표준에 정의된 필수 함수입니다.",
        },
      },
    ],
  },
  {
    category: "10. 🧠 Web3 심화 개념 (Web3 Advanced Concepts)",
    items: [
      {
        id: "10-1",
        question: "탈중앙화란 무엇인가요?",
        answer:
          "탈중앙화는 단일 개인이나 기관이 시스템 전체를 통제하지 않고, 권한과 책임이 여러 참여자에게 분산되어 있는 상태를 의미합니다. Web3에서는 데이터 소유권, 의사결정, 네트워크 운영 등에서 중앙 집중적인 통제로부터 벗어나는 것을 목표로 합니다.",
        links: [
          { title: "탈중앙화 설명", url: "https://ethereum.org/ko/developers/docs/consensus-mechanisms/" },
          { title: "Web3 철학", url: "https://ethereum.org/ko/web3/" },
        ],
        tips: "완전한 탈중앙화는 이상적인 목표이지만, 현실에서는 다양한 수준의 탈중앙화가 존재합니다.",
        quiz: {
          question: "탈중앙화 시스템의 특징이 아닌 것은?",
          options: [
            "단일 실패 지점이 없다",
            "검열 저항성이 있다",
            "의사결정이 분산되어 있다",
            "항상 중앙화된 시스템보다 효율적이다",
          ],
          correctAnswer: 3,
          explanation:
            "탈중앙화 시스템은 일반적으로 중앙화된 시스템보다 효율성이 낮을 수 있습니다. 합의 메커니즘과 데이터 복제 등의 과정이 필요하기 때문입니다. 그러나 이러한 효율성 저하는 보안, 투명성, 검열 저항성 등의 이점을 위한 트레이드오프로 볼 수 있습니다.",
        },
      },
      {
        id: "10-2",
        question: "토크노믹스 기초: 발행량, 소각, 인플레이션",
        answer:
          "토크노믹스는 토큰(Token)과 경제학(Economics)의 합성어로, 토큰의 설계, 분배, 공급 및 수요 관리 등 경제적 모델을 의미합니다. 총 발행량은 토큰의 희소성을 결정하고, 소각은 공급량을 줄여 가치를 높이려는 시도이며, 인플레이션은 지속적인 토큰 발행으로 가치가 하락하는 현상을 나타냅니다.",
        links: [
          {
            title: "토크노믹스 설계",
            url: "https://medium.com/coinmonks/token-economics-101-a-beginners-guide-to-tokenomics-2e8d13cb1fe3",
          },
          { title: "토큰 소각 메커니즘", url: "https://academy.binance.com/en/articles/what-is-token-burning" },
        ],
        tips: "지속 가능한 토크노믹스 설계는 프로젝트의 장기적인 성공에 중요한 요소입니다.",
        quiz: {
          question: "토큰 소각(burning)의 주요 목적은?",
          options: [
            "네트워크 수수료 증가",
            "토큰 공급량 감소를 통한 가치 상승 유도",
            "거버넌스 참여 증가",
            "스테이킹 보상 증가",
          ],
          correctAnswer: 1,
          explanation:
            "토큰 소각은 유통 중인 토큰의 일부를 영구적으로 제거하여 공급량을 줄이는 과정입니다. 이는 희소성을 증가시켜 토큰 가치 상승을 유도하는 것이 주요 목적입니다. 또한 일부 프로젝트에서는 수수료의 일부를 소각하여 디플레이션 모델을 구현하기도 합니다.",
        },
      },
      {
        id: "10-3",
        question: "모듈형 블록체인이란? (Celestia, Fuel 등)",
        answer:
          "모듈형 블록체인은 블록체인의 핵심 기능(실행, 합의, 데이터 가용성, 결제)을 각각 독립적인 모듈(계층)로 분리하여, 각 기능을 전문화하고 최적화하려는 아키텍처입니다. 이를 통해 확장성, 유연성, 주권 등을 향상시킬 수 있습니다. Celestia(데이터 가용성), Fuel(실행) 등이 대표적입니다.",
        links: [
          {
            title: "모듈형 블록체인 설명",
            url: "https://celestia.org/learn/basics-of-modular-blockchains/introduction/",
          },
          { title: "Celestia", url: "https://celestia.org/" },
        ],
        tips: "모듈형 접근 방식은 각 계층이 독립적으로 최적화될 수 있어 확장성 문제 해결에 효과적입니다.",
        quiz: {
          question: "모듈형 블록체인 아키텍처의 주요 이점은?",
          options: [
            "모든 트랜잭션이 하나의 체인에서 처리됨",
            "각 계층이 독립적으로 최적화될 수 있음",
            "항상 완전한 탈중앙화를 보장함",
            "스마트 컨트랙트가 필요 없음",
          ],
          correctAnswer: 1,
          explanation:
            "모듈형 블록체인의 주요 이점은 실행, 합의, 데이터 가용성 등의 계층을 분리하여 각 계층이 독립적으로 최적화될 수 있다는 점입니다. 이를 통해 특정 용도에 맞게 각 계층을 조합하여 확장성, 보안성, 탈중앙화 등의 특성을 조절할 수 있습니다.",
        },
      },
      {
        id: "10-4",
        question: "Privacy Chain: Aleo, Aztec, Iron Fish",
        answer:
          "프라이버시 체인은 거래 내역이나 사용자 신원을 기본적으로 비공개로 처리하여 익명성과 프라이버시를 강화한 블록체인입니다. 영지식 증명 등의 암호학 기술을 활용하여 거래의 유효성은 검증하면서도 세부 내용은 숨깁니다. Aleo, Aztec, Iron Fish 등이 이러한 프라이버시 기능을 제공하는 프로젝트입니다.",
        links: [
          { title: "Aleo", url: "https://aleo.org/" },
          { title: "Aztec", url: "https://aztec.network/" },
        ],
        tips: "프라이버시 체인은 금융 거래나 개인 정보가 포함된 애플리케이션에 적합합니다.",
        quiz: {
          question: "프라이버시 체인에서 주로 사용되는 암호학 기술은?",
          options: [
            "영지식 증명(Zero-Knowledge Proofs)",
            "작업 증명(Proof of Work)",
            "지분 증명(Proof of Stake)",
            "권한 증명(Proof of Authority)",
          ],
          correctAnswer: 0,
          explanation:
            "프라이버시 체인은 주로 영지식 증명(Zero-Knowledge Proofs) 기술을 사용합니다. 이 기술은 특정 정보를 공개하지 않고도 그 정보가 유효하다는 것을 증명할 수 있게 해줍니다. 예를 들어, 트랜잭션의 금액이나 참여자를 공개하지 않고도 트랜잭션이 유효하다는 것을 증명할 수 있습니다.",
        },
      },
      {
        id: "10-5",
        question: "Web3 ID: DID, SBT, VC",
        answer:
          "Web3 ID는 사용자가 자신의 디지털 신원을 스스로 통제하고 관리할 수 있도록 하는 개념입니다. DID(Decentralized Identifiers)는 탈중앙화된 식별자이고, SBT(Soulbound Tokens)는 양도 불가능한 신원 증명 토큰이며, VC(Verifiable Credentials)는 검증 가능한 자격 증명(예: 졸업장, 면허증)을 디지털 형태로 표현한 것입니다.",
        links: [
          { title: "DID 설명", url: "https://www.w3.org/TR/did-core/" },
          { title: "SBT 소개", url: "https://vitalik.ca/general/2022/01/26/soulbound.html" },
        ],
        tips: "Web3 ID는 개인 정보 보호와 자기 주권 신원(Self-Sovereign Identity)을 가능하게 합니다.",
        quiz: {
          question: "Soulbound Token(SBT)의 주요 특징은?",
          options: [
            "다른 지갑으로 전송 가능",
            "NFT와 동일한 표준 사용",
            "양도 불가능(non-transferable)",
            "항상 금전적 가치를 가짐",
          ],
          correctAnswer: 2,
          explanation:
            "Soulbound Token(SBT)의 주요 특징은 양도 불가능(non-transferable)하다는 점입니다. 이는 특정 지갑이나 사용자에게 영구적으로 연결되어 있어 다른 사람에게 전송할 수 없습니다. 이러한 특성 때문에 학위, 자격증, 멤버십 등 개인의 신원이나 성취와 관련된 정보를 나타내는 데 적합합니다.",
        },
      },
      {
        id: "10-6",
        question: "Data DAO란?",
        answer:
          "데이터 DAO는 데이터를 집단적으로 소유, 관리, 통제하고 그로부터 발생하는 가치를 공유하기 위해 만들어진 탈중앙화 자율 조직입니다. 데이터의 수집, 레이블링, 분석, 거래 등을 커뮤니티 기반으로 운영하며, 데이터 주권과 공정한 데이터 경제를 목표로 할 수 있습니다.",
        links: [
          { title: "Ocean Protocol", url: "https://oceanprotocol.com/" },
          { title: "데이터 DAO 개념", url: "https://medium.com/oceanprotocol/introducing-data-nfts-3a7e589afbcb" },
        ],
        tips: "데이터 DAO는 AI 학습 데이터 등 가치 있는 데이터셋의 공동 관리에 적합합니다.",
        quiz: {
          question: "데이터 DAO의 주요 목적이 아닌 것은?",
          options: ["데이터 소유권의 민주화", "데이터 가치의 공정한 분배", "데이터 접근성 향상", "데이터 독점 강화"],
          correctAnswer: 3,
          explanation:
            "데이터 DAO의 주요 목적은 데이터 독점을 강화하는 것이 아니라, 오히려 그 반대입니다. 데이터 DAO는 데이터 소유권을 민주화하고, 데이터에서 발생하는 가치를 공정하게 분배하며, 데이터 접근성을 향상시키는 것을 목표로 합니다. 이는 현재 소수의 대형 기업이 데이터를 독점하는 구조에 대한 대안으로 제시됩니다.",
        },
      },
      {
        id: "10-7",
        question: "MEV란?",
        answer:
          "MEV(Maximal Extractable Value, 이전에는 Miner Extractable Value)는 블록 생산자(채굴자 또는 검증자)가 블록 내 트랜잭션의 순서, 포함 여부 등을 조작하여 얻을 수 있는 최대 이익을 의미합니다. 차익 거래, 청산 기회 선점 등으로 발생하며, 사용자에게 불리한 가격(슬리피지)을 유발할 수 있습니다.",
        links: [
          { title: "MEV 설명", url: "https://ethereum.org/ko/developers/docs/mev/" },
          { title: "Flashbots", url: "https://www.flashbots.net/" },
        ],
        tips: "MEV는 DeFi 생태계에서 중요한 이슈이며, 이를 완화하기 위한 다양한 솔루션이 개발되고 있습니다.",
        quiz: {
          question: "MEV의 대표적인 예시가 아닌 것은?",
          options: [
            "샌드위치 공격(Sandwich Attack)",
            "차익 거래(Arbitrage)",
            "청산 경쟁(Liquidation)",
            "51% 공격(51% Attack)",
          ],
          correctAnswer: 3,
          explanation:
            "51% 공격은 MEV의 예시가 아닙니다. 51% 공격은 블록체인 네트워크의 해시파워나 지분의 과반수를 장악하여 이중 지불 등의 공격을 수행하는 것을 의미합니다. 반면, 샌드위치 공격(사용자 거래 전후로 주문을 넣어 이익 취득), 차익 거래(여러 시장 간 가격 차이 활용), 청산 경쟁(담보 청산 기회 선점)은 모두 MEV의 대표적인 예시입니다.",
        },
      },
      {
        id: "10-8",
        question: "DePIN, RWA, SocialFi 소개",
        answer:
          "DePIN(Decentralized Physical Infrastructure Networks)은 블록체인과 토큰 인센티브를 활용하여 실제 물리적 인프라(예: 무선 네트워크, 저장 공간, 에너지망)를 분산된 방식으로 구축하고 운영하는 분야입니다. RWA(Real World Asset)는 부동산, 미술품, 채권 등 현실 세계 자산을 토큰화하여 블록체인 상에서 거래하거나 담보로 활용하는 것입니다. SocialFi는 소셜 미디어와 DeFi를 결합하여 콘텐츠 제작, 커뮤니티 활동 등에 대한 경제적 보상을 제공하는 분야입니다.",
        links: [
          { title: "Helium (DePIN 예시)", url: "https://www.helium.com/" },
          { title: "Lens Protocol (SocialFi 예시)", url: "https://www.lens.xyz/" },
        ],
        tips: "이러한 분야들은 Web3 기술을 실생활과 연결하는 중요한 응용 사례입니다.",
        quiz: {
          question: "RWA(Real World Asset) 토큰화의 주요 이점은?",
          options: [
            "실물 자산의 완전한 디지털화",
            "자산의 유동성 및 접근성 향상",
            "자산 가치의 변동성 제거",
            "규제 회피",
          ],
          correctAnswer: 1,
          explanation:
            "RWA 토큰화의 주요 이점은 전통적으로 유동성이 낮은 실물 자산(부동산, 미술품 등)의 유동성과 접근성을 향상시키는 것입니다. 토큰화를 통해 자산을 분할 소유할 수 있게 되어 더 많은 사람들이 적은 금액으로도 투자할 수 있게 됩니다. 그러나 이는 자산의 완전한 디지털화나 가치 변동성 제거를 의미하지는 않으며, 규제 회피가 목적이 아닙니다.",
        },
      },
      {
        id: "10-9",
        question:
          "검열 저항성(Censorship Resistance)이란 무엇이며, 블록체인 아키텍처에서 어떻게 구현되나요? (PBS, crLists 등)",
        answer:
          "검열 저항성은 특정 주체(정부, 기업 등)가 트랜잭션을 임의로 차단하거나 방해할 수 없는 특성입니다. 탈중앙화된 네트워크, 다수의 검증자 참여, 암호학적 보안 등을 통해 구현됩니다. PBS(Proposer-Builder Separation)는 블록 제안자와 블록 빌더 역할을 분리하여 검열 위험을 줄이려는 시도이며, crLists(Censorship Resistance Lists)는 특정 트랜잭션 포함을 강제하는 메커니즘입니다.",
        links: [
          { title: "검열 저항성 설명", url: "https://ethereum.org/ko/developers/docs/consensus-mechanisms/pow/" },
          {
            title: "PBS 소개",
            url: "https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725",
          },
        ],
        tips: "검열 저항성은 블록체인의 핵심 가치 중 하나이지만, 완벽한 검열 저항성을 달성하는 것은 기술적으로 도전적입니다.",
        quiz: {
          question: "PBS(Proposer-Builder Separation)의 주요 목적은?",
          options: ["트랜잭션 처리 속도 향상", "MEV 추출 최대화", "검열 위험 감소 및 MEV 시장 효율화", "가스비 절감"],
          correctAnswer: 2,
          explanation:
            "PBS(Proposer-Builder Separation)의 주요 목적은 블록 제안자와 블록 빌더의 역할을 분리함으로써 검열 위험을 줄이고 MEV 시장을 더 효율적으로 만드는 것입니다. 이를 통해 블록 빌더는 MEV 추출을 최적화하고, 블록 제안자는 최고 입찰가를 선택하여 네트워크의 경제적 효율성을 높일 수 있습니다. 또한 역할 분리로 인해 검열 시도가 더 어려워집니다.",
        },
      },
      {
        id: "10-10",
        question: "네트워크 효과(Network Effects)가 Web3 프로젝트의 성공과 실패에 미치는 영향은?",
        answer:
          "네트워크 효과는 특정 제품이나 서비스의 사용자 수가 증가할수록 그 가치가 더욱 커지는 현상입니다. Web3 프로젝트에서 더 많은 사용자, 개발자, 유동성이 모일수록 생태계가 활성화되고 다른 참여자들에게 더 매력적이 되어 선순환을 만들 수 있지만, 초기 사용자 확보가 어려우면 성장이 정체될 수 있습니다.",
        links: [
          { title: "네트워크 효과 설명", url: "https://a16z.com/network-effects-and-web3/" },
          { title: "Web3 성장 전략", url: "https://future.a16z.com/how-to-win-users-in-web3/" },
        ],
        tips: "Web3 프로젝트는 커뮤니티 구축과 참여 유도에 집중해야 합니다.",
        quiz: {
          question: "네트워크 효과가 강한 Web3 프로젝트의 특징은?",
          options: ["높은 진입 장벽", "폐쇄적인 커뮤니티", "낮은 사용자 참여도", "활발한 커뮤니티와 다양한 참여 기회"],
          correctAnswer: 3,
          explanation:
            "네트워크 효과가 강한 Web3 프로젝트는 활발한 커뮤니티와 다양한 참여 기회를 제공합니다. 더 많은 사용자가 참여하고 기여할수록 프로젝트의 가치가 높아지고, 이는 다시 더 많은 사용자를 유치하는 선순환을 만듭니다. 높은 진입 장벽, 폐쇄적인 커뮤니티, 낮은 사용자 참여도는 네트워크 효과를 저해하는 요소입니다.",
        },
      },
    ],
  },
  {
    category: "11. 💻 Web3 개발 (Web3 Development)",
    items: [
      {
        id: "11-1",
        question: "Web3.js vs Ethers.js",
        answer:
          "Web3.js와 Ethers.js는 JavaScript 애플리케이션에서 이더리움 블록체인과 상호작용하기 위한 라이브러리입니다. Web3.js는 오래된 라이브러리로 많은 레퍼런스가 있고, Ethers.js는 더 현대적이고 가벼우며 타입스크립트 지원이 우수합니다.",
        links: [
          { title: "Web3.js 문서", url: "https://web3js.readthedocs.io/" },
          { title: "Ethers.js 문서", url: "https://docs.ethers.io/" },
        ],
        tips: "최근에는 Ethers.js가 더 많이 사용되는 추세이지만, 프로젝트 요구사항에 따라 선택하세요.",
        quiz: {
          question: "Ethers.js의 장점이 아닌 것은?",
          options: ["더 가벼운 번들 크기", "더 나은 타입스크립트 지원", "ENS 네임 지원", "더 많은 레퍼런스와 예제"],
          correctAnswer: 3,
          explanation:
            "Web3.js가 더 오래된 라이브러리이기 때문에 더 많은 레퍼런스와 예제가 있습니다. Ethers.js는 더 가벼운 번들 크기, 더 나은 타입스크립트 지원, ENS 네임 지원 등의 장점이 있지만, 상대적으로 레퍼런스가 적을 수 있습니다.",
        },
      },
      {
        id: "11-2",
        question: "Solidity vs Vyper",
        answer:
          "Solidity는 이더리움 스마트 컨트랙트 개발에 가장 널리 사용되는 객체 지향 프로그래밍 언어로, C++, 파이썬, 자바스크립트와 유사한 문법을 가집니다. Vyper는 파이썬과 유사한 문법을 가지며, 보안성과 코드 가독성을 강조하여 더 간결하고 안전한 계약 작성을 목표로 합니다.",
        links: [
          { title: "Solidity 문서", url: "https://docs.soliditylang.org/" },
          { title: "Vyper 문서", url: "https://vyper.readthedocs.io/" },
        ],
        tips: "Solidity는 더 많은 기능과 커뮤니티 지원을 제공하지만, Vyper는 보안에 중점을 둔 프로젝트에 적합할 수 있습니다.",
        quiz: {
          question: "Vyper가 Solidity와 비교하여 가지는 특징은?",
          options: ["재진입 공격에 더 취약함", "상속과 오버로딩 지원", "무한 루프 방지 설계", "더 복잡한 문법 구조"],
          correctAnswer: 2,
          explanation:
            "Vyper는 보안을 강화하기 위해 무한 루프를 방지하는 설계를 채택했습니다. 이를 위해 재귀 호출이나 무한 루프를 만들 수 있는 기능을 제한합니다. 또한 Vyper는 상속, 오버로딩, 재귀 등의 복잡한 기능을 의도적으로 제거하여 코드 감사를 더 쉽게 만들었습니다.",
        },
      },
      {
        id: "11-3",
        question: "Remix IDE 사용법",
        answer:
          "Remix IDE는 웹 브라우저에서 직접 스마트 컨트랙트(주로 Solidity)를 작성, 컴파일, 배포, 테스트할 수 있는 통합 개발 환경입니다. 초보자들이 쉽게 스마트 컨트랙트 개발을 시작하고 실험해볼 수 있도록 다양한 기능과 플러그인을 제공합니다.",
        links: [
          { title: "Remix IDE", url: "https://remix.ethereum.org/" },
          { title: "Remix 문서", url: "https://remix-ide.readthedocs.io/" },
        ],
        tips: "Remix는 학습과 프로토타이핑에 적합하지만, 대규모 프로젝트는 로컬 개발 환경을 고려하세요.",
        practice: {
          title: "Remix IDE로 첫 스마트 컨트랙트 만들기",
          steps: [
            "1. remix.ethereum.org 접속",
            "2. 파일 탐색기에서 새 파일 생성 (MyContract.sol)",
            "3. 기본 컨트랙트 코드 작성",
            "4. Solidity 컴파일러 탭에서 컴파일",
            "5. Deploy & Run 탭에서 JavaScript VM 환경 선택",
            "6. 컨트랙트 배포 및 함수 테스트",
          ],
          warning: "⚠️ 테스트넷이나 메인넷에 배포할 때는 항상 코드를 철저히 검토하고 테스트하세요.",
        },
      },
      {
        id: "11-4",
        question: "Ethers.js vs Web3.js",
        answer:
          "Ethers.js와 Web3.js는 자바스크립트 애플리케이션(예: 웹사이트)이 이더리움 블록체인과 상호작용(지갑 연결, 컨트랙트 호출, 잔액 조회 등)할 수 있도록 돕는 라이브러리입니다. Ethers.js는 더 간결하고 현대적인 API를 제공하며 최근에 더 많이 선호되는 경향이 있습니다.",
        links: [
          { title: "Ethers.js 가이드", url: "https://docs.ethers.io/v5/getting-started/" },
          { title: "Web3.js 가이드", url: "https://web3js.readthedocs.io/en/v1.7.3/getting-started.html" },
        ],
        tips: "두 라이브러리 모두 유사한 기능을 제공하므로, 프로젝트 요구사항과 개인 선호도에 따라 선택하세요.",
        quiz: {
          question: "Ethers.js와 Web3.js의 공통점이 아닌 것은?",
          options: [
            "스마트 컨트랙트 상호작용 지원",
            "지갑 연결 기능 제공",
            "동일한 API 구조",
            "이더리움 네트워크와의 통신",
          ],
          correctAnswer: 2,
          explanation:
            "Ethers.js와 Web3.js는 API 구조가 다릅니다. Ethers.js는 더 모듈화된 접근 방식을 취하며, 프로바이더(Provider), 서명자(Signer), 컨트랙트(Contract) 등의 개념으로 구분됩니다. 반면 Web3.js는 더 통합된 접근 방식을 사용합니다. 두 라이브러리 모두 스마트 컨트랙트 상호작용, 지갑 연결, 이더리움 네트워크 통신 등의 기능을 제공합니다.",
        },
      },
      {
        id: "11-5",
        question: "Hardhat vs Foundry",
        answer:
          "Hardhat과 Foundry는 이더리움 스마트 컨트랙트 개발을 위한 프레임워크입니다. Hardhat은 자바스크립트 기반으로 유연한 개발 환경과 다양한 플러그인을 제공합니다. Foundry는 Solidity로 테스트 코드를 작성할 수 있게 하여 개발 속도와 편의성을 높인 Rust 기반의 툴킷입니다.",
        links: [
          { title: "Hardhat 문서", url: "https://hardhat.org/getting-started/" },
          { title: "Foundry 문서", url: "https://book.getfoundry.sh/" },
        ],
        tips: "Hardhat은 JavaScript/TypeScript 개발자에게 친숙하고, Foundry는 Solidity 개발자에게 효율적입니다.",
        quiz: {
          question: "Foundry의 주요 특징이 아닌 것은?",
          options: [
            "Solidity로 테스트 작성 가능",
            "Rust 기반 개발",
            "JavaScript 플러그인 생태계",
            "빠른 테스트 실행 속도",
          ],
          correctAnswer: 2,
          explanation:
            "Foundry는 JavaScript 플러그인 생태계를 가지고 있지 않습니다. 이는 Hardhat의 특징입니다. Foundry는 Rust 기반으로 개발되었으며, Solidity로 테스트를 작성할 수 있고, 빠른 테스트 실행 속도를 제공합니다. Foundry는 JavaScript 대신 Solidity를 사용하여 개발 워크플로우를 단순화하는 것을 목표로 합니다.",
        },
      },
      {
        id: "11-6",
        question: "테스트넷에서 실습하는 법",
        answer:
          "테스트넷은 실제 자산을 사용하지 않고 블록체인 개발 및 DApp 테스트를 할 수 있는 실험용 네트워크입니다. 메타마스크 등 지갑에서 테스트넷(예: Sepolia, Goerli)으로 네트워크를 전환하고, 해당 테스트넷의 수도꼭지(Faucet)에서 테스트용 코인을 받아 스마트 컨트랙트 배포나 DApp 기능을 시험해볼 수 있습니다.",
        links: [
          { title: "Sepolia 수도꼭지", url: "https://sepoliafaucet.com/" },
          { title: "테스트넷 가이드", url: "https://ethereum.org/ko/developers/docs/networks/#testnets" },
        ],
        tips: "테스트넷은 메인넷과 동일한 환경을 제공하지만, 실제 가치가 없는 토큰을 사용합니다.",
        practice: {
          title: "Sepolia 테스트넷 설정 및 ETH 받기",
          steps: [
            "1. 메타마스크 설치 및 계정 생성",
            "2. 네트워크 드롭다운 메뉴에서 'Sepolia 테스트 네트워크' 선택",
            "3. sepoliafaucet.com 방문",
            "4. 지갑 주소 입력 및 인증 과정 완료",
            "5. 테스트 ETH 수령 (트랜잭션 확인)",
            "6. 메타마스크에서 잔액 확인",
          ],
          warning:
            "⚠️ 테스트넷 ETH는 실제 가치가 없습니다. 또한 테스트넷은 주기적으로 리셋될 수 있으니 중요한 데이터는 백업하세요.",
        },
      },
      {
        id: "11-7",
        question: "GitHub 오픈소스 보는 법",
        answer:
          "GitHub는 많은 Web3 프로젝트들이 소스 코드를 공개하고 협업하는 플랫폼입니다. 프로젝트의 GitHub 저장소(Repository)에서 코드를 직접 보거나, 이슈(Issue) 탭에서 버그나 개선 사항 논의를, 풀 리퀘스트(Pull Request) 탭에서 코드 변경 제안 및 리뷰 과정을 확인할 수 있습니다.",
        links: [
          { title: "GitHub 가이드", url: "https://docs.github.com/ko" },
          { title: "OpenZeppelin 저장소", url: "https://github.com/OpenZeppelin/openzeppelin-contracts" },
        ],
        tips: "README.md 파일을 먼저 읽으면 프로젝트의 개요, 설치 방법, 사용법 등을 파악할 수 있습니다.",
        practice: {
          title: "GitHub에서 스마트 컨트랙트 코드 분석하기",
          steps: [
            "1. github.com/OpenZeppelin/openzeppelin-contracts 방문",
            "2. 'contracts' 폴더 클릭",
            "3. 관심 있는 컨트랙트 카테고리 선택 (예: token)",
            "4. 특정 컨트랙트 파일 열기 (예: ERC20.sol)",
            "5. 코드 상단의 주석과 문서 링크 확인",
            "6. 'Blame' 버튼을 클릭하여 각 라인의 변경 이력 확인",
          ],
          warning:
            "⚠️ 항상 공식 저장소인지 확인하고, 스마트 컨트랙트 코드를 그대로 복사해 사용할 때는 라이센스를 확인하세요.",
        },
      },
      {
        id: "11-8",
        question: "Tenderly, OpenZeppelin, Slither 소개",
        answer:
          "Tenderly는 스마트 컨트랙트 개발 및 운영을 위한 모니터링, 디버깅, 시뮬레이션 플랫폼입니다. OpenZeppelin은 안전하고 표준화된 스마트 컨트랙트 라이브러리(예: ERC20, ERC721 구현)를 제공하여 개발자들이 보안 취약점을 줄이고 빠르게 개발할 수 있도록 돕습니다. Slither는 Solidity 코드의 취약점을 자동으로 분석해주는 정적 분석 도구입니다.",
        links: [
          { title: "Tenderly", url: "https://tenderly.co/" },
          { title: "OpenZeppelin", url: "https://openzeppelin.com/" },
          { title: "Slither", url: "https://github.com/crytic/slither" },
        ],
        tips: "이러한 도구들을 활용하면 스마트 컨트랙트의 보안성과 품질을 높일 수 있습니다.",
        quiz: {
          question: "Slither의 주요 기능은?",
          options: [
            "스마트 컨트랙트 모니터링",
            "표준 컨트랙트 라이브러리 제공",
            "트랜잭션 시뮬레이션",
            "코드 취약점 정적 분석",
          ],
          correctAnswer: 3,
          explanation:
            "Slither는 Solidity 코드의 취약점을 자동으로 찾아내는 정적 분석 도구입니다. 재진입 공격, 정수 오버플로우, 권한 관리 문제 등 다양한 보안 취약점을 감지할 수 있습니다. 스마트 컨트랙트 모니터링은 Tenderly, 표준 컨트랙트 라이브러리는 OpenZeppelin의 주요 기능입니다.",
        },
      },
      {
        id: "11-9",
        question: "API와 RPC 노드의 차이점과 역할은 무엇인가요? (Infura, Alchemy, QuickNode 등 서비스 소개)",
        answer:
          "RPC(Remote Procedure Call) 노드는 블록체인 네트워크에 직접 연결되어 데이터를 읽거나 트랜잭션을 보낼 수 있게 하는 서버입니다. API(Application Programming Interface)는 개발자가 특정 기능을 쉽게 사용할 수 있도록 미리 정의된 인터페이스로, RPC 노드 기능을 포함하여 더 추상화된 형태로 제공될 수 있습니다. Infura, Alchemy, QuickNode는 개발자들이 직접 노드를 운영할 필요 없이 RPC 접근 및 추가 API 기능을 제공하는 노드 서비스 제공업체입니다.",
        links: [
          { title: "Infura", url: "https://infura.io/" },
          { title: "Alchemy", url: "https://www.alchemy.com/" },
        ],
        tips: "자체 노드 운영은 완전한 탈중앙화를 제공하지만, 노드 서비스는 개발 속도와 편의성을 높여줍니다.",
        quiz: {
          question: "노드 서비스 제공업체(Infura, Alchemy 등)의 주요 장점이 아닌 것은?",
          options: [
            "인프라 관리 부담 감소",
            "추가 개발 도구 및 분석 기능",
            "완전한 탈중앙화 보장",
            "높은 가용성과 안정성",
          ],
          correctAnswer: 2,
          explanation:
            "노드 서비스 제공업체를 사용하면 중앙화된 서비스에 의존하게 되므로 완전한 탈중앙화를 보장하지 않습니다. 이는 단일 실패 지점이 될 수 있습니다. 그러나 인프라 관리 부담 감소, 추가 개발 도구 제공, 높은 가용성 등의 장점이 있어 많은 개발자들이 사용합니다.",
        },
      },
      {
        id: "11-10",
        question: "블록체인 인덱싱 프로토콜(The Graph, SubQuery, Satsuma)은 개발자와 사용자에게 왜 필요한가요?",
        answer:
          "블록체인 데이터는 직접 쿼리하기 어렵고 비효율적일 수 있습니다. 인덱싱 프로토콜은 블록체인 데이터를 정리하고 색인화하여, DApp 개발자들이 필요한 데이터를 빠르고 쉽게 검색하고 사용할 수 있도록 API(GraphQL 등) 형태로 제공합니다. The Graph가 대표적이며, SubQuery, Satsuma 등도 유사한 기능을 제공합니다.",
        links: [
          { title: "The Graph", url: "https://thegraph.com/" },
          { title: "SubQuery", url: "https://subquery.network/" },
        ],
        tips: "인덱싱 프로토콜을 사용하면 복잡한 데이터 쿼리를 효율적으로 처리할 수 있습니다.",
        quiz: {
          question: "블록체인 인덱싱 프로토콜의 주요 이점은?",
          options: [
            "블록체인 트랜잭션 속도 향상",
            "스마트 컨트랙트 보안 강화",
            "효율적인 데이터 쿼리 및 검색",
            "가스비 절감",
          ],
          correctAnswer: 2,
          explanation:
            "블록체인 인덱싱 프로토콜의 주요 이점은 효율적인 데이터 쿼리 및 검색입니다. 블록체인 데이터를 구조화하고 인덱싱하여 개발자가 복잡한 쿼리를 쉽게 실행할 수 있게 합니다. 이는 DApp의 성능과 사용자 경험을 향상시키지만, 블록체인 자체의 트랜잭션 속도나 가스비에는 직접적인 영향을 미치지 않습니다.",
        },
      },
      {
        id: "11-11",
        question: "스마트 컨트랙트 업그레이드 방식(프록시 패턴: UUPS, Transparent Proxy 등)의 기본 개념은?",
        answer:
          "블록체인에 배포된 스마트 컨트랙트 코드는 기본적으로 변경이 불가능합니다. 프록시 패턴은 사용자가 상호작용하는 주소(프록시 컨트랙트)는 고정해두고, 실제 로직이 담긴 컨트랙트 주소만 변경하여 스마트 컨트랙트를 업그레이드할 수 있게 하는 방식입니다. UUPS와 Transparent Proxy는 프록시 패턴의 구체적인 구현 방식들입니다.",
        links: [
          { title: "프록시 패턴 설명", url: "https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies" },
          {
            title: "UUPS vs Transparent",
            url: "https://docs.openzeppelin.com/contracts/4.x/api/proxy#transparent-vs-uups",
          },
        ],
        tips: "업그레이드 가능한 컨트랙트는 유연성을 제공하지만, 거버넌스와 보안 측면에서 신중하게 설계해야 합니다.",
        quiz: {
          question: "UUPS(Universal Upgradeable Proxy Standard)와 Transparent Proxy의 주요 차이점은?",
          options: [
            "UUPS는 업그레이드 로직이 구현 컨트랙트에 있고, Transparent Proxy는 프록시 컨트랙트에 있다",
            "UUPS는 가스 비용이 더 높다",
            "Transparent Proxy는 업그레이드가 불가능하다",
            "UUPS는 ERC-20 토큰에만 사용할 수 있다",
          ],
          correctAnswer: 0,
          explanation:
            "UUPS와 Transparent Proxy의 주요 차이점은 업그레이드 로직의 위치입니다. UUPS에서는 업그레이드 로직이 구현 컨트랙트에 있어 프록시 컨트랙트가 더 간단해지고 가스 비용이 절감됩니다. Transparent Proxy에서는 업그레이드 로직이 프록시 컨트랙트 자체에 있습니다. 두 방식 모두 업그레이드가 가능하며, 다양한 컨트랙트 유형에 사용할 수 있습니다.",
        },
      },
      {
        id: "11-12",
        question: "가스 효율적인 스마트 컨트랙트 작성의 기본 원칙 (비개발자도 이해할 수 있는 수준으로)",
        answer:
          "스마트 컨트랙트의 각 연산은 가스(수수료)를 소모하므로, 불필요한 연산이나 데이터 저장을 최소화해야 합니다. 예를 들어, 반복문 대신 더 효율적인 자료구조를 사용하거나, 자주 변경되지 않는 데이터는 저장 비용이 낮은 방식으로 관리하고, 가능한 한 계산을 오프체인에서 수행 후 결과만 온체인에 기록하는 것이 좋습니다.",
        links: [
          { title: "가스 최적화 팁", url: "https://ethereum.org/ko/developers/docs/gas/" },
          { title: "Solidity 가스 최적화", url: "https://docs.soliditylang.org/en/latest/internals/optimizer.html" },
        ],
        tips: "가스 효율성은 사용자 경험과 경제성에 직접적인 영향을 미치므로 중요합니다.",
        quiz: {
          question: "Solidity에서 가스 비용을 줄이는 방법으로 적절하지 않은 것은?",
          options: [
            "uint256 대신 uint8 사용하기",
            "불필요한 상태 변수 제거하기",
            "복잡한 계산을 오프체인으로 옮기기",
            "가능한 많은 이벤트 발생시키기",
          ],
          correctAnswer: 3,
          explanation:
            "이벤트를 발생시키는 것(emit)도 가스를 소모하므로, 불필요하게 많은 이벤트를 발생시키면 가스 비용이 증가합니다. 반면, 불필요한 상태 변수 제거, 복잡한 계산의 오프체인 처리, 적절한 데이터 타입 사용(단, uint8이 항상 uint256보다 효율적인 것은 아님)은 가스 비용을 줄이는 방법입니다.",
        },
      },
      {
        id: "11-13",
        question: "노코드/로우코드 Web3 개발 플랫폼(Thirdweb, Bunzz, BuildShip 등) 소개 및 활용 가능성",
        answer:
          "노코드/로우코드 Web3 플랫폼은 코딩 지식이 거의 없거나 적은 사용자도 미리 만들어진 템플릿이나 드래그앤드롭 인터페이스를 통해 간단한 스마트 컨트랙트(NFT 발행, 토큰 생성 등)를 배포하거나 DApp을 만들 수 있도록 지원하는 도구입니다. Web3 개발의 진입 장벽을 낮추는 데 기여합니다.",
        links: [
          { title: "Thirdweb", url: "https://thirdweb.com/" },
          { title: "Bunzz", url: "https://bunzz.dev/" },
        ],
        tips: "노코드 도구는 빠른 프로토타이핑과 기본 기능 구현에 유용하지만, 복잡한 로직은 여전히 코딩이 필요할 수 있습니다.",
        quiz: {
          question: "노코드/로우코드 Web3 개발 플랫폼의 주요 장점은?",
          options: [
            "모든 종류의 복잡한 DApp 개발 가능",
            "개발 시간 및 비용 절감",
            "완전한 커스터마이징 지원",
            "모든 블록체인 네트워크 지원",
          ],
          correctAnswer: 1,
          explanation:
            "노코드/로우코드 Web3 개발 플랫폼의 주요 장점은 개발 시간과 비용을 절감할 수 있다는 점입니다. 미리 만들어진 템플릿과 컴포넌트를 활용하여 기본적인 기능을 빠르게 구현할 수 있습니다. 그러나 매우 복잡한 DApp 개발, 완전한 커스터마이징, 모든 블록체인 네트워크 지원 등에는 한계가 있을 수 있습니다.",
        },
      },
    ],
  },
  {
    category: "12. 🧠 Web3 심화 개념 (Web3 Advanced Concepts)",
    items: [
      {
        id: "12-1",
        question: "탈중앙화란 무엇인가요?",
        answer:
          "탈중앙화는 단일 개인이나 기관이 시스템 전체를 통제하지 않고, 권한과 책임이 여러 참여자에게 분산되어 있는 상태를 의미합니다. Web3에서는 데이터 소유권, 의사결정, 네트워크 운영 등에서 중앙 집중적인 통제로부터 벗어나는 것을 목표로 합니다.",
        links: [
          { title: "탈중앙화 설명", url: "https://ethereum.org/ko/developers/docs/consensus-mechanisms/" },
          { title: "Web3 철학", url: "https://ethereum.org/ko/web3/" },
        ],
        tips: "완전한 탈중앙화는 이상적인 목표이지만, 현실에서는 다양한 수준의 탈중앙화가 존재합니다.",
        quiz: {
          question: "탈중앙화 시스템의 특징이 아닌 것은?",
          options: [
            "단일 실패 지점이 없다",
            "검열 저항성이 있다",
            "의사결정이 분산되어 있다",
            "항상 중앙화된 시스템보다 효율적이다",
          ],
          correctAnswer: 3,
          explanation:
            "탈중앙화 시스템은 일반적으로 중앙화된 시스템보다 효율성이 낮을 수 있습니다. 합의 메커니즘과 데이터 복제 등의 과정이 필요하기 때문입니다. 그러나 이러한 효율성 저하는 보안, 투명성, 검열 저항성 등의 이점을 위한 트레이드오프로 볼 수 있습니다.",
        },
      },
      {
        id: "12-2",
        question: "토크노믹스 기초: 발행량, 소각, 인플레이션",
        answer:
          "토크노믹스는 토큰(Token)과 경제학(Economics)의 합성어로, 토큰의 설계, 분배, 공급 및 수요 관리 등 경제적 모델을 의미합니다. 총 발행량은 토큰의 희소성을 결정하고, 소각은 공급량을 줄여 가치를 높이려는 시도이며, 인플레이션은 지속적인 토큰 발행으로 가치가 하락하는 현상을 나타냅니다.",
        links: [
          {
            title: "토크노믹스 설계",
            url: "https://medium.com/coinmonks/token-economics-101-a-beginners-guide-to-tokenomics-2e8d13cb1fe3",
          },
          { title: "토큰 소각 메커니즘", url: "https://academy.binance.com/en/articles/what-is-token-burning" },
        ],
        tips: "지속 가능한 토크노믹스 설계는 프로젝트의 장기적인 성공에 중요한 요소입니다.",
        quiz: {
          question: "토큰 소각(burning)의 주요 목적은?",
          options: [
            "네트워크 수수료 증가",
            "토큰 공급량 감소를 통한 가치 상승 유도",
            "거버넌스 참여 증가",
            "스테이킹 보상 증가",
          ],
          correctAnswer: 1,
          explanation:
            "토큰 소각은 유통 중인 토큰의 일부를 영구적으로 제거하여 공급량을 줄이는 과정입니다. 이는 희소성을 증가시켜 토큰 가치 상승을 유도하는 것이 주요 목적입니다. 또한 일부 프로젝트에서는 수수료의 일부를 소각하여 디플레이션 모델을 구현하기도 합니다.",
        },
      },
      {
        id: "12-3",
        question: "모듈형 블록체인이란? (Celestia, Fuel 등)",
        answer:
          "모듈형 블록체인은 블록체인의 핵심 기능(실행, 합의, 데이터 가용성, 결제)을 각각 독립적인 모듈(계층)로 분리하여, 각 기능을 전문화하고 최적화하려는 아키텍처입니다. 이를 통해 확장성, 유연성, 주권 등을 향상시킬 수 있습니다. Celestia(데이터 가용성), Fuel(실행) 등이 대표적입니다.",
        links: [
          {
            title: "모듈형 블록체인 설명",
            url: "https://celestia.org/learn/basics-of-modular-blockchains/introduction/",
          },
          { title: "Celestia", url: "https://celestia.org/" },
        ],
        tips: "모듈형 접근 방식은 각 계층이 독립적으로 최적화될 수 있어 확장성 문제 해결에 효과적입니다.",
        quiz: {
          question: "모듈형 블록체인 아키텍처의 주요 이점은?",
          options: [
            "모든 트랜잭션이 하나의 체인에서 처리됨",
            "각 계층이 독립적으로 최적화될 수 있음",
            "항상 완전한 탈중앙화를 보장함",
            "스마트 컨트랙트가 필요 없음",
          ],
          correctAnswer: 1,
          explanation:
            "모듈형 블록체인의 주요 이점은 실행, 합의, 데이터 가용성 등의 계층을 분리하여 각 계층이 독립적으로 최적화될 수 있다는 점입니다. 이를 통해 특정 용도에 맞게 각 계층을 조합하여 확장성, 보안성, 탈중앙화 등의 특성을 조절할 수 있습니다.",
        },
      },
      {
        id: "12-4",
        question: "Privacy Chain: Aleo, Aztec, Iron Fish",
        answer:
          "프라이버시 체인은 거래 내역이나 사용자 신원을 기본적으로 비공개로 처리하여 익명성과 프라이버시를 강화한 블록체인입니다. 영지식 증명 등의 암호학 기술을 활용하여 거래의 유효성은 검증하면서도 세부 내용은 숨깁니다. Aleo, Aztec, Iron Fish 등이 이러한 프라이버시 기능을 제공하는 프로젝트입니다.",
        links: [
          { title: "Aleo", url: "https://aleo.org/" },
          { title: "Aztec", url: "https://aztec.network/" },
        ],
        tips: "프라이버시 체인은 금융 거래나 개인 정보가 포함된 애플리케이션에 적합합니다.",
        quiz: {
          question: "프라이버시 체인에서 주로 사용되는 암호학 기술은?",
          options: [
            "영지식 증명(Zero-Knowledge Proofs)",
            "작업 증명(Proof of Work)",
            "지분 증명(Proof of Stake)",
            "권한 증명(Proof of Authority)",
          ],
          correctAnswer: 0,
          explanation:
            "프라이버시 체인은 주로 영지식 증명(Zero-Knowledge Proofs) 기술을 사용합니다. 이 기술은 특정 정보를 공개하지 않고도 그 정보가 유효하다는 것을 증명할 수 있게 해줍니다. 예를 들어, 트랜잭션의 금액이나 참여자를 공개하지 않고도 트랜잭션이 유효하다는 것을 증명할 수 있습니다.",
        },
      },
      {
        id: "12-5",
        question: "Web3 ID: DID, SBT, VC",
        answer:
          "Web3 ID는 사용자가 자신의 디지털 신원을 스스로 통제하고 관리할 수 있도록 하는 개념입니다. DID(Decentralized Identifiers)는 탈중앙화된 식별자이고, SBT(Soulbound Tokens)는 양도 불가능한 신원 증명 토큰이며, VC(Verifiable Credentials)는 검증 가능한 자격 증명(예: 졸업장, 면허증)을 디지털 형태로 표현한 것입니다.",
        links: [
          { title: "DID 설명", url: "https://www.w3.org/TR/did-core/" },
          { title: "SBT 소개", url: "https://vitalik.ca/general/2022/01/26/soulbound.html" },
        ],
        tips: "Web3 ID는 개인 정보 보호와 자기 주권 신원(Self-Sovereign Identity)을 가능하게 합니다.",
        quiz: {
          question: "Soulbound Token(SBT)의 주요 특징은?",
          options: [
            "다른 지갑으로 전송 가능",
            "NFT와 동일한 표준 사용",
            "양도 불가능(non-transferable)",
            "항상 금전적 가치를 가짐",
          ],
          correctAnswer: 2,
          explanation:
            "Soulbound Token(SBT)의 주요 특징은 양도 불가능(non-transferable)하다는 점입니다. 이는 특정 지갑이나 사용자에게 영구적으로 연결되어 있어 다른 사람에게 전송할 수 없습니다. 이러한 특성 때문에 학위, 자격증, 멤버십 등 개인의 신원이나 성취와 관련된 정보를 나타내는 데 적합합니다.",
        },
      },
      {
        id: "12-6",
        question: "Data DAO란?",
        answer:
          "데이터 DAO는 데이터를 집단적으로 소유, 관리, 통제하고 그로부터 발생하는 가치를 공유하기 위해 만들어진 탈중앙화 자율 조직입니다. 데이터의 수집, 레이블링, 분석, 거래 등을 커뮤니티 기반으로 운영하며, 데이터 주권과 공정한 데이터 경제를 목표로 할 수 있습니다.",
        links: [
          { title: "Ocean Protocol", url: "https://oceanprotocol.com/" },
          { title: "데이터 DAO 개념", url: "https://medium.com/oceanprotocol/introducing-data-nfts-3a7e589afbcb" },
        ],
        tips: "데이터 DAO는 AI 학습 데이터 등 가치 있는 데이터셋의 공동 관리에 적합합니다.",
        quiz: {
          question: "데이터 DAO의 주요 목적이 아닌 것은?",
          options: ["데이터 소유권의 민주화", "데이터 가치의 공정한 분배", "데이터 접근성 향상", "데이터 독점 강화"],
          correctAnswer: 3,
          explanation:
            "데이터 DAO의 주요 목적은 데이터 독점을 강화하는 것이 아니라, 오히려 그 반대입니다. 데이터 DAO는 데이터 소유권을 민주화하고, 데이터에서 발생하는 가치를 공정하게 분배하며, 데이터 접근성을 향상시키는 것을 목표로 합니다. 이는 현재 소수의 대형 기업이 데이터를 독점하는 구조에 대한 대안으로 제시됩니다.",
        },
      },
      {
        id: "12-7",
        question: "MEV란?",
        answer:
          "MEV(Maximal Extractable Value, 이전에는 Miner Extractable Value)는 블록 생산자(채굴자 또는 검증자)가 블록 내 트랜잭션의 순서, 포함 여부 등을 조작하여 얻을 수 있는 최대 이익을 의미합니다. 차익 거래, 청산 기회 선점 등으로 발생하며, 사용자에게 불리한 가격(슬리피지)을 유발할 수 있습니다.",
        links: [
          { title: "MEV 설명", url: "https://ethereum.org/ko/developers/docs/mev/" },
          { title: "Flashbots", url: "https://www.flashbots.net/" },
        ],
        tips: "MEV는 DeFi 생태계에서 중요한 이슈이며, 이를 완화하기 위한 다양한 솔루션이 개발되고 있습니다.",
        quiz: {
          question: "MEV의 대표적인 예시가 아닌 것은?",
          options: [
            "샌드위치 공격(Sandwich Attack)",
            "차익 거래(Arbitrage)",
            "청산 경쟁(Liquidation)",
            "51% 공격(51% Attack)",
          ],
          correctAnswer: 3,
          explanation:
            "51% 공격은 MEV의 예시가 아닙니다. 51% 공격은 블록체인 네트워크의 해시파워나 지분의 과반수를 장악하여 이중 지불 등의 공격을 수행하는 것을 의미합니다. 반면, 샌드위치 공격(사용자 거래 전후로 주문을 넣어 이익 취득), 차익 거래(여러 시장 간 가격 차이 활용), 청산 경쟁(담보 청산 기회 선점)은 모두 MEV의 대표적인 예시입니다.",
        },
      },
      {
        id: "12-8",
        question: "DePIN, RWA, SocialFi 소개",
        answer:
          "DePIN(Decentralized Physical Infrastructure Networks)은 블록체인과 토큰 인센티브를 활용하여 실제 물리적 인프라(예: 무선 네트워크, 저장 공간, 에너지망)를 분산된 방식으로 구축하고 운영하는 분야입니다. RWA(Real World Asset)는 부동산, 미술품, 채권 등 현실 세계 자산을 토큰화하여 블록체인 상에서 거래하거나 담보로 활용하는 것입니다. SocialFi는 소셜 미디어와 DeFi를 결합하여 콘텐츠 제작, 커뮤니티 활동 등에 대한 경제적 보상을 제공하는 분야입니다.",
        links: [
          { title: "Helium (DePIN 예시)", url: "https://www.helium.com/" },
          { title: "Lens Protocol (SocialFi 예시)", url: "https://www.lens.xyz/" },
        ],
        tips: "이러한 분야들은 Web3 기술을 실생활과 연결하는 중요한 응용 사례입니다.",
        quiz: {
          question: "RWA(Real World Asset) 토큰화의 주요 이점은?",
          options: [
            "실물 자산의 완전한 디지털화",
            "자산의 유동성 및 접근성 향상",
            "자산 가치의 변동성 제거",
            "규제 회피",
          ],
          correctAnswer: 1,
          explanation:
            "RWA 토큰화의 주요 이점은 전통적으로 유동성이 낮은 실물 자산(부동산, 미술품 등)의 유동성과 접근성을 향상시키는 것입니다. 토큰화를 통해 자산을 분할 소유할 수 있게 되어 더 많은 사람들이 적은 금액으로도 투자할 수 있게 됩니다. 그러나 이는 자산의 완전한 디지털화나 가치 변동성 제거를 의미하지는 않으며, 규제 회피가 목적이 아닙니다.",
        },
      },
      {
        id: "12-9",
        question:
          "검열 저항성(Censorship Resistance)이란 무엇이며, 블록체인 아키텍처에서 어떻게 구현되나요? (PBS, crLists 등)",
        answer:
          "검열 저항성은 특정 주체(정부, 기업 등)가 트랜잭션을 임의로 차단하거나 방해할 수 없는 특성입니다. 탈중앙화된 네트워크, 다수의 검증자 참여, 암호학적 보안 등을 통해 구현됩니다. PBS(Proposer-Builder Separation)는 블록 제안자와 블록 빌더 역할을 분리하여 검열 위험을 줄이려는 시도이며, crLists(Censorship Resistance Lists)는 특정 트랜잭션 포함을 강제하는 메커니즘입니다.",
        links: [
          { title: "검열 저항성 설명", url: "https://ethereum.org/ko/developers/docs/consensus-mechanisms/pow/" },
          {
            title: "PBS 소개",
            url: "https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725",
          },
        ],
        tips: "검열 저항성은 블록체인의 핵심 가치 중 하나이지만, 완벽한 검열 저항성을 달성하는 것은 기술적으로 도전적입니다.",
        quiz: {
          question: "PBS(Proposer-Builder Separation)의 주요 목적은?",
          options: ["트랜잭션 처리 속도 향상", "MEV 추출 최대화", "검열 위험 감소 및 MEV 시장 효율화", "가스비 절감"],
          correctAnswer: 2,
          explanation:
            "PBS(Proposer-Builder Separation)의 주요 목적은 블록 제안자와 블록 빌더의 역할을 분리함으로써 검열 위험을 줄이고 MEV 시장을 더 효율적으로 만드는 것입니다. 이를 통해 블록 빌더는 MEV 추출을 최적화하고, 블록 제안자는 최고 입찰가를 선택하여 네트워크의 경제적 효율성을 높일 수 있습니다. 또한 역할 분리로 인해 검열 시도가 더 어려워집니다.",
        },
      },
      {
        id: "12-10",
        question: "네트워크 효과(Network Effects)가 Web3 프로젝트의 성공과 실패에 미치는 영향은?",
        answer:
          "네트워크 효과는 특정 제품이나 서비스의 사용자 수가 증가할수록 그 가치가 더욱 커지는 현상입니다. Web3 프로젝트에서 더 많은 사용자, 개발자, 유동성이 모일수록 생태계가 활성화되고 다른 참여자들에게 더 매력적이 되어 선순환을 만들 수 있지만, 초기 사용자 확보가 어려우면 성장이 정체될 수 있습니다.",
        links: [
          { title: "네트워크 효과 설명", url: "https://a16z.com/network-effects-and-web3/" },
          { title: "Web3 성장 전략", url: "https://future.a16z.com/how-to-win-users-in-web3/" },
        ],
        tips: "Web3 프로젝트는 커뮤니티 구축과 참여 유도에 집중해야 합니다.",
        quiz: {
          question: "네트워크 효과가 강한 Web3 프로젝트의 특징은?",
          options: ["높은 진입 장벽", "폐쇄적인 커뮤니티", "낮은 사용자 참여도", "활발한 커뮤니티와 다양한 참여 기회"],
          correctAnswer: 3,
          explanation:
            "네트워크 효과가 강한 Web3 프로젝트는 활발한 커뮤니티와 다양한 참여 기회를 제공합니다. 더 많은 사용자가 참여하고 기여할수록 프로젝트의 가치가 높아지고, 이는 다시 더 많은 사용자를 유치하는 선순환을 만듭니다. 높은 진입 장벽, 폐쇄적인 커뮤니티, 낮은 사용자 참여도는 네트워크 효과를 저해하는 요소입니다.",
        },
      },
    ],
  },
]
