/* =====================================================================
   活動數位包｜設定檔
   換活動只要改這一個檔案：活動名稱、顏色、題目、導覽稿、訓練內容。
   文字裡用 **兩個星號** 包起來的字會變粗體。
   ===================================================================== */
window.EVENT_KIT = {

  /* ---------- 1. 活動基本資料（三個頁面共用） ---------- */
  event: {
    name: "循環生活節",                     // 活動名稱
    tagline: "從回收桶到新生活的循環之旅",   // 副標
    organizer: "主辦單位",                  // 左上角顯示的主辦名稱
    brand: "你的品牌",                      // 右上角顯示的品牌名稱
    logo: "assets/logo-sample.svg",         // 活動 LOGO；留空 "" 會改顯示活動名稱文字
    footer: "© 2026 循環生活節"             // 頁尾文字
  },

  /* ---------- 2. 配色 ---------- */
  theme: {
    primary: "#1FA24C",   // 主色（按鈕、標籤）
    accent:  "#A3E635",   // 亮色（深底上的強調字）
    deep:    "#0b3f2c",   // 深底色
    mid:     "#0e4d36"    // 深底漸層的另一端
  },

  /* ---------- 3. 成效追蹤（Umami） ----------
     到 cloud.umami.is 新增網站後，把 Website ID 貼在這裡。
     留空 "" 就不追蹤。會自動記錄的事件：
       app_open（開啟檢定）、complete（完成檢定）、
       guide_open／guide_play（導覽開啟／播放）、training_open（訓練頁開啟） */
  umamiWebsiteId: "",

  /* ---------- 4. 互動檢定（index.html） ---------- */
  quiz: {
    title: "循環達人檢定",
    intro: "共 3 題，答錯會提供解析、重答該題即可，全部答對就通關！",
    nicknameLabel: "輸入挑戰暱稱 / Nickname",
    nicknamePlaceholder: "例如：循環先鋒小美",
    startLabel: "開始挑戰",
    successText: "恭喜通過「循環達人檢定」，你已經掌握循環經濟的基本觀念！",
    prize: {
      name: "再生材質手機掛繩",
      note: "送完為止",
      image: "assets/prize-sample.svg",     // 獎品照片；留空 "" 會顯示禮物圖示
      redeemText: "請「截圖」並向現場工作人員出示此畫面，即可領取"
    },
    funFact: {
      title: "循環小知識",
      text: "回收塑膠經過清洗、破碎、熔融、造粒，再抽紗編織，就能變成新的繩帶。"
    },
    // 題目：選項數量不限，correct: true 的是正確答案；hint 是給工作人員的引導句（顯示在訓練頁）
    questions: [
      {
        question: "Q1：「循環經濟」和過去「用完就丟」的模式，最大的差別是什麼？",
        options: [
          { text: "東西用完後回收、再製、再使用，讓資源不斷繞圈", correct: true },
          { text: "東西做得更便宜，壞了直接買新的" },
          { text: "把垃圾集中運到更遠的地方處理" }
        ],
        explanation: "過去是一條直線：開採 → 製造 → 使用 → 丟棄。循環經濟把直線折成一個圈，東西用完不丟，回收再製後繼續使用。",
        hint: "回想第 1 區的展板：直線和圓圈兩張圖，差別在哪裡？"
      },
      {
        question: "Q2：什麼是「升級再造（Upcycling）」？",
        options: [
          { text: "把材料打碎，做成價值較低的次級品" },
          { text: "保留材料原本的特性，變成價值更高的新產品", correct: true },
          { text: "把舊產品直接送進焚化爐發電" }
        ],
        explanation: "打碎做成次級品叫「降級回收」，材料品質會愈變愈差。升級再造則是保留材料的價值，讓它變成更好的新產品。",
        hint: "第 2 區有寫「降級」和「升級」的差別。"
      },
      {
        question: "Q3：寶特瓶丟進回收桶之前，建議先做哪件事？",
        options: [
          { text: "裝滿水增加重量" },
          { text: "和一般垃圾裝在同一個袋子" },
          { text: "倒空、沖洗並壓扁", correct: true }
        ],
        explanation: "倒空、沖洗可以避免殘留飲料污染其他回收物，壓扁則能節省運送空間，讓回收更有效率。",
        hint: "第 3 區的回收三步驟。"
      }
    ]
  },

  /* ---------- 5. 語音導覽（guide.html） ----------
     用手機內建語音朗讀 script，逐句高亮；transcript 是完整逐字稿（可省略）。 */
  guide: {
    lang: "en-US",                          // 朗讀語言：英文 en-US、中文 zh-TW、日文 ja-JP
    pill: "Audio Guide · English",
    title: "From Waste to New Life",
    subtitle: "英文語音導覽 · A circular story in three boards",
    duration: "Full tour ≈ 2 minutes",
    howto: "Tap **▶ Play** under each board and your phone will read the guide aloud. Turn your media volume up and switch off silent mode.",
    playLabel: "▶ Play",
    pauseLabel: "❚❚ Pause",
    resumeLabel: "▶ Resume",
    stopLabel: "Stop",
    transcriptLabel: "Full transcript · 完整導覽文字",
    unsupported: "Your browser does not support speech playback. Please read the text below, or open this page in Safari or Chrome.",
    boards: [
      {
        stage: "Board 1 · 第一站",
        title: "A Line Becomes a Circle",
        subtitle: "從直線到圓圈：什麼是循環經濟",
        script: "Board One. For a long time, our economy ran in a straight line: we took resources, made products, used them, and threw them away. A circular economy bends that line into a loop. Products are collected, remade, and used again, so the same resources keep working for us.",
        transcript: "",
        note: "👀 Compare the two diagrams on this board: the straight line and the loop."
      },
      {
        stage: "Board 2 · 第二站",
        title: "Upcycling, Not Downcycling",
        subtitle: "升級再造，而不是降級回收",
        script: "Board Two. Not all recycling is equal. Downcycling crushes a material into something of lower value. Upcycling keeps the strengths of the original material and turns it into something better. Look at the samples beside this board and see how waste becomes a new product.",
        transcript: "",
        note: ""
      },
      {
        stage: "Board 3 · 第三站",
        title: "Your Turn",
        subtitle: "換你動手：完成檢定領好禮",
        script: "Board Three. Now it is your turn. Scan the code on this board and answer three quick questions. Finish the challenge, show your screen to our staff, and take home a gift made from recycled material. Thank you for joining the tour.",
        transcript: "",
        note: ""
      }
    ]
  },

  /* ---------- 6. 工作人員訓練頁（training.html） ---------- */
  training: {
    title: "展場工作人員教育訓練",
    subtitle: "第一次接觸環保議題也沒關係，照著這頁走一遍就能上場。",
    // 開始之前一定要懂的觀念
    concepts: [
      {
        title: "觀念 1｜什麼是循環經濟？",
        paragraphs: [
          "過去的經濟模式是一條直線：**開採原料 → 製造 → 使用 → 丟棄**。",
          "**循環經濟**把這條直線折成一個圈：東西用完不丟，回收、再製、再使用。"
        ]
      },
      {
        title: "觀念 2｜降級回收 vs 升級再造",
        paragraphs: [
          "**降級回收**：把材料打碎，做成價值較低的次級品。",
          "**升級再造**：保留材料原本的價值，變成價值更高的新產品。"
        ]
      }
    ],
    // 名詞對照表
    glossary: [
      { term: "循環經濟", meaning: "資源用完不丟棄，回收再製後繼續用。" },
      { term: "升級再造", meaning: "不打碎降級，保留材料價值變成更高價值的產品。" },
      { term: "再生材質", meaning: "由回收物重新製成的材料，例如回收塑膠做成的紗線。" }
    ],
    // 開場話術
    pitch: {
      oneLiner: "這場活動用三塊展板，帶大家看廢棄物如何變成新產品。",
      script: "歡迎來到循環生活節！今天帶你花五分鐘看廢棄物怎麼重生，最後還有小禮物可以拿！"
    },
    // 展區動線：每一區的背景、重點、話術、常被追問的問題
    zones: [
      {
        tag: "ZONE 1",
        title: "從直線到圓圈",
        background: "先弄懂背景：這一區對照「用完就丟」和「循環再用」兩種模式。",
        points: ["直線模式會讓資源愈用愈少", "循環模式讓同一份資源不斷繞圈"],
        script: "你看這兩張圖，一條直線、一個圓圈。以前東西用完就丟，現在我們讓它繞回來再用一次。",
        followUp: { q: "回收不是早就在做了嗎？", a: "回收只是起點，要真的再製成新產品、再被使用，循環才算完成。" }
      },
      {
        tag: "ZONE 2",
        title: "升級再造",
        background: "先弄懂背景：回收後的去向有高低之分，這一區展示升級再造的實品。",
        points: ["降級回收會讓材料品質愈變愈差", "升級再造保留材料的價值"],
        script: "這個產品的前身是廢棄物。我們沒有把它打碎，而是保留它原本的優點，做成更好的東西。",
        followUp: { q: "為什麼不直接打碎回收？", a: "打碎是降級，材料價值會一路變差；保留特性才能發揮最大價值。" }
      },
      {
        tag: "ZONE 3",
        title: "檢定與禮品",
        background: "流程：引導掃 QR Code → 回答 3 題 → 出示通關畫面 → 發放禮品。",
        points: ["參與者卡住時不要直接給答案，引導他回對應展區找", "禮品數量有限，統一說「送完為止」"],
        script: "最後一關！掃這個 QR Code 回答三題，通關就能領一份再生材質的小禮物。",
        followUp: null
      }
    ],
    // 現場常見問題
    faq: [
      { q: "「回收」跟「再生」有什麼不一樣？", a: "回收是把用完的東西收回來、分類；再生是把回收物實際變成新材料或新產品。" },
      { q: "禮品還有嗎？", a: "數量有限、送完為止，不承諾補發。" }
    ],
    // 上場前檢查清單
    checklist: [
      "已對照展板實際走過一遍動線",
      "能不看稿說出開場話術",
      "背熟檢定題目的答案；參與者卡住時用引導句，不直接公布答案",
      "禮品統一口徑：送完為止"
    ],
    sources: "內容來源：活動企劃簡報、現場展板設計稿。"
  }
};
