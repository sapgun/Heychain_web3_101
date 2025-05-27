export const web3Data = [
  {
    category: "1. 👛 Wallet & Identity (지갑 & 신원)",
    items: [
      {
        id: "1-1",
        question: "메타마스크란 무엇이고 어떻게 설치하나요?",
        answer:
          "메타마스크는 브라우저 확장 프로그램 및 모바일 앱 형태의 암호화폐 지갑으로, 주로 이더리움 및 EVM 호환 블록체인과 상호작용하는 데 사용됩니다. 공식 웹사이트(metamask.io)에서 다운로드하여 설치하고, 안내에 따라 새 지갑을 생성하거나 기존 지갑을 복구할 수 있습니다. 설치 후 시드 구문을 안전하게 백업하는 것이 가장 중요합니다.",
        links: [
          { title: "MetaMask 공식 웹사이트", url: "https://metamask.io" },
          { title: "MetaMask 설치 가이드", url: "https://support.metamask.io/hc/en-us/articles/360015489531" },
          { title: "MetaMask 보안 가이드", url: "https://support.metamask.io/hc/en-us/articles/360015489591" },
        ],
        tips: "절대로 시드 구문을 온라인에 저장하거나 다른 사람과 공유하지 마세요. 피싱 사이트를 주의하고 항상 공식 웹사이트에서만 다운로드하세요.",
      },
      {
        id: "1-2",
        question: "프라이빗 키와 시드 구문의 차이는?",
        answer:
          "프라이빗 키는 특정 계정의 자산에 접근할 수 있는 비밀번호와 같은 고유한 암호 코드입니다. 시드 구문(또는 복구 구문)은 이 프라이빗 키들을 생성하고 지갑 전체를 복구하는 데 사용되는 12~24개의 단어 조합입니다. 하나의 시드 구문으로 여러 개의 프라이빗 키와 지갑 주소를 생성할 수 있어, 시드 구문이 더 상위 개념입니다.",
        links: [
          { title: "BIP39 시드 구문 표준", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" },
          { title: "지갑 보안 모범 사례", url: "https://ethereum.org/en/wallets/" },
        ],
        tips: "시드 구문은 지갑 복구의 유일한 수단이므로 물리적으로 안전한 곳에 보관하세요. 디지털 형태로 저장하지 말고 종이에 적어 보관하는 것이 좋습니다.",
      },
      {
        id: "1-3",
        question: "지갑 주소는 어떻게 생성되며 몇 개까지 만들 수 있나요?",
        answer:
          "지갑 주소는 공개키로부터 파생되며, 암호화폐를 주고받는 데 사용되는 고유 식별자입니다. 하나의 시드 구문으로 이론상 거의 무한대에 가까운 지갑 주소를 생성할 수 있습니다(정확히는 2^160개). 이는 HD(Hierarchical Deterministic) 지갑 구조 덕분으로, BIP44 표준을 따라 체계적으로 주소를 생성합니다.",
        links: [
          { title: "HD 지갑 구조 설명", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" },
          { title: "BIP44 표준", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" },
        ],
        tips: "프라이버시 보호를 위해 거래마다 새로운 주소를 사용하는 것이 좋습니다. 대부분의 지갑은 이를 자동으로 처리해줍니다.",
      },
      {
        id: "1-4",
        question: "하드월렛(Ledger, Trezor)과 핫월렛의 보안 차이는?",
        answer:
          "핫월렛은 인터넷에 연결된 지갑(예: 메타마스크)으로 사용이 편리하지만 해킹 위험이 있습니다. 하드월렛은 프라이빗 키를 오프라인 장치에 보관하여 온라인 공격으로부터 훨씬 안전하지만, 사용 시 약간의 번거로움이 있을 수 있습니다. 하드월렛은 물리적 접근이 필요하므로 원격 해킹이 거의 불가능합니다.",
        links: [
          { title: "Ledger 공식 웹사이트", url: "https://www.ledger.com" },
          { title: "Trezor 공식 웹사이트", url: "https://trezor.io" },
          { title: "하드웨어 지갑 비교", url: "https://ethereum.org/en/wallets/find-wallet/" },
        ],
        tips: "큰 금액을 보관할 때는 하드월렛을 사용하고, 일상적인 거래에는 핫월렛을 사용하는 것이 좋습니다.",
      },
      {
        id: "1-5",
        question: "지갑을 복구하는 방법은?",
        answer:
          "지갑 생성 시 받은 시드 구문(복구 구문)을 사용하여 새 기기나 지갑 소프트웨어에서 지갑을 복구할 수 있습니다. 시드 구문은 지갑 복구의 유일한 수단이므로 안전하게 보관해야 합니다. 복구 시에는 정확한 단어 순서와 철자가 중요합니다.",
        links: [
          { title: "MetaMask 지갑 복구 가이드", url: "https://support.metamask.io/hc/en-us/articles/360015289612" },
          { title: "지갑 복구 모범 사례", url: "https://ethereum.org/en/wallets/" },
        ],
        tips: "복구 구문을 입력할 때는 주변에 사람이 없는지 확인하고, 가능하면 오프라인 환경에서 진행하세요.",
      },
    ],
  },
  {
    category: "2. 🔗 Blockchain Basics (블록체인 기초)",
    items: [
      {
        id: "2-1",
        question: "블록체인이란? 중앙 서버와의 차이",
        answer:
          "블록체인은 거래 내역을 '블록'이라는 단위로 기록하고, 이를 '체인'처럼 순차적으로 연결하여 분산된 네트워크 참여자들(노드)이 공동으로 관리하는 기술입니다. 중앙 서버 방식은 단일 주체가 데이터를 통제하지만, 블록체인은 탈중앙화되어 투명성과 보안성이 높습니다. 또한 단일 실패 지점이 없어 더 안정적입니다.",
        links: [
          { title: "블록체인 기초 가이드", url: "https://ethereum.org/en/developers/docs/intro-to-ethereum/" },
          { title: "비트코인 백서", url: "https://bitcoin.org/bitcoin.pdf" },
          { title: "블록체인 시각화 도구", url: "https://andersbrownworth.com/blockchain/" },
        ],
        tips: "블록체인의 핵심은 '신뢰 없는 시스템'입니다. 참여자들이 서로를 신뢰하지 않아도 시스템이 정상 작동합니다.",
      },
      {
        id: "2-2",
        question: "블록, 트랜잭션, 노드, 체인의 관계",
        answer:
          "트랜잭션(거래)은 블록체인에서 발생하는 모든 기록 단위입니다. 여러 트랜잭션이 모여 하나의 블록을 구성하고, 이 블록들이 시간 순서대로 암호학적으로 연결되어 체인을 이룹니다. 노드는 이 블록체인 네트워크에 참여하여 데이터를 저장하고 검증하는 컴퓨터 또는 시스템입니다. 각 블록은 이전 블록의 해시를 포함하여 체인의 무결성을 보장합니다.",
        links: [
          { title: "블록 구조 설명", url: "https://ethereum.org/en/developers/docs/blocks/" },
          { title: "트랜잭션 구조", url: "https://ethereum.org/en/developers/docs/transactions/" },
          { title: "노드 유형별 설명", url: "https://ethereum.org/en/developers/docs/nodes-and-clients/" },
        ],
        tips: "블록체인 탐색기(예: Etherscan)를 사용하면 실제 블록과 트랜잭션 구조를 직접 확인할 수 있습니다.",
      },
      {
        id: "2-3",
        question: "EVM이란 무엇이며 왜 중요할까요?",
        answer:
          "EVM(Ethereum Virtual Machine)은 이더리움 블록체인 위에서 스마트 컨트랙트 코드를 실행하는 가상 환경입니다. 개발자들이 다양한 DApp을 만들 수 있는 기반을 제공하며, 많은 다른 블록체인들이 EVM 호환성을 채택하여 이더리움 생태계와 연결될 수 있게 합니다. EVM은 튜링 완전한 가상 머신으로, 복잡한 로직을 실행할 수 있습니다.",
        links: [
          { title: "EVM 상세 설명", url: "https://ethereum.org/en/developers/docs/evm/" },
          { title: "Solidity 프로그래밍 언어", url: "https://soliditylang.org/" },
          { title: "EVM 호환 체인 목록", url: "https://chainlist.org/" },
        ],
        tips: "EVM 호환성 덕분에 이더리움용 DApp을 다른 체인에서도 쉽게 사용할 수 있습니다.",
      },
      {
        id: "2-4",
        question: "퍼블릭 체인 vs 프라이빗 체인",
        answer:
          "퍼블릭 블록체인(예: 비트코인, 이더리움)은 누구나 네트워크에 참여하고 거래를 검증할 수 있는 개방형 블록체인입니다. 프라이빗 블록체인은 특정 허가된 참여자만 접근하고 사용할 수 있는 폐쇄형 블록체인으로, 주로 기업 환경에서 사용됩니다. 컨소시엄 블록체인은 이 둘의 중간 형태입니다.",
        links: [
          { title: "블록체인 유형 비교", url: "https://ethereum.org/en/developers/docs/networks/" },
          { title: "엔터프라이즈 블록체인", url: "https://consensys.net/blockchain-use-cases/enterprise-ethereum/" },
        ],
        tips: "퍼블릭 체인은 투명성과 탈중앙화를, 프라이빗 체인은 속도와 프라이버시를 중시합니다.",
      },
      {
        id: "2-5",
        question: "트랜잭션 수수료가 발생하는 이유",
        answer:
          "트랜잭션 수수료(가스비)는 블록체인 네트워크에서 거래를 처리하고 블록에 기록하는 노드(채굴자 또는 검증자)에게 지불하는 보상입니다. 네트워크의 보안을 유지하고, 무분별한 트랜잭션 발생을 방지하는 역할을 합니다. 수수료는 네트워크 혼잡도에 따라 변동됩니다.",
        links: [
          { title: "이더리움 가스 설명", url: "https://ethereum.org/en/developers/docs/gas/" },
          { title: "가스 추적기", url: "https://etherscan.io/gastracker" },
          { title: "가스 최적화 팁", url: "https://ethereum.org/en/developers/docs/gas/#tips-to-reduce-gas-costs" },
        ],
        tips: "가스비를 절약하려면 네트워크가 덜 혼잡한 시간대를 이용하거나 Layer 2 솔루션을 사용하세요.",
      },
    ],
  },
  {
    category: "3. 🪙 Token & NFT (토큰 & NFT)",
    items: [
      {
        id: "3-1",
        question: "ERC-20, ERC-721, ERC-1155의 차이",
        answer:
          "ERC-20은 대체 가능한 토큰(Fungible Token, FT)의 표준으로, 각 토큰이 동일한 가치를 지닙니다 (예: 암호화폐). ERC-721은 대체 불가능한 토큰(Non-Fungible Token, NFT)의 표준으로, 각 토큰이 고유한 가치와 정보를 가집니다 (예: 디지털 아트). ERC-1155는 FT와 NFT를 모두 한 컨트랙트에서 관리할 수 있는 다중 토큰 표준으로, 게임 아이템 등에 효율적입니다.",
        links: [
          { title: "ERC-20 표준 문서", url: "https://eips.ethereum.org/EIPS/eip-20" },
          { title: "ERC-721 표준 문서", url: "https://eips.ethereum.org/EIPS/eip-721" },
          { title: "ERC-1155 표준 문서", url: "https://eips.ethereum.org/EIPS/eip-1155" },
          { title: "OpenZeppelin 토큰 구현", url: "https://docs.openzeppelin.com/contracts/4.x/tokens" },
        ],
        tips: "ERC-1155는 가스비를 크게 절약할 수 있어 게임이나 대량의 토큰을 다루는 프로젝트에서 선호됩니다.",
      },
      {
        id: "3-2",
        question: "NFT는 왜 JPEG가 아닌가요?",
        answer:
          "JPEG는 이미지 파일 형식일 뿐이고, NFT는 해당 이미지(또는 다른 디지털 자산)의 소유권과 진위성을 블록체인에 기록한 '디지털 증서'입니다. NFT는 이미지 자체라기보다는, 그 이미지에 대한 고유한 권리를 나타내는 토큰입니다. 블록체인에 저장되는 것은 메타데이터와 소유권 정보이며, 실제 파일은 별도로 저장됩니다.",
        links: [
          { title: "NFT 기초 가이드", url: "https://ethereum.org/en/nft/" },
          { title: "OpenSea NFT 마켓플레이스", url: "https://opensea.io" },
          { title: "NFT 메타데이터 표준", url: "https://docs.opensea.io/docs/metadata-standards" },
        ],
        tips: "NFT를 구매할 때는 메타데이터가 어디에 저장되는지 확인하세요. IPFS나 Arweave 같은 분산 저장소가 더 안전합니다.",
      },
      {
        id: "3-3",
        question: "NFT의 메타데이터는 어디에 저장되나요?",
        answer:
          "NFT의 메타데이터(이름, 설명, 이미지 링크 등)는 온체인(블록체인 직접 저장, 비용 높음) 또는 오프체인(IPFS, Arweave 같은 분산 스토리지 또는 중앙 서버, 비용 낮음)에 저장될 수 있습니다. 대부분의 경우 이미지 파일 자체는 오프체인에 저장하고, 그 링크를 온체인에 기록합니다. 저장 방식에 따라 NFT의 영속성이 달라집니다.",
        links: [
          { title: "IPFS 분산 저장소", url: "https://ipfs.io" },
          { title: "Arweave 영구 저장소", url: "https://arweave.org" },
          { title: "NFT 저장소 비교", url: "https://ethereum.org/en/developers/docs/storage/" },
        ],
        tips: "중앙 서버에 저장된 NFT는 서버가 다운되면 접근할 수 없게 될 수 있습니다. 분산 저장소를 사용하는 NFT가 더 안전합니다.",
      },
      {
        id: "3-4",
        question: "토큰 발행은 어떻게 하나요?",
        answer:
          "토큰 발행은 해당 블록체인(예: 이더리움, 솔라나)의 표준(예: ERC-20)에 맞춰 스마트 컨트랙트를 작성하고 배포함으로써 이루어집니다. 개발 지식이 필요하며, 최근에는 토큰 발행을 도와주는 플랫폼이나 도구도 있습니다. 토큰 이름, 심볼, 총 공급량, 소수점 자릿수 등을 정의해야 합니다.",
        links: [
          { title: "OpenZeppelin 토큰 생성기", url: "https://wizard.openzeppelin.com" },
          { title: "Remix IDE", url: "https://remix.ethereum.org" },
          { title: "토큰 발행 가이드", url: "https://ethereum.org/en/developers/tutorials/erc20-annotated-code/" },
        ],
        tips: "토큰을 발행하기 전에 토크노믹스(토큰 경제학)를 신중히 설계하고, 보안 감사를 받는 것이 좋습니다.",
      },
      {
        id: "3-5",
        question: "NFT 민팅과 에어드랍의 차이",
        answer:
          "NFT 민팅(Minting)은 디지털 자산을 블록체인 상에 NFT로 처음 생성하고 등록하는 과정을 의미하며, 보통 구매 행위가 동반됩니다. 에어드랍(Airdrop)은 특정 조건을 만족하는 사용자들에게 토큰이나 NFT를 무상으로 배포하는 마케팅 또는 보상 방식입니다. 민팅은 생성 과정이고, 에어드랍은 배포 방식입니다.",
        links: [
          { title: "NFT 민팅 가이드", url: "https://ethereum.org/en/developers/tutorials/how-to-mint-an-nft/" },
          { title: "에어드랍 추적 사이트", url: "https://airdrops.io" },
          { title: "NFT 마켓플레이스 비교", url: "https://ethereum.org/en/dapps/?category=collectibles" },
        ],
        tips: "에어드랍을 받을 때는 피싱 사이트를 주의하고, 지갑 권한을 과도하게 요구하는 경우 의심해보세요.",
      },
    ],
  },
  {
    category: "4. 🌉 Bridge & Multichain (브릿지 & 멀티체인)",
    items: [
      {
        id: "4-1",
        question: "블록체인 간 자산 이동이 가능한 이유는?",
        answer:
          "블록체인 브릿지는 서로 다른 블록체인 네트워크 간에 토큰이나 데이터를 전송할 수 있도록 연결하는 기술입니다. 일반적으로 한 체인에서 자산을 락업(Lock)하고 다른 체인에서 그에 상응하는 래핑된(Wrapped) 자산을 발행하거나, 유동성 풀을 통해 교환하는 방식으로 작동합니다. 브릿지는 멀티체인 생태계의 핵심 인프라입니다.",
        links: [
          { title: "브릿지 작동 원리", url: "https://ethereum.org/en/bridges/" },
          { title: "L2Beat 브릿지 비교", url: "https://l2beat.com/bridges" },
          {
            title: "브릿지 보안 가이드",
            url: "https://blog.li.fi/what-are-blockchain-bridges-and-how-can-we-classify-them-560dc6ec05fa",
          },
        ],
        tips: "브릿지를 사용할 때는 항상 공식 웹사이트를 확인하고, 큰 금액은 여러 번에 나누어 전송하는 것이 안전합니다.",
      },
      {
        id: "4-2",
        question: "브릿지 사용법 예시 (Stargate, LayerZero 등)",
        answer:
          "브릿지 사용은 보통 해당 브릿지 웹사이트에 지갑을 연결하고, 보내는 체인과 자산, 받는 체인과 자산을 선택한 후 수량 입력 및 승인, 전송의 과정을 거칩니다. Stargate는 LayerZero 기술을 활용한 브릿지로, 여러 체인 간 네이티브 자산 전송을 지원합니다. 각 브릿지마다 지원하는 체인과 토큰이 다르므로 사전 확인이 필요합니다.",
        links: [
          { title: "Stargate Finance", url: "https://stargate.finance" },
          { title: "LayerZero 프로토콜", url: "https://layerzero.network" },
          { title: "브릿지 비교 사이트", url: "https://defillama.com/bridges" },
        ],
        tips: "브릿지 사용 전에 수수료와 소요 시간을 확인하고, 테스트넷에서 먼저 연습해보는 것이 좋습니다.",
      },
      {
        id: "4-3",
        question: "브릿지 해킹은 왜 자주 발생하나요?",
        answer:
          "브릿지는 여러 블록체인과 상호작용하며 복잡한 스마트 컨트랙트 로직을 가지므로 공격 표면이 넓습니다. 스마트 컨트랙트 취약점, 프라이빗 키 관리 미흡, 검증 로직 오류 등으로 인해 대규모 자금이 예치된 브릿지가 해커의 주요 타겟이 되곤 합니다. 또한 멀티시그 지갑의 키 관리나 오라클 조작 등의 위험도 존재합니다.",
        links: [
          { title: "브릿지 해킹 사례 분석", url: "https://rekt.news/leaderboard/" },
          { title: "브릿지 보안 모범 사례", url: "https://ethereum.org/en/bridges/#bridge-risk" },
          {
            title: "DeFi 보안 가이드",
            url: "https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/",
          },
        ],
        tips: "신뢰할 수 있고 감사를 받은 브릿지만 사용하고, TVL이 높고 오랫동안 운영된 브릿지를 선택하세요.",
      },
      {
        id: "4-4",
        question: "Multichain 환경에서 자산을 안전하게 관리하는 법",
        answer:
          "신뢰할 수 있고 감사를 받은 브릿지를 사용하며, 한 번에 너무 큰 금액을 옮기지 않습니다. 브릿지 사용 전후로 지갑 권한을 점검하고, 필요 없는 권한은 즉시 철회합니다. 자산을 여러 체인에 분산 보관하고, 각 체인의 보안 특성을 이해하는 것이 중요합니다. 또한 각 체인별로 별도의 지갑을 사용하는 것도 고려해볼 수 있습니다.",
        links: [
          { title: "Revoke.cash 권한 관리", url: "https://revoke.cash" },
          { title: "멀티체인 포트폴리오 추적", url: "https://debank.com" },
          { title: "체인별 보안 가이드", url: "https://ethereum.org/en/security/" },
        ],
        tips: "정기적으로 지갑 권한을 점검하고, 사용하지 않는 DApp의 권한은 즉시 철회하세요.",
      },
    ],
  },
  {
    category: "5. 💸 DeFi 101 (디파이 기초)",
    items: [
      {
        id: "5-1",
        question: "DeFi란 무엇인가요?",
        answer:
          "DeFi(Decentralized Finance, 탈중앙화 금융)는 은행이나 증권사 같은 중앙 중개기관 없이, 블록체인과 스마트 컨트랙트를 기반으로 금융 서비스를 제공하는 시스템입니다. 예금, 대출, 거래, 투자 등 다양한 금융 활동을 P2P 방식으로 투명하고 개방적으로 할 수 있습니다. 24/7 운영되며 전 세계 누구나 접근 가능합니다.",
        links: [
          { title: "DeFi 기초 가이드", url: "https://ethereum.org/en/defi/" },
          { title: "DeFi Pulse TVL 추적", url: "https://defipulse.com" },
          { title: "DeFi 프로토콜 비교", url: "https://defillama.com" },
        ],
        tips: "DeFi를 시작할 때는 작은 금액으로 연습하고, 각 프로토콜의 위험성을 충분히 이해한 후 참여하세요.",
      },
      {
        id: "5-2",
        question: "AMM이란? (Uniswap 작동 원리)",
        answer:
          "AMM(Automated Market Maker, 자동화된 시장 조성자)은 전통적인 오더북 방식 대신 수학적 공식을 사용하여 유동성 풀 내에서 토큰 가격을 결정하고 자동으로 거래를 체결하는 탈중앙화 거래소(DEX)의 핵심 메커니즘입니다. 유니스왑은 x*y=k 공식을 사용하는 대표적인 AMM 기반 DEX입니다. 사용자들이 제공한 유동성 풀에서 거래가 이루어집니다.",
        links: [
          { title: "Uniswap 공식 문서", url: "https://docs.uniswap.org" },
          { title: "AMM 작동 원리", url: "https://ethereum.org/en/developers/docs/dexs/" },
          { title: "Uniswap V3 가이드", url: "https://uniswap.org/blog/uniswap-v3" },
        ],
        tips: "AMM에서 거래할 때는 슬리피지를 고려하고, 큰 거래는 여러 번에 나누어 실행하는 것이 좋습니다.",
      },
      {
        id: "5-3",
        question: "유동성 공급자(LP)의 수익 구조",
        answer:
          "유동성 공급자(Liquidity Provider, LP)는 AMM 기반 DEX의 유동성 풀에 자신의 토큰 페어(예: ETH/USDC)를 예치하고, 해당 풀에서 발생하는 거래 수수료의 일부를 보상으로 받습니다. 또한, 프로젝트에 따라 추가적인 LP 토큰 보상을 받을 수도 있습니다. LP는 유동성을 제공한 비율에 따라 수수료를 분배받습니다.",
        links: [
          { title: "LP 수익 계산기", url: "https://apy.vision" },
          { title: "유동성 채굴 가이드", url: "https://ethereum.org/en/developers/docs/dexs/" },
          { title: "LP 위험 관리", url: "https://finematics.com/liquidity-mining-explained/" },
        ],
        tips: "LP를 시작하기 전에 임시적 손실(Impermanent Loss)에 대해 충분히 이해하고, 안정적인 페어부터 시작하세요.",
      },
      {
        id: "5-4",
        question: "impermanent loss란?",
        answer:
          "비영구적 손실(Impermanent Loss)은 AMM 유동성 풀에 자산을 예치했을 때, 예치한 토큰들의 가격 변동으로 인해 단순히 토큰을 보유하고 있었을 경우보다 자산 가치가 낮아지는 현상을 의미합니다. 가격이 원래 비율로 돌아오면 손실이 사라지므로 '비영구적'이라고 불리지만, 실제 손실로 이어질 수 있습니다. 가격 변동이 클수록 손실이 커집니다.",
        links: [
          { title: "Impermanent Loss 계산기", url: "https://dailydefi.org/tools/impermanent-loss-calculator/" },
          { title: "IL 상세 설명", url: "https://finematics.com/impermanent-loss-explained/" },
          {
            title: "IL 최소화 전략",
            url: "https://blog.bancor.network/beginners-guide-to-getting-rekt-by-impermanent-loss-7c9510cb2f22",
          },
        ],
        tips: "상관관계가 높은 토큰 페어(예: ETH/stETH)를 선택하면 임시적 손실을 줄일 수 있습니다.",
      },
      {
        id: "5-5",
        question: "Lending Protocol의 원리 (Aave, Compound)",
        answer:
          "대출 프로토콜(Lending Protocol)은 사용자들이 암호화폐를 예치하여 이자를 받거나, 다른 암호화폐를 담보로 빌릴 수 있는 DeFi 서비스입니다. Aave와 Compound는 대표적인 대출 프로토콜로, 스마트 컨트랙트를 통해 대출 조건, 이자율, 담보 관리 등을 자동화합니다. 이자율은 공급과 수요에 따라 실시간으로 변동됩니다.",
        links: [
          { title: "Aave 프로토콜", url: "https://aave.com" },
          { title: "Compound Finance", url: "https://compound.finance" },
          { title: "대출 프로토콜 비교", url: "https://defiprime.com/decentralized_lending" },
        ],
        tips: "담보 비율을 충분히 유지하고, 청산 위험을 항상 모니터링하세요. 변동성이 큰 자산은 담보로 사용할 때 주의가 필요합니다.",
      },
    ],
  },
  {
    category: "6. 🧠 ZK & Layer 2 (영지식 증명 & 레이어 2)",
    items: [
      {
        id: "6-1",
        question: "Rollup이란? 왜 필요한가요?",
        answer:
          "롤업은 이더리움과 같은 레이어 1(L1) 블록체인의 확장성 문제를 해결하기 위한 레이어 2(L2) 솔루션입니다. 여러 거래를 L2에서 처리하고, 그 결과(또는 증명)만을 L1에 기록하여 L1의 부담을 줄이고 거래 처리 속도를 높이며 수수료를 낮춥니다. 이더리움의 보안성을 상속받으면서도 확장성을 크게 개선할 수 있습니다.",
        links: [
          { title: "롤업 기초 가이드", url: "https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/" },
          { title: "L2Beat 롤업 비교", url: "https://l2beat.com" },
          { title: "롤업 생태계 현황", url: "https://l2fees.info" },
        ],
        tips: "롤업을 사용할 때는 출금 시간과 수수료를 미리 확인하고, 각 롤업의 특성을 이해한 후 선택하세요.",
      },
      {
        id: "6-2",
        question: "Optimistic Rollup vs ZK Rollup",
        answer:
          "옵티미스틱 롤업은 L2 거래가 기본적으로 유효하다고 가정하고, 사기 증명(fraud proof)을 통해 오류를 잡아냅니다. 구현이 상대적으로 쉽지만, 출금 시 분쟁 해결 기간(7일)이 필요합니다. ZK 롤업은 영지식 증명(validity proof)을 사용하여 L2 거래의 유효성을 L1에서 즉시 검증합니다. 더 빠르고 안전하지만, 기술이 복잡하고 EVM 호환성 구현이 어렵습니다.",
        links: [
          { title: "Optimism 공식 문서", url: "https://docs.optimism.io" },
          { title: "Arbitrum 가이드", url: "https://docs.arbitrum.io" },
          { title: "ZK 롤업 비교", url: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/" },
        ],
        tips: "빠른 출금이 필요하면 ZK 롤업을, EVM 호환성이 중요하면 옵티미스틱 롤업을 고려해보세요.",
      },
      {
        id: "6-3",
        question: "zkSync Era, StarkNet, Scroll 비교",
        answer:
          "이들은 모두 ZK 롤업 기술을 사용하는 대표적인 L2 솔루션입니다. zkSync Era는 EVM 호환성을 강조하며 Solidity 개발자들이 쉽게 이전할 수 있도록 합니다. StarkNet은 자체 프로그래밍 언어인 Cairo를 사용하여 더 높은 성능과 유연성을 추구합니다. Scroll은 EVM과 바이트코드 수준에서 최대한의 호환성을 목표로 합니다. 각각 다른 접근 방식으로 확장성 문제를 해결합니다.",
        links: [
          { title: "zkSync Era", url: "https://zksync.io" },
          { title: "StarkNet", url: "https://starknet.io" },
          { title: "Scroll", url: "https://scroll.io" },
          { title: "ZK 롤업 생태계", url: "https://l2beat.com/scaling/zk-rollups" },
        ],
        tips: "각 ZK 롤업의 생태계와 지원하는 DApp을 확인한 후, 사용 목적에 맞는 플랫폼을 선택하세요.",
      },
    ],
  },
  {
    category: "7. 🚨 Safety & Scams (보안 & 사기)",
    items: [
      {
        id: "7-1",
        question: "피싱 링크 구별법",
        answer:
          "공식 웹사이트 주소와 철자가 정확히 일치하는지 확인하고, HTTPS 보안 연결인지 확인합니다. 출처가 불분명한 링크나 이메일, DM은 클릭하지 않고, 단축 URL은 원래 주소를 확인하기 전까지 주의합니다. 갑작스러운 경고나 긴급한 요청을 하는 메시지는 의심해야 합니다. 브라우저 북마크를 사용하거나 공식 소셜 미디어에서 링크를 확인하세요.",
        links: [
          { title: "피싱 사이트 신고", url: "https://safebrowsing.google.com/safebrowsing/report_phish/" },
          { title: "Web3 보안 가이드", url: "https://ethereum.org/en/security/" },
          { title: "MetaMask 보안 팁", url: "https://support.metamask.io/hc/en-us/articles/360015489591" },
        ],
        tips: "의심스러운 링크는 절대 클릭하지 말고, 항상 공식 웹사이트를 북마크해두고 사용하세요.",
      },
      {
        id: "7-2",
        question: "지갑 권한 관리 (Revoke)",
        answer:
          "DApp 사용 시 스마트 컨트랙트에 특정 토큰에 대한 지출 한도(allowance)를 부여하게 됩니다. 사용하지 않는 DApp이나 의심스러운 컨트랙트에 부여된 권한은 Revoke.cash와 같은 도구를 사용하여 정기적으로 확인하고 철회하여 자산을 보호해야 합니다. 권한을 철회하면 해당 컨트랙트는 더 이상 토큰에 접근할 수 없습니다.",
        links: [
          { title: "Revoke.cash", url: "https://revoke.cash" },
          { title: "Etherscan 토큰 승인", url: "https://etherscan.io/tokenapprovalchecker" },
          { title: "지갑 보안 체크리스트", url: "https://ethereum.org/en/security/" },
        ],
        tips: "매월 정기적으로 지갑 권한을 점검하고, 사용하지 않는 DApp의 권한은 즉시 철회하세요.",
      },
      {
        id: "7-3",
        question: "Sybil 공격이란?",
        answer:
          "시빌 공격은 한 명의 공격자가 다수의 가짜 신원(계정)을 생성하여 네트워크나 시스템에 부당한 영향력을 행사하려는 공격입니다. 거버넌스 투표 조작, 에어드랍 부정 수령, 평판 시스템 조작 등에 악용될 수 있습니다. 블록체인에서는 신원 확인이 어려워 이런 공격이 특히 문제가 됩니다.",
        links: [
          {
            title: "Sybil 저항성 설계",
            url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/attack-and-defense/",
          },
          { title: "Gitcoin Passport", url: "https://passport.gitcoin.co" },
          { title: "신원 증명 솔루션", url: "https://ethereum.org/en/decentralized-identity/" },
        ],
        tips: "에어드랍이나 거버넌스 참여 시 Sybil 방지 메커니즘이 있는 프로젝트를 선호하세요.",
      },
      {
        id: "7-4",
        question: "프로젝트 진위 판단 기준",
        answer:
          "팀원의 신원과 경력 공개 여부, 백서의 구체성과 실현 가능성, 기술적 기반과 감사 보고서, 활발하고 건강한 커뮤니티, 명확한 로드맵과 실제 개발 진행 상황, 토크노믹스의 합리성 등을 종합적으로 고려해야 합니다. 과도한 수익률 약속이나 익명 팀은 주의해야 합니다. GitHub 활동, 파트너십, 투자자 정보도 중요한 판단 기준입니다.",
        links: [
          { title: "프로젝트 분석 가이드", url: "https://ethereum.org/en/developers/docs/dapps/" },
          { title: "스마트 컨트랙트 감사", url: "https://consensys.net/diligence/" },
          { title: "DeFi 프로젝트 평가", url: "https://defisafety.com" },
        ],
        tips: "DYOR(Do Your Own Research)를 철저히 하고, 여러 출처에서 정보를 교차 검증하세요.",
      },
    ],
  },
  {
    category: "8. 🛠 Tools & Services (도구 & 서비스)",
    items: [
      {
        id: "8-1",
        question: "Debank, Zapper, Zerion 비교",
        answer:
          "이들은 모두 사용자의 여러 지갑과 다양한 DeFi 프로토콜에 분산된 자산을 한 곳에서 추적하고 관리할 수 있는 포트폴리오 대시보드 서비스입니다. DeBank는 소셜 기능과 Web3 신원에 중점을 두고, Zapper는 DeFi 포지션 관리와 수익률 추적에 특화되어 있으며, Zerion은 모바일 앱과 사용자 경험에 강점이 있습니다. 지원하는 체인, 프로토콜, 제공 기능에서 약간의 차이가 있습니다.",
        links: [
          { title: "DeBank", url: "https://debank.com" },
          { title: "Zapper", url: "https://zapper.fi" },
          { title: "Zerion", url: "https://zerion.io" },
        ],
        tips: "각 플랫폼의 특장점을 파악하고, 본인의 사용 패턴에 맞는 도구를 선택하세요.",
      },
      {
        id: "8-2",
        question: "Dune Analytics 사용법",
        answer:
          "Dune Analytics는 사용자들이 직접 SQL 쿼리를 작성하여 블록체인 데이터를 분석하고 시각화(대시보드)할 수 있는 플랫폼입니다. 다른 사람이 만든 대시보드를 보거나, 직접 쿼리를 작성하여 특정 프로젝트의 사용자 수, 거래량, TVL 변화 등을 분석할 수 있습니다. 블록체인 데이터가 테이블 형태로 정리되어 있어 SQL로 쉽게 조회할 수 있습니다.",
        links: [
          { title: "Dune Analytics", url: "https://dune.com" },
          { title: "Dune 쿼리 가이드", url: "https://docs.dune.com" },
          { title: "인기 대시보드", url: "https://dune.com/browse/dashboards" },
        ],
        tips: "SQL을 모르더라도 기존 쿼리를 복사해서 수정하면서 배울 수 있습니다.",
      },
      {
        id: "8-3",
        question: "Etherscan으로 트랜잭션 조회하는 법",
        answer:
          "Etherscan(이더리움 블록 탐색기)에서 트랜잭션 해시(TxID), 지갑 주소, 컨트랙트 주소 등을 검색하여 해당 거래의 상세 정보(보낸 사람, 받는 사람, 금액, 가스비, 상태 등)를 확인할 수 있습니다. 토큰 전송 내역, 스마트 컨트랙트 호출 정보, 내부 거래(Internal Txns) 등도 볼 수 있습니다. 실패한 거래의 경우 실패 이유도 확인할 수 있습니다.",
        links: [
          { title: "Etherscan", url: "https://etherscan.io" },
          { title: "Etherscan 사용 가이드", url: "https://info.etherscan.com" },
          { title: "다른 체인 탐색기", url: "https://chainlist.org" },
        ],
        tips: "거래가 실패했을 때는 'Logs' 탭에서 자세한 오류 정보를 확인할 수 있습니다.",
      },
    ],
  },
  {
    category: "9. 🧱 DAO & Governance (DAO & 거버넌스)",
    items: [
      {
        id: "9-1",
        question: "DAO란 무엇인가요?",
        answer:
          "DAO(Decentralized Autonomous Organization, 탈중앙화 자율 조직)는 중앙 권위체 없이, 스마트 컨트랙트에 의해 정의된 규칙에 따라 구성원들이 공동으로 의사결정을 내리고 운영하는 조직입니다. 투명성과 커뮤니티 참여를 강조하며, 거버넌스 토큰을 통해 의사결정에 참여할 수 있습니다. 전통적인 기업 구조와 달리 계층적 관리 없이 운영됩니다.",
        links: [
          { title: "DAO 기초 가이드", url: "https://ethereum.org/en/dao/" },
          { title: "Aragon DAO 플랫폼", url: "https://aragon.org" },
          { title: "DAO 사례 연구", url: "https://deepdao.io" },
        ],
        tips: "DAO에 참여하기 전에 해당 조직의 목적, 거버넌스 구조, 토크노믹스를 충분히 이해하세요.",
      },
      {
        id: "9-2",
        question: "거버넌스 토큰의 역할",
        answer:
          "거버넌스 토큰은 DAO의 의사결정에 참여할 수 있는 권한(투표권)을 부여하는 암호화폐입니다. 토큰 보유자들은 프로토콜의 변경, 자금 사용, 새로운 기능 추가, 파라미터 조정 등에 대한 제안을 하고 투표할 수 있습니다. 보유량에 따라 투표력이 결정되며, 일부 프로젝트에서는 토큰을 스테이킹해야 투표권을 얻을 수 있습니다.",
        links: [
          { title: "거버넌스 토큰 가이드", url: "https://ethereum.org/en/governance/" },
          { title: "Snapshot 투표 플랫폼", url: "https://snapshot.org" },
          { title: "거버넌스 참여 방법", url: "https://blog.aragon.org/what-is-governance/" },
        ],
        tips: "거버넌스에 참여할 때는 제안 내용을 충분히 검토하고, 커뮤니티 토론에 적극 참여하세요.",
      },
      {
        id: "9-3",
        question: "포럼 → 제안 → 투표의 구조",
        answer:
          "많은 DAO에서 의사결정은 먼저 커뮤니티 포럼(예: Discourse, Discord)에서 아이디어를 논의하고 의견을 수렴하는 단계를 거칩니다. 이후 정식 제안(Proposal) 형태로 만들어져 Snapshot이나 온체인 투표 시스템을 통해 투표가 진행됩니다. 일반적으로 온체인 투표는 가스비가 들지만 구속력이 있고, 오프체인 투표(Snapshot)는 무료지만 신호 투표 성격이 강합니다.",
        links: [
          { title: "Snapshot 투표", url: "https://snapshot.org" },
          { title: "Tally 거버넌스", url: "https://tally.xyz" },
          { title: "거버넌스 프로세스", url: "https://ethereum.org/en/governance/" },
        ],
        tips: "투표하기 전에 포럼에서 충분한 토론이 이루어졌는지 확인하고, 제안의 장단점을 신중히 검토하세요.",
      },
    ],
  },
  {
    category: "10. 📈 Airdrops & Missions (에어드랍 & 미션)",
    items: [
      {
        id: "10-1",
        question: "에어드랍은 왜 존재하나요?",
        answer:
          "에어드랍은 프로젝트 초기에 사용자를 확보하고 커뮤니티를 구축하며, 토큰을 분산시키고, 프로젝트를 홍보하기 위한 마케팅 전략으로 사용됩니다. 또한, 특정 활동에 대한 보상이나 거버넌스 참여를 독려하기 위해서도 진행됩니다. 초기 사용자들에게 보상을 제공하여 네트워크 효과를 만들어내는 것이 주요 목적입니다.",
        links: [
          { title: "에어드랍 추적 사이트", url: "https://airdrops.io" },
          { title: "DeFiLlama 에어드랍", url: "https://defillama.com/airdrops" },
          { title: "에어드랍 안전 가이드", url: "https://ethereum.org/en/security/" },
        ],
        tips: "에어드랍을 받을 때는 피싱 사이트를 주의하고, 과도한 권한을 요구하는 경우 의심해보세요.",
      },
      {
        id: "10-2",
        question: "Galxe, Zealy, TaskOn 비교",
        answer:
          "이들은 Web3 프로젝트들이 사용자를 위한 다양한 미션(퀘스트)을 제공하고, 참여자들에게 보상(NFT, 포인트, 화이트리스트 등)을 지급할 수 있도록 돕는 플랫폼입니다. Galxe는 가장 큰 규모의 퀘스트 플랫폼이고, Zealy는 커뮤니티 참여에 중점을 두며, TaskOn은 아시아 시장에 특화되어 있습니다. 프로젝트 홍보, 커뮤니티 참여 증대, 잠재적 에어드랍 대상자 필터링 등에 활용됩니다.",
        links: [
          { title: "Galxe", url: "https://galxe.com" },
          { title: "Zealy", url: "https://zealy.io" },
          { title: "TaskOn", url: "https://taskon.xyz" },
        ],
        tips: "퀘스트 참여 시 개인정보 보호에 주의하고, 의심스러운 권한 요청은 거절하세요.",
      },
    ],
  },
]

export const web3DataEn = [
  {
    category: "1. 👛 Wallet & Identity",
    items: [
      {
        id: "1-1",
        question: "What is MetaMask and how do I install it?",
        answer:
          "MetaMask is a cryptocurrency wallet in the form of a browser extension and mobile app, primarily used to interact with Ethereum and EVM-compatible blockchains. You can download and install it from the official website (metamask.io), then follow the instructions to create a new wallet or recover an existing one. The most important step after installation is to securely backup your seed phrase.",
        links: [
          { title: "MetaMask Official Website", url: "https://metamask.io" },
          { title: "MetaMask Installation Guide", url: "https://support.metamask.io/hc/en-us/articles/360015489531" },
          { title: "MetaMask Security Guide", url: "https://support.metamask.io/hc/en-us/articles/360015489591" },
        ],
        tips: "Never store your seed phrase online or share it with others. Be cautious of phishing sites and always download only from the official website.",
      },
      {
        id: "1-2",
        question: "What's the difference between private keys and seed phrases?",
        answer:
          "A private key is a unique cryptographic code that acts like a password to access assets in a specific account. A seed phrase (or recovery phrase) is a combination of 12-24 words used to generate these private keys and recover the entire wallet. One seed phrase can generate multiple private keys and wallet addresses, making the seed phrase a higher-level concept.",
        links: [
          {
            title: "BIP39 Seed Phrase Standard",
            url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",
          },
          { title: "Wallet Security Best Practices", url: "https://ethereum.org/en/wallets/" },
        ],
        tips: "Since the seed phrase is the only way to recover your wallet, store it physically in a safe place. Avoid storing it digitally and write it down on paper instead.",
      },
      {
        id: "1-3",
        question: "How are wallet addresses generated and how many can you create?",
        answer:
          "Wallet addresses are derived from public keys and serve as unique identifiers for sending and receiving cryptocurrency. One seed phrase can theoretically generate nearly infinite wallet addresses (exactly 2^160). This is possible thanks to HD (Hierarchical Deterministic) wallet structure, which systematically generates addresses following the BIP44 standard.",
        links: [
          { title: "HD Wallet Structure", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" },
          { title: "BIP44 Standard", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" },
        ],
        tips: "For privacy protection, it's recommended to use a new address for each transaction. Most wallets handle this automatically.",
      },
      {
        id: "1-4",
        question: "Security differences between hardware wallets (Ledger, Trezor) and hot wallets?",
        answer:
          "Hot wallets are internet-connected wallets (like MetaMask) that are convenient to use but vulnerable to hacking. Hardware wallets store private keys on offline devices, making them much safer from online attacks, though they may be slightly less convenient to use. Hardware wallets require physical access, making remote hacking nearly impossible.",
        links: [
          { title: "Ledger Official Website", url: "https://www.ledger.com" },
          { title: "Trezor Official Website", url: "https://trezor.io" },
          { title: "Hardware Wallet Comparison", url: "https://ethereum.org/en/wallets/find-wallet/" },
        ],
        tips: "Use hardware wallets for storing large amounts and hot wallets for daily transactions.",
      },
      {
        id: "1-5",
        question: "How to recover a wallet?",
        answer:
          "You can recover your wallet using the seed phrase (recovery phrase) you received when creating the wallet on a new device or wallet software. The seed phrase is the only way to recover your wallet, so it must be stored safely. When recovering, the exact word order and spelling are crucial.",
        links: [
          {
            title: "MetaMask Wallet Recovery Guide",
            url: "https://support.metamask.io/hc/en-us/articles/360015289612",
          },
          { title: "Wallet Recovery Best Practices", url: "https://ethereum.org/en/wallets/" },
        ],
        tips: "When entering your recovery phrase, make sure no one is around and preferably do it in an offline environment.",
      },
    ],
  },
  {
    category: "2. 🔗 Blockchain Basics",
    items: [
      {
        id: "2-1",
        question: "What is blockchain? How is it different from central servers?",
        answer:
          "Blockchain is a technology that records transaction history in units called 'blocks' and connects them sequentially like a 'chain', managed collectively by distributed network participants (nodes). While central server systems are controlled by a single entity, blockchain is decentralized, offering higher transparency and security. It also has no single point of failure, making it more stable.",
        links: [
          { title: "Blockchain Basics Guide", url: "https://ethereum.org/en/developers/docs/intro-to-ethereum/" },
          { title: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" },
          { title: "Blockchain Visualization Tool", url: "https://andersbrownworth.com/blockchain/" },
        ],
        tips: "The core of blockchain is a 'trustless system'. The system operates normally even when participants don't trust each other.",
      },
      {
        id: "2-2",
        question: "Relationship between blocks, transactions, nodes, and chains",
        answer:
          "Transactions are all record units that occur on the blockchain. Multiple transactions come together to form one block, and these blocks are cryptographically connected in chronological order to form a chain. Nodes are computers or systems that participate in this blockchain network to store and verify data. Each block contains the hash of the previous block to ensure chain integrity.",
        links: [
          { title: "Block Structure Explanation", url: "https://ethereum.org/en/developers/docs/blocks/" },
          { title: "Transaction Structure", url: "https://ethereum.org/en/developers/docs/transactions/" },
          { title: "Node Types Explanation", url: "https://ethereum.org/en/developers/docs/nodes-and-clients/" },
        ],
        tips: "You can directly check actual block and transaction structures using blockchain explorers like Etherscan.",
      },
      {
        id: "2-3",
        question: "What is EVM and why is it important?",
        answer:
          "EVM (Ethereum Virtual Machine) is a virtual environment that executes smart contract code on the Ethereum blockchain. It provides the foundation for developers to create various DApps, and many other blockchains adopt EVM compatibility to connect with the Ethereum ecosystem. EVM is a Turing-complete virtual machine capable of executing complex logic.",
        links: [
          { title: "EVM Detailed Explanation", url: "https://ethereum.org/en/developers/docs/evm/" },
          { title: "Solidity Programming Language", url: "https://soliditylang.org/" },
          { title: "EVM Compatible Chains List", url: "https://chainlist.org/" },
        ],
        tips: "Thanks to EVM compatibility, DApps built for Ethereum can easily be used on other chains.",
      },
      {
        id: "2-4",
        question: "Public chains vs Private chains",
        answer:
          "Public blockchains (like Bitcoin, Ethereum) are open blockchains where anyone can participate in the network and verify transactions. Private blockchains are closed blockchains where only specific authorized participants can access and use them, mainly used in enterprise environments. Consortium blockchains are a middle ground between these two.",
        links: [
          { title: "Blockchain Types Comparison", url: "https://ethereum.org/en/developers/docs/networks/" },
          { title: "Enterprise Blockchain", url: "https://consensys.net/blockchain-use-cases/enterprise-ethereum/" },
        ],
        tips: "Public chains prioritize transparency and decentralization, while private chains focus on speed and privacy.",
      },
      {
        id: "2-5",
        question: "Why do transaction fees occur?",
        answer:
          "Transaction fees (gas fees) are rewards paid to nodes (miners or validators) that process transactions and record them in blocks on the blockchain network. They serve to maintain network security and prevent indiscriminate transaction generation. Fees fluctuate based on network congestion.",
        links: [
          { title: "Ethereum Gas Explanation", url: "https://ethereum.org/en/developers/docs/gas/" },
          { title: "Gas Tracker", url: "https://etherscan.io/gastracker" },
          {
            title: "Gas Optimization Tips",
            url: "https://ethereum.org/en/developers/docs/gas/#tips-to-reduce-gas-costs",
          },
        ],
        tips: "To save on gas fees, use the network during less congested times or use Layer 2 solutions.",
      },
    ],
  },
  {
    category: "3. 🪙 Token & NFT",
    items: [
      {
        id: "3-1",
        question: "Difference between ERC-20, ERC-721, and ERC-1155",
        answer:
          "ERC-20 is the standard for fungible tokens (FT), where each token has the same value (e.g., cryptocurrency). ERC-721 is the standard for non-fungible tokens (NFT), where each token has unique value and information (e.g., digital art). ERC-1155 is a multi-token standard that can manage both FTs and NFTs in one contract, making it efficient for game items, etc.",
        links: [
          { title: "ERC-20 Standard Document", url: "https://eips.ethereum.org/EIPS/eip-20" },
          { title: "ERC-721 Standard Document", url: "https://eips.ethereum.org/EIPS/eip-721" },
          { title: "ERC-1155 Standard Document", url: "https://eips.ethereum.org/EIPS/eip-1155" },
          { title: "OpenZeppelin Token Implementation", url: "https://docs.openzeppelin.com/contracts/4.x/tokens" },
        ],
        tips: "ERC-1155 can significantly save on gas fees, making it preferred in games or projects dealing with large amounts of tokens.",
      },
      {
        id: "3-2",
        question: "Why isn't an NFT just a JPEG?",
        answer:
          "JPEG is just an image file format, while an NFT is a 'digital certificate' that records the ownership and authenticity of that image (or other digital asset) on the blockchain. An NFT is not the image itself, but rather a token that represents the unique rights to that image. What is stored on the blockchain is metadata and ownership information, while the actual file is stored separately.",
        links: [
          { title: "NFT Basics Guide", url: "https://ethereum.org/en/nft/" },
          { title: "OpenSea NFT Marketplace", url: "https://opensea.io" },
          { title: "NFT Metadata Standards", url: "https://docs.opensea.io/docs/metadata-standards" },
        ],
        tips: "When purchasing an NFT, check where the metadata is stored. Decentralized storage like IPFS or Arweave is safer.",
      },
      {
        id: "3-3",
        question: "Where is NFT metadata stored?",
        answer:
          "NFT metadata (name, description, image link, etc.) can be stored on-chain (directly on the blockchain, high cost) or off-chain (decentralized storage like IPFS, Arweave, or a central server, low cost). In most cases, the image file itself is stored off-chain, and the link to it is recorded on-chain. The persistence of the NFT varies depending on the storage method.",
        links: [
          { title: "IPFS Decentralized Storage", url: "https://ipfs.io" },
          { title: "Arweave Permanent Storage", url: "https://arweave.org" },
          { title: "NFT Storage Comparison", url: "https://ethereum.org/en/developers/docs/storage/" },
        ],
        tips: "NFTs stored on a central server may become inaccessible if the server goes down. NFTs using decentralized storage are safer.",
      },
      {
        id: "3-4",
        question: "How do you issue a token?",
        answer:
          "Token issuance is done by writing and deploying a smart contract that conforms to the standard (e.g., ERC-20) of the corresponding blockchain (e.g., Ethereum, Solana). Development knowledge is required, and recently there have been platforms or tools that help with token issuance. You need to define the token name, symbol, total supply, decimal places, etc.",
        links: [
          { title: "OpenZeppelin Token Generator", url: "https://wizard.openzeppelin.com" },
          { title: "Remix IDE", url: "https://remix.ethereum.org" },
          { title: "Token Issuance Guide", url: "https://ethereum.org/en/developers/tutorials/erc20-annotated-code/" },
        ],
        tips: "Before issuing a token, it is recommended to carefully design tokenomics (token economics) and get a security audit.",
      },
      {
        id: "3-5",
        question: "Difference between NFT minting and airdrop",
        answer:
          "NFT minting means the process of initially creating and registering a digital asset as an NFT on the blockchain, usually accompanied by a purchase. An airdrop is a marketing or reward method that distributes tokens or NFTs for free to users who meet certain conditions. Minting is the creation process, and airdrop is the distribution method.",
        links: [
          { title: "NFT Minting Guide", url: "https://ethereum.org/en/developers/tutorials/how-to-mint-an-nft/" },
          { title: "Airdrop Tracking Site", url: "https://airdrops.io" },
          { title: "NFT Marketplace Comparison", url: "https://ethereum.org/en/dapps/?category=collectibles" },
        ],
        tips: "When receiving an airdrop, be careful of phishing sites and be suspicious if they ask for excessive wallet permissions.",
      },
    ],
  },
  {
    category: "4. 🌉 Bridge & Multichain",
    items: [
      {
        id: "4-1",
        question: "Why is asset transfer possible between blockchains?",
        answer:
          "A blockchain bridge is a technology that connects different blockchain networks to enable the transfer of tokens or data between them. It typically works by locking up assets on one chain and issuing corresponding wrapped assets on another chain, or by exchanging them through a liquidity pool. Bridges are a key infrastructure of the multichain ecosystem.",
        links: [
          { title: "How Bridges Work", url: "https://ethereum.org/en/bridges/" },
          { title: "L2Beat Bridge Comparison", url: "https://l2beat.com/bridges" },
          {
            title: "Bridge Security Guide",
            url: "https://blog.li.fi/what-are-blockchain-bridges-and-how-can-we-classify-them-560dc6ec05fa",
          },
        ],
        tips: "When using a bridge, always check the official website and it is safer to send large amounts in multiple installments.",
      },
      {
        id: "4-2",
        question: "Example of how to use a bridge (Stargate, LayerZero, etc.)",
        answer:
          "Using a bridge usually involves connecting a wallet to the bridge website, selecting the sending chain and asset, the receiving chain and asset, then entering the quantity, approving, and transferring. Stargate is a bridge that utilizes LayerZero technology and supports native asset transfers between multiple chains. Each bridge supports different chains and tokens, so it is necessary to check in advance.",
        links: [
          { title: "Stargate Finance", url: "https://stargate.finance" },
          { title: "LayerZero Protocol", url: "https://layerzero.network" },
          { title: "Bridge Comparison Site", url: "https://defillama.com/bridges" },
        ],
        tips: "Before using a bridge, check the fees and time required, and it is recommended to practice on the testnet first.",
      },
      {
        id: "4-3",
        question: "Why do bridge hacks happen so often?",
        answer:
          "Bridges have a large attack surface because they interact with multiple blockchains and have complex smart contract logic. Large amounts of funds deposited in bridges are often major targets for hackers due to smart contract vulnerabilities, poor private key management, and verification logic errors. There are also risks such as key management of multi-signature wallets and oracle manipulation.",
        links: [
          { title: "Bridge Hack Case Analysis", url: "https://rekt.news/leaderboard/" },
          { title: "Bridge Security Best Practices", url: "https://ethereum.org/en/bridges/#bridge-risk" },
          {
            title: "DeFi Security Guide",
            url: "https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/",
          },
        ],
        tips: "Use only trusted and audited bridges, and choose bridges with high TVL and long operating history.",
      },
      {
        id: "4-4",
        question: "How to safely manage assets in a Multichain environment",
        answer:
          "Use trusted and audited bridges and do not move too much money at once. Check wallet permissions before and after using the bridge, and revoke unnecessary permissions immediately. It is important to diversify assets across multiple chains and understand the security characteristics of each chain. You may also consider using separate wallets for each chain.",
        links: [
          { title: "Revoke.cash Permission Management", url: "https://revoke.cash" },
          { title: "Multichain Portfolio Tracking", url: "https://debank.com" },
          { title: "Chain-Specific Security Guide", url: "https://ethereum.org/en/security/" },
        ],
        tips: "Check your wallet permissions regularly and revoke permissions for DApps you don't use immediately.",
      },
    ],
  },
  {
    category: "5. 💸 DeFi 101",
    items: [
      {
        id: "5-1",
        question: "What is DeFi?",
        answer:
          "DeFi (Decentralized Finance) is a system that provides financial services based on blockchain and smart contracts without central intermediaries such as banks or securities companies. Various financial activities such as deposits, loans, transactions, and investments can be done in a P2P manner transparently and openly. It operates 24/7 and is accessible to anyone worldwide.",
        links: [
          { title: "DeFi Basics Guide", url: "https://ethereum.org/en/defi/" },
          { title: "DeFi Pulse TVL Tracking", url: "https://defipulse.com" },
          { title: "DeFi Protocol Comparison", url: "https://defillama.com" },
        ],
        tips: "When starting DeFi, practice with small amounts and participate after fully understanding the risks of each protocol.",
      },
      {
        id: "5-2",
        question: "What is AMM? (How Uniswap works)",
        answer:
          "AMM (Automated Market Maker) is a core mechanism of a decentralized exchange (DEX) that determines token prices and automatically executes transactions within a liquidity pool using mathematical formulas instead of the traditional order book method. Uniswap is a representative AMM-based DEX that uses the x*y=k formula. Transactions are made from the liquidity pool provided by users.",
        links: [
          { title: "Uniswap Official Documentation", url: "https://docs.uniswap.org" },
          { title: "How AMM Works", url: "https://ethereum.org/en/developers/docs/dexs/" },
          { title: "Uniswap V3 Guide", url: "https://uniswap.org/blog/uniswap-v3" },
        ],
        tips: "When trading on AMM, consider slippage and it is recommended to execute large transactions in multiple installments.",
      },
      {
        id: "5-3",
        question: "Profit structure of liquidity providers (LPs)",
        answer:
          "Liquidity Providers (LPs) deposit their token pairs (e.g., ETH/USDC) into the liquidity pool of an AMM-based DEX and receive a portion of the transaction fees generated from that pool as compensation. In addition, additional LP token rewards may be received depending on the project. LPs receive fees distributed according to the proportion of liquidity provided.",
        links: [
          { title: "LP Profit Calculator", url: "https://apy.vision" },
          { title: "Liquidity Mining Guide", url: "https://ethereum.org/en/developers/docs/dexs/" },
          { title: "LP Risk Management", url: "https://finematics.com/liquidity-mining-explained/" },
        ],
        tips: "Before starting LP, fully understand Impermanent Loss and start with stable pairs.",
      },
      {
        id: "5-4",
        question: "What is impermanent loss?",
        answer:
          "Impermanent Loss means the phenomenon in which the asset value becomes lower than if you had simply held the tokens due to price fluctuations of the deposited tokens when you deposit assets into the AMM liquidity pool. It is called 'non-permanent' because the loss disappears when the price returns to its original ratio, but it can lead to actual loss. The greater the price fluctuation, the greater the loss.",
        links: [
          { title: "Impermanent Loss Calculator", url: "https://dailydefi.org/tools/impermanent-loss-calculator/" },
          { title: "IL Detailed Explanation", url: "https://finematics.com/impermanent-loss-explained/" },
          {
            title: "IL Minimization Strategy",
            url: "https://blog.bancor.network/beginners-guide-to-getting-rekt-by-impermanent-loss-7c9510cb2f22",
          },
        ],
        tips: "You can reduce impermanent loss by selecting token pairs with high correlation (e.g., ETH/stETH).",
      },
      {
        id: "5-5",
        question: "Principle of Lending Protocol (Aave, Compound)",
        answer:
          "A Lending Protocol is a DeFi service that allows users to deposit cryptocurrencies to earn interest or borrow other cryptocurrencies with collateral. Aave and Compound are representative lending protocols that automate loan conditions, interest rates, and collateral management through smart contracts. Interest rates fluctuate in real time depending on supply and demand.",
        links: [
          { title: "Aave Protocol", url: "https://aave.com" },
          { title: "Compound Finance", url: "https://compound.finance" },
          { title: "Lending Protocol Comparison", url: "https://defiprime.com/decentralized_lending" },
        ],
        tips: "Maintain a sufficient collateral ratio and always monitor liquidation risk. Be careful when using volatile assets as collateral.",
      },
    ],
  },
  {
    category: "6. 🧠 ZK & Layer 2",
    items: [
      {
        id: "6-1",
        question: "What is Rollup? Why is it needed?",
        answer:
          "Rollup is a Layer 2 (L2) solution to solve the scalability problem of Layer 1 (L1) blockchains such as Ethereum. It processes multiple transactions in L2 and records only the results (or proofs) in L1 to reduce the burden on L1, increase transaction processing speed, and lower fees. It can greatly improve scalability while inheriting the security of Ethereum.",
        links: [
          { title: "Rollup Basics Guide", url: "https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/" },
          { title: "L2Beat Rollup Comparison", url: "https://l2beat.com" },
          { title: "Rollup Ecosystem Status", url: "https://l2fees.info" },
        ],
        tips: "When using a rollup, check the withdrawal time and fees in advance, and choose after understanding the characteristics of each rollup.",
      },
      {
        id: "6-2",
        question: "Optimistic Rollup vs ZK Rollup",
        answer:
          "Optimistic rollups assume that L2 transactions are valid by default and catch errors through fraud proofs. Implementation is relatively easy, but a dispute resolution period (7 days) is required upon withdrawal. ZK rollups use zero-knowledge proofs to instantly verify the validity of L2 transactions in L1. It is faster and safer, but the technology is complex and EVM compatibility is difficult to implement.",
        links: [
          { title: "Optimism Official Documentation", url: "https://docs.optimism.io" },
          { title: "Arbitrum Guide", url: "https://docs.arbitrum.io" },
          { title: "ZK Rollup Comparison", url: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/" },
        ],
        tips: "Consider ZK rollups if you need fast withdrawals, and optimistic rollups if EVM compatibility is important.",
      },
      {
        id: "6-3",
        question: "zkSync Era, StarkNet, Scroll Comparison",
        answer:
          "These are all representative L2 solutions that use ZK rollup technology. zkSync Era emphasizes EVM compatibility and allows Solidity developers to easily migrate. StarkNet uses its own programming language, Cairo, to pursue higher performance and flexibility. Scroll aims for maximum compatibility with EVM at the bytecode level. Each solves the scalability problem with a different approach.",
        links: [
          { title: "zkSync Era", url: "https://zksync.io" },
          { title: "StarkNet", url: "https://starknet.io" },
          { title: "Scroll", url: "https://scroll.io" },
          { title: "ZK Rollup Ecosystem", url: "https://l2beat.com/scaling/zk-rollups" },
        ],
        tips: "Check the ecosystem and supported DApps of each ZK rollup, and select a platform that suits your purpose.",
      },
    ],
  },
  {
    category: "7. 🚨 Safety & Scams",
    items: [
      {
        id: "7-1",
        question: "How to distinguish phishing links",
        answer:
          "Check that the official website address and spelling match exactly, and check for HTTPS secure connection. Do not click on links, emails, or DMs from unknown sources, and be careful with shortened URLs until you verify the original address. Be suspicious of messages that give sudden warnings or urgent requests. Use browser bookmarks or check links from official social media.",
        links: [
          { title: "Report Phishing Site", url: "https://safebrowsing.google.com/safebrowsing/report_phish/" },
          { title: "Web3 Security Guide", url: "https://ethereum.org/en/security/" },
          { title: "MetaMask Security Tips", url: "https://support.metamask.io/hc/en-us/articles/360015489591" },
        ],
        tips: "Never click on suspicious links and always bookmark and use the official website.",
      },
      {
        id: "7-2",
        question: "Wallet Permission Management (Revoke)",
        answer:
          "When using a DApp, you grant a spending limit (allowance) for a specific token to a smart contract. Permissions granted to unused DApps or suspicious contracts should be checked and revoked regularly using tools such as Revoke.cash to protect assets. Revoking permissions prevents the contract from accessing the token any longer.",
        links: [
          { title: "Revoke.cash", url: "https://revoke.cash" },
          { title: "Etherscan Token Approval", url: "https://etherscan.io/tokenapprovalchecker" },
          { title: "Wallet Security Checklist", url: "https://ethereum.org/en/security/" },
        ],
        tips: "Check your wallet permissions regularly every month and revoke permissions for DApps you don't use immediately.",
      },
      {
        id: "7-3",
        question: "What is a Sybil attack?",
        answer:
          "A Sybil attack is an attack in which one attacker creates multiple fake identities (accounts) to exert undue influence on a network or system. It can be exploited for governance voting manipulation, airdrop fraud, reputation system manipulation, etc. These attacks are particularly problematic in blockchain because identity verification is difficult.",
        links: [
          {
            title: "Sybil Resistance Design",
            url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/attack-and-defense/",
          },
          { title: "Gitcoin Passport", url: "https://passport.gitcoin.co" },
          { title: "Identity Verification Solution", url: "https://ethereum.org/en/decentralized-identity/" },
        ],
        tips: "Prefer projects with Sybil prevention mechanisms when participating in airdrops or governance.",
      },
      {
        id: "7-4",
        question: "Project Authenticity Criteria",
        answer:
          "A comprehensive consideration should be given to whether the team members' identities and careers are disclosed, the specificity and feasibility of the white paper, the technical basis and audit report, the active and healthy community, the clear roadmap and actual development progress, and the rationality of tokenomics. Promises of excessive returns or anonymous teams should be treated with caution. GitHub activity, partnerships, and investor information are also important criteria.",
        links: [
          { title: "Project Analysis Guide", url: "https://ethereum.org/en/developers/docs/dapps/" },
          { title: "Smart Contract Audit", url: "https://consensys.net/diligence/" },
          { title: "DeFi Project Evaluation", url: "https://defisafety.com" },
        ],
        tips: "Thoroughly DYOR (Do Your Own Research) and cross-validate information from multiple sources.",
      },
    ],
  },
  {
    category: "8. 🛠 Tools & Services",
    items: [
      {
        id: "8-1",
        question: "Debank, Zapper, Zerion Comparison",
        answer:
          "These are all portfolio dashboard services that allow users to track and manage assets distributed across multiple wallets and various DeFi protocols in one place. DeBank focuses on social features and Web3 identity, Zapper specializes in DeFi position management and yield tracking, and Zerion has strengths in mobile apps and user experience. There are slight differences in supported chains, protocols, and features provided.",
        links: [
          { title: "DeBank", url: "https://debank.com" },
          { title: "Zapper", url: "https://zapper.fi" },
          { title: "Zerion", url: "https://zerion.io" },
        ],
        tips: "Understand the strengths of each platform and choose a tool that fits your usage patterns.",
      },
      {
        id: "8-2",
        question: "How to use Dune Analytics",
        answer:
          "Dune Analytics is a platform that allows users to directly write SQL queries to analyze and visualize (dashboard) blockchain data. You can view dashboards created by others or write your own queries to analyze the number of users, transaction volume, TVL changes, etc. of a particular project. Blockchain data is organized in a table format, making it easy to query with SQL.",
        links: [
          { title: "Dune Analytics", url: "https://dune.com" },
          { title: "Dune Query Guide", url: "https://docs.dune.com" },
          { title: "Popular Dashboards", url: "https://dune.com/browse/dashboards" },
        ],
        tips: "Even if you don't know SQL, you can learn by copying and modifying existing queries.",
      },
      {
        id: "8-3",
        question: "How to view transactions with Etherscan",
        answer:
          "On Etherscan (Ethereum Block Explorer), you can search for transaction hash (TxID), wallet address, contract address, etc. to view detailed information about the transaction (sender, recipient, amount, gas fee, status, etc.). You can also view token transfer history, smart contract call information, internal transactions (Internal Txns), etc. If a transaction fails, you can also check the reason for the failure.",
        links: [
          { title: "Etherscan", url: "https://etherscan.io" },
          { title: "Etherscan Usage Guide", url: "https://info.etherscan.com" },
          { title: "Other Chain Explorers", url: "https://chainlist.org" },
        ],
        tips: "If a transaction fails, you can check detailed error information in the 'Logs' tab.",
      },
    ],
  },
  {
    category: "9. 🧱 DAO & Governance",
    items: [
      {
        id: "9-1",
        question: "What is a DAO?",
        answer:
          "A DAO (Decentralized Autonomous Organization) is an organization in which members jointly make decisions and operate according to rules defined by smart contracts, without a central authority. It emphasizes transparency and community participation, and allows participation in decision-making through governance tokens. Unlike traditional corporate structures, it operates without hierarchical management.",
        links: [
          { title: "DAO Basics Guide", url: "https://ethereum.org/en/dao/" },
          { title: "Aragon DAO Platform", url: "https://aragon.org" },
          { title: "DAO Case Studies", url: "https://deepdao.io" },
        ],
        tips: "Before participating in a DAO, fully understand the organization's purpose, governance structure, and tokenomics.",
      },
      {
        id: "9-2",
        question: "Role of Governance Tokens",
        answer:
          "Governance tokens are cryptocurrencies that grant the right (voting rights) to participate in the decision-making of a DAO. Token holders can propose and vote on protocol changes, use of funds, addition of new features, parameter adjustments, etc. Voting power is determined by the amount held, and some projects require tokens to be staked to obtain voting rights.",
        links: [
          { title: "Governance Token Guide", url: "https://ethereum.org/en/governance/" },
          { title: "Snapshot Voting Platform", url: "https://snapshot.org" },
          { title: "How to Participate in Governance", url: "https://blog.aragon.org/what-is-governance/" },
        ],
        tips: "When participating in governance, fully review the proposal and actively participate in community discussions.",
      },
      {
        id: "9-3",
        question: "Forum → Proposal → Voting Structure",
        answer:
          "In many DAOs, decision-making first involves discussing ideas and gathering opinions in a community forum (e.g., Discourse, Discord). It is then made into a formal proposal and voted on through Snapshot or an on-chain voting system. On-chain voting generally incurs gas fees but is binding, while off-chain voting (Snapshot) is free but is more of a signal vote.",
        links: [
          { title: "Snapshot Voting", url: "https://snapshot.org" },
          { title: "Tally Governance", url: "https://tally.xyz" },
          { title: "Governance Process", url: "https://ethereum.org/en/governance/" },
        ],
        tips: "Before voting, check that there has been sufficient discussion in the forum and carefully consider the pros and cons of the proposal.",
      },
    ],
  },
  {
    category: "10. 📈 Airdrops & Missions",
    items: [
      {
        id: "10-1",
        question: "Why do airdrops exist?",
        answer:
          "Airdrops are used as a marketing strategy to acquire users, build a community, distribute tokens, and promote a project in the early stages of a project. It is also conducted to reward specific activities or encourage governance participation. The main purpose is to create a network effect by providing rewards to early users.",
        links: [
          { title: "Airdrop Tracking Site", url: "https://airdrops.io" },
          { title: "DeFiLlama Airdrop", url: "https://defillama.com/airdrops" },
          { title: "Airdrop Safety Guide", url: "https://ethereum.org/en/security/" },
        ],
        tips: "When receiving an airdrop, be careful of phishing sites and be suspicious if they ask for excessive permissions.",
      },
      {
        id: "10-2",
        question: "Galxe, Zealy, TaskOn Comparison",
        answer:
          "These are platforms that help Web3 projects provide various missions (quests) for users and reward participants (NFTs, points, whitelists, etc.). Galxe is the largest quest platform, Zealy focuses on community participation, and TaskOn is specialized for the Asian market. It is used for project promotion, increased community participation, and filtering potential airdrop recipients.",
        links: [
          { title: "Galxe", url: "https://galxe.com" },
          { title: "Zealy", url: "https://zealy.io" },
          { title: "TaskOn", url: "https://taskon.xyz" },
        ],
        tips: "Be careful about protecting your personal information when participating in quests, and reject suspicious permission requests.",
      },
    ],
  },
]
