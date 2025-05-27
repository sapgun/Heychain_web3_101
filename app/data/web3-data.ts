export const web3Data = [
  {
    category: "1. 🪙 암호화폐 기초 (Crypto Basics)",
    items: [
      {
        id: "1-1",
        question: "암호화폐란 무엇인가요?",
        answer:
          "암호화폐는 암호화 기술을 사용하여 거래의 보안을 유지하고, 새로운 화폐 발행을 통제하는 디지털 또는 가상 화폐입니다. 중앙 은행이나 금융 기관의 통제를 받지 않고 분산된 네트워크에서 운영됩니다.",
        links: [
          { title: "비트코인 백서", url: "https://bitcoin.org/bitcoin.pdf" },
          { title: "이더리움 소개", url: "https://ethereum.org/ko/what-is-ethereum/" },
        ],
        tips: "암호화폐 투자는 높은 변동성을 가지므로 신중하게 접근해야 합니다.",
      },
      {
        id: "1-2",
        question: "블록체인이란 무엇인가요?",
        answer:
          "블록체인은 거래 기록을 분산된 공개 장부에 기록하는 기술입니다. 각 블록은 이전 블록의 해시값을 포함하여 연결되어 있어, 데이터의 위변조가 어렵습니다. 이러한 특성 덕분에 높은 보안성과 투명성을 제공합니다.",
        links: [
          { title: "블록체인 작동 방식", url: "https://www.investopedia.com/terms/b/blockchain.asp" },
          { title: "분산 원장 기술(DLT)", url: "https://www.ibm.com/kr-ko/topics/distributed-ledger-technology" },
        ],
        tips: "블록체인은 다양한 산업 분야에서 혁신적인 변화를 가져올 수 있습니다.",
      },
      {
        id: "1-3",
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
      },
    ],
  },
  {
    category: "2. 💰 암호화폐 거래 (Crypto Trading)",
    items: [
      {
        id: "2-1",
        question: "거래소(Exchange) 선택 시 고려 사항",
        answer:
          "거래량, 보안, 수수료, 지원하는 암호화폐 종류, 사용자 인터페이스, 고객 지원 등 다양한 요소를 고려해야 합니다. 신뢰할 수 있는 거래소를 선택하고, 보안 설정을 강화하는 것이 중요합니다.",
        links: [
          { title: "바이낸스", url: "https://www.binance.com/ko" },
          { title: "코인베이스", url: "https://www.coinbase.com/" },
        ],
        tips: "분산 거래소(DEX)도 고려해 보세요. 중앙화된 거래소와 다른 장단점이 있습니다.",
      },
      {
        id: "2-2",
        question: "시장 분석 기초: 차트 보는 법",
        answer:
          "캔들 차트, 이동평균선, 거래량 지표 등을 활용하여 시장의 추세를 파악할 수 있습니다. 기술적 분석 외에도, 프로젝트의 기본적 가치(백서, 팀, 로드맵)를 분석하는 것이 중요합니다.",
        links: [
          { title: "캔들 차트 설명", url: "https://www.investopedia.com/trading/candlestick-charting/" },
          { title: "TradingView", url: "https://www.tradingview.com/" },
        ],
        tips: "과거의 데이터가 미래를 보장하지 않습니다. 항상 리스크 관리를 염두에 두세요.",
      },
      {
        id: "2-3",
        question: "주문(Order) 종류: 지정가, 시장가",
        answer:
          "지정가는 원하는 가격에 주문을 내는 방식이고, 시장가는 현재 시장 가격으로 즉시 거래하는 방식입니다. 상황에 따라 적절한 주문 방식을 선택하여 거래 효율성을 높일 수 있습니다.",
        links: [
          { title: "주문 방식 설명", url: "https://www.binance.com/en/support/faq/360020390472" },
          { title: "슬리피지(Slippage)", url: "https://academy.binance.com/en/articles/slippage-in-crypto-trading" },
        ],
        tips: "시장 변동성이 큰 경우, 지정가 주문이 체결되지 않을 수 있습니다.",
      },
    ],
  },
  {
    category: "3. 🔐 보안 (Security)",
    items: [
      {
        id: "3-1",
        question: "2FA(Two-Factor Authentication) 설정",
        answer:
          "2FA는 계정 보안을 강화하는 추가적인 인증 단계입니다. 비밀번호 외에, 휴대폰 인증 코드나 OTP(One-Time Password)를 사용하여 로그인 보안을 강화할 수 있습니다.",
        links: [
          { title: "Google Authenticator", url: "https://support.google.com/accounts/answer/185839?hl=ko" },
          { title: "Authy", url: "https://authy.com/" },
        ],
        tips: "2FA를 활성화하면 해킹 시도를 크게 줄일 수 있습니다.",
      },
      {
        id: "3-2",
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
      },
      {
        id: "3-3",
        question: "콜드 월렛(Cold Wallet) 사용",
        answer:
          "콜드 월렛은 인터넷에 연결되지 않은 하드웨어 지갑으로, 암호화폐를 오프라인 상태로 보관하여 해킹 위험을 줄일 수 있습니다. 장기 투자자에게 적합합니다.",
        links: [
          { title: "Ledger", url: "https://www.ledger.com/" },
          { title: "Trezor", url: "https://trezor.io/" },
        ],
        tips: "콜드 월렛의 복구 구문(Seed Phrase)을 안전하게 보관하세요.",
      },
    ],
  },
  {
    category: "4. 💡 DeFi (Decentralized Finance)",
    items: [
      {
        id: "4-1",
        question: "DeFi란 무엇인가요?",
        answer:
          "DeFi는 블록체인 기술을 기반으로 구축된 탈중앙화 금융 시스템입니다. 은행과 같은 중개 기관 없이 암호화폐를 통해 대출, 예금, 거래 등의 금융 서비스를 제공합니다.",
        links: [
          { title: "DeFi 설명", url: "https://ethereum.org/ko/defi/" },
          { title: "DeFi Pulse", url: "https://defipulse.com/" },
        ],
        tips: "DeFi는 높은 수익률을 제공하지만, 스마트 컨트랙트 버그, 해킹 등의 위험도 존재합니다.",
      },
      {
        id: "4-2",
        question: "DEX (Decentralized Exchange) 사용법",
        answer:
          "DEX는 중앙 기관 없이 사용자들이 직접 암호화폐를 거래할 수 있는 플랫폼입니다. Uniswap, SushiSwap 등이 대표적이며, 개인 지갑을 연결하여 거래할 수 있습니다.",
        links: [
          { title: "Uniswap", url: "https://uniswap.org/" },
          { title: "SushiSwap", url: "https://www.sushi.com/" },
        ],
        tips: "DEX 사용 시, 슬리피지 설정과 가스비를 고려해야 합니다.",
      },
      {
        id: "4-3",
        question: "유동성 공급(Liquidity Providing)",
        answer:
          "유동성 공급은 DEX에 암호화폐 쌍을 예치하여 거래를 활성화하는 데 기여하고, 그 대가로 수수료를 받는 것입니다. 높은 수익을 얻을 수 있지만, Impermanent Loss(비영구적 손실) 위험이 있습니다.",
        links: [
          { title: "Impermanent Loss 설명", url: "https://academy.binance.com/en/articles/impermanent-loss-explained" },
          { title: "유동성 공급 가이드", url: "https://www.gemini.com/learn/what-is-liquidity-pool" },
        ],
        tips: "유동성 공급 전, Impermanent Loss에 대해 충분히 이해해야 합니다.",
      },
    ],
  },
  {
    category: "5. 🖼️ NFT (Non-Fungible Token)",
    items: [
      {
        id: "5-1",
        question: "NFT란 무엇인가요?",
        answer:
          "NFT는 대체 불가능한 토큰으로, 디지털 자산의 소유권을 증명하는 데 사용됩니다. 이미지, 비디오, 음악, 게임 아이템 등 다양한 형태의 디지털 콘텐츠를 NFT로 발행할 수 있습니다.",
        links: [
          { title: "NFT 설명", url: "https://ethereum.org/ko/nft/" },
          { title: "OpenSea", url: "https://opensea.io/" },
        ],
        tips: "NFT 투자는 높은 위험을 수반하므로 신중하게 접근해야 합니다.",
      },
      {
        id: "5-2",
        question: "NFT 구매 및 판매 방법",
        answer:
          "OpenSea, Rarible 등의 NFT 마켓플레이스에서 NFT를 구매하거나 판매할 수 있습니다. 메타마스크와 같은 암호화폐 지갑을 연결하여 거래를 진행합니다.",
        links: [
          { title: "Rarible", url: "https://rarible.com/" },
          { title: "NFT 마켓플레이스 비교", url: "https://www.creativebloq.com/features/nft-marketplaces" },
        ],
        tips: "NFT 구매 전, 프로젝트의 신뢰성과 커뮤니티를 확인하는 것이 중요합니다.",
      },
      {
        id: "5-3",
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
      },
    ],
  },
  {
    category: "6. 🌐 DAO (Decentralized Autonomous Organization)",
    items: [
      {
        id: "6-1",
        question: "DAO란 무엇인가요?",
        answer:
          "DAO는 블록체인 기반의 탈중앙화된 자율 조직입니다. 스마트 컨트랙트에 의해 운영되며, 구성원들의 투표를 통해 의사 결정을 진행합니다. 투명하고 민주적인 조직 운영이 가능합니다.",
        links: [
          { title: "DAO 설명", url: "https://ethereum.org/ko/dao/" },
          { title: "DAOhaus", url: "https://daohaus.club/" },
        ],
        tips: "DAO 참여 전, 조직의 목표와 운영 방식에 대해 충분히 이해해야 합니다.",
      },
      {
        id: "6-2",
        question: "DAO 참여 방법",
        answer:
          "DAO의 멤버십 토큰을 구매하거나, DAO에 기여하여 멤버가 될 수 있습니다. Snapshot과 같은 플랫폼을 통해 투표에 참여하고, DAO의 의사 결정에 영향을 미칠 수 있습니다.",
        links: [
          { title: "Snapshot", url: "https://snapshot.org/" },
          { title: "DAO 멤버십", url: "https://consensys.net/blog/blockchain/how-to-join-a-dao/" },
        ],
        tips: "DAO는 새로운 형태의 조직 운영 방식이므로, 적극적으로 참여하고 배우는 자세가 중요합니다.",
      },
      {
        id: "6-3",
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
      },
    ],
  },
  {
    category: "7. ⛓️ Layer 2 Scaling Solutions",
    items: [
      {
        id: "7-1",
        question: "Layer 2란 무엇인가요?",
        answer:
          "Layer 2는 메인 블록체인(Layer 1)의 확장성 문제를 해결하기 위해 구축된 솔루션입니다. 트랜잭션을 Layer 2에서 처리하고, 그 결과를 Layer 1에 기록하여 네트워크 혼잡을 줄이고, 거래 속도를 높입니다.",
        links: [
          { title: "Layer 2 설명", url: "https://ethereum.org/ko/layer-2/" },
          { title: "L2BEAT", url: "https://l2beat.com/" },
        ],
        tips: "Layer 2 솔루션은 이더리움 네트워크의 확장성을 크게 향상시킬 수 있습니다.",
      },
      {
        id: "7-2",
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
      },
      {
        id: "7-3",
        question: "주요 Layer 2 프로젝트",
        answer:
          "Arbitrum, Optimism, zkSync, StarkNet 등이 대표적인 Layer 2 프로젝트입니다. 각 프로젝트는 고유한 기술적 특징과 생태계를 가지고 있습니다.",
        links: [
          { title: "Arbitrum", url: "https://arbitrum.io/" },
          { title: "Optimism", url: "https://www.optimism.io/" },
        ],
        tips: "Layer 2 프로젝트를 사용하기 전에, 해당 프로젝트의 보안성과 탈중앙화 수준을 확인하는 것이 중요합니다.",
      },
    ],
  },
  {
    category: "8. ✍️ 스마트 컨트랙트 개발 (Smart Contract Development)",
    items: [
      {
        id: "8-1",
        question: "Solidity 개발 환경 설정",
        answer:
          "Remix IDE, Truffle, Hardhat 등을 사용하여 Solidity 스마트 컨트랙트를 개발할 수 있습니다. 각 개발 환경은 고유한 장단점을 가지고 있으며, 개발자의 숙련도와 프로젝트의 요구 사항에 따라 적합한 환경을 선택해야 합니다.",
        links: [
          { title: "Remix IDE", url: "https://remix.ethereum.org/" },
          { title: "Truffle", url: "https://trufflesuite.com/" },
        ],
        tips: "Remix IDE는 간단한 컨트랙트 개발 및 테스트에 적합하며, Truffle과 Hardhat은 복잡한 프로젝트 관리에 유용합니다.",
      },
      {
        id: "8-2",
        question: "ERC-20 토큰 컨트랙트 작성",
        answer:
          "ERC-20은 대체 가능한 토큰을 위한 표준 인터페이스입니다. OpenZeppelin Contracts 라이브러리를 사용하여 ERC-20 토큰 컨트랙트를 쉽게 작성할 수 있습니다.",
        links: [
          { title: "ERC-20 설명", url: "https://ethereum.org/ko/developers/docs/standards/tokens/erc-20/" },
          { title: "OpenZeppelin Contracts", url: "https://openzeppelin.com/contracts/" },
        ],
        tips: "ERC-20 토큰 컨트랙트 작성 시, 보안 취약점을 방지하기 위해 신뢰할 수 있는 라이브러리를 사용하는 것이 중요합니다.",
      },
      {
        id: "8-3",
        question: "스마트 컨트랙트 보안 감사",
        answer:
          "스마트 컨트랙트는 한번 배포되면 수정하기 어렵기 때문에, 배포 전에 반드시 보안 감사를 받아야 합니다. Slither, Mythril 등의 도구를 사용하여 컨트랙트의 취약점을 분석할 수 있습니다.",
        links: [
          { title: "Slither", url: "https://github.com/crytic/slither" },
          { title: "Mythril", url: "https://mythril.readthedocs.io/en/latest/" },
        ],
        tips: "스마트 컨트랙트 보안 감사는 전문 감사 기관에 의뢰하는 것이 좋습니다.",
      },
    ],
  },
  {
    category: "9. 🏛️ Web3 인프라 (Web3 Infrastructure)",
    items: [
      {
        id: "9-1",
        question: "Infura, Alchemy 사용법",
        answer:
          "Infura와 Alchemy는 이더리움 노드에 접속하기 위한 API를 제공합니다. 이를 통해 개발자는 직접 노드를 운영하지 않고도 블록체인 데이터에 접근하고 트랜잭션을 전송할 수 있습니다.",
        links: [
          { title: "Infura", url: "https://www.infura.io/" },
          { title: "Alchemy", url: "https://www.alchemy.com/" },
        ],
        tips: "Infura와 Alchemy는 무료 플랜을 제공하므로, 소규모 프로젝트에 유용하게 사용할 수 있습니다.",
      },
      {
        id: "9-2",
        question: "IPFS (InterPlanetary File System)",
        answer:
          "IPFS는 분산된 파일 시스템으로, 중앙 서버 없이 파일을 저장하고 공유할 수 있습니다. NFT 메타데이터 저장에 주로 사용됩니다.",
        links: [
          { title: "IPFS 설명", url: "https://ipfs.io/" },
          { title: "IPFS Docs", url: "https://docs.ipfs.io/" },
        ],
        tips: "IPFS는 파일의 영구성을 보장하지 않으므로, Pinata와 같은 서비스를 사용하여 파일을 고정하는 것이 좋습니다.",
      },
      {
        id: "9-3",
        question: "The Graph 사용법",
        answer:
          "The Graph는 블록체인 데이터를 효율적으로 쿼리하기 위한 인덱싱 프로토콜입니다. 이를 통해 개발자는 DApp에서 필요한 데이터를 빠르게 검색할 수 있습니다.",
        links: [
          { title: "The Graph", url: "https://thegraph.com/" },
          { title: "The Graph Docs", url: "https://thegraph.com/docs/" },
        ],
        tips: "The Graph는 복잡한 블록체인 데이터를 효율적으로 관리하는 데 유용합니다.",
      },
    ],
  },
  {
    category: "10. 📱 Web3 프론트엔드 개발 (Web3 Frontend Development)",
    items: [
      {
        id: "10-1",
        question: "Web3.js, Ethers.js 사용법",
        answer:
          "Web3.js와 Ethers.js는 자바스크립트 라이브러리로, DApp에서 스마트 컨트랙트와 상호 작용하는 데 사용됩니다. 메타마스크와 같은 지갑을 연결하여 트랜잭션을 전송하고, 블록체인 데이터를 읽어올 수 있습니다.",
        links: [
          { title: "Web3.js", url: "https://web3js.readthedocs.io/en/v1.7.0/" },
          { title: "Ethers.js", url: "https://docs.ethers.io/v5/" },
        ],
        tips: "Ethers.js는 Web3.js보다 더 현대적인 기능을 제공하며, 사용하기 더 쉽다는 평가를 받고 있습니다.",
      },
      {
        id: "10-2",
        question: "메타마스크(MetaMask) 연동",
        answer:
          "DApp에서 메타마스크를 연동하여 사용자의 암호화폐 지갑에 접근하고, 트랜잭션을 요청할 수 있습니다. 메타마스크 API를 사용하여 사용자 인증 및 트랜잭션 서명을 구현할 수 있습니다.",
        links: [
          { title: "MetaMask Docs", url: "https://docs.metamask.io/" },
          { title: "MetaMask API", url: "https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents" },
        ],
        tips: "메타마스크 연동 시, 사용자 개인 정보 보호 및 보안에 유의해야 합니다.",
      },
      {
        id: "10-3",
        question: "DApp UI 디자인",
        answer:
          "DApp UI는 사용자가 블록체인과 상호 작용하는 인터페이스입니다. 사용자 친화적이고 직관적인 디자인이 중요하며, Web3 디자인 시스템을 참고하여 일관성 있는 UI를 구축할 수 있습니다.",
        links: [
          {
            title: "Web3 디자인 시스템",
            url: "https://www.figma.com/community/file/1220944482715423788/Web3-Design-System",
          },
          { title: "DApp 디자인 사례", url: "https://dribbble.com/search/dapps" },
        ],
        tips: "DApp UI 디자인 시, 사용자의 암호화폐 경험 수준을 고려해야 합니다.",
      },
    ],
  },
  {
    category: "11. 👨‍💻 Dev for Non-Dev (비개발자를 위한 개발 지식)",
    items: [
      {
        id: "11-1",
        question: "스마트컨트랙트란?",
        answer:
          "스마트 컨트랙트는 특정 조건이 충족되면 사전에 프로그래밍된 계약 내용이 자동으로 실행되는 디지털 계약입니다. 블록체인 위에서 작동하며, 중개자 없이 투명하고 신뢰할 수 있는 계약 이행을 가능하게 합니다.",
        links: [
          { title: "스마트 컨트랙트 기초", url: "https://ethereum.org/en/developers/docs/smart-contracts/" },
          { title: "Remix IDE", url: "https://remix.ethereum.org" },
        ],
        tips: "스마트 컨트랙트는 한번 배포되면 수정이 어려우므로 신중하게 설계해야 합니다.",
      },
      {
        id: "11-2",
        question: "Solidity vs Vyper",
        answer:
          "Solidity는 이더리움 스마트 컨트랙트 개발에 가장 널리 사용되는 객체 지향 프로그래밍 언어로, C++, 파이썬, 자바스크립트와 유사한 문법을 가집니다. Vyper는 파이썬과 유사한 문법을 가지며, 보안성과 코드 가독성을 강조하여 더 간결하고 안전한 계약 작성을 목표로 합니다.",
        links: [
          { title: "Solidity 문서", url: "https://soliditylang.org" },
          { title: "Vyper 문서", url: "https://vyper.readthedocs.io" },
        ],
        tips: "초보자는 Solidity부터 시작하는 것이 좋습니다. 더 많은 자료와 커뮤니티 지원이 있습니다.",
      },
      {
        id: "11-3",
        question: "테스트넷에서 실습하는 법",
        answer:
          "테스트넷은 실제 자산을 사용하지 않고 블록체인 개발 및 DApp 테스트를 할 수 있는 실험용 네트워크입니다. 메타마스크 등 지갑에서 테스트넷(예: Sepolia, Goerli)으로 네트워크를 전환하고, 해당 테스트넷의 수도꼭지(Faucet)에서 테스트용 코인을 받아 스마트 컨트랙트 배포나 DApp 기능을 시험해볼 수 있습니다.",
        links: [
          { title: "Sepolia Faucet", url: "https://sepoliafaucet.com" },
          { title: "테스트넷 가이드", url: "https://ethereum.org/en/developers/docs/networks/" },
        ],
        tips: "테스트넷에서 충분히 테스트한 후 메인넷에 배포하세요.",
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
          { title: "탈중앙화 개념", url: "https://ethereum.org/en/decentralized-identity/" },
          { title: "Web3 철학", url: "https://ethereum.org/en/web3/" },
        ],
        tips: "완전한 탈중앙화는 어려우므로, 적절한 수준의 탈중앙화를 추구하는 것이 현실적입니다.",
      },
      {
        id: "12-2",
        question: "토크노믹스 기초: 발행량, 소각, 인플레이션",
        answer:
          "토크노믹스는 토큰(Token)과 경제학(Economics)의 합성어로, 토큰의 설계, 분배, 공급 및 수요 관리 등 경제적 모델을 의미합니다. 총 발행량은 토큰의 희소성을 결정하고, 소각은 공급량을 줄여 가치를 높이려는 시도이며, 인플레이션은 지속적인 토큰 발행으로 가치가 하락하는 현상을 나타냅니다.",
        links: [
          { title: "토크노믹스 가이드", url: "https://ethereum.org/en/developers/docs/standards/tokens/" },
          { title: "토큰 경제학", url: "https://blog.coinbase.com/a-beginners-guide-to-tokenomics-6e1b3e5d8c5e" },
        ],
        tips: "지속 가능한 토크노믹스 설계가 프로젝트의 장기적 성공에 중요합니다.",
      },
      {
        id: "12-3",
        question: "MEV란?",
        answer:
          "MEV(Maximal Extractable Value, 이전에는 Miner Extractable Value)는 블록 생산자(채굴자 또는 검증자)가 블록 내 트랜잭션의 순서, 포함 여부 등을 조작하여 얻을 수 있는 최대 이익을 의미합니다. 차익 거래, 청산 기회 선점 등으로 발생하며, 사용자에게 불리한 가격(슬리피지)을 유발할 수 있습니다.",
        links: [
          { title: "MEV 설명", url: "https://ethereum.org/en/developers/docs/mev/" },
          { title: "Flashbots", url: "https://flashbots.net" },
        ],
        tips: "MEV는 블록체인의 투명성으로 인해 발생하는 자연스러운 현상이지만, 사용자에게 부정적 영향을 줄 수 있습니다.",
      },
    ],
  },
  {
    category: "13. 🌍 Web3 Ecosystems & Communities (Web3 생태계 & 커뮤니티)",
    items: [
      {
        id: "13-1",
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
        id: "13-2",
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
    category: "14. 💼 Web3 Careers & Skills (Web3 커리어 & 스킬)",
    items: [
      {
        id: "14-1",
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
        id: "14-2",
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
    category: "15. 📜 Regulation, Ethics & Society (규제, 윤리 & 사회)",
    items: [
      {
        id: "15-1",
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
        id: "15-2",
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
    category: "16. 💡 Future of Web3 & Emerging Trends (Web3의 미래 & 신흥 트렌드)",
    items: [
      {
        id: "16-1",
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
        id: "16-2",
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
        id: "16-3",
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
]

// 영어 버전도 동일하게 추가
export const web3DataEn = [
  {
    category: "1. 🪙 Crypto Basics",
    items: [
      {
        id: "1-1",
        question: "What is cryptocurrency?",
        answer:
          "Cryptocurrency is a digital or virtual currency that uses cryptography to secure transactions and control the creation of new units. It operates on a decentralized network, free from the control of central banks or financial institutions.",
        links: [
          { title: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" },
          { title: "Introduction to Ethereum", url: "https://ethereum.org/en/what-is-ethereum/" },
        ],
        tips: "Cryptocurrency investments are highly volatile and should be approached with caution.",
      },
      {
        id: "1-2",
        question: "What is blockchain?",
        answer:
          "Blockchain is a technology that records transaction data in a distributed, public ledger. Each block is linked to the previous block using a hash, making it difficult to tamper with the data. This provides high security and transparency.",
        links: [
          { title: "How Blockchain Works", url: "https://www.investopedia.com/terms/b/blockchain.asp" },
          {
            title: "Distributed Ledger Technology (DLT)",
            url: "https://www.ibm.com/kr-ko/topics/distributed-ledger-technology",
          },
        ],
        tips: "Blockchain can bring innovative changes to various industries.",
      },
      {
        id: "1-3",
        question: "Types and usage of wallets",
        answer:
          "Cryptocurrency wallets are tools that store private keys and allow you to securely manage your cryptocurrencies. There are software wallets (desktop, mobile, web) and hardware wallets (cold wallets). Choose the appropriate wallet based on your purpose and security requirements.",
        links: [
          { title: "How to use MetaMask", url: "https://metamask.io/download/" },
          {
            title: "Cold Wallet Comparison",
            url: "https://www.coindesk.com/tech/2021/03/29/hot-wallets-vs-cold-wallets-whats-the-difference/",
          },
        ],
        tips: "Never share your private key with anyone. You may lose your assets if you lose it.",
      },
    ],
  },
  {
    category: "2. 💰 Crypto Trading",
    items: [
      {
        id: "2-1",
        question: "Considerations when choosing an exchange",
        answer:
          "Consider various factors such as trading volume, security, fees, supported cryptocurrencies, user interface, and customer support. It is important to choose a reliable exchange and strengthen security settings.",
        links: [
          { title: "Binance", url: "https://www.binance.com/ko" },
          { title: "Coinbase", url: "https://www.coinbase.com/" },
        ],
        tips: "Consider decentralized exchanges (DEX) as well. They have different advantages and disadvantages compared to centralized exchanges.",
      },
      {
        id: "2-2",
        question: "Market analysis basics: How to read charts",
        answer:
          "You can use candlestick charts, moving averages, and volume indicators to understand market trends. In addition to technical analysis, it is important to analyze the project's fundamental value (whitepaper, team, roadmap).",
        links: [
          { title: "Candlestick Chart Explanation", url: "https://www.investopedia.com/trading/candlestick-charting/" },
          { title: "TradingView", url: "https://www.tradingview.com/" },
        ],
        tips: "Past data does not guarantee the future. Always keep risk management in mind.",
      },
      {
        id: "2-3",
        question: "Order types: Limit order, Market order",
        answer:
          "A limit order is a method of placing an order at a desired price, and a market order is a method of trading immediately at the current market price. You can increase trading efficiency by selecting the appropriate order method depending on the situation.",
        links: [
          { title: "Order Method Explanation", url: "https://www.binance.com/en/support/faq/360020390472" },
          { title: "Slippage", url: "https://academy.binance.com/en/articles/slippage-in-crypto-trading" },
        ],
        tips: "In case of high market volatility, a limit order may not be executed.",
      },
    ],
  },
  {
    category: "3. 🔐 Security",
    items: [
      {
        id: "3-1",
        question: "Setting up 2FA (Two-Factor Authentication)",
        answer:
          "2FA is an additional authentication step that enhances account security. In addition to your password, you can use a mobile phone authentication code or OTP (One-Time Password) to enhance login security.",
        links: [
          { title: "Google Authenticator", url: "https://support.google.com/accounts/answer/185839?hl=ko" },
          { title: "Authy", url: "https://authy.com/" },
        ],
        tips: "Enabling 2FA can greatly reduce hacking attempts.",
      },
      {
        id: "3-2",
        question: "Preventing phishing attacks",
        answer:
          "Do not click on links or emails from unknown sources, and do not respond to messages asking for personal information. Check the official website address and report any suspicious activity to the exchange immediately.",
        links: [
          {
            title: "Phishing Attack Prevention Guide",
            url: "https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-attacks",
          },
          { title: "Security News", url: "https://krebsonsecurity.com/" },
        ],
        tips: "Always be suspicious and get into the habit of checking.",
      },
      {
        id: "3-3",
        question: "Using a Cold Wallet",
        answer:
          "A cold wallet is a hardware wallet that is not connected to the internet, which can reduce the risk of hacking by storing cryptocurrencies offline. Suitable for long-term investors.",
        links: [
          { title: "Ledger", url: "https://www.ledger.com/" },
          { title: "Trezor", url: "https://trezor.io/" },
        ],
        tips: "Keep your cold wallet's Seed Phrase safe.",
      },
    ],
  },
  {
    category: "4. 💡 DeFi (Decentralized Finance)",
    items: [
      {
        id: "4-1",
        question: "What is DeFi?",
        answer:
          "DeFi is a decentralized financial system built on blockchain technology. It provides financial services such as lending, deposits, and trading through cryptocurrencies without intermediaries such as banks.",
        links: [
          { title: "DeFi Explanation", url: "https://ethereum.org/ko/defi/" },
          { title: "DeFi Pulse", url: "https://defipulse.com/" },
        ],
        tips: "DeFi offers high returns, but there are also risks such as smart contract bugs and hacking.",
      },
      {
        id: "4-2",
        question: "How to use DEX (Decentralized Exchange)",
        answer:
          "DEX is a platform where users can directly trade cryptocurrencies without a central authority. Representative examples include Uniswap and SushiSwap, and you can trade by connecting your personal wallet.",
        links: [
          { title: "Uniswap", url: "https://uniswap.org/" },
          { title: "SushiSwap", url: "https://www.sushi.com/" },
        ],
        tips: "When using DEX, you should consider slippage settings and gas fees.",
      },
      {
        id: "4-3",
        question: "Liquidity Providing",
        answer:
          "Liquidity providing contributes to activating transactions by depositing cryptocurrency pairs into DEX and receiving fees in return. You can earn high returns, but there is a risk of Impermanent Loss.",
        links: [
          {
            title: "Impermanent Loss Explanation",
            url: "https://academy.binance.com/en/articles/impermanent-loss-explained",
          },
          { title: "Liquidity Providing Guide", url: "https://www.gemini.com/learn/what-is-liquidity-pool" },
        ],
        tips: "Before providing liquidity, you should fully understand Impermanent Loss.",
      },
    ],
  },
  {
    category: "5. 🖼️ NFT (Non-Fungible Token)",
    items: [
      {
        id: "5-1",
        question: "What is an NFT?",
        answer:
          "NFT is a non-fungible token used to prove ownership of digital assets. Various forms of digital content such as images, videos, music, and game items can be issued as NFTs.",
        links: [
          { title: "NFT Explanation", url: "https://ethereum.org/ko/nft/" },
          { title: "OpenSea", url: "https://opensea.io/" },
        ],
        tips: "NFT investments are highly risky and should be approached with caution.",
      },
      {
        id: "5-2",
        question: "How to buy and sell NFTs",
        answer:
          "You can buy or sell NFTs on NFT marketplaces such as OpenSea and Rarible. Connect a cryptocurrency wallet such as MetaMask to proceed with the transaction.",
        links: [
          { title: "Rarible", url: "https://rarible.com/" },
          { title: "NFT Marketplace Comparison", url: "https://www.creativebloq.com/features/nft-marketplaces" },
        ],
        tips: "Before purchasing an NFT, it is important to check the project's reliability and community.",
      },
      {
        id: "5-3",
        question: "NFT use cases",
        answer:
          "NFTs are used in various fields such as digital art, game items, membership cards, and real estate. In particular, it is contributing to building a new digital economy by combining with the metaverse.",
        links: [
          { title: "NFT Games", url: "https://playtoearn.net/" },
          {
            title: "Metaverse NFT",
            url: "https://www.forbes.com/sites/cathyhackl/2021/04/04/nfts-and-the-metaverse-how-non-fungible-tokens-will-drive-the-future-of-digital-economies/?sh=6c0425a31953",
          },
        ],
        tips: "NFTs are more than just speculative assets; they are technologies with various possibilities.",
      },
    ],
  },
  {
    category: "6. 🌐 DAO (Decentralized Autonomous Organization)",
    items: [
      {
        id: "6-1",
        question: "What is a DAO?",
        answer:
          "A DAO is a blockchain-based decentralized autonomous organization. It is operated by smart contracts, and decisions are made through voting by members. Transparent and democratic organizational operation is possible.",
        links: [
          { title: "DAO Explanation", url: "https://ethereum.org/ko/dao/" },
          { title: "DAOhaus", url: "https://daohaus.club/" },
        ],
        tips: "Before participating in a DAO, you should fully understand the organization's goals and operating methods.",
      },
      {
        id: "6-2",
        question: "How to participate in a DAO",
        answer:
          "You can become a member by purchasing a DAO's membership token or contributing to the DAO. You can participate in voting through platforms such as Snapshot and influence the DAO's decision-making.",
        links: [
          { title: "Snapshot", url: "https://snapshot.org/" },
          { title: "DAO Membership", url: "https://consensys.net/blog/blockchain/how-to-join-a-dao/" },
        ],
        tips: "Since DAO is a new form of organizational operation, it is important to actively participate and learn.",
      },
      {
        id: "6-3",
        question: "DAO use cases",
        answer:
          "DAOs are used in various fields such as investment, charity, and social networking. In particular, it is effective for project fund management and community operation.",
        links: [
          {
            title: "DAO Cases",
            url: "https://builtin.com/blockchain/decentralized-autonomous-organization-dao-examples",
          },
          {
            title: "Charity DAO",
            url: "https://www.coindesk.com/layer2/2022/12/16/crypto-winter-didnt-kill-giving-daos/",
          },
        ],
        tips: "DAOs can contribute to increasing the transparency and efficiency of organizational operations.",
      },
    ],
  },
  {
    category: "7. ⛓️ Layer 2 Scaling Solutions",
    items: [
      {
        id: "7-1",
        question: "What is Layer 2?",
        answer:
          "Layer 2 is a solution built to solve the scalability problem of the main blockchain (Layer 1). It processes transactions in Layer 2 and records the results in Layer 1 to reduce network congestion and increase transaction speed.",
        links: [
          { title: "Layer 2 Explanation", url: "https://ethereum.org/ko/layer-2/" },
          { title: "L2BEAT", url: "https://l2beat.com/" },
        ],
        tips: "Layer 2 solutions can greatly improve the scalability of the Ethereum network.",
      },
      {
        id: "7-2",
        question: "Optimistic Rollups vs ZK-Rollups",
        answer:
          "Optimistic Rollups assume that transactions are valid and perform verification only when a problem is found. ZK-Rollups use Zero-Knowledge Proof to verify the validity of transactions. Each has its advantages and disadvantages, and the appropriate solution should be selected depending on the use case.",
        links: [
          {
            title: "Optimistic Rollups Explanation",
            url: "https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/",
          },
          { title: "ZK-Rollups Explanation", url: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/" },
        ],
        tips: "ZK-Rollups offer higher security than Optimistic Rollups, but use more complex technology.",
      },
      {
        id: "7-3",
        question: "Major Layer 2 Projects",
        answer:
          "Arbitrum, Optimism, zkSync, and StarkNet are representative Layer 2 projects. Each project has its own technical characteristics and ecosystem.",
        links: [
          { title: "Arbitrum", url: "https://arbitrum.io/" },
          { title: "Optimism", url: "https://www.optimism.io/" },
        ],
        tips: "Before using a Layer 2 project, it is important to check the security and decentralization level of the project.",
      },
    ],
  },
  {
    category: "8. ✍️ Smart Contract Development",
    items: [
      {
        id: "8-1",
        question: "Setting up the Solidity development environment",
        answer:
          "You can develop Solidity smart contracts using Remix IDE, Truffle, Hardhat, etc. Each development environment has its own advantages and disadvantages, and the appropriate environment should be selected depending on the developer's proficiency and project requirements.",
        links: [
          { title: "Remix IDE", url: "https://remix.ethereum.org/" },
          { title: "Truffle", url: "https://trufflesuite.com/" },
        ],
        tips: "Remix IDE is suitable for simple contract development and testing, while Truffle and Hardhat are useful for complex project management.",
      },
      {
        id: "8-2",
        question: "Writing an ERC-20 token contract",
        answer:
          "ERC-20 is the standard interface for fungible tokens. You can easily write an ERC-20 token contract using the OpenZeppelin Contracts library.",
        links: [
          { title: "ERC-20 Explanation", url: "https://ethereum.org/ko/developers/docs/standards/tokens/erc-20/" },
          { title: "OpenZeppelin Contracts", url: "https://openzeppelin.com/contracts/" },
        ],
        tips: "When writing an ERC-20 token contract, it is important to use a trusted library to prevent security vulnerabilities.",
      },
      {
        id: "8-3",
        question: "Smart Contract Security Audit",
        answer:
          "Since smart contracts are difficult to modify once deployed, they must be security audited before deployment. You can use tools such as Slither and Mythril to analyze contract vulnerabilities.",
        links: [
          { title: "Slither", url: "https://github.com/crytic/slither" },
          { title: "Mythril", url: "https://mythril.readthedocs.io/en/latest/" },
        ],
        tips: "It is recommended to entrust smart contract security audits to professional audit institutions.",
      },
    ],
  },
  {
    category: "9. 🏛️ Web3 Infrastructure",
    items: [
      {
        id: "9-1",
        question: "How to use Infura and Alchemy",
        answer:
          "Infura and Alchemy provide APIs for accessing Ethereum nodes. This allows developers to access blockchain data and send transactions without operating nodes directly.",
        links: [
          { title: "Infura", url: "https://www.infura.io/" },
          { title: "Alchemy", url: "https://www.alchemy.com/" },
        ],
        tips: "Infura and Alchemy offer free plans, making them useful for small projects.",
      },
      {
        id: "9-2",
        question: "IPFS (InterPlanetary File System)",
        answer:
          "IPFS is a distributed file system that allows you to store and share files without a central server. It is mainly used for storing NFT metadata.",
        links: [
          { title: "IPFS Explanation", url: "https://ipfs.io/" },
          { title: "IPFS Docs", url: "https://docs.ipfs.io/" },
        ],
        tips: "IPFS does not guarantee file persistence, so it is recommended to fix files using a service such as Pinata.",
      },
      {
        id: "9-3",
        question: "How to use The Graph",
        answer:
          "The Graph is an indexing protocol for efficiently querying blockchain data. This allows developers to quickly search for the data they need in DApps.",
        links: [
          { title: "The Graph", url: "https://thegraph.com/" },
          { title: "The Graph Docs", url: "https://thegraph.com/docs/" },
        ],
        tips: "The Graph is useful for efficiently managing complex blockchain data.",
      },
    ],
  },
  {
    category: "10. 📱 Web3 Frontend Development",
    items: [
      {
        id: "10-1",
        question: "How to use Web3.js and Ethers.js",
        answer:
          "Web3.js and Ethers.js are JavaScript libraries used in DApps to interact with smart contracts. You can connect wallets such as MetaMask to send transactions and read blockchain data.",
        links: [
          { title: "Web3.js", url: "https://web3js.readthedocs.io/en/v1.7.0/" },
          { title: "Ethers.js", url: "https://docs.ethers.io/v5/" },
        ],
        tips: "Ethers.js offers more modern features than Web3.js and is considered easier to use.",
      },
      {
        id: "10-2",
        question: "MetaMask Integration",
        answer:
          "You can integrate MetaMask into your DApp to access the user's cryptocurrency wallet and request transactions. You can use the MetaMask API to implement user authentication and transaction signing.",
        links: [
          { title: "MetaMask Docs", url: "https://docs.metamask.io/" },
          { title: "MetaMask API", url: "https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents" },
        ],
        tips: "When integrating MetaMask, be careful about user privacy and security.",
      },
      {
        id: "10-3",
        question: "DApp UI Design",
        answer:
          "The DApp UI is the interface through which users interact with the blockchain. User-friendly and intuitive design is important, and you can build a consistent UI by referring to the Web3 design system.",
        links: [
          {
            title: "Web3 Design System",
            url: "https://www.figma.com/community/file/1220944482715423788/Web3-Design-System",
          },
          { title: "DApp Design Examples", url: "https://dribbble.com/search/dapps" },
        ],
        tips: "When designing a DApp UI, you should consider the user's level of cryptocurrency experience.",
      },
    ],
  },
  {
    category: "11. 👨‍💻 Dev for Non-Dev",
    items: [
      {
        id: "11-1",
        question: "What are smart contracts?",
        answer:
          "Smart contracts are digital contracts that automatically execute predefined contract terms when specific conditions are met. They operate on blockchain and enable transparent and trustworthy contract execution without intermediaries.",
        links: [
          { title: "Smart Contract Basics", url: "https://ethereum.org/en/developers/docs/smart-contracts/" },
          { title: "Remix IDE", url: "https://remix.ethereum.org" },
        ],
        tips: "Smart contracts are difficult to modify once deployed, so they must be designed carefully.",
      },
      {
        id: "11-2",
        question: "Solidity vs Vyper",
        answer:
          "Solidity is the most widely used object-oriented programming language for Ethereum smart contract development, with syntax similar to C++, Python, and JavaScript. Vyper has Python-like syntax and emphasizes security and code readability, aiming for more concise and secure contract writing.",
        links: [
          { title: "Solidity Documentation", url: "https://soliditylang.org" },
          { title: "Vyper Documentation", url: "https://vyper.readthedocs.io" },
        ],
        tips: "Beginners should start with Solidity as it has more resources and community support.",
      },
      {
        id: "11-3",
        question: "How to practice on testnets",
        answer:
          "Testnets are experimental networks where you can develop blockchain applications and test DApps without using real assets. You can switch to testnets (like Sepolia, Goerli) in wallets like MetaMask, get test coins from faucets, and test smart contract deployment or DApp functionality.",
        links: [
          { title: "Sepolia Faucet", url: "https://sepoliafaucet.com" },
          { title: "Testnet Guide", url: "https://ethereum.org/en/developers/docs/networks/" },
        ],
        tips: "Test thoroughly on testnets before deploying to mainnet.",
      },
    ],
  },
  {
    category: "12. 🧠 Web3 Advanced Concepts",
    items: [
      {
        id: "12-1",
        question: "What is decentralization?",
        answer:
          "Decentralization means a state where no single individual or institution controls the entire system, and authority and responsibility are distributed among multiple participants. In Web3, the goal is to move away from centralized control in data ownership, decision-making, and network operations.",
        links: [
          { title: "Decentralization Concept", url: "https://ethereum.org/en/decentralized-identity/" },
          { title: "Web3 Philosophy", url: "https://ethereum.org/en/web3/" },
        ],
        tips: "Complete decentralization is difficult, so pursuing an appropriate level of decentralization is realistic.",
      },
      {
        id: "12-2",
        question: "Tokenomics basics: Supply, burning, inflation",
        answer:
          "Tokenomics is a combination of Token and Economics, referring to the economic model of token design, distribution, supply and demand management. Total supply determines token scarcity, burning attempts to increase value by reducing supply, and inflation represents the phenomenon of value decline due to continuous token issuance.",
        links: [
          { title: "Tokenomics Guide", url: "https://ethereum.org/en/developers/docs/standards/tokens/" },
          { title: "Token Economics", url: "https://blog.coinbase.com/a-beginners-guide-to-tokenomics-6e1b3e5d8c5e" },
        ],
        tips: "Sustainable tokenomics design is important for the long-term success of projects.",
      },
      {
        id: "12-3",
        question: "What is MEV?",
        answer:
          "MEV (Maximal Extractable Value, formerly Miner Extractable Value) refers to the maximum profit that block producers (miners or validators) can obtain by manipulating the order and inclusion of transactions within blocks. It occurs through arbitrage, liquidation opportunities, etc., and can cause unfavorable prices (slippage) for users.",
        links: [
          { title: "MEV Explanation", url: "https://ethereum.org/en/developers/docs/mev/" },
          { title: "Flashbots", url: "https://flashbots.net" },
        ],
        tips: "MEV is a natural phenomenon due to blockchain transparency, but it can negatively impact users.",
      },
    ],
  },
  {
    category: "13. 🌍 Web3 Ecosystems & Communities",
    items: [
      {
        id: "13-1",
        question: "Major Layer 1 ecosystem comparison",
        answer:
          "Ethereum has the largest ecosystem and developer community but has scalability issues. Solana boasts high processing speed but sometimes experiences network stability issues. Cosmos and Polkadot aim to build interoperable blockchain networks. Each ecosystem has different technical characteristics, major DApps, and community atmospheres.",
        links: [
          { title: "Ethereum", url: "https://ethereum.org" },
          { title: "Solana", url: "https://solana.com" },
          { title: "Cosmos", url: "https://cosmos.network" },
        ],
        tips: "Understand the characteristics of each ecosystem and choose the chain that fits your purpose.",
      },
      {
        id: "13-2",
        question: "How to participate in Web3 communities",
        answer:
          "You can follow projects or influencers in areas of interest on Twitter, Discord, Telegram, Reddit, etc., and participate in related community channels. Each community has its own culture and communication style, and you can be active through information sharing, discussions, and event participation.",
        links: [
          { title: "Web3 Community Guide", url: "https://ethereum.org/en/community/" },
          { title: "Discord Server List", url: "https://ethereum.org/en/community/online/" },
        ],
        tips: "Read and respect community rules, and try to make constructive contributions.",
      },
    ],
  },
  {
    category: "14. 💼 Web3 Careers & Skills",
    items: [
      {
        id: "14-1",
        question: "Various job categories in Web3",
        answer:
          "In addition to technical roles (development, research, security), Web3 also has important and growing demand for various non-technical roles such as product planning, design, data analysis, content creation, community management, marketing, and business development.",
        links: [
          { title: "Web3 Career", url: "https://web3.career" },
          { title: "CryptoJobs", url: "https://crypto.jobs" },
        ],
        tips: "Combining Web3 knowledge with existing expertise can increase competitiveness.",
      },
      {
        id: "14-2",
        question: "Web3 learning resources",
        answer:
          "You can find Web3 development and related knowledge online courses at ConsenSys Academy, Encode Club, CryptoZombies, Udemy, Coursera, etc. There are also various bootcamp programs, and actual project experience or portfolios are often considered more important than certifications for specific technology stacks.",
        links: [
          { title: "ConsenSys Academy", url: "https://consensys.net/academy/" },
          { title: "CryptoZombies", url: "https://cryptozombies.io" },
        ],
        tips: "It's important to create actual projects along with theoretical learning.",
      },
    ],
  },
  {
    category: "15. 📜 Regulation, Ethics & Society",
    items: [
      {
        id: "15-1",
        question: "Web3 regulatory trends by major countries",
        answer:
          "The US has regulatory uncertainty due to jurisdictional issues between SEC and CFTC, and securities determination. The EU is establishing a comprehensive regulatory framework through the MiCA (Markets in Crypto-Assets) bill. Korea focuses on anti-money laundering centered on the Specific Financial Information Act, and discussions on legislation for investor protection and industry development are ongoing.",
        links: [
          {
            title: "MiCA Regulation",
            url: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
          },
          { title: "Korea Regulatory Status", url: "https://www.fsc.go.kr" },
        ],
        tips: "Regulations change rapidly, so continuously check for the latest information.",
      },
      {
        id: "15-2",
        question: "Ethical considerations of Web3 technology",
        answer:
          "Blockchain transparency can lead to privacy violations, and decentralization can be misused for illegal activities. Algorithms combined with AI can have bias, and PoW energy consumption causes environmental problems. Consideration of these ethical issues and technical/social solution efforts are needed.",
        links: [
          { title: "Blockchain Ethics", url: "https://ethereum.org/en/energy-consumption/" },
          { title: "Sustainability", url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" },
        ],
        tips: "Ethical responsibility should be considered along with technological advancement.",
      },
    ],
  },
  {
    category: "16. 💡 Future of Web3 & Emerging Trends",
    items: [
      {
        id: "16-1",
        question: "Convergence of AI and Web3",
        answer:
          "Various convergence possibilities are being explored, such as decentralizing AI model training and operation (DeAI), AI agents autonomously performing tasks by interacting with blockchain, utilizing AI in DAO operations, and users providing their data for AI training while controlling and receiving compensation (data sovereignty).",
        links: [
          { title: "AI and Blockchain", url: "https://ethereum.org/en/developers/docs/" },
          { title: "Decentralized AI", url: "https://blog.oceanprotocol.com" },
        ],
        tips: "The convergence of AI and Web3 is still in its early stages but has great potential.",
      },
      {
        id: "16-2",
        question: "Challenges for Web3 mass adoption",
        answer:
          "Mass adoption can be achieved by improving complex user experience (UX), securing scalability to accommodate more users, creating clear and reasonable regulatory environments, and expanding education to increase public understanding of Web3 technology. It is expected to improve gradually.",
        links: [
          { title: "Web3 UX", url: "https://ethereum.org/en/developers/docs/intro-to-ether/" },
          { title: "Scalability Solutions", url: "https://ethereum.org/en/developers/docs/scaling/" },
        ],
        tips: "User-friendly interfaces are important along with technical completeness.",
      },
      {
        id: "16-3",
        question: "Combination of metaverse and Web3 technology",
        answer:
          "Web3 technologies (NFTs, cryptocurrencies) can grant users true ownership of digital assets (avatars, items, land) in the metaverse, enable asset movement and interaction between different metaverses (interoperability), and serve as the foundation for building open metaverses not controlled by specific companies.",
        links: [
          { title: "Metaverse and NFT", url: "https://ethereum.org/en/nft/" },
          { title: "Digital Ownership", url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-721/" },
        ],
        tips: "The success of the metaverse depends not only on technical implementation but also on user experience and content.",
      },
    ],
  },
]
