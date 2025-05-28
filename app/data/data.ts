export const initialData = {
  ko: [
    {
      category: "👛 지갑 & 신원",
      items: [
        {
          id: "wallet-1",
          question: "메타마스크란 무엇이고 어떻게 설치하나요?",
          answer:
            "메타마스크는 브라우저 확장 프로그램 및 모바일 앱 형태의 암호화폐 지갑으로, 주로 이더리움 및 EVM 호환 블록체인과 상호작용하는 데 사용됩니다. 공식 웹사이트에서 다운로드하여 설치하고, 안내에 따라 새 지갑을 생성하거나 기존 지갑을 복구할 수 있습니다.",
          categoryName: "👛 지갑 & 신원",
        },
        {
          id: "wallet-2",
          question: "프라이빗 키와 시드 구문의 차이는?",
          answer:
            "프라이빗 키는 특정 계정의 자산에 접근할 수 있는 비밀번호와 같은 고유한 암호 코드입니다. 시드 구문(또는 복구 구문)은 이 프라이빗 키들을 생성하고 지갑 전체를 복구하는 데 사용되는 12~24개의 단어 조합입니다.",
          categoryName: "👛 지갑 & 신원",
        },
      ],
    },
    {
      category: "🔗 블록체인 기초",
      items: [
        {
          id: "blockchain-1",
          question: "블록체인이란? 중앙 서버와의 차이",
          answer:
            "블록체인은 거래 내역을 '블록'이라는 단위로 기록하고, 이를 '체인'처럼 순차적으로 연결하여 분산된 네트워크 참여자들(노드)이 공동으로 관리하는 기술입니다. 중앙 서버 방식은 단일 주체가 데이터를 통제하지만, 블록체인은 탈중앙화되어 투명성과 보안성이 높습니다.",
          categoryName: "🔗 블록체인 기초",
        },
        {
          id: "blockchain-2",
          question: "블록, 트랜잭션, 노드, 체인의 관계",
          answer:
            "트랜잭션(거래)은 블록체인에서 발생하는 모든 기록 단위입니다. 여러 트랜잭션이 모여 하나의 블록을 구성하고, 이 블록들이 시간 순서대로 암호학적으로 연결되어 체인을 이룹니다. 노드는 이 블록체인 네트워크에 참여하여 데이터를 저장하고 검증하는 컴퓨터 또는 시스템입니다.",
          categoryName: "🔗 블록체인 기초",
        },
      ],
    },
    {
      category: "🪙 토큰 & NFT",
      items: [
        {
          id: "token-1",
          question: "ERC-20, ERC-721, ERC-1155의 차이",
          answer:
            "ERC-20은 대체 가능한 토큰(Fungible Token, FT)의 표준으로, 각 토큰이 동일한 가치를 지닙니다 (예: 암호화폐). ERC-721은 대체 불가능한 토큰(Non-Fungible Token, NFT)의 표준으로, 각 토큰이 고유한 가치와 정보를 가집니다 (예: 디지털 아트). ERC-1155는 FT와 NFT를 모두 한 컨트랙트에서 관리할 수 있는 다중 토큰 표준입니다.",
          categoryName: "🪙 토큰 & NFT",
        },
        {
          id: "token-2",
          question: "NFT는 왜 JPEG가 아닌가요?",
          answer:
            "JPEG는 이미지 파일 형식일 뿐이고, NFT는 해당 이미지(또는 다른 디지털 자산)의 소유권과 진위성을 블록체인에 기록한 '디지털 증서'입니다. NFT는 이미지 자체라기보다는, 그 이미지에 대한 고유한 권리를 나타내는 토큰입니다.",
          categoryName: "🪙 토큰 & NFT",
        },
      ],
    },
  ],
  en: [
    {
      category: "👛 Wallet & Identity",
      items: [
        {
          id: "wallet-1-en",
          question: "What is MetaMask and how to install it?",
          answer:
            "MetaMask is a cryptocurrency wallet in the form of a browser extension and mobile app, mainly used to interact with Ethereum and EVM-compatible blockchains. You can download and install it from the official website, and follow the instructions to create a new wallet or recover an existing one.",
          categoryName: "👛 Wallet & Identity",
        },
        {
          id: "wallet-2-en",
          question: "What's the difference between a private key and a seed phrase?",
          answer:
            "A private key is a unique cryptographic code that acts like a password to access assets in a specific account. A seed phrase (or recovery phrase) is a combination of 12-24 words used to generate these private keys and recover the entire wallet.",
          categoryName: "👛 Wallet & Identity",
        },
      ],
    },
  ],
}
