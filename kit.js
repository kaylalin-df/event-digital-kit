/* 活動數位包｜三個頁面共用的小工具（一般換活動不需要改這個檔） */
(function () {
  var K = window.EVENT_KIT || {};

  // 套用配色
  var theme = K.theme || {};
  var vars = { primary: "--primary", accent: "--accent", deep: "--deep", mid: "--mid" };
  Object.keys(vars).forEach(function (k) {
    if (theme[k]) document.documentElement.style.setProperty(vars[k], theme[k]);
  });

  // Umami 成效追蹤：有填 Website ID 才載入；載入前送出的事件先排隊
  var queue = [];
  if (K.umamiWebsiteId) {
    var s = document.createElement("script");
    s.defer = true;
    s.src = K.umamiScriptUrl || "https://cloud.umami.is/script.js";
    s.setAttribute("data-website-id", K.umamiWebsiteId);
    s.onload = function () {
      queue.forEach(function (name) { try { window.umami.track(name); } catch (e) {} });
      queue = [];
    };
    document.head.appendChild(s);
  }
  window.kitTrack = function (name) {
    try {
      if (window.umami) window.umami.track(name);
      else if (K.umamiWebsiteId) queue.push(name);
    } catch (e) {}
  };

  // 文字跳脫，避免設定檔或暱稱裡的符號破壞版面
  window.kitEsc = function (str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };
  // 跳脫後把 **文字** 轉成粗體
  window.kitFmt = function (str) {
    return window.kitEsc(str).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  };

  // 活動 LOGO：有圖用圖，沒圖或載入失敗就顯示活動名稱
  window.kitLogo = function (el, cls) {
    var ev = K.event || {};
    function text() { el.innerHTML = '<span class="' + cls + '-text">' + window.kitEsc(ev.name) + "</span>"; }
    if (!ev.logo) { text(); return; }
    var img = document.createElement("img");
    img.className = cls;
    img.alt = ev.name || "";
    img.onerror = text;
    img.src = ev.logo;
    el.innerHTML = "";
    el.appendChild(img);
  };

  // 樹影剪影（程式生成，不需要圖檔）
  window.kitTrees = function (w, count, base, minH, varH, depth) {
    var d = "M0," + (base + depth) + " L0," + base + " ";
    var step = w / count;
    for (var i = 0; i < count; i++) {
      var x = i * step, h = minH + ((i * 53) % varH), cx = x + step / 2;
      d += "L" + x.toFixed(1) + "," + base + " L" + cx.toFixed(1) + "," + (base - h).toFixed(1) +
           " L" + (x + step).toFixed(1) + "," + base + " ";
    }
    return d + "L" + w + "," + base + " L" + w + "," + (base + depth) + " Z";
  };
})();
