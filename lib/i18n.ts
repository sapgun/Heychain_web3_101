"use client"

// 다국어 지원을 위한 번역 시스템 (오프라인 기본 + 선택적 AI 번역)

export type Language = "ko" | "en" | "ja" | "zh" | "es" | "fr"

export interface TranslationData {
  // 헤더
  title: string
  subtitle: string
  poweredBy: string

  // 네비게이션
  search: string
  searchPlaceholder: string
  askAI: string
  popularKeywords: string
  recommendedKeywords: string
  random: string
  categories: string
  backToList: string

  // 메인 콘텐츠
  welcome: string
  welcomeDescription: string
  slogan: string
  tip: string
  searchResults: string
  noResults: string

  // AI 채팅
  aiAssistant: string
  remainingQueries: string
  premium: string
  dailyLimitReached: string
  nextResetIn: string
  subscribeToPremium: string
  buyTokens: string
  startConversation: string
  startConversationDesc: string
  generating: string
  aiCanMakeErrors: string
  unlimited: string

  // 뉴스 티커
  liveNews: string
  newsCount: string
  offline: string
  online: string
  allNews: string
  category: string
  speed: string
  fast: string
  normal: string
  slow: string
  language: string
  noNewsAvailable: string
  noNewsInCategory: string
  backToAllNews: string
  refresh: string

  // 구독 및 결제
  freeQuestions: string
  basicPlan: string
  premiumPlan: string
  freePlan: string
  monthlyFee: string
  subscribe: string
  buyNow: string
  signUp: string
  email: string
  emailPlaceholder: string
  signUpBenefits: string
  signUpComplete: string

  // AI 번역 관련
  translateWithAI: string
  translating: string
  translationFailed: string
  originalText: string
  translatedText: string

  // 공통
  loading: string
  error: string
  retry: string
  close: string
  save: string
  cancel: string
  confirm: string
  yes: string
  no: string
  next: string
  previous: string

  // 시간 표현
  minutesAgo: string
  hoursAgo: string
  daysAgo: string
  justNow: string
}

// 기본 한국어 번역
const koTranslations: TranslationData = {
  // 헤더
  title: "HeyChain 101",
  subtitle: "블록체인 미로의 친절한 나침반 🧭",
  poweredBy: "Powered by SAPGUN",

  // 네비게이션
  search: "검색",
  searchPlaceholder: "질문 검색...",
  askAI: "AI에게 질문하기",
  popularKeywords: "인기 키워드",
  recommendedKeywords: "추천 키워드",
  random: "🎲 랜덤",
  categories: "카테고리",
  backToList: "목록으로 돌아가기",

  // 메인 콘텐츠
  welcome: "Web3 세상에 오신 걸 환영해요! 🎉",
  welcomeDescription:
    "복잡한 블록체인 세상이 막막하신가요? 걱정 마세요! 왼쪽 메뉴에서 궁금한 주제를 골라보거나, 검색창에 질문을 던져보세요. HeyChain이 쉽고 재미있게 설명해드릴게요! 🚀",
  slogan: "복잡한 Web3, 이제 대화로 쉽게 배워요! 💬✨",
  tip: "💡 팁: AI 채팅으로 실시간 질문도 가능해요!",
  searchResults: "검색 결과",
  noResults: "검색 결과가 없습니다.",

  // AI 채팅
  aiAssistant: "HeyChain AI 어시스턴트",
  remainingQueries: "회 남음",
  premium: "프리미엄",
  dailyLimitReached: "일일 무료 질문 한도에 도달했습니다!",
  nextResetIn: "다음 리셋까지",
  subscribeToPremium: "유료 플랜 구독하기",
  buyTokens: "토큰 구매하기",
  startConversation: "HeyChain AI와 대화를 시작하세요!",
  startConversationDesc: "Web3, 블록체인, DeFi, NFT 등에 대해 무엇이든 물어보세요.",
  generating: "답변을 생성하고 있습니다...",
  aiCanMakeErrors: "AI는 실수할 수 있습니다. 중요한 정보는 검증하세요.",
  unlimited: "무제한 사용 가능",

  // 뉴스 티커
  liveNews: "🔥 실시간 뉴스",
  newsCount: "개 소식",
  offline: "오프라인",
  online: "온라인",
  allNews: "전체",
  category: "카테고리",
  speed: "속도",
  fast: "빠름 (30초)",
  normal: "보통 (60초)",
  slow: "느림 (90초)",
  language: "언어",
  noNewsAvailable: "표시할 뉴스가 없습니다.",
  noNewsInCategory: "카테고리에 뉴스가 없습니다.",
  backToAllNews: "전체 뉴스로",
  refresh: "새로고침",

  // 구독 및 결제
  freeQuestions: "무료 질문",
  basicPlan: "베이직",
  premiumPlan: "프리미엄",
  freePlan: "무료 플랜",
  monthlyFee: "월 요금",
  subscribe: "구독하기",
  buyNow: "구매하기",
  signUp: "회원가입",
  email: "이메일",
  emailPlaceholder: "your@email.com",
  signUpBenefits: "회원가입 혜택",
  signUpComplete: "회원가입 완료!",

  // AI 번역 관련
  translateWithAI: "AI 번역",
  translating: "번역 중...",
  translationFailed: "번역 실패",
  originalText: "원문",
  translatedText: "번역문",

  // 공통
  loading: "로딩 중...",
  error: "오류",
  retry: "다시 시도",
  close: "닫기",
  save: "저장",
  cancel: "취소",
  confirm: "확인",
  yes: "예",
  no: "아니오",
  next: "다음",
  previous: "이전",

  // 시간 표현
  minutesAgo: "분 전",
  hoursAgo: "시간 전",
  daysAgo: "일 전",
  justNow: "방금 전",
}

