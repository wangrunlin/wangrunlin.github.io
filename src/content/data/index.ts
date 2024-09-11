import type { iconPaths } from "../../components/IconPaths";

/** Icon links to social media — edit these with links to your profiles! */
export const iconLinks: {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
  {
    label: "X / Twitter",
    href: "https://x.com/wangrunlin_",
    icon: "x-logo",
  },
  {
    label: "GitHub",
    href: "https://github.com/wangrunlin",
    icon: "github-logo",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alin.run/",
    icon: "instagram-logo",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@wangrunlin/",
    icon: "youtube-logo",
  },
  {
    label: "Telegram",
    href: "https://t.me/wangrunlin",
    icon: "telegram-logo",
  },
  {
    label: "Mastodon",
    href: "https://mastodon.social/@wangrunlin",
    icon: "mastodon-logo",
  },
  // { label: 'Douban', href: 'https://www.douban.com/wangrunlin/', icon: 'douban-logo' },
  // { label: 'Bilibili', href: 'https://www.bilibili.com', icon: 'bilibili-logo' },
  // { label: 'xiaohongshu', href: 'https://www.xiaohongshu.com', icon: 'xiaohongshu-logo' },
  {
    label: "wechat",
    href: "/wechat.png",
    icon: "wechat-logo",
  },
];

export const mentions: {
  label: string;
  href: string;
}[] = [
  {
    label: "jsonresume-theme-latte",
    href: "https://www.npmjs.com/package/jsonresume-theme-latte",
  },
  {
    label: "open-digger-cli",
    href: "https://www.npmjs.com/package/open-digger-cli",
  },
];
