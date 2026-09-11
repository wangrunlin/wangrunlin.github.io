# Leo Wang · Open Source

wangrunlin.github.io 的开源主页草稿。英文、简体中文与繁体中文静态页面，展示精选开源项目、代码贡献入口和三个 AI 产品外链。

完整个人网站已准备迁移到 wangrunlin/wangrunlin.com；原有文章路径保留明确迁移链接页，清单在 docs/previous-personal-routes.json。原内容和图片仍可在 Git 历史及 .com 仓库找到。

**尚未提交、未发布、未移除 GitHub Pages Settings 的自定义域名。** 删除 CNAME 文件不会解除 Actions 站点绑定，须在 .com 新站准备就绪后协调切换。

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

页面内容与样式位于 src/components/OpenSourcePage.astro。迁移页只提供明确链接，没有冒充 HTTP 301，也没有重复收录个人文章。