// 오프라인 번역 데이터 (빠른 로딩을 위한 정적 번역)
const offlineTranslations: Record<Language, TranslationData> = {
  ko: koTranslations,
  en: {
    title: "HeyChain 101",
    subtitle: "Your Friendly Compass in the Blockchain Maze 🧭",
    poweredBy: "Powered by SAPGUN",
    search: "Search",
    searchPlaceholder: "Search questions...",
    askAI: "Ask AI",
    popularKeywords: "Popular Keywords",
    recommendedKeywords: "Recommended Keywords",
    random: "🎲 Random",
    categories: "Categories",
    backToList: "Back to List",
    welcome: "Welcome to the Web3 World! 🎉",
    welcomeDescription:
      "Feeling overwhelmed by the complex blockchain world? Don't worry! Choose a topic from the left menu or ask questions in the search bar. HeyChain will explain everything easily and fun! 🚀",
    slogan: "Complex Web3, now easy to learn through conversation! 💬✨",
    tip: "💡 Tip: Real-time questions available via AI chat!",
    searchResults: "Search Results",
    noResults: "No results found.",
    aiAssistant: "HeyChain AI Assistant",
    remainingQueries: " remaining",
    premium: "Premium",
    dailyLimitReached: "Daily free question limit reached!",
    nextResetIn: "Next reset in",
    subscribeToPremium: "Subscribe to Premium",
    buyTokens: "Buy Tokens",
    startConversation: "Start conversation with HeyChain AI!",
    startConversationDesc: "Ask anything about Web3, blockchain, DeFi, NFT, etc.",
    generating: "Generating response...",
    aiCanMakeErrors: "AI can make mistakes. Please verify important information.",
    unlimited: "Unlimited usage available",
    liveNews: "🔥 Live News",
    newsCount: " news",
    offline: "Offline",
    online: "Online",
    allNews: "All",
    category: "Category",
    speed: "Speed",
    fast: "Fast (30s)",
    normal: "Normal (60s)",
    slow: "Slow (90s)",
    language: "Language",
    noNewsAvailable: "No news available.",
    noNewsInCategory: "No news in category.",
    backToAllNews: "Back to All News",
    refresh: "Refresh",
    freeQuestions: "Free Questions",
    basicPlan: "Basic",
    premiumPlan: "Premium",
    freePlan: "Free Plan",
    monthlyFee: "Monthly Fee",
    subscribe: "Subscribe",
    buyNow: "Buy Now",
    signUp: "Sign Up",
    email: "Email",
    emailPlaceholder: "your@email.com",
    signUpBenefits: "Sign Up Benefits",
    signUpComplete: "Sign Up Complete!",
    translateWithAI: "AI Translate",
    translating: "Translating...",
    translationFailed: "Translation Failed",
    originalText: "Original",
    translatedText: "Translated",
    loading: "Loading...",
    error: "Error",
    retry: "Retry",
    close: "Close",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    next: "Next",
    previous: "Previous",
    minutesAgo: " minutes ago",
    hoursAgo: " hours ago",
    daysAgo: " days ago",
    justNow: "Just now",
  },
  ja: {
    title: "HeyChain 101",
    subtitle: "ブロックチェーンの迷路の親切なコンパス 🧭",
    poweredBy: "Powered by SAPGUN",
    search: "検索",
    searchPlaceholder: "質問を検索...",
    askAI: "AIに質問",
    popularKeywords: "人気キーワード",
    recommendedKeywords: "おすすめキーワード",
    random: "🎲 ランダム",
    categories: "カテゴリ",
    backToList: "リストに戻る",
    welcome: "Web3の世界へようこそ！🎉",
    welcomeDescription:
      "複雑なブロックチェーンの世界に圧倒されていませんか？心配しないでください！左のメニューからトピックを選ぶか、検索バーで質問してください。HeyChainが簡単で楽しく説明します！🚀",
    slogan: "複雑なWeb3、今は会話で簡単に学べます！💬✨",
    tip: "💡 ヒント：AIチャットでリアルタイム質問も可能です！",
    searchResults: "検索結果",
    noResults: "結果が見つかりません。",
    aiAssistant: "HeyChain AIアシスタント",
    remainingQueries: "回残り",
    premium: "プレミアム",
    dailyLimitReached: "1日の無料質問制限に達しました！",
    nextResetIn: "次のリセットまで",
    subscribeToPremium: "プレミアムに登録",
    buyTokens: "トークンを購入",
    startConversation: "HeyChain AIとの会話を始めましょう！",
    startConversationDesc: "Web3、ブロックチェーン、DeFi、NFTなど何でも聞いてください。",
    generating: "回答を生成中...",
    aiCanMakeErrors: "AIは間違いを犯す可能性があります。重要な情報は確認してください。",
    unlimited: "無制限利用可能",
    liveNews: "🔥 ライブニュース",
    newsCount: "件のニュース",
    offline: "オフライン",
    online: "オンライン",
    allNews: "すべて",
    category: "カテゴリ",
    speed: "速度",
    fast: "速い（30秒）",
    normal: "普通（60秒）",
    slow: "遅い（90秒）",
    language: "言語",
    noNewsAvailable: "利用可能なニュースがありません。",
    noNewsInCategory: "カテゴリにニュースがありません。",
    backToAllNews: "すべてのニュースに戻る",
    refresh: "更新",
    freeQuestions: "無料質問",
    basicPlan: "ベーシック",
    premiumPlan: "プレミアム",
    freePlan: "無料プラン",
    monthlyFee: "月額料金",
    subscribe: "登録",
    buyNow: "今すぐ購入",
    signUp: "サインアップ",
    email: "メール",
    emailPlaceholder: "your@email.com",
    signUpBenefits: "サインアップ特典",
    signUpComplete: "サインアップ完了！",
    translateWithAI: "AI翻訳",
    translating: "翻訳中...",
    translationFailed: "翻訳失敗",
    originalText: "原文",
    translatedText: "翻訳文",
    loading: "読み込み中...",
    error: "エラー",
    retry: "再試行",
    close: "閉じる",
    save: "保存",
    cancel: "キャンセル",
    confirm: "確認",
    yes: "はい",
    no: "いいえ",
    next: "次へ",
    previous: "前へ",
    minutesAgo: "分前",
    hoursAgo: "時間前",
    daysAgo: "日前",
    justNow: "たった今",
  },
  zh: {
    title: "HeyChain 101",
    subtitle: "区块链迷宫中的友善指南针 🧭",
    poweredBy: "Powered by SAPGUN",
    search: "搜索",
    searchPlaceholder: "搜索问题...",
    askAI: "询问AI",
    popularKeywords: "热门关键词",
    recommendedKeywords: "推荐关键词",
    random: "🎲 随机",
    categories: "分类",
    backToList: "返回列表",
    welcome: "欢迎来到Web3世界！🎉",
    welcomeDescription:
      "被复杂的区块链世界搞得不知所措？别担心！从左侧菜单选择主题或在搜索栏提问。HeyChain将轻松有趣地为您解释一切！🚀",
    slogan: "复杂的Web3，现在通过对话轻松学习！💬✨",
    tip: "💡 提示：通过AI聊天可进行实时提问！",
    searchResults: "搜索结果",
    noResults: "未找到结果。",
    aiAssistant: "HeyChain AI助手",
    remainingQueries: "次剩余",
    premium: "高级版",
    dailyLimitReached: "已达到每日免费问题限制！",
    nextResetIn: "下次重置时间",
    subscribeToPremium: "订阅高级版",
    buyTokens: "购买代币",
    startConversation: "开始与HeyChain AI对话！",
    startConversationDesc: "询问任何关于Web3、区块链、DeFi、NFT等的问题。",
    generating: "正在生成回答...",
    aiCanMakeErrors: "AI可能会出错。请验证重要信息。",
    unlimited: "无限使用",
    liveNews: "🔥 实时新闻",
    newsCount: "条新闻",
    offline: "离线",
    online: "在线",
    allNews: "全部",
    category: "分类",
    speed: "速度",
    fast: "快速（30秒）",
    normal: "正常（60秒）",
    slow: "慢速（90秒）",
    language: "语言",
    noNewsAvailable: "没有可用新闻。",
    noNewsInCategory: "分类中没有新闻。",
    backToAllNews: "返回所有新闻",
    refresh: "刷新",
    freeQuestions: "免费问题",
    basicPlan: "基础版",
    premiumPlan: "高级版",
    freePlan: "免费计划",
    monthlyFee: "月费",
    subscribe: "订阅",
    buyNow: "立即购买",
    signUp: "注册",
    email: "邮箱",
    emailPlaceholder: "your@email.com",
    signUpBenefits: "注册福利",
    signUpComplete: "注册完成！",
    translateWithAI: "AI翻译",
    translating: "翻译中...",
    translationFailed: "翻译失败",
    originalText: "原文",
    translatedText: "译文",
    loading: "加载中...",
    error: "错误",
    retry: "重试",
    close: "关闭",
    save: "保存",
    cancel: "取消",
    confirm: "确认",
    yes: "是",
    no: "否",
    next: "下一个",
    previous: "上一个",
    minutesAgo: "分钟前",
    hoursAgo: "小时前",
    daysAgo: "天前",
    justNow: "刚刚",
  },
  es: {
    title: "HeyChain 101",
    subtitle: "Tu Brújula Amigable en el Laberinto Blockchain 🧭",
    poweredBy: "Powered by SAPGUN",
    search: "Buscar",
    searchPlaceholder: "Buscar preguntas...",
    askAI: "Preguntar a IA",
    popularKeywords: "Palabras Clave Populares",
    recommendedKeywords: "Palabras Clave Recomendadas",
    random: "🎲 Aleatorio",
    categories: "Categorías",
    backToList: "Volver a la Lista",
    welcome: "¡Bienvenido al Mundo Web3! 🎉",
    welcomeDescription:
      "¿Te sientes abrumado por el complejo mundo blockchain? ¡No te preocupes! Elige un tema del menú izquierdo o haz preguntas en la barra de búsqueda. ¡HeyChain te explicará todo de manera fácil y divertida! 🚀",
    slogan: "Web3 complejo, ¡ahora fácil de aprender a través de la conversación! 💬✨",
    tip: "💡 Consejo: ¡Preguntas en tiempo real disponibles a través del chat IA!",
    searchResults: "Resultados de Búsqueda",
    noResults: "No se encontraron resultados.",
    aiAssistant: "Asistente IA HeyChain",
    remainingQueries: " restantes",
    premium: "Premium",
    dailyLimitReached: "¡Límite diario de preguntas gratuitas alcanzado!",
    nextResetIn: "Próximo reinicio en",
    subscribeToPremium: "Suscribirse a Premium",
    buyTokens: "Comprar Tokens",
    startConversation: "¡Comienza la conversación con HeyChain IA!",
    startConversationDesc: "Pregunta cualquier cosa sobre Web3, blockchain, DeFi, NFT, etc.",
    generating: "Generando respuesta...",
    aiCanMakeErrors: "La IA puede cometer errores. Verifica la información importante.",
    unlimited: "Uso ilimitado disponible",
    liveNews: "🔥 Noticias en Vivo",
    newsCount: " noticias",
    offline: "Sin conexión",
    online: "En línea",
    allNews: "Todas",
    category: "Categoría",
    speed: "Velocidad",
    fast: "Rápido (30s)",
    normal: "Normal (60s)",
    slow: "Lento (90s)",
    language: "Idioma",
    noNewsAvailable: "No hay noticias disponibles.",
    noNewsInCategory: "No hay noticias en la categoría.",
    backToAllNews: "Volver a Todas las Noticias",
    refresh: "Actualizar",
    freeQuestions: "Preguntas Gratuitas",
    basicPlan: "Básico",
    premiumPlan: "Premium",
    freePlan: "Plan Gratuito",
    monthlyFee: "Tarifa Mensual",
    subscribe: "Suscribirse",
    buyNow: "Comprar Ahora",
    signUp: "Registrarse",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    signUpBenefits: "Beneficios de Registro",
    signUpComplete: "¡Registro Completo!",
    translateWithAI: "Traducir con IA",
    translating: "Traduciendo...",
    translationFailed: "Traducción Fallida",
    originalText: "Original",
    translatedText: "Traducido",
    loading: "Cargando...",
    error: "Error",
    retry: "Reintentar",
    close: "Cerrar",
    save: "Guardar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    yes: "Sí",
    no: "No",
    next: "Siguiente",
    previous: "Anterior",
    minutesAgo: " minutos atrás",
    hoursAgo: " horas atrás",
    daysAgo: " días atrás",
    justNow: "Ahora mismo",
  },
  fr: {
    title: "HeyChain 101",
    subtitle: "Votre Boussole Amicale dans le Labyrinthe Blockchain 🧭",
    poweredBy: "Powered by SAPGUN",
    search: "Rechercher",
    searchPlaceholder: "Rechercher des questions...",
    askAI: "Demander à l'IA",
    popularKeywords: "Mots-clés Populaires",
    recommendedKeywords: "Mots-clés Recommandés",
    random: "🎲 Aléatoire",
    categories: "Catégories",
    backToList: "Retour à la Liste",
    welcome: "Bienvenue dans le Monde Web3 ! 🎉",
    welcomeDescription:
      "Vous vous sentez dépassé par le monde complexe de la blockchain ? Ne vous inquiétez pas ! Choisissez un sujet dans le menu de gauche ou posez des questions dans la barre de recherche. HeyChain vous expliquera tout de manière simple et amusante ! 🚀",
    slogan: "Web3 complexe, maintenant facile à apprendre par la conversation ! 💬✨",
    tip: "💡 Astuce : Questions en temps réel disponibles via le chat IA !",
    searchResults: "Résultats de Recherche",
    noResults: "Aucun résultat trouvé.",
    aiAssistant: "Assistant IA HeyChain",
    remainingQueries: " restantes",
    premium: "Premium",
    dailyLimitReached: "Limite quotidienne de questions gratuites atteinte !",
    nextResetIn: "Prochaine réinitialisation dans",
    subscribeToPremium: "S'abonner à Premium",
    buyTokens: "Acheter des Tokens",
    startConversation: "Commencez la conversation avec HeyChain IA !",
    startConversationDesc: "Demandez n'importe quoi sur Web3, blockchain, DeFi, NFT, etc.",
    generating: "Génération de la réponse...",
    aiCanMakeErrors: "L'IA peut faire des erreurs. Vérifiez les informations importantes.",
    unlimited: "Usage illimité disponible",
    liveNews: "🔥 Actualités en Direct",
    newsCount: " actualités",
    offline: "Hors ligne",
    online: "En ligne",
    allNews: "Toutes",
    category: "Catégorie",
    speed: "Vitesse",
    fast: "Rapide (30s)",
    normal: "Normal (60s)",
    slow: "Lent (90s)",
    language: "Langue",
    noNewsAvailable: "Aucune actualité disponible.",
    noNewsInCategory: "Aucune actualité dans la catégorie.",
    backToAllNews: "Retour à Toutes les Actualités",
    refresh: "Actualiser",
    freeQuestions: "Questions Gratuites",
    basicPlan: "Basique",
    premiumPlan: "Premium",
    freePlan: "Plan Gratuit",
    monthlyFee: "Frais Mensuels",
    subscribe: "S'abonner",
    buyNow: "Acheter Maintenant",
    signUp: "S'inscrire",
    email: "Email",
    emailPlaceholder: "votre@email.com",
    signUpBenefits: "Avantages d'Inscription",
    signUpComplete: "Inscription Terminée !",
    translateWithAI: "Traduire avec IA",
    translating: "Traduction...",
    translationFailed: "Échec de la Traduction",
    originalText: "Original",
    translatedText: "Traduit",
    loading: "Chargement...",
    error: "Erreur",
    retry: "Réessayer",
    close: "Fermer",
    save: "Sauvegarder",
    cancel: "Annuler",
    confirm: "Confirmer",
    yes: "Oui",
    no: "Non",
    next: "Suivant",
    previous: "Précédent",
    minutesAgo: " minutes",
    hoursAgo: " heures",
    daysAgo: " jours",
    justNow: "À l'instant",
  },
}

