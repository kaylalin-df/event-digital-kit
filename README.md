# 活動數位包 Event Digital Kit

客戶活動現場用的三件式數位工具範本，**只改一個設定檔就能換成下一場活動**，不用寫程式、不用外包、免費上線。

源自 2026 美光環保月「美日森活節」（2026/07）實際使用的三個網頁：互動檢定 1,142 次開啟、903 次完成（通關率 79.1%），外包費用由約 NT$78,350 降為 NT$0。本範本把當時的做法抽成可重複套用的版本。

| 頁面 | 檔案 | 用途 | 範例 |
|---|---|---|---|
| 互動檢定 | `index.html` | 手機答題、答錯看解析重答、通關畫面截圖換獎品，把線上互動導回實體攤位 | [開啟](https://kaylalin-df.github.io/event-digital-kit/) |
| 語音導覽 | `guide.html` | 手機內建語音逐句朗讀＋高亮，支援英文／中文／日文，掃 QR Code 即用 | [開啟](https://kaylalin-df.github.io/event-digital-kit/guide.html) |
| 工作人員訓練頁 | `training.html` | 觀念、名詞、話術、動線、Q&A、檢查清單；檢定答案自動從題庫帶入 | [開啟](https://kaylalin-df.github.io/event-digital-kit/training.html) |

美日森活節原版：[互動檢定](https://kaylalin-df.github.io/micron-2026-eco-week/)｜[英文導覽](https://kaylalin-df.github.io/retank-audio-guide/)｜[訓練頁](https://kaylalin-df.github.io/micron-2026-eco-week/training.html)

---

## 套用到新活動（約 30 分鐘）

1. **複製範本**：在 GitHub 按右上角綠色的 **Use this template → Create a new repository**，取一個活動名稱（例如 `expo-2026-guide`）。
   不會用 GitHub 的話，按 **Code → Download ZIP** 下載也可以。
2. **改 `config.js`**：用記事本或 VS Code 打開，照著中文註解改：
   - `event`：活動名稱、主辦、品牌、LOGO
   - `theme`：主色與深底色
   - `quiz`：題目、選項、解析、獎品（`correct: true` 標正確答案；選項數量不限）
   - `guide`：導覽語言與每一站的導覽稿
   - `training`：觀念、名詞、話術、各展區內容、Q&A、檢查清單
3. **換圖片**：把活動 LOGO、獎品照片放進 `assets/`，並在 `config.js` 改檔名。沒有圖就留空 `""`，頁面會自動改用文字。
4. **本機預覽**：直接用瀏覽器打開 `index.html` 即可看到效果。
5. **上線**：GitHub repository → **Settings → Pages → Branch 選 `main` → Save**，約 1 分鐘後網址會出現在同一頁。
6. **做 QR Code**：把網址貼到任何 QR Code 產生器，印在展板上。

> 也可以直接在 Claude Code 說：「用 event-digital-kit 幫我做一份 ○○ 活動的檢定，題目是……」，AI 會幫你改好 `config.js`。

## 成效追蹤（選用）

1. 到 [Umami Cloud](https://cloud.umami.is) 免費註冊 → **Add website** → 複製 **Website ID**。
2. 貼到 `config.js` 的 `umamiWebsiteId`。
3. 活動結束後到 Umami 後台 → **Events**，可看到下列事件次數：

| 事件 | 意義 |
|---|---|
| `app_open` | 開啟檢定頁 |
| `complete` | 完成全部題目（通關） |
| `guide_open`／`guide_play` | 開啟導覽頁／按下播放 |
| `training_open` | 開啟訓練頁 |

通關率 = `complete ÷ app_open`，可直接寫進結案報告。

## 注意事項

- **語音導覽**使用手機內建語音，不同手機音色略有差異；請提醒參與者打開媒體音量、關閉靜音。
- **現場網路不穩**時：三個頁面都是純 HTML，沒有需要編譯的程式；圖片建議壓在 300KB 以下。
- **客戶資料**：頁面不收集個資（暱稱只存在參與者自己的手機畫面），可放心公開。
- 範本內的題目與導覽稿是「循環生活節」示範內容，請務必換成實際活動內容。

## 檔案結構

```
event-digital-kit/
├── config.js        ← 換活動只改這個
├── index.html       互動檢定
├── guide.html       語音導覽
├── training.html    工作人員訓練頁
├── kit.js           共用程式（配色、成效追蹤、LOGO）
└── assets/          LOGO、獎品圖片
```

維護：行銷部 林群雅 Kayla Lin｜以 Claude Code 建置
