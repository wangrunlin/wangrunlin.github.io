# Leo Wang · Open Source

wangrunlin.github.io 的开源主页。英文、简体中文与繁体中文静态页面，展示精选开源项目、代码贡献入口和三个 AI 产品外链。

完整个人网站已迁移到 wangrunlin/wangrunlin.com；原有文章路径保留明确迁移链接页，清单在 docs/previous-personal-routes.json。原内容和图片仍可在 Git 历史及 .com 仓库找到。

2026-09-11 已提交并通过 GitHub Actions 发布：https://wangrunlin.github.io/ 。GitHub Pages Settings 的自定义域名已解除；https://wangrunlin.com/ 由同名仓库的 Cloudflare 静态 Worker 承载。22 个旧项目路径从 .com 以 301 转至各自 github.io 地址，已公开验证无跳转循环。

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

页面内容与样式位于 src/components/OpenSourcePage.astro。迁移页只提供明确链接，没有冒充 HTTP 301，也没有重复收录个人文章。