// AI 번역 함수 (개별 텍스트용)
export async function translateTextWithAI(text: string, targetLanguage: Language): Promise<string> {
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        targetLanguage,
        sourceLanguage: "ko",
      }),
    })

    if (!response.ok) {
      throw new Error("Translation failed")
    }

    const data = await response.json()
    return data.translatedText || text
  } catch (error) {
    console.error("Translation error:", error)
    return text // 실패 시 원본 텍스트 반환
  }
}

// 번역 훅 (오프라인 번역만 사용)
export function useTranslation(language: Language = "ko") {
  return {
    t: offlineTranslations[language] || offlineTranslations.ko,
    isLoading: false,
  }
}

// 언어 정보
export const languages: Record<Language, { name: string; flag: string; nativeName: string }> = {
  ko: { name: "Korean", flag: "🇰🇷", nativeName: "한국어" },
  en: { name: "English", flag: "🇺🇸", nativeName: "English" },
  ja: { name: "Japanese", flag: "🇯🇵", nativeName: "日本語" },
  zh: { name: "Chinese", flag: "🇨🇳", nativeName: "中文" },
  es: { name: "Spanish", flag: "🇪🇸", nativeName: "Español" },
  fr: { name: "French", flag: "🇫🇷", nativeName: "Français" },
}
