export const showDefaultLang = false;

export const languagesRegex = /^\/?(en|zh-cn|zh-tw)/;

export const languages = {
  en: "English",
  "zh-cn": "简体中文",
  "zh-tw": "繁体中文",
};

export const defaultLang = "en";

export const ui = {
  en: {
    title: "Leo Wang",
    notFound: "Not Found",
    "home.title": "Hello, my name is Leo Wang",
    "home.description":
      "I am a Creative Developer who is currently based in China.",
    "home.viewAll": "View All",
    "about.title": "About",
    "about.description":
      "Thanks for stopping by. Read below to learn more about myself and my background.",
    "about.imageAlt":
      "Leo Wang wearing glasses working in a serene environment, with green plants outside the window in the background.",
    "work.title": "My Work",
    "work.description": "Learn about my most recent projects",
    "work.tagline":
      "See my most recent projects below to get an idea of my past experience.",
    "now.title": "Now",
    "now.description": "Now living, working, and playing.",
    "404.title": "Page Not Found",
    "404.description": "404 Error — this page was not found",
  },
  "zh-cn": {
    title: "王润林",
    notFound: "未找到",
    "home.title": "你好，我的名字是王润林（阿林）",
    "home.description": "我是一个创意开发者，目前居住在中国。",
    "home.viewAll": "查看所有",
    "about.title": "关于",
    "about.description":
      "感谢您的访问。阅读以下内容，了解更多关于我自己的背景。",
    "about.imageAlt":
      "王润林（阿林）戴着眼镜在一个宁静的环境中工作，背景是窗外有绿色植物。",
    "work.title": "我的工作",
    "work.description": "了解王润林最近的最新项目",
    "work.tagline": "查看我最近的项目的详细信息，以了解我的过去经验。",
    "now.title": "现在",
    "now.description": "现在生活，工作，玩耍。",
    "404.title": "页面未找到",
    "404.description": "404 错误 — 此页面未找到",
  },
  "zh-tw": {
    title: "王潤林",
    notFound: "未找到",
    "home.title": "你好，我的名字是王潤林（阿林）",
    "home.description": "我是一個創意開發者，目前居住在中國。",
    "home.viewAll": "查看所有",
    "about.title": "關於",
    "about.description":
      "感謝您的訪問。閱讀以下內容，了解更多關於我自己的背景。",
    "about.imageAlt":
      "王潤林（阿林）戴著眼鏡在一個寧靜的環境中工作，背景是窗外有綠色植物。",
    "work.title": "我的工作",
    "work.description": "了解王潤林最近的最新項目",
    "work.tagline": "查看我最近的項目的詳細信息，以了解我的過去經驗。",
    "now.title": "現在",
    "now.description": "現在生活，工作，玩耍。",
    "404.title": "頁面未找到",
    "404.description": "404 錯誤 — 此頁面未找到",
  },
} as const;
