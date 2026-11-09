import { projects } from "./projects";
import type { CaseStudyChapter, CaseStudyContent, LocalizedText } from "./types";

function roleChapter(slug: string, intro: LocalizedText): CaseStudyChapter {
  return {
    id: "role",
    title: { en: "Role and scope", ja: "役割と担当範囲" },
    paragraphs: [intro],
    bullets: projects.find((project) => project.slug === slug)!.contribution,
  };
}

export const caseStudies: Record<string, CaseStudyContent> = {
  "blueprint-analysis": {
    slug: "blueprint-analysis",
    outcome: {
      en: "Optimized AI processing and improved retrieval and verification workflows.",
      ja: "AI処理の最適化と、検索・検証ワークフローの改善。",
    },
    chapters: [
      {
        id: "context",
        title: { en: "Context", ja: "背景" },
        paragraphs: [
          {
            en: "Blueprint Analysis checks engineering drawings — dimensions, notes, symbols, tables, and visual references — against a list of requirements. Each requirement is answered with evidence taken from the technical documents rather than a plausible-sounding summary.",
            ja: "設計図解析は、寸法・注記・記号・表・図中参照といったエンジニアリング図面の要素を、要件リストと突き合わせるシステム。各要件は、もっともらしい要約ではなく、技術文書から取り出した根拠に基づいて判定される。",
          },
          {
            en: "The difficulty is not reading the drawing. It is deciding whether the available evidence actually supports a requirement, and keeping that judgement consistent as the document set grows.",
            ja: "難しいのは図面を読むことではなく、手元の根拠が本当にその要件を支えているかを見極め、文書量が増えても判定の一貫性を保つことだった。",
          },
        ],
      },
      {
        id: "problem",
        title: { en: "Problem", ja: "課題" },
        paragraphs: [
          {
            en: "The first version sent a requirement and all of its drawing artifacts into a single model call. It held up on small examples and degraded as the document set grew.",
            ja: "初期バージョンは、1つの要件とその図面一式を1回のモデル呼び出しにまとめて渡していた。小規模な例では機能したが、文書量が増えるにつれて精度が落ちてい行った。",
          },
          {
            en: "Answers grew verbose and hard to audit. Cost and latency varied from run to run, and the same requirement could be judged differently on two consecutive evaluations. Retrieval and reasoning happened in one step, so every requirement re-read the whole context.",
            ja: "出力は冗長になり、監査も難しくなった。コストと遅延は実行ごとに変動し、同じ要件が連続する2回の評価で異なる判定になることもあった。検索と推論が同一ステップで行われるため、要件ごとに文脈全体を読み直していたことが原因だった。",
          },
        ],
      },
      {
        id: "approach",
        title: { en: "Approach", ja: "アプローチ" },
        paragraphs: [
          {
            en: "The rebuild split the pipeline into stages that can be inspected, measured, and replaced on their own.",
            ja: "作り直しでは、パイプラインを個別に確認・計測・差し替えできる段階に分割した。",
          },
        ],
        steps: [
          {
            title: { en: "Build the evidence layer", ja: "根拠レイヤーを作る" },
            body: {
              en: "OCR and document understanding extract text, tables, and symbols from drawings and supporting documents, and keep the source location of each extraction so a requirement can point back to the page it came from.",
              ja: "OCRと文書理解によって、図面と関連文書からテキスト・表・記号を抽出。抽出結果は出典位置とともに保持し、要件から該当ページへ辿れるようにした。",
            },
          },
          {
            title: { en: "Verify instead of summarize", ja: "要約ではなく検証する" },
            body: {
              en: "Retrieval narrows the document set to the passages relevant to one requirement, and a verification step decides whether those passages support it. The output is a verdict with evidence attached, not a narrative.",
              ja: "検索によって要件に関係する箇所まで文書を絞り込み、検証ステップがその箇所で要件を支えられるかを判定する。出力は物語ではなく、根拠が添えられた判定になる。",
            },
          },
        ],
      },
      roleChapter("blueprint-analysis", {
        en: "I worked as the full-stack engineer on the project, from the evaluation dashboard to the AI pipeline and the failure analysis behind it.",
        ja: "評価ダッシュボードからAIパイプライン、その背後の不備調査まで、フルスタックエンジニアとして担当した。",
      }),
    ],
  },

  "chakra-reader": {
    slug: "chakra-reader",
    outcome: {
      en: "A reading assistant with AI-powered reading interaction, real-time voice and text responses, and speech recognition.",
      ja: "AIによる読み上げ対話、リアルタイムの音声・テキスト応答、音声認識を備えた読み上げアシスタント。",
    },
    chapters: [
      {
        id: "context",
        title: { en: "Context", ja: "背景" },
        paragraphs: [
          {
            en: "Chakra Reader is an AI reading assistant. It follows the reader through a document, answers questions about the text, and can respond by voice as well as in writing.",
            ja: "チャクラリーダーはAI読み上げアシスタント。読み手とともに文書を進み、本文についての質問に答え、文章だけでなく音声でも応答する。",
          },
          {
            en: "The interface has to hold a conversation and a document at the same time: the reader's position in the text is part of the context for every answer.",
            ja: "インターフェースは会話と文書を同時に扱う必要がある。読み手が本文のどこにいるかが、すべての応答の文脈の一部になる。",
          },
        ],
      },
      {
        id: "problem",
        title: { en: "Problem", ja: "課題" },
        paragraphs: [
          {
            en: "Reading assistants tend to treat the reader as a passive consumer. They present content without adapting to the reader's pace, or they demand manual input that breaks the flow of reading.",
            ja: "読み上げアシスタントは往々にして読み手を受動的な消費者として扱う。読み手のペースに合わせず一方的に内容を提示するか、読書の流れを断ち切る手動入力を求めるかのどちらかになりがちだ。",
          },
          {
            en: "Real-time voice raises the bar again: the UI has to show partial answers, tolerate interruptions, and stay responsive while audio is still being transcribed.",
            ja: "さらにリアルタイム音声が難易度を上げる。音声が文字起こしされている間も、途中までの応答を表示し、中断を受け入れ、反応し続ける必要がある。",
          },
        ],
      },
      {
        id: "approach",
        title: { en: "Approach", ja: "アプローチ" },
        paragraphs: [
          {
            en: "The work was as much interaction design as integration: deciding what the assistant does while it waits, and what the reader keeps control of.",
            ja: "作業は統合であると同時にインタラクション設計でもあった。待っている間アシスタントが何をするか、読み手が何を握り続けるかを決めることだった。",
          },
        ],
        steps: [
          {
            title: { en: "Design for interruption", ja: "中断できる設計にする" },
            body: {
              en: "Responses stream into the page as they arrive instead of landing as a finished block, so the reader can stop the assistant, re-ask, or keep reading without losing their place.",
              ja: "応答は完成した塊としてではなく、届いた順にページへ流し込む。読み手はいつでもアシスタントを止め、問い直し、位置を失わずに読書を続けられる。",
            },
          },
          {
            title: { en: "Keep one conversation state", ja: "会話の状態を1つに保つ" },
            body: {
              en: "Voice input and typed input feed the same conversation state, so an answer does not depend on which input the reader happened to use.",
              ja: "音声入力もテキスト入力も同じ会話状態に流し込む。どちらの入力を使ったかによって応答が変わらないようにした。",
            },
          },
          {
            title: { en: "Wire the real-time path", ja: "リアルタイム経路をつなぐ" },
            body: {
              en: "WebSockets and streaming responses carry the interaction end to end, with Amazon Transcribe handling speech recognition and server-sent events pushing incremental updates to the UI.",
              ja: "WebSocketとストリーミング応答でやり取りを端から端まで運び、音声認識はAmazon Transcribeが担当。サーバー送信イベントでUIへ差分を反映する。",
            },
          },
        ],
      },
      roleChapter("chakra-reader", {
        en: "I built the assistant's interface and the path between it and the model: interaction design, real-time transport, speech recognition, and API integration.",
        ja: "アシスタントのインターフェースと、そこからモデルまでの経路を担当。インタラクション設計、リアルタイム通信、音声認識、API統合。",
      }),
    ],
  },

  "sake-world": {
    slug: "sake-world",
    outcome: {
      en: "A full-stack e-commerce and Web3 platform combining frontend, backend, database, and Web3 integration.",
      ja: "フロントエンド、バックエンド、データベース、Web3連携を組み合わせたフルスタックEC/Web3プラットフォーム。",
    },
    chapters: [
      {
        id: "context",
        title: { en: "Context", ja: "背景" },
        paragraphs: [
          {
            en: "Sake World is an e-commerce platform with a Web3 side: a product catalog, a conventional checkout, and wallet-based actions for items and community access.",
            ja: "サケワールドはWeb3機能を持つECプラットフォーム。商品カタログ、通常の購入手続き、商品やコミュニティ参加のためのウォレット操作を備える。",
          },
          {
            en: "Two kinds of visitors meet in the same product — customers who expect a fast retail experience, and users who arrive with a wallet already connected.",
            ja: "同じプロダクトに2種類の利用者が交差する。高速な購買体験を期待する顧客と、すでにウォレットをつないで訪れるユーザーだ。",
          },
        ],
      },
      {
        id: "problem",
        title: { en: "Problem", ja: "課題" },
        paragraphs: [
          {
            en: "The platform had to serve a standard storefront and a Web3-enabled experience at the same time. The architectural constraint was keeping the frontend fast and accessible while wiring up backend services, a PostgreSQL database, and Web3 on-ramps without fragmenting the codebase.",
            ja: "標準的なストアフロントとWeb3体験を同時に提供する必要があった。フロントエンドの速度とアクセシビリティを保ちながら、バックエンドサービス、PostgreSQL、Web3のオンボーディング経路を、コードベースを分断せずにつなぐことが制約だった。",
          },
          {
            en: "Duplicating screens for the wallet path would have meant two checkout flows to keep correct, two sets of states to test, and two places for accessibility to regress.",
            ja: "ウォレット経路のために画面を複製すれば、正しさを保つ購入フローが2つ、テストすべき状態が2組、アクセシビリティが後退しうる箇所が2つになる。",
          },
        ],
      },
      {
        id: "approach",
        title: { en: "Approach", ja: "アプローチ" },
        paragraphs: [
          {
            en: "The approach was to keep one model of the data and one path through the flows, and let the Web3 pieces plug into it.",
            ja: "方針は、データのモデルを1つ、フローの経路を1つに保ち、Web3の要素をそこに差し込むことだった。",
          },
        ],
        steps: [
          {
            title: { en: "Model the catalog once", ja: "カタログを一度だけ定義する" },
            body: {
              en: "Products, orders, inventory, and users live in PostgreSQL behind a single API, so the storefront and the wallet flows read and write the same records.",
              ja: "商品、注文、在庫、ユーザーは単一のAPIの背後でPostgreSQLに置く。ストアフロントもウォレット経路も同じレコードを読み書きする。",
            },
          },
          {
            title: { en: "Make the flows composable", ja: "フローを組み合わせ可能にする" },
            body: {
              en: "Checkout and wallet actions are built as multi-step flows that can be entered from either surface, so a wallet action does not need its own copy of the cart, address, or confirmation screens.",
              ja: "購入とウォレット操作は、どちらの画面からでも入れる多段階フローとして実装。ウォレット操作のためにカート、住所、確認画面を複製する必要がない。",
            },
          },
          {
            title: { en: "Put payments behind the order", ja: "決済を注文の背後に置く" },
            body: {
              en: "Payment integration sits behind the order workflow, so an order is created the same way whether it started in the storefront or from a wallet action.",
              ja: "決済連携は注文ワークフローの背後に置く。ストアフロントから始まった注文もウォレット操作から始まった注文も、同じ方法で生成される。",
            },
          },
        ],
      },
      roleChapter("sake-world", {
        en: "I worked across the storefront, the API, and the database, and connected the Web3 pieces to the same order and user records.",
        ja: "ストアフロント、API、データベースを横断して担当し、Web3の要素を同じ注文・ユーザーレコードにつないだ。",
      }),
    ],
  },
};
