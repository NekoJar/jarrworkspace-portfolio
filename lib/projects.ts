import type { LocalizedText, Project, ProjectMetric } from "./types";

export const projects: Project[] = [
  {
    slug: "blueprint-analysis",
    title: { en: "Blueprint Analysis", ja: "設計図解析" },
    category: { en: "AI / Full-Stack / Enterprise", ja: "AI / フルスタック / 企業向け" },
    type: { en: "AI-powered engineering drawing analysis", ja: "エンジニアリング図面のAI分析" },
    role: { en: "Full-Stack Engineer", ja: "フルスタックエンジニア" },
    summary: {
      en: "AI-powered analysis and verification of engineering drawing requirements.",
      ja: "エンジニアリング図面要件のAI分析・検証システム。",
    },
    description: {
      en: "A system for analyzing engineering drawings and verifying requirements against information extracted from technical documents.",
      ja: "技術文書から抽出した情報に基づき、エンジニアリング図面を分析し要件を検証するシステム。",
    },
    contribution: [
      { en: "Full-stack workflows", ja: "フルスタックワークフロー" },
      { en: "AI models for OCR, document understanding, retrieval, and verification", ja: "OCR・文書理解・検索・検証のためのAIモデル" },
      { en: "Evaluation failure investigation", ja: "評価における不備調査" },
      { en: "Retrieval and verification improvements", ja: "検索・検証精度の改善" },
      { en: "Workflow optimization", ja: "ワークフロー最適化" },
    ],
    technologies: ["Next.js", "TypeScript", "OpenAI", "Gemini", "OCR", "AWS", "PostgreSQL"],
    results: [
      {
        en: "Reduced redundant AI model calls through workflow optimization.",
        ja: "ワークフローの最適化により、不要なAIモデル呼び出しを削減。",
      },
      {
        en: "Improved retrieval and verification of engineering drawing requirements.",
        ja: "図面要件の検索・検証精度を改善。",
      },
      {
        en: "Refined evaluation logic through iterative testing and analysis.",
        ja: "継続的なテストと分析を通じて、評価ロジックを改善。",
      },
      {
        en: "Improved processing efficiency while maintaining the verification workflow.",
        ja: "検証ワークフローを維持しながら、処理効率を改善。",
      },
    ],
    featured: true,
    image: "/jar.jpg",
  },
  {
    slug: "chakra-reader",
    title: { en: "Chakra Reader", ja: "チャクラリーダー" },
    category: { en: "Full-Stack / AI / Speech", ja: "フルスタック / AI / 音声" },
    type: { en: "AI-powered reading assistant", ja: "AI搭載の読み上げアシスタント" },
    role: { en: "Full-Stack Engineer", ja: "フルスタックエンジニア" },
    summary: {
      en: "An AI-powered reading assistant combining generative AI, real-time interaction, and speech recognition.",
      ja: "生成AI、リアルタイム対話、音声認識を組み合わせた読み上げアシスタント。",
    },
    description: {
      en: "An AI-powered reading assistant that listens, responds, and adapts to the reader in real time.",
      ja: "音声入力を受け付け、リアルタイムに応答し、読み手に合わせて適応するAI読み上げアシスタント。",
    },
    contribution: [
      { en: "AI product UX", ja: "AIプロダクトUX" },
      { en: "Real-time interaction", ja: "リアルタイム対話" },
      { en: "Speech recognition integration", ja: "音声認識の統合" },
      { en: "Frontend implementation", ja: "フロントエンド実装" },
      { en: "Backend and API integration", ja: "バックエンドとAPIの統合" },
    ],
    technologies: ["Next.js", "TypeScript", "OpenAI", "Vercel AI SDK", "Amazon Transcribe"],
    results: [
      {
        en: "AI-powered reading interaction with voice and text responses.",
        ja: "音声とテキストの応答によるAI読み上げ対話。",
      },
      {
        en: "Real-time interaction with streaming responses and interruption handling.",
        ja: "ストリーミング応答と中断対応によるリアルタイム対話。",
      },
      {
        en: "Speech recognition integration for voice input.",
        ja: "音声入力のための音声認識連携。",
      },
      {
        en: "Frontend UX and backend/API integration for the assistant.",
        ja: "アシスタントのフロントエンドUXとバックエンド/API統合。",
      },
    ],
    featured: true,
    image: "/jar-mobile.jpg",
  },
  {
    slug: "sake-world",
    title: { en: "Sake World / Leaf", ja: "サケワールド／リーフ" },
    category: { en: "Full-Stack / E-commerce / Web3", ja: "フルスタック / EC / Web3" },
    type: { en: "Full-stack e-commerce and Web3 platform", ja: "フルスタックEC/Web3プラットフォーム" },
    role: { en: "Full-Stack Engineer", ja: "フルスタックエンジニア" },
    summary: {
      en: "A full-stack e-commerce and Web3 platform.",
      ja: "フルスタックECおよびWeb3プラットフォーム。",
    },
    description: {
      en: "A full-stack platform combining e-commerce functionality with Web3 integrations.",
      ja: "EC機能とWeb3連携を組み合わせたフルスタックプラットフォーム。",
    },
    contribution: [
      { en: "Frontend development", ja: "フロントエンド開発" },
      { en: "Backend API development", ja: "バックエンドAPI開発" },
      { en: "Database design and management", ja: "データベース設計・管理" },
      { en: "E-commerce workflows", ja: "ECワークフロー" },
      { en: "Web3 integration", ja: "Web3連携" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    results: [
      {
        en: "Full-stack application development across frontend, backend, and database.",
        ja: "フロントエンド、バックエンド、データベースを横断するフルスタック開発。",
      },
      {
        en: "E-commerce functionality integrated with Web3 workflows.",
        ja: "Web3ワークフローと統合されたEC機能。",
      },
      {
        en: "Single codebase for web and Web3 surfaces.",
        ja: "WebとWeb3の画面を単一のコードベースで提供。",
      },
    ],
    featured: true,
    image: "/jar.jfif",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
