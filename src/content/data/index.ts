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
    label: "COSCUP",
    href: "https://coscup.org/2024/zh-TW/session/VSD9GU",
  },
  {
    label: "npmjs",
    href: "https://www.npmjs.com/~wangrunlin",
  },
  {
    label: "天星数字游民社区",
    href: "http://xhslink.com/a/2WL2Q9CKWhFV",
  },
  {
    label: "天府文化ChengduCulture",
    href: "https://mp.weixin.qq.com/s/6jBAB8o3j1swpbFYlbj5TQ",
  },
];
