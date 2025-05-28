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
          { title: "메타마스크 다운로드", url: "https://metamask.io/download/" },
          { title: "메타마스크 한국어 지원", url: "https://support.metamask.io/hc/ko" },
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
          description: "처음부터 메타마스크를 설치하고 안전하게 지갑을 생성하는 전체 과정을 단계별로 진행해보세요.",
          steps: [
            {
              title: "metamask.io 공식 웹사이트 방문",
              description: "브라우저에서 https://metamask.io 에 접속합니다. 반드시 공식 사이트인지 URL을 확인하세요.",
            },
            {
              title: "브라우저에 맞는 확장 프로그램 다운로드",
              description: "Chrome, Firefox, Edge 등 사용 중인 브라우저에 맞는 확장 프로그램을 다운로드합니다.",
            },
            {
              title: "'지갑 생성' 선택",
              description:
                "설치 후 메타마스크를 열고 '지갑 생성'을 선택합니다. 기존 지갑이 있다면 '지갑 가져오기'를 선택하세요.",
            },
            {
              title: "비밀번호 설정",
              description:
                "강력한 비밀번호를 설정합니다. 최소 8자 이상, 대소문자, 숫자, 특수문자를 포함하는 것이 좋습니다.",
            },
            {
              title: "시드 구문(12단어) 안전하게 백업",
              description:
                "12개의 영어 단어로 구성된 시드 구문을 종이에 적어 안전한 곳에 보관합니다. 절대 디지털로 저장하지 마세요.",
            },
            {
              title: "시드 구문 확인 과정 완료",
              description: "백업한 시드 구문을 올바른 순서로 입력하여 확인 과정을 완료합니다.",
            },
          ],
          warning:
            "⚠️ 시드 구문은 절대 스크린샷으로 저장하거나 온라인에 저장하지 마세요. 종이에 적어 안전한 곳에 보관하세요.",
          links: [
            { title: "메타마스크 공식 사이트", url: "https://metamask.io/" },
            { title: "메타마스크 보안 가이드", url: "https://metamask.io/security/" },
          ],
        },
      },
      {
        id: "1-2",
        question: "프라이빗 키와 시드 구문의 차이는?",
        answer:
          "프라이빗 키는 특정 계정의 자산에 접근할 수 있는 비밀번호와 같은 고유한 암호 코드입니다. 시드 구문(또는 복구 구문)은 이 프라이빗 키들을 생성하고 지갑 전체를 복구하는 데 사용되는 12~24개의 단어 조합입니다.",
        links: [
          { title: "이더리움 계정 구조", url: "https://ethereum.org/ko/developers/docs/accounts/" },
          { title: "Ledger 하드웨어 지갑", url: "https://www.ledger.com/ko" },
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
          { title: "이더리움 주소 형식", url: "https://ethereum.org/ko/developers/docs/accounts/" },
          { title: "HD 지갑 설명", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" },
        ],
        tips: "여러 개의 지갑 주소를 사용하면 프라이버시를 강화하고 자산을 용도별로 구분할 수 있습니다.",
        practice: {
          title: "메타마스크 보안 설정 강화하기",
          description:
            "메타마스크 지갑의 보안을 최대한 강화하여 해킹과 피싱 공격으로부터 자산을 보호하는 방법을 배워보세요.",
          steps: [
            {
              title: "메타마스크 설정 메뉴 열기",
              description:
                "메타마스크 확장 프로그램을 열고 우측 상단의 계정 아이콘을 클릭한 후 'Settings'를 선택합니다.",
            },
            {
              title: "'보안 및 개인정보' 선택",
              description: "설정 메뉴에서 'Security & Privacy' 탭을 클릭하여 보안 관련 설정에 접근합니다.",
            },
            {
              title: "'시드 구문 공개' 기능 비활성화",
              description:
                "'Reveal Secret Recovery Phrase' 기능을 비활성화하여 실수로 시드 구문이 노출되는 것을 방지합니다.",
            },
            {
              title: "자동 잠금 시간 설정 (5분 권장)",
              description: "'Auto-Lock Timer'를 5분 이하로 설정하여 일정 시간 후 자동으로 지갑이 잠기도록 합니다.",
            },
            {
              title: "피싱 감지 기능 활성화",
              description: "'Use Phishing Detection'을 활성화하여 알려진 피싱 사이트 접속 시 경고를 받을 수 있습니다.",
            },
            {
              title: "하드웨어 지갑 연결 설정 (선택사항)",
              description: "추가 보안을 위해 Ledger나 Trezor 같은 하드웨어 지갑을 메타마스크에 연결할 수 있습니다.",
            },
          ],
          warning: "⚠️ 시드 구문은 절대 온라인에 입력하거나 스크린샷으로 저장하지 마세요.",
          links: [
            { title: "메타마스크 보안 가이드", url: "https://metamask.io/security/" },
            { title: "하드웨어 지갑 연결 방법", url: "https://metamask.zendesk.com/hc/en-us/articles/4408552261275" },
          ],
        },
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
            "암호화폐는 중앙은행이나 금융기관의 통제를 받지 않는 탈중앙화된 시스템입니다. 중앙은행의 통제는 암호화폐의 특성이 아닙.",
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
          { title: "블록체인 기초 가이드", url: "https://ethereum.org/ko/developers/docs/intro-to-ethereum/" },
          { title: "분산 원장 기술", url: "https://www.ibm.com/kr-ko/topics/what-is-blockchain" },
        ],
        tips: "블록체인은 다양한 산업 분야에서 혁신적인 변화를 가져올 수 있습니다.",
        quiz: {
          question: "블록체인의 핵심 특성이 아닌 것은?",
          options: ["분산 원장 기술", "데이터 불변성", "중앙 기관의 통제", "암호화 기술 사용"],
          correctAnswer: 2,
          explanation:
            "블록체인은 중앙 기관의 통제 없이 분산된 네트워크에서 운영되는 것이 핵심 특성입니다. 중앙 기관의 통제는 블록체인의 특성이 아닙.",
        },
        practice: {
          title: "블록체인 탐색기로 트랜잭션 추적하기",
          description: "Etherscan을 사용하여 실제 이더리움 트랜잭션을 조회하고 분석하는 방법을 배워보세요.",
          steps: [
            {
              title: "Etherscan.io 접속하기",
              description: "브라우저에서 https://etherscan.io 에 접속합니다. 이더리움 메인넷의 공식 블록 탐색기입니다.",
            },
            {
              title: "검색창에 트랜잭션 해시 입력",
              description: "상단 검색창에 트랜잭션 해시(0x로 시작하는 긴 문자열)를 입력하고 검색합니다.",
            },
            {
              title: "From/To 주소 확인하기",
              description: "트랜잭션 세부 정보에서 보낸 사람(From)과 받는 사람(To) 주소를 확인합니다.",
            },
            {
              title: "가스비와 블록 번호 확인",
              description:
                "Gas Used, Gas Price, Block Number 등의 정보를 확인하여 트랜잭션 비용과 처리 상태를 파악합니다.",
            },
            {
              title: "Input Data 섹션에서 스마트 컨트랙트 호출 내용 확인",
              description:
                "스마트 컨트랙트와 상호작용한 트랜잭션의 경우, Input Data에서 호출된 함수와 매개변수를 확인할 수 있습니다.",
            },
            {
              title: "Event Logs에서 이벤트 발생 내역 확인",
              description:
                "Logs 탭에서 트랜잭션 실행 중 발생한 이벤트들을 확인하여 실제로 어떤 일이 일어났는지 파악합니다.",
            },
          ],
          warning: "⚠️ 피싱 사이트 주의! 항상 공식 URL(etherscan.io)을 확인하세요.",
          links: [
            { title: "Etherscan 공식 사이트", url: "https://etherscan.io/" },
            { title: "Etherscan 사용법 가이드", url: "https://info.etherscan.com/" },
          ],
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
          { title: "업비트", url: "https://upbit.com/" },
          { title: "빗썸", url: "https://www.bithumb.com/" },
        ],
        tips: "분산 거래소(DEX)도 고려해 보세요. 중앙화된 거래소와 다른 장단점이 있습니다.",
        practice: {
          title: "거래소 보안 설정 체크리스트",
          description: "암호화폐 거래소 계정의 보안을 최대한 강화하는 방법을 단계별로 설정해보세요.",
          steps: [
            {
              title: "2FA(이중 인증) 설정하기",
              description:
                "Google Authenticator나 Authy 앱을 사용하여 2단계 인증을 활성화합니다. SMS보다 앱 기반 인증이 더 안전합니다.",
            },
            {
              title: "출금 화이트리스트 설정",
              description: "신뢰할 수 있는 지갑 주소만 화이트리스트에 등록하여 해킹 시에도 자산을 보호할 수 있습니다.",
            },
            {
              title: "API 키 권한 최소화",
              description: "API를 사용할 경우 거래 권한은 제외하고 조회 권한만 부여하여 위험을 최소화합니다.",
            },
            {
              title: "로그인 알림 설정",
              description: "새로운 기기나 IP에서 로그인할 때 이메일이나 SMS로 알림을 받도록 설정합니다.",
            },
            {
              title: "안티피싱 코드 설정",
              description:
                "거래소에서 보내는 공식 이메일에 포함될 개인 코드를 설정하여 가짜 이메일을 구별할 수 있습니다.",
            },
            {
              title: "정기적인 보안 감사 로그 확인",
              description: "계정 활동 로그를 정기적으로 확인하여 의심스러운 활동이 없는지 모니터링합니다.",
            },
          ],
          warning: "⚠️ 거래소에 장기간 큰 금액을 보관하지 마세요. Not your keys, not your coins!",
          links: [
            { title: "바이낸스 보안 가이드", url: "https://academy.binance.com/en/articles/binance-account-security" },
            { title: "코인베이스 보안 설정", url: "https://help.coinbase.com/en/coinbase/privacy-and-security" },
          ],
        },
      },
      {
        id: "3-2",
        question: "시장 분석 기초: 차트 보는 법",
        answer:
          "캔들 차트, 이동평균선, 거래량 지표 등을 활용하여 시장의 추세를 파악할 수 있습니다. 기술적 분석 외에도, 프로젝트의 기본적 가치(백서, 팀, 로드맵)를 분석하는 것이 중요합니다.",
        links: [
          { title: "트레이딩뷰", url: "https://kr.tradingview.com/" },
          { title: "코인마켓캡", url: "https://coinmarketcap.com/ko/" },
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
          { title: "Google Authenticator", url: "https://support.google.com/accounts/answer/1066447?hl=ko" },
          { title: "Authy 앱", url: "https://authy.com/download/" },
        ],
        tips: "2FA를 활성화하면 해킹 시도를 크게 줄일 수 있습니다.",
        practice: {
          title: "Google Authenticator로 2FA 설정하기",
          description:
            "Google Authenticator 앱을 사용하여 암호화폐 거래소나 지갑에 2단계 인증을 설정하는 방법을 배워보세요.",
          steps: [
            {
              title: "Google Authenticator 앱 다운로드",
              description: "스마트폰의 앱스토어에서 'Google Authenticator' 앱을 다운로드하고 설치합니다.",
            },
            {
              title: "거래소/지갑의 보안 설정 메뉴 접속",
              description: "사용 중인 거래소나 지갑 서비스의 계정 설정에서 보안 또는 2FA 설정 메뉴를 찾습니다.",
            },
            {
              title: "2FA 활성화 선택",
              description: "'2단계 인증 활성화' 또는 'Enable 2FA' 버튼을 클릭합니다.",
            },
            {
              title: "QR 코드 스캔 또는 수동 키 입력",
              description:
                "Google Authenticator 앱에서 '+' 버튼을 누르고 QR 코드를 스캔하거나 수동으로 키를 입력합니다.",
            },
            {
              title: "6자리 인증 코드 입력하여 확인",
              description: "앱에서 생성된 6자리 숫자 코드를 웹사이트에 입력하여 설정을 완료합니다.",
            },
            {
              title: "백업 코드 안전한 곳에 저장",
              description:
                "제공되는 백업 코드들을 종이에 적어 안전한 곳에 보관합니다. 휴대폰 분실 시 복구에 필요합니다.",
            },
          ],
          warning: "⚠️ 휴대폰 분실에 대비해 백업 코드를 반드시 오프라인에 보관하세요.",
          links: [
            { title: "Google Authenticator 다운로드", url: "https://support.google.com/accounts/answer/1066447" },
            { title: "2FA 보안 가이드", url: "https://authy.com/what-is-2fa/" },
          ],
        },
      },
      {
        id: "4-2",
        question: "피싱(Phishing) 공격 예방",
        answer:
          "출처가 불분명한 링크나 이메일을 클릭하지 않고, 개인 정보를 요구하는 메시지에 응답하지 않아야 합니다. 공식 웹사이트 주소를 확인하고, 의심스러운 활동을 발견하면 즉시 거래소에 신고해야 합니다.",
        links: [
          { title: "피싱 방지 가이드", url: "https://support.metamask.io/hc/ko/articles/360015489591" },
          {
            title: "암호화폐 보안 가이드",
            url: "https://academy.binance.com/ko/articles/how-to-secure-your-cryptocurrency",
          },
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
          { title: "Ledger 공식 사이트", url: "https://www.ledger.com/ko" },
          { title: "Trezor 공식 사이트", url: "https://trezor.io/" },
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
          { title: "DeFi 소개", url: "https://ethereum.org/ko/defi/" },
          { title: "DeFiLlama", url: "https://defillama.com/" },
        ],
        tips: "DeFi는 높은 수익률을 제공하지만, 스마트 컨트랙트 버그, 해킹 등의 위험도 존재합니다.",
        practice: {
          title: "Uniswap에서 첫 스왑 해보기",
          description: "가장 인기 있는 탈중앙화 거래소인 Uniswap에서 토큰 스왑을 직접 경험해보세요.",
          steps: [
            {
              title: "app.uniswap.org 접속",
              description: "브라우저에서 Uniswap 공식 웹사이트에 접속합니다. 반드시 공식 URL인지 확인하세요.",
            },
            {
              title: "지갑 연결 (Connect Wallet)",
              description: "우측 상단의 'Connect Wallet' 버튼을 클릭하고 메타마스크를 선택하여 지갑을 연결합니다.",
            },
            {
              title: "스왑할 토큰 쌍 선택",
              description: "교환하고 싶은 토큰을 선택합니다. 예를 들어 ETH를 USDC로 교환할 수 있습니다.",
            },
            {
              title: "금액 입력 및 예상 수령액 확인",
              description: "교환할 토큰의 양을 입력하면 받을 수 있는 토큰의 양이 자동으로 계산됩니다.",
            },
            {
              title: "슬리피지 설정 확인 (기본 0.5%)",
              description: "설정 아이콘을 클릭하여 슬리피지 허용 범위를 확인합니다. 일반적으로 0.5-1%가 적당합니다.",
            },
            {
              title: "첫 거래 시 토큰 승인(Approve) 후 스왑 실행",
              description: "처음 거래하는 토큰의 경우 먼저 'Approve' 트랜잭션을 실행한 후 'Swap' 버튼을 클릭합니다.",
            },
          ],
          warning: "⚠️ 가스비가 높을 때는 거래를 미루는 것이 좋습니다. 항상 슬리피지 설정을 확인하세요.",
          links: [
            { title: "Uniswap 공식 사이트", url: "https://app.uniswap.org/" },
            { title: "Uniswap 사용법 가이드", url: "https://docs.uniswap.org/" },
          ],
        },
      },
      {
        id: "5-2",
        question: "DEX (Decentralized Exchange) 사용법",
        answer:
          "DEX는 중앙 기관 없이 사용자들이 직접 암호화폐를 거래할 수 있는 플랫폼입니다. Uniswap, SushiSwap 등이 대표적이며, 개인 지갑을 연결하여 거래할 수 있습니다.",
        links: [
          { title: "Uniswap", url: "https://app.uniswap.org/" },
          { title: "PancakeSwap", url: "https://pancakeswap.finance/" },
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
          { title: "Uniswap 유동성 가이드", url: "https://docs.uniswap.org/concepts/protocol/concentrated-liquidity" },
          { title: "비영구적 손실 설명", url: "https://academy.binance.com/ko/articles/impermanent-loss-explained" },
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
          { title: "NFT 소개", url: "https://ethereum.org/ko/nft/" },
          { title: "OpenSea", url: "https://opensea.io/" },
        ],
        tips: "NFT 투자는 높은 위험을 수반하므로 신중하게 접근해야 합니다.",
        practice: {
          title: "OpenSea에서 NFT 구매하기",
          description: "세계 최대 NFT 마켓플레이스인 OpenSea에서 안전하게 NFT를 구매하는 방법을 배워보세요.",
          steps: [
            {
              title: "OpenSea.io 접속 및 지갑 연결",
              description:
                "OpenSea 공식 웹사이트에 접속하고 우측 상단의 지갑 아이콘을 클릭하여 메타마스크를 연결합니다.",
            },
            {
              title: "관심 있는 컬렉션 검색",
              description: "검색창에 원하는 NFT 컬렉션 이름을 입력하거나 카테고리별로 탐색합니다.",
            },
            {
              title: "컬렉션 인증 마크 확인",
              description: "컬렉션 이름 옆의 파란색 체크 마크를 확인하여 공식 컬렉션인지 검증합니다.",
            },
            {
              title: "개별 NFT의 거래 내역 확인",
              description:
                "NFT 상세 페이지에서 Price History와 Activity를 확인하여 가격 변동과 거래 내역을 파악합니다.",
            },
            {
              title: "Buy Now 또는 Make Offer 선택",
              description: "즉시 구매하려면 'Buy Now', 가격 제안을 하려면 'Make Offer'를 선택합니다.",
            },
            {
              title: "가스비 포함 총 비용 확인 후 구매",
              description: "NFT 가격과 가스비를 포함한 총 비용을 확인하고 메타마스크에서 트랜잭션을 승인합니다.",
            },
          ],
          warning: "⚠️ 가짜 컬렉션에 주의하세요. 항상 공식 링크와 인증 마크를 확인하세요.",
          links: [
            { title: "OpenSea 공식 사이트", url: "https://opensea.io/" },
            { title: "OpenSea 안전 가이드", url: "https://support.opensea.io/hc/en-us/articles/4404027708051" },
          ],
        },
      },
      {
        id: "6-2",
        question: "NFT 구매 및 판매 방법",
        answer:
          "OpenSea, Rarible 등의 NFT 마켓플레이스에서 NFT를 구매하거나 판매할 수 있습니다. 메타마스크와 같은 암호화폐 지갑을 연결하여 거래를 진행합니다.",
        links: [
          { title: "OpenSea", url: "https://opensea.io/" },
          { title: "Rarible", url: "https://rarible.com/" },
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
          { title: "DAO 소개", url: "https://ethereum.org/ko/dao/" },
          { title: "Snapshot", url: "https://snapshot.org/" },
        ],
        tips: "DAO 참여 전, 조직의 목표와 운영 방식에 대해 충분히 이해해야 합니다.",
        practice: {
          title: "Snapshot에서 DAO 투표 참여하기",
          description: "Snapshot 플랫폼을 통해 실제 DAO 거버넌스 투표에 참여하는 방법을 경험해보세요.",
          steps: [
            {
              title: "snapshot.org 접속",
              description: "브라우저에서 https://snapshot.org 에 접속합니다. 가장 인기 있는 DAO 투표 플랫폼입니다.",
            },
            {
              title: "참여하고 싶은 DAO 검색",
              description: "검색창에 관심 있는 DAO 이름을 입력하거나 인기 있는 DAO 목록에서 선택합니다.",
            },
            {
              title: "지갑 연결 및 투표권 확인",
              description:
                "우측 상단의 'Connect wallet' 버튼을 클릭하여 지갑을 연결하고 투표권(토큰 보유량)을 확인합니다.",
            },
            {
              title: "활성 제안(Active Proposals) 확인",
              description: "현재 진행 중인 투표 제안들을 확인하고 관심 있는 제안을 클릭합니다.",
            },
            {
              title: "제안 내용 숙독 후 투표",
              description: "제안의 세부 내용, 찬반 논리, 커뮤니티 토론을 충분히 검토한 후 투표합니다.",
            },
            {
              title: "투표 결과 및 실행 상황 추적",
              description: "투표 종료 후 결과를 확인하고, 가결된 제안의 실행 상황을 지속적으로 모니터링합니다.",
            },
          ],
          warning: "⚠️ 투표 전 제안의 세부 내용과 영향을 충분히 이해하세요.",
          links: [
            { title: "Snapshot 공식 사이트", url: "https://snapshot.org/" },
            { title: "DAO 거버넌스 가이드", url: "https://ethereum.org/en/dao/" },
          ],
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
          description: "Layer 2 솔루션인 Arbitrum을 사용하여 이더리움 메인넷에서 자산을 브릿지하는 방법을 배워보세요.",
          steps: [
            {
              title: "bridge.arbitrum.io 접속",
              description: "Arbitrum 공식 브릿지 웹사이트에 접속합니다. 반드시 공식 URL인지 확인하세요.",
            },
            {
              title: "메타마스크 연결",
              description:
                "'Connect Wallet' 버튼을 클릭하여 메타마스크를 연결합니다. 이더리움 메인넷에 연결되어 있는지 확인하세요.",
            },
            {
              title: "브릿지할 ETH/토큰 금액 입력",
              description:
                "Arbitrum으로 전송할 ETH 또는 토큰의 양을 입력합니다. 가스비를 고려하여 적절한 양을 설정하세요.",
            },
            {
              title: "예상 도착 시간 확인 (약 10분)",
              description: "브릿지 완료까지 걸리는 시간을 확인합니다. 일반적으로 10-15분 정도 소요됩니다.",
            },
            {
              title: "트랜잭션 승인 및 전송",
              description: "'Deposit' 버튼을 클릭하고 메타마스크에서 트랜잭션을 승인합니다.",
            },
            {
              title: "Arbitrum 네트워크로 전환하여 잔액 확인",
              description: "메타마스크에서 Arbitrum 네트워크로 전환하고 브릿지된 자산이 도착했는지 확인합니다.",
            },
          ],
          warning: "⚠️ 브릿지 시 소량으로 먼저 테스트하세요. 공식 브릿지만 사용하세요.",
          links: [
            { title: "Arbitrum 공식 브릿지", url: "https://bridge.arbitrum.io/" },
            { title: "Arbitrum 사용법 가이드", url: "https://docs.arbitrum.io/" },
          ],
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
          { title: "Solidity 문서", url: "https://docs.soliditylang.org/ko/latest/" },
        ],
        tips: "Remix IDE는 간단한 컨트랙트 개발 및 테스트에 적합하며, Truffle과 Hardhat은 복잡한 프로젝트 관리에 유용합니다.",
        practice: {
          title: "Remix IDE에서 첫 스마트 컨트랙트 배포하기",
          description:
            "웹 브라우저에서 Remix IDE를 사용하여 간단한 스마트 컨트랙트를 작성하고 테스트넷에 배포해보세요.",
          steps: [
            {
              title: "remix.ethereum.org 접속",
              description: "브라우저에서 Remix IDE 공식 웹사이트에 접속합니다. 별도 설치 없이 바로 사용할 수 있습니다.",
            },
            {
              title: "새 파일 생성 (HelloWorld.sol)",
              description:
                "File Explorer에서 'contracts' 폴더를 우클릭하고 'New File'을 선택하여 'HelloWorld.sol' 파일을 생성합니다.",
            },
            {
              title: "간단한 컨트랙트 코드 작성",
              description: "기본적인 Solidity 컨트랙트 코드를 작성합니다. 예: 문자열을 저장하고 반환하는 함수",
            },
            {
              title: "Solidity 컴파일러에서 컴파일",
              description:
                "좌측 메뉴에서 'Solidity Compiler' 탭을 클릭하고 'Compile HelloWorld.sol' 버튼을 눌러 컴파일합니다.",
            },
            {
              title: "Deploy & Run 탭에서 환경 선택",
              description:
                "'Deploy & Run Transactions' 탭에서 Environment를 'Injected Provider - MetaMask'로 설정하고 테스트넷을 선택합니다.",
            },
            {
              title: "테스트넷에 배포 및 함수 테스트",
              description: "'Deploy' 버튼을 클릭하여 컨트랙트를 배포하고, 배포된 컨트랙트의 함수들을 테스트해봅니다.",
            },
          ],
          warning: "⚠️ 메인넷 배포 전 반드시 테스트넷에서 충분히 테스트하세요.",
          links: [
            { title: "Remix IDE", url: "https://remix.ethereum.org/" },
            { title: "Solidity 문서", url: "https://docs.soliditylang.org/" },
          ],
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
          { title: "Ethers.js 문서", url: "https://docs.ethers.org/" },
          { title: "Web3.js 문서", url: "https://web3js.readthedocs.io/" },
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
    ],
  },
  {
    category: "12. 🌍 Web3 생태계 & 커뮤니티 (Web3 Ecosystems & Communities)",
    items: [
      {
        id: "12-1",
        question: "주요 레이어1 생태계 비교",
        answer:
          "이더리움은 가장 큰 생태계와 개발자 커뮤니티를 가졌지만 확장성 문제가 있습니다. 솔라나는 높은 처리 속도를 자랑하지만 때때로 네트워크 안정성 문제가 발생합니다. 코스모스와 폴카닷은 상호운용 가능한 블록체인 네트워크 구축을 목표로 합니다. 각 생태계는 기술적 특징, 주요 DApp, 커뮤니티 분위기 등이 다릅니다.",
        links: [
          { title: "이더리움", url: "https://ethereum.org" },
          { title: "솔라나", url: "https://solana.com" },
          { title: "코스모스", url: "https://cosmos.network" },
        ],
        tips: "각 생태계의 특성을 이해하고 목적에 맞는 체인을 선택하세요.",
      },
      {
        id: "12-2",
        question: "Web3 커뮤니티 참여 방법",
        answer:
          "트위터, 디스코드, 텔레그램, 레딧 등에서 관심 있는 분야의 프로젝트나 인플루언서를 팔로우하고 관련 커뮤니티 채널에 참여할 수 있습니다. 각 커뮤니티는 고유한 문화와 소통 방식을 가지며, 정보 공유, 토론, 이벤트 참여 등을 통해 활동할 수 있습니다.",
        links: [
          { title: "Web3 커뮤니티 가이드", url: "https://ethereum.org/en/community/" },
          { title: "Discord 서버 목록", url: "https://ethereum.org/en/community/online/" },
        ],
        tips: "커뮤니티 규칙을 잘 읽고 존중하며, 건설적인 기여를 하려고 노력하세요.",
      },
    ],
  },
  {
    category: "13. 💼 Web3 커리어 & 스킬 (Web3 Careers & Skills)",
    items: [
      {
        id: "13-1",
        question: "Web3 분야의 다양한 직업군",
        answer:
          "Web3 분야는 기술 직군(개발, 연구, 보안) 외에도 제품 기획, 디자인, 데이터 분석, 콘텐츠 제작, 커뮤니티 관리, 마케팅, 사업 개발 등 다양한 비기술 직군의 역할이 중요하며 수요가 증가하고 있습니다.",
        links: [
          { title: "Web3 Career", url: "https://web3.career" },
          { title: "CryptoJobs", url: "https://crypto.jobs" },
        ],
        tips: "Web3 지식과 기존 전문 분야를 결합하면 경쟁력을 높일 수 있습니다.",
      },
      {
        id: "13-2",
        question: "Web3 학습 자료",
        answer:
          "ConsenSys Academy, Encode Club, CryptoZombies, Udemy, Coursera 등에서 Web3 개발 및 관련 지식 온라인 코스를 찾을 수 있습니다. 다양한 부트캠프 프로그램도 있으며, 특정 기술 스택에 대한 자격증보다는 실제 프로젝트 경험이나 포트폴리오가 더 중요하게 여겨지는 경우가 많습니다.",
        links: [
          { title: "ConsenSys Academy", url: "https://consensys.net/academy/" },
          { title: "CryptoZombies", url: "https://cryptozombies.io" },
        ],
        tips: "이론 학습과 함께 실제 프로젝트를 만들어보는 것이 중요합니다.",
      },
    ],
  },
  {
    category: "14. 📜 규제, 윤리 & 사회 (Regulation, Ethics & Society)",
    items: [
      {
        id: "14-1",
        question: "주요 국가별 Web3 규제 동향",
        answer:
          "미국은 SEC와 CFTC 간의 관할권 문제, 증권성 판단 등으로 규제 불확실성이 존재합니다. 유럽연합은 MiCA(Markets in Crypto-Assets) 법안을 통해 포괄적인 규제 프레임워크를 마련하고 있습니다. 한국은 특정금융정보법을 중심으로 자금세탁방지에 초점을 맞추고 있으며, 투자자 보호 및 산업 육성을 위한 법제화 논의가 진행 중입니다.",
        links: [
          {
            title: "MiCA 규제",
            url: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
          },
          { title: "한국 규제 현황", url: "https://www.fsc.go.kr" },
        ],
        tips: "규제는 빠르게 변화하므로 최신 정보를 지속적으로 확인하세요.",
      },
      {
        id: "14-2",
        question: "Web3 기술의 윤리적 고려사항",
        answer:
          "블록체인의 투명성은 프라이버시 침해로 이어질 수 있고, 탈중앙화는 불법 활동에 악용될 소지도 있습니다. AI와 결합된 알고리즘은 편향성을 가질 수 있으며, PoW 방식의 에너지 소비는 환경 문제를 야기합니다. 이러한 윤리적 문제에 대한 고민과 기술적/사회적 해결 노력이 필요합니다.",
        links: [
          { title: "블록체인 윤리", url: "https://ethereum.org/en/energy-consumption/" },
          { title: "지속가능성", url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" },
        ],
        tips: "기술 발전과 함께 윤리적 책임도 고려해야 합니다.",
      },
    ],
  },
  {
    category: "15. 💡 Web3의 미래 & 신흥 트렌드 (Future of Web3 & Emerging Trends)",
    items: [
      {
        id: "15-1",
        question: "AI와 Web3의 융합",
        answer:
          "AI 모델 학습 및 운영을 탈중앙화하거나(DeAI), AI 에이전트가 블록체인과 상호작용하며 자율적으로 작업을 수행하고, DAO 운영에 AI를 활용하며, 사용자가 자신의 데이터를 AI 학습에 제공하고 통제하며 보상받는(데이터 주권) 등 다양한 융합 가능성이 탐색되고 있습니다.",
        links: [
          { title: "AI와 블록체인", url: "https://ethereum.org/en/developers/docs/" },
          { title: "탈중앙화 AI", url: "https://blog.oceanprotocol.com" },
        ],
        tips: "AI와 Web3의 융합은 아직 초기 단계이지만 큰 잠재력을 가지고 있습니다.",
      },
      {
        id: "15-2",
        question: "Web3 대중 채택을 위한 과제",
        answer:
          "복잡한 사용자 경험(UX)을 개선하고, 더 많은 사용자를 수용할 수 있는 확장성을 확보하며, 명확하고 합리적인 규제 환경을 조성하고, Web3 기술에 대한 대중의 이해도를 높이는 교육이 확대되어야 대중 채택이 이루어질 수 있습니다. 점진적으로 개선될 것으로 전망됩니다.",
        links: [
          { title: "Web3 UX", url: "https://ethereum.org/en/developers/docs/intro-to-ether/" },
          { title: "확장성 솔루션", url: "https://ethereum.org/en/developers/docs/scaling/" },
        ],
        tips: "기술적 완성도와 함께 사용자 친화적인 인터페이스가 중요합니다.",
      },
      {
        id: "15-3",
        question: "메타버스와 Web3 기술의 결합",
        answer:
          "Web3 기술(NFT, 암호화폐)은 메타버스 내 디지털 자산(아바타, 아이템, 토지)의 진정한 소유권을 사용자에게 부여하고, 서로 다른 메타버스 간 자산 이동 및 상호작용(상호운용성)을 가능하게 하며, 특정 기업이 통제하지 않는 개방형 메타버스 구축의 기반이 될 수 있습니다.",
        links: [
          { title: "메타버스와 NFT", url: "https://ethereum.org/en/nft/" },
          { title: "디지털 소유권", url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-721/" },
        ],
        tips: "메타버스의 성공은 기술적 구현뿐만 아니라 사용자 경험과 콘텐츠에 달려 있습니다.",
      },
    ],
  },
  {
    category: "16. 🌐 대체 블록체인 생태계 (Alternative Blockchain Ecosystems)",
    items: [
      {
        id: "16-1",
        question: "Avalanche (AVAX) 생태계 소개",
        answer:
          "Avalanche는 높은 처리량과 낮은 지연시간을 제공하는 블록체인 플랫폼으로, 서브넷(Subnet) 기능을 통해 맞춤형 블록체인을 구축할 수 있습니다. 이더리움과 호환되면서도 더 빠른 트랜잭션 처리가 가능하며, DeFi, NFT, 게임 등 다양한 분야에서 활용되고 있습니다.",
        links: [
          { title: "Avalanche 공식 사이트", url: "https://www.avax.network/" },
          { title: "Avalanche 개발자 문서", url: "https://docs.avax.network/" },
        ],
        tips: "Avalanche의 서브넷 기능은 특정 용도에 최적화된 블록체인을 만들 수 있게 해줍니다.",
      },
      {
        id: "16-2",
        question: "Solana (SOL) 생태계 소개",
        answer:
          "Solana는 Proof of History(PoH) 합의 메커니즘을 사용하여 초당 수만 건의 트랜잭션을 처리할 수 있는 고성능 블록체인입니다. 낮은 수수료와 빠른 처리 속도로 DeFi, NFT, Web3 애플리케이션 개발에 인기가 높으며, Rust 프로그래밍 언어를 사용합니다.",
        links: [
          { title: "Solana 공식 사이트", url: "https://solana.com/" },
          { title: "Solana 개발자 문서", url: "https://docs.solana.com/" },
        ],
        tips: "Solana는 높은 성능을 제공하지만, 네트워크 안정성에 대한 우려가 있으므로 주의깊게 모니터링해야 합니다.",
      },
      {
        id: "16-3",
        question: "Aptos 생태계 소개",
        answer:
          "Aptos는 Meta(구 Facebook)의 Diem 프로젝트에서 파생된 블록체인으로, Move 프로그래밍 언어를 사용합니다. 병렬 실행 엔진과 모듈형 아키텍처를 통해 높은 확장성과 안전성을 제공하며, 사용자 친화적인 Web3 경험을 목표로 합니다.",
        links: [
          { title: "Aptos 공식 사이트", url: "https://aptoslabs.com/" },
          { title: "Aptos 개발자 문서", url: "https://aptos.dev/" },
        ],
        tips: "Aptos의 Move 언어는 리소스 중심의 프로그래밍 모델로 보안성을 강화합니다.",
      },
      {
        id: "16-4",
        question: "Sui 생태계 소개",
        answer:
          "Sui는 Aptos와 마찬가지로 Move 언어를 사용하는 블록체인이지만, 객체 중심의 데이터 모델과 독특한 합의 메커니즘을 채택했습니다. 단순한 트랜잭션에 대해서는 합의 없이 즉시 처리가 가능하여 매우 빠른 속도를 자랑합니다.",
        links: [
          { title: "Sui 공식 사이트", url: "https://sui.io/" },
          { title: "Sui 개발자 문서", url: "https://docs.sui.io/" },
        ],
        tips: "Sui의 객체 중심 모델은 기존 블록체인과 다른 새로운 패러다임을 제시합니다.",
      },
      {
        id: "16-5",
        question: "NEAR Protocol (NEAR) 생태계 소개",
        answer:
          "NEAR는 샤딩 기술을 통해 확장성을 해결하고, 개발자와 사용자 모두에게 친화적인 경험을 제공하는 블록체인입니다. 인간이 읽을 수 있는 계정 이름, 점진적 보안 모델, 그리고 Rust와 AssemblyScript를 지원하여 Web2 개발자들의 진입 장벽을 낮췄습니다.",
        links: [
          { title: "NEAR 공식 사이트", url: "https://near.org/" },
          { title: "NEAR 개발자 문서", url: "https://docs.near.org/" },
        ],
        tips: "NEAR의 샤딩 기술인 'Nightshade'는 네트워크가 성장함에 따라 자동으로 확장됩니다.",
      },
    ],
  },
  {
    category: "17. 🔗 크로스체인 & 상호운용성 (Cross-chain & Interoperability)",
    items: [
      {
        id: "17-1",
        question: "IBC (Inter-Blockchain Communication) 프로토콜이란?",
        answer:
          "IBC는 서로 다른 블록체인 간에 안전하고 신뢰할 수 있는 통신을 가능하게 하는 프로토콜입니다. 코스모스 생태계에서 개발되었으며, 블록체인들이 토큰, 데이터, 스마트 컨트랙트 호출 등을 주고받을 수 있게 합니다. 라이트 클라이언트와 릴레이어를 통해 작동하며, 중앙화된 브릿지 없이도 크로스체인 상호작용이 가능합니다.",
        links: [
          { title: "IBC 공식 문서", url: "https://ibc.cosmos.network/" },
          { title: "코스모스 IBC 가이드", url: "https://tutorials.cosmos.network/academy/3-ibc/" },
        ],
        tips: "IBC는 현재 가장 성숙한 크로스체인 통신 프로토콜 중 하나로, 50개 이상의 블록체인이 연결되어 있습니다.",
        quiz: {
          question: "IBC 프로토콜의 핵심 구성 요소가 아닌 것은?",
          options: ["라이트 클라이언트", "릴레이어", "중앙화된 검증자", "연결(Connection)"],
          correctAnswer: 2,
          explanation:
            "IBC는 탈중앙화된 프로토콜로, 중앙화된 검증자가 필요하지 않습니다. 대신 라이트 클라이언트를 통해 각 체인의 상태를 검증하고, 릴레이어가 메시지를 전달합니다.",
        },
      },
      {
        id: "17-2",
        question: "Polkadot의 파라체인(Parachain) 시스템",
        answer:
          "파라체인은 Polkadot 릴레이 체인에 연결된 독립적인 블록체인들입니다. 각 파라체인은 고유한 기능과 토큰을 가질 수 있으며, 릴레이 체인을 통해 다른 파라체인들과 안전하게 통신할 수 있습니다. 파라체인 슬롯은 경매를 통해 할당되며, DOT 토큰을 스테이킹하여 슬롯을 확보합니다.",
        links: [
          { title: "Polkadot 파라체인 가이드", url: "https://wiki.polkadot.network/docs/learn-parachains" },
          { title: "파라체인 경매", url: "https://parachains.info/" },
        ],
        tips: "파라체인은 이더리움의 샤딩과 유사하지만, 각 파라체인이 독립적인 거버넌스를 가질 수 있다는 점이 다릅니다.",
        quiz: {
          question: "Polkadot 파라체인의 특징으로 옳지 않은 것은?",
          options: [
            "릴레이 체인을 통해 다른 파라체인과 통신",
            "독립적인 합의 메커니즘 운영",
            "DOT 토큰 스테이킹으로 슬롯 확보",
            "릴레이 체인의 보안을 공유",
          ],
          correctAnswer: 1,
          explanation:
            "파라체인은 독립적인 합의 메커니즘을 운영하지 않습니다. 대신 Polkadot 릴레이 체인의 검증자들이 모든 파라체인의 보안을 담당하는 공유 보안 모델을 사용합니다.",
        },
      },
      {
        id: "17-3",
        question: "LayerZero와 크로스체인 메시징",
        answer:
          "LayerZero는 서로 다른 블록체인 간에 메시지와 자산을 전송할 수 있게 하는 상호운용성 프로토콜입니다. 오라클과 릴레이어를 통해 크로스체인 통신을 구현하며, 개발자들이 멀티체인 애플리케이션을 쉽게 구축할 수 있도록 합니다. Stargate Finance 등의 프로젝트가 LayerZero를 활용합니다.",
        links: [
          { title: "LayerZero 공식 사이트", url: "https://layerzero.network/" },
          { title: "LayerZero 개발자 문서", url: "https://layerzero.gitbook.io/" },
        ],
        tips: "LayerZero는 'Omnichain' 개념을 제시하며, 하나의 애플리케이션이 여러 체인에서 동시에 작동할 수 있게 합니다.",
      },
    ],
  },
  {
    category: "18. 🏗️ 고급 스마트 컨트랙트 패턴 (Advanced Smart Contract Patterns)",
    items: [
      {
        id: "18-1",
        question: "프록시 패턴과 업그레이드 가능한 컨트랙트",
        answer:
          "프록시 패턴은 스마트 컨트랙트의 로직을 업데이트할 수 있게 하는 설계 패턴입니다. 프록시 컨트랙트는 사용자 인터페이스 역할을 하고, 실제 로직은 구현 컨트랙트에 위임합니다. Transparent Proxy, UUPS(Universal Upgradeable Proxy Standard), Beacon Proxy 등의 방식이 있으며, OpenZeppelin에서 표준화된 구현을 제공합니다.",
        links: [
          { title: "OpenZeppelin 업그레이드 가이드", url: "https://docs.openzeppelin.com/upgrades-plugins/1.x/" },
          { title: "프록시 패턴 설명", url: "https://blog.openzeppelin.com/proxy-patterns/" },
        ],
        tips: "업그레이드 가능한 컨트랙트는 편리하지만, 중앙화 위험과 복잡성을 증가시킬 수 있으므로 신중하게 사용해야 합니다.",
        practice: {
          title: "OpenZeppelin을 사용한 업그레이드 가능한 컨트랙트 배포",
          description:
            "Hardhat과 OpenZeppelin Upgrades 플러그인을 사용하여 업그레이드 가능한 스마트 컨트랙트를 배포하고 업그레이드하는 방법을 배워보세요.",
          steps: [
            {
              title: "Hardhat 프로젝트 초기화",
              description: "새 디렉토리를 만들고 `npx hardhat init`으로 Hardhat 프로젝트를 초기화합니다.",
            },
            {
              title: "OpenZeppelin 패키지 설치",
              description:
                "`npm install @openzeppelin/contracts @openzeppelin/hardhat-upgrades`로 필요한 패키지를 설치합니다.",
            },
            {
              title: "업그레이드 가능한 컨트랙트 작성",
              description:
                "Initializable을 상속받고 constructor 대신 initialize 함수를 사용하는 컨트랙트를 작성합니다.",
            },
            {
              title: "배포 스크립트 작성",
              description: "`deployProxy` 함수를 사용하여 프록시와 함께 컨트랙트를 배포하는 스크립트를 작성합니다.",
            },
            {
              title: "컨트랙트 V2 작성 및 업그레이드",
              description: "새로운 기능을 추가한 V2 컨트랙트를 작성하고 `upgradeProxy` 함수로 업그레이드합니다.",
            },
            {
              title: "업그레이드 검증",
              description: "업그레이드 후 기존 상태가 유지되고 새 기능이 정상 작동하는지 확인합니다.",
            },
          ],
          warning: "⚠️ 업그레이드 시 스토리지 레이아웃을 변경하면 데이터가 손상될 수 있습니다.",
          links: [
            { title: "OpenZeppelin Upgrades", url: "https://docs.openzeppelin.com/upgrades-plugins/" },
            {
              title: "Hardhat 업그레이드 가이드",
              url: "https://hardhat.org/plugins/openzeppelin-hardhat-upgrades.html",
            },
          ],
        },
      },
      {
        id: "18-2",
        question: "Diamond 패턴 (EIP-2535)",
        answer:
          "Diamond 패턴은 하나의 컨트랙트가 여러 개의 구현 컨트랙트(facet)를 가질 수 있게 하는 고급 패턴입니다. 각 facet은 특정 기능을 담당하며, 필요에 따라 facet을 추가, 제거, 교체할 수 있습니다. 이를 통해 컨트랙트 크기 제한을 우회하고 모듈화된 업그레이드가 가능합니다.",
        links: [
          { title: "EIP-2535 Diamond Standard", url: "https://eips.ethereum.org/EIPS/eip-2535" },
          { title: "Diamond 패턴 구현", url: "https://github.com/mudgen/diamond" },
        ],
        tips: "Diamond 패턴은 복잡하지만 매우 유연한 업그레이드 메커니즘을 제공합니다. 대규모 DeFi 프로토콜에서 주로 사용됩니다.",
      },
      {
        id: "18-3",
        question: "메타 트랜잭션과 가스리스 경험",
        answer:
          "메타 트랜잭션은 사용자가 직접 가스비를 지불하지 않고도 트랜잭션을 실행할 수 있게 하는 기술입니다. 사용자가 서명한 메시지를 릴레이어가 대신 전송하고 가스비를 지불합니다. EIP-712, EIP-2771 등의 표준이 있으며, OpenZeppelin의 GSN(Gas Station Network)이나 Biconomy 같은 서비스를 통해 구현할 수 있습니다.",
        links: [
          { title: "OpenZeppelin GSN", url: "https://docs.openzeppelin.com/contracts/4.x/gsn" },
          { title: "Biconomy", url: "https://docs.biconomy.io/" },
        ],
        tips: "메타 트랜잭션은 사용자 경험을 크게 개선하지만, 릴레이어 의존성과 보안 고려사항이 있습니다.",
      },
    ],
  },
  {
    category: "19. 🔬 영지식 증명 & 프라이버시 (Zero-Knowledge Proofs & Privacy)",
    items: [
      {
        id: "19-1",
        question: "zk-SNARKs vs zk-STARKs 비교",
        answer:
          "zk-SNARKs(Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge)는 작은 증명 크기와 빠른 검증을 제공하지만 신뢰할 수 있는 설정(trusted setup)이 필요합니다. zk-STARKs(Zero-Knowledge Scalable Transparent Arguments of Knowledge)는 신뢰할 수 있는 설정이 필요 없고 양자 저항성을 가지지만 증명 크기가 더 큽니다.",
        links: [
          { title: "zk-SNARKs 설명", url: "https://z.cash/technology/zksnarks/" },
          { title: "StarkWare zk-STARKs", url: "https://starkware.co/stark/" },
        ],
        tips: "zk-SNARKs는 현재 더 널리 사용되지만, zk-STARKs가 장기적으로 더 안전한 선택일 수 있습니다.",
        quiz: {
          question: "zk-STARKs의 장점이 아닌 것은?",
          options: [
            "신뢰할 수 있는 설정이 필요 없음",
            "양자 컴퓨터에 저항성",
            "zk-SNARKs보다 작은 증명 크기",
            "투명성과 검증 가능성",
          ],
          correctAnswer: 2,
          explanation:
            "zk-STARKs는 zk-SNARKs보다 증명 크기가 더 큽니다. 하지만 신뢰할 수 있는 설정이 필요 없고, 양자 저항성을 가지며, 더 투명한 특성을 가집니다.",
        },
      },
      {
        id: "19-2",
        question: "Circom과 zk 회로 개발",
        answer:
          "Circom은 영지식 증명을 위한 회로를 작성하는 도메인 특화 언어입니다. 개발자들이 복잡한 수학적 제약 조건을 코드로 표현할 수 있게 하며, snarkjs와 함께 사용하여 zk-SNARK 증명을 생성하고 검증할 수 있습니다. Tornado Cash, Semaphore 등의 프로젝트에서 사용됩니다.",
        links: [
          { title: "Circom 문서", url: "https://docs.circom.io/" },
          { title: "zk 회로 튜토리얼", url: "https://github.com/iden3/circom" },
        ],
        tips: "Circom 회로 개발은 전통적인 프로그래밍과 다른 사고방식이 필요합니다. 제약 조건과 신호(signal) 개념을 이해하는 것이 중요합니다.",
      },
      {
        id: "19-3",
        question: "프라이버시 코인과 믹싱 프로토콜",
        answer:
          "프라이버시 코인은 거래 내역을 숨기는 암호화폐입니다. Monero는 링 서명과 스텔스 주소를 사용하고, Zcash는 zk-SNARKs를 활용합니다. 믹싱 프로토콜인 Tornado Cash는 이더리움에서 영지식 증명을 사용하여 거래 추적을 어렵게 만듭니다. 하지만 규제 당국의 관심과 법적 이슈가 있습니다.",
        links: [
          { title: "Monero 기술", url: "https://www.getmonero.org/resources/moneropedia/" },
          { title: "Zcash 프라이버시", url: "https://z.cash/technology/" },
        ],
        tips: "프라이버시 기술은 합법적인 용도가 많지만, 각국의 규제 환경을 고려해야 합니다.",
      },
    ],
  },
  {
    category: "20. 🌐 Web3 인프라 & 미들웨어 (Web3 Infrastructure & Middleware)",
    items: [
      {
        id: "20-1",
        question: "The Graph와 블록체인 인덱싱",
        answer:
          "The Graph는 블록체인 데이터를 쿼리하고 인덱싱하는 탈중앙화된 프로토콜입니다. 개발자들이 GraphQL을 사용하여 블록체인 데이터를 쉽게 조회할 수 있게 하며, 서브그래프(subgraph)를 통해 특정 스마트 컨트랙트의 데이터를 구조화합니다. 인덱서, 큐레이터, 델리게이터가 네트워크를 운영하며 GRT 토큰으로 인센티브를 받습니다.",
        links: [
          { title: "The Graph 공식 사이트", url: "https://thegraph.com/" },
          { title: "서브그래프 개발 가이드", url: "https://thegraph.com/docs/en/" },
        ],
        tips: "The Graph는 DApp 개발에서 블록체인 데이터 조회를 크게 간소화해주는 필수 인프라입니다.",
        practice: {
          title: "The Graph로 서브그래프 만들기",
          description: "Uniswap V2의 거래 데이터를 인덱싱하는 서브그래프를 만들어보세요.",
          steps: [
            {
              title: "Graph CLI 설치",
              description: "`npm install -g @graphprotocol/graph-cli`로 Graph CLI를 설치합니다.",
            },
            {
              title: "서브그래프 초기화",
              description: "`graph init`을 사용하여 새 서브그래프 프로젝트를 생성합니다.",
            },
            {
              title: "스키마 정의 (schema.graphql)",
              description: "인덱싱할 엔티티들을 GraphQL 스키마로 정의합니다.",
            },
            {
              title: "매핑 함수 작성",
              description: "스마트 컨트랙트 이벤트를 엔티티로 변환하는 매핑 함수를 작성합니다.",
            },
            {
              title: "서브그래프 배포",
              description: "Graph Studio에 서브그래프를 배포하고 테스트합니다.",
            },
            {
              title: "GraphQL 쿼리 테스트",
              description: "배포된 서브그래프에 GraphQL 쿼리를 보내 데이터를 조회합니다.",
            },
          ],
          warning: "⚠️ 서브그래프 배포 시 GRT 토큰이 필요할 수 있습니다.",
          links: [
            { title: "Graph Studio", url: "https://thegraph.com/studio/" },
            { title: "서브그래프 예제", url: "https://github.com/graphprotocol/example-subgraph" },
          ],
        },
      },
      {
        id: "20-2",
        question: "IPFS와 분산 저장소",
        answer:
          "IPFS(InterPlanetary File System)는 분산된 파일 시스템으로, 콘텐츠 주소 지정을 통해 파일을 저장하고 공유합니다. 각 파일은 고유한 해시를 가지며, 네트워크의 여러 노드에 복제됩니다. NFT 메타데이터, DApp 프론트엔드, 문서 등을 저장하는 데 널리 사용되며, Filecoin과 결합하여 인센티브 기반 저장소를 제공합니다.",
        links: [
          { title: "IPFS 공식 사이트", url: "https://ipfs.io/" },
          { title: "IPFS 개발자 문서", url: "https://docs.ipfs.io/" },
        ],
        tips: "IPFS는 검열 저항성과 영구성을 제공하지만, 핀(pin) 서비스를 사용하지 않으면 파일이 사라질 수 있습니다.",
      },
      {
        id: "20-3",
        question: "Chainlink와 오라클 네트워크",
        answer:
          "Chainlink는 블록체인과 외부 데이터를 연결하는 탈중앙화된 오라클 네트워크입니다. 가격 피드, 날씨 데이터, 스포츠 결과 등 다양한 외부 정보를 스마트 컨트랙트에 제공합니다. VRF(Verifiable Random Function), Automation, Cross-Chain Interoperability Protocol(CCIP) 등의 추가 서비스도 제공합니다.",
        links: [
          { title: "Chainlink 공식 사이트", url: "https://chain.link/" },
          { title: "Chainlink 개발자 문서", url: "https://docs.chain.link/" },
        ],
        tips: "오라클 문제는 블록체인의 근본적인 한계 중 하나이며, Chainlink는 이를 해결하는 가장 널리 사용되는 솔루션입니다.",
      },
    ],
  },
  {
    category: "21. 🎯 고급 DeFi 전략 & 수익률 농업 (Advanced DeFi Strategies & Yield Farming)",
    items: [
      {
        id: "21-1",
        question: "Impermanent Loss 최적화 전략",
        answer:
          "비영구적 손실을 최소화하는 전략에는 상관관계가 높은 토큰 쌍 선택(예: ETH/stETH), 스테이블코인 쌍 사용, 수수료 수익이 IL을 상쇄할 수 있는 고거래량 풀 선택 등이 있습니다. Uniswap V3의 집중 유동성을 활용하거나, Bancor의 IL 보호 기능을 사용하는 방법도 있습니다.",
        links: [
          { title: "IL 계산기", url: "https://dailydefi.org/tools/impermanent-loss-calculator/" },
          { title: "Uniswap V3 전략", url: "https://uniswap.org/blog/uniswap-v3" },
        ],
        tips: "IL은 가격 변동성과 직접적으로 연관되므로, 변동성이 낮은 자산 쌍을 선택하는 것이 중요합니다.",
      },
      {
        id: "21-2",
        question: "플래시론(Flash Loan) 활용 전략",
        answer:
          "플래시론은 담보 없이 대량의 자금을 빌려 한 트랜잭션 내에서 상환하는 DeFi 기능입니다. 차익거래, 담보 교체, 청산, 자기 청산 등에 활용됩니다. Aave, dYdX, Balancer 등에서 제공하며, 실패 시 전체 트랜잭션이 롤백되어 대출자에게 위험이 없습니다.",
        links: [
          { title: "Aave 플래시론", url: "https://docs.aave.com/developers/guides/flash-loans" },
          { title: "플래시론 예제", url: "https://github.com/aave/code-examples-protocol" },
        ],
        tips: "플래시론은 고급 DeFi 전략이므로 스마트 컨트랙트 개발 지식이 필요합니다.",
      },
      {
        id: "21-3",
        question: "수익률 농업 최적화와 컴파운딩",
        answer:
          "수익률 농업 최적화에는 자동 컴파운딩, 가스비 최적화, 수익률 비교, 리스크 관리가 포함됩니다. Yearn Finance, Harvest Finance 같은 수익률 애그리게이터를 사용하거나, 직접 전략을 구현할 수 있습니다. APY vs APR 이해, 토큰 방출 스케줄 분석, 스마트 컨트랙트 리스크 평가가 중요합니다.",
        links: [
          { title: "Yearn Finance", url: "https://yearn.finance/" },
          { title: "DeFi Pulse", url: "https://defipulse.com/" },
        ],
        tips: "높은 APY는 종종 높은 리스크를 의미합니다. 항상 위험 대비 수익을 고려하세요.",
      },
    ],
  },
  {
    category: "22. 🛠️ Web3 빌딩 툴 & 서비스 (Web3 Building Tools & Services)",
    items: [
      {
        id: "22-1",
        question: "Privy: 인증 및 지갑 관리 솔루션",
        answer:
          "Privy는 Web3 개발자가 쉽게 인증 및 지갑 관리 기능을 구현할 수 있게 해주는 서비스입니다. 이메일, 소셜 로그인과 암호화폐 지갑 로그인을 통합하여 사용자 온보딩 과정을 단순화합니다. 사용자 식별 정보와 지갑 주소를 연결하고, 사용자 데이터를 안전하게 관리할 수 있으며, SDK를 통해 쉽게 구현할 수 있습니다.",
        links: [
          { title: "Privy 공식 사이트", url: "https://privy.io/" },
          { title: "Privy 개발자 문서", url: "https://docs.privy.io/" },
        ],
        tips: "Privy는 Web3 앱에 Web2와 같은 로그인 경험을 제공하여 진입 장벽을 낮추는 데 효과적입니다.",
        quiz: {
          question: "Privy의 주요 기능이 아닌 것은?",
          options: ["이메일과 지갑 인증 통합", "사용자 식별 정보 관리", "가스비 대납 서비스", "소셜 로그인 지원"],
          correctAnswer: 2,
          explanation:
            "Privy는 주로 인증 및 지갑 관리에 중점을 두고 있으며, 가스비 대납 서비스는 기본 기능이 아닙니다. 가스비 대납(Gas Sponsorship)은 주로 다른 서비스들(예: Alchemy, Gelato, Biconomy)에서 제공하는 기능입니다.",
        },
        practice: {
          title: "Privy를 사용하여 간단한 인증 시스템 구축하기",
          description: "Next.js 앱에서 Privy SDK를 사용하여 이메일과 지갑을 연동하는 로그인 시스템을 만들어보세요.",
          steps: [
            {
              title: "Privy 계정 생성 및 프로젝트 설정",
              description: "Privy 웹사이트에서 계정을 만들고 새 프로젝트를 설정하여 API 키를 얻습니다.",
            },
            {
              title: "Privy SDK 설치",
              description: "`npm install @privy-io/react-auth` 명령으로 Privy SDK를 설치합니다.",
            },
            {
              title: "PrivyProvider 설정",
              description: "앱의 루트 컴포넌트에서 `PrivyProvider`를 설정하고 API 키를 전달합니다.",
            },
            {
              title: "로그인 버튼 구현",
              description: "`usePrivy` 훅을 사용하여 로그인과 로그아웃 버튼 컴포넌트를 생성합니다.",
            },
            {
              title: "사용자 정보 접근하기",
              description: "로그인 성공 후 `user` 객체를 통해 사용자 이메일, 지갑 주소 등의 정보에 접근합니다.",
            },
            {
              title: "인증 상태에 따른 조건부 렌더링",
              description: "`authenticated` 상태를 기반으로 로그인/대시보드 화면을 조건부로 렌더링합니다.",
            },
          ],
          warning: "⚠️ 프로덕션 환경에서는 항상 서버 측 검증을 추가하여 인증 토큰의 유효성을 확인하세요.",
          links: [
            { title: "Privy React SDK 문서", url: "https://docs.privy.io/guide/client/react" },
            { title: "Privy로 온보딩 최적화하기", url: "https://privy.io/blog/web3-onboarding" },
          ],
        },
      },
      {
        id: "22-2",
        question: "Thirdweb: 올인원 Web3 개발 플랫폼",
        answer:
          "Thirdweb는 스마트 컨트랙트 배포, SDK, 인프라, 툴을 제공하는 포괄적인 Web3 개발 플랫폼입니다. 사전 구축된 컨트랙트 템플릿, 커스텀 컨트랙트 배포, 다중 체인 지원 등의 기능을 제공합니다. React, React Native, Unity 등 다양한 프레임워크를 위한 SDK가 있으며, NFT, 마켓플레이스, DAO 등 일반적인 Web3 기능을 쉽게 구현할 수 있습니다.",
        links: [
          { title: "Thirdweb 공식 사이트", url: "https://thirdweb.com/" },
          { title: "Thirdweb 문서", url: "https://portal.thirdweb.com/" },
        ],
        tips: "Thirdweb의 Contract Explorer를 통해 다양한 컨트랙트 템플릿을 탐색하고 필요에 맞는 컨트랙트를 빠르게 배포할 수 있습니다.",
        practice: {
          title: "Thirdweb으로 간단한 NFT 컬렉션 만들기",
          description: "Thirdweb을 사용하여 자신만의 NFT 컬렉션을 만들고 민팅 페이지를 구현해보세요.",
          steps: [
            {
              title: "Thirdweb 대시보드 접속",
              description: "thirdweb.com에 접속하여 지갑을 연결하고 대시보드에 접근합니다.",
            },
            {
              title: "새 프로젝트 생성",
              description: "Deploy 탭에서 'NFT Collection' 템플릿을 선택하고 이름, 심볼 등의 정보를 입력합니다.",
            },
            {
              title: "컬렉션 메타데이터 설정",
              description: "컬렉션 이미지, 설명, 로열티 등 메타데이터를 설정합니다.",
            },
            {
              title: "NFT 민팅하기",
              description: "대시보드에서 'Mint' 탭을 선택하고 이미지와 메타데이터를 업로드하여 NFT를 생성합니다.",
            },
            {
              title: "React 앱에 Thirdweb SDK 연동",
              description:
                "`npm install @thirdweb-dev/react @thirdweb-dev/sdk`를 설치하고, ThirdwebProvider를 설정합니다.",
            },
            {
              title: "민팅 페이지 구현",
              description: "useContract, useNFTCollection 훅을 사용하여 웹 앱에서 NFT 민팅 기능을 구현합니다.",
            },
          ],
          warning: "⚠️ 테스트넷에서 충분히 테스트한 후 메인넷에 배포하세요. 가스비가 발생합니다.",
          links: [
            { title: "Thirdweb NFT 문서", url: "https://portal.thirdweb.com/contracts/nft-collection" },
            { title: "Thirdweb React SDK", url: "https://portal.thirdweb.com/react" },
          ],
        },
      },
      {
        id: "22-3",
        question: "Alchemy: Web3 개발 인프라 및 API 플랫폼",
        answer:
          "Alchemy는 블록체인 개발을 위한 강력한 인프라와 API를 제공하는 플랫폼입니다. 노드 인프라, 개발자 툴, 모니터링 기능을 제공하여 dApp 개발 과정을 간소화합니다. Enhanced API, NFT API, Notify(알림), Monitor(모니터링), Transact(트랜잭션 관리) 등 풍부한 기능을 제공합니다. 또한 가스비 대납(Gas Sponsoring) 및 메타 트랜잭션 등 고급 기능도 지원합니다.",
        links: [
          { title: "Alchemy 공식 사이트", url: "https://www.alchemy.com/" },
          { title: "Alchemy 문서", url: "https://docs.alchemy.com/" },
        ],
        tips: "Alchemy의 무료 티어를 활용하면 사이드 프로젝트나 테스트 환경을 저렴하게 구축할 수 있습니다.",
        quiz: {
          question: "Alchemy가 제공하는 서비스가 아닌 것은?",
          options: ["블록체인 노드 인프라", "NFT API", "스마트 컨트랙트 자동 감사", "트랜잭션 모니터링"],
          correctAnswer: 2,
          explanation:
            "Alchemy는 블록체인 노드 인프라, NFT API, 트랜잭션 모니터링 등의 서비스를 제공하지만, 스마트 컨트랙트 자동 감사 서비스는 제공하지 않습니다. 스마트 컨트랙트 감사는 주로 CertiK, OpenZeppelin, SlowMist 같은 보안 회사에서 제공하는 서비스입니다.",
        },
      },
      {
        id: "22-4",
        question: "Reown: Web3 디지털 자산 관리 솔루션",
        answer:
          "Reown은 NFT 및 디지털 자산 관리에 특화된 Web3 솔루션입니다. 예술가와 크리에이터가 자신의 디지털 작품에 대한 소유권을 안전하게 관리하고, 로열티를 추적하며, 재판매 권리를 보호할 수 있습니다. 또한 팬과 구매자는 구매한 디지털 자산의 진위성을 검증하고, 안전하게 거래할 수 있는 플랫폼을 제공합니다. 사용자 친화적인 인터페이스를 통해 Web3 기술의 복잡성을 줄였습니다.",
        links: [
          { title: "Reown 공식 사이트", url: "https://www.reown.com/" },
          { title: "Reown 기능 개요", url: "https://blog.reown.com/features" },
        ],
        tips: "Reown은 특히 디지털 아트, 음악, 콘텐츠 크리에이터에게 적합한 솔루션입니다.",
      },
      {
        id: "22-5",
        question: "Moralis: Web3 API 및 백엔드 솔루션",
        answer:
          "Moralis는 개발자를 위한 종합적인 Web3 백엔드 인프라와 API 서비스를 제공합니다. 크로스체인 API, NFT API, 지갑 API 등을 통해 dApp 개발을 간소화합니다. 여러 블록체인에서의 데이터 동기화, 실시간 알림, 사용자 인증 등의 기능을 단일 플랫폼에서 제공하므로 개발 시간을 크게 단축할 수 있습니다. 또한 웹훅을 통한 이벤트 기반 아키텍처를 지원합니다.",
        links: [
          { title: "Moralis 공식 사이트", url: "https://moralis.io/" },
          { title: "Moralis 문서", url: "https://docs.moralis.io/" },
        ],
        tips: "Moralis의 웹훅 기능을 활용하면 특정 블록체인 이벤트 발생 시 자동으로 백엔드 로직을 실행할 수 있습니다.",
        quiz: {
          question: "Moralis API의 주요 특징은?",
          options: ["단일 체인만 지원", "블록체인 데이터 크롤링 불가", "크로스체인 지원", "스마트 컨트랙트 자동 생성"],
          correctAnswer: 2,
          explanation:
            "Moralis의 주요 강점 중 하나는 여러 블록체인을 동일한 API로 지원하는 크로스체인 기능입니다. 개발자는 동일한 코드로 이더리움, 폴리곤, 솔라나 등 여러 체인의 데이터에 접근할 수 있습니다.",
        },
      },
      {
        id: "22-6",
        question: "QuickNode: 고성능 블록체인 인프라",
        answer:
          "QuickNode는 고속 블록체인 노드 호스팅 서비스로, 개발자와 기업에게 안정적이고 확장 가능한 블록체인 접근 인프라를 제공합니다. 이더리움, 솔라나, 폴리곤 등 20개 이상의 블록체인을 지원하며, 특히 높은 처리량이 필요한 dApp에 적합합니다. 고급 분석, 자동 스케일링, 글로벌 엣지 네트워크 등의 기능을 통해 최적화된 성능을 보장합니다.",
        links: [
          { title: "QuickNode 공식 사이트", url: "https://www.quicknode.com/" },
          { title: "QuickNode 문서", url: "https://www.quicknode.com/docs/" },
        ],
        tips: "QuickNode의 엣지 네트워크를 활용하면 전 세계 사용자에게 낮은 지연 시간으로 서비스를 제공할 수 있습니다.",
        practice: {
          title: "QuickNode로 고성능 dApp 백엔드 구축하기",
          description: "QuickNode를 사용하여 안정적이고 확장 가능한 dApp 백엔드를 구축해보세요.",
          steps: [
            {
              title: "QuickNode 계정 생성",
              description: "QuickNode 웹사이트에서 계정을 생성하고 대시보드에 접속합니다.",
            },
            {
              title: "새 엔드포인트 생성",
              description: "원하는 블록체인(예: 이더리움, 솔라나)을 선택하고 새 엔드포인트를 생성합니다.",
            },
            {
              title: "플랜 선택 및 리전 설정",
              description: "요구사항에 맞는 플랜을 선택하고, 사용자와 가까운 리전을 설정합니다.",
            },
            {
              title: "HTTP API 엔드포인트 통합",
              description: "생성된 HTTP API 엔드포인트를 Web3.js, ethers.js 등의 라이브러리에 연결합니다.",
            },
            {
              title: "WebSocket 연결 설정(선택)",
              description: "실시간 이벤트를 위해 WebSocket 연결을 설정하고 이벤트 구독을 설정합니다.",
            },
            {
              title: "애드온 기능 활용",
              description: "트랜잭션 트래킹, NFT API 등 필요한 애드온 기능을 활성화합니다.",
            },
          ],
          warning: "⚠️ 프로덕션 환경에서는 API 엔드포인트 URL을 안전하게 보호하고, 환경 변수로 관리하세요.",
          links: [
            { title: "QuickNode 시작 가이드", url: "https://www.quicknode.com/guides/welcome/" },
            { title: "이더리움 API 문서", url: "https://www.quicknode.com/docs/ethereum" },
          ],
        },
      },
    ],
  },
]
